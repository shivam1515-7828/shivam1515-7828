'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, Phone, Search, X } from 'lucide-react';

const FAQItem = ({ faq }) => (
    <motion.details
        className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-slate-900 dark:text-white select-none text-lg leading-tight">
            <span className="max-w-[90%]">{faq.q}</span>
            <ChevronDown className="h-6 w-6 text-blue-600 transition-transform duration-300 group-open:rotate-180 shrink-0" />
        </summary>
        <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
            {faq.a}
        </div>
    </motion.details>
);

export default function FAQPage() {
    const { t, mounted } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');

    const faqs = useMemo(() => t('faqPage.faqs') || [], [t]);

    const filteredFaqs = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (query === '') return faqs;

        return faqs.map(category => {
            const filteredQuestions = category.questions.filter(q =>
                q.q.toLowerCase().includes(query) ||
                q.a.toLowerCase().includes(query) ||
                category.category.toLowerCase().includes(query)
            );
            return { ...category, questions: filteredQuestions };
        }).filter(category => category.questions.length > 0);
    }, [searchQuery, faqs]);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            {/* Hero Header */}
            <div className="relative bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black mb-6 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800 uppercase tracking-widest">
                            {t('faqPage.badge')}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
                            {t('faqPage.title')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                            {t('faqPage.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating Search Bar */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-[32px] shadow-2xl shadow-blue-500/10 border border-slate-100 dark:border-slate-800">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                            <Search className="h-6 w-6" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-16 pr-14 py-5 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 shadow-sm"
                            placeholder={t('faqPage.searchPlace')}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-6 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <AnimatePresence mode="popLayout">
                    {filteredFaqs.length > 0 ? (
                        <div className="space-y-16">
                            {filteredFaqs.map((category, idx) => (
                                <motion.div
                                    key={category.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 uppercase tracking-tight">
                                        <div className="w-8 h-1 bg-blue-600 rounded-full" />
                                        {category.category}
                                    </h2>
                                    <div className="space-y-4">
                                        {category.questions.map((faq, fIdx) => (
                                            <FAQItem key={fIdx} faq={faq} />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white dark:bg-slate-900 rounded-[40px] p-24 text-center border-2 border-dashed border-slate-200 dark:border-slate-800"
                        >
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-800 mb-8 font-black text-4xl text-slate-300">
                                !
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                                {t('faqPage.noResults')}
                            </h3>
                            <button
                                onClick={() => setSearchQuery('')}
                                className="text-blue-600 font-black hover:underline text-lg uppercase tracking-wider"
                            >
                                {t('courses.reset')}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                <div className="bg-linear-to-r from-slate-900 to-slate-800 dark:from-blue-600 dark:to-indigo-700 rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
                    <h2 className="text-3xl font-black mb-6 relative z-10">{t('faqPage.cta.title')}</h2>
                    <p className="text-slate-400 dark:text-blue-100 text-lg font-bold mb-10 max-w-xl mx-auto relative z-10">
                        {t('faqPage.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <button className="bg-white text-slate-900 dark:text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl">
                            {t('faqPage.cta.chat')}
                        </button>
                        <button className="bg-slate-800 dark:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black hover:bg-slate-700 dark:hover:bg-blue-800 transition-all border border-slate-700 dark:border-white/20">
                            {t('faqPage.cta.callback')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
