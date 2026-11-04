import React, { useState } from 'react';
import { Business, CategoryId, Language } from '../types';
import { CATEGORIES, DISTRICTS } from '../data/businesses';
import { X, PlusCircle, CheckCircle2 } from 'lucide-react';

interface AddBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBusiness: (business: Business) => void;
  lang: Language;
}

export const AddBusinessModal: React.FC<AddBusinessModalProps> = ({
  isOpen,
  onClose,
  onAddBusiness,
  lang,
}) => {
  if (!isOpen) return null;

  const [nameZh, setNameZh] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [categoryId, setCategoryId] = useState<CategoryId>('renovation');
  const [subcategoryZh, setSubcategoryZh] = useState('');
  const [district, setDistrict] = useState(DISTRICTS[1].nameZh);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [wechat, setWechat] = useState('');
  const [descriptionZh, setDescriptionZh] = useState('');
  const [servicesInput, setServicesInput] = useState('');
  const [priceRange, setPriceRange] = useState<'$' | '$$' | '$$$' | '$$$$'>('$$');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameZh || !phone) return;

    const servicesList = servicesInput
      ? servicesInput.split(/[,，、]/).map((s) => s.trim()).filter(Boolean)
      : ['专业服务', '质量保证', '信誉可靠'];

    const newBiz: Business = {
      id: `custom-${Date.now()}`,
      nameZh: nameZh.trim(),
      nameEn: nameEn.trim() || nameZh.trim(),
      categoryId,
      subcategoryZh: subcategoryZh || '本地专业便民服务',
      subcategoryEn: 'Local Services',
      taglineZh: '滑铁卢华人商圈新入驻认证商户，真诚服务KW社区',
      taglineEn: 'Newly registered local business serving the Kitchener-Waterloo Chinese community',
      descriptionZh: descriptionZh.trim() || '欢迎联系咨询，提供优质正规服务，让滑铁卢华人生活更便利。',
      descriptionEn: 'Welcome to contact us for trusted local services in Waterloo Region.',
      address: address.trim() || 'Waterloo, ON',
      districtZh: district,
      districtEn: district,
      distanceFromUW: '1.5 km',
      phone: phone.trim(),
      wechat: wechat.trim() || 'KW_Contact',
      rating: 5.0,
      reviewCount: 1,
      priceRange,
      verified: true,
      languagesZh: ['普通话', 'English'],
      languagesEn: ['Mandarin', 'English'],
      hours: {
        daysZh: '周一至周六 09:00 - 18:00',
        daysEn: 'Mon - Sat 9:00 AM - 6:00 PM',
        open: '09:00',
        close: '18:00',
        isOpenToday: true
      },
      hoursDetailZh: '欢迎提前电话或微信预约咨询',
      hoursDetailEn: 'Advance phone or WeChat inquiry welcome',
      servicesZh: servicesList,
      servicesEn: servicesList,
      perksZh: ['新入驻认证', '支持微信联系', '诚信经营'],
      perksEn: ['Verified Listing', 'WeChat Available', 'Honest Service'],
      gradient: {
        from: 'from-blue-600',
        to: 'to-slate-800',
        accent: '#2563EB'
      },
      reviews: [
        {
          id: `rev-initial`,
          author: '滑铁卢黄页审核部',
          rating: 5,
          date: new Date().toISOString().split('T')[0],
          commentZh: '商户资料已初步审核通过，欢迎社区朋友光临与监督！',
          commentEn: 'Business profile successfully verified and listed on Waterloo Yellow Pages.'
        }
      ]
    };

    onAddBusiness(newBiz);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-red-600" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              {lang === 'zh' ? '滑铁卢华人商户免费入驻' : 'List Your Business for Free'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'zh' ? '入驻申请提交成功！' : 'Business Successfully Listed!'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {lang === 'zh'
                  ? '您的商户信息已加入滑铁卢华人黄页数据库，大家现在即可搜索与联系您。'
                  : 'Your business is now active in the directory and searchable by Waterloo residents.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'zh' ? '商户中文名称 *' : 'Business Chinese Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={nameZh}
                    onChange={(e) => setNameZh(e.target.value)}
                    placeholder="如: 枫城精工水暖管道"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'zh' ? '英文名称 (选填)' : 'English Name (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={nameEn}
                    onChange={(e) => setNameEn(e.target.value)}
                    placeholder="e.g. Maple Plumbing KW"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'zh' ? '所属主类别 *' : 'Category *'}
                  </label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value as CategoryId)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none cursor-pointer"
                  >
                    {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                      <option key={c.id} value={c.id}>
                        {lang === 'zh' ? c.nameZh : c.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'zh' ? '所属区域 *' : 'District *'}
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none cursor-pointer"
                  >
                    {DISTRICTS.map((d) => (
                      <option key={d.id} value={d.nameZh}>
                        {lang === 'zh' ? d.nameZh : d.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'zh' ? '联系电话 *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (519) 123-4567"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {lang === 'zh' ? '微信号 (推荐填写)' : 'WeChat ID (Recommended)'}
                  </label>
                  <input
                    type="text"
                    value={wechat}
                    onChange={(e) => setWechat(e.target.value)}
                    placeholder="如: Waterloo_Service"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === 'zh' ? '服务地址或大致街道' : 'Service Address or Street'}
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="如: University Ave W / Phillip St / Waterloo"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === 'zh' ? '主营业务特色 (用逗号分隔)' : 'Services / Specialties (Comma separated)'}
                </label>
                <input
                  type="text"
                  value={servicesInput}
                  onChange={(e) => setServicesInput(e.target.value)}
                  placeholder="如: 免费上门估价, 24小时抢修, 水管通渠, 留学生特惠"
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {lang === 'zh' ? '商户详细介绍' : 'Business Description'}
                </label>
                <textarea
                  rows={3}
                  value={descriptionZh}
                  onChange={(e) => setDescriptionZh(e.target.value)}
                  placeholder="详细描述您的经验资质、营业时间、收费标准等..."
                  className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 rounded-xl"
                >
                  {lang === 'zh' ? '取消' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl shadow-sm transition-colors"
                >
                  {lang === 'zh' ? '立即提交发布' : 'Submit Listing'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
