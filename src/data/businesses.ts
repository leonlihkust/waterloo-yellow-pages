import { Business, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    nameZh: '全部服务',
    nameEn: 'All Services',
    subcategoriesZh: ['全部'],
    subcategoriesEn: ['All'],
    icon: 'LayoutGrid'
  },
  {
    id: 'food',
    nameZh: '美食餐饮',
    nameEn: 'Food & Dining',
    subcategoriesZh: ['全部美食', '川湘菜', '经典面食/点心', '粤菜早茶', '烧烤夜宵', '奶茶甜品'],
    subcategoriesEn: ['All Food', 'Szechuan & Hunan', 'Noodles & Dim Sum', 'Cantonese BBQ', 'BBQ & Skewers', 'Boba & Sweets'],
    icon: 'Utensils'
  },
  {
    id: 'renovation',
    nameZh: '房屋装修与维修',
    nameEn: 'Renovation & Maintenance',
    subcategoriesZh: ['全部装修', '全屋翻新/地下室', '水暖管道与紧急维修', '冷暖空调/电气', '屋顶与雨水槽'],
    subcategoriesEn: ['All Renovation', 'Whole Home & Basement', 'Plumbing & Emergency', 'HVAC & Electric', 'Roofing & Gutters'],
    icon: 'Hammer'
  },
  {
    id: 'legal',
    nameZh: '法律咨询与公证',
    nameEn: 'Legal & Notary',
    subcategoriesZh: ['全部法律', '房产买卖交接公证', '移民留学签证', '商业合同与公司法', '民事诉讼/遗嘱'],
    subcategoriesEn: ['All Legal', 'Real Estate Closing & Notary', 'Immigration & Visa', 'Commercial Law', 'Civil & Wills'],
    icon: 'Scale'
  },
  {
    id: 'auto',
    nameZh: '汽车维修与保养',
    nameEn: 'Auto Services',
    subcategoriesZh: ['全部汽修', '换雪胎与机械精修', '钣金喷漆与事故理赔', '常规保养与安检'],
    subcategoriesEn: ['All Auto', 'Tire Change & Repair', 'Bodywork & Claims', 'Maintenance & Safety'],
    icon: 'Wrench'
  },
  {
    id: 'accounting',
    nameZh: '会计与税务规划',
    nameEn: 'Accounting & Tax',
    subcategoriesZh: ['全部会计', '留学生个人报税', '中小型公司记账T2', '海外资产与房产税务'],
    subcategoriesEn: ['All Accounting', 'Student & Personal Tax', 'Corporate Tax T2', 'Overseas Assets & Property'],
    icon: 'Calculator'
  },
  {
    id: 'real_estate',
    nameZh: '房产买卖与托管',
    nameEn: 'Real Estate & Rental',
    subcategoriesZh: ['全部房产', 'UW大学区学区公寓', '独立屋联排买卖', '留学生租房托管'],
    subcategoriesEn: ['All Real Estate', 'Student Condos near UW', 'Residential Homes', 'Rental Management'],
    icon: 'Home'
  },
  {
    id: 'health',
    nameZh: '医疗健康与中医',
    nameEn: 'Health & Wellness',
    subcategoriesZh: ['全部健康', '中医针灸推拿', '痛症理疗拔罐', '公司保险直赔'],
    subcategoriesEn: ['All Health', 'Acupuncture & Massage', 'Pain Relief & Cupping', 'Direct Billing'],
    icon: 'HeartPulse'
  },
  {
    id: 'education',
    nameZh: '教育辅导与升学',
    nameEn: 'Education & Tutoring',
    subcategoriesZh: ['全部教育', '滑大数理竞赛辅导', '大学微积分与CS辅导', '雅思托福强化'],
    subcategoriesEn: ['All Education', 'Math & CS Contest Prep', 'University Math Coaching', 'IELTS & TOEFL Prep'],
    icon: 'GraduationCap'
  }
];

export const DISTRICTS = [
  { id: 'all', nameZh: '滑铁卢全地区', nameEn: 'All Waterloo Region' },
  { id: 'uw_phillip', nameZh: '大学区 (UW / Phillip / University Ave)', nameEn: 'University Area (UW / Phillip)' },
  { id: 'uptown', nameZh: '滑铁卢市中心 (Uptown Waterloo)', nameEn: 'Uptown Waterloo' },
  { id: 'downtown_kitchener', nameZh: '基奇纳市区 (Kitchener Downtown)', nameEn: 'Downtown Kitchener' },
  { id: 'boardwalk', nameZh: '西区 (Boardwalk / Erb St)', nameEn: 'West Waterloo (The Boardwalk)' },
  { id: 'northfield', nameZh: '北区 (Northfield / Conestoga)', nameEn: 'North Waterloo (Conestoga Mall)' }
];

export const INITIAL_BUSINESSES: Business[] = [
  // --- FOOD ---
  {
    id: 'food-1',
    nameZh: '兰州坊传统手工牛肉拉面',
    nameEn: 'Lanzhou Hand-Pulled Beef Noodles',
    categoryId: 'food',
    subcategoryZh: '经典面食/点心',
    subcategoryEn: 'Noodles & Dim Sum',
    taglineZh: '滑铁卢大学旁二十年老汤秘方，大骨清汤，现场手工拉面',
    taglineEn: 'Authentic 20-year recipe beef broth and freshly hand-pulled noodles next to UW',
    descriptionZh: '位于滑大商业广场核心位置，师傅每日清晨慢火熬制清香牛大骨汤。面条粗细可选（毛细、二细、韭叶、大宽），配上手工现炸辣椒油和白萝卜片，是滑大学子与本地居民百吃不厌的家乡味道。',
    descriptionEn: 'Located at the heart of the University Plaza. Traditional slow-simmered beef bone broth prepared daily. Choose from six noodle thicknesses, handcrafted chili crisp oil, and tender braised beef.',
    address: '140 University Ave W, Unit 6, Waterloo, ON N2L 3E9',
    districtZh: '大学区 (UW / Phillip / University Ave)',
    districtEn: 'University Area (UW / Phillip)',
    distanceFromUW: '0.4 km',
    phone: '+1 (519) 886-3888',
    wechat: 'WaterlooLanzhou88',
    email: 'contact@lanzhounoodles-kw.ca',
    website: 'https://lanzhounoodles-waterloo.example.com',
    rating: 4.8,
    reviewCount: 168,
    priceRange: '$',
    verified: true,
    featured: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周日 11:00 - 22:30',
      daysEn: 'Mon - Sun 11:00 AM - 10:30 PM',
      open: '11:00',
      close: '22:30',
      isOpenToday: true
    },
    hoursDetailZh: '每日营业，期末考期间营业至午夜 23:30',
    hoursDetailEn: 'Open daily. Extended until 11:30 PM during UW/WLU exam periods',
    servicesZh: ['堂食聚餐', 'UberEats外卖', '留学生凭学生证9折', '支持微信/支付宝/加拿大Debit'],
    servicesEn: ['Dine-in', 'UberEats Delivery', '10% UW/WLU Student Discount', 'WeChat Pay / Alipay / Debit'],
    perksZh: ['学生凭证9折', '支持微信支付', '步行直达UW'],
    perksEn: ['10% Student Discount', 'WeChat Pay', 'Walk from UW'],
    gradient: {
      from: 'from-amber-600',
      to: 'to-orange-700',
      accent: '#D97706'
    },
    reviews: [
      {
        id: 'r1',
        author: 'Kevin Zhang (UW CS)',
        rating: 5,
        date: '2026-10-14',
        commentZh: '冬天考完试来上一大碗热气腾腾的二细牛肉面，辣椒油巨香，治愈了一整天的代码压力！老板人也很亲切。',
        commentEn: 'Hot hand-pulled noodles after exams are absolute bliss. The broth is rich and comforting, chili oil is fragrant.'
      },
      {
        id: 'r2',
        author: 'Emily Liu',
        rating: 5,
        date: '2026-09-28',
        commentZh: '面条劲道，肉夹馍外酥里嫩，滑铁卢最好吃的面馆没有之一，强推！',
        commentEn: 'Chewy noodles and the crispy rou jia mo (Chinese burger) is so flavorful. Best noodle spot in KW!'
      }
    ]
  },
  {
    id: 'food-2',
    nameZh: '枫华川菜小馆',
    nameEn: 'Maple Szechuan Bistro & Hotpot',
    categoryId: 'food',
    subcategoryZh: '川湘菜',
    subcategoryEn: 'Szechuan & Hunan',
    taglineZh: '正宗成都大厨掌勺，沸腾活鱼、自炒火锅底料与地道毛血旺',
    taglineEn: 'Master Chengdu chef bringing authentic bubbling spicy fish, dry pots and kung pao classics',
    descriptionZh: '主厨来自成都，选用四川直运汉源花椒与二荆条辣椒。特色招牌包括金汤酸菜鱼、重庆毛血旺、干锅手撕包菜及回锅肉。辣度可根据个人口味精细调节，适合聚餐宴请。',
    descriptionEn: 'Authentic Szechuan flavors using imported Hanyuan peppercorns. Famous for golden sour fish soup, Mao Xue Wang, dry pots and twice-cooked pork belly.',
    address: '255 King St N, Suite 102, Waterloo, ON N2J 4V2',
    districtZh: '滑铁卢市中心 (Uptown Waterloo)',
    districtEn: 'Uptown Waterloo',
    distanceFromUW: '1.2 km',
    phone: '+1 (519) 746-9918',
    wechat: 'MapleSzechuanKW',
    email: 'info@mapleszechuan.ca',
    website: 'https://mapleszechuan-waterloo.example.com',
    rating: 4.7,
    reviewCount: 142,
    priceRange: '$$',
    verified: true,
    featured: true,
    languagesZh: ['普通话', '四川话', 'English'],
    languagesEn: ['Mandarin', 'Szechuanese', 'English'],
    hours: {
      daysZh: '周二至周日 11:30 - 22:00 (周一公休)',
      daysEn: 'Tue - Sun 11:30 AM - 10:00 PM (Closed Mon)',
      open: '11:30',
      close: '22:00',
      isOpenToday: true
    },
    hoursDetailZh: '周一店休备料，周末建议提前微信预约包间',
    hoursDetailEn: 'Closed Mondays. Weekend private dining room reservations recommended via WeChat',
    servicesZh: ['包间宴请', '微信提前订位', '特调无辣/微辣/变态辣', '外带9折优惠'],
    servicesEn: ['Private Party Rooms', 'WeChat Table Booking', 'Custom Spice Levels', '10% Off Takeout'],
    perksZh: ['微信预约包房', '自炒底料', '免停车费'],
    perksEn: ['WeChat Reservation', 'House Spices', 'Free Parking'],
    gradient: {
      from: 'from-rose-600',
      to: 'to-red-800',
      accent: '#E11D48'
    },
    reviews: [
      {
        id: 'r3',
        author: 'Grace Wang',
        rating: 5,
        date: '2026-10-02',
        commentZh: '酸菜鱼汤底酸爽鲜嫩，鱼肉一点腥味都没有！辣子鸡也很酥脆，家庭聚会每次都选这里。',
        commentEn: 'Sour cabbage fish is silky and delightfully tangy. Crispy spicy chicken is another must-order.'
      }
    ]
  },
  {
    id: 'food-3',
    nameZh: '粤味阁港式烧腊茶餐厅',
    nameEn: 'Golden Dim Sum & Hong Kong Roast Bistro',
    categoryId: 'food',
    subcategoryZh: '粤菜早茶',
    subcategoryEn: 'Cantonese BBQ',
    taglineZh: '明炉现烤脆皮烧鸭、蜜汁叉烧、水晶虾饺与丝袜奶茶',
    taglineEn: 'Daily fresh-roasted duck, honey glazed BBQ pork, handmade dim sum and silk stocking milk tea',
    descriptionZh: '滑铁卢老牌粤菜馆，烧腊师傅拥有30年港岛明炉烧腊经验。每日11点现出炉烧鸭、脆皮烧肉与叉烧，搭配正宗港式手工点心与煲仔饭，茶香四溢。',
    descriptionEn: 'Traditional Hong Kong style diner featuring master roast meats fresh from the oven at 11am daily. Handcrafted dim sum, claypot rice, and authentic brewed milk tea.',
    address: '170 University Ave W, Unit 12, Waterloo, ON N2L 3E9',
    districtZh: '大学区 (UW / Phillip / University Ave)',
    districtEn: 'University Area (UW / Phillip)',
    distanceFromUW: '0.5 km',
    phone: '+1 (519) 888-2939',
    wechat: 'GoldenHK_Waterloo',
    rating: 4.6,
    reviewCount: 115,
    priceRange: '$$',
    verified: true,
    languagesZh: ['粤语', '普通话', 'English'],
    languagesEn: ['Cantonese', 'Mandarin', 'English'],
    hours: {
      daysZh: '周一至周日 10:30 - 21:30',
      daysEn: 'Mon - Sun 10:30 AM - 9:30 PM',
      open: '10:30',
      close: '21:30',
      isOpenToday: true
    },
    hoursDetailZh: '早茶点心全天供应，烧腊下午3点后常售罄建议提前预定',
    hoursDetailEn: 'All day dim sum. Roast duck frequently sells out after 3 PM, preorder suggested',
    servicesZh: ['全天早茶', '整只烧鸭外卖预定', '港式下午茶特惠套餐'],
    servicesEn: ['All-day Dim Sum', 'Whole Roast Duck Preorder', 'Afternoon Tea Combo Specials'],
    perksZh: ['全天港式早茶', '支持双语/粤语', '外卖自提折扣'],
    perksEn: ['All-Day Dim Sum', 'Cantonese & English', 'Pickup Discount'],
    gradient: {
      from: 'from-amber-500',
      to: 'to-yellow-700',
      accent: '#F59E0B'
    },
    reviews: [
      {
        id: 'r4',
        author: 'Alex Chan',
        rating: 5,
        date: '2026-09-12',
        commentZh: '烧鸭皮脆肉嫩，一点不油腻，配的冰镇港式奶茶超级地道，很有香港街头茶餐厅的感觉。',
        commentEn: 'Crispy roast duck that is tender without being greasy. Ice milk tea is authentic and strong.'
      }
    ]
  },
  {
    id: 'food-4',
    nameZh: '糖水实验室 & 手摇茶',
    nameEn: 'Sweet Dessert Lab & Artisan Boba',
    categoryId: 'food',
    subcategoryZh: '奶茶甜品',
    subcategoryEn: 'Boba & Sweets',
    taglineZh: '现煮古法黑糖波霸、杨枝甘露、芋圆豆花与低糖轻盈甜品',
    taglineEn: 'Artisanal brown sugar boba, fresh mango pomelo sago, organic taro balls and low-sugar pastries',
    descriptionZh: '滑铁卢华人青年喜爱的下午茶与自习社交空间，店内提供高速WiFi和充足电源插座。选用鲜牛奶与优质茶叶现萃，纯手工制作芋圆与双皮奶，甜度冰度自由定制。',
    descriptionEn: 'Beloved dessert and tea salon in Uptown Waterloo. Fresh brewed tea, organic taro balls, mango pomelo sago, and comfortable study space with high speed fiber WiFi.',
    address: '75 King St S, Suite 4, Waterloo, ON N2J 1P2',
    districtZh: '滑铁卢市中心 (Uptown Waterloo)',
    districtEn: 'Uptown Waterloo',
    distanceFromUW: '1.5 km',
    phone: '+1 (519) 578-8321',
    wechat: 'SweetLabKW',
    rating: 4.9,
    reviewCount: 196,
    priceRange: '$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周日 12:00 - 23:00',
      daysEn: 'Mon - Sun 12:00 PM - 11:00 PM',
      open: '12:00',
      close: '23:00',
      isOpenToday: true
    },
    hoursDetailZh: '营业至深夜11点，适合晚间自习与课后聚会',
    hoursDetailEn: 'Open until 11:00 PM every night, great study vibe',
    servicesZh: ['店内自习专座', '外送合作平台', '无乳糖鲜奶替换', '自选甜度0-100%'],
    servicesEn: ['Study seating & plugs', 'DoorDash & Fantuan', 'Oat milk alternatives', '0-100% Sweetness levels'],
    perksZh: ['高速WiFi自习', '低糖健康配方', '深夜营业'],
    perksEn: ['Study Friendly WiFi', 'Low Sugar Options', 'Open Late'],
    gradient: {
      from: 'from-pink-500',
      to: 'to-purple-600',
      accent: '#EC4899'
    },
    reviews: [
      {
        id: 'r5',
        author: 'Chloe Chen',
        rating: 5,
        date: '2026-10-18',
        commentZh: '杨枝甘露真的巨料足，芒果很新鲜！每次在Uptown散步必买一杯，店里环境也特别治愈。',
        commentEn: 'Loaded with real ripe mango, so refreshing. Friendly staff and cozy ambiance.'
      }
    ]
  },

  // --- RENOVATION & HOME SERVICES ---
  {
    id: 'reno-1',
    nameZh: '匠心精工建筑装饰工程',
    nameEn: 'MasterCraft Custom Home Renovations',
    categoryId: 'renovation',
    subcategoryZh: '全屋翻新/地下室',
    subcategoryEn: 'Whole Home & Basement',
    taglineZh: '安省持牌装修、500万商业责任险，专注全屋翻新、地下室合法化与厨卫精改',
    taglineEn: 'Ontario licensed contractor with $5M liability insurance. Basements, kitchen & bathroom remodeling',
    descriptionZh: '服务滑铁卢、基奇纳及剑桥地区15年，华人工程团队经验丰富。严格按照安省建筑规范（OBC）施工，协助屋主申请市政Permit施工许可。主营：地下室合法出租单位改造、橱柜瓷砖、实木复合地板铺设、室内油漆及隔音工程。合同明确，按期交付，绝无隐形加价。',
    descriptionEn: 'Serving Waterloo, Kitchener & Cambridge for over 15 years. Specialized in OBC-compliant legal basement rental suites, custom cabinetry, luxury bathroom overhauls, hardwood flooring, and drywall painting. Transparent contracts with zero hidden fees.',
    address: '585 Colby Dr, Unit 3, Waterloo, ON N2V 1A1',
    districtZh: '北区 (Northfield / Conestoga)',
    districtEn: 'North Waterloo (Conestoga Mall)',
    distanceFromUW: '3.8 km',
    phone: '+1 (519) 616-9928',
    wechat: 'MasterCraftKW_Renovation',
    email: 'service@mastercraftkw.ca',
    website: 'https://mastercraftkw.example.com',
    rating: 4.9,
    reviewCount: 88,
    priceRange: '$$$',
    verified: true,
    featured: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周六 08:00 - 18:30 (微信全天可预约估价)',
      daysEn: 'Mon - Sat 8:00 AM - 6:30 PM (WeChat 24/7 for quote)',
      open: '08:00',
      close: '18:30',
      isOpenToday: true
    },
    hoursDetailZh: '滑铁卢全城免费上门测量出图与详细报价单',
    hoursDetailEn: 'Free in-home measurement, 3D floor plan review and formal itemized quotation',
    servicesZh: ['免费上门估价', '市政Permit代申请', '五年施工质保', '地下室合法化改建', '全屋厨卫翻新'],
    servicesEn: ['Free Onsite Estimate', 'City Permit Application', '5-Year Workmanship Warranty', 'Legal Basement Suite', 'Kitchen & Bath Remodel'],
    perksZh: ['免费上门估价', '持牌保险齐备', '5年工程质保'],
    perksEn: ['Free Onsite Quote', 'Fully Insured & WSIB', '5-Year Warranty'],
    gradient: {
      from: 'from-blue-700',
      to: 'to-indigo-900',
      accent: '#2563EB'
    },
    reviews: [
      {
        id: 'r6',
        author: 'David Sun (Waterloo Homeowner)',
        rating: 5,
        date: '2026-08-20',
        commentZh: '李师傅团队帮我做的地下室合法化和洗手间改造，做工极为精细，瓷砖缝隙严丝合缝，市政检查一次性通过！价格公道透明。',
        commentEn: 'Master Li helped convert my basement into a legal rental apartment. Passed city inspection on the first try! Excellent craftsmanship.'
      },
      {
        id: 'r7',
        author: 'Hellen Zhou',
        rating: 5,
        date: '2026-09-05',
        commentZh: '厨房橱柜和石英石台面安装效率极高，一周内全部搞定，每天施工完都会清理得干干净净，值得信赖！',
        commentEn: 'Kitchen cabinet and quartz countertop installed quickly and cleanly. Left the workspace spotless each day.'
      }
    ]
  },
  {
    id: 'reno-2',
    nameZh: '枫叶冷暖与电气维修中心',
    nameEn: 'Maple HVAC & Electrical Solutions',
    categoryId: 'renovation',
    subcategoryZh: '冷暖空调/电气',
    subcategoryEn: 'HVAC & Electric',
    taglineZh: 'TSSA持牌暖通煤气技师、Master Electrician持牌电工，24小时紧急抢修',
    taglineEn: 'TSSA Certified Gas Technician & Master Electrician. 24/7 emergency furnace & AC repair',
    descriptionZh: '安省TSSA认证承包商。专注解决KW本地冬季暖气炉打不着火、热水炉不供水、夏季中央空调不制冷等紧急故障。提供高效热泵（Heat Pump）升级政府补贴申请指导、电箱升200A、特斯拉/电动车充电桩安装。',
    descriptionEn: 'Certified TSSA gas contractor and licensed electrical contractor in KW region. 24/7 winter heating emergency response, high efficiency heat pump rebates guidance, 200A panel upgrades, and EV charger installations.',
    address: '420 Erb St W, Suite 11, Waterloo, ON N2T 1H4',
    districtZh: '西区 (Boardwalk / Erb St)',
    districtEn: 'West Waterloo (The Boardwalk)',
    distanceFromUW: '2.4 km',
    phone: '+1 (519) 998-5188',
    wechat: 'MapleHVAC_KW',
    email: 'dispatch@maplehvac-kw.ca',
    rating: 4.9,
    reviewCount: 104,
    priceRange: '$$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周日 24小时紧急服务',
      daysEn: 'Mon - Sun 24/7 Emergency Service',
      open: '00:00',
      close: '23:59',
      isOpenToday: true
    },
    hoursDetailZh: '日间常规预约 + 冬季寒夜24小时紧急出警抢修',
    hoursDetailEn: 'Standard service by day, 24/7 emergency response during winter freezes',
    servicesZh: ['暖气炉维修与更换', '空调维护与加雪种', 'EV电桩安装与配电升级', '安省绿色节能补贴指导', '24小时应急出车'],
    servicesEn: ['Furnace Repair & Replacement', 'Air Conditioning Service', 'EV Charger & 200A Panel', 'Ontario Heat Pump Rebates', '24/7 Emergency Service'],
    perksZh: ['24小时紧急服务', 'TSSA持牌技师', '协助申请补贴'],
    perksEn: ['24/7 Emergency', 'TSSA Certified', 'Government Rebate Help'],
    gradient: {
      from: 'from-cyan-700',
      to: 'to-blue-900',
      accent: '#0284C7'
    },
    reviews: [
      {
        id: 'r8',
        author: 'William Chen',
        rating: 5,
        date: '2026-01-16',
        commentZh: '冬天零下20度家里暖气突然停了，晚上10点打电话，王师傅半小时就赶到了，换了个点火器马上复活，简直是救命！',
        commentEn: 'Furnace died at -20C on a snowy evening. Master Wang arrived in 30 minutes and replaced the igniter. Lifesaver!'
      }
    ]
  },
  {
    id: 'reno-3',
    nameZh: '宏达通渠与水暖工程',
    nameEn: 'Hongda Plumbing & Drain Services',
    categoryId: 'renovation',
    subcategoryZh: '水暖管道与紧急维修',
    subcategoryEn: 'Plumbing & Emergency',
    taglineZh: '安省持牌红印章水管工，专治管道堵塞、水管爆裂与洗手盆马桶漏水',
    taglineEn: 'Red Seal licensed plumber for urgent leak repairs, drain snaking, faucet and toilet replacements',
    descriptionZh: '配备专业工业级内窥摄像头与高压水射流通渠设备。主营：厨房下水反水通渠、马桶换新、水龙头阀门漏水更换、软水机与反渗透净水系统安装、水管防冻保暖。急单随叫随到。',
    descriptionEn: 'Equipped with commercial sewer cameras and high-pressure jetters. Comprehensive plumbing solutions: clogged drains, burst pipes, water softeners, reverse osmosis systems, toilet installations.',
    address: '160 Columbia St W, Waterloo, ON N2L 3L3',
    districtZh: '大学区 (UW / Phillip / University Ave)',
    districtEn: 'University Area (UW / Phillip)',
    distanceFromUW: '0.9 km',
    phone: '+1 (519) 722-6833',
    wechat: 'HongdaPlumbing_KW',
    rating: 4.8,
    reviewCount: 72,
    priceRange: '$$',
    verified: true,
    languagesZh: ['普通话', '粤语', 'English'],
    languagesEn: ['Mandarin', 'Cantonese', 'English'],
    hours: {
      daysZh: '周一至周日 07:30 - 21:00 (紧急抢修全天候响应)',
      daysEn: 'Mon - Sun 7:30 AM - 9:00 PM (Emergency calls on-demand)',
      open: '07:30',
      close: '21:00',
      isOpenToday: true
    },
    hoursDetailZh: '学生租房退房水暖检修有专属优惠',
    hoursDetailEn: 'Special student housing move-out plumbing check discounts',
    servicesZh: ['管道专业疏通', '漏水紧急抢修', '软水机与滤水器安装', '马桶与水龙头更换', '下水道视频探查'],
    servicesEn: ['Drain Unclogging', 'Burst Pipe Repair', 'Water Softener & Filtration', 'Faucet & Fixture Replacement', 'Sewer Camera Inspection'],
    perksZh: ['红印章持牌', '明码标价', '通不通不收全款'],
    perksEn: ['Red Seal Licensed', 'Transparent Pricing', 'Satisfaction Guarantee'],
    gradient: {
      from: 'from-teal-600',
      to: 'to-emerald-800',
      accent: '#0D9488'
    },
    reviews: [
      {
        id: 'r9',
        author: 'Jessica Qian',
        rating: 5,
        date: '2026-09-19',
        commentZh: '租给学生的房子厨房水管严重堵塞，师傅带大机器过来二十分钟就疏通彻底了，还给清理了U型管，收费实在！',
        commentEn: 'Resolved a severe kitchen sink blockage quickly with industrial equipment. Clean, polite, and reasonably priced.'
      }
    ]
  },
  {
    id: 'reno-4',
    nameZh: '极洁专业屋顶翻新与落水管工程',
    nameEn: 'CleanShield Roofing & Gutter Solutions',
    categoryId: 'renovation',
    subcategoryZh: '屋顶与雨水槽',
    subcategoryEn: 'Roofing & Gutters',
    taglineZh: '高空防坠作业资质，专业沥青瓦更换、屋顶漏水修补与天沟落叶网安装',
    taglineEn: 'Fully certified heights safety. Shingle replacement, attic ventilation, leaf-guard gutters and leak repairs',
    descriptionZh: '服务 Waterloo Region 超10年。采用BP及Owens Corning高等级防风沥青瓦，十年手工无渗漏保障。专业解决大风吹落瓦片、阁楼保温通风不畅、天沟积水倒灌等问题，免费无人机高清屋顶检测拍照。',
    descriptionEn: 'Serving Waterloo Region for over 10 years. Premium Owens Corning wind-rated shingles with 10-year workmanship warranty. Free drone aerial inspection for roof health assessment.',
    address: '80 Westmount Rd N, Waterloo, ON N2L 3G6',
    districtZh: '大学区 (UW / Phillip / University Ave)',
    districtEn: 'University Area (UW / Phillip)',
    distanceFromUW: '1.6 km',
    phone: '+1 (519) 501-3829',
    wechat: 'CleanShieldRoof_KW',
    rating: 4.7,
    reviewCount: 46,
    priceRange: '$$$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周六 08:00 - 19:00',
      daysEn: 'Mon - Sat 8:00 AM - 7:00 PM',
      open: '08:00',
      close: '19:00',
      isOpenToday: true
    },
    hoursDetailZh: '提供免费无人机屋顶检测与高清报告',
    hoursDetailEn: 'Free drone inspection with photo evidence report',
    servicesZh: ['免费无人机屋面检测', '沥青瓦全屋换新', '暴风雨应急补漏', '铝合金天沟加落叶网', '阁楼保温棉加厚'],
    servicesEn: ['Free Drone Inspection', 'Full Shingle Replacement', 'Storm Leak Patching', 'Seamless Gutters & Leafguards', 'Attic Insulation Upgrade'],
    perksZh: ['免费无人机拍照估价', '10年防漏保障', 'WSIB全险'],
    perksEn: ['Free Drone Inspection', '10-Year Warranty', 'WSIB Insured'],
    gradient: {
      from: 'from-slate-700',
      to: 'to-zinc-900',
      accent: '#475569'
    },
    reviews: [
      {
        id: 'r10',
        author: 'Gary Zhao',
        rating: 5,
        date: '2026-07-14',
        commentZh: '去年大风刮落了好多瓦片，师傅当天就带梯子过来紧急加固补上了，后来换整顶也是找他们，质量过硬。',
        commentEn: 'Repaired wind damaged shingles on the same day. Later did the full roof replacement, very thorough.'
      }
    ]
  },

  // --- LEGAL & NOTARY SERVICES ---
  {
    id: 'legal-1',
    nameZh: '加华移民与综合法律事务所',
    nameEn: 'JiaHua Immigration & Legal Associates',
    categoryId: 'legal',
    subcategoryZh: '移民留学签证',
    subcategoryEn: 'Immigration & Visa',
    taglineZh: '加拿大持牌移民法律顾问（CICC）与安省大律师团队，专精留学生工签、EE移民与家庭团聚',
    taglineEn: 'CICC licensed consultants & Ontario Barristers specializing in PGWP, Express Entry, PNP and family sponsorship',
    descriptionZh: '扎根滑铁卢高校圈，累计帮助数千名滑大和劳里埃（WLU）中国留学生成功办理学签续签、毕业工签（PGWP）、安省省提名（OINP硕士/博士/雇主担保）及快速通道（EE）移民申请。团队熟悉政策变动，案子审核细致，文书经验深厚。',
    descriptionEn: 'Deeply connected to the Waterloo university community. Successfully guided thousands of UW and WLU graduates through study extensions, PGWP, Ontario Immigrant Nominee Program (OINP), and Express Entry PR pathways.',
    address: '280 Phillip St, Suite 204, Waterloo, ON N2L 3X1',
    districtZh: '大学区 (UW / Phillip / University Ave)',
    districtEn: 'University Area (UW / Phillip)',
    distanceFromUW: '0.6 km',
    phone: '+1 (519) 880-9288',
    wechat: 'JiaHuaLegal_Waterloo',
    email: 'info@jiahualegal.ca',
    website: 'https://jiahualegal-waterloo.example.com',
    rating: 4.9,
    reviewCount: 153,
    priceRange: '$$',
    verified: true,
    featured: true,
    languagesZh: ['普通话', '粤语', 'English'],
    languagesEn: ['Mandarin', 'Cantonese', 'English'],
    hours: {
      daysZh: '周一至周五 09:30 - 18:00 (可预约周六视频面谈)',
      daysEn: 'Mon - Fri 9:30 AM - 6:00 PM (Saturday by appointment)',
      open: '09:30',
      close: '18:00',
      isOpenToday: true
    },
    hoursDetailZh: '支持线下办公室面谈或全国Zoom在线远程签约办理',
    hoursDetailEn: 'In-person office meetings or online video consultations available across Canada',
    servicesZh: ['留学生学签/工签续签', '安省OINP省提名申报', '联邦快速通道EE规划', '父母探亲及超级签证', '疑难拒签申诉调档'],
    servicesEn: ['Study & Work Permits', 'OINP Master & Job Offer Stream', 'Express Entry Strategic Planning', 'Super Visa & Family Sponsorship', 'Refusal Appeals & ATIP Notes'],
    perksZh: ['CICC持牌资质', '学生专属优惠', '免费档案初审'],
    perksEn: ['CICC Licensed', 'Student Rates', 'Free Initial Profile Check'],
    gradient: {
      from: 'from-blue-800',
      to: 'to-slate-900',
      accent: '#1E40AF'
    },
    reviews: [
      {
        id: 'r11',
        author: 'Sean Deng (UW Math Alum)',
        rating: 5,
        date: '2026-09-10',
        commentZh: '从PGWP到OINP一路都是加华帮忙准备的材料，顾问极其专业负责，每一次政策新规都会第一时间提醒我补充材料，顺利拿到PR！',
        commentEn: 'Guided me seamlessly from PGWP to OINP and PR. Detail-oriented, transparent and kept me ahead of immigration changes.'
      }
    ]
  },
  {
    id: 'legal-2',
    nameZh: '智诚房产公证及民商律师事务所',
    nameEn: 'Horizon Law & Real Estate Notary Public',
    categoryId: 'legal',
    subcategoryZh: '房产买卖交接公证',
    subcategoryEn: 'Real Estate Closing & Notary',
    taglineZh: '安省公证人协会注册律师，专注住宅与商业房产买卖交接、产权更名、授权书与各类宣誓公证',
    taglineEn: 'Law Society of Ontario certified lawyer & notary public for residential closings, title transfers and wills',
    descriptionZh: '服务滑铁卢、基奇纳及周边地区华人投资人与新家庭。精办买房卖房Closing手续、Condo预售楼花转让（Assignment）、私贷及银行按揭抵押登记、中加双认证文件公证、加拿大遗嘱订立与委托授权书（POA）。流程透明，收费标准化。',
    descriptionEn: 'Trusted legal partner for real estate closings in Waterloo Region. Handling residential purchases and sales, condo assignment closings, mortgage registration, certified true copies, powers of attorney, and bilingual notarizations.',
    address: '50 Queen St N, Suite 710, Kitchener, ON N2H 6P4',
    districtZh: '基奇纳市区 (Kitchener Downtown)',
    districtEn: 'Downtown Kitchener',
    distanceFromUW: '4.5 km',
    phone: '+1 (519) 576-6688',
    wechat: 'HorizonLaw_KW',
    email: 'closings@horizonlawfirm.ca',
    website: 'https://horizonlaw-kw.example.com',
    rating: 4.8,
    reviewCount: 91,
    priceRange: '$$$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周五 09:00 - 17:30',
      daysEn: 'Mon - Fri 9:00 AM - 5:30 PM',
      open: '09:00',
      close: '17:30',
      isOpenToday: true
    },
    hoursDetailZh: '房产交接提前预约，支持加急当天公证签字',
    hoursDetailEn: 'Advance booking for real estate closing; same-day notary appointment available',
    servicesZh: ['独立屋与Condo买卖Closing', '海牙公证/领事双认证代办', '单身证明/无犯罪公证', '授权委托书(POA)起草', '平安遗嘱与资产信托'],
    servicesEn: ['Residential Closings', 'Apostille & Consular Legalization', 'Affidavits & Notary Copies', 'Power of Attorney (POA)', 'Wills & Estate Planning'],
    perksZh: ['安省公证律师', '明码标价无隐藏费', '支持线上远程见证'],
    perksEn: ['Law Society Member', 'Transparent Closing Fees', 'Virtual Signing Available'],
    gradient: {
      from: 'from-amber-800',
      to: 'to-slate-900',
      accent: '#92400E'
    },
    reviews: [
      {
        id: 'r12',
        author: 'Meng Zhang',
        rating: 5,
        date: '2026-10-11',
        commentZh: '在滑铁卢第一次买独立屋，陈律师审阅产权调查非常严谨，发现了前屋主的产权微小瑕疵并督促对方纠正，顺利交接！',
        commentEn: 'Smooth closing on our first home in Waterloo. Lawyer Chen caught a title issue and resolved it seamlessly.'
      }
    ]
  },
  {
    id: 'legal-3',
    nameZh: '融信商业合同与企业法律咨询',
    nameEn: 'Apex Commercial & Corporate Legal Advisory',
    categoryId: 'legal',
    subcategoryZh: '商业合同与公司法',
    subcategoryEn: 'Commercial Law',
    taglineZh: '中小型企业法律管家：公司注册、商用租约审阅、股东协议与劳动雇佣合规',
    taglineEn: 'Corporate counsel for small & medium businesses: incorporation, lease reviews, shareholder pacts',
    descriptionZh: '为滑铁卢科技走廊的初创公司、华人餐饮老板及零售商户提供坚实的法律护航。精通商业店铺租赁合同（Commercial Lease）修改谈判、特许经营加盟协议、知识产权保护、合伙人股权分配与解散清算。',
    descriptionEn: 'Strategic commercial law practice supporting Waterloo tech startups, restaurateurs and retailers. Specialized in commercial retail lease reviews, shareholder agreements, dispute settlement, and corporate governance.',
    address: '180 Northfield Dr W, Unit 201, Waterloo, ON N2L 0C7',
    districtZh: '北区 (Northfield / Conestoga)',
    districtEn: 'North Waterloo (Conestoga Mall)',
    distanceFromUW: '3.5 km',
    phone: '+1 (519) 884-1188',
    wechat: 'ApexCorporate_Law',
    rating: 4.8,
    reviewCount: 38,
    priceRange: '$$$$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周五 09:00 - 17:00',
      daysEn: 'Mon - Fri 9:00 AM - 5:00 PM',
      open: '09:00',
      close: '17:00',
      isOpenToday: true
    },
    hoursDetailZh: '初创公司提供首次30分钟免费需求梳理',
    hoursDetailEn: 'Initial 30-minute scope review session for new entrepreneurs',
    servicesZh: ['商业租赁合同修改与谈判', '加拿大联邦/安省公司成立', '股东合作协议(SHA)', '员工雇佣合同合规检查', '商标与商业秘密保护'],
    servicesEn: ['Commercial Lease Negotiation', 'Federal/Provincial Incorporation', 'Shareholder Agreements', 'Employment Contract Compliance', 'Trademark & IP Protection'],
    perksZh: ['专精商业合同', '科技初创伙伴', '双语法务经验'],
    perksEn: ['Commercial Specialist', 'Startup Friendly', 'Bilingual Expertise'],
    gradient: {
      from: 'from-emerald-800',
      to: 'to-slate-900',
      accent: '#065F46'
    },
    reviews: [
      {
        id: 'r13',
        author: 'Tony Lin (Restaurant Owner)',
        rating: 5,
        date: '2026-08-30',
        commentZh: '在大学城开奶茶店，租约里有几个房东条款很苛刻，多亏融信律师帮我们据理力争改了条款，省下了大笔隐形租金！',
        commentEn: 'Saved us thousands in unexpected triple net lease liabilities. Essential counsel for any business tenant.'
      }
    ]
  },

  // --- AUTO SERVICES ---
  {
    id: 'auto-1',
    nameZh: '捷顺华人汽车精修与换胎中心',
    nameEn: 'QuickPro Auto Repair & Tire Center',
    categoryId: 'auto',
    subcategoryZh: '换雪胎与机械精修',
    subcategoryEn: 'Tire Change & Repair',
    taglineZh: '安省持牌汽修技师（310S），雪胎团购更换、刹车避震、电脑故障码诊断与常规大保养',
    taglineEn: 'Licensed 310S automotive technician. Winter tire swaps, computerized diagnostics, brake service',
    descriptionZh: '滑铁卢华人留学生与当地车主最常光顾的汽修厂之一。备有专业四轮定位仪与原厂诊断电脑。支持各类日韩德美系家用车：换雪胎做动平衡、更换高品质合成机油、刹车盘片更换、底盘异响检修。价格透明，换下来的旧零件皆可供客户检视。',
    descriptionEn: 'The go-to automotive garage for Chinese students and families in Waterloo. Complete mechanical maintenance, Michelin & Bridgestone winter tire packages, laser 4-wheel alignment, synthetic oil changes, and transparent diagnostic reports.',
    address: '615 Weber St N, Unit 5, Waterloo, ON N2V 1K4',
    districtZh: '北区 (Northfield / Conestoga)',
    districtEn: 'North Waterloo (Conestoga Mall)',
    distanceFromUW: '3.2 km',
    phone: '+1 (519) 747-1889',
    wechat: 'QuickProAuto_KW',
    email: 'service@quickproauto-kw.ca',
    website: 'https://quickproauto-waterloo.example.com',
    rating: 4.8,
    reviewCount: 136,
    priceRange: '$$',
    verified: true,
    featured: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周六 08:30 - 18:00',
      daysEn: 'Mon - Sat 8:30 AM - 6:00 PM',
      open: '08:30',
      close: '18:00',
      isOpenToday: true
    },
    hoursDetailZh: '每年10月至12月换雪胎季提供微信快速预约通道',
    hoursDetailEn: 'Dedicated WeChat express lane during Oct - Dec winter tire changeover rush',
    servicesZh: ['换雪胎动平衡与轮毂存储', '美孚1号全合成机油保养', '刹车片/刹车盘检查更换', '发动机Check Engine诊断', '安省安全检查合格证(Safety)'],
    servicesEn: ['Winter Tire Change & Seasonal Storage', 'Mobil 1 Full Synthetic Oil Service', 'Brake Pads & Rotor Replacement', 'Check Engine Scan & Repair', 'Safety Standard Certificate'],
    perksZh: ['持牌310S技师', '雪胎季节特惠', '学生换油优惠'],
    perksEn: ['Licensed 310S', 'Winter Tire Specials', 'Student Oil Discount'],
    gradient: {
      from: 'from-orange-600',
      to: 'to-zinc-800',
      accent: '#EA580C'
    },
    reviews: [
      {
        id: 'r14',
        author: 'Daniel Gao',
        rating: 5,
        date: '2026-10-25',
        commentZh: '换雪胎速度超快，小哥还会帮忙免费检查胎压和防冻液冰点，非常热心负责！价格比4S店实惠太多。',
        commentEn: 'Fast winter tire switch. Checked tire pressures and coolant freezing point for free. Far better value than dealerships.'
      }
    ]
  },
  {
    id: 'auto-2',
    nameZh: '极速汽车钣金喷漆与事故理赔',
    nameEn: 'Apex Collision & Bodywork Center',
    categoryId: 'auto',
    subcategoryZh: '钣金喷漆与事故理赔',
    subcategoryEn: 'Bodywork & Claims',
    taglineZh: '无尘无瑕烤漆房、车身凹陷无损修复（PDR）、各大保险公司事故理赔一条龙',
    taglineEn: 'Downdraft spray booth, paintless dent repair (PDR), complete collision insurance claims handling',
    descriptionZh: '滑铁卢专业华人车身维修中心。帮助车主处理追尾碰擦事故报险与估价理赔，协助安排代步车。拥有电脑红外烤漆房，杜绝色差；对小剐蹭与冰雹凹坑采用无损修复技术，保留原厂车漆。',
    descriptionEn: 'High quality collision and scratch restoration center. Direct billing with major Ontario insurance carriers, rental car coordination, computer color matching, and paintless dent repair.',
    address: '150 Victoria St S, Kitchener, ON N2G 2B5',
    districtZh: '基奇纳市区 (Kitchener Downtown)',
    districtEn: 'Downtown Kitchener',
    distanceFromUW: '4.8 km',
    phone: '+1 (519) 579-2233',
    wechat: 'ApexCollision_KW',
    rating: 4.7,
    reviewCount: 65,
    priceRange: '$$$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周五 08:00 - 17:30',
      daysEn: 'Mon - Fri 8:00 AM - 5:30 PM',
      open: '08:00',
      close: '17:30',
      isOpenToday: true
    },
    hoursDetailZh: '支持微信拍照发图初步估价',
    hoursDetailEn: 'Send vehicle photo via WeChat for quick preliminary repair estimate',
    servicesZh: ['事故理赔全流程代办', '高端电脑调漆与无尘烘烤', '微小凹陷无损复原(PDR)', '前后保险杠更换校正', '提供报保险代步车协助'],
    servicesEn: ['Insurance Claim Handling', 'Computerized Color Matching', 'Paintless Dent Repair (PDR)', 'Bumper Replacement & Align', 'Rental Car Assistance'],
    perksZh: ['免费拍照估价', '协助保险理赔', '终身漆面质保'],
    perksEn: ['Free Photo Estimate', 'Insurance Help', 'Lifetime Paint Warranty'],
    gradient: {
      from: 'from-red-700',
      to: 'to-slate-900',
      accent: '#B91C1C'
    },
    reviews: [
      {
        id: 'r15',
        author: 'Jenny Liu',
        rating: 5,
        date: '2026-08-11',
        commentZh: '冬天倒车蹭到了雪堆，右前门凹进去一大块。师傅帮忙调色喷漆，拿车时完全看不出修过的痕迹，绝了！',
        commentEn: 'Repaired a deep door dent and scratch seamlessly. Paint color matched 100% with the original finish.'
      }
    ]
  },

  // --- ACCOUNTING & TAX ---
  {
    id: 'acct-1',
    nameZh: '诚诺CPA会计师事务所',
    nameEn: 'TrustCPA Accounting & Tax Advisory',
    categoryId: 'accounting',
    subcategoryZh: '留学生个人报税',
    subcategoryEn: 'Student & Personal Tax',
    taglineZh: '加拿大特许专业会计师（CPA, CGA），留学生学费退税、自雇与公司全套财税合规',
    taglineEn: 'Chartered Professional Accountants (CPA). Student tuition credits, corporate T2, personal tax filing',
    descriptionZh: '专注服务滑铁卢本地留学生、华人高净值家庭和新创企业10余年。精通留学生T2202学费免税额申报、房租退税与消费税GST补贴申请，确保学生应得福利最大化；精通自雇人士收入申报、小型公司年终T2报税、财务报表编制及应对CRA查税与补税申诉。',
    descriptionEn: 'Serving Waterloo students and small business owners with integrity. Maximizing student tuition tax credits, rent subsidies, GST rebates, corporate T2 tax compliance, and CRA audit defense.',
    address: '22 King St S, Suite 400, Waterloo, ON N2J 1N8',
    districtZh: '滑铁卢市中心 (Uptown Waterloo)',
    districtEn: 'Uptown Waterloo',
    distanceFromUW: '1.4 km',
    phone: '+1 (519) 885-6188',
    wechat: 'TrustCPA_Waterloo',
    email: 'tax@trustcpa-kw.ca',
    website: 'https://trustcpa-waterloo.example.com',
    rating: 4.9,
    reviewCount: 162,
    priceRange: '$$',
    verified: true,
    featured: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周五 09:00 - 18:00 (报税季2-4月周六开放)',
      daysEn: 'Mon - Fri 9:00 AM - 6:00 PM (Saturdays open during Feb - Apr tax season)',
      open: '09:00',
      close: '18:00',
      isOpenToday: true
    },
    hoursDetailZh: '支持全流程微信或网页上传材料，电子签字安全快捷',
    hoursDetailEn: '100% digital contactless submission via WeChat / portal, secure e-signatures',
    servicesZh: ['留学生学费与房租福利退税', '个人与家庭T1报税', '中小型公司T2公司税与记账', '海外资产T1135合规申报', 'CRA查税协助与罚金减免'],
    servicesEn: ['Student Tuition & Rent Tax Credits', 'Personal T1 Tax Return', 'Corporate T2 Filing & Bookkeeping', 'T1135 Foreign Asset Reporting', 'CRA Audit Defense & Penalty Relief'],
    perksZh: ['加拿大持牌CPA', '留学生团报特惠', '全程线上办理'],
    perksEn: ['Certified CPA', 'Student Group Discount', '100% Paperless Process'],
    gradient: {
      from: 'from-blue-600',
      to: 'to-indigo-800',
      accent: '#3B82F6'
    },
    reviews: [
      {
        id: 'r16',
        author: 'Eric Wang (UW Alum)',
        rating: 5,
        date: '2026-04-20',
        commentZh: '在滑大四年一直找诚诺报税，把学费额度和房租全部积攒了下来，毕业工作第一年抵扣了一大笔个人所得税，太值了！',
        commentEn: 'Filed student taxes with TrustCPA for 4 years. Tuition credit carry-forward saved me huge dollars when I landed my first job.'
      }
    ]
  },

  // --- REAL ESTATE & RENTAL ---
  {
    id: 're-1',
    nameZh: '盛达滑铁卢精英地产团队',
    nameEn: 'Waterloo Prime Realty & Property Management',
    categoryId: 'real_estate',
    subcategoryZh: 'UW大学区学区公寓',
    subcategoryEn: 'Student Condos near UW',
    taglineZh: '深耕滑铁卢大学城与科技走廊，买卖投资、学生公寓托管、海外买家省心包租',
    taglineEn: 'Top-tier bilingual real estate team in KW. Student condo investments, family homes, turnkey leasing',
    descriptionZh: '拥有多年滑铁卢地产投资实战经验，代理包括Columbia St、Phillip St、King St等核心大学区高租售比公寓，以及Westmount、Beechwood、Laurelwood等优秀学区独立屋。提供一站式房源带看、合同拟定、验房推荐、租客严审与日常物业托管服务。',
    descriptionEn: 'Deep knowledge of KW real estate trends. Handling UW student condo investments, family homes in top school districts, and full-service rental management including tenant screening and rent collection.',
    address: '100 University Ave W, Suite 200, Waterloo, ON N2L 6J3',
    districtZh: '大学区 (UW / Phillip / University Ave)',
    districtEn: 'University Area (UW / Phillip)',
    distanceFromUW: '0.3 km',
    phone: '+1 (519) 998-2388',
    wechat: 'WaterlooPrimeRealty',
    email: 'agents@waterlooprime.ca',
    website: 'https://waterlooprime-realty.example.com',
    rating: 4.8,
    reviewCount: 97,
    priceRange: '$$$',
    verified: true,
    featured: true,
    languagesZh: ['普通话', '粤语', 'English'],
    languagesEn: ['Mandarin', 'Cantonese', 'English'],
    hours: {
      daysZh: '周一至周日 09:00 - 20:00 (随约随看)',
      daysEn: 'Mon - Sun 9:00 AM - 8:00 PM (Showing on demand)',
      open: '09:00',
      close: '20:00',
      isOpenToday: true
    },
    hoursDetailZh: '支持微信视频看房与VR全景线上带看',
    hoursDetailEn: 'Virtual video tours and VR 3D walkthroughs available',
    servicesZh: ['UW/WLU大学区公寓投资', '学区独立屋及联排买卖', '全托房屋租赁与租客背景调查', '免费房屋市场价值评估', '交接验房指导'],
    servicesEn: ['University Student Condos', 'School District Homes', 'Full Property Management & Tenant Vetting', 'Free Home Evaluation', 'Closing Inspection Advisory'],
    perksZh: ['免费房产估价', 'VR全景视频带看', '一站式托管'],
    perksEn: ['Free Valuation', 'Virtual Tours', 'Turnkey Management'],
    gradient: {
      from: 'from-amber-700',
      to: 'to-stone-900',
      accent: '#B45309'
    },
    reviews: [
      {
        id: 'r17',
        author: 'Vivian Zhao',
        rating: 5,
        date: '2026-09-08',
        commentZh: '帮孩子在滑大买投资公寓，地产经纪非常耐心地分析了每个楼盘的现金流和出租率，交房后两周就找到了优质学生租客，省心！',
        commentEn: 'Helped us purchase a high-yield student condo near UW. Found reliable tenants within two weeks after closing.'
      }
    ]
  },

  // --- HEALTH & WELLNESS ---
  {
    id: 'health-1',
    nameZh: '和顺堂中医针灸推拿痛症中心',
    nameEn: 'Harmony TCM & Acupuncture Wellness Center',
    categoryId: 'health',
    subcategoryZh: '中医针灸推拿',
    subcategoryEn: 'Acupuncture & Massage',
    taglineZh: '安省注册中医师（CTCMPAO）及注册理疗师（RMT），专攻颈椎腰椎酸痛、运动损伤、失眠调理',
    taglineEn: 'Registered Acupuncturist & RMT. Relieving neck, back pain, sports injuries, stress, insomnia',
    descriptionZh: '诊所环境清雅洁净，医师拥有30余年中医临床积淀。善用传统毫针、温阳艾灸、纯中药理疗及深层肌肉推拿，针对久坐电脑前的程序员和学生肩颈僵硬、坐骨神经痛、偏头痛等亚健康状况有立竿见影的舒缓效果。支持Sun Life、Manulife、Canada Life等各大公司及学生UHIP额外保险直接结算（Direct Billing）。',
    descriptionEn: 'Serene wellness clinic with registered TCM practitioners and massage therapists (RMT). Specialized in computer fatigue, chronic spine tension, sports rehabilitation, and insomnia. Direct billing supported for major insurance carriers.',
    address: '430 The Boardwalk, Medical Building Unit 210, Waterloo, ON N2T 0C1',
    districtZh: '西区 (Boardwalk / Erb St)',
    districtEn: 'West Waterloo (The Boardwalk)',
    distanceFromUW: '3.6 km',
    phone: '+1 (519) 745-8822',
    wechat: 'HarmonyTCM_KW',
    email: 'care@harmonytcm-kw.ca',
    website: 'https://harmonytcm-waterloo.example.com',
    rating: 4.9,
    reviewCount: 110,
    priceRange: '$$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周六 10:00 - 19:30',
      daysEn: 'Mon - Sat 10:00 AM - 7:30 PM',
      open: '10:00',
      close: '19:30',
      isOpenToday: true
    },
    hoursDetailZh: '支持微信线上预约，提前预约免排队',
    hoursDetailEn: 'Direct WeChat booking available, no walk-in wait times',
    servicesZh: ['传统针灸与电针理疗', '安省注册RMT深层推拿', '拔罐排毒与温经艾灸', '公司及高校学生保险直赔(Direct Billing)', '中草药体质调理'],
    servicesEn: ['Acupuncture & Electro-therapy', 'Registered Massage Therapy (RMT)', 'Cupping & Moxibustion', 'Insurance Direct Billing', 'Herbal Constitution Balancing'],
    perksZh: ['公司保险直赔', '注册中医师主诊', '免费停车位'],
    perksEn: ['Direct Billing', 'Licensed TCM Doctor', 'Free Parking'],
    gradient: {
      from: 'from-emerald-700',
      to: 'to-teal-900',
      accent: '#059669'
    },
    reviews: [
      {
        id: 'r18',
        author: 'Raymond Jiang (Tech Lead)',
        rating: 5,
        date: '2026-10-15',
        commentZh: '天天坐在电脑前写代码，颈椎疼得头晕。来和顺堂做了针灸加推拿，做完脖子轻快太多了，保险直接抵扣很省事。',
        commentEn: 'Severe neck tension from daily coding was completely relieved after two acupuncture sessions. Direct billing was effortless.'
      }
    ]
  },

  // --- EDUCATION & TUTORING ---
  {
    id: 'edu-1',
    nameZh: '滑大精英数理与竞赛辅导学社',
    nameEn: 'Waterloo STEM & Olympiad Academy',
    categoryId: 'education',
    subcategoryZh: '滑大数理竞赛辅导',
    subcategoryEn: 'Math & CS Contest Prep',
    taglineZh: '滑铁卢大学CS/Math硕博导师授课，欧几里得数学竞赛、CCC计算机竞赛与大一高数抢跑',
    taglineEn: 'Taught by UW CS/Math graduate scholars. Euclid Math Contest, CCC Coding, Calculus & Linear Algebra',
    descriptionZh: '专为KW地区高中生及滑铁卢大一新生设立的数理强化机构。导师团队均曾斩获加拿大数学奥赛前列或毕业于滑大荣誉数学班。课程涵盖：Euclid/Fermat数学竞赛冲刺、CCC计算机编程竞赛辅导、UW大一MATH 135/137/138及CS 135课业同步辅导。小班授课与1对1答疑相结合。',
    descriptionEn: 'Premier tutoring institution founded by Waterloo Math and CS scholars. Tailored prep for Euclid math contest, Canadian Computing Competition (CCC), and university calculus/algebra support for new undergraduates.',
    address: '151 Frobisher Dr, Suite E-200, Waterloo, ON N2V 2C9',
    districtZh: '北区 (Northfield / Conestoga)',
    districtEn: 'North Waterloo (Conestoga Mall)',
    distanceFromUW: '3.1 km',
    phone: '+1 (519) 886-7733',
    wechat: 'WaterlooSTEM_Coach',
    email: 'admissions@waterloostem.ca',
    website: 'https://waterloostem-academy.example.com',
    rating: 4.9,
    reviewCount: 78,
    priceRange: '$$$',
    verified: true,
    languagesZh: ['普通话', 'English'],
    languagesEn: ['Mandarin', 'English'],
    hours: {
      daysZh: '周一至周日 10:00 - 21:00',
      daysEn: 'Mon - Sun 10:00 AM - 9:00 PM',
      open: '10:00',
      close: '21:00',
      isOpenToday: true
    },
    hoursDetailZh: '支持线上网课及滑铁卢本地实体教室辅导',
    hoursDetailEn: 'Flexible hybrid format: in-person classrooms and online live sessions',
    servicesZh: ['Euclid欧几里得数学竞赛集训', 'CCC加拿大计算机竞赛C++培训', 'UW大一微积分代数考前冲刺', '高中国际IB/AP数理拔高', '滑大申请文书与AIF表格指导'],
    servicesEn: ['Euclid Math Contest Intensive', 'CCC Coding Competition Training', 'UW First-Year Math 135/137 Coaching', 'IB/AP Higher Level STEM', 'Waterloo AIF Admissions Advisory'],
    perksZh: ['滑大硕博导师授课', '免费水平测试', '竞赛获奖率高'],
    perksEn: ['UW Scholar Tutors', 'Free Assessment', 'Proven Contest Track Record'],
    gradient: {
      from: 'from-violet-700',
      to: 'to-purple-900',
      accent: '#7C3AED'
    },
    reviews: [
      {
        id: 'r19',
        author: 'Mrs. He (Parent)',
        rating: 5,
        date: '2026-05-18',
        commentZh: '儿子跟着学社的徐老师学了半年的欧几里得竞赛题，今年顺利拿到滑大CS录取通知书！老师讲题逻辑清晰，极其负责。',
        commentEn: 'My son trained for the Euclid contest here and was accepted into Waterloo Computer Science this year! Outstanding instructors.'
      }
    ]
  }
];
