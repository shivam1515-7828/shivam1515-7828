'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Layout, Zap, Smartphone, CheckCircle, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-4">
        <motion.div
          className="max-w-7xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-blue-600 text-sm font-semibold mb-10 dark:text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t('hero.badge')}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.9]"
          >
            {t('hero.title').split('.').map((part, i, arr) => (
              <span key={i} className={i === 1 ? "text-gradient block md:inline" : "block md:inline"}>
                {part}{i < arr.length - 1 ? "." : ""}
                {i < arr.length - 1 && " "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto mb-12 dark:text-slate-400 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/auth/signup"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all shadow-2xl shadow-blue-500/40 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center">
                {t('hero.ctaPrimary')} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/internships"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-slate-700 glass-card rounded-2xl transition-all hover:-translate-y-1 dark:text-white"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
              {t('features.title')}
            </h2>
            <div className="h-2 w-24 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
            <p className="max-w-xl mx-auto text-lg text-slate-600 dark:text-slate-400 font-medium">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('features.cards') || []).map((f, i) => {
              const icons = [Code, Users, Briefcase, Zap, Smartphone, CheckCircle];
              const Icon = icons[i] || Code;
              const colors = ['blue', 'purple', 'green', 'orange', 'pink', 'indigo'];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-10 glass-card group cursor-default"
                >
                  <div className={`h-16 w-16 bg-${colors[i]}-500/10 rounded-2xl flex items-center justify-center text-${colors[i]}-500 mb-8 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 dark:text-white">{f.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative bg-slate-900 rounded-[40px] p-12 md:p-20 text-center text-white shadow-[0_0_100px_rgba(37,99,235,0.2)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-600/20 via-transparent to-purple-600/20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight whitespace-pre-line">{t('cta.title')}</h2>
              <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/auth/signup"
                  className="px-10 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1"
                >
                  {t('cta.primary')}
                </Link>
                <Link
                  href="/courses"
                  className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white/5 transition-all hover:border-white/40"
                >
                  {t('cta.secondary')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
