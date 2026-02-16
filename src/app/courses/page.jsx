import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import { Search, Filter } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: 'Full Stack Web Development Bootcamp',
        description: 'Master HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp designed to take you from beginner to job-ready developer.',
        level: 'Beginner',
        duration: '12 Weeks',
        students: '1,234',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2672',
        tags: ['Web Dev', 'Full Stack'],
        slug: 'full-stack-bootcamp'
    },
    {
        id: 2,
        title: 'Advanced React & Next.js Masterclass',
        description: 'Deep dive into React hooks, context, performance optimization, and server-side rendering with Next.js 14.',
        level: 'Advanced',
        duration: '8 Weeks',
        students: '856',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2670',
        tags: ['React', 'Next.js'],
        slug: 'react-nextjs-masterclass'
    },
    {
        id: 3,
        title: 'Python for Data Science and Machine Learning',
        description: 'Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, Tensorflow, and more!',
        level: 'Intermediate',
        duration: '10 Weeks',
        students: '2,100',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2670',
        tags: ['Python', 'Data Science'],
        slug: 'python-data-science'
    },
    {
        id: 4,
        title: 'UI/UX Design Fundamentals',
        description: 'Learn the principles of user interface and user experience design. Create beautiful, usable, and accessible digital products.',
        level: 'Beginner',
        duration: '6 Weeks',
        students: '1,540',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2564',
        tags: ['Design', 'Figma'],
        slug: 'ui-ux-design'
    },
    {
        id: 5,
        title: 'DevOps & Cloud Engineering',
        description: 'Master Docker, Kubernetes, AWS, and CI/CD pipelines. Automate deployment and scale applications like a pro.',
        level: 'Advanced',
        duration: '10 Weeks',
        students: '900',
        image: 'https://images.unsplash.com/photo-1667372393119-c85c020799a3?auto=format&fit=crop&q=80&w=2670',
        tags: ['DevOps', 'Cloud'],
        slug: 'devops-engineering'
    },
    {
        id: 6,
        title: 'Mobile App Development with React Native',
        description: 'Build native mobile apps for iOS and Android using React Native. Learn navigation, state management, and device features.',
        level: 'Intermediate',
        duration: '8 Weeks',
        students: '1,100',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2670',
        tags: ['Mobile', 'React Native'],
        slug: 'react-native-mobile'
    }
];

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Explore Courses</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        Upgrade your skills with our curated courses. From web development to data science, we have something for everyone.
                    </p>

                    {/* Search and Filter */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-grow max-w-lg">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:placeholder-slate-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                                placeholder="Search for courses..."
                            />
                        </div>
                        <button className="inline-flex items-center justify-center px-4 py-3 border border-slate-200 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:hover:bg-slate-700">
                            <Filter className="mr-2 h-5 w-5 text-slate-400" />
                            Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
