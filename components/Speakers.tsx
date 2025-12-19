
import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Speakers: React.FC<Props> = ({ t, lang }) => {
  const [activeBio, setActiveBio] = useState<string | null>(null);

  const speakers = [
    { 
      name: lang === 'zh' ? '张红梅' : 'Diana Zhang', 
      title: lang === 'zh' ? '亚太世界贸易商务联盟副会长' : 'Vice President, APAC World Trade Group', 
      bio: lang === 'zh' 
        ? '张红梅女士，现任亚太世界贸易商务联盟副会长，是长期活跃于美国硅谷的投资人。致力于推动中美商业交流。' 
        : 'Diana Zhang currently serves as Vice President of APAC World Trade Group and is a long-term active investor in Silicon Valley. She is dedicated to promoting business exchanges and capital cooperation.',
      img: 'https://picsum.photos/seed/diana/400/400' 
    },
    { 
      name: lang === 'zh' ? '赵兢' : 'Jing Zhao Cesarone', 
      title: lang === 'zh' ? '全球 CSR 基金会创始人' : 'Founder & CEO, Global CSR Foundation', 
      bio: lang === 'zh'
        ? '赵兢女士是全球 CSR 基金会创始人兼首席执行官，拥有三十年跨文化战略、可持续发展与 NGO 管理经验。'
        : 'Jing Zhao Cesarone is the Founder and CEO of the Global CSR Foundation with over 30 years of experience in cross-cultural strategy and sustainable development.',
      img: 'https://picsum.photos/seed/jing/400/400' 
    },
    { 
      name: lang === 'zh' ? '杨依依' : 'Elaine Yang', 
      title: lang === 'zh' ? 'AI 101 Labs 创始人' : 'Founder, AI 101 Labs', 
      bio: lang === 'zh'
        ? 'Elaine Yang 为 AI 101 Labs 创始人，活跃于 AI × Web3 × RWA 的早期投资人。深耕 AI 研究、GTM 策略。'
        : 'Elaine Yang is the Founder of AI 101 Labs and an early investor active in AI, Web3, and RWA projects, focusing on GTM strategy.',
      img: 'https://picsum.photos/seed/elaine/400/400' 
    },
    { 
      name: lang === 'zh' ? '林哲冰' : 'Zhebing Lin', 
      title: lang === 'zh' ? 'Magic Ice Cube 创始人' : 'Founder, Magic Ice Cube', 
      bio: lang === 'zh'
        ? '林哲冰是 Magic Ice Cube 创始人，其跨国贸易平台在四年内实现 3.5 亿美元营收。'
        : 'Zhebing Lin founded Magic Ice Cube, building it into a multinational trading platform with $350 million in revenue within four years.',
      img: 'https://picsum.photos/seed/magic/400/400' 
    },
    { 
      name: lang === 'zh' ? '魏海鹰' : 'Haiying Wei', 
      title: lang === 'zh' ? '香港寰宇投资董事长' : 'Chairman, Horizon International Investment', 
      bio: lang === 'zh'
        ? '魏海鹰构建了横跨制造、投资、金融等领域的产业矩阵，旗下香港寰宇投资为香港联交所上市公司。'
        : 'Haiying Wei has built an industrial matrix spanning manufacturing, investment, and finance. His company is listed on the HK Stock Exchange.',
      img: 'https://picsum.photos/seed/wei/400/400' 
    }
  ];

  return (
    <section id="speakers" className="py-32 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold font-bold tracking-widest text-xs uppercase mb-20">{t.subtitle}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {speakers.map((s, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl cursor-pointer hover:border-gold/50 transition-all flex flex-col"
              onClick={() => setActiveBio(activeBio === s.name ? null : s.name)}
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gold/20 mb-6">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <h3 className="font-bold text-lg mb-1">{s.name}</h3>
              <p className="text-[10px] text-gold font-bold uppercase tracking-tight leading-tight">{s.title}</p>
              
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
    </section>
  );
};

export default Speakers;
