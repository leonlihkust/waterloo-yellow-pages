import React, { useState, useEffect, useMemo } from 'react';
import { Business, CategoryId, FilterState, Language, Review } from './types';
import { CATEGORIES, INITIAL_BUSINESSES } from './data/businesses';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import { BusinessCard } from './components/BusinessCard';
import { BusinessDetailModal } from './components/BusinessDetailModal';
import { AddBusinessModal } from './components/AddBusinessModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { CommunityNotice } from './components/CommunityNotice';
import { Footer } from './components/Footer';
import { 
  Bot, 
  Bookmark, 
  SearchX, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Filter,
  X
} from 'lucide-react';

const STORAGE_KEY_BIZ = 'waterloo_yellow_pages_businesses_v1';
const STORAGE_KEY_BOOKMARKS = 'waterloo_yellow_pages_bookmarks_v1';
const STORAGE_KEY_LANG = 'waterloo_yellow_pages_lang_v1';

export default function App() {
  // 1. Language state
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      return (saved === 'en' || saved === 'zh') ? saved : 'zh';
    } catch {
      return 'zh';
    }
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'zh' ? 'en' : 'zh';
      try {
        localStorage.setItem(STORAGE_KEY_LANG, next);
      } catch {}
      return next;
    });
  };

  // 2. Businesses state with local storage persistence
  const [businesses, setBusinesses] = useState<Business[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BIZ);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}
    return INITIAL_BUSINESSES;
  });

  // Save businesses on update
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BIZ, JSON.stringify(businesses));
    } catch {}
  }, [businesses]);

  // 3. Bookmarks
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // 4. Filters state
  const [filters, setFilters] = useState<FilterState>({
    categoryId: 'all',
    subcategory: 'all',
    searchQuery: '',
    district: 'all',
    openNowOnly: false,
    studentDiscountOnly: false,
    wechatOnly: false,
    freeEstimateOnly: false,
    sortBy: 'recommended'
  });

  // 5. Modals & Drawers state
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [isAddBusinessOpen, setIsAddBusinessOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);

  // Handle filter changes
  const handleFilterChange = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
    if (showOnlyBookmarks) setShowOnlyBookmarks(false);
  };

  const handleResetFilters = () => {
    setFilters({
      categoryId: 'all',
      subcategory: 'all',
      searchQuery: '',
      district: 'all',
      openNowOnly: false,
      studentDiscountOnly: false,
      wechatOnly: false,
      freeEstimateOnly: false,
      sortBy: 'recommended'
    });
    setShowOnlyBookmarks(false);
  };

  // Add review to a business
  const handleAddReview = (businessId: string, newReview: Review) => {
    setBusinesses((prev) =>
      prev.map((b) => {
        if (b.id === businessId) {
          const updatedReviews = [newReview, ...b.reviews];
          const newAvgRating = (
            updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length
          );
          return {
            ...b,
            reviews: updatedReviews,
            reviewCount: updatedReviews.length,
            rating: parseFloat(newAvgRating.toFixed(1))
          };
        }
        return b;
      })
    );

    // Keep selectedBusiness synced
    setSelectedBusiness((prev) => {
      if (prev && prev.id === businessId) {
        const updatedReviews = [newReview, ...prev.reviews];
        const newAvg = (
          updatedReviews.reduce((sum, r) => sum + r.rating, 0) / updatedReviews.length
        );
        return {
          ...prev,
          reviews: updatedReviews,
          reviewCount: updatedReviews.length,
          rating: parseFloat(newAvg.toFixed(1))
        };
      }
      return prev;
    });
  };

  // Add custom business
  const handleAddBusiness = (newBiz: Business) => {
    setBusinesses((prev) => [newBiz, ...prev]);
  };

  // Filter & sort business items
  const filteredBusinesses = useMemo(() => {
    let list = businesses;

    if (showOnlyBookmarks) {
      list = list.filter((b) => bookmarkedIds.includes(b.id));
    }

    // Category
    if (filters.categoryId !== 'all') {
      list = list.filter((b) => b.categoryId === filters.categoryId);
    }

    // Subcategory
    if (filters.subcategory && filters.subcategory !== 'all') {
      list = list.filter(
        (b) =>
          b.subcategoryZh === filters.subcategory ||
          b.subcategoryEn === filters.subcategory
      );
    }

    // District
    if (filters.district && filters.district !== 'all') {
      list = list.filter((b) => {
        const d = filters.district.toLowerCase();
        return (
          b.districtZh.toLowerCase().includes(d) ||
          b.districtEn.toLowerCase().includes(d) ||
          b.address.toLowerCase().includes(d)
        );
      });
    }

    // Open now
    if (filters.openNowOnly) {
      list = list.filter((b) => b.hours.isOpenToday);
    }

    // Student discount
    if (filters.studentDiscountOnly) {
      list = list.filter(
        (b) =>
          b.perksZh.some((p) => p.includes('学生') || p.includes('9折')) ||
          b.perksEn.some((p) => p.toLowerCase().includes('student'))
      );
    }

    // Free estimate
    if (filters.freeEstimateOnly) {
      list = list.filter(
        (b) =>
          b.perksZh.some((p) => p.includes('估价')) ||
          b.perksEn.some((p) => p.toLowerCase().includes('estimate'))
      );
    }

    // WeChat
    if (filters.wechatOnly) {
      list = list.filter((b) => !!b.wechat);
    }

    // Search query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      list = list.filter((b) => {
        const text = `${b.nameZh} ${b.nameEn} ${b.subcategoryZh} ${b.subcategoryEn} ${b.taglineZh} ${b.taglineEn} ${b.descriptionZh} ${b.descriptionEn} ${b.address} ${b.servicesZh.join(' ')} ${b.servicesEn.join(' ')} ${b.perksZh.join(' ')}`.toLowerCase();
        return text.includes(q);
      });
    }

    // Sorting
    const sorted = [...list].sort((a, b) => {
      if (filters.sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (filters.sortBy === 'reviews') {
        return b.reviewCount - a.reviewCount;
      }
      if (filters.sortBy === 'distance') {
        return parseFloat(a.distanceFromUW) - parseFloat(b.distanceFromUW);
      }
      // 'recommended': featured first, then rating
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.rating * Math.log10(b.reviewCount + 5) - a.rating * Math.log10(a.reviewCount + 5);
    });

    return sorted;
  }, [businesses, filters, showOnlyBookmarks, bookmarkedIds]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* 1. Header (Strict Top Bar Contract) */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onSelectCategory={(catId) => handleFilterChange({ categoryId: catId, subcategory: 'all' })}
        selectedCategory={filters.categoryId}
        onOpenAddBusiness={() => setIsAddBusinessOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        bookmarkCount={bookmarkedIds.length}
        onOpenBookmarks={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
      />

      {/* 2. Hero Section with Search & Instant District Filter */}
      <HeroSection
        lang={lang}
        filters={filters}
        onFilterChange={handleFilterChange}
        totalCount={businesses.length}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        onQuickQuery={(query) => handleFilterChange({ searchQuery: query })}
      />

      {/* 3. Community Seasonal Notices */}
      <CommunityNotice
        lang={lang}
        onFilterCategory={(catId) => handleFilterChange({ categoryId: catId, subcategory: 'all' })}
        onSearchPrompt={(query) => handleFilterChange({ searchQuery: query })}
      />

      {/* 4. Interactive Category & Subcategory Segmented Filter Bar */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategoryId={filters.categoryId}
        selectedSubcategory={filters.subcategory}
        onSelectCategory={(id) => handleFilterChange({ categoryId: id, subcategory: 'all' })}
        onSelectSubcategory={(sub) => handleFilterChange({ subcategory: sub })}
        sortBy={filters.sortBy}
        onSortChange={(sort) => handleFilterChange({ sortBy: sort })}
        lang={lang}
      />

      {/* 5. Directory Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Metadata Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2 flex-wrap">
            <span>
              {lang === 'zh' ? '展示中:' : 'Showing:'}{' '}
              <strong className="text-slate-900 dark:text-white tabular-nums font-semibold">
                {filteredBusinesses.length}
              </strong>{' '}
              {lang === 'zh' ? '家滑铁卢商户' : 'local businesses'}
            </span>

            {showOnlyBookmarks && (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md">
                <Bookmark className="w-3 h-3 fill-amber-500" />
                <span>{lang === 'zh' ? '仅显示我的收藏' : 'Bookmarks Only'}</span>
                <button
                  onClick={() => setShowOnlyBookmarks(false)}
                  className="ml-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {filters.searchQuery && (
              <span className="text-slate-600 dark:text-slate-300">
                (关键词: "{filters.searchQuery}")
              </span>
            )}
          </div>

          {(filters.searchQuery || filters.categoryId !== 'all' || filters.openNowOnly || filters.studentDiscountOnly || filters.freeEstimateOnly || filters.wechatOnly || showOnlyBookmarks) && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '清空全部筛选条件' : 'Reset All Filters'}</span>
            </button>
          )}
        </div>

        {/* Business Grid */}
        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBusinesses.map((biz) => (
              <BusinessCard
                key={biz.id}
                business={biz}
                lang={lang}
                onSelect={(b) => setSelectedBusiness(b)}
                isBookmarked={bookmarkedIds.includes(biz.id)}
                onToggleBookmark={toggleBookmark}
                onQuickInquiry={(b) => setSelectedBusiness(b)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <SearchX className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'zh' ? '未找到符合条件的商户' : 'No Businesses Found'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              {lang === 'zh'
                ? '您可以尝试缩减搜索关键词、切换分类，或使用右下角的离线AI小助手进行自然语言智能匹配。'
                : 'Try adjusting your search keywords, clearing filters, or ask our offline AI assistant for recommendations.'}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 transition-colors"
              >
                {lang === 'zh' ? '重置全部筛选' : 'Reset Filters'}
              </button>
              <button
                onClick={() => setIsAiAssistantOpen(true)}
                className="px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors"
              >
                {lang === 'zh' ? '问问离线AI助手' : 'Ask Offline AI'}
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 6. Footer with emergency helplines & navigation */}
      <Footer
        lang={lang}
        onSelectCategory={(catId) => handleFilterChange({ categoryId: catId, subcategory: 'all' })}
        onOpenAddBusiness={() => setIsAddBusinessOpen(true)}
      />

      {/* Floating Offline AI Assistant Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-full shadow-xl shadow-red-600/30 transition-all hover:scale-105"
          title={lang === 'zh' ? '开启滑铁卢离线AI小助手' : 'Open Waterloo Offline AI Guide'}
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight pr-1">
            {lang === 'zh' ? '离线AI便民小助手' : 'Offline AI Guide'}
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
        </button>
      </div>

      {/* Modals */}
      <BusinessDetailModal
        business={selectedBusiness}
        lang={lang}
        onClose={() => setSelectedBusiness(null)}
        onAddReview={handleAddReview}
      />

      <AddBusinessModal
        isOpen={isAddBusinessOpen}
        onClose={() => setIsAddBusinessOpen(false)}
        onAddBusiness={handleAddBusiness}
        lang={lang}
      />

      <AiAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        businesses={businesses}
        lang={lang}
        onSelectBusiness={(b) => setSelectedBusiness(b)}
      />
    </div>
  );
}
