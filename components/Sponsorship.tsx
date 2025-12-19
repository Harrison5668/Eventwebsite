
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Sponsorship: React.FC<Props> = ({ t, lang }) => {
  const tiers = [
    {
      name: lang === 'zh' ? '冠名赞助' : 'Title Sponsor',
      price: lang === 'zh' ? '$20,000' : 'USD 30,000',
      target: lang === 'zh' ? '头部企业 / 平台型公司' : 'For companies entering global capital and ecosystems',
      benefits: lang === 'zh' ? [
        '定向业务匹配 & WTC 全球网络对接',
        '联合国相关慈善合作提升国际形象',
        '官方通讯稿、舞台签名墙展示',
        '200+ 海内外媒体渠道鸣谢',
        '1 个 VIP 展位 + 10 分钟主题演讲'
      ] : [
        'Targeted matchmaking via WTC networks',
        'Access to top-tier investors & partners',
        'CSR collaboration linked to UN initiatives',
        'Logo exposure across 200+ media channels',
        'VIP booth + 10-minute keynote'
      ],
      featured: true
    },
    {
      name: lang === 'zh' ? '金牌赞助' : 'Gold Sponsor',
      price: lang === 'zh' ? '$5,000' : 'USD 10,000',
      target: lang === 'zh' ? '成长型企业' : 'For growth-stage companies seeking visibility',
      benefits: lang === 'zh' ? [
        '核心行业人群品牌认知建立',
        '产业链升级与国际化建议',
        '舞台签名墙 & 媒体展示',
        '1 个标准展位'
      ] : [
        'Strategic guidance on global expansion',
        'Logo exposure across official materials',
        'Standard booth + panel participation'
      ]
    },
    {
      name: lang === 'zh' ? '银牌赞助' : 'Silver Sponsor',
      price: lang === 'zh' ? '$2,000' : 'USD 5,000',
      target: lang === 'zh' ? '初创公司 / 新进入者' : 'For startups and new market entrants',
      benefits: lang === 'zh' ? [
        '国际峰会背书',
        '舞台签名墙 & 媒体展示',
        '现场摆放公司易拉宝'
      ] : [
        'International summit endorsement',
        'Media logo exposure',
        'On-site display + panel participation'
      ]
    }
  ];

  return (
    <section id="sponsorship" className="py-32 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold font-bold tracking-widest text-xs uppercase mb-20">{t.subtitle}</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-10 rounded-[2.5rem] flex flex-col text-left ${tier.featured ? 'border-gold ring-1 ring-gold/20' : ''}`}
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-black text-gold mb-6">{tier.price}</div>
              
              <div className="text-[10px] text-gray-500 font-bold mb-8 uppercase leading-relaxed">
                {t.target}: {tier.target}
              </div>
              
              <ul className="space-y-4 mb-12 flex-1">
                {tier.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="text-[11px] text-gray-300 flex items-start">
                    <span className="text-gold mr-2 mt-0.5">·</span> {b}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full text-xs font-bold transition-all uppercase tracking-widest ${tier.featured ? 'gold-btn' : 'outline-gold-btn'}`}>
                {t.apply}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
