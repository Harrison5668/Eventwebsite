
import React from 'react';

interface Props {
  lang: string;
}

const Partners: React.FC<Props> = ({ lang }) => {
  const organizers = lang === 'zh' ? [
    '亚太世界贸易商务联盟',
    '全球企业社会责任基金会 (GCSRF)',
    '全球网红经济联盟 (Master TV MCN)',
    'GPTDAO / AI 101 Labs',
    '新时代展览 / RWAWA'
  ] : [
    'APAC World Trade Business Alliance',
    'Global CSR Foundation',
    'Global Influencer Economy Alliance',
    'GPTDAO / AI 101 Labs',
    'New Era Exhibitions / RWAWA'
  ];

  const coOrganizers = lang === 'zh' ? [
    '法拉第未来 (Faraday Future)',
    'AI Reinvent Ventures'
  ] : [
    'Faraday Future',
    'AI Reinvent Ventures'
  ];

  return (
    <section id="partners" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-black mb-4">{lang === 'zh' ? '主办与支持' : 'Organizers & Partners'}</h2>
          <p className="text-gold font-bold tracking-widest text-xs uppercase">ORGANIZERS & PARTNERS</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{lang === 'zh' ? '主办方' : 'Organizers'}</h4>
            <div className="space-y-4 text-gray-400 text-sm font-medium">
              {organizers.map((o, i) => <p key={i}>{o}</p>)}
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{lang === 'zh' ? '联合主办' : 'Co-Organizers'}</h4>
            <div className="space-y-4 text-gray-400 text-sm font-medium">
              {coOrganizers.map((o, i) => <p key={i}>{o}</p>)}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase">{lang === 'zh' ? '社群支持' : 'Community Partners'}</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-gray-500 text-xs font-bold uppercase">
              <span>EntreConnect</span><span>OnePiece Labs</span>
              <span>Bitslabs</span><span>Taro</span><span>UpHonest Scout</span>
              <span>Weshine</span><span>Bay Area Founder Club</span><span>AGI House</span>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5">
          <h4 className="text-center text-[10px] font-black text-gray-600 mb-12 tracking-[0.5em] uppercase">200+ GLOBAL MEDIA PARTNERS</h4>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 opacity-30 grayscale">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="aspect-[3/1] bg-white/10 rounded flex items-center justify-center p-2 text-[8px] font-black text-white/50 uppercase tracking-tighter">LOGO</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
