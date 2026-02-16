import Link from 'next/link';
import Image from 'next/image';
import { MoreVertical, Edit, Download, Trash } from 'lucide-react';

export default function ResumeCard({ title, updatedAt, thumbnail, progress }) {
    return (
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all dark:bg-slate-900 dark:border-slate-800 overflow-hidden group">
            <div className="relative aspect-[21/29.7] bg-slate-100 dark:bg-slate-800 overflow-hidden border-b border-slate-100 dark:border-slate-800">
                {/* Placeholder for resume preview */}
                {thumbnail ? (
                    <Image src={thumbnail} alt={title} fill className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <div className="w-3/4 h-3/4 bg-white shadow-sm dark:bg-slate-950"></div>
                    </div>
                )}

                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                        href="/resume-builder/editor"
                        className="px-4 py-2 bg-white text-slate-900 rounded-full font-medium shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all"
                    >
                        Edit Resume
                    </Link>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white truncate pr-2">{title}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Updated {updatedAt}</p>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                        <MoreVertical className="h-4 w-4" />
                    </button>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4 dark:bg-slate-800">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700">
                        <Download className="h-3 w-3" /> Download
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors dark:hover:bg-red-900/20">
                        <Trash className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
