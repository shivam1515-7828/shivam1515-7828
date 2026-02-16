import Link from 'next/link';
import Image from 'next/image';
import { Clock, BarChart, Users, ArrowRight } from 'lucide-react';

export default function CourseCard({ title, description, level, duration, students, image, tags, slug }) {
    return (
        <div className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900/50 dark:border-slate-800">
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 rounded-full shadow-sm dark:bg-slate-900/90 dark:text-white">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors dark:text-white">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                    {description}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-6">
                    <div className="flex items-center gap-1">
                        <BarChart className="h-4 w-4" />
                        <span>{level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{students}</span>
                    </div>
                </div>

                <Link
                    href={`/courses/${slug}`}
                    className="mt-auto w-full flex items-center justify-center px-4 py-2 bg-slate-50 text-slate-900 font-medium rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all dark:bg-slate-800 dark:text-white dark:group-hover:bg-blue-600"
                >
                    View Course <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
