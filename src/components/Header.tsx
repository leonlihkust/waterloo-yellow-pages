import React from 'react';
import { Language, CategoryId } from '../types';
import { Bot, Globe, PlusCircle, Compass } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onSelectCategory: (cat: CategoryId) => void;
  selectedCategory: CategoryId;
  onOpenAddBusiness: () => void;
  onOpenAiAssistant: () => void;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onSelectCategory,
  selectedCategory,
  onOpenAddBusiness,
  onOpenAiAssistant,
  bookmarkCount,
  onOpenBookmarks,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory('all');
            }}
            className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold tracking-tight text-lg sm:text-xl whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-sm font-black text-sm">
              滑
            </div>
            <span>
              {lang === 'zh' ? '滑铁卢华人黄页' : 'Waterloo Chinese Directory'}
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => onSelectCategory('all')}
              className={`hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : ''
              }`}
            >
              {lang === 'zh' ? '全部商户' : 'All Listings'}
            </button>
            <button
              onClick={() => onSelectCategory('food')}
              className={`hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'food'
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : ''
              }`}
            >
              {lang === 'zh' ? '美食餐饮' : 'Food & Dining'}
            </button>
            <button
              onClick={() => onSelectCategory('renovation')}
              className={`hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'renovation'
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : ''
              }`}
            >
              {lang === 'zh' ? '装修水暖' : 'Renovation & HVAC'}
            </button>
            <button
              onClick={() => onSelectCategory('legal')}
              className={`hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'legal'
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : ''
              }`}
            >
              {lang === 'zh' ? '法律公证' : 'Legal & Notary'}
            </button>
            <button
              onClick={() => onSelectCategory('auto')}
              className={`hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'auto'
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : ''
              }`}
            >
              {lang === 'zh' ? '汽车保养' : 'Auto Services'}
            </button>
            <button
              onClick={() => onSelectCategory('accounting')}
              className={`hover:text-red-600 dark:hover:text-red-400 transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === 'accounting'
                  ? 'text-red-600 dark:text-red-400 font-semibold'
                  : ''
              }`}
            >
              {lang === 'zh' ? '报税会计' : 'Tax & Accounting'}
            </button>
          </nav>

          {/* Zone 3: Primary action & utilities */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* AI Assistant Quick Trigger */}
            <button
              onClick={onOpenAiAssistant}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/80 transition-colors whitespace-nowrap shrink-0 shadow-xs"
              title={lang === 'zh' ? '开启离线AI助手' : 'Open Offline AI Guide'}
            >
              <Bot className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
              <span>{lang === 'zh' ? '离线AI问答' : 'Offline AI Guide'}</span>
            </button>

            {/* Bookmarks counter button */}
            {bookmarkCount > 0 && (
              <button
                onClick={onOpenBookmarks}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap shrink-0"
              >
                <span>{lang === 'zh' ? '已收藏' : 'Saved'}</span>
                <span className="tabular-nums font-semibold bg-slate-200 dark:bg-slate-700 px-1.5 py-0.2 rounded text-[11px]">
                  {bookmarkCount}
                </span>
              </button>
            )}

            {/* Language toggle */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap shrink-0"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Submit / Add business button */}
            <button
              onClick={onOpenAddBusiness}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 active:bg-red-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '商户免费入驻' : 'List Business'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
