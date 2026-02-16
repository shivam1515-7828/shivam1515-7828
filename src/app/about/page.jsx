'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Award, Briefcase, Zap, Heart, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const { t, mounted } = useLanguage();

    if (!mounted) return null;

    return (
        <div className="min-h-screen pt-24 pb-20 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                        {t('aboutPage.title')}
                    </h1>
                    <div className="h-2 w-24 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
                    <p className="max-w-3xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium">
                        {t('aboutPage.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('aboutPage.vision')}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            {t('aboutPage.visionDesc')}
                        </p>
                        <div className="space-y-4">
                            {(t('aboutPage.points') || []).map((point, i) => {
                                const icons = [Target, Users, Shield, Award];
                                const Icon = icons[i] || Target;
                                return (
                                    <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                        <Icon className="h-5 w-5 text-blue-600" />
                                        <span className="font-semibold">{point}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card aspect-video rounded-3xl flex items-center justify-center p-8 text-center"
                    >
                        <div className="space-y-4">
                            <div className="text-5xl font-black text-blue-600 dark:text-blue-400">10k+</div>
                            <div className="text-xl font-bold text-slate-900 dark:text-white">{t('aboutPage.stats')}</div>
                        </div>
                    </motion.div>
                </div>

                {/* Join Our Team Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[40px] bg-slate-900 text-white p-8 md:p-16 lg:p-24"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.4),transparent_100%)]" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                                    {t('joinTeam.title')}
                                </h2>
                                <p className="text-xl text-slate-300 font-medium leading-relaxed">
                                    {t('joinTeam.subtitle')}
                                </p>
                            </div>

                            <p className="text-lg text-slate-400 leading-relaxed">
                                {t('joinTeam.desc')}
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {(t('joinTeam.benefits') || []).map((benefit, i) => {
                                    const icons = [Globe, Zap, Briefcase, Heart];
                                    const Icon = icons[i] || Zap;
                                    return (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                                <Icon className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <span className="font-bold text-slate-300">{benefit}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/25"
                                >
                                    {t('joinTeam.cta')}
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-[32px] blur-2xl opacity-20 animate-pulse" />
                            <div className="relative aspect-4/3 rounded-[32px] overflow-hidden border border-white/10 group">
                                <Image
                                    src="/images/join-team.png"
                                    alt="Join Our Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
