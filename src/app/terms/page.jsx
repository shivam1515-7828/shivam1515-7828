'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Info, RefreshCcw, Clock } from 'lucide-react';

export default function TermsPage() {
    const { t, mounted } = useLanguage();

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">{t('termsPage.title')}</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">{t('termsPage.subtitle')}</p>
                </motion.div>

                <div className="space-y-12">
                    <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="flex items-center gap-4 mb-6 text-blue-600 dark:text-blue-400">
                            <RefreshCcw className="h-8 w-8" />
                            <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{t('termsPage.refundPolicy')}</h2>
                        </div>
                        <div className="space-y-6 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                                <h3 className="text-blue-600 dark:text-blue-400 font-black mb-2 flex items-center gap-2">
                                    <Clock className="h-5 w-5" /> {t('termsPage.reflection')}
                                </h3>
                                <p>{t('termsPage.reflectionDesc')}</p>
                            </div>

                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <h3 className="text-slate-900 dark:text-white font-black mb-2 flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-green-500" /> {t('termsPage.processing')}
                                </h3>
                                <p>{t('termsPage.processingDesc')}</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                            <Info className="h-6 w-6 text-blue-600" />
                            <h2 className="text-xl font-black uppercase tracking-tight">{t('termsPage.generalTerms')}</h2>
                        </div>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            {(t('termsPage.points') || []).map((p, i) => (
                                <p key={i}>{i + 1}. {p}</p>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
