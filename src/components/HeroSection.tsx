import React from 'react';
import { Language, FilterState } from '../types';
import { Search, MapPin, X, Sparkles, Clock, CheckCircle2, PhoneCall, Bot } from 'lucide-react';
import { DISTRICTS } from '../data/businesses';

interface HeroSectionProps {
  lang: Language;
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  totalCount: number;
  onOpenAiAssistant: () => void;
  onQuickQuery: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  filters,
  onFilterChange,
  totalCount,
  onOpenAiAssistant,
  onQuickQuery,
}) => {
  return (
    <div className="relative border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-100/40 dark:bg-red-950/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Unboxed editorial kicker */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-red-600 dark:text-red-400 mb-3">
          <span>{lang === 'zh' ? '滑铁卢及基奇纳地区' : 'Waterloo & Kitchener'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'zh' ? '本地华人商户服务与便民黄页' : 'Local Chinese Business Directory'}</span>
        </div>

        {/* Headline with balanced wrap */}
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
          style={{ textWrap: 'balance' }}
        >
          {lang === 'zh'
            ? '连接滑铁卢华人商圈，随时查找靠谱服务'
            : 'Find Trusted Chinese Services in Kitchener-Waterloo'}
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 font-normal">
          {lang === 'zh'
            ? '汇集UW大学城与大滑铁卢地区美食餐饮、房屋维修装修、法律公证、汽车精修与财税服务，支持中英双语与微信一键联络。'
            : 'Authentic dining near UW, licensed home contractors, legal notaries, auto mechanics, and CPAs. Direct WeChat & phone contact.'}
        </p>

        {/* Main Search & Area Filter Bar */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800/90 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-200/80 dark:border-slate-700 p-2 sm:p-2.5 mb-5 transition-shadow hover:shadow-xl">
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            {/* Search input */}
            <div className="relative flex-1 flex items-center">
              <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
                placeholder={
                  lang === 'zh'
                    ? '搜索商户名称、菜系、水暖、律师、换雪胎...'
                    : 'Search business name, food, plumber, lawyer, tires...'
                }
                className="w-full pl-10 pr-9 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => onFilterChange({ searchQuery: '' })}
                  className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* District dropdown */}
            <div className="flex items-center border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-2 sm:pt-0 sm:pl-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 ml-1 sm:ml-2 pointer-events-none" />
              <select
                value={filters.district}
                onChange={(e) => onFilterChange({ district: e.target.value })}
                className="w-full sm:w-48 py-2.5 pl-2 pr-6 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200 bg-transparent rounded-xl focus:outline-none cursor-pointer"
              >
                {DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id} className="dark:bg-slate-800">
                    {lang === 'zh' ? d.nameZh : d.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Offline AI Query Button */}
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <Bot className="w-4 h-4" />
              <span>{lang === 'zh' ? '离线AI提问' : 'Ask AI'}</span>
            </button>
          </div>
        </div>

        {/* Quick toggles & Quick queries */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-medium mr-1 text-slate-500">
            {lang === 'zh' ? '快捷筛选:' : 'Filters:'}
          </span>

          {/* Open Now toggle */}
          <button
            onClick={() => onFilterChange({ openNowOnly: !filters.openNowOnly })}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
              filters.openNowOnly
                ? 'bg-red-50 text-red-700 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {lang === 'zh' ? '正在营业' : 'Open Now'}
          </button>

          {/* Student Discount toggle */}
          <button
            onClick={() => onFilterChange({ studentDiscountOnly: !filters.studentDiscountOnly })}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
              filters.studentDiscountOnly
                ? 'bg-red-50 text-red-700 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {lang === 'zh' ? '留学生优惠' : 'Student Discount'}
          </button>

          {/* Free Estimate toggle */}
          <button
            onClick={() => onFilterChange({ freeEstimateOnly: !filters.freeEstimateOnly })}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
              filters.freeEstimateOnly
                ? 'bg-red-50 text-red-700 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {lang === 'zh' ? '免费上门估价' : 'Free Estimate'}
          </button>

          {/* WeChat Pay toggle */}
          <button
            onClick={() => onFilterChange({ wechatOnly: !filters.wechatOnly })}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
              filters.wechatOnly
                ? 'bg-red-50 text-red-700 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {lang === 'zh' ? '微信支付/联系' : 'WeChat Available'}
          </button>
        </div>

        {/* Directory Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {lang === 'zh' ? '全城认证商户' : 'Verified Local Listings'} (
              <strong className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">
                {totalCount}
              </strong>
              )
            </span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'zh' ? '双语沟通 · 微信一键复制' : 'Bilingual · WeChat Direct'}</span>
          </div>
          <span aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5 text-red-600" />
            <span>{lang === 'zh' ? '离线AI助手 · 隐私安全无需联网' : '100% Offline AI · Private & Fast'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
