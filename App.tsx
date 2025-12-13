import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails').then(m => ({ default: m.ProjectDetails })));
const SalesDetails = lazy(() => import('./pages/SalesDetails').then(m => ({ default: m.SalesDetails })));

// Loading fallback component - minimal for fast render
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empreendimento/:id" element={<ProjectDetails />} />
          <Route path="/vendas/:id" element={<SalesDetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;