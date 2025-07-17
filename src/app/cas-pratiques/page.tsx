'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, Calculator, Eye, EyeOff, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CasPratique {
  id: number;
  title: string;
  context: string;
  question: string;
  data: string[];
  solution: string;
  methodology: string[];
}

const casPratiques: CasPratique[] = [
  {
    id: 1,
    title: "Optimisation du Cash Pooling - Groupe ALPHA",
    context: "Le groupe ALPHA dispose de 4 filiales avec les positions de trésorerie suivantes au 31/12. La société mère souhaite optimiser sa gestion centralisée.",
    question: "Calculez l'economie d'interets realisee grace au cash pooling physique.",
    data: [
      "Filiale A : +2 000 000 € (excédent)",
      "Filiale B : -1 500 000 € (déficit)",
      "Filiale C : +800 000 € (excédent)",
      "Filiale D : -500 000 € (déficit)",
      "Taux de placement : 2,5% l'an",
      "Taux d'emprunt : 4,8% l'an"
    ],
    solution: "**Situation avant cash pooling :**\n\nExcédents totaux : 2 000 000 + 800 000 = 2 800 000 €\nDéficits totaux : 1 500 000 + 500 000 = 2 000 000 €\n\nProduits financiers : 2 800 000 × 2,5% = 70 000 €\nCharges financières : 2 000 000 × 4,8% = 96 000 €\n**Résultat net : 70 000 - 96 000 = -26 000 €**\n\n**Situation après cash pooling :**\n\nPosition nette du groupe : 2 800 000 - 2 000 000 = 800 000 €\nProduits financiers : 800 000 × 2,5% = 20 000 €\nCharges financières : 0 €\n**Résultat net : 20 000 €**\n\n**Économie réalisée : 20 000 - (-26 000) = 46 000 € par an**",
    methodology: [
      "Identifier les positions individuelles de chaque entite",
      "Calculer les produits et charges avant centralisation",
      "Determiner la position nette consolidee",
      "Calculer le nouveau resultat financier",
      "Mesurer l'economie realisee"
    ]
  },
  {
    id: 2,
    title: "Système de Netting - Groupe BETA",
    context: "Le groupe BETA met en place un système de netting multilatéral pour optimiser ses flux inter-compagnies. Les flux mensuels entre filiales sont les suivants :",
    question: "Calculez l'economie de flux realisee et les nouveaux flux nets apres netting.",
    data: [
      "Filiale A → Filiale B : 500 000 €",
      "Filiale A → Filiale C : 300 000 €",
      "Filiale B → Filiale A : 200 000 €",
      "Filiale B → Filiale C : 400 000 €",
      "Filiale C → Filiale A : 150 000 €",
      "Filiale C → Filiale B : 250 000 €",
      "Coût de transfert : 0,15% par transaction"
    ],
    solution: "**Flux bruts totaux :**\n500 000 + 300 000 + 200 000 + 400 000 + 150 000 + 250 000 = 1 800 000 €\n\n**Calcul des positions nettes :**\n\n*Filiale A :*\n- Reçoit : 200 000 + 150 000 = 350 000 €\n- Paie : 500 000 + 300 000 = 800 000 €\n- **Position nette : -450 000 € (débitrice)**\n\n*Filiale B :*\n- Reçoit : 500 000 + 250 000 = 750 000 €\n- Paie : 200 000 + 400 000 = 600 000 €\n- **Position nette : +150 000 € (créditrice)**\n\n*Filiale C :*\n- Reçoit : 300 000 + 400 000 = 700 000 €\n- Paie : 150 000 + 250 000 = 400 000 €\n- **Position nette : +300 000 € (créditrice)**\n\n**Flux nets après netting :**\n- A paie 300 000 € à C\n- A paie 150 000 € à B\n- **Total flux nets : 450 000 €**\n\n**Économie de flux : 1 800 000 - 450 000 = 1 350 000 €**\n**Économie de coûts : 1 350 000 × 0,15% = 2 025 € par mois**",
    methodology: [
      "Lister tous les flux inter-compagnies",
      "Calculer la position nette de chaque entite",
      "Determiner les flux de reglement optimaux",
      "Mesurer l'economie de flux realisee",
      "Calculer l'impact sur les couts de transaction"
    ]
  },
  {
    id: 3,
    title: "Analyse de Performance - Groupe GAMMA",
    context: "Le groupe GAMMA souhaite evaluer la performance de sa gestion centralisee de tresorerie sur l&apos;exercice ecoule.",
    question: "Calculez les indicateurs de performance et analysez l'efficacite de la gestion.",
    data: [
      "Encours moyen de financement : 15 000 000 €",
      "Encours moyen de placement : 8 000 000 €",
      "Intérêts payés : 540 000 €",
      "Intérêts reçus : 160 000 €",
      "Besoins de liquidité court terme : 5 000 000 €",
      "Liquidités disponibles : 6 500 000 €",
      "Benchmark coût de financement marché : 3,8%",
      "Benchmark rendement placement marché : 2,2%"
    ],
    solution: "**Calcul des indicateurs :**\n\n**1. Cout moyen de financement (CMF) :**\nCMF = 540 000 / 15 000 000 = 3,6%\n\n**2. Rendement des placements (RDP) :**\nRDP = 160 000 / 8 000 000 = 2,0%\n\n**3. Spread de tresorerie :**\nSpread = 2,0% - 3,6% = -1,6%\n\n**4. Ratio de liquidite :**\nRL = 6 500 000 / 5 000 000 = 1,3\n\n**5. Resultat financier net :**\nResultat = 160 000 - 540 000 = -380 000 EUR\n\n**Analyse comparative :**\n- CMF groupe (3,6%) vs marche (3,8%) : **Performance positive de +0,2 point**\n- RDP groupe (2,0%) vs marche (2,2%) : **Sous-performance de -0,2 point**\n- Ratio de liquidite de 1,3 : **Niveau satisfaisant** (> 1,2)\n\n**Recommandations :**\n- Ameliorer le rendement des placements\n- Maintenir l&apos;avantage sur le cout de financement\n- Optimiser l&apos;allocation des excedents",
    methodology: [
      "Calculer le coût moyen de financement",
      "Déterminer le rendement des placements",
      "Analyser le spread et la liquidité",
      "Comparer aux benchmarks du marché",
      "Formuler des recommandations d'amelioration"
    ]
  }
];

export default function CasPratiques() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  const toggleSolution = (caseId: number) => {
    setShowSolution(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-6xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-3 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-red-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <Award className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-red-600" />
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left leading-tight">
              Cas pratiques d'application
            </h1>
          </div>
          
          <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Ces exercices d'application sont inspires des epreuves DSCG et mettent l'accent sur une methodologie detaillee.
          </p>
          
          <div className="grid gap-6 sm:gap-8">
            {casPratiques.map((cas, index) => (
              <motion.div
                key={cas.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                  <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                    <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                      Cas {cas.id} : {cas.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{cas.context}</p>
                    
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-4">
                      <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Question :</h3>
                      <p className="text-blue-800 text-sm sm:text-base leading-relaxed">{cas.question}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Données :</h3>
                      <ul className="space-y-1">
                        {cas.data.map((item, idx) => (
                          <li key={idx} className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 sm:p-4 mb-4">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <h3 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">Méthodologie :</h3>
                          <ol className="space-y-1">
                            {cas.methodology.map((step, idx) => (
                              <li key={idx} className="text-yellow-800 text-xs sm:text-sm leading-relaxed break-words">
                                {idx + 1}. {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={() => toggleSolution(cas.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base"
                      >
                        {showSolution[cas.id] ? (
                          <>
                            <EyeOff className="h-4 w-4" />
                            <span className="hidden sm:inline">Masquer la solution</span>
                            <span className="sm:hidden">Masquer</span>
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4" />
                            <span className="hidden sm:inline">Voir la solution</span>
                            <span className="sm:hidden">Solution</span>
                          </>
                        )}
                      </button>
                    </div>
                    
                    {showSolution[cas.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 sm:mt-6 bg-green-50 border border-green-200 rounded-lg p-3 sm:p-6"
                      >
                        <h3 className="font-semibold text-green-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                          <Award className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                          Solution détaillée
                        </h3>
                        <div className="prose prose-sm max-w-none text-green-800 text-xs sm:text-sm leading-relaxed">
                          {cas.solution.split('\n').map((line, idx) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return (
                                <p key={idx} className="font-bold text-green-900 mb-2">
                                  {line.replace(/\*\*/g, '')}
                                </p>
                              );
                            }
                            if (line.startsWith('*') && line.endsWith('*')) {
                              return (
                                <p key={idx} className="font-semibold text-green-800 mb-1">
                                  {line.replace(/\*/g, '')}
                                </p>
                              );
                            }
                            return line ? (
                              <p key={idx} className="mb-1">{line}</p>
                            ) : (
                              <br key={idx} />
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4">Conseils pour l'examen DSCG</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">Méthodologie d&apos;approche :</h3>
                <ul className="text-red-700 space-y-1 text-xs sm:text-sm leading-relaxed">
                  <li>• Lire attentivement l'enonce</li>
                  <li>• Identifier les données clés</li>
                  <li>• Structurer votre réponse</li>
                  <li>• Justifier vos calculs</li>
                  <li>• Conclure avec des recommandations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-800 mb-2 text-sm sm:text-base">Points d&apos;attention :</h3>
                <ul className="text-red-700 space-y-1 text-xs sm:text-sm leading-relaxed">
                  <li>• Respecter les unités (€, %, etc.)</li>
                  <li>• Vérifier la cohérence des résultats</li>
                  <li>• Utiliser le vocabulaire technique</li>
                  <li>• Présenter clairement les calculs</li>
                  <li>• Analyser les implications managériales</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4 leading-tight">
              Cas 4 : Mise en conformité réglementaire - Groupe THETA
            </h2>
            
            <div className="mb-4">
              <h4 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">Contexte :</h4>
              <p className="text-orange-700 text-xs sm:text-sm mb-3 leading-relaxed">
                Le groupe THETA opère un cash pooling avec 8 filiales. Suite à un contrôle fiscal, 
                l&apos;administration remet en question la rémunération des excédents et déficits.
              </p>
              
              <h4 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">Données :</h4>
              <ul className="text-orange-700 text-xs sm:text-sm space-y-1 mb-3 leading-relaxed">
                <li>• Taux appliqué aux excédents : 0,5%</li>
                <li>• Taux appliqué aux déficits : 2,8%</li>
                <li>• Taux de marché EONIA + 0,1% : 0,6%</li>
                <li>• Taux de marché crédit court terme : 2,5%</li>
                <li>• Montant moyen des excédents : 15M€</li>
                <li>• Montant moyen des déficits : 12M€</li>
              </ul>
              
              <h4 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">Question :</h4>
              <p className="text-orange-700 text-xs sm:text-sm leading-relaxed">
                Analysez la conformité des taux et calculez l&apos;impact fiscal potentiel d&apos;un redressement.
              </p>
            </div>
            
            <button
              onClick={() => toggleSolution(4)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mb-4 text-sm sm:text-base"
            >
              {showSolution[4] ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span className="hidden sm:inline">Masquer la solution</span>
                  <span className="sm:hidden">Masquer</span>
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  <span className="hidden sm:inline">Voir la solution</span>
                  <span className="sm:hidden">Solution</span>
                </>
              )}
            </button>
            
            {showSolution[4] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white border border-orange-200 rounded-lg p-3 sm:p-6"
              >
                <h3 className="font-semibold text-orange-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  Solution détaillée
                </h3>
                <div className="text-xs sm:text-sm text-orange-700 leading-relaxed">
                  <h5 className="font-semibold mb-2">1. Analyse de conformité :</h5>
                  <p className="mb-2"><strong>Excédents :</strong> 0,5% vs 0,6% (marché) → Non conforme (-0,1%)</p>
                  <p className="mb-3"><strong>Déficits :</strong> 2,8% vs 2,5% (marché) → Non conforme (+0,3%)</p>
                  
                  <h5 className="font-semibold mb-2">2. Calcul de l&apos;impact fiscal :</h5>
                  <p className="mb-1"><strong>Sous-rémunération excédents :</strong></p>
                  <p className="mb-2">15M€ × 0,1% = 15 000€ de produits financiers non déclarés</p>
                  
                  <p className="mb-1"><strong>Sur-facturation déficits :</strong></p>
                  <p className="mb-2">12M€ × 0,3% = 36 000€ de charges financières excédentaires</p>
                  
                  <p className="mb-1"><strong>Impact total :</strong></p>
                  <p className="mb-2">51 000 EUR de base taxable × 25% (IS) = 12 750 EUR d&apos;impot supplementaire</p>
                  
                  <h5 className="font-semibold mb-2">3. Recommandations :</h5>
                  <ul className="space-y-1">
                    <li>• Aligner les taux sur les conditions de marché</li>
                    <li>• Documenter la politique de prix de transfert</li>
                    <li>• Mettre en place un suivi trimestriel des taux</li>
                    <li>• Constituer un dossier de justification économique</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <Link 
            href="/quiz"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <span>←</span>
            Quiz
          </Link>
          <Link 
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            Retour au plan du cours
            <span>🏠</span>
          </Link>
        </div>
      </div>
    </main>
  );
}