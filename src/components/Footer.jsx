'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Footer() {
    const { t, mounted } = useLanguage();

    if (!mounted) return null;

    return (
        <footer className="bg-white border-t border-gray-100 py-12 dark:bg-slate-900 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 mb-4">
                            CodeBakers Learning
                        </h3>
                        <p className="text-slate-500 max-w-sm dark:text-slate-400">
                            {t('footer.desc')}
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4 dark:text-white">{t('footer.platform')}</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><Link href="/courses" className="hover:text-blue-600 transition-colors">{t('nav.courses')}</Link></li>
                            <li><Link href="/internships" className="hover:text-blue-600 transition-colors">{t('nav.internships')}</Link></li>
                            <li><Link href="/faq" className="hover:text-blue-600 transition-colors">{t('nav.faq')}</Link></li>
                            <li><Link href="/internships" className="hover:text-blue-600 transition-colors">{t('nav.industrialTraining')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4 dark:text-white">{t('footer.company')}</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">{t('nav.about')}</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">{t('nav.contact')}</Link></li>
                            <li><Link href="/terms" className="hover:text-blue-600 transition-colors">{t('nav.terms')}</Link></li>
                            <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">{t('nav.privacy')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 text-center text-slate-400 text-sm">
                    © {new Date().getFullYear()} CodeBakers Learning. {t('footer.rights')}
                </div>
            </div>
        </footer>
    );
}
