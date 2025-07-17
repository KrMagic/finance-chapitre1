import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Banknote, ArrowRightLeft, Calculator, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Section1() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <Banknote className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">Section I - Techniques de Centralisation</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Introduction aux techniques</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La centralisation des flux de trésorerie repose sur plusieurs techniques permettant
              de regrouper et d'optimiser la gestion des liquidites au niveau du groupe.
              Ces techniques varient selon les contraintes réglementaires et les objectifs stratégiques.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Cash Pooling Physique</h3>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <ArrowRightLeft className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <p className="text-blue-800 mb-3">
                    Le cash pooling physique consiste en un transfert effectif des soldes de trésorerie
                    des filiales vers un compte centralisé de la société mère.
                  </p>
                  
                  <h4 className="font-semibold mb-2">Avantages :</h4>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Visibilite complete sur la tresorerie du groupe</li>
                    <li>• Optimisation des placements et financements</li>
                    <li>• Reduction des frais bancaires</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Cash Pooling Notionnel</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-green-800 mb-3">
                Le cash pooling notionnel permet de compenser virtuellement les soldes créditeurs
                et débiteurs sans transfert physique de fonds.
              </p>
              
              <h4 className="font-semibold mb-2">Caractéristiques :</h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• Pas de transfert physique de fonds</li>
                <li>• Compensation des intérêts</li>
                <li>• Maintien de l'autonomie juridique des filiales</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Système de Netting</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">Netting Bilatéral</h4>
                <p className="text-purple-800 text-sm mb-3">
                  Compensation entre deux entités du groupe uniquement.
                </p>
                <div className="bg-white p-3 rounded border">
                  <p className="text-xs text-purple-700">
                    <strong>Exemple :</strong> Filiale A doit 100k€ à B, B doit 60k€ à A
                    → Flux net : A verse 40k€ à B
                  </p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-3">Netting Multilatéral</h4>
                <p className="text-orange-800 text-sm mb-3">
                  Compensation entre plusieurs entités via un centre de netting.
                </p>
                <div className="bg-white p-3 rounded border">
                  <p className="text-xs text-orange-700">
                    <strong>Avantage :</strong> Réduction maximale du nombre de transactions
                    et des coûts de transfert
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Calculator className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-3">Calcul de l'economie de flux</h4>
                  <p className="text-yellow-800 text-sm mb-2">
                    <strong>Économie de flux = Σ(Flux bruts) - Σ(Flux nets)</strong>
                  </p>
                  <p className="text-yellow-700 text-xs">
                    Plus le nombre d'entites participantes est eleve, plus l'economie de flux est importante.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Mise en œuvre pratique</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Étapes de déploiement :</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border text-center">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">Analyse</h5>
                  <p className="text-sm text-gray-600">Définition du véhicule de centralisation</p>
                </div>
                
                <div className="bg-white p-4 rounded border text-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">
                    <strong>Négociation bancaire</strong>
                  </h5>
                  <p className="text-sm text-gray-600">Mise en place des accords</p>
                </div>
                
                <div className="bg-white p-4 rounded border text-center">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">
                    <strong>Déploiement et formation</strong>
                  </h5>
                  <p className="text-sm text-gray-600">Formation des équipes et mise en œuvre</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Aspects réglementaires</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="font-semibold text-indigo-900 mb-2">Points d'attention reglementaires</h3>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>• Articles L312-2 et L511-7 du Code monetaire et financier</li>
                <li>• Mention obligatoire dans les statuts des societes</li>
                <li>• Respect des prix de transfert (taux de marche)</li>
                <li>• Documentation des conventions de tresorerie</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Comptabilisation</h3>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-yellow-900 mb-4">Écritures comptables</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Remontée de fonds vers la mère</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 451 &quot;Groupe&quot; (Autres créances)</p>
                    <p><strong>Crédit :</strong> 512 &quot;Banque&quot;</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Réception de fonds des filiales</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 512 &quot;Banque&quot;</p>
                    <p><strong>Crédit :</strong> 451 &quot;Groupe&quot; (Dettes financières)</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Intérêts versés</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 6615 &quot;Intérêts des comptes courants&quot;</p>
                    <p><strong>Crédit :</strong> 451 &quot;Groupe&quot;</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Intérêts reçus</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 451 &quot;Groupe&quot;</p>
                    <p><strong>Crédit :</strong> 768 &quot;Autres produits financiers&quot;</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Exercice pratique</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h4 className="font-semibold text-green-900 mb-3">Cas pratique : Cash pooling - Groupe DELTA</h4>
              <div className="mb-4">
                <p className="text-green-800 mb-2"><strong>Données :</strong></p>
                <ul className="text-green-700 text-sm space-y-1 mb-3">
                  <li>• Filiale Alpha : +1 200 000 EUR</li>
                  <li>• Filiale Beta : -800 000 EUR</li>
                  <li>• Filiale Gamma : +300 000 EUR</li>
                  <li>• Taux de placement : 2,8% - Taux d&apos;emprunt : 5,2%</li>
                </ul>
                <p className="text-red-800 text-sm"><strong>Question :</strong> Calculez l'economie annuelle realisee grace au cash pooling.</p>
              </div>
              
              <details className="bg-white p-4 rounded">
                <summary className="font-semibold text-green-900 cursor-pointer">Voir la solution</summary>
                <div className="mt-3 text-sm text-green-700">
                  <p><strong>Avant cash pooling :</strong></p>
                  <p>• Produits : (1 200 000 + 300 000) x 2,8% = 42 000 EUR</p>
                  <p>• Charges : 800 000 x 5,2% = 41 600 EUR</p>
                  <p>• Resultat net : 42 000 - 41 600 = 400 EUR</p>
                  <br/>
                  <p><strong>Après cash pooling :</strong></p>
                  <p>• Position nette : 1 500 000 - 800 000 = 700 000 EUR</p>
                  <p>• Produits : 700 000 x 2,8% = 19 600 EUR</p>
                  <p>• Charges : 0 EUR</p>
                  <p>• Resultat net : 19 600 EUR</p>
                  <br/>
                  <p><strong>Économie annuelle : 19 600 - 400 = 19 200 €</strong></p>
                </div>
              </details>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <Link 
            href="/introduction"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <span>←</span>
            Introduction
          </Link>
          <Link 
            href="/section-2"
            className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            Section II - Optimisation Financière
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}