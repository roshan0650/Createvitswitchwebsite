import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface HomePageProps {
  user: { username: string };
  onLogout: () => void;
}

export default function HomePage({ user, onLogout }: HomePageProps) {
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Reviews', path: '/reviews', description: 'Faculty and Course Reviews' },
    { title: 'Batch Switch', path: '/batch-switch', description: 'Request Batch Change' },
    { title: 'Eduvids', path: '/eduvids', description: 'Educational Videos' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#03045e] text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1>VIT Switch</h1>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-[#02033a]"
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-[#02033a]"
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-[#03045e] mb-2">Welcome, {user.username}</h2>
          <p className="text-gray-600">Select an option to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => navigate(item.path)}
                className="w-full bg-white border border-gray-200 rounded-lg p-6 hover:border-[#03045e] hover:shadow-md transition-all text-left"
              >
                <h3 className="text-[#03045e] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
