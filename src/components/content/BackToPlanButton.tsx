import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToPlanButton() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-4 sm:mb-6 lg:mb-8 transition-colors text-sm sm:text-base"
    >
      <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
      Retour au plan du cours
    </Link>
  );
}