'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Code, FileText, BookOpen, Layers } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-slate-900/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              CodeBakers
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
              Home
            </Link>
            <Link href="/courses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
              Courses
            </Link>
            <Link href="/resume-builder" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
              Resume Builder
            </Link>
            <Link href="/templates" className="text-slate-600 hover:text-blue-600 font-medium transition-colors dark:text-slate-300 dark:hover:text-blue-400">
              Templates
            </Link>
            <div className="flex items-center gap-4 ml-4">
              <Link href="/auth/signin" className="text-slate-900 font-medium hover:text-blue-600 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-all dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                Sign In
              </Link>
              <Link href="/auth/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
              Home
            </Link>
            <Link 
              href="/courses" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Courses
            </Link>
            <Link 
              href="/resume-builder" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Resume Builder
            </Link>
            <Link 
              href="/templates" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-gray-50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Templates
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Link 
                href="/auth/signin" 
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2 border border-gray-300 rounded-lg text-slate-700 font-medium hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
