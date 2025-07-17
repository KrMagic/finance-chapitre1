import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import Link from 'next/link';

export default function Section3() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-red-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <Shield className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-red-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">Section III - Contrôle et Gouvernance</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Cadre de contrôle interne</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La mise en place d'un systeme de centralisation de tresorerie necessite un cadre de controle
              rigoureux pour assurer la sécurité des opérations et la conformité réglementaire.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Principes de gouvernance</h3>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Séparation des fonctions</h4>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>• <strong>Initiation :</strong> Demande et validation des operations</li>
                    <li>• <strong>Autorisation :</strong> Approbation selon les delegations</li>
                    <li>• <strong>Execution :</strong> Realisation des transactions</li>
                    <li>• <strong>Controle :</strong> Verification et rapprochement</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Matrice des délégations</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Exemple de matrice d'autorisation :</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 p-2 text-left">Montant</th>
                      <th className="border border-gray-300 p-2 text-left">Trésorier</th>
                      <th className="border border-gray-300 p-2 text-left">Directeur Financier</th>
                      <th className="border border-gray-300 p-2 text-left">Direction Générale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">&lt; 100 k EUR</td>
                      <td className="border border-gray-300 p-2 text-center">X</td>
                      <td className="border border-gray-300 p-2 text-center">-</td>
                      <td className="border border-gray-300 p-2 text-center">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">100 k EUR - 1 M EUR</td>
                      <td className="border border-gray-300 p-2 text-center">X</td>
                      <td className="border border-gray-300 p-2 text-center">X</td>
                      <td className="border border-gray-300 p-2 text-center">-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">&gt; 1 M EUR</td>
                      <td className="border border-gray-300 p-2 text-center">X</td>
                      <td className="border border-gray-300 p-2 text-center">X</td>
                      <td className="border border-gray-300 p-2 text-center">X</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Contrôles automatisés</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-3">Contrôles préventifs</h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• Limites de decouvert par filiale</li>
                  <li>• Plafonds de placement automatiques</li>
                  <li>• Validation des contreparties</li>
                  <li>• Verification des IBAN</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-3">Contrôles détectifs</h4>
                <ul className="text-orange-700 space-y-1 text-sm">
                  <li>• Rapprochements bancaires automatiques</li>
                  <li>• Alertes sur ecarts de position</li>
                  <li>• Monitoring des taux appliques</li>
                  <li>• Suivi des echeances</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Gestion des risques opérationnels</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">Principaux risques identifiés</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-red-800 mb-2">Risques techniques</h5>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Panne du systeme de cash pooling</li>
                        <li>• Erreurs de parametrage</li>
                        <li>• Defaillance des interfaces bancaires</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-800 mb-2">Risques humains</h5>
                      <ul className="text-red-700 space-y-1 text-sm">
                        <li>• Erreurs de saisie</li>
                        <li>• Non-respect des procédures</li>
                        <li>• Fraude interne</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Plan de continuite d'activite</h3>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-yellow-900 mb-4">Mesures de continuité</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border text-center">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-600 font-bold text-sm">1</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">Sauvegarde</h5>
                  <p className="text-sm text-gray-600">Procédures manuelles de secours</p>
                </div>
                
                <div className="bg-white p-4 rounded border text-center">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-600 font-bold text-sm">2</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">Redondance</h5>
                  <p className="text-sm text-gray-600">Systèmes de backup automatiques</p>
                </div>
                
                <div className="bg-white p-4 rounded border text-center">
                  <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-600 font-bold text-sm">3</span>
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-1">Communication</h5>
                  <p className="text-sm text-gray-600">Cellule de crise et escalade</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Reporting et tableaux de bord</h3>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-purple-900 mb-4">Indicateurs clés de performance</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-purple-800 mb-2">Indicateurs opérationnels</h5>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>• Taux de disponibilite du systeme</li>
                    <li>• Delai moyen de traitement</li>
                    <li>• Nombre d'incidents par mois</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-purple-800 mb-2">Indicateurs financiers</h5>
                  <ul className="text-purple-700 space-y-1 text-sm">
                    <li>• Economies realisees vs budget</li>
                    <li>• Evolution des frais bancaires</li>
                    <li>• Optimisation des taux d'interet</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Exercice de gouvernance</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <h4 className="font-semibold text-green-900 mb-3">Cas pratique : Groupe ZETA</h4>
              <div className="mb-4">
                <p className="text-green-800 mb-2"><strong>Situation :</strong></p>
                <p className="text-green-700 text-sm mb-3">
                  Le groupe ZETA souhaite mettre en place un système de cash pooling.
                  La filiale allemande a besoin d&apos;une autorisation d&apos;opération de trésorerie de 2 M EUR.
                </p>
                
                <p className="text-green-800 mb-2"><strong>Données :</strong></p>
                <ul className="text-green-700 text-sm space-y-1 mb-3">
                  <li>• Trésorier : autorise jusqu&apos;à 500 k EUR</li>
                  <li>• Directeur Financier : autorise jusqu&apos;à 1,5 M EUR</li>
                  <li>• Direction Generale : autorisation illimitee</li>
                </ul>
                
                <p className="text-red-800 text-sm"><strong>Question :</strong> Quel circuit d&apos;autorisation doit être suivi ?</p>
              </div>
              
              <details className="bg-white p-4 rounded">
                <summary className="font-semibold text-green-900 cursor-pointer">Voir la solution</summary>
                <div className="mt-3 text-sm text-green-700">
                  <p><strong>Circuit d&apos;autorisation requis :</strong></p>
                  <p>• Montant : 2 M EUR &gt; 1,5 M EUR (limite du Directeur Financier)</p>
                  <p>• <strong>Autorisation necessaire :</strong></p>
                  <p>  1. Tresorier (initiation)</p>
                  <p>  2. Directeur Financier (validation)</p>
                  <p>  3. Direction Generale (autorisation finale)</p>
                  <br/>
                  <p><strong>Contrôles à effectuer :</strong></p>
                  <p>• Vérification de la capacité d&apos;endettement</p>
                  <p>• Validation de la contrepartie bancaire</p>
                  <p>• Documentation de l&apos;opération</p>
                </div>
              </details>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <Link 
            href="/section-2"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <span>←</span>
            Section II - Optimisation
          </Link>
          <Link 
            href="/quiz"
            className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            Quiz Final
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}