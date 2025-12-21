
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Hero: React.FC<Props> = ({ t, lang }) => {
  // Select background image based on language
  const bgImage = lang === 'zh' ? '/bg/关于页.jpg' : '/bg/about.jpg';
  
  return (
    <section id="hero" className="relative md:min-h-screen overflow-hidden">
      {/* Background image with language selection */}
      <img 
        src={bgImage}
        alt="Event background"
        className="w-full h-auto md:absolute md:inset-0 md:w-full md:h-full md:object-cover"
      />
    </section>
  );
};

export default Hero;
