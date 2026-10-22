import React, { useState, useEffect } from 'react';
import { FiDatabase, FiShield, FiFileText, FiCheckCircle, FiBarChart2, FiUsers, FiChevronRight, FiChevronLeft, FiActivity } from 'react-icons/fi';
import MoleculeBackground from '../shared/MoleculeBackground';
import Image1 from "../../../public/assets/Whatwedoimage1.png";
import Image2 from "../../../public/assets/Whatwedoimage2.png";
import Image3 from "../../../public/assets/Whatwedoimage3.png";

const profileCards = [
    {
        number: "01",
        title: "Drug substance",
        description: "Structure, stereochemistry, BCS class, solubility, pKa, LogP, and polymorphic form."
    },
    {
        number: "02",
        title: "Process & controls",
        description: "Synthetic route, in-process controls, specifications, known impurities and genotoxicity data."
    },
    {
        number: "03",
        title: "Drug product",
        description: "Excipients, dissolution method, presentation, packaging, storage and shelf life."
    },
    {
        number: "04",
        title: "Regulatory status",
        description: "Approvals by region, special designations, patents, NCE exclusivity and loss-of-exclusivity dates."
    },
    {
        number: "05",
        title: "Generics & BE",
        description: "ANDAs and DMF landscape, product-specific guidance, bioequivalence status and dissolution database extract."
    },
    {
        number: "06",
        title: "Clinical & PK",
        description: "Pivotal trials, half-life, metabolism, food effect and drug interactions."
    }
];

const WhatWeDo: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [Image1, Image2, Image3];

    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 10000);
        return () => clearInterval(timer);
    }, []);

    // Content for the dynamic strip based on the slide
    const stripContent = [
        // Slide 1 Content (4 items)
        [
            {
                icon: <FiActivity className="w-8 h-8" />,
                title: "Data-Driven Platform",
                description: "A platform that accelerates and de-risks drug development."
            },
            {
                icon: <FiDatabase className="w-8 h-8" />,
                title: "Data as a Service",
                description: "Comprehensive, structured intelligence on development, manufacturing, and regulatory history."
            },
            {
                icon: <FiCheckCircle className="w-8 h-8" />,
                title: "Data Validation",
                description: "Rigorous validation and multi-layer quality checks for accuracy and regulatory relevance."
            },
            {
                icon: <FiBarChart2 className="w-8 h-8" />,
                title: "Transformative Intel",
                description: "Empowering innovation through enriched data, advanced analytics, and expert insights."
            }
        ],
        // Slide 2 Content (3 items)
        [
            {
                icon: <FiDatabase className="w-8 h-8" />,
                title: "Enriched Data",
                description: "Comprehensive data for all functions to use the same information."
            },
            {
                icon: <FiUsers className="w-8 h-8" />,
                title: "Expert Insights",
                description: "Benefit from dedicated experts."
            },
            {
                icon: <FiFileText className="w-8 h-8" />,
                title: "Bioequivalence",
                description: "Summarize available product specific guidance on BE studies."
            }
        ],
        // Slide 3 Content (Generic drug development pipeline - 4 items, moved from slide 2)
        [
            {
                icon: <FiActivity className="w-8 h-8" />,
                title: "API Sourcing",
                description: "Qualified active ingredient suppliers with comprehensive vendor and impurity history."
            },
            {
                icon: <FiFileText className="w-8 h-8" />,
                title: "Formulation Development",
                description: "Matches reference drug release profiles using historical formulation and CMC intelligence."
            },
            {
                icon: <FiBarChart2 className="w-8 h-8" />,
                title: "Bioequivalence Testing",
                description: "Flags relevant bioequivalence precedents to confirm absorption matches the original drug."
            },
            {
                icon: <FiShield className="w-8 h-8" />,
                title: "Regulatory Approval",
                description: "Streamlines ANDA review, market authorization, and approval history tracking."
            }
        ]
    ];

    return (
        <div className="min-h-screen bg-page pt-24 pb-24 font-sans overflow-x-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden opacity-40 pointer-events-none">
                <div className="absolute -left-[10%] top-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-primary-light to-transparent blur-3xl mix-blend-multiply"></div>
                <div className="absolute -right-[10%] bottom-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-l from-primary-light to-transparent blur-3xl mix-blend-multiply"></div>
            </div>
            <MoleculeBackground />

            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 mt-2 relative z-10">
                
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
                    {/* Left content */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-6 bg-primary-light px-3 py-1 rounded-full border border-primary-light">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Our Services
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-extrabold text-main font-display mb-6 relative inline-block">
                            What we do
                            <div className="absolute -bottom-2 left-0 w-2/3 h-1.5 bg-primary rounded-full"></div>
                        </h1>
                        
                        <h2 className="text-xl md:text-2xl font-bold text-section font-display mb-4 mt-8 leading-snug">
                            Everything about an approved drugs chemistry manufacturing and regulatory pathway in one report
                        </h2>
                        
                        <p className="text-base sm:text-lg text-body leading-relaxed max-w-lg">
                            Structure drug profiles covering deeper insight about drug substance, drug product, approval history, compiled from FDA labels, the orange books, and public filings with every data point sourced.
                        </p>
                    </div>

                    {/* Right Carousel */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-border-main bg-white p-2 lg:p-4" style={{ aspectRatio: '16/9', minHeight: '350px' }}>
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Service visualization ${index + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex justify-center items-center gap-4 mt-6">
                            <button onClick={prevSlide} className="p-2 text-secondary hover:text-main transition-colors bg-white rounded-full shadow-sm border border-border-main hover:shadow">
                                <FiChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 w-8 bg-primary rounded-full"></div>
                                <span className="text-sm font-medium text-secondary px-2 font-display">
                                    {currentSlide + 1} of {images.length}
                                </span>
                            </div>

                            <button onClick={nextSlide} className="p-2 text-secondary hover:text-main transition-colors bg-white rounded-full shadow-sm border border-border-main hover:shadow">
                                <FiChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dynamic Features Strip */}
                <div className="mb-16 bg-primary-light rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-border-main transition-all duration-500 ease-in-out">
                    <div className={`grid grid-cols-1 md:grid-cols-2 ${stripContent[currentSlide].length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-8 text-left font-sans`}>
                        {stripContent[currentSlide].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-start gap-4">
                                <div className="bg-primary text-white p-3 rounded-full flex-shrink-0 shadow-md flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-section font-display mb-2 text-lg">{item.title}</h3>
                                    <p className="text-body text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What's in a profile Section */}
                <div className="mb-12">
                    <div className="max-w-3xl mb-8">
                        <div className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase mb-3 bg-primary-light px-3 py-1 rounded-full border border-primary-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            What's in a profile
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-main font-display tracking-tight leading-tight">
                            The data your teams normally piece together from a dozen sources
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                        {profileCards.map((card, idx) => (
                            <div 
                                key={idx}
                                className="bg-white rounded-2xl border border-border-main p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-start group"
                            >
                                <span className="text-xs font-mono font-bold text-primary mb-2">
                                    {card.number}
                                </span>
                                <h3 className="text-lg font-bold text-main font-display mb-2 group-hover:text-primary transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-body text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhatWeDo;