import React, { useState, useRef, useEffect } from 'react';
import { Business, ChatMessage, Language } from '../types';
import { queryOfflineAssistant, PRESET_QUESTIONS } from '../utils/offlineAssistant';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  Phone, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Star,
  ExternalLink,
  Zap
} from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  businesses: Business[];
  lang: Language;
  onSelectBusiness: (business: Business) => void;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  businesses,
  lang,
  onSelectBusiness,
}) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      textZh: '您好！我是滑铁卢本地离线生活AI小助手。您可以直接问我关于UW大学城及KW全城的各类华人便民服务，例如：“水龙头漏水找谁修？”、“UW附近有什么好吃的川菜？”、“买房交接需要找哪家公证律师？”等。本助手100%运行在您的浏览器本地，免网络连接且零隐私泄露！',
      textEn: 'Hello! I am your Waterloo Local Offline AI Assistant. Feel free to ask me anything about services in Kitchener-Waterloo: "Who can fix a leaking faucet?", "Good spicy food near UW?", "Notary lawyer for home closing?", etc. Runs 100% locally in your browser with zero latency and full privacy!',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedFollowUpsZh: [
        'UW附近有什么推荐的好吃中餐？',
        '水管漏水/暖气不热，急需紧急维修！',
        '买房交接找哪家律师做公证Closing？'
      ],
      suggestedFollowUpsEn: [
        'What are good Chinese restaurants near UW?',
        'Burst pipe or heating failure, urgent repair!',
        'Which notary lawyer for real estate closing?'
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [copiedWechatId, setCopiedWechatId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      textZh: query,
      textEn: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate instant offline intelligent processing (~150ms)
    setTimeout(() => {
      const response = queryOfflineAssistant(query, businesses, lang);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 180);
  };

  const handleCopyWeChat = (wechat: string, id: string) => {
    navigator.clipboard.writeText(wechat);
    setCopiedWechatId(id);
    setTimeout(() => setCopiedWechatId(null), 2000);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'assistant',
        textZh: '对话已清空。您可以随时向我提问关于滑铁卢本地美食、房屋维修、法律、换雪胎或报税的问题！',
        textEn: 'Chat reset. Ask me anything about Waterloo food, home repair, legal, winter tires or tax advisory!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-white dark:bg-slate-900 h-full flex flex-col shadow-2xl border-l border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white text-sm">
                <span>{lang === 'zh' ? '滑铁卢百事通 · 离线AI小助手' : 'Waterloo Offline AI Guide'}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <Zap className="w-3 h-3" />
                <span>{lang === 'zh' ? '100% 本地离线引擎 · 毫秒级秒回' : '100% Offline Local Engine · Zero Latency'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleClearHistory}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs"
              title={lang === 'zh' ? '重置对话' : 'Reset chat'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preset Question Strip */}
        <div className="px-5 py-2.5 bg-slate-100/70 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium shrink-0 mr-1">
              {lang === 'zh' ? '猜你想问:' : 'Popular:'}
            </span>
            {PRESET_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(lang === 'zh' ? q.zh : q.en)}
                className="px-2.5 py-1 text-xs text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-850 hover:bg-red-50 dark:hover:bg-red-950/60 hover:text-red-600 dark:hover:text-red-400 rounded-lg border border-slate-200/80 dark:border-slate-700 transition-colors shrink-0"
              >
                {lang === 'zh' ? q.zh : q.en}
              </button>
            ))}
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            const text = lang === 'zh' ? msg.textZh : msg.textEn;
            const matchReason = lang === 'zh' ? msg.matchReasonZh : msg.matchReasonEn;
            const followUps = lang === 'zh' ? msg.suggestedFollowUpsZh : msg.suggestedFollowUpsEn;

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-red-600 text-white rounded-br-none shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/60 dark:border-slate-700/60'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{text}</p>

                  {/* Match Reason note */}
                  {matchReason && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{matchReason}</span>
                    </div>
                  )}
                </div>

                {/* Structured Business Recommendations in AI Chat */}
                {msg.recommendedBusinesses && msg.recommendedBusinesses.length > 0 && (
                  <div className="w-full mt-3 space-y-2.5 max-w-[94%]">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 pl-1">
                      {lang === 'zh' ? '为您推荐的本地商户:' : 'Matching Waterloo Businesses:'}
                    </div>

                    {msg.recommendedBusinesses.map((b) => (
                      <div
                        key={b.id}
                        className="bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700 p-3.5 shadow-xs hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                              {lang === 'zh' ? b.nameZh : b.nameEn}
                            </h4>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">
                              {lang === 'zh' ? b.subcategoryZh : b.subcategoryEn} · 距UW {b.distanceFromUW} · {b.priceRange}
                            </div>
                          </div>

                          <div className="flex items-center gap-1 text-amber-500 font-semibold text-xs">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{b.rating.toFixed(1)}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mb-2.5">
                          {lang === 'zh' ? b.taglineZh : b.taglineEn}
                        </p>

                        {/* Direct action buttons in chat card */}
                        <div className="flex items-center justify-between gap-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-2">
                            <a
                              href={`tel:${b.phone.replace(/[^0-9+]/g, '')}`}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-mono text-[11px]"
                            >
                              <Phone className="w-3 h-3" />
                              <span>{b.phone}</span>
                            </a>

                            <button
                              onClick={() => handleCopyWeChat(b.wechat, b.id)}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-[11px]"
                            >
                              {copiedWechatId === b.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-600 font-medium">{lang === 'zh' ? '已复制' : 'Copied'}</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-slate-400" />
                                  <span>{lang === 'zh' ? '微信' : 'WeChat'}</span>
                                </>
                              )}
                            </button>
                          </div>

                          <button
                            onClick={() => {
                              onSelectBusiness(b);
                              onClose();
                            }}
                            className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold text-xs hover:underline"
                          >
                            <span>{lang === 'zh' ? '查看详情' : 'View'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Suggested follow-up prompt chips */}
                {followUps && followUps.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 pl-1">
                    {followUps.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(item)}
                        className="text-[11px] text-red-600 dark:text-red-400 bg-red-50/80 dark:bg-red-950/40 hover:bg-red-100 rounded-md px-2 py-1 border border-red-200/50 dark:border-red-900/50 transition-colors text-left"
                      >
                        ↳ {item}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none w-24">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                lang === 'zh'
                  ? '直接问我，例如：UW附近有什么好吃的川菜？'
                  : 'Ask directly: e.g. Good Sichuan food near UW?'
              }
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-red-600 disabled:opacity-40 text-white rounded-xl hover:bg-red-700 transition-colors shrink-0"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="text-[11px] text-slate-400 text-center mt-2">
            {lang === 'zh'
              ? '离线AI引擎已预装滑铁卢餐饮、水暖装修、公证法律与全城商户知识库'
              : 'Local offline engine preloaded with Kitchener-Waterloo business directory'}
          </div>
        </div>
      </div>
    </div>
  );
};
