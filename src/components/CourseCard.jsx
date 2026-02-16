'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, BarChart, Users, ArrowRight } from 'lucide-react';

export default function CourseCard({ title, description, level, duration, students, image, tags, slug }) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col glass-card h-full rounded-[32px] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 border border-white/20 dark:border-white/5"
        >
            {/* Image Container */}
            <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-md text-blue-600 rounded-full shadow-lg border border-white/50 dark:bg-slate-900/90 dark:text-blue-400 dark:border-slate-800">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Level Badge */}
                <div className="absolute bottom-4 right-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-blue-600 text-white rounded-lg shadow-xl shadow-blue-500/20">
                        {level}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col grow p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors dark:text-white leading-tight uppercase tracking-tight">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 line-clamp-2 grow font-medium leading-relaxed">
                    {description}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100 dark:border-slate-800 mb-8 items-center text-center">
                    <div className="flex flex-col items-center gap-1.5 border-r border-slate-100 dark:border-slate-800">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-tighter">{students}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 border-r border-slate-100 dark:border-slate-800">
                        <Clock className="h-4 w-4 text-purple-500" />
                        <span className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-tighter">{duration}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <BarChart className="h-4 w-4 text-indigo-500" />
                        <span className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-tighter">{level}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                    <Link
                        href={`/courses/${slug}`}
                        className="flex items-center justify-center gap-2 w-full py-4 bg-slate-100 text-slate-900 text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-slate-200 transition-all dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 active:scale-95"
                    >
                        {t('common.viewCourse')}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/auth/signin"
                        className="block w-full py-4 bg-linear-to-r from-blue-600 to-indigo-700 text-white text-xs font-black uppercase tracking-widest rounded-2xl text-center hover:opacity-90 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
                    >
                        {t('common.enrollNow')}
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
