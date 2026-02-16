'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BarChart, Users, CheckCircle, PlayCircle, Lock, ArrowLeft, Star, Share2, Heart } from 'lucide-react';

const FAQItem = ({ faq }) => (
    <motion.details
        className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-slate-900 dark:text-white select-none text-lg leading-tight">
            <span className="max-w-[90%]">{faq.q}</span>
            <PlayCircle className="h-6 w-6 text-blue-600 transition-transform duration-300 group-open:rotate-180 shrink-0" />
        </summary>
        <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
            {faq.a}
        </div>
    </motion.details>
);

// Mock Data - In a real app this would come from an API/Database
const coursesData = {
    'full-stack-bootcamp': {
        title: 'Full Stack Web Development Bootcamp',
        description: 'Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp designed to take you from beginner to job-ready developer.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2672',
        level: 'Beginner',
        duration: '12 Weeks',
        students: '1,234',
        price: '$99.99',
        rating: '4.9',
        reviews: '128',
        curriculum: [
            { module: 'Module 1: HTML & CSS Basics', lessons: 5, free: true },
            { module: 'Module 2: JavaScript Fundamentals', lessons: 8, free: true },
            { module: 'Module 3: Advanced JavaScript', lessons: 6, free: false },
            { module: 'Module 4: React.js Essentials', lessons: 10, free: false },
            { module: 'Module 5: Backend with Node.js', lessons: 8, free: false },
        ]
    },
    'react-nextjs-masterclass': {
        title: 'Advanced React & Next.js Masterclass',
        description: 'Deep dive into React hooks, context, performance optimization, and server-side rendering with Next.js 14.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2670',
        level: 'Advanced',
        duration: '8 Weeks',
        students: '856',
        price: '$79.99',
        rating: '4.8',
        reviews: '92',
        curriculum: [
            { module: 'Module 1: React Deep Dive', lessons: 6, free: true },
            { module: 'Module 2: Next.js App Router', lessons: 8, free: false },
            { module: 'Module 3: Server Actions', lessons: 5, free: false },
        ]
    },
    'python-data-science': {
        title: 'Python for Data Science and Machine Learning',
        description: 'Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, Tensorflow, and more!',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2670',
        level: 'Intermediate',
        duration: '10 Weeks',
        students: '2,100',
        price: '$89.99',
        rating: '4.7',
        reviews: '215',
        curriculum: [
            { module: 'Module 1: Python Basics', lessons: 10, free: true },
            { module: 'Module 2: Data Analysis with Pandas', lessons: 12, free: false },
            { module: 'Module 3: Machine Learning Intro', lessons: 15, free: false },
        ]
    },
    'ui-ux-design': {
        title: 'UI/UX Design Fundamentals',
        description: 'Learn the principles of user interface and user experience design. Create beautiful, usable, and accessible digital products.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2564',
        level: 'Beginner',
        duration: '6 Weeks',
        students: '1,540',
        price: '$49.99',
        rating: '4.9',
        reviews: '156',
        curriculum: [
            { module: 'Module 1: Design Principles', lessons: 4, free: true },
            { module: 'Module 2: Figma Basics', lessons: 7, free: true },
            { module: 'Module 3: User Research', lessons: 5, free: false },
        ]
    },
    'devops-engineering': {
        title: 'DevOps & Cloud Engineering',
        description: 'Master Docker, Kubernetes, AWS, and CI/CD pipelines. Automate deployment and scale applications like a pro.',
        image: '/images/devops_course_banner_1771233334768.png',
        level: 'Advanced',
        duration: '10 Weeks',
        students: '900',
        price: '$129.99',
        rating: '4.8',
        reviews: '74',
        curriculum: [
            { module: 'Module 1: Docker Basics', lessons: 6, free: true },
            { module: 'Module 2: Kubernetes Orchestration', lessons: 10, free: false },
            { module: 'Module 3: CI/CD Pipelines', lessons: 8, free: false },
        ]
    },
    'react-native-mobile': {
        title: 'Mobile App Development with React Native',
        description: 'Build native mobile apps for iOS and Android using React Native. Learn navigation, state management, and device features.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2670',
        level: 'Intermediate',
        duration: '8 Weeks',
        students: '1,100',
        price: '$84.99',
        rating: '4.7',
        reviews: '112',
        curriculum: [
            { module: 'Module 1: Intro to React Native', lessons: 5, free: true },
            { module: 'Module 2: Components & Styling', lessons: 8, free: false },
            { module: 'Module 3: Navigation & State', lessons: 7, free: false },
        ]
    }
};

export default function CourseDetail() {
    const params = useParams();
    const { t, mounted } = useLanguage();
    const slug = params.slug;
    const course = coursesData[slug];

    if (!mounted) return null;

    if (!course) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center pt-24 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-slate-900 p-12 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800 max-w-lg w-full"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-8 text-4xl font-black text-slate-300">!</div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">{t('courses.courseDetail.notFound')}</h1>
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-3 transition-all uppercase tracking-widest text-sm"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t('courses.courseDetail.backToCourses')}
                    </Link>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-32">
            {/* Hero Section */}
            <div className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-500/5 blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50">
                                    {course.level}
                                </span>
                                <span className="bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800/50">
                                    {course.duration}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-none uppercase tracking-tighter">
                                {course.title}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 font-medium leading-relaxed max-w-xl">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap gap-8 items-center mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black text-slate-900 dark:text-white">{course.students}</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('common.students')}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500">
                                        <Star className="h-6 w-6 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black text-slate-900 dark:text-white">{course.rating}</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{course.reviews} REVIEWS</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black text-slate-900 dark:text-white">{t('courses.courseDetail.thisMonth')}</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('courses.courseDetail.lastUpdated')}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/auth/signin"
                                    className="px-10 py-5 bg-linear-to-r from-blue-600 to-indigo-700 text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                                >
                                    {t('courses.courseDetail.enrollWithPrice')}{course.price}
                                </Link>
                                <div className="flex gap-2">
                                    <button className="p-5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
                                        <Heart className="h-6 w-6" />
                                    </button>
                                    <button className="p-5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
                                        <Share2 className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-4/3 rounded-[48px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 group"
                        >
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="h-24 w-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl cursor-pointer"
                                >
                                    <PlayCircle className="h-12 w-12 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Curriculum */}
                    <div className="lg:col-span-2">
                        <div className="mb-12">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight flex items-center gap-4">
                                <div className="w-10 h-1 bg-blue-600 rounded-full" />
                                {t('courses.courseDetail.curriculum')}
                            </h2>
                            <p className="text-slate-500 font-medium">{course.curriculum.length} modules • Total 24h of learning Content</p>
                        </div>

                        <div className="space-y-6">
                            {course.curriculum.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] p-8 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                                >
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 ${item.free ? 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400' : 'bg-slate-50 text-slate-400 dark:bg-slate-800 dark:text-slate-500'}`}>
                                                {item.free ? <PlayCircle className="h-7 w-7" /> : <Lock className="h-7 w-7" />}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">{item.module}</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">{item.lessons} {t('courses.courseDetail.lessons')}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {item.free ? (
                                                <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800/50 uppercase tracking-widest">{t('courses.courseDetail.freePreview')}</span>
                                            ) : (
                                                <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 dark:bg-slate-800 dark:text-slate-500 dark:border-slate-700 uppercase tracking-widest">{t('courses.courseDetail.locked')}</span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">
                        <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm sticky top-32">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tight">{t('courses.courseDetail.whatYouWillLearn')}</h3>
                            <ul className="space-y-6">
                                {[
                                    'Build real-world applications from scratch',
                                    'Master modern best practices and workflows',
                                    'Create responsive, accessible user interfaces',
                                    'Learn industry-standard deployment strategies'
                                ].map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
                                    >
                                        <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <CheckCircle className="h-4 w-4" />
                                        </div>
                                        <span>{point}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800 text-center">
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Secure Checkout Powered by Stripe</div>
                                <div className="flex justify-center gap-4 opacity-30 grayscale contrast-125 dark:invert">
                                    <div className="h-6 w-10 bg-slate-400 rounded"></div>
                                    <div className="h-6 w-10 bg-slate-400 rounded"></div>
                                    <div className="h-6 w-10 bg-slate-400 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
