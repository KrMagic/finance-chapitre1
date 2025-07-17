'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Brain, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la principale difference entre le cash pooling physique et notionnel ?",
    options: [
      "Le cash pooling physique est plus risque",
      "Le cash pooling notionnel implique un transfert effectif de fonds",
      "Le cash pooling physique implique un transfert effectif de fonds",
      "Il n'y a aucune difference"
    ],
    correct: 2,
    explanation: "Le cash pooling physique implique un transfert effectif des soldes vers un compte centralise, tandis que le notionnel ne fait que compenser virtuellement les soldes."
  },
  {
    id: 2,
    question: "Que signifie l'acronyme CORP dans le contexte de la gestion centralisee ?",
    options: [
      "Centralisation, Optimisation, Risques, Processus",
      "Controle, Organisation, Reporting, Performance",
      "Cash, Operations, Risk, Profit",
      "Coordination, Objectifs, Résultats, Pilotage"
    ],
    correct: 0,
    explanation: "CORP represente les 4 piliers : Centralisation, Optimisation, Risques, Processus."
  },
  {
    id: 3,
    question: "Quel est l'avantage principal du netting multilateral par rapport au bilateral ?",
    options: [
      "Il est plus simple a mettre en oeuvre",
      "Il permet une plus grande economie de flux",
      "Il necessite moins de documentation",
      "Il est moins risque"
    ],
    correct: 1,
    explanation: "Le netting multilateral permet de compenser les flux entre plusieurs entites simultanement, generant ainsi de plus grandes economies de flux."
  },
  {
    id: 4,
    question: "Dans la hierarchie des placements, quelle est la duree typique du niveau 2 ?",
    options: [
      "0-7 jours",
      "1-3 mois",
      "3-12 mois",
      "Plus de 12 mois"
    ],
    correct: 1,
    explanation: "Le niveau 2 correspond a la liquidite court terme avec une duree de 1-3 mois (depots a terme, certificats de depot)."
  },
  {
    id: 5,
    question: "Que signifie l'acronyme PROFIT pour l'optimisation financiere ?",
    options: [
      "Performance, Rentabilite, Optimisation, Financement, Investissement, Tresorerie",
      "Placements, Risques, Outils, Financements, Indicateurs, Taxation",
      "Processus, Reporting, Organisation, Flux, Instruments, Techniques",
      "Politique, Regles, Objectifs, Formation, Information, Transparence"
    ],
    correct: 1,
    explanation: "PROFIT : Placements optimises, Risques maitrises, Outils de mesure, Financements centralises, Indicateurs de performance, Taxation optimisee."
  },
  {
    id: 6,
    question: "Quel compte comptable est utilisé pour enregistrer les opérations de cash pooling ?",
    options: [
      "451 - Groupe",
      "512 - Banque",
      "6615 - Interets des comptes courants",
      "768 - Autres produits financiers"
    ],
    correct: 0,
    explanation: "Le compte 451 'Groupe' est le compte principal pour enregistrer les avances et receptions de fonds dans le cadre du cash pooling."
  },
  {
    id: 7,
    question: "Selon la reglementation francaise, quels articles du Code monetaire et financier encadrent le cash pooling ?",
    options: [
      "L312-2 et L511-7",
      "L511-5 et L312-1",
      "L312-3 et L511-8",
      "L511-6 et L312-4"
    ],
    correct: 0,
    explanation: "Les articles L312-2 et L511-7 du Code monetaire et financier autorisent les operations de credit entre filiales d'un meme groupe."
  },
  {
    id: 8,
    question: "Dans une matrice de pouvoirs, quel niveau d'autorisation est requis pour une operation de 25M EUR ?",
    options: [
      "Tresorier (< 1M EUR)",
      "Directeur Financier (1-10M EUR)",
      "Comite de Tresorerie (10-50M EUR)",
      "Conseil d'Administration (> 50M EUR)"
    ],
    correct: 2,
    explanation: "Une operation de 25M EUR releve du niveau strategique et necessite l'autorisation du Comite de Tresorerie."
  },
  {
    id: 9,
    question: "Quelle est la principale exigence fiscale pour la remuneration des excedents en cash pooling ?",
    options: [
      "Taux fixe de 2%",
      "Taux de marche",
      "Taux preferentiel groupe",
      "Aucune remuneration"
    ],
    correct: 1,
    explanation: "La remuneration des excedents doit respecter le principe de pleine concurrence et etre au taux de marche pour eviter les redressements fiscaux."
  },
  {
    id: 10,
    question: "Que signifie l'acronyme ZBA dans le contexte du cash pooling ?",
    options: [
      "Zero Banking Account",
      "Zone Business Area",
      "Zero Balancing Account",
      "Zonal Banking Agreement"
    ],
    correct: 2,
    explanation: "ZBA signifie Zero Balancing Account, une technique de cash pooling qui remet les comptes a zero quotidiennement."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-orange-100 p-3 rounded-full">
                <Brain className="h-8 w-8 text-orange-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Resultats du Quiz</h1>
            </div>
            
            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${
                percentage >= 80 ? 'text-green-600' : 
                percentage >= 60 ? 'text-orange-600' : 'text-red-600'
              }`}>
                {percentage}%
              </div>
              <p className="text-xl text-gray-700 mb-2">
                Vous avez obtenu {score} bonnes reponses sur {questions.length}
              </p>
              
              <div className={`inline-block px-6 py-2 rounded-full text-white font-medium ${
                percentage >= 80 ? 'bg-green-500' : 
                percentage >= 60 ? 'bg-orange-500' : 'bg-red-500'
              }`}>
                {percentage >= 80 ? 'Excellent !' : 
                  percentage >= 60 ? 'Bien !' : 'A ameliorer'}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {questions.map((question, index) => (
                <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    {selectedAnswers[index] === question.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className="font-medium">Question {index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-600">{question.question}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={resetQuiz}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
              
              <Link 
                href="/cas-pratiques"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                Cas Pratiques
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-4xl">
        <BackToPlanButton />
        
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-orange-100 p-2 sm:p-3 rounded-full mx-auto sm:mx-0">
              <Brain className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-orange-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center sm:text-left">Quiz d'evaluation</h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-gray-600">Question {currentQuestion + 1} sur {questions.length}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {question.question}
                </h2>
                
                <div className="space-y-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswers[currentQuestion] === index;
                    const isCorrect = index === question.correct;
                    const showAnswer = showExplanation;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => !showExplanation && handleAnswer(index)}
                        disabled={showExplanation}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          showAnswer
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : isSelected
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-gray-50'
                            : isSelected
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            showAnswer
                              ? isCorrect
                                ? 'border-green-500 bg-green-500'
                                : isSelected
                                ? 'border-red-500 bg-red-500'
                                : 'border-gray-300'
                              : isSelected
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-300'
                          }`}>
                            {showAnswer && isCorrect && <CheckCircle className="h-4 w-4 text-white" />}
                            {showAnswer && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-white" />}
                            {isSelected && !showAnswer && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <span className="font-medium">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6"
                >
                  <h3 className="font-semibold text-blue-900 mb-2">Explication</h3>
                  <p className="text-blue-800">{question.explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          
          {showExplanation && (
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les resultats'}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}