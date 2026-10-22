import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  FiChevronDown,
  FiChevronUp,
  FiActivity,
  FiAlertCircle,
  FiThermometer,
  FiPackage,
  FiDroplet,
  FiShield,
  FiClock,
  FiFileText,
  FiCheckSquare,
  FiBarChart2,
  FiMap,
  FiAlertTriangle,
  FiSettings,
  FiArrowRight,
  FiSearch
} from 'react-icons/fi';
import MoleculeBackground from '../shared/MoleculeBackground';

interface CardItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
  colSpan?: string;
}

interface DisciplineSection {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  gridClass: string;
  cards: CardItem[];
}

const disciplineSections: DisciplineSection[] = [
  {
    id: 'drug-substance',
    number: '01 / 04',
    title: 'Drug substance & impurities',
    gridClass: 'grid-cols-1 md:grid-cols-2',
    cards: [
      {
        title: 'API / drug substance',
        description: 'Structure, stereochemistry, molecular weight, BCS class, solubility, pKa, LogP, polymorphic form and synthetic route outline.',
        icon: FiActivity,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
      {
        title: 'Impurities & genotoxicity',
        description: 'Publicly reported impurities and reference standards, genotoxicity and carcinogenicity findings, and nitrosamine assessment status.',
        icon: FiAlertCircle,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
      {
        title: 'Specifications & residual solvents',
        description: 'Drug substance test panel with methods: identity, assay, related substances, water, residual solvents and microbial limits.',
        icon: FiThermometer,
        iconColor: 'text-orange-600',
        iconBg: 'bg-orange-50',
        colSpan: 'md:col-span-2',
      },
    ],
  },
  {
    id: 'drug-product',
    number: '02 / 04',
    title: 'Drug product & controls',
    gridClass: 'grid-cols-1 md:grid-cols-2',
    cards: [
      {
        title: 'Formulation & presentation',
        description: 'Dosage form, strengths, excipients and coating, tablet size, color and imprint, packaging and NDC codes.',
        icon: FiPackage,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-50',
      },
      {
        title: 'Dissolution',
        description: 'Apparatus, speed, medium, temperature and acceptance criteria, plus FDA dissolution database status.',
        icon: FiDroplet,
        iconColor: 'text-cyan-600',
        iconBg: 'bg-cyan-50',
      },
      {
        title: 'Stability & container closure',
        description: 'Approved shelf life, storage and excursion conditions, container closure system and moisture protection.',
        icon: FiShield,
        iconColor: 'text-teal-600',
        iconBg: 'bg-teal-50',
        colSpan: 'md:col-span-2',
      },
    ],
  },
  {
    id: 'regulatory-market',
    number: '03 / 04',
    title: 'Regulatory & market',
    gridClass: 'grid-cols-1 md:grid-cols-3',
    cards: [
      {
        title: 'Regulatory history',
        description: 'Approvals by region, submission pathway and special designations.',
        icon: FiClock,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
      },
      {
        title: 'Patents & exclusivity',
        description: 'Orange Book patents, exclusivity notices and loss of exclusivity timing.',
        icon: FiFileText,
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
      },
      {
        title: 'Generics & BE',
        description: 'ANDAs and DMF landscape, product-specific guidance and bioequivalence status.',
        icon: FiCheckSquare,
        iconColor: 'text-sky-600',
        iconBg: 'bg-sky-50',
      },
      {
        title: 'Clinical & PK',
        description: 'Bioavailability, half-life, metabolism, food effect and interactions.',
        icon: FiBarChart2,
        iconColor: 'text-pink-600',
        iconBg: 'bg-pink-50',
        colSpan: 'md:col-span-3',
      },
    ],
  },
  {
    id: 'advisory-services',
    number: '04 / 04',
    title: 'Advisory services',
    subtitle: 'When you need more than the public record — our CMC experts build on the profile data to answer program-specific questions.',
    gridClass: 'grid-cols-1 md:grid-cols-3',
    cards: [
      {
        title: 'CMC strategy & lifecycle planning',
        description: 'Development and regulatory strategy, informed by how comparable products were approved.',
        icon: FiMap,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
      {
        title: 'Nitrosamine risk assessment',
        description: 'Risk assessment, method development and mitigation planning.',
        icon: FiAlertTriangle,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
      },
      {
        title: 'Analytical & method support',
        description: 'Dissolution, residual solvent and impurity method development and validation.',
        icon: FiSettings,
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
      },
    ],
  },
];

const AreasServed: React.FC = () => {
  const navigate = useNavigate();

  // Accordion state: by default first section is open, others collapsed
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'drug-substance': true,
    'drug-product': false,
    'regulatory-market': false,
    'advisory-services': false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-page pt-24 pb-16 font-sans overflow-x-hidden relative">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none -z-10">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-primary-light to-transparent blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-l from-primary-light to-transparent blur-3xl mix-blend-multiply"></div>
      </div>
      <MoleculeBackground />

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 pt-0 pb-12">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-6 bg-primary-light px-3 py-1 rounded-full border border-primary-light">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Our Expertise
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-main font-display mb-6">
            Areas <span className="text-primary">Served</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center w-full max-w-[200px] mx-auto mb-10">
            <div className="h-px bg-border-main flex-grow"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-primary mx-4"></div>
            <div className="h-px bg-border-main flex-grow"></div>
          </div>
        </div>

        {/* Below 2-Column Section (Left and Right with identical styling) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Every discipline your drug program touches, covered in one profile
            </p>
          </div>
          <div>
            <p className="text-base sm:text-lg text-body leading-relaxed">
              Each cmcintel profile organizes the public chemistry, manufacturing, controls and regulatory record of an approved drug by discipline.
            </p>
          </div>
        </div>
      </div>

      {/* Main Discipline Dropdown Accordions with Uniform Colors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 pb-16">
        {disciplineSections.map((section) => {
          const isOpen = !!openSections[section.id];
          return (
            <div
              key={section.id}
              id={section.id}
              className="bg-white rounded-2xl border border-border-main shadow-xs overflow-hidden transition-all duration-200"
            >
              {/* Dropdown Header Bar */}
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
                className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left hover:bg-slate-50/70 transition-colors cursor-pointer select-none group"
              >
                <div>
                  <h2 className="text-lg sm:text-xl font-bold font-display text-main tracking-tight group-hover:text-primary transition-colors">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="text-xs sm:text-sm text-body/80 mt-0.5 line-clamp-1">
                      {section.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center flex-shrink-0">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-slate-100 text-slate-500 group-hover:text-primary group-hover:bg-primary-light'
                    }`}>
                    {isOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </button>

              {/* Collapsible Dropdown Content */}
              {isOpen && (
                <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-border-main/60 bg-[#FAFCFB]">
                  <div className={`grid ${section.gridClass} gap-5`}>
                    {section.cards.map((card, idx) => {
                      const IconComponent = card.icon;
                      return (
                        <div
                          key={idx}
                          className={`bg-white rounded-xl border border-border-main p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all ${card.colSpan || ''
                            }`}
                        >
                          {/* Card Header with Icon & Title */}
                          <div className="flex items-start gap-3.5">
                            <div className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center ${card.iconColor} flex-shrink-0 mt-0.5`}>
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-base sm:text-lg font-bold text-main font-display leading-snug">
                                {card.title}
                              </h3>
                              <p className="text-xs sm:text-sm text-body leading-relaxed mt-1">
                                {card.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Banner Section: "Your Partner in Every Phase" kept AS IS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-sm border border-border-main p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 group">
          {/* Left green accent border */}
          <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-primary-light rounded-r-lg group-hover:bg-primary transition-colors duration-500"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8 relative z-10 pl-2">
            <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center text-navy flex-shrink-0 border-[3px] border-primary">
              <FiSearch className="w-8 h-8" />
            </div>
            <div className="text-center md:text-left mt-2 md:mt-0">
              <h3 className="text-2xl font-bold text-navy font-display mb-3">Your Partner in Every Phase</h3>
              <p className="text-body max-w-3xl text-lg">
                From early discovery to commercial success, we deliver data-driven solutions that accelerate timelines, ensure compliance, and improve patient outcomes.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0 w-full md:w-auto mt-4 lg:mt-0">
            <button
              className="w-full md:w-auto bg-navy hover:bg-slate text-white px-8 py-4 rounded-xl font-bold font-display transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate('/contacts')}
            >
              Let's Work Together <FiArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Subtle background waves */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none -z-10">
            <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200C50 150 100 150 150 200C200 250 250 250 300 200C350 150 400 150 400 200V200H0V200Z" fill="currentColor" className="text-navy" />
              <path d="M0 150C60 100 120 100 180 150C240 200 300 200 360 150C420 100 480 100 540 150V250H0V150Z" fill="currentColor" className="text-navy" fillOpacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasServed;