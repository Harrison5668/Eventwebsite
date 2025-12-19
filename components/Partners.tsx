
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Partners: React.FC<Props> = ({ t, lang }) => {
  return (
    <section id="partners" className="py-32 px-6">
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
                  <p className="hover:text-gold transition-colors cursor-default">亚太世界贸易商务联盟</p>
                  <p className="hover:text-gold transition-colors cursor-default">全球企业社会责任基金会</p>
                  <p className="hover:text-gold transition-colors cursor-default">全球网红经济联盟</p>
                  <p className="hover:text-gold transition-colors cursor-default">GPTDAO</p>
                  <p className="hover:text-gold transition-colors cursor-default">AI 101 Labs</p>
                  <p className="hover:text-gold transition-colors cursor-default">新时代展览</p>
                  <p className="hover:text-gold transition-colors cursor-default">RWAWA</p>
                </>
              ) : (
                <>
                  <p className="hover:text-gold transition-colors cursor-default">APAC World Trade Group</p>
                  <p className="hover:text-gold transition-colors cursor-default">Global CSR Foundation (GCSRF)</p>
                  <p className="hover:text-gold transition-colors cursor-default">Master TV MCN</p>
                  <p className="hover:text-gold transition-colors cursor-default">GPTDAO</p>
                  <p className="hover:text-gold transition-colors cursor-default">AI 101 Labs</p>
                  <p className="hover:text-gold transition-colors cursor-default">New Times Exhibition</p>
                  <p className="hover:text-gold transition-colors cursor-default">RWAWA</p>
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
                  <p className="hover:text-gold transition-colors cursor-default">AI Reinvent Ventures</p>
                </>
              ) : (
                <>
                  <p className="hover:text-gold transition-colors cursor-default">Faraday Future</p>
                  <p className="hover:text-gold transition-colors cursor-default">AI Reinvent Ventures</p>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{t.communityPartners}</h4>
            <div className="grid grid-cols-2 gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-tight">
              <span>EntreConnect</span><span>OnePiece Labs</span>
              <span>Bitslabs</span><span>Taro</span><span>UpHonest Scout</span>
              <span>Weshine</span><span>Founder Club</span><span>AGI House</span>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 grayscale opacity-40 hover:opacity-100 transition-all duration-700">
             {/* Media logos */}
             {['SOHU', 'TODAY TOUTIAO', 'EASTMONEY', 'HCZYW', 'BAIDU', 'CSSXW', 'CHINA.COM', '3NEWS', 'CNIM', 'INTERNATIONAL DAILY', 'CENN', '163 NEWS', '71DAILY', 'JINGJI', 'TONGHUN'].map((name) => (
               <div key={name} className="glass-card aspect-[2.5/1] rounded flex items-center justify-center p-4 border border-white/5">
                 <span className="text-[8px] font-black text-white/40 tracking-tighter uppercase">{name} LOGO</span>
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
          
          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden opacity-30 grayscale hover:opacity-80 transition-all duration-700">
             {[
               'WBTW CBS 13', 'FOX 31 DENVER', 'THE WORLD NEWSWIRE', 'WTNH ABC 8', 
               'INNOVATION & ENTREPRENEURS', 'KLRT FOX 16', 'INTERNATIONAL BUSINESS WATCH', 
               'THE MARKETING COMMUNICATOR', 'WKBN CBS 27', 'SMB IN ACTION', 
               'WIVT ABC 34', 'GLOBAL MEDIA WATCH', 'CONSUMER NEWS NETWORK', 
               'KFOR NBC 4', 'WSPA CBS 7', 'CRYPTO INSIDER REVIEW'
             ].map((name) => (
               <div key={name} className="bg-black/40 p-6 flex items-center justify-between group">
                 <span className="text-[10px] font-bold text-gray-500 group-hover:text-gold transition-colors">{name}</span>
                 <div className="w-12 h-6 bg-white/5 rounded border border-white/5 flex items-center justify-center text-[6px] font-black">LOGO</div>
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
