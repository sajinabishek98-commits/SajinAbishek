import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/modern/Navigation';
import HomePage from './pages/ModernHomePage';
import CaseStudyPage from './pages/ModernCaseStudyPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-['Inter'] antialiased transition-colors duration-300">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-study/:projectId" element={<CaseStudyPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}