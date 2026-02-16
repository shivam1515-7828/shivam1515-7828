'use client';

import { useParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useAuth } from '@/context/AuthContext';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, CheckCircle, Video, Calendar, BadgeCheck, MessageSquare, ArrowRight, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function InternshipDetail() {
    const { t, mounted } = useLanguage();
    const { user } = useAuth();
    const params = useParams();
    const router = useRouter();
    const slug = params.slug;
    const [isLocalBooked, setIsLocalBooked] = useState(false);

    const internship = useMemo(() => {
        const data = t('internships.data');
        if (!Array.isArray(data)) return null;
        return data.find(item => item.slug === slug);
    }, [t, slug]);

    const isAlreadyBooked = user?.bookings?.includes(slug) || isLocalBooked;

    if (!mounted) return null;

    if (!internship) {
        return (
            <div className="min-h-screen pt-40 text-center bg-slate-50 dark:bg-slate-950">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
                    {t('internships.notFound') || 'Internship program not found'}
                </h1>
                <Link href="/internships" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                    {t('internships.backToAll') || 'Back to internships'} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        )
    }

    const handleEnroll = () => {
        if (!user) {
            router.push('/auth/signin');
            return;
        }

        if (isAlreadyBooked) return;

        const success = bookInternship(slug);
        if (success) {
            setIsLocalBooked(true);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
            <AnimatePresence>
                {isLocalBooked && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white dark:bg-slate-900 p-12 rounded-[48px] shadow-2xl border border-white/20 max-w-lg w-full text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-600 to-indigo-600" />
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 mb-8">
                                <PartyPopper className="h-12 w-12" />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
                                {t('internships.detail.bookingSuccess')}
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed mb-10 text-lg">
                                {t('internships.detail.bookingSubtitle')}
                            </p>
                            <button
                                onClick={() => setIsLocalBooked(false)}
                                className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-blue-500/20"
                            >
                                {t('nav.dashboard')}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <div className="bg-slate-900 text-white pt-40 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 text-xs font-bold mb-6 border border-blue-800 backdrop-blur-sm">
                                <Video className="h-3 w-3" />
                                {t('internships.detail.liveCohort')}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                                {internship.title}
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                                {internship.description}
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        <Calendar className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                            {t('internships.detail.startDate')}
                                        </p>
                                        <p className="font-bold text-white">{internship.startDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        <Clock className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                            {t('internships.detail.duration')}
                                        </p>
                                        <p className="font-bold text-white">{internship.duration}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleEnroll}
                                    disabled={isAlreadyBooked}
                                    className={`px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all hover:-translate-y-1 active:scale-[0.98] flex items-center gap-3 ${isAlreadyBooked
                                        ? 'bg-green-600 text-white cursor-default hover:translate-y-0 active:scale-100'
                                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/40'
                                        }`}
                                >
                                    {isAlreadyBooked ? (
                                        <>
                                            <CheckCircle className="h-6 w-6" />
                                            {t('common.registered') || 'Registered'}
                                        </>
                                    ) : (
                                        <>
                                            {t('internships.detail.enroll')} {internship.price}
                                        </>
                                    )}
                                </button>
                                <button className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-2xl font-black text-xl backdrop-blur-md transition-all">
                                    {t('internships.detail.pdf')}
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent flex items-end p-8">
                            <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-blue-500 flex items-center justify-center text-[10px] font-bold">M{i}</div>)}
                                </div>
                                <div>
                                    <p className="text-xs font-black text-white">{t('internships.detail.mentors')}</p>
                                    <p className="text-[10px] text-slate-400">
                                        {t('internships.detail.join')} {internship.students} {t('internships.detail.students')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentors Section - Premium Redesign */}
            {internship.mentorList && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 font-black tracking-widest uppercase text-sm mb-4 block">{t('internships.detail.mentorship')}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                            {t('internships.detail.best')}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {internship.mentorList.map((mentor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white dark:bg-slate-900 rounded-[32px] p-2 overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative h-64 rounded-[28px] overflow-hidden mb-6">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                                    <Image
                                        src={mentor.image}
                                        alt={mentor.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                            {mentor.company}
                                        </span>
                                    </div>
                                </div>

                                <div className="px-4 pb-6 text-center">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1">{mentor.name}</h3>
                                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">{mentor.role}</p>

                                    <button className="w-full py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 font-bold text-slate-600 dark:text-slate-400 hover:bg-linkedin hover:border-transparent hover:text-white transition-all text-sm flex items-center justify-center gap-2 group/btn">
                                        <span>View Profile</span>
                                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-4">
                            {t('internships.detail.roadmap')}
                            <div className="h-1 grow bg-slate-100 dark:bg-slate-800 rounded-full" />
                        </h2>

                        <div className="space-y-6">
                            {internship.curriculum.map((item, index) => (
                                <div key={index} className="group bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
                                    <div className="flex items-start gap-6">
                                        <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center font-black text-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            0{index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 leading-tight">{item.module}</h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-bold flex items-center gap-2">
                                                <BadgeCheck className="h-5 w-5 text-blue-500" />
                                                {t('internships.detail.focus')}: {item.focus}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Benefits Card */}
                        <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 blur-3xl" />
                            <h3 className="text-2xl font-black mb-8 relative z-10">{t('internships.detail.why')}</h3>
                            <ul className="space-y-6 relative z-10">
                                {internship.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-300 font-bold">
                                        <CheckCircle className="h-6 w-6 text-blue-400 shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mentor Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">{t('internships.detail.mentorship')}</h3>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-black">
                                    CB
                                </div>
                                <div>
                                    <p className="font-black text-slate-900 dark:text-white">{t('internships.detail.best')}</p>
                                    <p className="text-sm text-slate-500">{internship.mentors}</p>
                                </div>
                            </div>
                            <button className="w-full py-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-black rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
                                <MessageSquare className="h-5 w-5" />
                                {t('internships.detail.chat')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Bar for Mobile */}
            <div className="fixed bottom-0 left-0 right-0 p-4 lg:hidden z-50">
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-white/5 p-4 rounded-3xl shadow-2xl flex items-center justify-between gap-4">
                    <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t('internships.detail.enroll')}</div>
                        <div className="text-lg font-black text-slate-900 dark:text-white">{internship.price}</div>
                    </div>
                    <button
                        onClick={handleEnroll}
                        className="grow py-4 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
                    >
                        {t('common.bookSpot')}
                    </button>
                </div>
            </div>
        </div>
    );
}
