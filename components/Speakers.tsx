
import React, { useState, useRef } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Speakers: React.FC<Props> = ({ t, lang }) => {
  const [activeBio, setActiveBio] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Speaker data with local profile images from /images folder
  const speakers = [
    { 
      name: lang === 'zh' ? '张红梅' : 'Diana Zhang', 
      title: lang === 'zh' ? '亚太世界贸易商务联盟副会长' : 'Vice President, APAC World Trade Group', 
      bio: lang === 'zh' 
        ? '张红梅女士，现任亚太世界贸易商务联盟副会长，是长期活跃于美国硅谷的投资人。致力于推动中美商业交流。' 
        : 'Diana Zhang currently serves as Vice President of APAC World Trade Group and is a long-term active investor in Silicon Valley.',
      img: '/images/张红梅Diana Zhang.jpg' 
    },
    { 
      name: lang === 'zh' ? '赵兢' : 'Jing Zhao Cesarone', 
      title: lang === 'zh' ? '全球 CSR 基金会创始人' : 'Founder & CEO, Global CSR Foundation', 
      bio: lang === 'zh'
        ? '赵兢女士是全球 CSR 基金会创始人兼首席执行官，拥有三十年跨文化战略、可持续发展与 NGO 管理经验。'
        : 'Jing Zhao Cesarone is the Founder and CEO of the Global CSR Foundation with over 30 years of experience in cross-cultural strategy.',
      img: '/images/赵兢Jing Cesarone Zhaojpg.jpg' 
    },
    { 
      name: lang === 'zh' ? '杨依依' : 'Elaine Yang', 
      title: lang === 'zh' ? 'AI 101 Labs 创始人' : 'Founder, AI 101 Labs', 
      bio: lang === 'zh'
        ? 'Elaine Yang 为 AI 101 Labs 创始人，活跃于 AI × Web3 × RWA 的早期投资人。深耕 AI 研究、GTM 策略。'
        : 'Elaine Yang is the Founder of AI 101 Labs and an early investor active in AI, Web3, and RWA projects.',
      img: '/images/杨依依Elaine Yang.jpg' 
    },
    { 
      name: lang === 'zh' ? '林哲冰' : 'Zhebing Lin', 
      title: lang === 'zh' ? 'Magic Ice Cube 创始人' : 'Founder, Magic Ice Cube', 
      bio: lang === 'zh'
        ? '林哲冰是 Magic Ice Cube 创始人，其跨国贸易平台在四年内实现 3.5 亿美元营收。'
        : 'Zhebing Lin founded Magic Ice Cube, building it into a multinational trading platform with $350M revenue in four years.',
      img: '/images/林哲冰Ice Lin.png' 
    },
    { 
      name: lang === 'zh' ? '魏海鹰' : 'Haiying Wei', 
      title: lang === 'zh' ? '香港寰宇投资董事长' : 'Chairman, Horizon International Investment', 
      bio: lang === 'zh'
        ? '魏海鹰构建了横跨制造、投资、金融等领域的产业矩阵，旗下香港寰宇投资为香港联交所上市公司。'
        : 'Haiying Wei has built an industrial matrix spanning manufacturing, investment, and finance. His company is listed on the HK Stock Exchange.',
      img: '/images/魏海鹰.jpeg' 
    },
    { 
      name: 'Viola He', 
      title: lang === 'zh' ? '国际电商品牌化运营数据分析师协会会长' : 'President, Intl E-commerce Brand Analytics Association', 
      bio: lang === 'zh'
        ? '美国顶级 MCN 联合创始人，TikTok 5千万粉博主 Michael Le 合伙人。专注品牌出海8年，以品牌美学与数据分析帮助品牌全球化。'
        : 'Co-founder of a top U.S. MCN, partner of TikTok influencer Michael Le (50M followers). 8 years in international brand expansion using data analytics.',
      img: null 
    },
    { 
      name: lang === 'zh' ? '蔡继军' : 'Jijun Cai', 
      title: lang === 'zh' ? 'GPTDAO 联合发起人 & FlowGen 创始人' : 'Co-founder GPTDAO & Founder FlowGen', 
      bio: lang === 'zh'
        ? '连续创业者，2023年在硅谷共同创办全球最大生成式AI社区GPTDAO，后创立FlowGen，用AI替代营销团队实现100倍降本增效。'
        : 'Serial entrepreneur. Co-founded GPTDAO in 2023, the largest generative AI community globally. Founded FlowGen to replace marketing teams with AI.',
      img: null 
    },
    { 
      name: lang === 'zh' ? '陈喆' : 'Zhe Chen', 
      title: lang === 'zh' ? '法拉第未来联合创始人' : 'Co-founder, Faraday Future', 
      bio: lang === 'zh'
        ? '陈喆是法拉第未来（Faraday Future）联合创始人，深耕新能源汽车与智能出行领域。'
        : 'Zhe Chen is a co-founder of Faraday Future, focusing on new energy vehicles and smart mobility.',
      img: '/images/陈喆.png' 
    },
    { 
      name: lang === 'zh' ? '孙溪唯' : 'Tammy Sun', 
      title: lang === 'zh' ? 'AI Reinvent Ventures 创始人' : 'Founder, AI Reinvent Ventures', 
      bio: lang === 'zh'
        ? '硅谷知名投资人，专注于 Pre-IPO 硬科技项目投资。'
        : 'Renowned Silicon Valley investor, focusing on pre-IPO hard-tech projects.',
      img: '/images/孙溪唯Tammy Sun.png' 
    },
    { 
      name: lang === 'zh' ? '李尚龙' : 'Shanglong Li', 
      title: lang === 'zh' ? '千万级大V AI博主' : 'Major AI Influencer (10M+ Followers)', 
      bio: lang === 'zh'
        ? '李尚龙是拥有千万级粉丝的AI领域意见领袖，致力于AI知识普及与行业洞察分享。'
        : 'Shanglong Li is an AI influencer with a follower base in the millions, dedicated to AI knowledge sharing.',
      img: null 
    },
    { 
      name: 'Jerry Yang', 
      title: lang === 'zh' ? 'AI Robotics Alliance 主席' : 'Chairman, AI Robotics Alliance', 
      bio: lang === 'zh'
        ? 'Jerry Yang 现任 AI Robotics Alliance 主席，推动AI与机器人技术的产业融合与创新发展。'
        : 'Jerry Yang serves as Chairman of the AI Robotics Alliance, driving AI and robotics industry integration.',
      img: null 
    }
  ];

  // Scroll handler for horizontal navigation
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="speakers" className="py-32 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold font-bold tracking-widest text-xs uppercase mb-12">{t.subtitle}</p>
      </div>
      
      {/* Horizontal scrolling container with navigation arrows */}
      <div className="relative">
        {/* Left scroll button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 border border-gold/30 text-gold hover:bg-gold/20 hover:border-gold transition-all flex items-center justify-center"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right scroll button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 border border-gold/30 text-gold hover:bg-gold/20 hover:border-gold transition-all flex items-center justify-center"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable speaker cards */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-16 pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {speakers.map((s, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl cursor-pointer hover:border-gold/50 transition-all flex flex-col flex-shrink-0 w-[280px]"
              onClick={() => setActiveBio(activeBio === s.name ? null : s.name)}
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gold/20 mb-6 bg-gradient-to-br from-gold/10 to-transparent">
                {s.img ? (
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                ) : (
                  // Placeholder avatar for speakers without images
                  <div className="w-full h-full flex items-center justify-center text-gold/40 text-3xl font-bold">
                    {s.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-lg mb-1">{s.name}</h3>
              <p className="text-[10px] text-gold font-bold uppercase tracking-tight leading-tight min-h-[28px]">{s.title}</p>
              
              {activeBio === s.name && (
                <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-gray-400 text-left leading-relaxed animate-fade-in">
                  {s.bio}
                </div>
              )}
              
              <div className="mt-auto pt-4 text-[9px] text-gray-600 uppercase font-bold tracking-widest">
                {activeBio === s.name ? t.less : t.more}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll hint indicator */}
      <div className="flex justify-center mt-4 gap-2">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">
          {lang === 'zh' ? '← 左右滑动查看更多 →' : '← Scroll to see more →'}
        </span>
      </div>
    </section>
  );
};

export default Speakers;
