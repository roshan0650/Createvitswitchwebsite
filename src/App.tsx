import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ReviewsPage from './components/ReviewsPage';
import FacultyReviewPage from './components/FacultyReviewPage';
import CourseReviewPage from './components/CourseReviewPage';
import BatchSwitchPage from './components/BatchSwitchPage';
import EduvidsPage from './components/EduvidsPage';
import SuccessPage from './components/SuccessPage';
import BatchSwitchSuccessPage from './components/BatchSwitchSuccessPage';
import UserDashboard from './components/UserDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: '' });

  const handleLogin = (username: string) => {
    setIsLoggedIn(true);
    setUser({ username });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ username: '' });
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isLoggedIn ? 
            <Navigate to="/home" /> : 
            <LoginPage onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/home" 
          element={
            isLoggedIn ? 
            <HomePage user={user} onLogout={handleLogout} /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/reviews" 
          element={
            isLoggedIn ? 
            <ReviewsPage /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/faculty-review" 
          element={
            isLoggedIn ? 
            <FacultyReviewPage /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/course-review" 
          element={
            isLoggedIn ? 
            <CourseReviewPage /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/batch-switch" 
          element={
            isLoggedIn ? 
            <BatchSwitchPage /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/eduvids" 
          element={
            isLoggedIn ? 
            <EduvidsPage /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/success" 
          element={
            isLoggedIn ? 
            <SuccessPage /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/batch-success" 
          element={
            isLoggedIn ? 
            <BatchSwitchSuccessPage /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isLoggedIn ? 
            <UserDashboard user={user} onLogout={handleLogout} /> : 
            <Navigate to="/" />
          } 
        />
      </Routes>
    </Router>
  );
}
