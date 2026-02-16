'use client';

import { useLanguage } from '@/context/LanguageContext';
import InternshipCard from '@/components/InternshipCard';
import { Search, Filter, Video, Users, Trophy, X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';

export default function InternshipsPage() {
    const { t, mounted } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    const internshipsData = useMemo(() => {
        const data = t('internships.data');
        return Array.isArray(data) ? data : [];
    }, [t]);

    const categories = useMemo(() => [
        { id: 'all', label: t('internships.categories.all') },
        { id: 'web', label: t('internships.categories.web') },
        { id: 'backend', label: t('internships.categories.backend') },
        { id: 'ai', label: t('internships.categories.ai') },
        { id: 'cloud', label: t('internships.categories.cloud') }
    ], [t]);

    const popularSearches = useMemo(() => {
        const searches = t('internships.popularSearches');
        return Array.isArray(searches) ? searches : [];
    }, [t]);

    const filteredInternships = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        return internshipsData.filter(item => {
            const matchesSearch = query === '' ||
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query)));

            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory, internshipsData]);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            {/* Hero Header */}
            <div className="relative bg-white dark:bg-slate-950 pt-32 pb-32 overflow-hidden border-b border-slate-100 dark:border-slate-900">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-purple-500/5 blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
                            <Video className="h-4 w-4" />
                            {t('internships.hero.badge')}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                            {t('internships.hero.title')} <br />
                            <span className="text-blue-600 dark:text-blue-500">{t('internships.hero.titleAccent')}</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-12 max-w-2xl mx-auto">
                            {t('internships.hero.subtitle')}
                        </p>

                        {/* Stats Integrated */}
                        <div className="flex flex-wrap gap-8 items-center justify-center border-t border-slate-100 dark:border-slate-900 pt-10 mt-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                    <Video className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('internships.stats.live')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                                    <Users className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('internships.stats.mentorship')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500">
                                    <Trophy className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('internships.stats.certificate')}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Integrated Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-[32px] blur opacity-20 group-focus-within:opacity-40 transition duration-1000 group-focus-within:duration-200" />
                            <div className="relative bg-white dark:bg-slate-950 p-3 rounded-[32px] shadow-2xl flex flex-col md:flex-row gap-2 border border-slate-100 dark:border-slate-800">
                                <div className="relative grow">
                                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-400">
                                        <Search className="h-6 w-6" />
                                    </div>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="block w-full pl-16 pr-14 py-5 bg-transparent border-none rounded-2xl text-slate-900 font-bold placeholder-slate-400 focus:ring-0 dark:text-white dark:placeholder-slate-600 text-lg"
                                        placeholder={t('internships.searchPlace')}
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
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setShowFilters(!showFilters)}
                                        className={`px-8 py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-2 ${showFilters ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25' : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'}`}
                                    >
                                        <Filter className={`h-5 w-5 transition-transform duration-500 ${showFilters ? 'rotate-180 scale-110' : ''}`} />
                                        {t('internships.refine')}
                                    </button>
                                    <button className="hidden md:flex px-12 py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black hover:opacity-90 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-sm">
                                        {t('common.search')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Words Beneath (Trending Searches) */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 px-6">
                            <span className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                {t('internships.trending')}
                            </span>
                            <div className="flex flex-wrap justify-center gap-2">
                                {t('internships.popularSearches').map((term, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSearchQuery(term)}
                                        className="px-4 py-1.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all shadow-sm active:scale-95"
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Expandable Categories */}
                    <div className="max-w-4xl mx-auto relative z-20">
                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mt-8"
                                >
                                    <div className="p-8 bg-white dark:bg-slate-950 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-900 text-left">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t('internships.refine')}</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => setSelectedCategory(cat.id)}
                                                    className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${selectedCategory === cat.id
                                                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40'
                                                        : 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800'}`}
                                                >
                                                    {cat.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Results Counter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
                <div className="flex justify-center mb-16">
                    <div className="inline-flex items-center gap-4 bg-white dark:bg-slate-900 px-8 py-4 rounded-full shadow-2xl shadow-blue-500/10 border border-slate-100 dark:border-slate-800">
                        <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">
                            <span className="text-blue-600">{filteredInternships.length}</span> {t('internships.results')}
                        </p>
                        {(searchQuery || selectedCategory !== 'all') && (
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Internships Grid */}
                <AnimatePresence mode="popLayout">
                    {filteredInternships.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        >
                            {filteredInternships.map((internship) => (
                                <motion.div
                                    key={internship.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <InternshipCard {...internship} />
                                </motion.div>
                            ))}
                        </motion.div>
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
                                {t('internships.noResults')}
                            </h3>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                className="text-blue-600 font-black hover:underline text-lg uppercase tracking-wider"
                            >
                                {t('internships.all')}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
                <div className="bg-slate-900 dark:bg-blue-600 rounded-[48px] p-16 text-center text-white relative overflow-hidden shadow-3xl">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20" />
                    <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10 uppercase tracking-tight leading-tight">{t('internships.cta.title')}</h2>
                    <p className="text-slate-400 dark:text-blue-100 text-xl font-bold mb-12 max-w-2xl mx-auto relative z-10">
                        {t('internships.cta.subtitle')}
                    </p>
                    <button className="bg-white text-slate-900 dark:text-blue-600 px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl relative z-10 text-lg uppercase tracking-widest flex items-center gap-4 mx-auto">
                        {t('internships.cta.button')}
                        <ArrowRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
