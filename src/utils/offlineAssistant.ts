import { Business, ChatMessage, Language } from '../types';
import { INITIAL_BUSINESSES } from '../data/businesses';

interface IntentMatch {
  categoryId?: string;
  subcategories?: string[];
  keywords: string[];
  isUrgent?: boolean;
  needsStudentDiscount?: boolean;
  needsWeChat?: boolean;
  needsFreeQuote?: boolean;
  targetArea?: string;
}

export function queryOfflineAssistant(
  userQuery: string,
  businesses: Business[],
  lang: Language
): ChatMessage {
  const queryLower = userQuery.toLowerCase().trim();

  // Keyword intent mapping
  const foodKeywords = ['吃', '饿', '餐', '面', '川菜', '辣', '米线', '火锅', '早茶', '点心', '烧鸭', '叉烧', '奶茶', '甜品', '夜宵', '外卖', 'food', 'eat', 'dinner', 'lunch', 'restaurant', 'noodle', 'spicy', 'boba', 'tea', 'dim sum', 'bbq'];
  const renoKeywords = ['装', '修', '漏水', '水管', '下水道', '马桶', '水龙头', '暖气', '空调', '冷暖', '电工', '屋顶', '天沟', '地下室', '瓷砖', '橱柜', '翻新', 'heat', 'furnace', 'plumb', 'pipe', 'leak', 'ac', 'renovate', 'basement', 'roof', 'gutter', 'electric'];
  const legalKeywords = ['律', '法', '公证', '买房交接', 'closing', '过户', '产权', '移民', '学签', '工签', 'pr', 'pgwp', 'oinp', 'ee', '合同', '租约', '公司注册', 'notary', 'legal', 'lawyer', 'visa', 'permit', 'lease', 'incorporation'];
  const autoKeywords = ['车', '换胎', '雪胎', '机油', '刹车', '修车', '喷漆', '钣金', '凹痕', '事故', '理赔', '动平衡', 'auto', 'car', 'tire', 'brake', 'oil change', 'mechanic', 'dent', 'collision'];
  const acctKeywords = ['报税', '退税', '会计', 'cpa', 't2202', '学费', 'cra', '公司税', 't2', '记账', '查税', 'tax', 'accounting', 'bookkeeping', 'audit', 'refund'];
  const realEstateKeywords = ['买房', '卖房', '租房', '公寓', 'condo', '学区房', '投资房', '托管', 'house', 'realtor', 'real estate', 'apartment', 'rent'];
  const healthKeywords = ['疼', '痛', '中医', '针灸', '推拿', '按摩', '颈椎', '腰', 'rmt', '拔罐', '保险直赔', 'clinic', 'tcm', 'acupuncture', 'massage', 'neck pain', 'back pain'];
  const eduKeywords = ['辅导', '竞赛', '数学', 'cs', '欧几里得', 'ccc', '微积分', '补习', '导师', 'tutor', 'stem', 'contest', 'euclid', 'calculus'];

  let matchedCategory: string | undefined;
  const isUrgent = /紧急|急|漏水|爆裂|打不着火|冷|freeze|urgent|emergency|now|leak/i.test(queryLower);
  const needsStudentDiscount = /学生|折扣|便宜|省钱|student|discount|cheap/i.test(queryLower);
  const needsWeChat = /微信|wechat|扫码/i.test(queryLower);
  const nearUW = /uw|大学|phillip|学校|campus|步行|walk/i.test(queryLower);

  // Determine primary category
  if (foodKeywords.some(k => queryLower.includes(k))) matchedCategory = 'food';
  else if (renoKeywords.some(k => queryLower.includes(k))) matchedCategory = 'renovation';
  else if (legalKeywords.some(k => queryLower.includes(k))) matchedCategory = 'legal';
  else if (autoKeywords.some(k => queryLower.includes(k))) matchedCategory = 'auto';
  else if (acctKeywords.some(k => queryLower.includes(k))) matchedCategory = 'accounting';
  else if (realEstateKeywords.some(k => queryLower.includes(k))) matchedCategory = 'real_estate';
  else if (healthKeywords.some(k => queryLower.includes(k))) matchedCategory = 'health';
  else if (eduKeywords.some(k => queryLower.includes(k))) matchedCategory = 'education';

  // Sub-query specificity
  let subMatches: Business[] = [];
  if (matchedCategory) {
    subMatches = businesses.filter(b => b.categoryId === matchedCategory);
  } else {
    // General keyword search across businesses
    subMatches = businesses.filter(b => {
      const haystack = `${b.nameZh} ${b.nameEn} ${b.descriptionZh} ${b.descriptionEn} ${b.servicesZh.join(' ')} ${b.servicesEn.join(' ')}`.toLowerCase();
      return queryLower.split(/\s+/).some(token => token.length > 1 && haystack.includes(token));
    });
  }

  // Refine matching scores
  const scored = (subMatches.length > 0 ? subMatches : businesses).map(b => {
    let score = 0;
    const allText = `${b.nameZh} ${b.nameEn} ${b.taglineZh} ${b.taglineEn} ${b.descriptionZh} ${b.descriptionEn} ${b.servicesZh.join(' ')} ${b.perksZh.join(' ')}`.toLowerCase();

    // Check specific terms
    if (queryLower.includes('水') && allText.includes('水')) score += 5;
    if (queryLower.includes('暖') && allText.includes('暖气')) score += 6;
    if (queryLower.includes('面') && allText.includes('面')) score += 6;
    if (queryLower.includes('辣') && allText.includes('川菜')) score += 6;
    if (queryLower.includes('甜品') && allText.includes('甜品')) score += 6;
    if (queryLower.includes('学签') && allText.includes('签证')) score += 6;
    if (queryLower.includes('交接') && allText.includes('交接')) score += 6;
    if (queryLower.includes('胎') && allText.includes('胎')) score += 6;
    if (queryLower.includes('税') && allText.includes('税')) score += 6;
    if (queryLower.includes('公寓') && allText.includes('公寓')) score += 6;
    if (queryLower.includes('针灸') && allText.includes('针灸')) score += 6;
    if (queryLower.includes('竞赛') && allText.includes('竞赛')) score += 6;

    if (isUrgent && b.hours.open === '00:00' && b.hours.close === '23:59') score += 5;
    if (needsStudentDiscount && b.perksZh.some(p => p.includes('学生') || p.includes('9折'))) score += 3;
    if (nearUW && parseFloat(b.distanceFromUW) <= 1.0) score += 4;
    score += b.rating;

    return { business: b, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const topRecommendations = scored.slice(0, 3).map(s => s.business);

  // Craft context-aware responses
  let textZh = '';
  let textEn = '';
  let matchReasonZh = '';
  let matchReasonEn = '';
  let suggestedFollowUpsZh: string[] = [];
  let suggestedFollowUpsEn: string[] = [];

  if (matchedCategory === 'food') {
    textZh = `为您在滑铁卢精选了 ${topRecommendations.length} 家口碑极佳的华人餐厅！无论是UW大学区步行可达的传统手拉牛肉面、地道麻辣川菜，还是港式烧腊茶餐厅，都能满足您的中国胃。`;
    textEn = `I have selected ${topRecommendations.length} top-rated authentic Chinese restaurants in Waterloo for you. Whether you crave hand-pulled noodles, spicy Sichuan, or classic Hong Kong style dim sum, here are the best local spots!`;
    matchReasonZh = `根据您的餐饮需求及滑铁卢本地华人评价精选，支持外卖或微信预订。`;
    matchReasonEn = `Curated based on food preference, verified ratings, and proximity to Waterloo university campuses.`;
    suggestedFollowUpsZh = ['哪家距离滑大UW最近？', '有没有提供学生9折优惠？', '有无深夜营业的夜宵甜品？'];
    suggestedFollowUpsEn = ['Which spot is closest to UW?', 'Do they offer student discounts?', 'Are any open late for midnight cravings?'];
  } else if (matchedCategory === 'renovation') {
    if (isUrgent) {
      textZh = `⚠️ 检测到您有紧急房屋维修需求！已为您筛选出滑铁卢提供 **24小时紧急抢修** 及 **持牌水暖电工** 服务的华人专业工程团队，建议立即拨打电话或微信联络以防损失扩大。`;
      textEn = `⚠️ Urgent home repair detected! I have shortlisted licensed Chinese plumbers and HVAC technicians in Waterloo offering 24/7 emergency response. Call or WeChat them right away.`;
      matchReasonZh = `优先匹配拥有安省TSSA与红印章执照、支持紧急出勤的专业师傅。`;
      matchReasonEn = `Prioritized licensed TSSA & Red Seal certified contractors with 24/7 dispatch.`;
    } else {
      textZh = `为您找到了滑铁卢本地持牌且拥有全额商业保险的华人装修与维修专家。涵盖全屋地下室翻新、冷暖空调升级（可协助申请安省补贴）、专业管道疏通及屋顶防水工程。`;
      textEn = `Here are licensed and fully insured Chinese renovation and repair contractors in Waterloo Region. They handle legal basement suites, HVAC upgrades with Ontario rebates, drain snaking, and roof replacements.`;
      matchReasonZh = `严格筛选有安省执照、正规合同、五年质保且提供免费上门量房估价的商户。`;
      matchReasonEn = `Selected based on Ontario contractor licensing, warranty guarantees, and free in-home quotation.`;
    }
    suggestedFollowUpsZh = ['师傅可以免费上门估价吗？', '地下室合法化需要申请市政Permit吗？', '冬天暖气不热紧急电话是多少？'];
    suggestedFollowUpsEn = ['Do they offer free in-home estimates?', 'Do legal basements need city permits?', 'What is the 24/7 heating emergency number?'];
  } else if (matchedCategory === 'legal') {
    textZh = `在滑铁卢处理法律事务，沟通与专业度至关重要。为您推荐本地资深华人律师团队：涵盖留学生学签/工签/PR移民申办、买房卖房Closing产权交接公证，以及商用租约与公司成立法务。`;
    textEn = `For legal and notary matters in Waterloo, clear communication is essential. Here are experienced bilingual Chinese lawyers specializing in student immigration/PR, real estate closings, and commercial leases.`;
    matchReasonZh = `精选安省律师公会会员（LSO）及持牌移民顾问（CICC），流程严谨且支持远程在线签约。`;
    matchReasonEn = `Selected verified Law Society of Ontario (LSO) and CICC licensed professionals supporting remote virtual signing.`;
    suggestedFollowUpsZh = ['买房交接公证需要提前多久预约？', '留学生毕业工签PGWP办理周期？', '有提供首次免费咨询吗？'];
    suggestedFollowUpsEn = ['How early should I book for a closing?', 'What is the processing time for PGWP?', 'Is there a free initial consultation?'];
  } else if (matchedCategory === 'auto') {
    textZh = `为您推荐滑铁卢本地华人评价极高、收费厚道的汽修厂！技师均持有安省310S汽车执照，提供雪胎团购更换、动平衡、全合成机油保养及事故车身无尘喷漆理赔。`;
    textEn = `Here are the most trusted Chinese automotive garages in Waterloo with licensed 310S mechanics. They specialize in winter tire packages, synthetic oil changes, computerized scans, and insurance bodywork.`;
    matchReasonZh = `按车主口碑、技师持牌资质及透明收费标准筛选，支持留学生特惠。`;
    matchReasonEn = `Recommended based on local driver reviews, certified 310S credentials, and honest pricing.`;
    suggestedFollowUpsZh = ['换雪胎现在的收费是多少？', '可以协助走保险理赔并提供代步车吗？', '需要提前在微信上预约吗？'];
    suggestedFollowUpsEn = ['What is the winter tire change rate?', 'Do they help with insurance claims and loaner cars?', 'Can I book an appointment via WeChat?'];
  } else if (matchedCategory === 'accounting') {
    textZh = `为您匹配了滑铁卢特许专业会计师（CPA）事务所。专长于留学生学费抵税额最大化、租金退税补助申请，以及中小型企业T2年终报税与CRA税务合规。`;
    textEn = `Here are certified Chartered Professional Accountants (CPA) in Waterloo. They excel at maximizing student tuition tax credits, rent subsidies, corporate T2 filings, and CRA compliance.`;
    matchReasonZh = `加拿大持牌CPA主理，支持全流程微信或网页无纸化材料递交与电子签名。`;
    matchReasonEn = `Led by Canadian CPAs with a 100% contactless digital submission and e-signature workflow.`;
    suggestedFollowUpsZh = ['留学生学费抵税额可以保留到工作后吗？', '公司T2报税截止日期是什么时候？', '报税支持全线上办理吗？'];
    suggestedFollowUpsEn = ['Can tuition credits carry forward to post-grad work?', 'When is the deadline for corporate T2 filing?', 'Can I submit tax documents entirely online?'];
  } else if (matchedCategory === 'real_estate') {
    textZh = `为您推荐深耕滑铁卢大学城与科技走廊的华人专业地产团队。熟悉Columbia、Phillip等高租金学区公寓，以及Beechwood优质学区房，提供买卖与全托管包租服务。`;
    textEn = `Here are top bilingual real estate and property management specialists in Waterloo. They know the high-yield student condos near UW and premier family school districts inside out.`;
    matchReasonZh = `具备深厚本地投资与学区房源经验，提供免费房屋估价与VR全景线上看房。`;
    matchReasonEn = `Selected based on extensive KW neighborhood insight, free valuations, and turnkey rental management.`;
    suggestedFollowUpsZh = ['UW附近公寓现在的租金回报率怎样？', '买房需要准备多少首付？', '人在国内支持远程托管收租吗？'];
    suggestedFollowUpsEn = ['What is the current rental yield near UW?', 'How much down payment is required?', 'Do they manage rental properties for overseas owners?'];
  } else if (matchedCategory === 'health') {
    textZh = `为您推荐滑铁卢受好评的中医针灸与推拿理疗中心。注册医师主理，擅长调理程序员久坐颈椎腰椎僵硬、运动损伤及失眠，并支持各大公司和高校学生保险直赔。`;
    textEn = `Here are Waterloo's premier traditional Chinese medicine and wellness clinics. Registered practitioners helping with tech worker neck/back strain, sports injuries, and direct insurance billing.`;
    matchReasonZh = `安省注册中医师（CTCMPAO）及注册理疗师（RMT），支持Sun Life/Manulife保险直赔。`;
    matchReasonEn = `Staffed by registered TCM doctors and RMTs with direct billing for major Canadian health plans.`;
    suggestedFollowUpsZh = ['高校学生UHIP额外保险可以直接抵扣吗？', '去之前需要家庭医生转诊信吗？', '可以微信直接预约时间吗？'];
    suggestedFollowUpsEn = ['Does student supplementary insurance cover this?', 'Do I need a doctor referral letter first?', 'Can I schedule an appointment over WeChat?'];
  } else if (matchedCategory === 'education') {
    textZh = `为您精选了滑大硕博导师创立的数理辅导机构。涵盖Euclid数学竞赛、CCC计算机编程培训，以及滑大一年级微积分与代数课业同步辅导，帮助学生提升GPA与名校录取率。`;
    textEn = `Here are top STEM and contest academies led by Waterloo CS/Math scholars. They provide tailored training for Euclid, CCC coding contests, and first-year university calculus.`;
    matchReasonZh = `滑铁卢本地名师授课，拥有极高竞赛获奖率及名校CS/工程专业录取率。`;
    matchReasonEn = `Taught by proven Waterloo scholars with an exceptional contest track record and university admissions.`;
    suggestedFollowUpsZh = ['欧几里得数学竞赛什么时候开课？', '有免费的入学水平测试吗？', '可以上网课还是必须实体面授？'];
    suggestedFollowUpsEn = ['When does the Euclid contest bootcamp start?', 'Is there a free diagnostic test?', 'Are classes available online or in-person?'];
  } else {
    textZh = `您好！我是您的滑铁卢本地离线智能生活助手。根据您的问题“${userQuery}”，我为您在黄页中找到了最相关的本地优质华人商家。您可以直接点击卡片查看电话、微信号或地址！`;
    textEn = `Hello! I am your Waterloo local offline smart directory assistant. Based on your inquiry "${userQuery}", here are the best matching Chinese businesses in Waterloo. Tap any card below to call, copy WeChat, or get directions!`;
    matchReasonZh = `根据滑铁卢本地黄页综合评分、商户资质与服务匹配度推荐。`;
    matchReasonEn = `Recommended based on overall Waterloo directory rating, credentials, and service fit.`;
    suggestedFollowUpsZh = ['滑铁卢大学附近有什么好吃的？', '家里水管漏水/暖气坏了找谁？', '留学生报税和移民找哪家？'];
    suggestedFollowUpsEn = ['What are good food spots near UW?', 'Who handles urgent plumbing or heating repairs?', 'Where can I find student tax and legal help?'];
  }

  return {
    id: `msg-${Date.now()}`,
    sender: 'assistant',
    textZh,
    textEn,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    recommendedBusinesses: topRecommendations,
    matchReasonZh,
    matchReasonEn,
    suggestedFollowUpsZh,
    suggestedFollowUpsEn
  };
}

export const PRESET_QUESTIONS = [
  {
    zh: 'UW附近有什么推荐的好吃中餐？',
    en: 'What are good Chinese restaurants near UW?'
  },
  {
    zh: '家里水管漏水/暖气坏了，急需紧急维修！',
    en: 'Burst pipe or furnace failure! Urgent repair needed.'
  },
  {
    zh: '买房交接找哪家律师做公证Closing？',
    en: 'Which notary/lawyer is recommended for real estate closing?'
  },
  {
    zh: '留学生报税退税找哪家会计师？',
    en: 'Best CPA for student tax filing and tuition credits?'
  },
  {
    zh: '冬天该换雪胎了，求靠谱汽修厂',
    en: 'Looking for a reliable mechanic for winter tire change'
  },
  {
    zh: '想找注册中医推拿，支持公司保险直报吗？',
    en: 'Looking for registered TCM/RMT with direct insurance billing'
  }
];
