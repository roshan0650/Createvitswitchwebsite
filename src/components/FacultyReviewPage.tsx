import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft } from 'lucide-react';

export default function FacultyReviewPage() {
  const navigate = useNavigate();
  const [rollNo, setRollNo] = useState('');
  const [year, setYear] = useState('');
  const [branch, setBranch] = useState('');
  const [faculty, setFaculty] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
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
            onClick={() => navigate('/reviews')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1>Faculty Review</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="rollNo">Roll Number</Label>
            <Input
              id="rollNo"
              type="text"
              placeholder="Enter your roll number"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Current Year</Label>
            <Select value={year} onValueChange={setYear} required>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">First Year</SelectItem>
                <SelectItem value="2">Second Year</SelectItem>
                <SelectItem value="3">Third Year</SelectItem>
                <SelectItem value="4">Fourth Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="branch">Branch</Label>
            <Select value={branch} onValueChange={setBranch} required>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cse">CSE</SelectItem>
                <SelectItem value="csm">CSM</SelectItem>
                <SelectItem value="csd">CSD</SelectItem>
                <SelectItem value="csit">CSIT</SelectItem>
                <SelectItem value="ece">ECE</SelectItem>
                <SelectItem value="eee">EEE</SelectItem>
                <SelectItem value="mech">MECH</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="faculty">Faculty Name</Label>
            <Input
              id="faculty"
              type="text"
              placeholder="Enter faculty name"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              required
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="review">Review</Label>
            <Textarea
              id="review"
              placeholder="Write your review (max 1000 words)"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              maxLength={1000}
              rows={8}
              className="border-gray-300 resize-none"
            />
            <p className="text-sm text-gray-500">{review.length}/1000 characters</p>
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
