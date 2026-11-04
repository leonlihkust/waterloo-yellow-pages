import React, { useState } from 'react';
import { Business, Language } from '../types';
import { 
  Star, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  Bookmark, 
  ExternalLink,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

interface BusinessCardProps {
  business: Business;
  lang: Language;
  onSelect: (business: Business) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onQuickInquiry: (business: Business) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  lang,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  onQuickInquiry,
}) => {
  const [copiedWechat, setCopiedWechat] = useState(false);

  const handleCopyWeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(business.wechat);
    setCopiedWechat(true);
    setTimeout(() => setCopiedWechat(false), 2000);
  };

  const name = lang === 'zh' ? business.nameZh : business.nameEn;
  const subcategory = lang === 'zh' ? business.subcategoryZh : business.subcategoryEn;
  const district = lang === 'zh' ? business.districtZh : business.districtEn;
  const tagline = lang === 'zh' ? business.taglineZh : business.taglineEn;
  const services = lang === 'zh' ? business.servicesZh : business.servicesEn;
  const perks = lang === 'zh' ? business.perksZh : business.perksEn;

  return (
    <div 
      onClick={() => onSelect(business)}
      className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:shadow-lg cursor-pointer"
    >
      {/* Top Quiet 1-Line Text Kicker & Bookmark */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2.5">
        <div className="flex items-center gap-1.5 overflow-hidden">
          <span className="font-medium text-slate-700 dark:text-slate-300 truncate">
            {subcategory}
          </span>
          <span aria-hidden="true">·</span>
          <span className="truncate">{district}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums font-mono text-slate-600 dark:text-slate-400">
            {business.distanceFromUW}
          </span>
        </div>

        {/* Bookmark button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(business.id);
          }}
          className={`p-1.5 rounded-lg transition-colors shrink-0 ${
            isBookmarked
              ? 'text-amber-500 hover:text-amber-600 bg-amber-50 dark:bg-amber-950/40'
              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          title={isBookmarked ? (lang === 'zh' ? '取消收藏' : 'Remove Bookmark') : (lang === 'zh' ? '收藏此商户' : 'Bookmark')}
          aria-label="Bookmark"
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
        </button>
      </div>

      {/* Business Name with Verified Badge */}
      <div className="flex items-start justify-between gap-3 mb-1.5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
          {name}
        </h3>
        {business.verified && (
          <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">{lang === 'zh' ? '官方核验' : 'Verified'}</span>
          </div>
        )}
      </div>

      {/* Ratings & Price indicator */}
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
        <div className="flex items-center gap-1 text-amber-500 font-semibold">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="tabular-nums font-mono">{business.rating.toFixed(1)}</span>
        </div>
        <span aria-hidden="true">·</span>
        <span className="tabular-nums">
          {business.reviewCount} {lang === 'zh' ? '条点评' : 'reviews'}
        </span>
        <span aria-hidden="true">·</span>
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          {business.priceRange}
        </span>
        <span aria-hidden="true">·</span>
        <span className={`font-medium ${business.hours.isOpenToday ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
          {business.hours.isOpenToday ? (lang === 'zh' ? '今日营业中' : 'Open Today') : (lang === 'zh' ? '休息中' : 'Closed')}
        </span>
      </div>

      {/* Tagline / Brief Value Prop */}
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed flex-1">
        {tagline}
      </p>

      {/* Service Highlights (Unboxed text with dots) */}
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        {perks.slice(0, 3).map((perk, idx) => (
          <React.Fragment key={perk}>
            <span className="text-slate-700 dark:text-slate-300 font-medium">
              {perk}
            </span>
            {idx < perks.slice(0, 3).length - 1 && <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Quick Action Contacts Footer */}
      <div className="flex items-center justify-between gap-2 pt-1 text-xs">
        <div className="flex items-center gap-2">
          {/* Direct Phone Call */}
          <a
            href={`tel:${business.phone.replace(/[^0-9+]/g, '')}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium whitespace-nowrap"
            title={lang === 'zh' ? '直接拨打电话' : 'Call Business'}
          >
            <Phone className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline font-mono">{business.phone}</span>
            <span className="sm:hidden">{lang === 'zh' ? '电话' : 'Call'}</span>
          </a>

          {/* WeChat Click-to-copy */}
          <button
            onClick={handleCopyWeChat}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg transition-colors font-medium whitespace-nowrap ${
              copiedWechat
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
            title={lang === 'zh' ? '点击复制微信号' : 'Copy WeChat ID'}
          >
            {copiedWechat ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'zh' ? '已复制' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>{lang === 'zh' ? '微信号' : 'WeChat'}</span>
              </>
            )}
          </button>
        </div>

        {/* View Details CTA */}
        <button
          onClick={() => onSelect(business)}
          className="flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors whitespace-nowrap pl-2"
        >
          <span>{lang === 'zh' ? '查看详情' : 'Details'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
