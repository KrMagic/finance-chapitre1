import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, Shield, TrendingDown, Calculator } from 'lucide-react';
import Link from 'next/link';

export default function Section2() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-purple-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">Section II - Optimisation Financière</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Strategies d'optimisation</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              L'optimisation financiere dans un contexte de gestion centralisee vise a maximiser 
              la rentabilité des excédents de trésorerie tout en minimisant les coûts de financement 
              et les risques associés.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Optimisation des placements</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-green-900 mb-3">Hiérarchie des placements</h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <strong className="text-green-800">Niveau 1 - Liquidité immédiate</strong>
                    <span className="text-sm bg-green-100 px-2 py-1 rounded">0-7 jours</span>
                  </div>
                  <p className="text-sm text-green-700">Comptes courants, dépôts à vue</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <strong className="text-green-800">Niveau 2 - Liquidité court terme</strong>
                    <span className="text-sm bg-green-100 px-2 py-1 rounded">1-3 mois</span>
                  </div>
                  <p className="text-sm text-green-700">Dépôts à terme, certificats de dépôt</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-green-200">
                  <div className="flex justify-between items-center mb-2">
                    <strong className="text-green-800">Niveau 3 - Placements moyen terme</strong>
                    <span className="text-sm bg-green-100 px-2 py-1 rounded">3-12 mois</span>
                  </div>
                  <p className="text-sm text-green-700">OPCVM monétaires, obligations courtes</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Gestion des financements</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Financement centralisé</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Negociation de conditions preferentielles</li>
                  <li>• Mutualisation des garanties</li>
                  <li>• Optimisation de la notation groupe</li>
                  <li>• Reduction des couts administratifs</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-3">Prêts intra-groupe</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Transfert des excedents vers les besoins</li>
                  <li>• Respect des prix de transfert</li>
                  <li>• Documentation juridique appropriee</li>
                  <li>• Optimisation fiscale</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Gestion des risques financiers</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">Types de risques à gérer</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-red-800">Risque de change</strong>
                      <ul className="text-red-700 text-sm mt-1">
                        <li>• Couverture par instruments dérivés</li>
                        <li>• Netting naturel des positions</li>
                        <li>• Politique de couverture groupe</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-red-800">Risque de taux</strong>
                      <ul className="text-red-700 text-sm mt-1">
                        <li>• Swaps de taux d'interet</li>
                        <li>• Diversification des echeances</li>
                        <li>• Analyse de sensibilite</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Aspects fiscaux et réglementaires</h3>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-orange-900 mb-4">Fiscalité du cash pooling</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-orange-800 mb-2">Rémunération des excédents</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Taux de marche obligatoire</li>
                    <li>• Documentation des conditions</li>
                    <li>• Comparaison avec taux bancaires</li>
                    <li>• Justification economique</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-orange-800 mb-2">Financement des déficits</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Taux equivalent aux comptes courants</li>
                    <li>• Respect du principe de pleine concurrence</li>
                    <li>• Eviter les avantages anormaux</li>
                    <li>• Conformite aux prix de transfert</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Indicateurs de performance</h3>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3 mb-4">
                <Calculator className="h-6 w-6 text-purple-600 mt-1" />
                <h4 className="font-semibold text-purple-900">KPIs essentiels</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <strong className="text-purple-900">Coût moyen de financement</strong>
                  <p className="text-sm text-purple-700 mt-1">
                    CMF = (Σ Intérêts payés) / (Σ Encours moyens)
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <strong className="text-purple-900">Rendement des placements</strong>
                  <p className="text-sm text-purple-700 mt-1">
                    RDP = (Σ Intérêts reçus) / (Σ Placements moyens)
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <strong className="text-purple-900">Spread de trésorerie</strong>
                  <p className="text-sm text-purple-700 mt-1">
                    Spread = RDP - CMF
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <strong className="text-purple-900">Ratio de liquidité</strong>
                  <p className="text-sm text-purple-700 mt-1">
                    RL = Liquidités / Besoins court terme
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Exercice d'optimisation financiere</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h4 className="font-semibold text-green-900 mb-3">Cas pratique : Optimisation des placements - Groupe EPSILON</h4>
              <div className="mb-4">
                <p className="text-green-800 mb-2"><strong>Situation :</strong> Le groupe EPSILON dispose d'un excedent de tresorerie de 5 000 000 EUR a placer selon la hierarchie suivante :</p>
                <ul className="text-green-700 text-sm space-y-1 mb-3">
                  <li>• Niveau 1 (0-7 jours) : 1 500 000 EUR a 1,5%</li>
                  <li>• Niveau 2 (1-3 mois) : 2 000 000 EUR a 2,8%</li>
                  <li>• Niveau 3 (3-12 mois) : 1 500 000 EUR a 3,5%</li>
                  <li>• Cout de financement evite : 4,2%</li>
                </ul>
                <p className="text-green-800 text-sm"><strong>Question :</strong> Calculez le rendement global et l'economie realisee par rapport au cout de financement.</p>
              </div>
              
              <details className="bg-white p-4 rounded">
                <summary className="font-semibold text-green-900 cursor-pointer">Voir la solution</summary>
                <div className="mt-3 text-sm text-green-700">
                  <p><strong>Calcul du rendement par niveau :</strong></p>
                  <p>• Niveau 1 : 1 500 000 x 1,5% = 22 500 EUR</p>
                  <p>• Niveau 2 : 2 000 000 x 2,8% = 56 000 EUR</p>
                  <p>• Niveau 3 : 1 500 000 x 3,5% = 52 500 EUR</p>
                  <p>• <strong>Total produits :</strong> 131 000 EUR</p>
                  <br/>
                  <p><strong>Rendement global :</strong> 131 000 / 5 000 000 = 2,62%</p>
                  <br/>
                  <p><strong>Economie vs financement :</strong></p>
                  <p>• Cout evite : 5 000 000 x 4,2% = 210 000 EUR</p>
                  <p>• Gain net : 210 000 - 131 000 = 79 000 EUR</p>
                  <p>• <strong>Economie nette : 1,58% du capital</strong></p>
                </div>
              </details>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Optimisation fiscale</h3>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-yellow-900 mb-3">Leviers d'optimisation</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-yellow-600 mt-1" />
                  <div>
                    <strong className="text-yellow-800">Localisation des centres de financement</strong>
                    <p className="text-sm text-yellow-700">Implantation dans des juridictions à fiscalité attractive</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-yellow-600 mt-1" />
                  <div>
                    <strong className="text-yellow-800">Optimisation des flux d'interets</strong>
                    <p className="text-sm text-yellow-700">Structuration pour minimiser la charge fiscale globale</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-5 w-5 text-yellow-600 mt-1" />
                  <div>
                    <strong className="text-yellow-800">Utilisation des conventions fiscales</strong>
                    <p className="text-sm text-yellow-700">Réduction des retenues à la source</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
              <h4 className="font-semibold text-indigo-900 mb-2">Moyen mnémotechnique - PROFIT</h4>
              <ul className="text-indigo-800 space-y-1 text-sm">
                <li><strong>P</strong>lacements optimises</li>
                <li><strong>R</strong>isques maitrises</li>
                <li><strong>O</strong>utils de mesure</li>
                <li><strong>F</strong>inancements centralises</li>
                <li><strong>I</strong>ndicateurs de performance</li>
                <li><strong>T</strong>axation optimisee</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <Link 
            href="/section-1"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <span>←</span>
            Section I
          </Link>
          <Link 
            href="/section-3"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            Section III - Gouvernance et Contrôle
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}