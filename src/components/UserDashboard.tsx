import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, User, FileText, RefreshCw, Video } from 'lucide-react';

interface UserDashboardProps {
  user: { username: string };
  onLogout: () => void;
}

export default function UserDashboard({ user, onLogout }: UserDashboardProps) {
  const navigate = useNavigate();

  const activityStats = [
    { label: 'Reviews Submitted', value: '5', icon: FileText },
    { label: 'Batch Requests', value: '2', icon: RefreshCw },
    { label: 'Videos Watched', value: '12', icon: Video }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#03045e] text-white p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-[#02033a]"
              onClick={() => navigate('/home')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1>Dashboard</h1>
          </div>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-[#02033a]"
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-full bg-[#03045e] flex items-center justify-center text-white">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-[#03045e]">{user.username}</h2>
              <p className="text-gray-600">Student</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-[#03045e] mb-4">Activity Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activityStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-5 w-5 text-[#03045e]" />
                  <span className="text-2xl text-[#03045e]">{stat.value}</span>
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[#03045e] mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/reviews')}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#03045e] hover:shadow-md transition-all text-left"
            >
              <p className="text-gray-800">Submit New Review</p>
            </button>
            <button
              onClick={() => navigate('/batch-switch')}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#03045e] hover:shadow-md transition-all text-left"
            >
              <p className="text-gray-800">Request Batch Switch</p>
            </button>
            <button
              onClick={() => navigate('/eduvids')}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#03045e] hover:shadow-md transition-all text-left"
            >
              <p className="text-gray-800">Browse Educational Videos</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
