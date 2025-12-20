
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Ecosystem: React.FC<Props> = ({ t, lang }) => {
  const regions = [
    { name: 'NORTH AMERICA', img: '🌎' },
    { name: 'LATIN AMERICA', img: '🌍' },
    { name: 'EUROPE', img: '🌍' },
    { name: 'AFRICA & THE MIDDLE EAST', img: '🌍' },
    { name: 'ASIA & THE PACIFIC', img: '🌏', active: true }
  ];

  const cities = [
    { en: "AMTZ", zh: "AMTZ" },
    { en: "Amaravati", zh: "阿马拉瓦蒂" },
    { en: "Anyang", zh: "安阳" },
    { en: "Bengaluru", zh: "班加罗尔" },
    { en: "Bhubaneswar", zh: "布巴内斯瓦尔" },
    { en: "Binh Duong New City", zh: "平阳新城" },
    { en: "Changsha Wanjiali", zh: "长沙万家丽" },
    { en: "Chennai", zh: "钦奈" },
    { en: "China (Beijing)", zh: "中国（北京）" },
    { en: "Chittagong", zh: "吉大港" },
    { en: "Chongqing", zh: "重庆" },
    { en: "Coimbatore", zh: "哥印拜陀" },
    { en: "Colombo", zh: "科伦坡" },
    { en: "Daejeon", zh: "大田" },
    { en: "Dandong", zh: "丹东" },
    { en: "Delhi-Gurgaon", zh: "德里-古尔冈" },
    { en: "Devanahalli", zh: "德瓦纳哈利" },
    { en: "Dhaka", zh: "达卡" },
    { en: "Future City", zh: "未来城" },
    { en: "Fuzhou", zh: "福州" },
    { en: "Guangzhou", zh: "广州" },
    { en: "Guiyang", zh: "贵阳" },
    { en: "Haikou", zh: "海口" },
    { en: "Hangzhou", zh: "杭州" },
    { en: "Hinjawadi", zh: "欣佳瓦迪" },
    { en: "Hong Kong", zh: "香港" },
    { en: "Hosur", zh: "霍苏尔" },
    { en: "Hyderabad", zh: "海得拉巴" },
    { en: "Indore", zh: "印多尔" },
    { en: "Islamabad", zh: "伊斯兰堡" },
    { en: "Jaipur", zh: "斋浦尔" },
    { en: "Jakarta", zh: "雅加达" },
    { en: "Jeju", zh: "济州" },
    { en: "Jinzhong", zh: "晋中" },
    { en: "Karachi", zh: "卡拉奇" },
    { en: "Kochi", zh: "科钦" },
    { en: "Kolkata", zh: "加尔各答" },
    { en: "Kuala Lumpur", zh: "吉隆坡" },
    { en: "Kunming", zh: "昆明" },
    { en: "Macau", zh: "澳门" },
    { en: "Melbourne", zh: "墨尔本" },
    { en: "Metro Manila", zh: "马尼拉都会" },
    { en: "Mumbai", zh: "孟买" },
    { en: "Nagpur", zh: "那格浦尔" },
    { en: "Nanjing", zh: "南京" },
    { en: "Nanning", zh: "南宁" },
    { en: "Nansha", zh: "南沙" },
    { en: "Nashik", zh: "纳西克" },
    { en: "New Delhi", zh: "新德里" },
    { en: "Ningbo", zh: "宁波" },
    { en: "Osaka", zh: "大阪" },
    { en: "Penang", zh: "槟城" },
    { en: "Perth", zh: "珀斯" },
    { en: "Qingdao", zh: "青岛" },
    { en: "Quanzhou", zh: "泉州" },
    { en: "Seoul", zh: "首尔" },
    { en: "Shanghai", zh: "上海" },
    { en: "Shenzhen", zh: "深圳" },
    { en: "Singapore", zh: "新加坡" },
    { en: "Sydney", zh: "悉尼" },
    { en: "Taipei", zh: "台北" },
    { en: "Tokyo", zh: "东京" },
    { en: "Wuhan", zh: "武汉" },
    { en: "Xi'an", zh: "西安" },
    { en: "Xiamen", zh: "厦门" },
    { en: "Yangon", zh: "仰光" },
    { en: "Zhengzhou", zh: "郑州" }
  ];

  const influencers = [
    { name: 'Nathan Davis JR', fans: '16.7M Followers', img: '/mcn/nathan-davis-jr.jpeg' },
    { name: 'Michael Dimuccio', fans: '9.4M Followers', img: '/mcn/michael-dimuccio.jpeg' },
    { name: 'Shane Nagy', fans: '10.6M Followers', img: '/mcn/shane-nagy.jpeg' },
    { name: 'Swaggy Wolfdog', fans: '10.7M Followers', img: '/mcn/swaggy-wolfdog.jpeg' },
    { name: 'Fabio Farati', fans: '19M Followers', img: '/mcn/fabio-farati.jpeg' },
    { name: 'Emmy Combs', fans: '16M Followers', img: '/mcn/emmy-combs.jpeg' },
    { name: 'Tallia Storm', fans: '1.4M Followers', img: '/mcn/tallia-storm.jpeg' },
    { name: 'Dayshawn Wilson', fans: '3.3M Followers', img: '/mcn/dayshawn-wilson.jpeg' },
    { name: 'Martine Beerman', fans: '3.1M Followers', img: '/mcn/martine-beerman.jpg' },
    { name: 'Matt Garry', fans: '2.5M Followers', img: '/mcn/matt-garry.jpeg' }
  ];

  return (
    <section id="ecosystem" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Core Title Section - Gold style for Chinese text */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-6">{t.title}</h2>
          <p className="text-gold font-bold text-lg max-w-3xl mx-auto leading-relaxed">
            {t.copy}
          </p>
        </div>

        {/* WTC Section with Introduction */}
        <div className="mb-32">
          <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative z-10">
              {/* Title and Introduction */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white">
                  {lang === 'zh' ? '亚太世界贸易商务联盟' : 'APAC World Trade Business Alliance'}
                </h3>
                <p className="text-gold font-bold text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                  {t.wtcIntro}
                </p>
              </div>

              {/* Region Globe Icons */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {regions.map((r, i) => (
                  <div key={i} className={`flex flex-col items-center cursor-pointer transition-all ${r.active ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-60'}`}>
                    <div className="text-4xl mb-4">{r.img}</div>
                    <span className="text-[10px] font-black tracking-widest text-center">{r.name}</span>
                    {r.active && <div className="h-0.5 w-full bg-gold mt-2"></div>}
                  </div>
                ))}
              </div>

              {/* City Grid */}
              <div className="bg-gold rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="bg-black/10 p-4 border-b border-black/5">
                  <span className="text-xs font-black text-black/60 tracking-widest uppercase">
                    {lang === 'zh' ? '亚太地区城市' : 'LOCATIONS IN ASIA & THE PACIFIC'}
                  </span>
                </div>
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
                    {cities.map((city, idx) => (
                      <div key={idx} className="text-black text-[11px] font-bold hover:text-white transition-colors cursor-default truncate">
                        {lang === 'zh' ? city.zh : city.en}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global CSR & Resources Section */}
        <div className="mb-32">
          <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative z-10">
              {/* Title and Introduction */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white">
                  {lang === 'zh' ? '全球企业家责任基金会' : 'Global CSR Foundation'}
                </h3>
                <p className="text-gold font-bold text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                  {t.csrIntro}
                </p>
              </div>

              {/* SDGs, CSR, UN Cards - Unified height */}
              <div className="grid md:grid-cols-3 gap-8">
            {/* SDGs Card */}
            <div className="flex flex-col">
              <h4 className="text-center text-xl font-black mb-8 border-b border-gold/30 pb-4 inline-block mx-auto min-w-[120px]">SDGs</h4>
              <div className="glass-card rounded-3xl overflow-hidden relative group flex flex-col h-[420px]">
                <div className="p-4 flex-shrink-0">
                  <img 
                    src="/images/SDGS.png" 
                    alt="SDGs" 
                    className="w-full h-auto max-h-[320px] object-contain mx-auto"
                  />
                </div>
                <div className="px-4 pb-4 text-center mt-auto">
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {t.sdgsContent}
                  </p>
                </div>
              </div>
            </div>

            {/* CSR Card */}
            <div className="flex flex-col">
              <h4 className="text-center text-xl font-black mb-8 border-b border-gold/30 pb-4 inline-block mx-auto min-w-[120px]">CSR</h4>
              <div className="glass-card rounded-3xl overflow-hidden relative group flex flex-col h-[420px] p-6">
                <p className={`text-gray-300 overflow-y-auto ${lang === 'zh' ? 'text-base leading-loose' : 'text-sm leading-relaxed'}`}>
                  {t.csrContent}
                </p>
              </div>
            </div>

            {/* UN Card */}
            <div className="flex flex-col">
              <h4 className="text-center text-xl font-black mb-8 border-b border-gold/30 pb-4 inline-block mx-auto min-w-[120px]">UN</h4>
              <div className="glass-card rounded-3xl overflow-hidden relative group flex flex-col h-[420px]">
                <div className="p-4 h-full flex items-center justify-center">
                  <img 
                    src="/images/UN1.png" 
                    alt="UN" 
                    className="w-full h-auto max-h-[380px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

        {/* Influencer Network */}
        <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-12">{lang === 'zh' ? '全球网红经济联盟' : 'Master TV MCN'}</h3>
            <p className="text-gold text-sm font-bold leading-relaxed mb-12 max-w-4xl">
              {lang === 'zh' 
                ? '对接世界超一线的名人KOL，创造现象级品牌声量。' 
                : 'Partial list of influencers who attend our events'}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {influencers.map((inf, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gold/20 mb-4 group-hover:border-gold transition-all ring-4 ring-gold/0 group-hover:ring-gold/20">
                    <img src={inf.img} alt={inf.name} className="w-full h-full object-cover" />
                  </div>
                  <h5 className="text-[11px] font-bold text-white mb-1">{inf.name}</h5>
                  <p className="text-[9px] text-gold font-bold uppercase tracking-tighter">{inf.fans}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GPTDAO Community */}
        <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden mt-32">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-4">
              {lang === 'zh' ? '硅谷华人创业者社区GPTDAO' : 'GPTDAO Silicon Valley AI Founder Community'}
            </h3>
            <p className="text-gold font-bold text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center mb-12">
              {lang === 'zh' ? t.gptdaoDescription.zh : t.gptdaoDescription.en}
            </p>
            
            {/* Image */}
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-gold/20">
              <img 
                src="/siliconvalley/siliconvalley.jpg" 
                alt="GPTDAO Silicon Valley Community" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Exhibition Expertise */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-gold/50 rounded text-gold text-[10px] font-black tracking-[0.3em]">NEW TIMES EXHIBITION</div>
            <h3 className="text-4xl font-black leading-tight">
              {t.exhibition.title}
            </h3>
            <p className="text-gold text-lg leading-relaxed font-medium">
              {t.exhibition.desc}
            </p>
            <div className="grid grid-cols-3 gap-4">
               {t.exhibition.points.map((p: string, i: number) => (
                 <div key={i} className="text-center p-4 glass-card rounded-2xl">
                   <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                     <span className="text-gold text-xs">●</span>
                   </div>
                   <p className="text-xs font-bold text-gray-300 leading-tight uppercase tracking-tighter">{p}</p>
                 </div>
               ))}
            </div>
           </div>
           <div className="grid grid-cols-1 gap-6">
              <div className="rounded-3xl border border-white/10 overflow-hidden group">
                <img 
                  src="/exhibit/图片5.jpg" 
                  alt="New Times Exhibition" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-3xl border border-white/10 overflow-hidden group">
                <img 
                  src="/exhibit/图片6.jpg" 
                  alt="New Times Exhibition" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
