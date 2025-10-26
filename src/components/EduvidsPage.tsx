import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  url: string;
}

const videoData: Record<string, Video[]> = {
  cse: [
    { id: '1', title: 'Data Structures and Algorithms', url: 'https://www.youtube.com/watch?v=8hly31xKli0' },
    { id: '2', title: 'Operating Systems Fundamentals', url: 'https://www.youtube.com/watch?v=vBURTt97EkA' },
    { id: '3', title: 'Database Management Systems', url: 'https://www.youtube.com/watch?v=c5HAwKX-suM' },
    { id: '4', title: 'Computer Networks', url: 'https://www.youtube.com/watch?v=IPvYjXCsTg8' }
  ],
  csm: [
    { id: '1', title: 'Machine Learning Basics', url: 'https://www.youtube.com/watch?v=ukzFI9rgwfU' },
    { id: '2', title: 'Deep Learning Fundamentals', url: 'https://www.youtube.com/watch?v=aircAruvnKk' },
    { id: '3', title: 'Python for Data Science', url: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI' },
    { id: '4', title: 'Neural Networks', url: 'https://www.youtube.com/watch?v=bfmFfD2RIcg' }
  ],
  csd: [
    { id: '1', title: 'Data Science with Python', url: 'https://www.youtube.com/watch?v=ua-CiDNNj30' },
    { id: '2', title: 'Data Visualization', url: 'https://www.youtube.com/watch?v=_YWwU-gJI5U' },
    { id: '3', title: 'Big Data Analytics', url: 'https://www.youtube.com/watch?v=bAyrObl7TYE' },
    { id: '4', title: 'Statistical Analysis', url: 'https://www.youtube.com/watch?v=xxpc-HPKN28' }
  ],
  csit: [
    { id: '1', title: 'Cloud Computing Essentials', url: 'https://www.youtube.com/watch?v=M988_fsOSWo' },
    { id: '2', title: 'Information Security', url: 'https://www.youtube.com/watch?v=inWWhr5tnEA' },
    { id: '3', title: 'Cybersecurity Fundamentals', url: 'https://www.youtube.com/watch?v=hXSFdwIOfnE' },
    { id: '4', title: 'Network Security', url: 'https://www.youtube.com/watch?v=inWWhr5tnEA' }
  ]
};

export default function EduvidsPage() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
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
          <h1>Eduvids</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="text-[#03045e] mb-2">Educational Videos</h2>
          <p className="text-gray-600">Select your course to view recommended videos</p>
        </div>

        <div className="mb-8">
          <Label htmlFor="course">Select Course</Label>
          <Select value={selectedCourse} onValueChange={setSelectedCourse}>
            <SelectTrigger className="border-gray-300 max-w-md">
              <SelectValue placeholder="Choose a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cse">CSE - Computer Science Engineering</SelectItem>
              <SelectItem value="csm">CSM - Computer Science with Machine Learning</SelectItem>
              <SelectItem value="csd">CSD - Computer Science with Data Science</SelectItem>
              <SelectItem value="csit">CSIT - Computer Science with Information Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedCourse && (
          <div className="space-y-4">
            <h3 className="text-[#03045e]">Recommended Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videoData[selectedCourse].map((video) => (
                <button
                  key={video.id}
                  onClick={() => handleVideoClick(video.url)}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#03045e] hover:shadow-md transition-all text-left group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-gray-800">{video.title}</p>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#03045e] flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
