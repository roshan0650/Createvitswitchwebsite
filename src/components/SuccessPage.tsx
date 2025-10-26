import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </div>
        <h2 className="text-[#03045e] mb-4">Successfully Submitted</h2>
        <p className="text-gray-600 mb-8">Your review has been submitted successfully.</p>
        <Button 
          onClick={() => navigate('/home')}
          className="bg-[#03045e] hover:bg-[#02033a]"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
