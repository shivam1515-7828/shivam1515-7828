'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
    'en-IN': {
        nav: {
            home: 'Home',
            courses: 'Courses',
            internships: 'Live Internships',
            industrialTraining: 'Industrial Training',
            faq: 'FAQ',
            dashboard: 'Dashboard',
            signIn: 'Sign In',
            getStarted: 'Get Started',
            signOut: 'Sign Out',
            greeting: 'Hi',
            about: 'About Us',
            contact: 'Contact',
            terms: 'Terms & Conditions',
            privacy: 'Privacy Policy',
        },
        footer: {
            desc: 'The ultimate platform for developers to learn, build projects, and craft professional resumes. Start your journey today.',
            platform: 'Platform',
            company: 'Company',
            rights: 'All rights reserved.'
        },
        common: {
            students: 'Students',
            mentors: 'Mentors',
            duration: 'Duration',
            level: 'Level',
            starts: 'Starts',
            enrollNow: 'Enroll Now',
            viewCourse: 'View Course',
            liveSession: 'LIVE SESSION',
            bookSpot: 'Book Your Spot',
            industrialTraining: 'Industrial Training',
            search: 'Search'
        },
        hero: {
            badge: 'Now Live in India 🇮🇳 & UK 🇬🇧',
            title: 'Learn. Build. Grow.',
            subtitle: 'Master coding with interactive courses and build a job-ready resume in minutes. The all-in-one platform for your developer career.',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'Live Internships',
        },
        features: {
            title: 'Everything you need to succeed',
            subtitle: 'From learning to code to landing your dream job.',
            cards: [
                { title: 'Interactive Courses', desc: 'Learn web development, React, Next.js, and more with our hands-on coding courses designed for beginners and pros.' },
                { title: 'Live Internships', desc: 'Join real-time, interactive internship sessions with industry experts. No recorded videos - pure live learning.' },
                { title: 'Industrial Training', desc: 'Get hands-on experience with real-world projects and industrial standards to make you industry-ready.' },
                { title: 'Fast & Efficient', desc: 'Accelerate your career with our focused learning paths and direct mentorship during live sessions.' },
                { title: 'Highly Interactive', desc: 'Ask questions in real-time, participate in live coding, and get instant feedback from your mentors.' },
                { title: 'Placement Ready', desc: 'We focus on skills that matter. Get the confidence and certification you need to land your dream job.' }
            ]
        },
        cta: {
            title: 'Ready to start\nyour journey?',
            subtitle: 'Join thousands of developers leveling up their careers with CodeBakers Learning.',
            primary: 'Create Free Account',
            secondary: 'Explore Courses'
        },
        internships: {
            hero: {
                badge: 'LIVE INDUSTRIAL TRAINING',
                title: 'Live Internships.',
                titleAccent: 'Real Industry Skills.',
                subtitle: 'Skip recorded sessions. Join live interactive internships with industry experts. Get mentored, work on real projects, and launch your career with confidence.'
            },
            stats: {
                live: '100% Live Sessions',
                mentorship: 'Direct Mentorship',
                certificate: 'Industrial Certificate'
            },
            searchPlace: 'Find your internship program...',
            refine: 'Refine Search',
            all: 'View All',
            detail: {
                roadmap: 'Live Training Roadmap',
                why: 'Why this program?',
                mentorship: 'Expert Mentorship',
                chat: 'Chat with Mentor',
                enroll: 'Enroll for',
                pdf: 'Curriculum PDF',
                focus: 'Focus',
                startDate: 'Start Date',
                duration: 'Duration',
                liveCohort: 'LIVE COHORT',
                mentors: 'EXPERT MENTORS',
                join: 'Join',
                students: 'students',
                best: 'Learn from the Best',
                bookingSuccess: 'Spot Booked Successfully!',
                bookingSubtitle: 'Our team will contact you shortly with the next steps and cohort details.'
            },
            categories: {
                all: 'All Programs',
                web: 'Web Development',
                backend: 'Backend & Systems',
                ai: 'AI & Data Science',
                cloud: 'Cloud & DevOps'
            },
            noResults: 'No internship programs found matching your search.',
            results: 'results matching',
            data: [
                {
                    id: 1,
                    slug: 'full-stack-live-training',
                    title: 'Full Stack Web Development - Live Industrial Training',
                    description: 'Master the MERN stack with live sessions. Build real-world applications, understand industrial architecture, and get ready for top-tier tech roles.',
                    duration: '12 Weeks',
                    mentors: 'Senior Architects from Top Tech Firms',
                    students: '450+',
                    price: '₹5,999',
                    startDate: 'March 15, 2026',
                    category: 'web',
                    tags: ['Web Dev', 'Industrial'],
                    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2672',
                    curriculum: [
                        { module: 'Industrial Frontend Mastery (React/Next.js)', focus: 'Live UI Architecture & State Management' },
                        { module: 'Industrial Backend & Scalability', focus: 'Node.js, Microservices, and Large Scale DB' },
                        { module: 'System Design & Real Projects', focus: 'Architecting 1:1 Industry Grade Apps' },
                        { module: 'CI/CD & Cloud Deployment', focus: 'Industrial Grade Deployments on AWS/Vercel' }
                    ],
                    benefits: [
                        '100% Live Interactive Sessions',
                        'Industry Certified Experience Letter',
                        'Real-world Capstone Projects',
                        'Direct Access to Senior Mentors',
                        'Job Placement Support & Referrals'
                    ],
                    mentorList: [
                        {
                            name: 'Aditya Sharma',
                            role: 'Senior Software Engineer',
                            company: 'Google',
                            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=2670',
                            linkedin: '#'
                        },
                        {
                            name: 'Priya Patel',
                            role: 'Tech Lead',
                            company: 'Microsoft',
                            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2670',
                            linkedin: '#'
                        },
                        {
                            name: 'Rohan Gupta',
                            role: 'Engineering Manager',
                            company: 'Amazon',
                            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=2670',
                            linkedin: '#'
                        }
                    ]
                },
                {
                    id: 2,
                    slug: 'backend-live-training',
                    title: 'Backend Systems & Scalability - Live Mastery',
                    description: 'Deep dive into high-performance backend architecture. Learn Node.js internals, Redis caching, and complex system designs in live interactive cohorts.',
                    duration: '8 Weeks',
                    mentors: 'Backend Tech Leads',
                    students: '320+',
                    price: '₹4,999',
                    startDate: 'March 20, 2026',
                    category: 'backend',
                    tags: ['Backend', 'System Design'],
                    image: '/images/backend_systems_live_training.png',
                    curriculum: [
                        { module: 'Advanced Node.js Architecture', focus: 'Event Loop & Performance Tuning' },
                        { module: 'Distributed Systems & Microservices', focus: 'Service Communication & Resiliency' },
                        { module: 'Database Optimization (Postgres/Redis)', focus: 'Query Tuning & Caching Strategies' }
                    ],
                    benefits: [
                        'Live Code Reviews with Experts',
                        'Industrial Backend Certification',
                        'System Design Mastery',
                        '24/7 Slack Support with Mentors'
                    ]
                },
                {
                    id: 3,
                    slug: 'ai-live-internship',
                    title: 'AI & Data Science Industrial Internship',
                    description: 'Hands-on live training on Machine Learning, NLP, and Computer Vision using real industry datasets.',
                    duration: '10 Weeks',
                    mentors: 'Data Scientists',
                    students: '280+',
                    price: '₹6,499',
                    startDate: 'March 10, 2026',
                    category: 'ai',
                    tags: ['AI/ML', 'Data Science'],
                    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2670',
                    curriculum: [
                        { module: 'Mathematics for AI/ML', focus: 'Linear Algebra & Statistics' },
                        { module: 'Deep Learning & Neural Networks', focus: 'Computer Vision & NLP Pipelines' },
                        { module: 'Production AI Deployment', focus: 'MLOps & Model Monitoring' }
                    ],
                    benefits: [
                        'Access to GPU Compute for Training',
                        'Collaborative Data Projects',
                        'Certificate of Excellence in AI',
                        'Mentorship by PhD Experts'
                    ]
                },
                {
                    id: 4,
                    slug: 'devops-live-training',
                    title: 'Cloud Computing & DevOps Live Bootcamp',
                    description: 'Master AWS, Docker, and Kubernetes in a live environment. Learn industrial deployment strategies.',
                    duration: '10 Weeks',
                    mentors: 'Cloud Experts',
                    students: '390+',
                    price: '₹5,499',
                    startDate: 'April 01, 2026',
                    category: 'cloud',
                    tags: ['Cloud', 'DevOps'],
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672',
                    curriculum: [
                        { module: 'Cloud Architecture Foundations', focus: 'AWS/Azure Core Services' },
                        { module: 'Containerization & Orchestration', focus: 'Docker & Kubernetes Mastery' },
                        { module: 'CI/CD Pipelines & Automation', focus: 'Jenkins, GitHub Actions, Terraform' }
                    ],
                    benefits: [
                        'AWS/Cloud Sandbox Environment',
                        'DevOps Certification Readiness',
                        'Infrastructure as Code (IaC) Projects',
                        'Expert Guidance on Cloud Migration'
                    ]
                }
            ],
            trending: 'Trending:',
            popularSearches: ['MERN Stack', 'Backend Systems', 'AI & Data Science', 'DevOps', 'Cloud Mastery'],
            cta: {
                title: "Don't settle for recorded videos.",
                subtitle: 'Join our live sessions and interact with the best minds in the industry. Limited seats per batch for personalized attention.',
                button: 'Request a Callback'
            }
        },
        courses: {
            hero: {
                title: 'Explore Courses',
                subtitle: 'Upgrade your skills with our curated courses. From web development to data science, we have something for everyone.'
            },
            searchPlace: 'Search for courses...',
            filter: 'Filters',
            all: 'All Levels',
            noResults: 'No courses found matching your criteria.',
            reset: 'Clear Filters',
            results: 'results matching',
            trending: 'Trending:',
            popularSearches: ['Web Development', 'React', 'Python', 'UI/UX Design', 'DevOps'],
            commonQuestions: 'Common Questions',
            levels: {
                all: 'All Levels',
                beginner: 'Beginner',
                intermediate: 'Intermediate',
                advanced: 'Advanced'
            },
            courseDetail: {
                curriculum: 'Course Curriculum',
                whatYouWillLearn: "What you'll learn",
                lessons: 'Lessons',
                lastUpdated: 'Last updated',
                thisMonth: 'This Month',
                freePreview: 'FREE PREVIEW',
                locked: 'LOCKED',
                notFound: 'Course not found',
                backToCourses: 'Back to courses',
                enrollWithPrice: 'Enroll Now - '
            }
        },
        faqPage: {
            badge: 'SUPPORT CENTER',
            title: 'FAQ',
            subtitle: 'Everything you need to know about our platform and training.',
            searchPlace: 'Search your question...',
            noResults: 'No questions found matching your search.',
            categories: {
                internships: 'Live Internships',
                enrollment: 'Enrollment & Refunds',
                general: 'General Learning'
            },
            cta: {
                title: 'Still have questions?',
                subtitle: "Can't find the answer you're looking for? Please chat with our friendly team.",
                chat: 'Chat with Experts',
                callback: 'Request a Callback'
            },
            faqs: [
                {
                    category: "Live Internships",
                    questions: [
                        { q: "Is this training really live or recorded sessions?", a: "Every single session in our industrial training programs is 100% live and interactive. We do not provide recorded videos as the primary learning material, as we believe true learning happens in real-time engagement." },
                        { q: "What if I miss a live session?", a: "While we encourage live attendance, all live sessions are recorded and made available in your dashboard within 24 hours for your review. However, these are strictly for backup purposes." },
                        { q: "Will I get an industrial certificate?", a: "Yes, upon successful completion of the training and the capstone project, you will receive an Industrial Experience Certificate from CodeBakers Learning." }
                    ]
                },
                {
                    category: "Enrollment & Refunds",
                    questions: [
                        { q: "What is the refund policy?", a: "We offer a 3-day refund window from the date of enrollment. If you are not satisfied within the first 3 days, you are eligible for a full refund." },
                        { q: "How long does the refund process take?", a: "Refund processing typically takes 7-14 business days to reflect in your original payment method once approved." },
                        { q: "Can I switch between programs?", a: "Yes, you can request to switch between internship cohorts or courses within the first week of enrollment, subject to seat availability." }
                    ]
                },
                {
                    category: "General Learning",
                    questions: [
                        { q: "Do I get lifetime access to self-paced courses?", a: "Yes, all self-paced courses come with lifetime access, allowing you to learn at your own speed." },
                        { q: "Are there any prerequisites?", a: "Prerequisites vary by program. Most of our beginner tracks start from the very basics, while advanced tracks might require some prior knowledge." }
                    ]
                }
            ]
        },
        termsPage: {
            title: 'Terms & Conditions',
            subtitle: 'Please read our terms of service and refund policies carefully.',
            refundPolicy: 'Refund Policy',
            reflection: '3-Day Reflection Period',
            reflectionDesc: 'We offer a strict 3-day refund window from the date of enrollment. If you are not satisfied within the first 3 days, you are eligible for a full refund.',
            processing: 'Refund Processing Time',
            processingDesc: 'Once approved, it typically takes 7-14 business days to reflect in your original payment method.',
            generalTerms: 'General Terms',
            points: [
                'Live Attendance: 100% attendance encouraged.',
                'Certification: Issued upon successful project completion.',
                'Intellectual Property: Material shared is the property of CodeBakers.'
            ]
        },
        privacyPage: {
            title: 'Privacy Policy',
            sections: [
                { title: 'Data Collection', content: 'We collect minimal information like name and email to provide our services.' },
                { title: 'Usage', content: 'Used solely for personalization and support. We do not sell your data.' },
                { title: 'Security', content: 'Industry-standard security measures protect your data.' },
                { title: 'Cookies', content: 'Essential cookies for login and preferences.' }
            ],
            lastUpdated: 'Last Updated: February 2026'
        },
        aboutPage: {
            title: 'About CodeBakers',
            subtitle: 'We are on a mission to empower developers by providing the best learning resources and career tools in the industry.',
            vision: 'Our Vision',
            visionDesc: 'CodeBakers Learning was born out of a simple idea: making professional development accessible and effective. We bridge the gap between learning to code and landing your dream job.',
            stats: 'Active Learners',
            points: [
                'Focused learning paths for modern tech stacks.',
                'Community-driven approach to career growth.',
                'Industry-standard resume building tools.',
                'Certifications that matter to employers.'
            ]
        },
        joinTeam: {
            title: 'Be a Part of Our Team',
            subtitle: 'We are looking for passionate individuals to help us build the future of developer education.',
            desc: 'Join a team of creators, engineers, and educators who are dedicated to making a difference in the lives of thousands of students worldwide.',
            cta: 'View Openings',
            benefits: [
                'Remote-first Culture',
                'Continuous Learning',
                'Modern Tech Stack',
                'Impactful Work'
            ]
        }
    },
    'en-GB': {
        nav: {
            home: 'Home',
            courses: 'Courses',
            internships: 'Live Internships',
            industrialTraining: 'Industrial Training',
            faq: 'FAQ',
            dashboard: 'Dashboard',
            signIn: 'Sign In',
            getStarted: 'Get Started',
            signOut: 'Sign Out',
            greeting: 'Hi',
        },
        hero: {
            badge: 'Now Live in UK 🇬🇧 & India 🇮🇳',
            title: 'Learn. Build. Grow.',
            subtitle: 'Master coding with interactive courses and build a job-ready CV in minutes. The all-in-one platform for your developer career.',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'Live Internships',
        },
        features: {
            title: 'Everything you need to succeed',
            subtitle: 'From learning to code to landing your dream job.',
        }
    },
    'hi-IN': {
        nav: {
            home: 'होम',
            courses: 'कोर्स',
            internships: 'लाइव इंटर्नशिप',
            industrialTraining: 'इंडस्ट्रियल ट्रेनिंग',
            faq: 'एफएक्यू',
            dashboard: 'डैशबोर्ड',
            signIn: 'साइन इन',
            getStarted: 'शुरू करें',
            signOut: 'साइन आउट',
            greeting: 'नमस्ते',
            about: 'हमारे बारे में',
            contact: 'संपर्क करें',
            terms: 'नियम और शर्तें',
            privacy: 'प्राइवेसी पॉलिसी',
        },
        footer: {
            desc: 'डेवलपर्स के लिए सीखने, प्रोजेक्ट बनाने और पेशेवर रिज्यूमे तैयार करने का एकमात्र प्लेटफॉर्म। आज ही अपनी यात्रा शुरू करें।',
            platform: 'प्लेटफॉर्म',
            company: 'कंपनी',
            rights: 'सर्वाधिकार सुरक्षित।'
        },
        common: {
            students: 'छात्र',
            mentors: 'मेंटर्स',
            duration: 'अवधि',
            level: 'स्तर',
            starts: 'शुरू होता है',
            enrollNow: 'अभी नामांकन करें',
            viewCourse: 'कोर्स देखें',
            liveSession: 'लाइव सत्र',
            bookSpot: 'अपनी सीट बुक करें',
            registered: 'पंजीकृत',
            industrialTraining: 'इंडस्ट्रियल ट्रेनिंग',
            search: 'खोजें'
        },
        hero: {
            badge: 'अब भारत 🇮🇳 और यूके 🇬🇧 में लाइव',
            title: 'सीखें। बनाएं। आगे बढ़ें।',
            subtitle: 'इंटरैक्टिव कोर्सेस के साथ कोडिंग सीखें और मिनटों में जॉब-रेडी रिज्यूमे बनाएं। आपके डेवलपर करियर के लिए एकमात्र प्लेटफॉर्म।',
            ctaPrimary: 'शुरू करें',
            ctaSecondary: 'लाइव इंटर्नशिप',
        },
        features: {
            title: 'सफलता के लिए आपको जो कुछ भी चाहिए',
            subtitle: 'कोडिंग सीखने से लेकर अपने सपनों की नौकरी पाने तक।',
            cards: [
                { title: 'इंटरैक्टिव कोर्सेस', desc: 'शुरुआत करने वालों और अनुभवी लोगों के लिए डिज़ाइन किए गए हमारे व्यावहारिक कोडिंग कोर्सेस के साथ वेब डेवलपमेंट, रिएक्ट, नेक्स्ट.जेएस और बहुत कुछ सीखें।' },
                { title: 'लाइव इंटर्नशिप', desc: 'उद्योग विशेषज्ञों के साथ रीयल-टाइम, इंटरैक्टिव इंटर्नशिप सत्रों में शामिल हों। कोई रिकॉर्डेड वीडियो नहीं - केवल लाइव लर्निंग।' },
                { title: 'इंडस्ट्रियल ट्रेनिंग', desc: 'आपको उद्योग के लिए तैयार करने के लिए वास्तविक परियोजनाओं और औद्योगिक मानकों के साथ व्यावहारिक अनुभव प्राप्त करें।' },
                { title: 'तेज़ और कुशल', desc: 'लाइव सत्रों के दौरान हमारे केंद्रित शिक्षण पथों और प्रत्यक्ष मार्गदर्शन के साथ अपने करियर को गति दें।' },
                { title: 'अत्यधिक इंटरैक्टिव', desc: 'रीयल-टाइम में प्रश्न पूछें, लाइव कोडिंग में भाग लें और अपने मेंटर्स से तत्काल फीडबैक प्राप्त करें।' },
                { title: 'प्लेसमेंट के लिए तैयार', desc: 'हम उन कौशलों पर ध्यान केंद्रित करते हैं जो मायने रखते हैं। अपने सपनों की नौकरी पाने के लिए आत्मविश्वास और प्रमाणन प्राप्त करें।' }
            ]
        },
        cta: {
            title: 'क्या आप अपनी यात्रा\nशुरू करने के लिए तैयार हैं?',
            subtitle: 'CodeBakers Learning के साथ अपने करियर को बेहतर बनाने वाले हजारों डेवलपर्स में शामिल हों।',
            primary: 'मुफ़्त खाता बनाएं',
            secondary: 'कोर्सेस एक्सप्लोर करें'
        },
        internships: {
            hero: {
                badge: 'लाइव इंडस्ट्रियल ट्रेनिंग',
                title: 'लाइव इंटर्नशिप।',
                titleAccent: 'वास्तविक उद्योग कौशल।',
                subtitle: 'रिकॉर्डेड सत्रों को छोड़ें। उद्योग विशेषज्ञों के साथ लाइव इंटरैक्टिव इंटर्नशिप में शामिल हों। मेंटरशिप प्राप्त करें, वास्तविक प्रोजेक्ट्स पर काम करें और आत्मविश्वास के साथ अपना करियर शुरू करें।'
            },
            stats: {
                live: '100% लाइव सत्र',
                mentorship: 'सीधी मेंटरशिप',
                certificate: 'इंडस्ट्रियल सर्टिफिकेट'
            },
            searchPlace: 'अपना इंटर्नशिप प्रोग्राम खोजें...',
            refine: 'सर्च रिफाइन करें',
            all: 'सभी देखें',
            detail: {
                roadmap: 'लाइव ट्रेनिंग रोडमैप',
                why: 'यह प्रोग्राम क्यों चुनें?',
                mentorship: 'एक्सपर्ट मेंटरशिप',
                chat: 'मेंटोर से बात करें',
                enroll: 'नामांकन करें',
                pdf: 'करिकुलम PDF',
                focus: 'फोकस',
                startDate: 'शुरू होने की तिथि',
                duration: 'अवधि',
                liveCohort: 'लाइव कोहोर्ट',
                mentors: 'एक्सपर्ट मेंटोर्स',
                join: 'शामिल हों',
                students: 'छात्र',
                best: 'सर्वश्रेष्ठ से सीखें',
                bookingSuccess: 'स्पॉट सफलतापूर्वक बुक किया गया!',
                bookingSubtitle: 'हमारी टीम जल्द ही अगले चरणों और कोहोर्ट विवरण के साथ आपसे संपर्क करेगी।'
            },
            categories: {
                all: 'सभी प्रोग्राम',
                web: 'वेब डेवलपमेंट',
                backend: 'बैकएंड और सिस्टम',
                ai: 'AI और डेटा साइंस',
                cloud: 'क्लाउड और डेवऑप्स'
            },
            noResults: 'आपकी सर्च से मेल खाने वाला कोई इंटर्नशिप प्रोग्राम नहीं मिला।',
            results: 'परिणाम मिले',
            data: [
                {
                    id: 1,
                    slug: 'web-dev-live-internship',
                    title: 'वेब डेवलपमेंट इंडस्ट्रियल इंटर्नशिप',
                    description: 'एक लाइव इंटरैक्टिव कोहोर्ट में आधुनिक वेब डेवलपमेंट (MERN स्टैक) में महारत हासिल करें। वास्तविक दुनिया की परियोजनाओं पर काम करें और उद्योग के लिए तैयार हों।',
                    duration: '12 सप्ताह',
                    mentors: 'शीर्ष टेक फर्मों के सीनियर आर्किटेक्ट',
                    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2672',
                    curriculum: [
                        { module: 'इंडस्ट्रियल फ्रंटएंड महारत (React/Next.js)', focus: 'लाइव UI आर्किटेक्चर और स्टेट मैनेजमेंट' },
                        { module: 'इंडस्ट्रियल बैकएंड और स्केलेबिलिटी', focus: 'Node.js, माइक्रोसर्विसेज और लार्ज स्केल DB' },
                        { module: 'सिस्टम डिज़ाइन और रियल प्रोजेक्ट्स', focus: '1:1 इंडस्ट्री ग्रेड ऐप्स का निर्माण' },
                        { module: 'CI/CD और क्लाउड डिप्लॉयमेंट', focus: 'AWS/Vercel पर इंडस्ट्रियल ग्रेड डिप्लॉयमेंट' }
                    ],
                    benefits: [
                        '100% लाइव इंटरैक्टिव सत्र',
                        'इंडस्ट्री सर्टिफाइड एक्सपीरियंस लेटर',
                        'रियल-वर्ल्ड कैपस्टोन प्रोजेक्ट्स',
                        'सीनियर मेंटर्स तक सीधी पहुँच',
                        'जॉब प्लेसमेंट सहायता और रेफरल'
                    ]
                },
                {
                    id: 2,
                    slug: 'backend-live-training',
                    title: 'बैकएंड सिस्टम और स्केलेबिलिटी - लाइव महारत',
                    description: 'उच्च-प्रदर्शन बैकएंड आर्किटेक्चर में गहराई से उतरें। लाइव इंटरैक्टिव कोहोर्ट्स में Node.js इंटरनल, Redis कैशिंग और जटिल सिस्टम डिज़ाइन सीखें।',
                    duration: '8 सप्ताह',
                    mentors: 'बैकएंड टेक लीड्स',
                    students: '320+',
                    price: '₹4,999',
                    startDate: '20 मार्च, 2026',
                    category: 'backend',
                    tags: ['बैकएंड', 'सिस्टम डिज़ाइन'],
                    image: '/images/backend_systems_live_training.png',
                    curriculum: [
                        { module: 'एडवांस्ड Node.js आर्किटेक्चर', focus: 'इवेंट लूप और परफॉरमेंस ट्यूनिंग' },
                        { module: 'डिस्ट्रीब्यूटेड सिस्टम और माइक्रोसर्विसेज', focus: 'सर्विस कम्युनिकेशन और रेजिलिएंसी' },
                        { module: 'डेटाबेस ऑप्टिमाइज़ेशन (Postgres/Redis)', focus: 'क्वेरी ट्यूनिंग और कैशिंग रणनीतियाँ' }
                    ],
                    benefits: [
                        'विशेषज्ञों के साथ लाइव कोड समीक्षा',
                        'इंडस्ट्रियल बैकएंड प्रमाणन',
                        'सिस्टम डिज़ाइन महारत',
                        'मेंटर्स के साथ 24/7 स्लैक सपोर्ट'
                    ]
                },
                {
                    id: 3,
                    slug: 'ai-live-internship',
                    title: 'AI और डेटा साइंस इंडस्ट्रियल इंटर्नशिप',
                    description: 'वास्तविक उद्योग डेटासेट का उपयोग करके मशीन लर्निंग, एनएलपी और कंप्यूटर विजन पर व्यावहारिक लाइव प्रशिक्षण।',
                    duration: '10 सप्ताह',
                    mentors: 'डेटा वैज्ञानिक',
                    students: '280+',
                    price: '₹6,499',
                    startDate: '10 मार्च, 2026',
                    category: 'ai',
                    tags: ['AI/ML', 'डेटा साइंस'],
                    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2670',
                    curriculum: [
                        { module: 'AI/ML के लिए गणित', focus: 'रैखिक बीजगणित और सांख्यिकी' },
                        { module: 'डीप लर्निंग और न्यूरल नेटवर्क', focus: 'कंप्यूटर विजन और NLP पाइपलाइन' },
                        { module: 'प्रोडक्शन AI डिप्लॉयमेंट', focus: 'MLOps और मॉडल मॉनिटरिंग' }
                    ],
                    benefits: [
                        'प्रशिक्षण के लिए GPU कंप्यूट तक पहुँच',
                        'सहयोगात्मक डेटा प्रोजेक्ट्स',
                        'AI में उत्कृष्टता का प्रमाण पत्र',
                        'पीएचडी विशेषज्ञों द्वारा मेंटरशिप'
                    ]
                },
                {
                    id: 4,
                    slug: 'devops-live-training',
                    title: 'क्लाउड कंप्यूटिंग और डेवऑप्स लाइव बूटकैंप',
                    description: 'लाइव वातावरण में AWS, Docker और Kubernetes में महारत हासिल करें। औद्योगिक परिनियोजन रणनीतियाँ सीखें।',
                    duration: '10 सप्ताह',
                    mentors: 'क्लाउड विशेषज्ञ',
                    students: '390+',
                    price: '₹5,499',
                    startDate: '01 अप्रैल, 2026',
                    category: 'cloud',
                    tags: ['क्लाउड', 'डेवऑप्स'],
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672',
                    curriculum: [
                        { module: 'क्लाउड आर्किटेक्चर फाउंडेशन', focus: 'AWS/Azure कोर सर्विसेज' },
                        { module: 'कंटेनरीकरण और ऑर्केस्ट्रेशन', focus: 'Docker और Kubernetes महारत' },
                        { module: 'CI/CD पाइपलाइन और ऑटोमेशन', focus: 'Jenkins, GitHub Actions, Terraform' }
                    ],
                    benefits: [
                        'AWS/क्लाउड सैंडबॉक्स वातावरण',
                        'डेवऑप्स प्रमाणन तत्परता',
                        'इन्फ्रास्ट्रक्चर एज़ कोड (IaC) प्रोजेक्ट्स',
                        'क्लाउड माइग्रेशन पर विशेषज्ञ मार्गदर्शन'
                    ]
                }
            ],
            trending: 'ट्रेंडिंग:',
            popularSearches: ['MERN स्टैक', 'बैकएंड सिस्टम', 'AI और डेटा साइंस', 'डेवऑप्स', 'क्लाउड मास्टरी'],
            cta: {
                title: "रिकॉर्डेड वीडियो से समझौता न करें।",
                subtitle: 'हमारे लाइव सत्रों में शामिल हों और उद्योग के सर्वोत्तम दिमागों के साथ बातचीत करें। व्यक्तिगत ध्यान के लिए प्रति बैच सीमित सीटें।',
                button: 'कॉल बैक का अनुरोध करें'
            }
        },
        courses: {
            hero: {
                title: 'कोर्सेस एक्सप्लोर करें',
                subtitle: 'हमारे क्यूरेटेड कोर्सेस के साथ अपने कौशल को अपग्रेड करें। वेब डेवलपमेंट से लेकर डेटा साइंस तक, हमारे पास सभी के लिए कुछ न कुछ है।'
            },
            searchPlace: 'कोर्सेस खोजें...',
            filter: 'फिल्टर',
            all: 'सभी स्तर',
            noResults: 'आपकी सर्च से मेल खाने वाला कोई कोर्स नहीं मिला।',
            reset: 'फिल्टर हटाएँ',
            results: 'परिणाम मिले',
            trending: 'ट्रेंडिंग:',
            popularSearches: ['वेब डेवलपमेंट', 'रिएक्ट', 'पायथन', 'UI/UX डिज़ाइन', 'डेवऑप्स'],
            commonQuestions: 'सामान्य प्रश्न',
            levels: {
                all: 'सभी स्तर',
                beginner: 'शुरुआती',
                intermediate: 'मध्यवर्ती',
                advanced: 'उन्नत'
            },
            courseDetail: {
                curriculum: 'कोर्स पाठ्यक्रम',
                whatYouWillLearn: 'आप क्या सीखेंगे',
                lessons: 'पाठ',
                lastUpdated: 'पिछली बार अपडेट किया गया',
                thisMonth: 'इस महीने',
                freePreview: 'मुफ़्त पूर्वावलोकन',
                locked: 'लॉक किया गया',
                notFound: 'कोर्स नहीं मिला',
                backToCourses: 'कोर्सेस पर वापस जाएं',
                enrollWithPrice: 'अभी नामांकन करें - ',
                detail: {
                    roadmap: 'लाइव ट्रेनिंग रोडमैप',
                    whyProgram: 'यह प्रोग्राम क्यों?',
                    expertMentorship: 'विशेषज्ञ मेंटरशिप',
                    learnFromBest: 'सर्वश्रेष्ठ से सीखें',
                    chatMentor: 'मेंटर के साथ चैट करें',
                    enrollFor: 'नामांकन करें - ',
                    curriculumPdf: 'पाठ्यक्रम पीडीएफ',
                    liveCohort: 'लाइव कोहोर्ट',
                    expertMentors: 'विशेषज्ञ मेंटर',
                    joinStudents: '{count} छात्रों के साथ जुड़ें',
                    startDate: 'शुरू होने की तारीख',
                    notFound: 'इंटर्नशिप प्रोग्राम नहीं मिला',
                    backToInternships: 'इंटर्नशिप पर वापस जाएं'
                }
            },
            commonTags: {
                webDevelopment: 'वेब डेवलपमेंट',
                dataScience: 'डेटा साइंस',
                mobileDevelopment: 'मोबाइल डेवलपमेंट',
                frontend: 'फ्रंटएंड',
                backend: 'बैकएंड',
                fullstack: 'फुलस्टैक',
                devops: 'डेवऑप्स',
                cloud: 'क्लाउड',
                aiMl: 'एआई/एमएल'
            }
        },
        faqPage: {
            badge: 'सहायता केंद्र',
            title: 'एफएक्यू',
            subtitle: 'हमारे प्लेटफॉर्म और ट्रेनिंग के बारे में वह सब कुछ जो आपको जानना आवश्यक है।',
            searchPlace: 'अपना प्रश्न खोजें...',
            noResults: 'आपकी सर्च से मेल खाने वाला कोई प्रश्न नहीं मिला।',
            categories: {
                internships: 'लाइव इंटर्नशिप',
                enrollment: 'नामांकन और रिफंड',
                general: 'सामान्य शिक्षण'
            },
            cta: {
                title: 'अभी भी प्रश्न हैं?',
                subtitle: "वह उत्तर नहीं मिल रहा जो आप खोज रहे हैं? कृपया हमारी मित्रवत टीम के साथ चैट करें।",
                chat: 'विशेषज्ञों के साथ चैट करें',
                callback: 'कॉल बैक का अनुरोध करें'
            },
            faqs: [
                {
                    category: "लाइव इंटर्नशिप",
                    questions: [
                        { q: "क्या यह ट्रेनिंग वास्तव में लाइव है या रिकॉर्डेड सत्र है?", a: "हमारे इंडस्ट्रियल ट्रेनिंग प्रोग्राम्स में हर एक सत्र 100% लाइव और इंटरैक्टिव है। हम प्राथमिक शिक्षण सामग्री के रूप में रिकॉर्डेड वीडियो प्रदान नहीं करते हैं, क्योंकि हमारा मानना है कि वास्तविक शिक्षण रीयल-टाइम जुड़ाव में होता है।" },
                        { q: "क्या होगा यदि मैं लाइव सत्र मिस कर दूँ?", a: "हालांकि हम लाइव उपस्थिति को प्रोत्साहित करते हैं, सभी लाइव सत्र रिकॉर्ड किए जाते हैं और आपकी समीक्षा के लिए 24 घंटों के भीतर आपके डैशबोर्ड में उपलब्ध कराए जाते हैं। हालाँकि, ये कड़ाई से बैकअप उद्देश्यों के लिए हैं।" },
                        { q: "क्या मुझे इंडस्ट्रियल सर्टिफिकेट मिलेगा?", a: "हाँ, ट्रेनिंग और कैपस्टोन प्रोजेक्ट के सफल समापन पर, आपको CodeBakers Learning से इंडस्ट्रियल एक्सपीरियंस सर्टिफिकेट प्राप्त होगा।" }
                    ]
                },
                {
                    category: "नामांकन और रिफंड",
                    questions: [
                        { q: "रिफंड नीति क्या है?", a: "हम नामांकन की तारीख से 3 दिन की रिफंड अवधि प्रदान करते हैं। यदि आप पहले 3 दिनों के भीतर संतुष्ट नहीं हैं, तो आप पूर्ण रिफंड के पात्र हैं।" },
                        { q: "रिफंड प्रक्रिया में कितना समय लगता है?", a: "एक बार स्वीकृत होने के बाद रिफंड प्रसंस्करण में आमतौर पर आपके मूल भुगतान मोड में दिखने के लिए 7-14 कार्य दिवस लगते हैं।" },
                        { q: "क्या मैं प्रोग्राम्स के बीच स्विच कर सकता हूँ?", a: "हाँ, आप सीट उपलब्धता के अधीन, नामांकन के पहले सप्ताह के भीतर इंटर्नशिप कोहोर्ट या कोर्स के बीच स्विच करने का अनुरोध कर सकते हैं।" }
                    ]
                },
                {
                    category: "सामान्य शिक्षण",
                    questions: [
                        { q: "क्या मुझे सेल्फ-पेस्ड कोर्स का आजीवन एक्सेस मिलता है?", a: "हाँ, सभी सेल्फ-पेस्ड कोर्सेज आजीवन एक्सेस के साथ आते हैं, जिससे आप अपनी गति से सीख सकते हैं।" },
                        { q: "क्या कोई पूर्वपेक्षाएँ (prerequisites) हैं?", a: "पूर्वपेक्षाएँ प्रोग्राम के अनुसार अलग-अलग होती हैं। हमारे अधिकांश शुरुआती ट्रैक बिल्कुल बुनियादी बातों से शुरू होते हैं, जबकि उन्नत ट्रैक के लिए कुछ पूर्व ज्ञान की आवश्यकता हो सकती है।" }
                    ]
                }
            ]
        },
        termsPage: {
            title: 'नियम और शर्तें',
            subtitle: 'कृपया हमारी सेवा की शर्तों और रिफंड नीतियों को ध्यान से पढ़ें।',
            refundPolicy: 'रिफंड पॉलिसी',
            reflection: '3-दिन की रिफ्लेक्शन अवधि',
            reflectionDesc: 'हम नामांकन की तारीख से 3 दिन की रिफंड अवधि प्रदान करते हैं। यदि आप पहले 3 दिनों के भीतर संतुष्ट नहीं हैं, तो आप पूर्ण रिफंड के पात्र हैं।',
            processing: 'रिफंड प्रोसेसिंग समय',
            processingDesc: 'एक बार स्वीकृत होने के बाद, आमतौर पर आपके मूल भुगतान मोड में दिखने के लिए 7-14 कार्य दिवस लगते हैं।',
            generalTerms: 'सामान्य शर्तें',
            points: [
                'लाइव उपस्थिति: 100% उपस्थिति प्रोत्साहित की जाती है।',
                'प्रमाणन: सफल प्रोजेक्ट समापन पर जारी किया जाता है।',
                'बૌદ્ધિક संपदा: साझा की गई सामग्री CodeBakers की संपत्ति है।'
            ]
        },
        privacyPage: {
            title: 'प्राइवेसी पॉलिसी',
            sections: [
                { title: 'डेटा संग्रह', content: 'हम सेवाएं प्रदान करने के लिए नाम और ईमेल जैसी न्यूनतम जानकारी एकत्र करते हैं।' },
                { title: 'उपयोग', content: 'केवल निजीकरण और सहायता के लिए उपयोग किया जाता है। हम आपका डेटा नहीं बेचते हैं।' },
                { title: 'सुरक्षा', content: 'उद्योग-मानक सुरक्षा उपाय आपके डेटा की रक्षा करते हैं।' },
                { title: 'कुकीज़', content: 'लॉगिन और प्राथमिकताओं के लिए आवश्यक कुकीज़।' }
            ],
            lastUpdated: 'अंतिम अपडेट: फरवरी 2026'
        },
        aboutPage: {
            title: 'CodeBakers के बारे में',
            subtitle: 'हम डेवलपरों को उद्योग में सर्वोत्तम शिक्षण संसाधन और करियर टूल प्रदान करके सशक्त बनाने के मिशन पर हैं।',
            vision: 'हमारा विजन',
            visionDesc: 'CodeBakers Learning का जन्म एक सरल विचार से हुआ था: पेशेवर विकास को सुलभ और प्रभावी बनाना। हम कोडिंग सीखने और आपके सपनों की नौकरी पाने के बीच के अंतर को पाटते हैं।',
            stats: 'सक्रिय शिक्षार्थी',
            points: [
                'आधुनिक टेक स्टैक के लिए केंद्रित शिक्षण पथ।',
                'करियर विकास के लिए समुदाय-संचालित दृष्टिकोण।',
                'उद्योग-मानक रिज्यूमे बनाने के उपकरण।',
                'प्रमाणपत्र जो नियोक्ताओं के लिए महत्वपूर्ण हैं।'
            ]
        },
        joinTeam: {
            title: 'हमारी टीम का हिस्सा बनें',
            subtitle: 'हम डेवलपर शिक्षा के भविष्य के निर्माण में मदद करने के लिए उत्साही व्यक्तियों की तलाश कर रहे हैं।',
            desc: 'निर्माताओं, इंजीनियरों और शिक्षकों की एक टीम में शामिल हों जो दुनिया भर के हजारों छात्रों के जीवन में बदलाव लाने के लिए समर्पित हैं।',
            cta: 'करियर देखें',
            benefits: [
                'रिमोट-फर्स्ट कल्चर',
                'निरंतर सीखना',
                'आधुनिक टेक स्टैक',
                'प्रभावशाली कार्य'
            ]
        }
    },
    'bn-IN': {
        nav: {
            home: 'হোম',
            courses: 'কোর্স',
            internships: 'লাইভ ইন্টার্নশিপ',
            industrialTraining: 'ইন্ডাস্ট্রিয়াল ট্রেনিং',
            faq: 'প্রশ্নোত্তর',
            dashboard: 'ড্যাশবোর্ড',
            signIn: 'সাইন ইন',
            getStarted: 'শুরু করুন',
            signOut: 'সাইন আউট',
            greeting: 'নমস্কার',
        },
        hero: {
            badge: 'এখন ভারত 🇮🇳 এবং যুক্তরাজ্যে 🇬🇧 লাইভ',
            title: 'শিখুন। তৈরি করুন। এগিয়ে যান।',
            subtitle: 'ইন্টারঅ্যাক্টিভ কোর্সের সাথে কোডিং শিখুন এবং মিনিটের মধ্যে একটি জব-রেডি রিজুমে তৈরি করুন। আপনার ডেভেলपर ক্যারিয়ারের জন্য ওয়ান-স্টॉप প্ল্যাটফর্ম।',
            ctaPrimary: 'শুরু করুন',
            ctaSecondary: 'রিজুমে তৈরি করুন',
        },
        features: {
            title: 'সাফল্যের জন্য আপনার যা কিছু প্রয়োজন',
            subtitle: 'কোডিং শেখা থেকে শুরু করে আপনার স্বপ্নের চাকরি পাওয়া পর্যন্ত।',
        }
    },
    'mr-IN': {
        nav: {
            home: 'होम',
            courses: 'कोर्सेस',
            internships: 'लाइव्ह इंटर्नशिप',
            industrialTraining: 'इंडस्ट्रियल ट्रेनिंग',
            faq: 'प्रश्नोत्तरे',
            dashboard: 'डॅशबोर्ड',
            signIn: 'साइन इन',
            getStarted: 'सुरू करा',
            signOut: 'साइन आउट',
            greeting: 'नमस्कार',
        },
        hero: {
            badge: 'आता भारत 🇮🇳 आणि यूके 🇬🇧 मध्ये लाइव्ह',
            title: 'शिका. बनवा. प्रगती करा.',
            subtitle: 'इंटरएक्टिव्ह कोर्सेससह कोडिंग शिका आणि मोजक्या मिनिटांत नोकरीसाठी तयार रिझ्युमे बनवा. तुमच्या डेव्हलपर करिअरसाठी एकमेव प्लॅटफॉर्म.',
            ctaPrimary: 'सुरू करा',
            ctaSecondary: 'रिझ्युमे बनवा',
        },
        features: {
            title: 'यशासाठी तुम्हाला हवे ते सर्व',
            subtitle: 'कोडिंग शिकण्यापासून ते तुमच्या स्वप्नातील नोकरी मिळवण्यापर्यंत.',
        }
    },
    'ta-IN': {
        nav: {
            home: 'முகப்பு',
            courses: 'பாடநெறிகள்',
            resumeBuilder: 'ரெஸ்யூம் பில்டர்',
            templates: 'டெம்ப்ளேட்கள்',
            dashboard: 'டாஷ்போர்டு',
            signIn: 'உள்நுழைக',
            getStarted: 'தொடங்கவும்',
            faq: 'கேள்விகள்',
            signOut: 'வெளியேறு',
            greeting: 'வணக்கம்',
        },
        hero: {
            badge: 'இப்போது இந்தியா 🇮🇳 மற்றும் UK 🇬🇧 இல் நேரலையில்',
            title: 'கற்க. உருவாக்க. வளர.',
            subtitle: 'ஊடாடும் பாடநெறிகளுடன் கோடிங் கற்றுக்கொள்ளுங்கள் மற்றும் நிமிடங்களில் வேலைக்குத் தயாரான ரெஸ்யூமை உருவாக்குங்கள். உங்கள் டெவலப்பர் தொழிலுக்கான ஒரே தளம்.',
            ctaPrimary: 'தொடங்கவும்',
            ctaSecondary: 'ரெஸ்யூம் உருவாக்க',
        },
        features: {
            title: 'வெற்றி பெற உங்களுக்குத் தேவையான அனைத்தும்',
            subtitle: 'கோடிங் கற்க முதல் உங்கள் கனவு வேலையைப் பெறுவது வரை.',
        }
    },
    'te-IN': {
        nav: {
            home: 'హోమ్',
            courses: 'కోర్సులు',
            resumeBuilder: 'రెజ్యూమ్ బిల్డర్',
            templates: 'టెంప్లేట్లు',
            dashboard: 'డాష్‌బోర్డ్',
            signIn: 'సైన్ ఇన్',
            getStarted: 'ప్రారంభించండి',
            faq: 'ప్రశ్నలు',
            signOut: 'సైన్ అవుట్',
            greeting: 'నమస్కారం',
        },
        hero: {
            badge: 'ఇప్పుడు ఇండియా 🇮🇳 & UK 🇬🇧 లో లైవ్',
            title: 'నేర్చుకోండి. నిర్మించండి. ఎదగండి.',
            subtitle: 'ఇంటరాక్టివ్ కోర్సులతో కోడింగ్ నేర్చుకోండి మరియు నిమిషాల్లో జాబ్-రెడీ రెజ్యూమ్‌ని రూపొందించండి. మీ డెవలపర్ కెరీర్ కోసం ఆల్-ఇన్-వన్ ప్లాట్‌ఫాం.',
            ctaPrimary: 'ప్రారంభించండి',
            ctaSecondary: 'రెజ్యూమ్ రూపొందించండి',
        },
        features: {
            title: 'విజయం సాధించడానికి మీకు కావలసినవన్నీ',
            subtitle: 'కోడింగ్ నేర్చుకోవడం నుండి మీ కలల ఉద్యోగాన్ని పొందడం వరకు.',
        }
    },
    'gu-IN': {
        nav: {
            home: 'હોમ',
            templates: 'ટેમ્પલેટ્સ',
            dashboard: 'ડેશબોર્ડ',
            signIn: 'સાઇન ઇન',
            getStarted: 'શરૂ કરો',
            faq: 'પ્રશ્નોત્તરી',
            signOut: 'સાઇન આઉટ',
            greeting: 'નમસ્તે',
        },
        hero: {
            badge: 'હવે ભારત 🇮🇳 અને UK 🇬🇧 માં લાઈવ',
            title: 'શીખો. બનાવો. આગળ વધો.',
            subtitle: 'ઇન્ટરેક્ટિવ કોર્ષ સાથે કોડિંગ શીખો અને મિનિટોમાં જોબ-રેડી રીઝ્યુમ બનાવો. તમારા ડેવલપર કરિયર માટે એકમાત્ર પ્લેટફોર્મ.',
            ctaPrimary: 'શરૂ કરો',
            ctaSecondary: 'રીઝ્યુમ બનાવો',
        },
        features: {
            title: 'સફળતા માટે તમારે જે જોઈએ છે તે બધું',
            subtitle: 'કોડિંગ શીખવાથી લઈને તમારી સપનાની નોકરી મેળવવા સુધી.',
        }
    },
    'kn-IN': {
        nav: {
            home: 'ಮುಖಪುಟ',
            courses: 'ಕೋರ್ಸ್‌ಗಳು',
            resumeBuilder: 'ರೆಸ್ಯೂಮ್ ಬಿಲ್ಡರ್',
            templates: 'ಟೆಂಪ್ಲೇಟ್‌ಗಳು',
            dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
            signIn: 'ಸೈನ್ ಇನ್',
            getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
            faq: 'ಪ್ರಶ್ನೋತ್ತರ',
            signOut: 'ಸೈನ್ ಔಟ್',
            greeting: 'ನಮಸ್ಕಾರ',
        },
        hero: {
            badge: 'ಈಗ ಭಾರತ 🇮🇳 ಮತ್ತು ಯುಕೆ 🇬🇧 ನಲ್ಲಿ ಲೈವ್',
            title: 'ಕಲಿಯಿರಿ. ನಿರ್ಮಿಸಿ. ಬೆಳೆಯಿರಿ.',
            subtitle: 'ಸಂವಾದಾತ್ಮಕ ಕೋರ್ಸ್‌ಗಳೊಂದಿಗೆ ಕೋಡಿಂಗ್ ಕಲಿಯಿರಿ ಮತ್ತು ನಿಮಿಷಗಳಲ್ಲಿ ಉದ್ಯೋಗಕ್ಕೆ ಸಿದ್ಧವಾದ ರೆಸ್ಯೂಮ್ ಅನ್ನು ನಿರ್ಮಿಸಿ. ನಿಮ್ಮ ಡೆವಲಪರ್ ವೃತ್ತಿಜೀವನಕ್ಕಾಗಿ ಆಲ್ ಇನ್ ಒನ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್.',
            ctaPrimary: 'ಪ್ರಾರಂಭಿಸಿ',
            ctaSecondary: 'ರೆಸ್ಯೂಮ್ ನಿರ್ಮಿಸಿ',
        },
        features: {
            title: 'ಯಶಸ್ವಿಯಾಗಲು ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ',
            subtitle: 'ಕೋಡಿಂಗ್ ಕಲಿಯುವುದರಿಂದ ಹಿಡಿದು ನಿಮ್ಮ ಕನಸಿನ ಕೆಲಸವನ್ನು ಪಡೆಯುವವರೆಗೆ.',
        }
    },
    'ml-IN': {
        nav: {
            home: 'ഹോം',
            courses: 'കോഴ്സുകൾ',
            resumeBuilder: 'റെസ്യൂം ബിൽഡർ',
            templates: 'ടെംപ്ലേറ്റുകൾ',
            dashboard: 'ഡാഷ്ബോർഡ്',
            signIn: 'സൈൻ ഇൻ',
            getStarted: 'തുടങ്ങാം',
            faq: 'ചോദ്യങ്ങൾ',
            signOut: 'സൈൻ ഔട്ട്',
            greeting: 'നമസ്കാരം',
        },
        hero: {
            badge: 'ഇപ്പോൾ ഇന്ത്യയിലും 🇮🇳 യുകെയിലും 🇬🇧 ലൈവ്',
            title: 'പഠിക്കുക. നിർമ്മിക്കുക. വളരുക.',
            subtitle: 'ഇന്ററാക്ടീവ് കോഴ്സുകളിലൂടെ കോഡിംഗ് പഠിക്കൂ, മിനിറ്റുകൾക്കുള്ളിൽ ജോലിക്ക് തയ്യാറായ റെസ്യൂം തയ്യാറാക്കൂ. നിങ്ങളുടെ ഡെവലപ്പർ കരിയറിനുള്ള ഏക പ്ലാറ്റ്ഫോം.',
            ctaPrimary: 'തുടങ്ങാം',
            ctaSecondary: 'റെസ്യൂം നിർമ്മിക്കുക',
        },
        features: {
            title: 'വിജയിക്കാൻ നിങ്ങൾക്ക് വേണ്ടതെല്ലാം',
            subtitle: 'കോഡിംഗ് പഠിക്കുന്നത് മുതൽ നിങ്ങളുടെ സ്വപ്ന ജോലി നേടുന്നത് വരെ.',
        }
    },
    'pa-IN': {
        nav: {
            home: 'ਹੋਮ',
            courses: 'ਕੋਰਸ',
            resumeBuilder: 'ਰਿਜ਼ਿਊਮ ਬਿਲਡਰ',
            templates: 'ਟੈਂਪਲੇਟਸ',
            dashboard: 'ਡੈਸ਼ਬੋਰਡ',
            signIn: 'ਸਾਈਨ ਇਨ',
            getStarted: 'ਸ਼ੁਰੂ ਕਰੋ',
            faq: 'ਸਵਾਲ-ਜਵਾਬ',
            signOut: 'ਸਾਈਨ ਆਉਟ',
            greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
        },
        hero: {
            badge: 'ਹੁਣ ਭਾਰਤ 🇮🇳 ਅਤੇ ਯੂਕੇ 🇬🇧 ਵਿੱਚ ਲਾਈਵ',
            title: 'ਸਿੱਖੋ. ਬਣਾਓ. ਅੱਗੇ ਵਧੋ.',
            subtitle: 'ਇੰਟਰਐਕਟਿਵ ਕੋਰਸਾਂ ਨਾਲ ਕੋਡਿੰਗ ਸਿੱਖੋ ਅਤੇ ਮਿੰਟਾਂ ਵਿੱਚ ਨੌਕਰੀ ਲਈ ਤਿਆਰ ਰਿਜ਼ਿਊਮ ਬਣਾਓ। ਤੁਹਾਡੇ ਡਿਵੈਲਪਰ ਕੈਰੀਅਰ ਲਈ ਇੱਕੋ-ਇੱਕ ਪਲੇਟਫਾਰਮ।',
            ctaPrimary: 'ਸ਼ੁਰੂ ਕਰੋ',
            ctaSecondary: 'ਰਿਜ਼ਿਊਮ ਬਣਾਓ',
        },
        features: {
            title: 'ਸਫਲਤਾ ਲਈ ਤੁਹਾਨੂੰ ਸਭ ਕੁਝ ਚਾਹੀਦਾ ਹੈ',
            subtitle: 'ਕੋਡਿੰਗ ਸਿੱਖਣ ਤੋਂ ਲੈ ਕੇ ਆਪਣੇ ਸੁਪਨਿਆਂ ਦੀ ਨੌਕਰੀ ਪ੍ਰਾਪਤ ਕਰਨ ਤੱਕ।',
        }
    },
    'fr-FR': {
        nav: {
            home: 'Accueil',
            courses: 'Cours',
            resumeBuilder: 'Générateur de CV',
            templates: 'Modèles',
            dashboard: 'Tableau de bord',
            signIn: 'Se connecter',
            getStarted: 'Commencer',
            faq: 'Questions fréquentes',
            signOut: 'Déconnexion',
            greeting: 'Salut',
        },
        hero: {
            badge: 'Maintenant disponible en Inde 🇮🇳 & UK 🇬🇧',
            title: 'Apprendre. Créer. Grandir.',
            subtitle: 'Maîtrisez le code avec des cours interactifs et créez un CV professionnel en quelques minutes. La plateforme tout-en-un pour votre carrière de développeur.',
            ctaPrimary: 'Commencer',
            ctaSecondary: 'Créer un CV',
        },
        features: {
            title: 'Tout ce dont vous avez besoin pour réussir',
            subtitle: 'De l\'apprentissage du code à l\'obtention du job de vos rêves.',
        }
    },
    'es-ES': {
        nav: {
            home: 'Inicio',
            courses: 'Cursos',
            resumeBuilder: 'Creador de CV',
            templates: 'Plantillas',
            dashboard: 'Panel',
            signIn: 'Iniciar sesión',
            getStarted: 'Empezar',
            faq: 'Preguntas frecuentes',
            signOut: 'Cerrar sesión',
            greeting: 'Hola',
        },
        hero: {
            badge: 'Ahora en vivo en India 🇮🇳 y Reino Unido 🇬🇧',
            title: 'Aprende. Construye. Crece.',
            subtitle: 'Domina la programación con cursos interactivos y crea un CV listo para el trabajo en minutos. La plataforma todo en uno para tu carrera de desarrollador.',
            ctaPrimary: 'Empezar',
            ctaSecondary: 'Crear CV',
        },
        features: {
            title: 'Todo lo que necesitas para tener éxito',
            subtitle: 'Desde aprender a programar hasta conseguir el trabajo de tus sueños.',
        }
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en-IN');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        const storedLang = localStorage.getItem('codebakers_lang');
        if (storedLang && translations[storedLang]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguage(storedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        if (translations[lang]) {
            setLanguage(lang);
            localStorage.setItem('codebakers_lang', lang);
        }
    };

    const t = (key) => {
        const keys = key.split('.');

        // Try current language
        let value = translations[language];
        for (const k of keys) {
            value = value?.[k];
        }

        // Fallback to English if missing
        if (value === undefined && language !== 'en-IN') {
            value = translations['en-IN'];
            for (const k of keys) {
                value = value?.[k];
            }
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
