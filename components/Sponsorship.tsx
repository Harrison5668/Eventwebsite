
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Sponsorship: React.FC<Props> = ({ t, lang }) => {
  const tiers = [
    {
      name: lang === 'zh' ? '冠名赞助' : 'Title Sponsor',
      price: '$50,000',
      subtitle: lang === 'zh' ? '（仅限1席）' : '(Only 1 Available)',
      benefits: lang === 'zh' ? [
        '品牌Logo主视觉、主背景板、官网首页重点展示',
        '大会官方社交媒体展示&200+媒体宣传曝光',
        '主题演讲机会（主论坛5分钟）',
        '主办方协助对接投融资与产业资源',
        '专属VIP展位',
        '官网30秒品牌视频展示',
        '12张VIP门票'
      ] : [
        'Brand logo on main visual, primary backdrop, and homepage',
        'Featured on official social media & 200+ media exposures',
        'Keynote speaking opportunity (5 minutes at main forum)',
        'Organizer support for connecting with investors & industry resources',
        'Exclusive VIP booth',
        '30-second brand video on website',
        '12 VIP passes'
      ],
      color: 'from-black/40 to-black/20',
      borderColor: 'border-gold'
    },
    {
      name: lang === 'zh' ? '铂金赞助商' : 'Platinum Sponsor',
      price: '$25,000',
      subtitle: lang === 'zh' ? '（限2席）' : '(Limited to 2)',
      benefits: lang === 'zh' ? [
        'Logo展示于主背景板、官网、大会手册',
        '产业链升级与国际化方向的专业建议',
        '参与1场论坛',
        '现场摆放易拉宝2个',
        '6张VIP门票',
        '3次社交媒体品牌露出',
        '官网合作伙伴专区展示'
      ] : [
        'Logo on main backdrop, website, and event handbook',
        'Expert advice on industry chain upgrading & internationalization',
        'Participation in 1 forum session',
        '2 roll-up banners onsite',
        '6 VIP passes',
        '3 social media brand mentions',
        'Featured in website partner section'
      ],
      color: 'from-black/40 to-black/20',
      borderColor: 'border-white/30'
    },
    {
      name: lang === 'zh' ? '白银赞助' : 'Silver Sponsor',
      price: '$5,000',
      subtitle: '',
      benefits: lang === 'zh' ? [
        'Logo展示于大会手册、官网、现场展板',
        '参与1场Panel论坛',
        '现场摆放易拉宝1个',
        '4张标准参会门票',
        '2次社交媒体提及'
      ] : [
        'Logo in event handbook, website, and onsite display boards',
        'Participation in 1 panel discussion',
        '1 roll-up banner onsite',
        '4 standard event passes',
        '2 social media mentions'
      ],
      color: 'from-black/40 to-black/20',
      borderColor: 'border-white/30'
    },
    {
      name: lang === 'zh' ? '青铜赞助' : 'Bronze Sponsor',
      price: '$1,000',
      subtitle: '',
      benefits: lang === 'zh' ? [
        'Logo展示于现场签名墙与大会手册',
        '合作媒体渠道品牌露出',
        '参与1场Panel论坛',
        '2张标准参会门票',
        '1次社交媒体感谢提及'
      ] : [
        'Logo on onsite signature wall and event handbook',
        'Exposure via partner media channels',
        'Participation in 1 panel discussion',
        '2 standard event passes',
        '1 social media thank-you mention'
      ],
      color: 'from-black/40 to-black/20',
      borderColor: 'border-white/30'
    }
  ];

  return (
    <section id="sponsorship" className="py-16 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold text-sm font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
          {lang === 'zh' 
            ? '现有少量赞助席位限时开放，感谢您的支持让我们提供更好的服务。'
            : 'A limited number of sponsorship slots are now open. Thank you for enabling us to serve you better.'}
        </p>
        
        {/* 2x2 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-3xl border-2 ${tier.borderColor} bg-gradient-to-br ${tier.color} backdrop-blur-sm p-8 text-left`}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-black text-white mb-1">
                  {tier.name} {tier.subtitle && <span className="text-base font-normal text-gray-400">{tier.subtitle}</span>}
                </h3>
                <div className="text-4xl font-black text-gold">{tier.price}</div>
              </div>
              
              {/* Benefits List */}
              <ul className="space-y-3">
                {tier.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="text-sm text-gray-300 flex items-start leading-relaxed">
                    <span className="text-gold mr-2 mt-0.5 flex-shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <a 
          href={`mailto:info@wima.live?subject=${encodeURIComponent(lang === 'zh' ? '赞助申请' : 'Sponsorship Application')}&body=${encodeURIComponent(
            lang === 'zh' 
              ? `您好，\n\n我有意申请赞助。\n\n公司名称：\n联系人姓名：\n职位：\n联系电话：\n电子邮箱：\n公司网站：\n意向赞助等级：\n简要说明：\n\n期待您的回复！`
              : `Hello,\n\nI am interested in applying for sponsorship.\n\nCompany Name:\nContact Person:\nPosition:\nPhone:\nEmail:\nCompany Website:\nPreferred Sponsorship Level:\nBrief Description:\n\nLooking forward to your reply!`
          )}`}
          className="inline-block gold-btn px-16 py-5 rounded-full text-lg font-bold uppercase tracking-widest"
        >
          {lang === 'zh' ? '立即申请' : 'Apply Now'}
        </a>
      </div>
    </section>
  );
};

export default Sponsorship;
