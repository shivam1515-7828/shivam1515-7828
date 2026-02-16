import Sidebar from '@/components/Sidebar';
import ResumeCard from '@/components/ResumeCard';
import { Plus, Search } from 'lucide-react';

export default function ResumeDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Sidebar />

            <div className="md:pl-64 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Resume Dashboard</h1>
                            <p className="text-slate-600 dark:text-slate-400">Welcome back, Tom! You have 3 resumes.</p>
                        </div>

                        <div className="flex gap-3">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                    placeholder="Search resumes..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Create New Card */}
                        <button className="flex flex-col items-center justify-center aspect-[21/29.7] bg-white border-2 border-dashed border-slate-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group dark:bg-slate-900 dark:border-slate-700 dark:hover:border-blue-400 dark:hover:bg-blue-900/10">
                            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform dark:bg-blue-900/30 dark:text-blue-400">
                                <Plus className="h-6 w-6" />
                            </div>
                            <span className="font-semibold text-slate-900 dark:text-white">Create New Resume</span>
                            <span className="text-xs text-slate-500 mt-1 dark:text-slate-400">Start from scratch or template</span>
                        </button>

                        {/* Resume Cards */}
                        <ResumeCard
                            title="Senior Frontend Resume"
                            updatedAt="2 days ago"
                            progress={85}
                            thumbnail="https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg"
                        />

                        <ResumeCard
                            title="Software Engineer CV"
                            updatedAt="1 week ago"
                            progress={100}
                            thumbnail="https://marketplace.canva.com/EAFc870258w/1/0/1131w/canva-blue-simple-professional-cv-resume-pG_C5Xr9g8w.jpg"
                        />

                        <ResumeCard
                            title="Internship Application"
                            updatedAt="3 weeks ago"
                            progress={40}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
