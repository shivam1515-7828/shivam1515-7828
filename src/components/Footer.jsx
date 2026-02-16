export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 dark:bg-slate-900 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                            CodeBakers Learning
                        </h3>
                        <p className="text-slate-500 max-w-sm dark:text-slate-400">
                            The ultimate platform for developers to learn, build projects, and craft professional resumes. Start your journey today.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4 dark:text-white">Platform</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><a href="/courses" className="hover:text-blue-600 transition-colors">Courses</a></li>
                            <li><a href="/resume-builder" className="hover:text-blue-600 transition-colors">Resume Builder</a></li>
                            <li><a href="/templates" className="hover:text-blue-600 transition-colors">Templates</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4 dark:text-white">Company</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
                            <li><a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 text-center text-slate-400 text-sm">
                    © {new Date().getFullYear()} CodeBakers Learning. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
