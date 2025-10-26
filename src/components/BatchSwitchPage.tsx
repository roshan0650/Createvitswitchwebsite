import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ArrowLeft } from 'lucide-react';

export default function BatchSwitchPage() {
  const navigate = useNavigate();
  const [currentBatch, setCurrentBatch] = useState('');
  const [preferredBatch, setPreferredBatch] = useState('');
  const [currentCGPA, setCurrentCGPA] = useState('');
  const [cgpaRange, setCgpaRange] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/batch-success');
  };

  const handleCancel = () => {
    navigate('/home');
  };

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
          <h1>Batch Switch</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-[#03045e] mb-2">Request Batch Change</h2>
          <p className="text-gray-600">Fill in the details to request a batch switch</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="currentBatch">Current Batch</Label>
            <Input
              id="currentBatch"
              type="text"
              placeholder="e.g., A1, B2, etc."
              value={currentBatch}
              onChange={(e) => setCurrentBatch(e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredBatch">Preferred Batch</Label>
            <Input
              id="preferredBatch"
              type="text"
              placeholder="e.g., A2, B1, etc."
              value={preferredBatch}
              onChange={(e) => setPreferredBatch(e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentCGPA">Current CGPA</Label>
            <Input
              id="currentCGPA"
              type="number"
              step="0.01"
              min="0"
              max="10"
              placeholder="e.g., 8.5"
              value={currentCGPA}
              onChange={(e) => setCurrentCGPA(e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cgpaRange">Preferred CGPA Range</Label>
            <Input
              id="cgpaRange"
              type="text"
              placeholder="e.g., 8.0 - 9.0"
              value={cgpaRange}
              onChange={(e) => setCgpaRange(e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          <div className="flex gap-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-[#03045e] hover:bg-[#02033a]"
            >
              Submit
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
