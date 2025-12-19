
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Partners: React.FC<Props> = ({ t, lang }) => {
  return (
    <section id="partners" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{t.title}</h2>
          <p className="text-gold text-sm font-medium max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Organizer Section */}
        <div className="grid lg:grid-cols-3 gap-16 mb-40">
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{t.organizers}</h4>
            <div className="space-y-6 text-gray-400 text-sm font-medium">
              {lang === 'zh' ? (
                <>
                  <p className="hover:text-gold transition-colors cursor-default">杭州世界贸易中心&亚太世界贸易商务联盟联合发起方</p>
                  <p className="hover:text-gold transition-colors cursor-default">全球企业社会责任基金会</p>
                  <p className="hover:text-gold transition-colors cursor-default">全球网红经济联盟</p>
                  <p className="hover:text-gold transition-colors cursor-default">GPTDAO</p>
                </>
              ) : (
                <>
                  <p className="hover:text-gold transition-colors cursor-default">World Trade Center Hangzhou & APAC World Trade Group</p>
                  <p className="hover:text-gold transition-colors cursor-default">Global CSR Foundation</p>
                  <p className="hover:text-gold transition-colors cursor-default">Master TV MCN</p>
                  <p className="hover:text-gold transition-colors cursor-default">GPTDAO</p>
                </>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{t.coOrganizers}</h4>
            <div className="space-y-6 text-gray-400 text-sm font-medium">
              {lang === 'zh' ? (
                <>
                  <p className="hover:text-gold transition-colors cursor-default">法拉第未来</p>
                  <p className="hover:text-gold transition-colors cursor-default">AI 101 Labs</p>
                  <p className="hover:text-gold transition-colors cursor-default">新时代展览</p>
                  <p className="hover:text-gold transition-colors cursor-default">RWAWA</p>
                  <p className="hover:text-gold transition-colors cursor-default">AI Reinvent Ventures</p>
                </>
              ) : (
                <>
                  <p className="hover:text-gold transition-colors cursor-default">Faraday Future</p>
                  <p className="hover:text-gold transition-colors cursor-default">AI 101 Labs</p>
                  <p className="hover:text-gold transition-colors cursor-default">New Times Exhibition</p>
                  <p className="hover:text-gold transition-colors cursor-default">RWAWA</p>
                  <p className="hover:text-gold transition-colors cursor-default">AI Reinvent Ventures</p>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{t.communityPartners}</h4>
            <div className="grid grid-cols-2 gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-tight">
              {lang === 'zh' ? (
                <>
                  <span>美中硅谷商会</span><span>AI机器人联盟</span>
                  <span>神舞科技</span><span>Magic Ice Cube</span>
                  <span>吃块披萨实验室</span><span>出海同学会</span>
                  <span>EntreConnect</span><span>Weshine</span>
                  <span>Taro</span><span>UpHonest Scout</span>
                  <span>纽约探险者俱乐部</span>
                </>
              ) : (
                <>
                  <span>US China Chamber of Commerce (Silicon Valley)</span><span>AI Robotics Alliance</span>
                  <span>Neuro Dance</span><span>Magic Ice Cube</span>
                  <span>OnePiece Labs</span><span>SEAMATE</span>
                  <span>EntreConnect</span><span>Weshine</span>
                  <span>Taro</span><span>UpHonest Scout</span>
                  <span>NYC Adventures Club</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Chinese Media Grid */}
        <div className="mb-40">
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px flex-1 bg-white/10"></div>
            <h4 className="text-[10px] font-black text-gray-500 tracking-[0.5em] uppercase text-center">{t.chineseMedia}</h4>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
             {/* Chinese Domestic Media logos */}
             {[
               { name: lang === 'zh' ? '百度' : 'Baidu', img: '/domestic_media/百度.png' },
               { name: lang === 'zh' ? '搜狐' : 'Sohu', img: '/domestic_media/搜狐.png' },
               { name: lang === 'zh' ? '中华网' : 'China.com', img: '/domestic_media/中华网.png' },
               { name: lang === 'zh' ? '国际日报' : 'International Daily', img: '/domestic_media/国际日报.png' },
               { name: lang === 'zh' ? '中企网' : 'CENN', img: '/domestic_media/中企网.png' },
               { name: lang === 'zh' ? '企业日报' : '71daily', img: '/domestic_media/企业日报.png' },
               { name: lang === 'zh' ? '财报网' : 'Cai Bao Wang', img: '/domestic_media/财报网.png' },
               { name: lang === 'zh' ? '同花顺' : 'Tonghuashun', img: '/domestic_media/同顺号.jpg' },
               { name: lang === 'zh' ? '中国报业网' : 'CNIM', img: '/domestic_media/中国报业.png' },
               { name: lang === 'zh' ? '今日头条' : 'Toutiao', img: '/domestic_media/今日头条.png' },
               { name: lang === 'zh' ? '东方财富网' : 'Eastmoney', img: '/domestic_media/东方财富网.png' },
               { name: lang === 'zh' ? '凤凰网' : 'Phoenix', img: '/domestic_media/凤凰网.png' },
               { name: lang === 'zh' ? '网易新闻' : '163 News', img: '/domestic_media/网易新闻.jpg' },
               { name: lang === 'zh' ? '新报网' : 'Xinbao', img: '/domestic_media/新报网.png' }
             ].map((media) => (
               <div key={media.name} className="flex flex-col items-center gap-3">
                 <div className="glass-card aspect-[2.5/1] w-full rounded flex items-center justify-center p-2 border border-white/5 overflow-hidden bg-white/5">
                   <img src={media.img} alt={media.name} className="w-full h-full object-contain" />
                 </div>
                 <span className="text-[9px] font-semibold text-gray-400 text-center">{media.name}</span>
               </div>
             ))}
          </div>
        </div>

        {/* International Media List Grid */}
        <div>
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px flex-1 bg-white/10"></div>
            <h4 className="text-[10px] font-black text-gray-500 tracking-[0.5em] uppercase text-center">{t.internationalMedia}</h4>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
             {/* International & US Media logos */}
             {[
               { name: lang === 'zh' ? 'CBS News' : 'CBS News', img: '/international_media/CBS News.png' },
               { name: lang === 'zh' ? 'AP' : 'Associated Press', img: '/international_media/Associated Press.png' },
               { name: lang === 'zh' ? 'Google News' : 'Google News', img: '/international_media/Google News.png' },
               { name: lang === 'zh' ? 'Yahoo!' : 'Yahoo!', img: '/international_media/Yahoo! .png' },
               { name: lang === 'zh' ? 'NBC News' : 'NBC News', img: '/international_media/NBC News.png' },
               { name: lang === 'zh' ? 'ABC News' : 'ABC News', img: '/international_media/ABC News.png' },
               { name: lang === 'zh' ? 'FOX News Channel' : 'FOX News Channel', img: '/international_media/FOX News Channel.png' },
               { name: lang === 'zh' ? '8 News Now' : '8 News Now', img: '/international_media/8 News Now (KLAS-TV).png' },
               { name: lang === 'zh' ? 'Bloomberg' : 'Bloomberg', img: '/international_media/Bloomberg .png' }
             ].map((media) => (
               <div key={media.name} className="flex flex-col items-center gap-3">
                 <div className="glass-card aspect-[2.5/1] w-full rounded flex items-center justify-center p-2 border border-white/5 overflow-hidden bg-white/5">
                   <img src={media.img} alt={media.name} className="w-full h-full object-contain" />
                 </div>
                 <span className="text-[9px] font-semibold text-gray-400 text-center">{media.name}</span>
               </div>
             ))}
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-12 font-bold tracking-widest uppercase animate-pulse">And 200+ More Global Media Outlets...</p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
