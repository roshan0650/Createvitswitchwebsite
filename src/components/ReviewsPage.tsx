import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function ReviewsPage() {
  const navigate = useNavigate();

  const reviewOptions = [
    { title: 'Faculty Review', path: '/faculty-review', description: 'Rate and review faculty members' },
    { title: 'Course Review', path: '/course-review', description: 'Rate and review courses' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#03045e] text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white hover:bg-[#02033a]"
            onClick={() => navigate('/home')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1>Reviews</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-[#03045e] mb-2">Select Review Type</h2>
          <p className="text-gray-600">Choose what you would like to review</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewOptions.map((option, index) => (
            <motion.div
              key={option.path}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => navigate(option.path)}
                className="w-full bg-white border border-gray-200 rounded-lg p-6 hover:border-[#03045e] hover:shadow-md transition-all text-left"
              >
                <h3 className="text-[#03045e] mb-2">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
