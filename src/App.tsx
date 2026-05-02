/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Noise from './components/Noise';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Work from './pages/Work';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ProjectDetail from './pages/ProjectDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - Routes does accept key for AnimatePresence */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <SmoothScroll>
        <div className="relative min-h-screen bg-obsidian text-silver selection:bg-silver selection:text-obsidian">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
          <CustomCursor />
          <Noise />
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

