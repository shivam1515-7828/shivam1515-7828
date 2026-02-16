'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, Code, FileText, BookOpen, Layers, Globe, Moon, Sun } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from "next-themes";
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const { language, changeLanguage, t, mounted } = useLanguage();

    const handleLogout = () => {
        logout();
        setIsOpen(false);
        router.push('/');
    };

    if (!mounted) return null;

    return (
        <nav className="fixed w-full z-50 glass-card transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                            <Code className="h-6 w-6 text-white" />
                        </div>
                        <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                            CodeBakers
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
                            {t('nav.home')}
                        </Link>
                        <Link href="/courses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
                            {t('nav.courses')}
                        </Link>
                        <Link href="/internships" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
                            {t('nav.internships')}
                        </Link>
                        <Link href="/faq" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
                            {t('nav.faq')}
                        </Link>

                        <div className="flex items-center gap-4 ml-4">
                            {/* Region Selector */}
                            <div className="hidden lg:flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1.5 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <Globe className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                                <select
                                    value={language}
                                    onChange={(e) => changeLanguage(e.target.value)}
                                    className="bg-transparent text-sm font-medium text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer appearance-none pr-2"
                                >
                                    <optgroup label="English Regions">
                                        <option value="en-IN">🇮🇳 India (English)</option>
                                        <option value="en-GB">🇬🇧 UK (English)</option>
                                    </optgroup>
                                    <optgroup label="Indian Languages">
                                        <option value="hi-IN">🇮🇳 Hindi (हिंदी)</option>
                                        <option value="bn-IN">🇮🇳 Bengali (বাংলা)</option>
                                        <option value="mr-IN">🇮🇳 Marathi (मराठी)</option>
                                        <option value="ta-IN">🇮🇳 Tamil (தமிழ்)</option>
                                        <option value="te-IN">🇮🇳 Telugu (తెలుగు)</option>
                                        <option value="gu-IN">🇮🇳 Gujarati (ગુજરાતી)</option>
                                        <option value="kn-IN">🇮🇳 Kannada (ಕನ್ನಡ)</option>
                                        <option value="ml-IN">🇮🇳 Malayalam (മലയാളം)</option>
                                        <option value="pa-IN">🇮🇳 Punjabi (ਪੰਜਾਬੀ)</option>
                                    </optgroup>
                                    <optgroup label="International">
                                        <option value="fr-FR">🇫🇷 French (Français)</option>
                                        <option value="es-ES">🇪🇸 Spanish (Español)</option>
                                    </optgroup>
                                </select>
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all"
                                aria-label="Toggle Theme"
                            >
                                {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
                            </button>

                            {user ? (
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('nav.greeting')}, {user.name}</span>
                                    <button onClick={handleLogout} className="text-slate-900 font-medium hover:text-red-600 bg-gray-100 hover:bg-red-50 px-4 py-2 rounded-lg transition-all dark:bg-slate-800 dark:text-white dark:hover:bg-red-900/20">
                                        {t('nav.signOut')}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link href="/auth/signin" className="text-slate-900 font-medium hover:text-blue-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                                        {t('nav.signIn')}
                                    </Link>
                                    <Link href="/auth/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5">
                                        {t('nav.getStarted')}
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-all"
                        >
                            {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
                        </button>
                        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-full px-2 py-1 cursor-pointer">
                            <select
                                value={language}
                                onChange={(e) => changeLanguage(e.target.value)}
                                className="bg-transparent text-xs font-medium text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer appearance-none"
                            >
                                <option value="en-IN">🇮🇳 EN</option>
                                <option value="en-GB">🇬🇧 EN</option>
                                <option value="hi-IN">🇮🇳 HI</option>
                                <option value="bn-IN">🇮🇳 BN</option>
                                <option value="mr-IN">🇮🇳 MR</option>
                                <option value="ta-IN">🇮🇳 TA</option>
                                <option value="te-IN">🇮🇳 TE</option>
                                <option value="gu-IN">🇮🇳 GU</option>
                                <option value="kn-IN">🇮🇳 KN</option>
                                <option value="ml-IN">🇮🇳 ML</option>
                                <option value="pa-IN">🇮🇳 PA</option>
                                <option value="fr-FR">🇫🇷 FR</option>
                                <option value="es-ES">🇪🇸 ES</option>
                            </select>
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none dark:text-slate-300 dark:hover:text-white"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl dark:bg-slate-900 dark:border-slate-800">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            {t('nav.home')}
                        </Link>
                        <Link
                            href="/courses"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            {t('nav.courses')}
                        </Link>
                        <Link
                            href="/internships"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            {t('nav.internships')}
                        </Link>
                        <Link
                            href="/faq"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                            {t('nav.faq')}
                        </Link>
                        <div className="pt-4 flex flex-col gap-3">
                            <Link
                                href="/auth/signin"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center px-4 py-2 border border-gray-300 rounded-lg text-slate-700 font-medium hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                            >
                                {t('nav.signIn')}
                            </Link>
                            <Link
                                href="/auth/signup"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/30"
                            >
                                {t('nav.getStarted')}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
