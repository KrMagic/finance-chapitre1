import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function Introduction() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">Introduction</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Qu'est-ce que la gestion centralisee de tresorerie ?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La gestion centralisee de tresorerie est une approche strategique qui consiste a regrouper 
              et coordonner les activites de tresorerie de toutes les entites d'un groupe au sein d'une
        structure centrale. Cette centralisation permet d'optimiser la gestion des liquidites,
        de reduire les couts financiers et d'ameliorer le controle des risques.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Objectifs principaux</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Optimisation de la liquidite du groupe</li>
                    <li>• Reduction des couts de financement</li>
                    <li>• Amelioration du controle des risques</li>
                    <li>• Standardisation des processus</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Concepts cles a retenir</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">Cash Pooling</h3>
                <p className="text-green-800 text-sm">
                  Technique de centralisation physique ou notionnelle des soldes de tresorerie 
                  des filiates vers la societe mere.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">Netting</h3>
                <p className="text-purple-800 text-sm">
                  Compensation des creances et dettes entre entites du groupe pour reduire 
                  les flux financiers.
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-3">Centre de Services Partagés</h3>
                <p className="text-orange-800 text-sm">
                  Structure centralisee qui gere les operations de tresorerie pour l'ensemble 
                  du groupe.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-3">Reporting Consolidé</h3>
                <p className="text-indigo-800 text-sm">
                  Vision globale et en temps reel de la position de tresorerie du groupe.
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Moyen mnemotechnique</h3>
                  <p className="text-yellow-800">
                    <strong>CORP</strong> : <strong>C</strong>entralisation, <strong>O</strong>ptimisation, 
                    <strong>R</strong>isques, <strong>P</strong>rocessus - les 4 piliers de la gestion centralisee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div></div>
          <Link 
            href="/section-1"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            Section I - Centralisation des Flux
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}