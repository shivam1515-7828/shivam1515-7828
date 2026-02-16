'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
    const { t, mounted } = useLanguage();

    if (!mounted) return null;

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-10 md:p-16 rounded-[40px]"
                >
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">
                        {t('privacyPage.title')}
                    </h1>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {(t('privacyPage.sections') || []).map((s, i) => (
                            <section key={i}>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{i + 1}. {s.title}</h2>
                                <p>{s.content}</p>
                            </section>
                        ))}

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center py-10">
                                {t('privacyPage.lastUpdated')}
                            </h2>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
