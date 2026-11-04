import React from 'react';
import { Language, CategoryId } from '../types';
import { Bell, Flame, ShieldAlert, Car, Award, ChevronRight } from 'lucide-react';

interface CommunityNoticeProps {
  lang: Language;
  onFilterCategory: (cat: CategoryId) => void;
  onSearchPrompt: (query: string) => void;
}

export const CommunityNotice: React.FC<CommunityNoticeProps> = ({
  lang,
  onFilterCategory,
  onSearchPrompt,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-slate-50 dark:bg-slate-850/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-red-600" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              {lang === 'zh' ? '滑铁卢华人生活便民小贴士' : 'Waterloo Community Notices'}
            </h4>
          </div>
          <span className="text-[11px] text-slate-400">
            {lang === 'zh' ? 'KW生活动态' : 'Live Updates'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Tip 1: Auto / Snow Tires */}
          <div 
            onClick={() => onSearchPrompt('换雪胎')}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 hover:border-red-300 dark:hover:border-red-900 cursor-pointer transition-colors group"
          >
            <Car className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {lang === 'zh' ? '冬季换雪胎季提醒' : 'Winter Tire Season'}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 line-clamp-1">
                {lang === 'zh' ? '安省保险公司多有雪胎折扣，建议提前微信预约' : 'Insurance discounts apply for winter tires in Ontario'}
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Tip 2: Heating / Renovation */}
          <div 
            onClick={() => onFilterCategory('renovation')}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 hover:border-red-300 dark:hover:border-red-900 cursor-pointer transition-colors group"
          >
            <Flame className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {lang === 'zh' ? '暖气炉入冬点火维护' : 'Furnace Inspection'}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 line-clamp-1">
                {lang === 'zh' ? '避免寒冬暖气打不着火，持牌师傅提供24h抢修' : 'Schedule preventive maintenance to prevent cold freeze'}
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* Tip 3: Student Tax & Legal */}
          <div 
            onClick={() => onFilterCategory('accounting')}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 hover:border-red-300 dark:hover:border-red-900 cursor-pointer transition-colors group"
          >
            <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {lang === 'zh' ? '留学生学费抵税与补贴' : 'Student Tax Credits'}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 line-clamp-1">
                {lang === 'zh' ? 'T2202表格与房租收据累积，报税季享团报特惠' : 'Accumulate tuition credits to offset future income taxes'}
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
