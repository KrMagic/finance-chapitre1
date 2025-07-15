import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Users, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Section3() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-indigo-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-indigo-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">Section III - Gouvernance et Contrôle</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Organisation et gouvernance</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              La mise en place d'une gouvernance efficace est essentielle pour assurer le bon 
              fonctionnement de la gestion centralisée de trésorerie. Elle implique la définition 
              de rôles clairs, de processus standardisés et de mécanismes de contrôle robustes.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Structure organisationnelle</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-4">Comité de Trésorerie Groupe</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <strong className="text-blue-800">Composition</strong>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Directeur Financier Groupe (Président)</li>
                    <li>• Trésorier Groupe</li>
                    <li>• Directeurs Financiers des filiales</li>
                    <li>• Responsable des risques</li>
                    <li>• Auditeur interne</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <strong className="text-blue-800">Missions</strong>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Définition de la politique de trésorerie</li>
                    <li>• Validation des limites de risque</li>
                    <li>• Suivi des performances</li>
                    <li>• Approbation des nouveaux instruments</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Processus et procédures</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-3">Manuel de procédures</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <strong className="text-green-800">Procédures opérationnelles</strong>
                        <ul className="text-sm text-green-700 mt-1 space-y-1">
                          <li>• Gestion quotidienne de la liquidité</li>
                          <li>• Processus de placement/financement</li>
                          <li>• Gestion des opérations de change</li>
                          <li>• Procédures de back-office</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-green-800">Procédures de contrôle</strong>
                        <ul className="text-sm text-green-700 mt-1 space-y-1">
                          <li>• Contrôles de premier niveau</li>
                          <li>• Réconciliations bancaires</li>
                          <li>• Validation des opérations</li>
                          <li>• Reporting de conformité</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Système de limites et autorisations</h3>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-purple-900 mb-4">Matrice des pouvoirs</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="text-left p-2 text-purple-900">Niveau</th>
                      <th className="text-left p-2 text-purple-900">Montant</th>
                      <th className="text-left p-2 text-purple-900">Autorisation requise</th>
                    </tr>
                  </thead>
                  <tbody className="text-purple-800">
                    <tr className="border-b border-purple-200">
                      <td className="p-2">Opérationnel</td>
                      <td className="p-2">&lt; 1M€</td>
                      <td className="p-2">Trésorier</td>
                    </tr>
                    <tr className="border-b border-purple-200">
                      <td className="p-2">Tactique</td>
                      <td className="p-2">1M€ - 10M€</td>
                      <td className="p-2">Directeur Financier</td>
                    </tr>
                    <tr className="border-b border-purple-200">
                      <td className="p-2">Stratégique</td>
                      <td className="p-2">10M€ - 50M€</td>
                      <td className="p-2">Comité de Trésorerie</td>
                    </tr>
                    <tr>
                      <td className="p-2">Exceptionnel</td>
                      <td className="p-2">&gt; 50M€</td>
                      <td className="p-2">Conseil d'Administration</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Conventions de trésorerie</h3>
            
            <div className="bg-teal-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-teal-900 mb-4">Éléments clés des conventions</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-teal-800 mb-2">Clauses essentielles</h5>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Définition des parties contractantes</li>
                    <li>• Modalités de centralisation</li>
                    <li>• Conditions de rémunération</li>
                    <li>• Durée et résiliation</li>
                    <li>• Garanties et sûretés</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h5 className="font-semibold text-teal-800 mb-2">Aspects juridiques</h5>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Respect du monopole bancaire</li>
                    <li>• Conformité aux statuts</li>
                    <li>• Validation par les organes sociaux</li>
                    <li>• Documentation des prix de transfert</li>
                    <li>• Clause de sauvegarde</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Reporting et tableaux de bord</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Reporting quotidien</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Position de trésorerie</li>
                  <li>• Flux prévisionnels</li>
                  <li>• Opérations du jour</li>
                  <li>• Alertes de limite</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Reporting mensuel</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Performance des placements</li>
                  <li>• Coût de financement</li>
                  <li>• Analyse des écarts</li>
                  <li>• Indicateurs de risque</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">Reporting trimestriel</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Bilan de la politique</li>
                  <li>• Évolution des risques</li>
                  <li>• Benchmarking</li>
                  <li>• Recommandations</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Gestion des risques opérationnels</h3></div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Exercice de gouvernance</h3>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <h4 className="font-semibold text-purple-900 mb-3">Cas pratique : Mise en place d'une matrice de pouvoirs - Groupe ZETA</h4>
              <div className="mb-4">
                <p className="text-purple-800 mb-2"><strong>Situation :</strong> Le groupe ZETA souhaite définir sa matrice de pouvoirs pour les opérations de trésorerie :</p>
                <ul className="text-purple-700 text-sm space-y-1 mb-3">
                  <li>• Trésorier : autorisations jusqu'à 2M€</li>
                  <li>• Directeur Financier : autorisations de 2M€ à 15M€</li>
                  <li>• Comité de Trésorerie : autorisations de 15M€ à 75M€</li>
                  <li>• Conseil d'Administration : au-delà de 75M€</li>
                </ul>
                <p className="text-purple-800 text-sm"><strong>Question :</strong> Classifiez les opérations suivantes selon le niveau d'autorisation requis :</p>
                <ul className="text-purple-700 text-sm space-y-1 mb-3">
                  <li>a) Placement de 800 000 € à 3 mois</li>
                  <li>b) Financement de 25 000 000 € pour acquisition</li>
                  <li>c) Opération de change de 5 000 000 €</li>
                  <li>d) Émission obligataire de 100 000 000 €</li>
                </ul>
              </div>
              
              <details className="bg-white p-4 rounded">
                <summary className="font-semibold text-purple-900 cursor-pointer">Voir la solution</summary>
                <div className="mt-3 text-sm text-purple-700">
                  <p><strong>Classification des opérations :</strong></p>
                  <p>a) <strong>Trésorier</strong> - 800 000 € &lt; 2M€ (niveau opérationnel)</p>
                  <p>b) <strong>Comité de Trésorerie</strong> - 25M€ entre 15M€ et 75M€ (niveau stratégique)</p>
                  <p>c) <strong>Directeur Financier</strong> - 5M€ entre 2M€ et 15M€ (niveau tactique)</p>
                  <p>d) <strong>Conseil d'Administration</strong> - 100M€ &gt; 75M€ (niveau exceptionnel)</p>
                  <br/>
                  <p><strong>Justification :</strong> La matrice de pouvoirs permet de s'assurer que chaque décision est prise au niveau approprié selon l'impact financier et stratégique de l'opération.</p>
                </div>
              </details>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-red-900 mb-3">Principaux risques à maîtriser</h4>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-red-800">Risque de fraude</strong>
                      <p className="text-sm text-red-700">Séparation des tâches, double validation, audit régulier</p>
                    </div>
                    <div>
                      <strong className="text-red-800">Risque de système</strong>
                      <p className="text-sm text-red-700">Redondance, sauvegarde, plan de continuité</p>
                    </div>
                    <div>
                      <strong className="text-red-800">Risque de personnel</strong>
                      <p className="text-sm text-red-700">Formation, documentation, suppléance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Audit et conformité</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-gray-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Programme d'audit</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <strong className="text-gray-800">Audit interne</strong>
                      <ul className="text-sm text-gray-700 mt-1 space-y-1">
                        <li>• Revue annuelle des processus</li>
                        <li>• Tests de conformité</li>
                        <li>• Évaluation des contrôles</li>
                        <li>• Recommandations d'amélioration</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-gray-800">Audit externe</strong>
                      <ul className="text-sm text-gray-700 mt-1 space-y-1">
                        <li>• Certification des comptes</li>
                        <li>• Revue des instruments financiers</li>
                        <li>• Validation des valorisations</li>
                        <li>• Conformité réglementaire</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
              <h4 className="font-semibold text-indigo-900 mb-2">Moyen mnémotechnique - CONTRÔLE</h4>
              <ul className="text-indigo-800 space-y-1 text-sm">
                <li><strong>C</strong>omité de gouvernance</li>
                <li><strong>O</strong>rganisation claire</li>
                <li><strong>N</strong>ormes et procédures</li>
                <li><strong>T</strong>ableaux de bord</li>
                <li><strong>R</strong>isques opérationnels</li>
                <li><strong>Ô</strong>utils de reporting</li>
                <li><strong>L</strong>imites et autorisations</li>
                <li><strong>E</strong>valuation et audit</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <Link 
            href="/section-2"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <span>←</span>
            Section II
          </Link>
          <Link 
            href="/quiz"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            Quiz d'évaluation
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}