import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { Search, PenTool, Layout, CheckCircle } from 'lucide-react';

const templates = [
    {
        id: 1,
        name: 'Modern Clean',
        category: 'Professional',
        image: 'https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg',
        popular: true
    },
    {
        id: 2,
        name: 'Creative Blue',
        category: 'Creative',
        image: 'https://marketplace.canva.com/EAFc870258w/1/0/1131w/canva-blue-simple-professional-cv-resume-pG_C5Xr9g8w.jpg',
        popular: true
    },
    {
        id: 3,
        name: 'Minimalist Tech',
        category: 'Technical',
        image: 'https://marketplace.canva.com/EAFhF8uw1I8/1/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg',
        popular: false
    },
    {
        id: 4,
        name: 'Executive Dark',
        category: 'Executive',
        image: 'https://marketplace.canva.com/EAFW7j5yvB8/1/0/1131w/canva-black-gold-modern-executive-resume-E8J7k8y2Q5s.jpg',
        popular: false
    },
    {
        id: 5,
        name: 'Entry Level',
        category: 'Simple',
        image: 'https://marketplace.canva.com/EAFH7b9y8I8/1/0/1131w/canva-simple-professional-cv-resume-T5j8y9X8q8s.jpg',
        popular: false
    },
    {
        id: 6,
        name: 'Designer Showcase',
        category: 'Creative',
        image: 'https://marketplace.canva.com/EAFJ7d8y8I8/1/0/1131w/canva-pink-modern-creative-designer-resume-U5j8y9X8q8s.jpg',
        popular: false
    }
];

export default function TemplatesPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Sidebar />

            <div className="md:pl-64 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Choose a Resume Template</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Select a template to get started. All templates are ATS-friendly, fully customizable, and free to use.
                        </p>

                        <div className="mt-8 max-w-md mx-auto relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-full leading-5 bg-white shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-900 dark:border-slate-700 dark:text-white"
                                placeholder="Search templates (e.g., 'Modern', 'Creative')"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templates.map((template) => (
                            <div key={template.id} className="group relative bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-800">
                                <div className="aspect-[21/29.7] bg-slate-100 overflow-hidden relative">
                                    <Image
                                        src={template.image}
                                        alt={template.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                    {template.popular && (
                                        <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                            POPULAR
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                                        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            Use This Template
                                        </button>
                                        <button className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold shadow-lg hover:bg-slate-50 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                            Preview
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-slate-900 dark:text-white">{template.name}</h3>
                                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded dark:bg-slate-800 dark:text-slate-400">{template.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
