import BackToPlanButton from '@/components/content/BackToPlanButton';
import { TrendingUp, ArrowRight, DollarSign, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function Section1() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-green-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">Section I - Centralisation des Flux</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Les techniques de centralisation</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La centralisation des flux de trésorerie repose sur plusieurs techniques permettant 
              de regrouper et d'optimiser la gestion des liquidités au niveau du groupe. 
              Ces techniques varient selon les contraintes réglementaires et les objectifs stratégiques.
            </p>
            
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">1. Cash Pooling Physique</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Le cash pooling physique consiste en un transfert effectif des soldes de trésorerie 
                des filiales vers un compte centralisé de la société mère.
              </p>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">Avantages :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Visibilité complète sur la trésorerie du groupe</li>
                  <li>• Optimisation des placements et financements</li>
                  <li>• Réduction des frais bancaires</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Cash Pooling Notionnel</h3>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Le cash pooling notionnel permet de compenser virtuellement les soldes créditeurs 
                et débiteurs sans transfert physique de fonds.
              </p>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold mb-2">Caractéristiques :</h4>
                <ul className="text-sm space-y-1">
                  <li>• Pas de transfert physique de fonds</li>
                  <li>• Compensation des intérêts</li>
                  <li>• Maintien de l'autonomie juridique des filiales</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Système de Netting</h3>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">Netting Bilatéral</h4>
                <p className="text-purple-800 text-sm mb-3">
                  Compensation entre deux entités du groupe uniquement.
                </p>
                <div className="flex items-center justify-center">
                  <div className="bg-purple-200 p-2 rounded">Filiale A</div>
                  <ArrowRight className="mx-2 h-4 w-4" />
                  <div className="bg-purple-200 p-2 rounded">Filiale B</div>
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-3">Netting Multilatéral</h4>
                <p className="text-orange-800 text-sm mb-3">
                  Compensation entre plusieurs entités via un centre de netting.
                </p>
                <div className="text-center">
                  <div className="bg-orange-200 p-2 rounded mb-2">Centre de Netting</div>
                  <div className="flex justify-around">
                    <div className="bg-orange-100 p-1 rounded text-xs">Fil. A</div>
                    <div className="bg-orange-100 p-1 rounded text-xs">Fil. B</div>
                    <div className="bg-orange-100 p-1 rounded text-xs">Fil. C</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <DollarSign className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Calcul d'optimisation</h3>
                  <p className="text-yellow-800 mb-2">
                    <strong>Économie de flux = Σ(Flux bruts) - Σ(Flux nets)</strong>
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Plus le nombre d'entités participantes est élevé, plus l'économie de flux est importante.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Mise en place pratique</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Étapes de déploiement :</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <strong>Audit des flux existants</strong>
                    <p className="text-sm text-gray-600">Cartographie des flux inter-compagnies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <strong>Choix de la structure juridique</strong>
                    <p className="text-sm text-gray-600">Définition du véhicule de centralisation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <strong>Négociation bancaire</strong>
                    <p className="text-sm text-gray-600">Mise en place des accords de cash pooling</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <strong>Déploiement et formation</strong>
                    <p className="text-sm text-gray-600">Formation des équipes et mise en œuvre</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Building2 className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2">Points d'attention réglementaires</h3>
                  <ul className="text-indigo-800 space-y-2 text-sm">
                    <li>• Articles L312-2 et L511-7 du Code monétaire et financier</li>
                    <li>• Mention obligatoire dans les statuts des sociétés</li>
                    <li>• Respect des prix de transfert (taux de marché)</li>
                    <li>• Documentation des conventions de trésorerie</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Comptabilisation du Cash Pooling</h3>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-yellow-900 mb-4">Écritures comptables</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Avance de fonds aux filiales</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 451 "Groupe" (Autres créances)</p>
                    <p><strong>Crédit :</strong> 512 "Banque"</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Réception de fonds des filiales</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 512 "Banque"</p>
                    <p><strong>Crédit :</strong> 451 "Groupe" (Dettes financières)</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Intérêts versés</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 6615 "Intérêts des comptes courants"</p>
                    <p><strong>Crédit :</strong> 451 "Groupe"</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-yellow-800 mb-2">Intérêts reçus</h5>
                  <div className="text-sm text-yellow-700">
                    <p><strong>Débit :</strong> 451 "Groupe"</p>
                    <p><strong>Crédit :</strong> 768 "Autres produits financiers"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Exercice d'application</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-semibold text-red-900 mb-3">Cas pratique : Groupe DELTA</h4>
              <div className="mb-4">
                <p className="text-red-800 mb-2"><strong>Situation :</strong> Le groupe DELTA met en place un cash pooling ZBA avec les positions suivantes :</p>
                <ul className="text-red-700 text-sm space-y-1 mb-3">
                  <li>• Filiale Alpha : +1 200 000 €</li>
                  <li>• Filiale Beta : -800 000 €</li>
                  <li>• Filiale Gamma : +300 000 €</li>
                  <li>• Taux de placement : 2,8% - Taux d'emprunt : 5,2%</li>
                </ul>
                <p className="text-red-800 text-sm"><strong>Question :</strong> Calculez l'économie annuelle réalisée grâce au cash pooling.</p>
              </div>
              
              <details className="bg-white p-4 rounded">
                <summary className="font-semibold text-red-900 cursor-pointer">Voir la solution</summary>
                <div className="mt-3 text-sm text-red-700">
                  <p><strong>Avant cash pooling :</strong></p>
                  <p>• Produits : (1 200 000 + 300 000) × 2,8% = 42 000 €</p>
                  <p>• Charges : 800 000 × 5,2% = 41 600 €</p>
                  <p>• Résultat net : 42 000 - 41 600 = 400 €</p>
                  <br/>
                  <p><strong>Après cash pooling :</strong></p>
                  <p>• Position nette : 1 500 000 - 800 000 = 700 000 €</p>
                  <p>• Produits : 700 000 × 2,8% = 19 600 €</p>
                  <p>• Charges : 0 €</p>
                  <p>• Résultat net : 19 600 €</p>
                  <br/>
                  <p><strong>Économie annuelle : 19 600 - 400 = 19 200 €</strong></p>
                </div>
              </details>
                  <ul className="text-indigo-800 space-y-1 text-sm">
                    <li>• Respect des règles de prix de transfert</li>
                    <li>• Conformité aux réglementations locales</li>
                    <li>• Documentation des accords intra-groupe</li>
                    <li>• Validation par les autorités fiscales</li>
                  </ul>
                </div>
              </div>
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