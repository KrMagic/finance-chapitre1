import CourseHeader from '@/components/home/CourseHeader';
import CoursePlan from '@/components/home/CoursePlan';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Gestion Centralisee de Tresorerie</h1>
        <p className="text-xl text-gray-700 mb-8">De la centralisation des flux a l\'optimisation financiere</p>
        <CourseHeader />
        <CoursePlan />
      </div>
    </main>
  );
}
