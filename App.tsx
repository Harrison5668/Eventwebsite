
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Agenda from './components/Agenda';
import Speakers from './components/Speakers';
import Venue from './components/Venue';
import Ecosystem from './components/Ecosystem';
import Sponsorship from './components/Sponsorship';
import Partners from './components/Partners';
import Ticketing from './components/Ticketing';
import Footer from './components/Footer';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<'zh' | 'en'>('en');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="relative min-h-screen">
      <Navbar t={t.nav} toggleLang={toggleLang} currentLang={lang} />
      <main>
        <Hero t={t.hero} lang={lang} />
        <ValueProposition t={t.valueProposition} />
        <Speakers t={t.speakers} lang={lang} />
        <Agenda t={t.agenda} />
        <Venue t={t.venue} />
        <Ecosystem t={t.ecosystem} lang={lang} />
        <Sponsorship t={t.sponsorship} lang={lang} />
        <Partners t={t.partners} lang={lang} />
        <Ticketing t={t.ticketing} />
      </main>
      <Footer t={t.footer} lang={lang} />
    </div>
  );
};

export default App;
