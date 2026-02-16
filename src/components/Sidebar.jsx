'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, FileText, Layout, Settings, LogOut, PlusCircle } from 'lucide-react';

const navigation = [
    { name: 'Dashboard', href: '/resume-builder', icon: Home },
    { name: 'My Resumes', href: '/resume-builder/resumes', icon: FileText },
    { name: 'Templates', href: '/templates', icon: Layout },
    { name: 'Settings', href: '/resume-builder/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 pt-16 bg-white border-r border-gray-100 dark:bg-slate-900 dark:border-slate-800">
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="px-4 mb-6">
                        <Link
                            href="/resume-builder/new"
                            className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 font-medium"
                        >
                            <PlusCircle className="mr-2 h-5 w-5" />
                            Create Resume
                        </Link>
                    </div>

                    <nav className="mt-2 flex-1 px-2 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
                                        }`}
                                >
                                    <item.icon
                                        className={`mr-3 h-5 w-5 flex-shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-300'
                                            }`}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex-shrink-0 flex border-t border-gray-100 dark:border-slate-800 p-4">
                    <button className="flex-shrink-0 w-full group block">
                        <div className="flex items-center">
                            <div>
                                <Image
                                    className="inline-block rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    width={36}
                                    height={36}
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
                                    Tom Cook
                                </p>
                                <p className="text-xs font-medium text-slate-500 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-400">
                                    View profile
                                </p>
                            </div>
                            <LogOut className="ml-auto h-5 w-5 text-slate-400 group-hover:text-slate-500" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
