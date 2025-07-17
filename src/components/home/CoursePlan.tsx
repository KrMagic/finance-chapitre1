'use client';

import { Rocket, TrendingUp, BarChart3, Users, Brain, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions de la gestion centralisée',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - Centralisation des Flux',
    description: 'Techniques et outils de centralisation de trésorerie',
    href: '/section-1',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - Optimisation Financière',
    description: 'Stratégies d&apos;optimisation et de gestion des risques',
    href: '/section-2',
    icon: BarChart3,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Section III - Gouvernance et Contrôle',
    description: 'Mise en place des processus de contrôle et reporting',
    href: '/section-3',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Quiz',
    description: 'Evaluation interactive de vos connaissances',
    href: '/quiz',
    icon: Brain,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Cas Pratiques',
    description: 'Exercices d&apos;application et méthodologie DSCG',
    href: '/cas-pratiques',
    icon: Award,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Plan du cours</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
          Découvrez les aspects essentiels de la gestion centralisée de trésorerie dans un groupe.
          Ce cours couvre les techniques, l&apos;optimisation et la gouvernance financiere.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {sections.map((section) => (
          <motion.div
            key={section.href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Link href={section.href}>
              <div className={`${section.bgColor} p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full`}>
                <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`${section.color} p-2 sm:p-3 rounded-full flex-shrink-0 mx-auto`}>
                    <section.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div className="flex-1 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}