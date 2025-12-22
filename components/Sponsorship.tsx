
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Sponsorship: React.FC<Props> = ({ t, lang }) => {
  const tiers = [
    {
      name: lang === 'zh' ? '冠名赞助' : 'Title Sponsorship',
      price: '$40,000',
      benefits: lang === 'zh' ? [
        '主办方协助引入顶级投融资资源与关键产业伙伴',
        '品牌 Logo 线上线下重点展示，数十万级曝光',
        '1 个VIP展位',
        '10分钟主题演讲时段'
      ] : [
        'Curated introductions to top-tier investment resources and key industry partners',
        'Brand logo featured across online and offline channels with tens of thousands of impressions',
        '1 VIP exhibition booth',
        '10-minute keynote speech slot'
      ],
      featured: true
    },
    {
      name: lang === 'zh' ? '金牌赞助' : 'Gold Sponsorship',
      price: '$5,000',
      benefits: lang === 'zh' ? [
        '获得产业链升级与国际化方向的专业建议',
        '品牌 Logo 线上线下展示',
        '参与1 场 Panel 论坛',
        '现场可以摆放公司易拉宝'
      ] : [
        'Advisory support for global and industry growth',
        'Brand logo displayed across online and offline channels',
        'Participation in 1 panel discussion',
        'On-site placement of company roll-up banners'
      ],
      featured: false
    },
    {
      name: lang === 'zh' ? '银牌赞助' : 'Silver Sponsorship',
      price: '$2,000',
      benefits: lang === 'zh' ? [
        '以较低成本获得国际峰会背书与链接',
        '现场签名墙及200+ 海内外媒体渠道展示品牌logo',
        '参与 1 场 Panel 论坛讨论'
      ] : [
        'Cost-efficient access to summit endorsement',
        'Brand logo displayed across online and offline channels',
        'Participation in 1 panel discussion'
      ],
      featured: false
    }
  ];

  return (
    <section id="sponsorship" className="py-16 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold text-sm font-medium mb-20 max-w-4xl mx-auto leading-relaxed">
          {lang === 'zh' 
            ? '现有少量赞助席位限时开放，感谢您的支持让我们提供更好的服务。'
            : 'A limited number of sponsorship slots are now open. Thank you for enabling us to serve you better.'}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className="glass-card p-10 rounded-[2.5rem] flex flex-col text-left border-[#E69900] ring-1 ring-[#E69900]/20"
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-4xl font-black text-gold mb-8">{tier.price}</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="text-base text-gray-300 flex items-start leading-relaxed">
                    <span className="text-gold mr-2 mt-1">•</span> {b}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`mailto:info@wima.live?subject=${encodeURIComponent(`Sponsorship Application - ${tier.name}`)}&body=${encodeURIComponent(`Hello,\n\nI am interested in applying for ${tier.name} (${tier.price}).\n\nCompany Name:\nContact Person:\nPosition:\nPhone:\nEmail:\nCompany Website:\nBrief Description:\n\nLooking forward to your reply!\n\n---\n\n您好，\n\n我有意申请 ${lang === 'zh' ? tier.name : (tier.name === 'Title Sponsorship' ? '冠名赞助' : tier.name === 'Gold Sponsorship' ? '金牌赞助' : '银牌赞助')}（${tier.price}）。\n\n公司名称：\n联系人姓名：\n职位：\n联系电话：\n电子邮箱：\n公司网站：\n简要说明：\n\n期待您的回复！`)}`}
                className={`block w-full py-3 rounded-full text-xs font-bold transition-all uppercase tracking-widest text-center ${tier.featured ? 'gold-btn' : 'outline-gold-btn'}`}
              >
                {t.apply}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
