
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Hero: React.FC<Props> = ({ t, lang }) => {
  // Select background image based on language
  const bgImage = lang === 'zh' ? '/bg/关于页.jpg' : '/bg/about.jpg';
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with language selection */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage}
          alt="Event background"
          className="w-full h-full object-cover md:object-cover object-center"
          style={{
            minHeight: '100%',
            minWidth: '100%'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
