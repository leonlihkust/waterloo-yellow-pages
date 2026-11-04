import React, { useState } from 'react';
import { Business, Language, Review } from '../types';
import { 
  X, 
  Star, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  Globe, 
  Mail, 
  MessageSquare, 
  Send, 
  Share2,
  Calendar,
  DollarSign
} from 'lucide-react';

interface BusinessDetailModalProps {
  business: Business | null;
  lang: Language;
  onClose: () => void;
  onAddReview: (businessId: string, review: Review) => void;
}

export const BusinessDetailModal: React.FC<BusinessDetailModalProps> = ({
  business,
  lang,
  onClose,
  onAddReview,
}) => {
  if (!business) return null;

  const [copiedWechat, setCopiedWechat] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  
  // Review form state
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Quick inquiry state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryContact, setInquiryContact] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText(business.wechat);
    setCopiedWechat(true);
    setTimeout(() => setCopiedWechat(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) return;

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      author: reviewAuthor.trim(),
      rating: reviewRating,
      date: new Date().toISOString().split('T')[0],
      commentZh: reviewComment.trim(),
      commentEn: reviewComment.trim()
    };

    onAddReview(business.id, newRev);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setReviewSubmitted(false);
      setReviewAuthor('');
      setReviewComment('');
    }, 1500);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryContact.trim()) return;
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryName('');
      setInquiryContact('');
      setInquiryMsg('');
    }, 3000);
  };

  const name = lang === 'zh' ? business.nameZh : business.nameEn;
  const subcategory = lang === 'zh' ? business.subcategoryZh : business.subcategoryEn;
  const district = lang === 'zh' ? business.districtZh : business.districtEn;
  const description = lang === 'zh' ? business.descriptionZh : business.descriptionEn;
  const services = lang === 'zh' ? business.servicesZh : business.servicesEn;
  const perks = lang === 'zh' ? business.perksZh : business.perksEn;
  const hoursDetail = lang === 'zh' ? business.hoursDetailZh : business.hoursDetailEn;
  const languages = lang === 'zh' ? business.languagesZh : business.languagesEn;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/40">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{subcategory}</span>
            <span aria-hidden="true">·</span>
            <span>{district}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums font-mono">距UW {business.distanceFromUW}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleCopyLink}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={lang === 'zh' ? '分享商户信息' : 'Share'}
              aria-label="Share"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Main Title Block */}
          <div className="mb-6">
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {name}
              </h2>
              {business.verified && (
                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'zh' ? '实名持牌认证商户' : 'Verified Business'}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="tabular-nums font-mono text-sm">{business.rating.toFixed(1)}</span>
              </div>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums font-medium text-slate-700 dark:text-slate-300">
                {business.reviewCount} {lang === 'zh' ? '条真实客户评价' : 'verified reviews'}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{business.priceRange}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'zh' ? '服务语言:' : 'Languages:'} {languages.join(' / ')}</span>
            </div>

            {/* Address & Hours Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {business.address}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:underline mt-0.5"
                  >
                    <span>{lang === 'zh' ? '在Google地图中打开导航' : 'Open in Google Maps'}</span>
                    <Globe className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    {lang === 'zh' ? business.hours.daysZh : business.hours.daysEn}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 mt-0.5">
                    {hoursDetail}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href={`tel:${business.phone.replace(/[^0-9+]/g, '')}`}
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 text-white font-semibold text-xs sm:text-sm hover:bg-red-700 active:bg-red-800 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'zh' ? `致电 ${business.phone}` : `Call ${business.phone}`}</span>
            </a>

            <button
              onClick={handleCopyWeChat}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors border ${
                copiedWechat
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
              }`}
            >
              {copiedWechat ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'zh' ? '微信号已复制到剪贴板！' : 'WeChat ID Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>{lang === 'zh' ? `复制微信号: ${business.wechat}` : `WeChat: ${business.wechat}`}</span>
                </>
              )}
            </button>
          </div>

          {/* Business Detailed Intro */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              {lang === 'zh' ? '商户介绍' : 'About Business'}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Services & Benefits Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-5 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-200/80 dark:border-slate-800">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                {lang === 'zh' ? '服务项目' : 'Services Offered'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {services.map((srv) => (
                  <li key={srv} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                {lang === 'zh' ? '特色权益与保障' : 'Perks & Guarantees'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {perks.map((prk) => (
                  <li key={prk} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{prk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="mb-8 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
              {lang === 'zh' ? '在线留言 / 预约咨询' : 'Quick Inquiry / Consultation'}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              {lang === 'zh'
                ? '留下您的称呼与微信/电话，商户将尽快与您取得联系。'
                : 'Leave your contact info and the business will reach out directly.'}
            </p>

            {inquirySuccess ? (
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{lang === 'zh' ? '留言已成功送达！商户将尽快微信或电话回复。' : 'Inquiry sent! The business will reply shortly.'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder={lang === 'zh' ? '您的称呼 (如 张先生 / Emma)' : 'Your Name'}
                    className="px-3.5 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    required
                    value={inquiryContact}
                    onChange={(e) => setInquiryContact(e.target.value)}
                    placeholder={lang === 'zh' ? '您的微信或电话号码' : 'Phone number or WeChat ID'}
                    className="px-3.5 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
                <textarea
                  rows={2}
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  placeholder={lang === 'zh' ? '简述您的需求 (如 预计下周测量、想了解包间预定等)' : 'Briefly describe your requirements...'}
                  className="w-full px-3.5 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  {lang === 'zh' ? '提交咨询' : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Customer Reviews & Ratings Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  {lang === 'zh' ? '顾客点评与口碑' : 'Customer Reviews'}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {business.reviews.length} {lang === 'zh' ? '条来自滑铁卢本地社区的评价' : 'verified community reviews'}
                </span>
              </div>

              {!showReviewForm && (
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="px-3 py-1.5 text-xs font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                >
                  {lang === 'zh' ? '+ 撰写点评' : '+ Write Review'}
                </button>
              )}
            </div>

            {/* Leave a Review Form */}
            {showReviewForm && (
              <form onSubmit={handleSubmitReview} className="mb-6 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {lang === 'zh' ? '评价此商户' : 'Review this business'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="text-slate-400 hover:text-slate-600 text-xs"
                  >
                    {lang === 'zh' ? '取消' : 'Cancel'}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate-600 dark:text-slate-400">{lang === 'zh' ? '评分:' : 'Rating:'}</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setReviewRating(star)}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-4 h-4 ${
                            star <= reviewRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  required
                  value={reviewAuthor}
                  onChange={(e) => setReviewAuthor(e.target.value)}
                  placeholder={lang === 'zh' ? '您的称呼 / 身份 (如 UW校友 / 本地屋主)' : 'Your name / title'}
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                />

                <textarea
                  rows={3}
                  required
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder={lang === 'zh' ? '分享您的真实体验与服务建议...' : 'Share your real experience with this business...'}
                  className="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none"
                />

                {reviewSubmitted ? (
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium">
                    {lang === 'zh' ? '点评发表成功，感谢您的反馈！' : 'Review posted! Thank you.'}
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700"
                  >
                    {lang === 'zh' ? '提交点评' : 'Submit Review'}
                  </button>
                )}
              </form>
            )}

            {/* Reviews List */}
            <div className="space-y-3">
              {business.reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="p-4 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {rev.author}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{rev.date}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {lang === 'zh' ? rev.commentZh : rev.commentEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
