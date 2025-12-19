
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Partners: React.FC<Props> = ({ t, lang }) => {
  return (
    <section id="partners" className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{t.title}</h2>
          <p className="text-gold text-sm font-medium max-w-3xl mx-auto uppercase tracking-wider">{t.engSubtitle}</p>
        </div>

        {/* Organizer Section */}
        <div className="grid lg:grid-cols-3 gap-16 mb-40">
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{t.organizers}</h4>
            <div className="grid grid-cols-2 gap-6">
              {lang === 'zh' ? (
                <>
                  {/* 杭州世界贸易中心 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/杭州世界贸易中心&亚太世界贸易商务联盟联合发起方.png" alt="杭州世界贸易中心" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">杭州世界贸易中心&亚太世界贸易商务联盟联合发起方</p>
                  </div>
                  {/* 全球企业社会责任基金会 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">全球企业社会责任基金会</p>
                  </div>
                  {/* 全球网红经济联盟 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/Master TV MCN.jpg" alt="全球网红经济联盟" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">全球网红经济联盟</p>
                  </div>
                  {/* GPTDAO */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/GPTDAO.jpg" alt="GPTDAO" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">GPTDAO</p>
                  </div>
                </>
              ) : (
                <>
                  {/* World Trade Center Hangzhou */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/杭州世界贸易中心&亚太世界贸易商务联盟联合发起方.png" alt="World Trade Center Hangzhou" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">World Trade Center Hangzhou & APAC World Trade Group</p>
                  </div>
                  {/* Global CSR Foundation */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">Global CSR Foundation</p>
                  </div>
                  {/* Master TV MCN */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/Master TV MCN.jpg" alt="Master TV MCN" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">Master TV MCN</p>
                  </div>
                  {/* GPTDAO */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/GPTDAO.jpg" alt="GPTDAO" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">GPTDAO</p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{t.coOrganizers}</h4>
            <div className="grid grid-cols-2 gap-6">
              {/* 法拉第未来 */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                  <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                </div>
                <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">{lang === 'zh' ? '法拉第未来' : 'Faraday Future'}</p>
              </div>
              {/* AI 101 Labs */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                  <img src="/host/AI 101 Labs.jpg" alt="AI 101 Labs" className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">AI 101 Labs</p>
              </div>
              {/* 新时代展览 */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                  <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                </div>
                <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">{lang === 'zh' ? '新时代展览' : 'New Times Exhibition'}</p>
              </div>
              {/* RWAWA */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                  <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                </div>
                <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">RWAWA</p>
              </div>
              {/* AI Reinvent Ventures */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                  <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                </div>
                <p className="text-gray-400 text-xs font-medium hover:text-gold transition-colors">AI Reinvent Ventures</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{t.communityPartners}</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {lang === 'zh' ? (
                <>
                  {/* 美中硅谷商会 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/美中硅谷商会.jpg" alt="美中硅谷商会" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">美中硅谷商会</p>
                  </div>
                  {/* AI机器人联盟 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">AI机器人联盟</p>
                  </div>
                  {/* 神舞科技 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/NeuroDance.jpg" alt="神舞科技" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">神舞科技</p>
                  </div>
                  {/* Magic Ice Cube */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/Magic Ice Cube.jpg" alt="Magic Ice Cube" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">Magic Ice Cube</p>
                  </div>
                  {/* 吃块披萨实验室 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">吃块披萨实验室</p>
                  </div>
                  {/* 出海同学会 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/出海同学会.jpg" alt="出海同学会" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">出海同学会</p>
                  </div>
                  {/* EntreConnect */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/EntreConnect.jpg" alt="EntreConnect" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">EntreConnect</p>
                  </div>
                  {/* Weshine */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/Weshine.jpg" alt="Weshine" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">Weshine</p>
                  </div>
                  {/* Taro */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">Taro</p>
                  </div>
                  {/* UpHonest Scout */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/UpHonest Scouts.png" alt="UpHonest Scout" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">UpHonest Scout</p>
                  </div>
                  {/* 纽约探险者俱乐部 */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/NYC Adventures Club.jpg" alt="纽约探险者俱乐部" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">纽约探险者俱乐部</p>
                  </div>
                </>
              ) : (
                <>
                  {/* US China Chamber of Commerce */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/美中硅谷商会.jpg" alt="US China Chamber of Commerce" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">US China Chamber of Commerce (Silicon Valley)</p>
                  </div>
                  {/* AI Robotics Alliance */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">AI Robotics Alliance</p>
                  </div>
                  {/* Neuro Dance */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/NeuroDance.jpg" alt="Neuro Dance" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">Neuro Dance</p>
                  </div>
                  {/* Magic Ice Cube */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/Magic Ice Cube.jpg" alt="Magic Ice Cube" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">Magic Ice Cube</p>
                  </div>
                  {/* OnePiece Labs */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">OnePiece Labs</p>
                  </div>
                  {/* SEAMATE */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">SEAMATE</p>
                  </div>
                  {/* EntreConnect */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/EntreConnect.jpg" alt="EntreConnect" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">EntreConnect</p>
                  </div>
                  {/* Weshine */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/Weshine.jpg" alt="Weshine" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">Weshine</p>
                  </div>
                  {/* Taro */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <span className="text-[10px] text-gray-600 font-bold">LOGO</span>
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">Taro</p>
                  </div>
                  {/* UpHonest Scout */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/UpHonest Scouts.png" alt="UpHonest Scout" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">UpHonest Scout</p>
                  </div>
                  {/* NYC Adventures Club */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-full aspect-[2/1] bg-white/5 rounded-lg flex items-center justify-center p-4 border border-white/10">
                      <img src="/host/NYC Adventures Club.jpg" alt="NYC Adventures Club" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-gray-500 text-[10px] font-bold hover:text-gold transition-colors">NYC Adventures Club</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{t.mediaTitle}</h2>
          <p className="text-gold text-sm font-medium max-w-3xl mx-auto">{t.mediaSubtitle}</p>
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
