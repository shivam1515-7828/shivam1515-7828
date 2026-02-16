'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import { Search, Filter, X, Check } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: 'Full Stack Web Development Bootcamp',
        description: 'Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp designed to take you from beginner to job-ready developer.',
        level: 'Beginner',
        duration: '12 Weeks',
        students: '1,234',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2672',
        tags: ['Web Dev', 'Full Stack'],
        slug: 'full-stack-bootcamp'
    },
    {
        id: 2,
        title: 'Advanced React & Next.js Masterclass',
        description: 'Deep dive into React hooks, context, performance optimization, and server-side rendering with Next.js 14.',
        level: 'Advanced',
        duration: '8 Weeks',
        students: '856',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2670',
        tags: ['React', 'Next.js'],
        slug: 'react-nextjs-masterclass'
    },
    {
        id: 3,
        title: 'Python for Data Science and Machine Learning',
        description: 'Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, Tensorflow, and more!',
        level: 'Intermediate',
        duration: '10 Weeks',
        students: '2,100',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2670',
        tags: ['Python', 'Data Science'],
        slug: 'python-data-science'
    },
    {
        id: 4,
        title: 'UI/UX Design Fundamentals',
        description: 'Learn the principles of user interface and user experience design. Create beautiful, usable, and accessible digital products.',
        level: 'Beginner',
        duration: '6 Weeks',
        students: '1,540',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2564',
        tags: ['Design', 'Figma'],
        slug: 'ui-ux-design'
    },
    {
        id: 5,
        title: 'DevOps & Cloud Engineering',
        description: 'Master Docker, Kubernetes, AWS, and CI/CD pipelines. Automate deployment and scale applications like a pro.',
        level: 'Advanced',
        duration: '10 Weeks',
        students: '900',
        image: '/images/devops-banner.png',
        tags: ['DevOps', 'Cloud'],
        slug: 'devops-engineering'
    },
    {
        id: 6,
        title: 'Mobile App Development with React Native',
        description: 'Build native mobile apps for iOS and Android using React Native. Learn navigation, state management, and device features.',
        level: 'Intermediate',
        duration: '8 Weeks',
        students: '1,100',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2670',
        tags: ['Mobile', 'React Native'],
        slug: 'react-native-mobile'
    }
];

export default function CoursesPage() {
    const { t, mounted } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    const levels = [
        { id: 'all', label: t('courses.levels.all') },
        { id: 'beginner', label: t('courses.levels.beginner') },
        { id: 'intermediate', label: t('courses.levels.intermediate') },
        { id: 'advanced', label: t('courses.levels.advanced') }
    ];

    const filteredCourses = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        return courses.filter(course => {
            const matchesSearch = query === '' ||
                course.title.toLowerCase().includes(query) ||
                course.description.toLowerCase().includes(query) ||
                course.tags.some(tag => tag.toLowerCase().includes(query));

            const matchesLevel = selectedLevel === 'all' || course.level.toLowerCase() === selectedLevel.toLowerCase();
            return matchesSearch && matchesLevel;
        });
    }, [searchQuery, selectedLevel]);

    if (!mounted) return null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Header / Hero Section */}
            <div className="relative bg-white dark:bg-slate-950 pt-32 pb-32 overflow-hidden border-b border-slate-100 dark:border-slate-900">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-purple-500/5 blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                            {t('courses.hero.title')}
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            {t('courses.hero.subtitle')}
                        </p>
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
                                        placeholder={t('courses.searchPlace')}
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
                                        {t('courses.filter')}
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
                                {t('courses.trending')}
                            </span>
                            <div className="flex flex-wrap justify-center gap-2">
                                {t('courses.popularSearches').map((term, i) => (
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

                    {/* Expandable Filters */}
                    <div className="max-w-4xl mx-auto relative z-20">
                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mt-8"
                                >
                                    <div className="p-8 bg-white dark:bg-slate-950 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-900 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">{t('courses.filter')}</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {levels.map((level) => (
                                                    <button
                                                        key={level.id}
                                                        onClick={() => setSelectedLevel(level.id)}
                                                        className={`px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${selectedLevel === level.id
                                                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40'
                                                            : 'bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800'}`}
                                                    >
                                                        {level.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
                {/* Results Count Floating Badge */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex items-center gap-4 bg-white dark:bg-slate-900 px-8 py-4 rounded-full shadow-2xl shadow-blue-500/10 border border-slate-100 dark:border-slate-800">
                        <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">
                            <span className="text-blue-600">{filteredCourses.length}</span> {t('courses.results')}
                        </p>
                        {(searchQuery || selectedLevel !== 'all') && (
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedLevel('all'); }}
                                className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </div>


                {/* Courses Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.length > 0 ? (
                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredCourses.map((course) => (
                                    <motion.div
                                        key={course.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CourseCard {...course} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white dark:bg-slate-900 rounded-[32px] p-24 text-center border-2 border-dashed border-slate-200 dark:border-slate-800"
                            >
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-800 mb-8 font-black text-3xl text-slate-300">
                                    ?
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                                    {t('courses.noResults')}
                                </h3>
                                <button
                                    onClick={() => { setSearchQuery(''); setSelectedLevel('all'); }}
                                    className="text-blue-600 font-black hover:underline text-lg"
                                >
                                    {t('courses.reset')}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{t('courses.commonQuestions')}</h2>
                        <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Are these courses completely online?", a: "Yes, all our courses are 100% online and can be accessed from anywhere in the world." },
                            { q: "Do I get lifetime access to the courses?", a: "Self-paced courses come with lifetime access, so you can learn at your own speed and revisit the material anytime." },
                            { q: "Is there any certification provided?", a: "Yes, you will receive a certificate of completion for every course you successfully finish." },
                            { q: "Can I switch between courses?", a: "Yes, you can enroll in multiple courses simultaneously and switch between them as you like." }
                        ].map((item, i) => (
                            <motion.details
                                key={i}
                                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900 dark:text-white select-none">
                                    <span>{item.q}</span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                    {item.a}
                                </div>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

