'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Download, Eye, Plus, Trash } from 'lucide-react';

export default function ResumeEditor() {
    const [activeTab, setActiveTab] = useState('personal');

    const [formData, setFormData] = useState({
        fullName: 'Bat Wayne',
        jobTitle: 'Senior Software Engineer',
        email: 'bat.wayne@example.com',
        phone: '+1 (555) 123-4567',
        summary: 'Experienced software engineer with a passion for building scalable web applications and solving complex problems.',
        skills: ['JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'],
        experience: [
            {
                id: 1,
                role: 'Senior Developer',
                company: 'Tech Corp',
                duration: '2020 - Present',
                description: 'Leading the frontend team and rebuilding the legacy application using Next.js.'
            }
        ]
    });

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col pt-16 h-screen overflow-hidden">
            {/* Editor Header */}
            <header className="bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-slate-800 px-6 py-4 flex items-center justify-between z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/resume-builder" className="p-2 hover:bg-slate-100 rounded-full transition-colors dark:hover:bg-slate-800">
                        <ArrowLeft className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Untitled Resume</h1>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span> Saved
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                        <Eye className="h-4 w-4" /> Preview
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30">
                        <Download className="h-4 w-4" /> Download PDF
                    </button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Editor Sidebar */}
                <aside className="w-80 bg-white border-r border-gray-200 dark:bg-slate-900 dark:border-slate-800 flex flex-col shrink-0">
                    <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                        {['Personal Details', 'Summary', 'Experience', 'Education', 'Skills', 'Projects'].map((section) => {
                            const id = section.toLowerCase().split(' ')[0];
                            return (
                                <button
                                    key={section}
                                    onClick={() => setActiveTab(id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === id
                                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                                            : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                                        }`}
                                >
                                    {section}
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Editor Content Area */}
                <main className="flex-1 overflow-y-auto bg-slate-50 p-8 dark:bg-slate-950">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-200 dark:bg-slate-900 dark:border-slate-800 mb-20">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white capitalize">{activeTab} Info</h2>
                        </div>

                        {activeTab === 'personal' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Job Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                            value={formData.jobTitle}
                                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'summary' && (
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Professional Summary</label>
                                <textarea
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                    value={formData.summary}
                                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                ></textarea>
                                <p className="text-xs text-slate-500 mt-2 text-right">0 / 500 characters</p>
                            </div>
                        )}

                        {activeTab === 'experience' && (
                            <div className="space-y-6">
                                {formData.experience.map((exp) => (
                                    <div key={exp.id} className="p-4 border border-slate-200 rounded-lg dark:border-slate-800 group relative bg-slate-50 dark:bg-slate-900/50">
                                        <h3 className="font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{exp.company} • {exp.duration}</p>
                                        <button className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash className="h-4 w-4" />
                                        </button>
                                    </div>
                                ))}
                                <button className="w-full py-3 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg text-slate-500 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all dark:border-slate-700 dark:hover:bg-slate-800">
                                    <Plus className="h-5 w-5 mr-2" /> Add Experience
                                </button>
                            </div>
                        )}

                        {['education', 'skills', 'projects'].includes(activeTab) && (
                            <div className="text-center py-12 text-slate-500">
                                <p>This section is under development in this demo.</p>
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end dark:border-slate-800">
                            <button className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                                <Save className="h-4 w-4" /> Save Changes
                            </button>
                        </div>
                    </div>
                </main>

                {/* Preview Panel (Hidden on small screens) */}
                <div className="hidden xl:block w-[500px] bg-slate-200 dark:bg-slate-950 border-l border-gray-200 dark:border-slate-800 overflow-y-auto p-8 shrink-0 flex justify-center">
                    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl origin-top transform scale-75 text-xs p-8 text-slate-900">
                        <h1 className="text-2xl font-bold uppercase tracking-wider mb-1">{formData.fullName}</h1>
                        <p className="text-blue-600 font-medium mb-4">{formData.jobTitle}</p>
                        <div className="flex gap-4 text-xs text-slate-500 mb-6 border-b pb-4">
                            <span>{formData.email}</span>
                            <span>{formData.phone}</span>
                        </div>

                        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black mb-3 pb-1">Profile</h2>
                        <p className="mb-6 leading-relaxed">{formData.summary}</p>

                        <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black mb-3 pb-1">Experience</h2>
                        {formData.experience.map((exp) => (
                            <div key={exp.id} className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <h3 className="font-bold">{exp.role}</h3>
                                    <span className="text-slate-600">{exp.duration}</span>
                                </div>
                                <p className="text-slate-600 text-xs italic mb-2">{exp.company}</p>
                                <p>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
