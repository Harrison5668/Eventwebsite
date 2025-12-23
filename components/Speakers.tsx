
import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Speakers: React.FC<Props> = ({ t, lang }) => {
  const [activeBio, setActiveBio] = useState<string | null>(null);

  // Speaker data - ordered alphabetically by last name
  const speakers = [
    { 
      name: lang === 'zh' ? '北美崔哥' : 'Brother Sway', 
      title: lang === 'zh' ? '著名脱口秀艺人和文化评论人' : 'Famous A-list comedian talk show host among any Chinese in the world', 
      bio: lang === 'zh'
        ? '北美崔哥（崔宝印）：活跃在美加华人圈的著名脱口秀艺人和文化评论人，以幽默犀利的风格讲述中美文化差异、移民生活和社会现象。在抖音等中国短视频平台拥有约500万粉丝，通过地道北京口音与美式幽默结合的表演，成为北美华人社群里极具辨识度的跨文化观察者。'
        : 'Cui Baoyin: a well-known stand-up comedian and cultural commentator active in the Chinese communities across North America. He humorously and incisively explores cultural differences between China and the U.S., immigrant life, and social phenomena. With 5 million followers across all platforms, his performances—blending authentic Beijing accents with American-style humor—have made him a highly recognizable cross-cultural observer within the North American Chinese community.',
      img: '/images/Cui Baoyin.png' 
    },
    { 
      name: lang === 'zh' ? '蔡继军' : 'Jijun Cai', 
      title: lang === 'zh' ? 'GPTDAO联合发起人' : 'Co-founder, GPTDAO & Founder, FlowGen', 
      bio: lang === 'zh'
        ? 'FlowGen 创始人，GPTDAO 联创、连续创业者，拥有十年以上市场、产品与技术经验。早年在硅谷从事 iOS 开发与产品管理，先后主导多平台应用、社交增长工具及融资撮合平台的研发与落地。2023 年在加州帕洛阿尔托共同创办全球最大的生成式AI社区品牌GPTDAO，在硅谷和旧金山多次成功举办了全球最大的生成式AI峰会；随后创立FlowGen，以 AI 替代营销团队，帮助企业与创作者实现 100倍降本增效，致力于用技术创新重塑组织效率与商业模式。'
        : 'Jijun Cai is a serial entrepreneur with over 10 years of experience in marketing, product, and technology. He previously worked in Silicon Valley on iOS development and product management, leading multi-platform applications, social growth tools, and financing matchmaking platforms. In 2023, he co-founded GPTDAO in Palo Alto, creating the largest generative AI community brand globally, and successfully hosted multiple large-scale generative AI summits in Silicon Valley and San Francisco. He later founded FlowGen, replacing marketing teams with AI to help enterprises and creators achieve 100× cost reduction and efficiency improvement, aiming to reshape organizational efficiency and business models through technological innovation.',
      img: '/images/caijijun.jpg' 
    },
    { 
      name: lang === 'zh' ? '陈喆' : 'Zhe Chen', 
      title: lang === 'zh' ? '法拉第未来全球合伙人&VP' : 'Global Partner & VP of Faraday Future', 
      bio: lang === 'zh'
        ? '陈喆，法拉第未来全球合伙人&VP，致力于推动电动汽车和智能出行领域的创新发展。'
        : 'Zhe Chen, Global Partner & VP of Faraday Future, dedicated to driving innovation in electric vehicles and smart mobility.',
      img: '/images/zhe-chen.png' 
    },
    { 
      name: lang === 'zh' ? '程正昌' : 'Andrew Cherng', 
      title: lang === 'zh' ? 'Panda Express联合创始人&董事长' : 'Co-founder & Chairman, Panda Restaurant Group', 
      bio: lang === 'zh'
        ? '程正昌，熊猫餐饮集团联合创始人兼董事长。他将一间小餐馆发展成为横跨全球2500家门店的餐饮帝国，开创了中餐在美国的品牌化与大众化新时代，被誉为将中华美食推向全球的传奇人物。'
        : 'Andrew Cherng: co-founder and Chairman of Panda Restaurant Group. He transformed a single restaurant into a global dining empire with over 2,500 locations worldwide, pioneering the mainstream brandization of Chinese cuisine in the United States and earning recognition as a legendary figure in bringing Chinese food to the world.',
      img: '/images/andrew.png' 
    },
    { 
      name: lang === 'zh' ? '赵兢' : 'Jingzhao Cesarone', 
      title: lang === 'zh' ? '全球 CSR 基金会创始人' : 'Founder & CEO, Global CSR Foundation', 
      bio: lang === 'zh'
        ? '赵兢女士是全球CSR基金会创始人兼首席执行官，联合国世界妇女组织全球女性领导力峰会主席，拥有三十年跨文化战略、可持续发展与NGO管理经验。她曾获 NAWBO 女性企业成就奖和中华文化基金会全球成就奖，长期推动教育、可持续发展、气候行动等领域的国际合作，并成功搭建中美企业界、政策界高层交流的桥梁。'
        : 'Jing Zhao Cesarone is the Founder and CEO of the Global CSR Foundation and Chair of the UN Women\'s Global Women Leadership Summit. She has over 30 years of experience in cross-cultural strategy, sustainable development, and NGO management. She has received the NAWBO Women\'s Achievement Award and the Global Achievement Award from the Chinese Culture Foundation. She has long promoted international cooperation in education, sustainability, and climate action, successfully bridging high-level exchanges between businesses and policymakers in China and the U.S.',
      img: '/images/jing-zhao.jpg' 
    },
    { 
      name: lang === 'zh' ? '贺子怡' : 'Viola He', 
      title: lang === 'zh' ? 'Good Deal MCN 联合创始人' : 'Co-founder, Good Deal MCN', 
      bio: lang === 'zh'
        ? '贺子怡，全球领先的网红营销平台Good Deal MCN的联合创始人，国际电商品牌化运营数据分析师协会会长，海外网红营销覆盖103个国家与地区，拥有500+网红资源，触达约50亿受众。是TikTok官方合作伙伴（TSP & TAP），Meta官方运营商，并拥有Google Ads认证。'
        : 'Viola He, founder of the world\'s leading influencer marketing platform Good Deal MCN, oversees overseas influencer marketing spanning 103 countries and regions. With access to over 500 influencers, the platform reaches approximately 5 billion viewers worldwide. It is an official TikTok partner (TSP & TAP), a Meta-authorized operator, and holds Google Ads certification.',
      img: '/images/viola-he.jpg' 
    },
    { 
      name: lang === 'zh' ? '林哲冰' : 'Zhebing Lin', 
      title: lang === 'zh' ? 'Magic Ice Cube 创始人；胡润 Under 30' : 'Founder, Magic Ice Cube; Hurun Under 30', 
      bio: lang === 'zh'
        ? '林哲冰是 Magic Ice Cube 创始人，将其打造为总部位于洛杉矶的跨国贸易平台，并在四年内实现 3.5 亿美元营收。他入选胡润 Under 30，现兼任世界精英领袖联盟主席、中美国际经济合作联盟青委主席、蓝源民族产业研究院副院长、国际潮青联合会副会长、美国粤港澳大湾区企业家总商会委员，以及 G20 青年企业家联盟菁英人才，专注全球贸易创新与国际商业合作。'
        : 'Zhebing Lin founded Magic Ice Cube, building it into a Los Angeles-based multinational trading platform with $350 million in revenue within four years. He was listed on Hurun Under 30 and currently serves as Chairman of the World Elite Leaders Alliance, Chair of the Young Committee of the China-U.S. International Economic Cooperation Alliance, Vice President of the International Chaoqing Federation, Vice President of the U.S. Guangdong-Hong Kong-Macao Bay Area Entrepreneurs Chamber, and G20 Young Entrepreneurs Elite. He focuses on global trade innovation and international business cooperation.',
      img: '/images/ice-lin.png' 
    },
    { 
      name: 'Diana Zhang', 
      title: lang === 'zh' ? '亚太世界贸易商务联盟副会长' : 'Vice President, APAC World Trade Group', 
      bio: lang === 'zh'
        ? '张红梅女士，现任亚太世界贸易商务联盟副会长，是长期活跃于美国硅谷的投资人。她曾联合创办北京大学公益孵化器与北大未名天使基金，现担任美国华人专家会常务理事、美国飞虎文化交流协会执行会长、亚太世贸商务联盟副会长及杭州世贸中心董事长，致力于推动中美商业交流、资本合作与跨国项目落地。'
        : 'Diana Zhang currently serves as Vice President of APAC World Trade Group and is a long-term active investor in Silicon Valley. She co-founded the Peking University Public Welfare Incubator and the PKU Weiming Angel Fund. She also serves as Executive Director of the Chinese American Experts Association, Executive President of the Flying Tigers Cultural Exchange Association, Vice President of APAC World Trade Group, and Chairwoman of Hangzhou World Trade Center. She is dedicated to promoting business exchanges, capital cooperation, and cross-border project implementation between China and the United States.',
      img: '/images/diana-zhang.png' 
    },
    { 
      name: lang === 'zh' ? '魏海鹰' : 'Haiying Wei', 
      title: lang === 'zh' ? '香港寰宇投资董事长' : 'Chairman, Huanyu Investment Group', 
      bio: lang === 'zh'
        ? '魏海鹰构建了横跨制造、投资、金融等领域的产业矩阵，旗下香港寰宇投资（集团）有限公司为香港联交所上市公司（股份代号 1046），中山市金日铝业有限公司作为核心制造企业，聚焦新型合金材料领域，实力雄厚。同时身兼广东省十届、十一届政协委员，中山潮人海外联谊会会长、美国南加州华人社团大联盟荣誉主席等职，持续搭建海内外经贸与文化交流桥梁。'
        : 'Haiying Wei has built an industrial matrix spanning manufacturing, investment, and finance. His company, Horizon International Investment (Group) Limited, is listed on the Hong Kong Stock Exchange (Stock Code: 1046). The core manufacturing enterprise, Zhongshan Jinri Aluminum Co., Ltd., focuses on new alloy materials. He also serves as a member of the 10th and 11th Guangdong CPPCC, President of the Zhongshan Chaozhou Overseas Association, and Honorary Chairman of the Southern California Chinese Associations Alliance. He continuously builds bridges for trade and cultural exchange between China and overseas markets.',
      img: '/images/haiying-wei.jpeg' 
    },
    { 
      name: lang === 'zh' ? '王紫' : 'Ray Wang', 
      title: lang === 'zh' ? '全球网红经济联盟联席主席' : 'Co-Chairman, Global Influencer Economy Alliance', 
      bio: lang === 'zh'
        ? '王紫：名人传媒与Master TV MCN的联合创始人，拥有超过20年横跨娱乐、媒体、营销与公关领域的丰富经验。他长期活跃于中美及港台娱乐与名人事务的前沿，擅长策划并执行国际级名人、明星、企业精英的公关、合作与品牌推广项目。王紫被誉为"名人的智囊"，在推动中美文化交流、促成国际大型活动（如格莱美、艾美奖中国代表团首次参与）方面创造了多个"首次"。近年来，他专注于直播电商、短视频营销、AI视频制作、名人加密币发行等新兴领域，并联合创办了具有全球影响力的"网红经济联盟"及"贝美好莱坞网红奖"。在其领导下，公司不仅是TikTok官方合作服务商，更构建了覆盖全美六大短视频平台及一线电商的整合营销网络，持续为品牌与名人提供从顶层公关到销售转化的全方位服务。'
        : 'Ray Wang：Co-founder of Celebrity Media and Master TV MCN, with 20+ years\' experience across entertainment, media, marketing, and PR. A veteran of China, the U.S., Hong Kong, and Taiwan\'s celebrity industry, he specializes in PR campaigns, collaborations, and brand promotion for top-tier international celebrities and corporate elites. Known as a "celebrity think tank," Wang pioneered Sino-U.S. cultural exchanges, including Chinese delegations\' historic participation in the Grammy and Emmy Awards. Recently, he has focused on live-streaming e-commerce, short-video marketing, AI video production, and celebrity-themed crypto projects. He also co-founded the global Influencer Economy Alliance and Bemy Hollywood Influencer Awards. Under his leadership, the company—an official TikTok service partner—has built an integrated marketing network across the top six U.S. short-video and e-commerce platforms, offering end-to-end services from PR strategy to sales conversion.',
      img: '/images/wangzi.jpg' 
    },
    { 
      name: 'Phillip Ruffin', 
      title: lang === 'zh' ? 'Treasure Island Casino 老板' : 'Owner, Treasure Island Casino', 
      bio: lang === 'zh'
        ? 'Phillip Ruffin 是拉斯维加斯最具传奇色彩的赌场与地产大亨之一。从德州加油站生意起家，他在行业低谷期果断出手，先后低价收购 Frontier、Treasure Island 等标志性赌场资产，并在周期反转中实现数十亿美元级别的价值跃迁。他以"逆周期收购 + 极致现金流管理"闻名，是拉斯维加斯少数仍保持高度独立控制权的赌场老板之一，同时也是 Trump International Las Vegas 的联合所有者，被视为老派资本主义与赌城黄金时代的代表人物。'
        : 'Phillip Ruffin is one of the most legendary casino and real estate moguls in Las Vegas. Starting from a gas station business in Texas, he made bold acquisitions during industry downturns, purchasing iconic casino properties such as Frontier and Treasure Island at bargain prices, and achieving billions of dollars in value appreciation during market recoveries. Known for "counter-cyclical acquisitions + extreme cash flow management," he is one of the few Las Vegas casino owners who maintains highly independent control. He is also a co-owner of Trump International Las Vegas and is regarded as a representative figure of old-school capitalism and the golden era of Vegas.',
      img: '/images/Phillip Ruffin.jpg' 
    },
    { 
      name: lang === 'zh' ? '杨依依' : 'Elaine Yang', 
      title: lang === 'zh' ? 'AI 101 Labs 创始人' : 'Founder, AI 101 Labs', 
      bio: lang === 'zh'
        ? 'Elaine Yang 为 AI 101 Labs 创始人，同时是活跃于 AI × Web3 × RWA 的早期投资人，担任 Waterdrip Capital 投资合伙人与 AI101 Labs GP。她为多家领先的区块链与人工智能项目担任顾问，深耕 AI 研究、GTM 策略与生态建设，并创立 AI & Web3 KOL 机构，专注内容增长与社区生态联动。'
        : 'Elaine Yang is the Founder of AI 101 Labs and an early investor active in AI × Web3 × RWA projects. She is an Investment Partner at Waterdrip Capital and GP at AI 101 Labs. Elaine advises multiple leading blockchain and AI projects, focusing on AI research, GTM strategy, and ecosystem building. She also founded an AI & Web3 KOL agency, specializing in content growth and community-ecosystem synergy.',
      img: '/images/elaine-yang.jpg' 
    },
    { 
      name: 'Jerry Yang', 
      title: lang === 'zh' ? 'AI Robotics Alliance 主席' : 'Chairman, AI Robotics Alliance', 
      bio: lang === 'zh'
        ? 'Jerry Yang 现任 AI Robotics Alliance 主席。'
        : 'Jerry Yang currently serves as Chairman of the AI Robotics Alliance.',
      img: '/images/jerry-yang.jpg' 
    },
    { 
      name: lang === 'zh' ? '于海迪' : 'Heidi Yu', 
      title: lang === 'zh' ? 'SocialBook 创始人兼 CEO' : 'Founder & CEO, SocialBook', 
      bio: lang === 'zh'
        ? '于海迪，全球最大红人大数据 SaaS 平台 SocialBook 创始人兼 CEO，2022 福布斯海外华人精英 Top 100、以及2022–2025连续上榜美国Inc.5000 增长最快的科技公司创始人，Draper university Google Female Launch导师。SocialBook 拥有 2 亿+ 全球红人资源，覆盖美国、欧洲、拉美、中东、东南亚、日韩，为品牌提供从种草到全球爆品的全链路能力。VIP 客户包括：阿里巴巴、华为、小米、美的、创维、小鹏、李宁、字节跳动、腾讯、网易、米哈游等。'
        : 'Heidi Yu: Founder & CEO of SocialBook, the world\'s largest influencer big data SaaS platform. She was named one of Forbes\' Top 100 Overseas Chinese Elites in 2022 and has consecutively ranked among the fastest-growing tech founders on the U.S. Inc. 5000 list from 2022 to 2025. She is also a Google Female Launch mentor at Draper University. SocialBook owns a global influencer network of over 200 million, covering the U.S., Europe, Latin America, the Middle East, Southeast Asia, Japan, and South Korea, providing brands with end-to-end capabilities from seeding to global viral hits. VIP clients include Alibaba, Huawei, Xiaomi, and others.',
      img: '/images/heidi yu.jpg' 
    },
    { 
      name: lang === 'zh' ? '孙溪唯' : 'Tammy Sun', 
      title: lang === 'zh' ? 'AI Reinvent Ventures 创始人' : 'Founder, AI Reinvent Ventures', 
      bio: lang === 'zh'
        ? '硅谷知名投资人，看Pre-IPO硬科技项目。'
        : 'Tammy Sun is a renowned Silicon Valley investor, focusing on pre-IPO hard-tech projects.',
      img: '/images/tammy-sun.png' 
    },
    { 
      name: lang === 'zh' ? '涂劲军' : 'Jingjun Tu', 
      title: lang === 'zh' ? '深蓝财经创始人' : 'Founder, Shenlan Finance', 
      bio: lang === 'zh'
        ? '涂劲军是深蓝财经创始人，同时也是财通社核心创始人与控股股东，他拥有资深财经媒体从业背景，早年任职华西都市报、每日经济新闻深耕调查财经领域，2011年创办深蓝财经并将其打造为国内头部财经新媒体平台，2019年创立财通社打造7×24小时全球财经快讯平台，还布局深蓝咨询等财经服务板块，深耕财经资讯传播与产业研究领域；作为行业资深从业者，他担任粤港澳大湾区财经新媒体领域核心行业代表，聚焦经济韧性、产业协同与新质生产力发展，提出广深港三地分工协作打造湾区版"南湾+硅谷"等专业观点，是国内财经新媒体领域兼具资深媒体经验与产业视野的核心创业者与行业推动者。'
        : 'Jingjun Tu is the founder of Shenlan Finance and the core founder and controlling shareholder of Cailianshe (China Finance News Agency). With extensive experience in financial media, he began his career at West China Metropolis Daily and National Business Daily, focusing on investigative financial journalism. In 2011, he founded Shenlan Finance and built it into one of China\'s leading financial new media platforms. In 2019, he established Cailianshe to create a 7×24-hour global financial news platform. He has also developed Shenlan Consulting and other financial service sectors, deeply engaged in financial information dissemination and industry research. As a senior industry practitioner, he serves as a core representative of the financial new media sector in the Guangdong-Hong Kong-Macao Greater Bay Area, focusing on economic resilience, industrial collaboration, and new productive forces development. He has proposed professional insights such as building a Bay Area version of "South Bay + Silicon Valley" through tripartite collaboration among Guangzhou, Shenzhen, and Hong Kong. He is a core entrepreneur and industry promoter in China\'s financial new media field with both senior media experience and industrial vision.',
      img: '/images/tujingjun.jpg' 
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold text-sm font-medium mb-2">
          {lang === 'zh' ? '行业头部大佬的实战经验、信息差分享' : 'Practical experience and insider insights from industry leaders.'}
        </p>
        <p className="text-gray-500 text-xs mb-16">
          {lang === 'zh' ? '按姓氏首字母排序' : 'Sorted alphabetically by last name.'}
        </p>
      </div>
      
      {/* Grid layout: 5 columns on large screens */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {speakers.map((s, idx) => (
            <div 
              key={idx} 
              className="relative"
            >
              {/* Speaker card */}
              <div 
                className="glass-card p-4 rounded-2xl cursor-pointer hover:border-gold/50 transition-all flex flex-col items-center text-center h-full"
                onClick={() => setActiveBio(activeBio === s.name ? null : s.name)}
              >
                {/* Profile image - no grayscale filter */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/30 mb-4 bg-gradient-to-br from-gold/10 to-transparent flex-shrink-0">
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gold/60 text-2xl font-bold bg-black/50">
                      {s.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                {/* Name */}
                <h3 className="font-bold text-sm mb-1 leading-tight">{s.name}</h3>
                
                {/* Title */}
                <p className="text-[9px] text-gold font-bold uppercase tracking-tight leading-tight mb-3">{s.title}</p>
                
                {/* Click hint */}
                <div className="mt-auto text-[8px] text-gray-600 uppercase font-bold tracking-widest">
                  {activeBio === s.name ? t.less : t.more}
                </div>
              </div>
              
              {/* Expandable bio overlay - positioned absolute to not affect layout */}
              {activeBio === s.name && (
                <div 
                  className="absolute top-full left-0 right-0 z-50 mt-2 p-4 bg-[#0a0a0a] border border-gold/30 rounded-xl shadow-2xl animate-fade-in"
                  style={{ minWidth: '280px', maxWidth: '350px' }}
                >
                  <div className="text-[11px] text-gray-300 leading-relaxed text-left">
                    {s.bio}
                  </div>
                  <button 
                    className="mt-3 text-[9px] text-gold uppercase font-bold tracking-widest hover:underline"
                    onClick={(e) => { e.stopPropagation(); setActiveBio(null); }}
                  >
                    {t.less}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
