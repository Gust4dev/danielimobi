import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ListingsGrid } from './components/ListingsGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

const Divider = () => <div className="w-full h-[1px] bg-accent shadow-sm" />;

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white text-primary overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
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

export default App;