
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Hero: React.FC<Props> = ({ t, lang }) => {
  // Select background images based on language and device
  const bgImageDesktop = lang === 'zh' ? '/bg/关于页.jpg' : '/bg/about.jpg';
  const bgImageMobile = lang === 'zh' ? '/bg/关于页手机端.jpg' : '/bg/aboutmobile.jpg';
  
  return (
    <section id="hero" className="relative md:min-h-screen overflow-hidden pt-20 md:pt-0">
      {/* Mobile background image */}
      <img 
        src={bgImageMobile}
        alt="Event background"
        className="w-full h-auto md:hidden"
      />
      
      {/* Desktop background image */}
      <img 
        src={bgImageDesktop}
        alt="Event background"
        className="hidden md:block md:absolute md:inset-0 md:w-full md:h-full md:object-cover"
      />
    </section>
  );
};

export default Hero;
