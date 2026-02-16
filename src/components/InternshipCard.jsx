import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, Video, Calendar, BadgeCheck, Star, Check, Loader2 } from 'lucide-react';

export default function InternshipCard({ title, description, duration, mentors, students, image, tags, slug, price, startDate }) {
    const { t } = useLanguage();
    const { user, bookInternship } = useAuth();
    const router = useRouter();
    const [bookingState, setBookingState] = useState('idle'); // idle, loading, success

    const isAlreadyBooked = user && Array.isArray(user.bookings) && user.bookings.includes(slug);

    const handleBookSpot = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!user) {
            router.push('/auth/signin');
            return;
        }

        if (isAlreadyBooked) return;

        setBookingState('loading');

        // Simulate network delay for better UX
        setTimeout(() => {
            const success = bookInternship(slug);
            if (success) {
                setBookingState('success');
            } else {
                setBookingState('idle');
            }
        }, 800);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col glass-card h-full rounded-[32px] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 border border-white/20 dark:border-white/5 relative"
        >
            <Link href={`/internships/${slug}`} className="absolute inset-0 z-0" />

            {/* Image Container */}
            <div className="relative h-60 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-red-600 text-white rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                        <Video className="h-3 w-3" />
                        {t('common.liveSession')}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-md text-blue-600 rounded-full shadow-lg border border-white/50 dark:bg-slate-900/90 dark:text-blue-400 dark:border-slate-800">
                        {tags[0]}
                    </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 z-20">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-xl shadow-blue-500/20">
                        <span className="text-lg font-black">{price}</span>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col grow p-8 pointer-events-none">
                <div className="flex items-center gap-2 mb-4">
                    <BadgeCheck className="h-4 w-4 text-blue-500" />
                    <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">{t('common.industrialTraining')}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors dark:text-white leading-tight uppercase tracking-tight">
                    {title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 line-clamp-2 grow font-medium leading-relaxed">
                    {description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100 dark:border-slate-800 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                            <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">{t('common.starts')}</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">{startDate}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 shrink-0">
                            <Clock className="h-4 w-4" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">{t('common.duration')}</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">{duration}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 shrink-0">
                            <Users className="h-4 w-4" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">{t('common.mentors')}</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">{mentors}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500 shrink-0">
                            <Star className="h-4 w-4 fill-current" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">CAPACITY</div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">{students}</div>
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className="pointer-events-auto z-10">
                    <button
                        onClick={handleBookSpot}
                        disabled={bookingState === 'loading' || bookingState === 'success' || isAlreadyBooked}
                        className={`flex items-center justify-center gap-2 w-full py-4 text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl active:scale-95 ${isAlreadyBooked
                            ? 'bg-green-500 text-white cursor-default'
                            : bookingState === 'success'
                                ? 'bg-green-500 text-white'
                                : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-blue-500/10'
                            }`}
                    >
                        {bookingState === 'loading' ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : bookingState === 'success' || isAlreadyBooked ? (
                            <>
                                <Check className="h-4 w-4" />
                                {t('common.registered') || 'Registered'}
                            </>
                        ) : (
                            <>
                                {t('common.bookSpot')}
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
