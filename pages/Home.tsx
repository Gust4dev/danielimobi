import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { ListingsGrid } from '../components/ListingsGrid';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { Authority } from '../components/Authority';

const Divider = () => <div className="w-full h-[1px] bg-accent shadow-sm" />;

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="w-full min-h-screen bg-white text-primary overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Authority />
      <Divider />
      <FeaturedProjects />
      <Divider />
      <ListingsGrid />
      <Divider />
      <Testimonials />
      <Divider />
      <Footer />
    </main>
  );
};
