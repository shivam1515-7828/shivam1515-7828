import Link from 'next/link';
import { ArrowRight, Code, FileText, Layout, Zap, Smartphone, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-slate-50 to-slate-50 dark:from-purple-900/20 dark:via-slate-950 dark:to-slate-950 opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 dark:bg-blue-900/30 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New Courses Available Now
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Learn. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Build.</span> Grow.
          </h1>

          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 dark:text-slate-300">
            Master coding with interactive courses and build a job-ready resume in minutes. The all-in-one platform for your developer career.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/auth/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/resume-builder"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all shadow-sm hover:shadow-md dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700"
            >
              Build Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Everything you need to succeed</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">From learning to code to landing your dream job.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 dark:bg-blue-900/30 dark:text-blue-400">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Interactive Courses</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Learn web development, React, Next.js, and more with our hands-on coding courses designed for beginners and pros.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 dark:bg-purple-900/30 dark:text-purple-400">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Resume Builder</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Create ATS-friendly professional resumes in minutes. Choose from our modern templates and stand out.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 dark:bg-green-900/30 dark:text-green-400">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Modern Templates</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Access a library of clean, professional resume templates designed by experts to get you hired.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 dark:bg-orange-900/30 dark:text-orange-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Fast & Efficient</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Build your resume and skills faster with our streamlined tools and focused learning paths.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-6 dark:bg-pink-900/30 dark:text-pink-400">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Fully Responsive</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Learn and build on the go. Our platform is optimized for all devices, from mobile to desktop.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1 dark:bg-slate-800/50 dark:border-slate-700">
              <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 dark:bg-indigo-900/30 dark:text-indigo-400">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 dark:text-white">Job Ready</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We focus on skills that matter. Get the confidence you need to ace your interviews and land the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of developers leveling up their careers with CodeBakers Learning.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/auth/signup"
                  className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Create Free Account
                </Link>
                <Link
                  href="/courses"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
