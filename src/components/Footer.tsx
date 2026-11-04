import React from 'react';
import { Language, CategoryId } from '../types';
import { ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onSelectCategory: (cat: CategoryId) => void;
  onOpenAddBusiness: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onSelectCategory,
  onOpenAddBusiness,
}) => {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Wordmark & Mission */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white font-bold text-xs">
                滑
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-sm">
                {lang === 'zh' ? '滑铁卢华人黄页' : 'Waterloo Chinese Pages'}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {lang === 'zh'
                ? '专注于为Kitchener-Waterloo及周边华人居民与留学生提供便捷、真实、可靠的本地华人商户检索与直连服务。'
                : 'Dedicated to connecting the Kitchener-Waterloo Chinese community and university students with trusted local businesses.'}
            </p>
            <div className="text-[11px] text-slate-400">
              © 2026 Waterloo Chinese Business Directory. All rights reserved.
            </div>
          </div>

          {/* Col 2: Core Directory Categories */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              {lang === 'zh' ? '黄页分类导航' : 'Directory Sections'}
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('food')}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  {lang === 'zh' ? '美食餐饮与外卖 (UW周边)' : 'Food & Dining (UW Plaza)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('renovation')}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  {lang === 'zh' ? '房屋装修、水暖与冷暖工程' : 'Home Renovation, Plumbing & HVAC'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('legal')}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  {lang === 'zh' ? '法律咨询、房产公证与移民' : 'Legal, Real Estate Notary & Visa'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('auto')}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  {lang === 'zh' ? '汽修保养、换雪胎与钣金' : 'Auto Repair & Winter Tires'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('accounting')}
                  className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  {lang === 'zh' ? 'CPA会计师与留学生报税' : 'CPA & Student Tax Advisory'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Waterloo Region Emergency & Public Contacts */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              {lang === 'zh' ? '滑铁卢实用便民热线' : 'Waterloo Region Public Helplines'}
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-xs">
              <li>
                <span>{lang === 'zh' ? '滑铁卢区域警察 (非紧急):' : 'WRPS Non-Emergency:'} </span>
                <span className="font-mono text-slate-900 dark:text-slate-200">519-570-9777</span>
              </li>
              <li>
                <span>{lang === 'zh' ? '安省免费医疗健康咨询:' : 'Health811 Ontario:'} </span>
                <span className="font-mono text-slate-900 dark:text-slate-200">811</span>
              </li>
              <li>
                <span>{lang === 'zh' ? '滑大UW校园安保与求助:' : 'UW Special Constables:'} </span>
                <span className="font-mono text-slate-900 dark:text-slate-200">519-888-4911</span>
              </li>
              <li>
                <span>{lang === 'zh' ? '紧急救援与火警救护:' : 'Emergency Police/Fire:'} </span>
                <span className="font-mono font-bold text-red-600">911</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Merchant Collaboration */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] mb-3">
              {lang === 'zh' ? '商户合作与反馈' : 'Business Listing & Support'}
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              {lang === 'zh'
                ? '若您在滑铁卢或基奇纳经营华人服务，欢迎免费登记入驻，让更多同胞找到您。'
                : 'Run a business in KW? Join the Waterloo Chinese directory for free.'}
            </p>
            <button
              onClick={onOpenAddBusiness}
              className="px-3.5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-xl text-xs hover:opacity-90 transition-opacity"
            >
              {lang === 'zh' ? '免费申请入驻商户' : 'Register Your Business'}
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-[11px] text-slate-400">
          {lang === 'zh'
            ? '本黄页收录商户信息均经人工或商户自主核实，如需更新或纠错请通过微信或客服邮箱联络。'
            : 'All listings are curated for the Kitchener-Waterloo community. Contact us for updates or corrections.'}
        </div>
      </div>
    </footer>
  );
};
