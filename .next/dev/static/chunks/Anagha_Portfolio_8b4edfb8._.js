(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Anagha_Portfolio/src/data/portfolio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutData",
    ()=>aboutData,
    "certificationsData",
    ()=>certificationsData,
    "contactData",
    ()=>contactData,
    "educationData",
    ()=>educationData,
    "experienceData",
    ()=>experienceData,
    "heroData",
    ()=>heroData,
    "projectsData",
    ()=>projectsData,
    "skillsData",
    ()=>skillsData
]);
const heroData = {
    name: "Anagha K T P",
    title: "AI & Machine Learning Engineer",
    tagline: "Building intelligent systems with data and code. 🤖",
    avatar: "/hero-avatar.png",
    floatingBadges: [
        {
            text: "<Hello World />",
            position: "-top-4 -right-8",
            rotate: "rotate-12",
            color: "text-primary"
        },
        {
            text: "Bug Hunter!",
            position: "bottom-0 -left-12",
            rotate: "-rotate-12",
            color: "text-accent-pink"
        }
    ]
};
const aboutData = {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoyajx4hfeInTTyc5zhb8SeXlg7JZdkK4yQ8Y9iTEzuyGYGw7EUDNFTHrVFHC__yO7XASrCUHZOLBKzlqaN4VOnm4NwLYQzABrJk4c-Ioiq4bSgApP034wFh1zvmhpA1BA-rHLQANCdpu6lZ_h50Qgb1GDt3ARLIR5a-YiXwjj_w8ijTay3vvevQpr9R-lOf71CXnG3cOwJVDLvx9d9qFvdXUBCTYBYsJmo7D_f4WwGdaTVAhBOLydAu3b8T-fbH7_9jjnccV3zXWZ",
    description: "AI & ML engineering student with hands-on experience in machine learning, data analysis, and full-stack development. Skilled in Python, MERN stack, data visualization, and model development. Active contributor to open-source communities (GSSoC, Hacktoberfest). Experienced in applying AI to real-world use cases including healthcare, cybersecurity, and telecom analytics.",
    location: "Payyanur, Kerala, India",
    interest: "AI, ML & Data Science",
    polaroidText: "Exploring AI frontiers..."
};
const experienceData = [
    {
        title: "Data Analytics Intern",
        company: "Vodafone Idea Foundation (Virtual)",
        period: "Sept 2025 – Nov 2025",
        points: [
            "Worked with LLMs and conversational AI pipelines",
            "Analyzed telecom datasets to improve customer experience",
            "Applied data analytics techniques for insights and optimization"
        ],
        color: "bg-accent-pink"
    },
    {
        title: "AI/ML & Front-End Intern",
        company: "Edunet Foundation (IBM SkillBuild)",
        period: "Jun 2025 – Aug 2025",
        points: [
            "Built ML models using Python and Pandas",
            "Developed responsive UI using React and CSS",
            "Integrated AI logic with frontend workflows"
        ],
        color: "bg-accent-yellow"
    },
    {
        title: "AI Intern",
        company: "Codec Technologies (Virtual)",
        period: "Apr 2025 – May 2025",
        points: [
            "Assisted in AI model development",
            "Worked with TensorFlow and research documentation",
            "Contributed to experimental ML pipelines"
        ],
        color: "bg-accent-mint"
    }
];
const educationData = [
    {
        title: "B.E. in Artificial Intelligence & Machine Learning",
        institution: "Srinivas Institute of Technology, Mangalore",
        year: "2022 – 2026",
        color: "bg-accent-lavender"
    },
    {
        title: "Higher Secondary – Bio Science",
        institution: "SSGHSS Payyanur",
        year: "2020 – 2022 | 90%",
        color: "bg-primary"
    },
    {
        title: "High School",
        institution: "P.E.S. Vidyalaya, Payyanur",
        year: "2019 – 2020 | 81%",
        color: "bg-accent-pink"
    }
];
const certificationsData = [
    "Machine Learning with Python – IBM",
    "TCS iON Career Edge",
    "Google Cloud – Cloud Engineer Track",
    "Artificial Intelligence – Pearson",
    "Cybersecurity – Zscaler",
    "Neo4j Certified Professional"
];
const skillsData = [
    {
        title: "Languages",
        skills: [
            "Python",
            "Java",
            "C",
            "Flutter",
            "PHP"
        ],
        color: "bg-accent-mint",
        rotate: "rotate-2"
    },
    {
        title: "Frameworks & Libs",
        skills: [
            "Django",
            "Flask",
            "React",
            "Node.js",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "TensorFlow"
        ],
        color: "bg-accent-pink",
        rotate: "-rotate-1"
    },
    {
        title: "Data & Analytics",
        skills: [
            "Power BI",
            "Tableau",
            "Excel",
            "Matplotlib",
            "Seaborn"
        ],
        color: "bg-accent-yellow",
        rotate: "rotate-3"
    },
    {
        title: "Tools & Platforms",
        skills: [
            "Git",
            "VS Code",
            "Jupyter",
            "Anaconda"
        ],
        color: "bg-accent-lavender",
        rotate: "-rotate-2"
    },
    {
        title: "Databases",
        skills: [
            "SQL",
            "MongoDB"
        ],
        color: "bg-primary/30",
        rotate: "rotate-1"
    }
];
const projectsData = [
    {
        title: "PashuSwasthya",
        description: "AI-based mobile app for offline cattle disease detection with multilingual voice inputs.",
        tags: [
            "TensorFlow Lite",
            "Python",
            "NLP"
        ],
        color: "bg-accent-mint",
        image: "/projects/pashu.png"
    },
    {
        title: "Intrusion Detection System",
        description: "ML-based network traffic classification and real-time intrusion detection dashboard.",
        tags: [
            "Flask",
            "Scikit-learn",
            "Python"
        ],
        color: "bg-accent-pink",
        image: "/projects/intrusion.png"
    },
    {
        title: "Customer Churn Prediction",
        description: "Supervised ML models for predicting customer churn with extensive feature engineering.",
        tags: [
            "Python",
            "Scikit-learn",
            "Data Science"
        ],
        color: "bg-accent-yellow",
        image: "/projects/churn.png"
    },
    {
        title: "Bike Sharing Demand",
        description: "Forecasting demand using temporal and weather features analysis.",
        tags: [
            "Python",
            "Jupyter",
            "Analytics"
        ],
        color: "bg-accent-lavender",
        image: "/projects/bike.png"
    },
    {
        title: "Feature Extraction Module",
        description: "Computer vision module to extract meaningful features from raw data using OpenCV.",
        tags: [
            "OpenCV",
            "NumPy",
            "CV"
        ],
        color: "bg-primary/30",
        image: "/projects/vision.png"
    }
];
const contactData = {
    email: "anaghaktp@gmail.com",
    github: "https://github.com/ANAGHAKTP",
    linkedin: "https://linkedin.com/in/anaghaktp",
    socials: [
        {
            platform: "GitHub",
            url: "https://github.com/ANAGHAKTP",
            icon: "github"
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/anaghaktp/",
            icon: "linkedin"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Anagha_Portfolio/src/components/Skills.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Anagha_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Anagha_Portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Anagha_Portfolio/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Anagha_Portfolio/src/data/portfolio.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Skills() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "d3e2d019e482086e133e745c5a09122e84c50552620a951e2efea94b2cd98e80") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d3e2d019e482086e133e745c5a09122e84c50552620a951e2efea94b2cd98e80";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 text-slate-200 dark:text-slate-800 transform -rotate-12 select-none pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "material-icons text-9xl",
                children: "auto_fix_high"
            }, void 0, false, {
                fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                lineNumber: 15,
                columnNumber: 137
            }, this)
        }, void 0, false, {
            fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-6xl font-playful font-bold text-center mb-20 relative z-10",
            children: [
                "My ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-block transform -rotate-2 bg-slate-900 text-white px-4 py-1 skew-x-[-10deg]",
                    children: "Tech"
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                    lineNumber: 22,
                    columnNumber: 93
                }, this),
                " Toolkit"
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-10",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillsData"].map(_SkillsSkillsDataMap)
        }, void 0, false, {
            fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "skills",
            className: "jsx-d367ff2da8cf789f" + " " + "py-32 px-4 bg-slate-50 dark:bg-slate-900/20 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-d367ff2da8cf789f" + " " + "max-w-6xl mx-auto relative",
                    children: [
                        t0,
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d367ff2da8cf789f" + " " + "mt-24 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-d367ff2da8cf789f" + " " + "font-handwriting text-3xl text-slate-500 inline-block relative",
                                children: [
                                    "...constantly upgrading!",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-d367ff2da8cf789f" + " " + "absolute -right-8 -top-8 text-5xl animate-bounce",
                                        children: "🚀"
                                    }, void 0, false, {
                                        fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                                        lineNumber: 36,
                                        columnNumber: 296
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                                lineNumber: 36,
                                columnNumber: 194
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                            lineNumber: 36,
                            columnNumber: 159
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                    lineNumber: 36,
                    columnNumber: 103
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "d367ff2da8cf789f",
                    children: ".ease-spring.jsx-d367ff2da8cf789f{transition-timing-function:cubic-bezier(.34,1.56,.64,1)}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = Skills;
function _SkillsSkillsDataMap(category, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative group ${category.rotate} hover:z-20 hover:scale-105 transition-all duration-300 ease-spring`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm transform rotate-1 shadow-sm z-10"
            }, void 0, false, {
                fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                lineNumber: 44,
                columnNumber: 142
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-6 rounded-2xl ${category.color} border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] min-w-[280px] max-w-xs`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl font-handwriting font-bold mb-6 text-center border-b-2 border-slate-900/20 pb-2",
                        children: category.title
                    }, void 0, false, {
                        fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                        lineNumber: 44,
                        columnNumber: 419
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 justify-center",
                        children: category.skills.map(_SkillsSkillsDataMapCategorySkillsMap)
                    }, void 0, false, {
                        fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                        lineNumber: 44,
                        columnNumber: 545
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
                lineNumber: 44,
                columnNumber: 275
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
function _SkillsSkillsDataMapCategorySkillsMap(skill, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-block bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full text-base font-playful font-bold border-2 border-slate-900 shadow-sm transform hover:-translate-y-1 transition-transform cursor-default",
        children: skill
    }, idx, false, {
        fileName: "[project]/Anagha_Portfolio/src/components/Skills.jsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Anagha_Portfolio/src/components/Contact.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Anagha_Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Anagha_Portfolio/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Anagha_Portfolio/src/data/portfolio.js [app-client] (ecmascript)");
"use client";
;
;
;
function Contact() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "c5ebf32f79f920d9f0a930a7e5810a1d7577fa04db5540b7880ab47da140834e") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c5ebf32f79f920d9f0a930a7e5810a1d7577fa04db5540b7880ab47da140834e";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-6xl font-playful font-bold mb-8",
            children: [
                "Say ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-primary italic",
                    children: "Hello!"
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 16,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl mb-12 font-handwriting",
            children: "Let's build something beautiful together. Reach out for collabs or just a chat!"
        }, void 0, false, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "font-playful text-2xl font-bold mb-4",
            children: "Contact Info"
        }, void 0, false, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-800 p-6 rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transform -rotate-2",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 text-lg font-bold mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-icons text-accent-pink bg-slate-900 text-white p-2 rounded-full text-sm",
                            children: "email"
                        }, void 0, false, {
                            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                            lineNumber: 33,
                            columnNumber: 226
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactData"].email}`,
                            className: "hover:text-primary transition-colors underline decoration-wavy decoration-accent-yellow",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactData"].email
                        }, void 0, false, {
                            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                            lineNumber: 33,
                            columnNumber: 337
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 33,
                    columnNumber: 162
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-handwriting text-slate-500",
                    children: '"I check my email like I check my console logs... constantly."'
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 33,
                    columnNumber: 506
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-left space-y-8",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$src$2f$data$2f$portfolio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactData"].socials.map(_ContactContactDataSocialsMap)
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 40,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-accent-yellow/50 backdrop-blur-sm border-2 border-slate-900 transform -rotate-1"
        }, void 0, false, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block font-playful font-bold mb-1 text-lg",
                    children: "Name"
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 54,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "entry.2005620554",
                    className: "w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 focus:outline-none focus:border-primary transition-colors font-handwriting text-xl",
                    placeholder: "Your Name",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 54,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block font-playful font-bold mb-1 text-lg",
                    children: "Email"
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 61,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    name: "entry.1045781291",
                    className: "w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 focus:outline-none focus:border-primary transition-colors font-handwriting text-xl",
                    placeholder: "your@email.com",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 61,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block font-playful font-bold mb-1 text-lg",
                    children: "Message"
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 68,
                    columnNumber: 32
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    rows: "4",
                    name: "entry.839337160",
                    className: "w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 focus:outline-none focus:border-primary transition-colors font-handwriting text-xl",
                    placeholder: "Write something nice...",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 68,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "bg-white dark:bg-slate-800 p-8 border-2 border-slate-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] text-left relative",
                    action: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe6Dmwliivy3_aCsUyd1y-wgYwoP9E5Pyyyl3PuP8ATGfSoQw/formResponse",
                    method: "POST",
                    target: "_blank",
                    children: [
                        t5,
                        t6,
                        t7,
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-primary text-white font-bold font-playful text-xl py-3 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2",
                            children: [
                                "Send Message ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-icons text-sm",
                                    children: "send"
                                }, void 0, false, {
                                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                                    lineNumber: 75,
                                    columnNumber: 663
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                            lineNumber: 75,
                            columnNumber: 394
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 75,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 px-4 text-center",
            id: "contact",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto relative",
                children: [
                    t0,
                    t1,
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative inline-block mt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-4xl font-handwriting transform -rotate-2",
                                children: "Thanks for visiting!"
                            }, void 0, false, {
                                fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                                lineNumber: 82,
                                columnNumber: 169
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-2 left-0 w-full h-1 bg-accent-pink rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                                lineNumber: 82,
                                columnNumber: 256
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                        lineNumber: 82,
                        columnNumber: 124
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                lineNumber: 82,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
            lineNumber: 82,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
}
_c = Contact;
function _ContactContactDataSocialsMap(social, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: "w-14 h-14 bg-white dark:bg-slate-800 flex items-center justify-center rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-1 hover:shadow-none transition-all group",
        href: social.url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": social.platform,
        children: [
            social.platform === "GitHub" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-8 h-8 group-hover:text-accent-mint transition-colors",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 90,
                    columnNumber: 499
                }, this)
            }, void 0, false, {
                fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                lineNumber: 90,
                columnNumber: 368
            }, this),
            social.platform === "LinkedIn" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-7 h-7 group-hover:text-primary transition-colors",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                }, void 0, false, {
                    fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                    lineNumber: 90,
                    columnNumber: 1439
                }, this)
            }, void 0, false, {
                fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
                lineNumber: 90,
                columnNumber: 1312
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/Anagha_Portfolio/src/components/Contact.jsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Anagha_Portfolio/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Anagha_Portfolio/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Anagha_Portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/Anagha_Portfolio/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/Anagha_Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$Anagha_Portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/Anagha_Portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Anagha_Portfolio/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
]);

//# sourceMappingURL=Anagha_Portfolio_8b4edfb8._.js.map