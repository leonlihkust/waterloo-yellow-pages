import React from 'react';
import { Category, CategoryId, Language } from '../types';
import { 
  LayoutGrid, 
  Utensils, 
  Hammer, 
  Scale, 
  Wrench, 
  Calculator, 
  Home, 
  HeartPulse, 
  GraduationCap,
  ArrowUpDown
} from 'lucide-react';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategoryId: CategoryId;
  selectedSubcategory: string;
  onSelectCategory: (id: CategoryId) => void;
  onSelectSubcategory: (sub: string) => void;
  sortBy: 'recommended' | 'rating' | 'reviews' | 'distance';
  onSortChange: (sort: 'recommended' | 'rating' | 'reviews' | 'distance') => void;
  lang: Language;
}

const ICON_MAP: Record<string, React.ElementType> = {
  LayoutGrid,
  Utensils,
  Hammer,
  Scale,
  Wrench,
  Calculator,
  Home,
  HeartPulse,
  GraduationCap
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategoryId,
  selectedSubcategory,
  onSelectCategory,
  onSelectSubcategory,
  sortBy,
  onSortChange,
  lang,
}) => {
  const currentCategory = categories.find((c) => c.id === selectedCategoryId);
  const subcategories = lang === 'zh' ? currentCategory?.subcategoriesZh : currentCategory?.subcategoriesEn;

  return (
    <div className="py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Category tabs & Sort dropdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none no-scrollbar">
            {categories.map((cat) => {
              const IconComponent = ICON_MAP[cat.icon] || LayoutGrid;
              const isSelected = selectedCategoryId === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onSelectSubcategory('all');
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-red-400 dark:text-red-600' : 'text-slate-500 dark:text-slate-400'}`} />
                  <span>{lang === 'zh' ? cat.nameZh : cat.nameEn}</span>
                </button>
              );
            })}
          </div>

          {/* Sort By Selector */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto text-xs text-slate-600 dark:text-slate-400">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-medium whitespace-nowrap">{lang === 'zh' ? '排序:' : 'Sort:'}</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="py-1.5 pl-2.5 pr-7 text-xs font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg border-0 focus:ring-1 focus:ring-red-500 cursor-pointer"
            >
              <option value="recommended">{lang === 'zh' ? '综合推荐' : 'Recommended'}</option>
              <option value="rating">{lang === 'zh' ? '评分最高' : 'Highest Rated'}</option>
              <option value="reviews">{lang === 'zh' ? '评价最多' : 'Most Reviews'}</option>
              <option value="distance">{lang === 'zh' ? '离UW最近' : 'Nearest to UW'}</option>
            </select>
          </div>
        </div>

        {/* Secondary Subcategory Strip if specific category has subcategories */}
        {selectedCategoryId !== 'all' && subcategories && subcategories.length > 1 && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/60 overflow-x-auto scrollbar-none">
            <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap shrink-0">
              {lang === 'zh' ? '子分类细选:' : 'Sub-tags:'}
            </span>
            <div className="flex items-center gap-1.5">
              {subcategories.map((sub, idx) => {
                const isAll = idx === 0;
                const isSelected = isAll
                  ? selectedSubcategory === 'all' || !selectedSubcategory
                  : selectedSubcategory === sub;

                return (
                  <button
                    key={sub}
                    onClick={() => onSelectSubcategory(isAll ? 'all' : sub)}
                    className={`px-3 py-1 rounded-lg text-xs transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-semibold border border-red-200 dark:border-red-900'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
