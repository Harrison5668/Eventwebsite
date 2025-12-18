
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExhibitorPackages from './components/ExhibitorPackages';
import Speakers from './components/Speakers';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExhibitorPackages />
        <Speakers />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default App;
