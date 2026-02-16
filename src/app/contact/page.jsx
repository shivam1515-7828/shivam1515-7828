'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
                        Contact Us
                    </h1>
                    <div className="h-2 w-24 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
                    <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 font-medium">
                        Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-3xl space-y-8"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
                        <div className="space-y-6">
                            {[
                                { icon: Mail, title: 'Email', value: 'hello@codebakers.com' },
                                { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567' },
                                { icon: MapPin, title: 'Office', value: '123 Tech Square, San Francisco, CA' },
                                { icon: MessageSquare, title: 'Support', value: 'Available 24/7 via Chat' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">{item.title}</div>
                                        <div className="text-slate-600 dark:text-slate-400">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-3xl space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Tell us how we can help..."></textarea>
                        </div>
                        <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-1">
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
