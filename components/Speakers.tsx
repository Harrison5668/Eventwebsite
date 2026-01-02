
import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Speakers: React.FC<Props> = ({ t, lang }) => {
  const [activeBio, setActiveBio] = useState<string | null>(null);

  // Speaker data - custom order
  const speakers = [
    { 
      name: 'Stavros Anthony', 
      title: lang === 'zh' ? '内华达州副州长' : 'Lieutenant Governor of Nevada', 
      bio: lang === 'zh'
        ? '在拉斯维加斯居住44年，曾任警察局局长及多个分局、财务与财产犯罪局局长，曾任市议员及市议会代理市长，长期致力于公共安全、城市治理与教育事务，具有深厚的政策背景与城市治理经验，使其能够为国际企业和高端团队提供独特的资源和战略视角。'
        : 'A 44-year resident of Las Vegas, Stavros Anthony has served as Chief of Police, commanding multiple divisions including the Financial and Property Crimes Bureau. He has also served as City Councilman and Acting Mayor of the City Council. With decades of dedication to public safety, urban governance, and education, his deep policy expertise and city management experience enable him to provide international businesses and high-caliber teams with unique resources and strategic perspectives.',
      img: '/images/Stavros Anthony.png' 
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
      name: lang === 'zh' ? '陈喆' : 'Zhe Chen', 
      title: lang === 'zh' ? '法拉第未来全球合伙人&VP' : 'Global Partner & VP of Faraday Future', 
      bio: lang === 'zh'
        ? '陈喆，法拉第未来全球合伙人&VP，致力于推动电动汽车和智能出行领域的创新发展。'
        : 'Zhe Chen, Global Partner & VP of Faraday Future, dedicated to driving innovation in electric vehicles and smart mobility.',
      img: '/images/zhe-chen.png' 
    },
    { 
      name: lang === 'zh' ? '王紫' : 'Ray Wang', 
      title: lang === 'zh' ? '全球网红经济联盟 & Master TV MCN 联合创始人' : 'Co-founder, Global Influencer Economy Alliance & Master TV MCN', 
      bio: lang === 'zh'
        ? '王紫：名人传媒与Master TV MCN的联合创始人，拥有超过20年横跨娱乐、媒体、营销与公关领域的丰富经验。他长期活跃于中美及港台娱乐与名人事务的前沿，擅长策划并执行国际级名人、明星、企业精英的公关、合作与品牌推广项目。王紫被誉为"名人的智囊"，在推动中美文化交流、促成国际大型活动（如格莱美、艾美奖中国代表团首次参与）方面创造了多个"首次"。近年来，他专注于直播电商、短视频营销、AI视频制作、名人加密币发行等新兴领域，并联合创办了具有全球影响力的"网红经济联盟"及"贝美好莱坞网红奖"。在其领导下，公司不仅是TikTok官方合作服务商，更构建了覆盖全美六大短视频平台及一线电商的整合营销网络，持续为品牌与名人提供从顶层公关到销售转化的全方位服务。'
        : 'Ray Wang：Co-founder of Celebrity Media and Master TV MCN, with 20+ years\' experience across entertainment, media, marketing, and PR. A veteran of China, the U.S., Hong Kong, and Taiwan\'s celebrity industry, he specializes in PR campaigns, collaborations, and brand promotion for top-tier international celebrities and corporate elites. Known as a "celebrity think tank," Wang pioneered Sino-U.S. cultural exchanges, including Chinese delegations\' historic participation in the Grammy and Emmy Awards. Recently, he has focused on live-streaming e-commerce, short-video marketing, AI video production, and celebrity-themed crypto projects. He also co-founded the global Influencer Economy Alliance and Bemy Hollywood Influencer Awards. Under his leadership, the company—an official TikTok service partner—has built an integrated marketing network across the top six U.S. short-video and e-commerce platforms, offering end-to-end services from PR strategy to sales conversion.',
      img: '/images/wangzi.jpg' 
    },
    { 
      name: lang === 'zh' ? '赵兢' : 'Jing Zhao', 
      title: lang === 'zh' ? '全球企业社会责任基金会主席｜联合国世界妇女组织全球女性领导力峰会主席' : 'Chair, Global CSR Foundation | Chair, UN Women\'s Global Women Leadership Summit', 
      bio: lang === 'zh'
        ? '赵兢女士是全球CSR基金会创始人兼首席执行官，联合国世界妇女组织全球女性领导力峰会主席，拥有三十年跨文化战略、可持续发展与NGO管理经验。她曾获 NAWBO 女性企业成就奖和中华文化基金会全球成就奖，长期推动教育、可持续发展、气候行动等领域的国际合作，并成功搭建中美企业界、政策界高层交流的桥梁。'
        : 'Jing Zhao Cesarone is the Founder and CEO of the Global CSR Foundation and Chair of the UN Women\'s Global Women Leadership Summit. She has over 30 years of experience in cross-cultural strategy, sustainable development, and NGO management. She has received the NAWBO Women\'s Achievement Award and the Global Achievement Award from the Chinese Culture Foundation. She has long promoted international cooperation in education, sustainability, and climate action, successfully bridging high-level exchanges between businesses and policymakers in China and the U.S.',
      img: '/images/jing-zhao.jpg' 
    },
    { 
      name: 'Diana Zhang', 
      title: lang === 'zh' ? '亚太世界贸易商务联盟副会长｜杭州世界贸易中心董事长' : 'Vice President, APAC World Trade Group | Chairwoman, Hangzhou World Trade Center', 
      bio: lang === 'zh'
        ? '张红梅女士，现任亚太世界贸易商务联盟副会长，是长期活跃于美国硅谷的投资人。她曾联合创办北京大学公益孵化器与北大未名天使基金，现担任美国华人专家会常务理事、美国飞虎文化交流协会执行会长、亚太世贸商务联盟副会长及杭州世贸中心董事长，致力于推动中美商业交流、资本合作与跨国项目落地。'
        : 'Diana Zhang currently serves as Vice President of APAC World Trade Group and is a long-term active investor in Silicon Valley. She co-founded the Peking University Public Welfare Incubator and the PKU Weiming Angel Fund. She also serves as Executive Director of the Chinese American Experts Association, Executive President of the Flying Tigers Cultural Exchange Association, Vice President of APAC World Trade Group, and Chairwoman of Hangzhou World Trade Center. She is dedicated to promoting business exchanges, capital cooperation, and cross-border project implementation between China and the United States.',
      img: '/images/diana-zhang.png' 
    },
    { 
      name: lang === 'zh' ? '蔡继军' : 'Jijun Cai', 
      title: lang === 'zh' ? 'GPTDAO联合发起人｜FlowGen创始人' : 'Co-founder, GPTDAO | Founder, FlowGen', 
      bio: lang === 'zh'
        ? 'FlowGen 创始人，GPTDAO 联创、连续创业者，拥有十年以上市场、产品与技术经验。早年在硅谷从事 iOS 开发与产品管理，先后主导多平台应用、社交增长工具及融资撮合平台的研发与落地。2023 年在加州帕洛阿尔托共同创办全球最大的生成式AI社区品牌GPTDAO，在硅谷和旧金山多次成功举办了全球最大的生成式AI峰会；随后创立FlowGen，以 AI 替代营销团队，帮助企业与创作者实现 100倍降本增效，致力于用技术创新重塑组织效率与商业模式。'
        : 'Jijun Cai is a serial entrepreneur with over 10 years of experience in marketing, product, and technology. He previously worked in Silicon Valley on iOS development and product management, leading multi-platform applications, social growth tools, and financing matchmaking platforms. In 2023, he co-founded GPTDAO in Palo Alto, creating the largest generative AI community brand globally, and successfully hosted multiple large-scale generative AI summits in Silicon Valley and San Francisco. He later founded FlowGen, replacing marketing teams with AI to help enterprises and creators achieve 100× cost reduction and efficiency improvement, aiming to reshape organizational efficiency and business models through technological innovation.',
      img: '/images/caijijun.jpg' 
    },
    { 
      name: 'Rebecca Wang', 
      title: lang === 'zh' ? 'RWAWA 联合创始人' : 'Co-founder, RWAWA', 
      bio: lang === 'zh'
        ? '专注帮助出海企业和资产型公司等现有实物资产进行上链评估和融资服务，依托美国本地硅谷、纽约、波士顿的科创与资本网络社群，帮助其做市场推广和对接美国本地资源。有多年在美国从事二手设备和算力资产回收，对资产定价、流通和合规有一线经验。'
        : 'Rebecca Wang focuses on helping overseas expansion enterprises and asset-based companies with blockchain evaluation and financing services for existing physical assets. Leveraging local Silicon Valley, New York, and Boston tech innovation and capital network communities, she assists with market promotion and connecting with U.S. local resources. With years of experience in the U.S. engaging in used equipment and computing power asset recovery, she has firsthand experience in asset pricing, circulation, and compliance.',
      img: '/images/rebecca wang.jpg' 
    },
    { 
      name: lang === 'zh' ? '应持荣' : 'Roy Ying', 
      title: lang === 'zh' ? '美国兰州拉面集团董事长｜中美友好城市促进会会长' : 'Chairman, American Lanzhou Noodle Group | President, China-US Sister Cities Promotion Association', 
      bio: lang === 'zh'
        ? '应持荣身兼担任美国华人商会荣誉会长、中美投资博览会主席、美国投资协会会长等数职，长期活跃于中美经贸与产业交流领域。他致力于在海外弘扬中华传统饮食文化，在应持荣的带领下，"中华第一面"兰州拉面持续实现规模化发展，并将走进更大的世界舞台。'
        : 'Roy Ying serves in multiple capacities including Honorary President of the American Chinese Chamber of Commerce, Chairman of the China-US Investment Expo, and President of the American Investment Association. He has long been active in the field of China-US trade and industrial exchange. Dedicated to promoting traditional Chinese culinary culture overseas, under his leadership, Lanzhou Noodles—known as "China\'s First Noodle"—continues to achieve scaled development and is entering larger global stages.',
      img: '/images/应持荣Roy Ying.jpg' 
    },
    { 
      name: 'Anthony Chow', 
      title: lang === 'zh' ? 'Newegg Commerce新蛋商务首席执行官' : 'CEO, Newegg Commerce', 
      bio: lang === 'zh'
        ? '自 2020 年起负责制定公司战略、领导全球业务并推动企业转型和增长。在他的领导下，Newegg 重塑了平台运营模式，实现经营结构优化，并成功在纳斯达克上市，他也积极推动公司创新与市场扩展。'
        : 'Since 2020, Anthony Chow has been responsible for formulating company strategy, leading global operations, and driving enterprise transformation and growth. Under his leadership, Newegg has reshaped its platform operating model, optimized its business structure, and successfully listed on NASDAQ. He actively promotes company innovation and market expansion.',
      img: '/images/Anthony Chow.jpg' 
    },
    { 
      name: 'Jerry Yang', 
      title: lang === 'zh' ? 'AI Robotics Alliance 主席｜StarBot CTO' : 'Chairman, AI Robotics Alliance | CTO, StarBot', 
      bio: lang === 'zh'
        ? 'Jerry Yang 现任 AI Robotics Alliance 主席。'
        : 'Jerry Yang currently serves as Chairman of the AI Robotics Alliance.',
      img: '/images/jerry-yang.jpg' 
    },
    { 
      name: lang === 'zh' ? '杨依依' : 'Elaine Yang', 
      title: lang === 'zh' ? '水滴资本投资合伙人｜AI 101 Labs 创始人' : 'Investment Partner, Waterdrip Capital | Founder, AI 101 Labs', 
      bio: lang === 'zh'
        ? 'Elaine Yang 为 AI 101 Labs 创始人，同时是活跃于 AI × Web3 × RWA 的早期投资人，担任 Waterdrip Capital 投资合伙人与 AI101 Labs GP。她为多家领先的区块链与人工智能项目担任顾问，深耕 AI 研究、GTM 策略与生态建设，并创立 AI & Web3 KOL 机构，专注内容增长与社区生态联动。'
        : 'Elaine Yang is the Founder of AI 101 Labs and an early investor active in AI × Web3 × RWA projects. She is an Investment Partner at Waterdrip Capital and GP at AI 101 Labs. Elaine advises multiple leading blockchain and AI projects, focusing on AI research, GTM strategy, and ecosystem building. She also founded an AI & Web3 KOL agency, specializing in content growth and community-ecosystem synergy.',
      img: '/images/elaine-yang.jpg' 
    },
    { 
      name: lang === 'zh' ? '艾诚' : 'Gloria Ai', 
      title: lang === 'zh' ? '《艾问iAsk》创始人｜央视原财经评论员' : 'Founder of iAsk Media & Capital | Former CCTV Financial Commentator', 
      bio: lang === 'zh'
        ? '艾诚（Gloria Ai），主持人、投资人、《艾问 iAsk》创始人，曾任央视驻纽约财经评论员，现为《艾问人物》出品人，博鳌亚洲论坛等国际财智盛会常邀双语主持。艾诚是哈佛、北大、中传校友代表，清华苏世民学院业界导师、哈佛大学第一代校友导师，YPO成员。记录近2000位时代人物，实现全球百家媒体传播。曾获福布斯亚洲30U30、WEF全球杰出青年，著有多部财经著作。'
        : 'Gloria Ai is a host, investor, and founder of iAsk Media & Capital. She formerly served as CCTV\'s financial commentator in New York and is now the producer of "iAsk Figures," a frequently invited bilingual host at international business forums including the Boao Forum for Asia. An alumna of Harvard, Peking University, and Communication University of China, she serves as an industry mentor at Tsinghua Schwarzman College, a first-generation alumni mentor at Harvard University, and is a YPO member. She has documented nearly 2,000 influential figures with global media coverage across hundreds of outlets. Gloria has received Forbes Asia 30 Under 30 and WEF Global Shaper honors, and authored multiple financial publications.',
      img: '/images/艾诚.jpg' 
    },
    { 
      name: lang === 'zh' ? '王明明' : 'Mingming Wang', 
      title: lang === 'zh' ? '美中电商贸易协会执行会长｜美国风雷国际集团总裁' : 'Executive President, US-China E-commerce Trade Association | President, Fenglei International Group USA', 
      bio: lang === 'zh'
        ? '长期深耕中美电商与跨境贸易领域。她拥有国际金融、会计与金融方向 MBA 的复合学术背景，持续推动中美企业在电商、贸易与国际化发展中的深度合作。曾获全球杰出女性奖、加州杰出贡献奖，并当选深圳市侨联第七届海外委员。'
        : 'Mingming Wang has long been deeply engaged in China-US e-commerce and cross-border trade. She holds an MBA with a composite academic background in international finance, accounting, and finance, continuously promoting in-depth cooperation between Chinese and American enterprises in e-commerce, trade, and international development. She has received the Global Outstanding Women Award and the California Outstanding Contribution Award, and was elected as an overseas committee member of the 7th Shenzhen Federation of Returned Overseas Chinese.',
      img: '/images/王明明.jpg' 
    },
    { 
      name: lang === 'zh' ? '康邈' : 'Miao Kang', 
      title: lang === 'zh' ? 'Witti Marketing 创始人 & CEO' : 'Founder & CEO, Witti Marketing', 
      bio: lang === 'zh'
        ? '康邈女士在 AI 与电商领域深耕 10 余年，拥有丰富的全链路营收增长实践经验，曾帮助上百家美国及中国出海企业实现 10 倍以上的业务增长。她擅长将品牌内容、数据洞察与商业目标深度融合，打造覆盖从流量获取到转化的长期增长系统能力，推动企业实现可持续发展。康邈女士曾入选《福布斯》2024 百强精英榜。'
        : 'Miao Kang has been deeply engaged in the AI and e-commerce sectors for over 10 years, with extensive full-cycle revenue growth experience. She has helped hundreds of American and Chinese overseas enterprises achieve more than 10x business growth. She excels at deeply integrating brand content, data insights, and business objectives to build long-term growth system capabilities covering traffic acquisition to conversion, driving sustainable enterprise development. Ms. Kang was selected for Forbes\' 2024 Top 100 Elite List.',
      img: '/images/康邈.png' 
    },
    { 
      name: lang === 'zh' ? '侯昊' : 'Houston Hou', 
      title: lang === 'zh' ? '全球创新中心国际教育委员会执行秘书长' : 'Executive Secretary-General, International Education Committee, Global Innovation Center', 
      bio: lang === 'zh'
        ? '中欧EMBA，WYF全球召集人。他独家运营十余个全球顶尖IP，覆盖20国及中国千所国际学校数十万学子。面对传统学历与科层制的失效，他主张打破封闭的"遗留世界 (Legacy World)"，构建基于结果证明的"开放世界"。通过 BloomAI 协议，他正推动人类从被动的"工业零件"进化为主动的"无界构建者"，让每一份创造力在 AI 时代获得真实的确权与绽放。'
        : 'Houston Hou holds an EMBA from CEIBS and serves as the Global Convener of WYF. He exclusively operates over ten top global IPs, covering hundreds of thousands of students across 20 countries and thousands of international schools in China. Facing the failure of traditional credentials and hierarchical systems, he advocates breaking away from the closed "Legacy World" to build an "Open World" based on proof of results. Through the BloomAI protocol, he is driving humanity\'s evolution from passive "industrial components" to proactive "boundless builders," enabling every creative contribution to be authentically recognized and flourish in the AI era.',
      img: '/images/侯昊.jpg' 
    },
    { 
      name: lang === 'zh' ? '魏海鹰' : 'Haiying Wei', 
      title: lang === 'zh' ? '香港寰宇投资（集团）董事长｜广东省第十届、十一届政协委员' : 'Chairman, Horizon International Investment (Group) | Member of 10th & 11th Guangdong CPPCC', 
      bio: lang === 'zh'
        ? '魏海鹰构建了横跨制造、投资、金融等领域的产业矩阵，旗下香港寰宇投资（集团）有限公司为香港联交所上市公司（股份代号 1046），中山市金日铝业有限公司作为核心制造企业，聚焦新型合金材料领域，实力雄厚。同时身兼广东省十届、十一届政协委员，中山潮人海外联谊会会长、美国南加州华人社团大联盟荣誉主席等职，持续搭建海内外经贸与文化交流桥梁。'
        : 'Haiying Wei has built an industrial matrix spanning manufacturing, investment, and finance. His company, Horizon International Investment (Group) Limited, is listed on the Hong Kong Stock Exchange (Stock Code: 1046). The core manufacturing enterprise, Zhongshan Jinri Aluminum Co., Ltd., focuses on new alloy materials. He also serves as a member of the 10th and 11th Guangdong CPPCC, President of the Zhongshan Chaozhou Overseas Association, and Honorary Chairman of the Southern California Chinese Associations Alliance. He continuously builds bridges for trade and cultural exchange between China and overseas markets.',
      img: '/images/haiying-wei.jpeg' 
    },
    { 
      name: lang === 'zh' ? '林哲冰' : 'Ice Lin', 
      title: lang === 'zh' ? 'Magic Ice Cube 创始人｜胡润 Under 30' : 'Founder, Magic Ice Cube | Hurun Under 30', 
      bio: lang === 'zh'
        ? '林哲冰是 Magic Ice Cube 创始人，将其打造为总部位于洛杉矶的跨国贸易平台，并在四年内实现 3.5 亿美元营收。他入选胡润 Under 30，现兼任世界精英领袖联盟主席、中美国际经济合作联盟青委主席、蓝源民族产业研究院副院长、国际潮青联合会副会长、美国粤港澳大湾区企业家总商会委员，以及 G20 青年企业家联盟菁英人才，专注全球贸易创新与国际商业合作。'
        : 'Ice Lin founded Magic Ice Cube, building it into a Los Angeles-based multinational trading platform with $350 million in revenue within four years. He was listed on Hurun Under 30 and currently serves as Chairman of the World Elite Leaders Alliance, Chair of the Young Committee of the China-U.S. International Economic Cooperation Alliance, Vice President of the International Chaoqing Federation, Vice President of the U.S. Guangdong-Hong Kong-Macao Bay Area Entrepreneurs Chamber, and G20 Young Entrepreneurs Elite. He focuses on global trade innovation and international business cooperation.',
      img: '/images/ice-lin.png' 
    },
    { 
      name: lang === 'zh' ? '林光' : 'Guang Lin', 
      title: lang === 'zh' ? '全球网红经济联盟主席｜全美浙江总商会会长' : 'Chairman, Global Influencer Economy Alliance | President, U.S. Zhejiang General Chamber of Commerce', 
      bio: lang === 'zh'
        ? '他从将温州打火机成功带入美国，并将价值$20亿的专利无私奉献给整个行业，并赢得"打火机大王"美誉，到创立具有全美影响力的华人商会，再到前瞻性地布局全球网红经济，其商业生涯是一部不断跨越与创新的传奇。他亦是著名的公益践行者，曾获"华侨华人抗疫英雄"称号。'
        : 'Guang Lin is the founder of the Global Influencer Economy Alliance (GIEA) and President of the U.S. Zhejiang General Chamber of Commerce. His legendary business career is a testament to continuous breakthrough and innovation. From his early success in introducing Wenzhou-made lighters to the U.S. market—earning him the title of "Lighter King" after selflessly donating a $2 billion patent to the entire industry—to founding one of the most influential Chinese chambers of commerce in America, and now visionary leadership in the global influencer economy, his journey has been remarkable. Beyond business, he is a prominent philanthropist and was honored with the title of "Hero of the Overseas Chinese Community in the Fight Against the Pandemic."',
      img: '/images/linguang.jpg' 
    },
    { 
      name: lang === 'zh' ? '李尚龙' : 'Shanglong Li', 
      title: lang === 'zh' ? '畅销书作家｜原点纪创始人' : 'Bestselling Author | Founder of Levault.ai', 
      bio: lang === 'zh'
        ? '作品销量超千万册的全球畅销书作家，AI大V博主，Aivolution Capital的创始合伙人，专注于早期人工智能投资，同时也是Levault.ai和原点纪MCN的创始人。此外，他还担任加州大学与加州科技大学的客座教授。'
        : 'A globally bestselling author with over ten million copies sold, a leading AI influencer, and a founder of AIvolution Capital, focusing on early-stage AI investments. He is also the founder of Levault.ai and Yuandianji MCN in Hangzhou. In addition, he serves as a visiting professor at the University of California and California Science and Technology University.',
      img: '/images/shanglong-li.jpg' 
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
      name: 'Heidi Yu', 
      title: lang === 'zh' ? 'SocialBook 创始人兼 CEO（全球最大红人大数据 SaaS 平台）' : 'Founder & CEO, SocialBook', 
      bio: lang === 'zh'
        ? '于海迪，全球最大红人大数据 SaaS 平台 SocialBook 创始人兼 CEO，2022 福布斯海外华人精英 Top 100、以及2022–2025连续上榜美国Inc.5000 增长最快的科技公司创始人，Draper university Google Female Launch导师。SocialBook 拥有 2 亿+ 全球红人资源，覆盖美国、欧洲、拉美、中东、东南亚、日韩，为品牌提供从种草到全球爆品的全链路能力。VIP 客户包括：阿里巴巴、华为、小米、美的、创维、小鹏、李宁、字节跳动、腾讯、网易、米哈游等。'
        : 'Heidi Yu: Founder & CEO of SocialBook, the world\'s largest influencer big data SaaS platform. She was named one of Forbes\' Top 100 Overseas Chinese Elites in 2022 and has consecutively ranked among the fastest-growing tech founders on the U.S. Inc. 5000 list from 2022 to 2025. She is also a Google Female Launch mentor at Draper University. SocialBook owns a global influencer network of over 200 million, covering the U.S., Europe, Latin America, the Middle East, Southeast Asia, Japan, and South Korea, providing brands with end-to-end capabilities from seeding to global viral hits. VIP clients include Alibaba, Huawei, Xiaomi, and others.',
      img: '/images/heidi yu.jpg' 
    },
    { 
      name: lang === 'zh' ? '吴瑜章' : 'Gary the Texan Wu', 
      title: lang === 'zh' ? '前沃尔沃集团全球副总裁｜拉斯维加斯市政府中国关系专员' : 'Former Global VP, Volvo Group | Las Vegas City Government China Relations Commissioner', 
      bio: lang === 'zh'
        ? '吴瑜章，曾被誉为"中国商用车行业的精神领袖"，现任拉斯维加斯最豪华中式庄园TotalMax Homes CEO、陕西建工集团华山国际工程公司独立董事、CIMC中集集团高级战略顾问、美国中西部资本联盟总顾问兼中国总部副总代表。著有《渠成，水自到》等多部商业管理类书籍，常受邀在国内外顶级论坛演讲。'
        : 'Gary the Texan Wu, once hailed as the "Spiritual Leader of China\'s Commercial Vehicle Industry," currently serves as CEO of TotalMax Homes, Las Vegas\' most luxurious Chinese-style estate, Independent Director of Shaanxi Construction Engineering Group\'s Huashan International Engineering Company, Senior Strategic Advisor to CIMC Group, and Chief Advisor and Deputy Chief Representative of China Headquarters for the U.S. Midwest Capital Alliance. He has authored several business management books including "When the Channel is Ready, Water Flows Naturally" and is frequently invited to speak at top-tier forums both domestically and internationally.',
      img: '/images/Gary the Texan Wu.png' 
    },
    { 
      name: lang === 'zh' ? '荷兰莉' : 'Kimberly Holland', 
      title: lang === 'zh' ? '国际著名双语主持人｜Master TV MCN 联合创始人' : 'Internationally Renowned Bilingual Host | Co-founder, Master TV MCN', 
      bio: lang === 'zh'
        ? '金发碧眼的荷兰莉，讲一口流利、无口音的中文，她对中美文化、娱乐、外交方面有非常独特贡献，是Master TV MCN联合创始人，担任美国国际级和国家级活动和美国几个总统演讲的主持人，也在娱乐、电影融资和娱乐项目开发领域的卓越成就而闻名。'
        : 'With blonde hair and blue eyes, Kimberly Holland speaks fluent, accent-free Chinese. She has made unique contributions to Sino-U.S. cultural exchange, entertainment, and diplomacy. As co-founder of Master TV MCN, she has hosted international and national events in the U.S., including presidential addresses. She is also renowned for her outstanding achievements in entertainment, film financing, and entertainment project development.',
      img: '/images/Kimberly Holland.jpg' 
    },
    { 
      name: lang === 'zh' ? '北美崔哥' : 'Brother Sway', 
      title: lang === 'zh' ? '知名文化评论人｜头部内容创作者' : 'Renowned Cultural Commentator | Top-tier Content Creator', 
      bio: lang === 'zh'
        ? '北美崔哥（崔宝印）：活跃在美加华人圈的著名脱口秀艺人和文化评论人，以幽默犀利的风格讲述中美文化差异、移民生活和社会现象。在抖音等中国短视频平台拥有约500万粉丝，通过地道北京口音与美式幽默结合的表演，成为北美华人社群里极具辨识度的跨文化观察者。'
        : 'Cui Baoyin: a well-known stand-up comedian and cultural commentator active in the Chinese communities across North America. He humorously and incisively explores cultural differences between China and the U.S., immigrant life, and social phenomena. With 5 million followers across all platforms, his performances—blending authentic Beijing accents with American-style humor—have made him a highly recognizable cross-cultural observer within the North American Chinese community.',
      img: '/images/Cui Baoyin.png' 
    },
    { 
      name: lang === 'zh' ? '黄梦奇' : 'Lawrence Huang', 
      title: lang === 'zh' ? 'LeaderXport 出海联盟创始人｜百万粉丝博主' : 'Founder, LeaderXport | Million-Follower Influencer', 
      bio: lang === 'zh'
        ? '黄梦奇是AI智能出海伴侣创始人、知名律师、新浪财经专栏作家，首届「北美出海吐槽大会」主办方，因分享出海和法律知识获得百万粉丝，致力于帮助中国出海品牌从"经验驱动"时代迈向"智能驱动"时代。'
        : 'Lawrence Huang is the founder of AI-powered global expansion companion, a prominent attorney, and a columnist for Sina Finance. He organized the inaugural "North America Go-Global Roast Conference" and gained a million followers by sharing insights on overseas expansion and legal expertise. He is dedicated to helping Chinese brands transition from an "experience-driven" era to an "intelligence-driven" era.',
      img: '/images/Lawrence Huang.jpg' 
    },
    { 
      name: lang === 'zh' ? 'Jannie袁锦仪' : 'Jannie Yuan', 
      title: lang === 'zh' ? 'BossHub老板荟创始人兼 CEO' : 'Founder & CEO, BossHub', 
      bio: lang === 'zh'
        ? '袁锦仪创立首个系统记录美国华人创业生态的商业访谈频道《Jannie 探美国》，全网近百万粉丝，并发起美国 CEO 实战商学院，持续链接在美创业者、企业家与产业资源。作为天使投资人，Jannie 长期关注中国品牌出海与美国本地化落地，致力于推动华人创业者的长期成长与全球发展。'
        : 'Jannie Yuan founded the first business interview channel systematically documenting the Chinese entrepreneurial ecosystem in America, "Jannie Explores America," with nearly one million followers across all platforms. She initiated the U.S. CEO Business Academy, continuously connecting entrepreneurs, business leaders, and industry resources in the U.S. As an angel investor, Jannie has long focused on Chinese brands going global and localizing in America, dedicated to promoting the long-term growth and global development of Chinese entrepreneurs.',
      img: '/images/Jannie袁锦仪.jpg' 
    },
    { 
      name: 'Tammy Sun', 
      title: lang === 'zh' ? 'AI Reinvent Ventures 创始人' : 'Founder, AI Reinvent Ventures', 
      bio: lang === 'zh'
        ? 'AI Reinvent Ventures 的业务包括美元基金的 LP 投资、数字资产资管以及 AI 全球新媒体，通过构建全球化投资，加速 AI 创新与资本的重塑。'
        : 'AI Reinvent Ventures\' business includes LP investments in USD funds, digital asset management, and AI global new media, accelerating the transformation of AI innovation and capital through building global investment portfolios.',
      img: '/images/tammy-sun.png' 
    },
    { 
      name: 'John Chen', 
      title: lang === 'zh' ? 'AIU.WIKI 创始人｜前中国社会科学院研究员' : 'Founder, AIU.WIKI | Former Researcher, Chinese Academy of Social Sciences', 
      bio: lang === 'zh'
        ? '前中国社会科学院研究员，长期从事人工智能、知识体系与社会治理相关研究。他致力于探索 AI 如何重构人类认知结构与知识协作方式，并发起 AIU.WIKI 项目，打造面向未来的开放式 AI 知识平台，推动人工智能在公共认知、社会创新与跨学科研究中的应用与落地。'
        : 'Former researcher at the Chinese Academy of Social Sciences with long-term focus on artificial intelligence, knowledge systems, and social governance. He is dedicated to exploring how AI reconstructs human cognitive structures and knowledge collaboration methods. He initiated the AIU.WIKI project to build a future-oriented open AI knowledge platform, promoting the application and implementation of artificial intelligence in public cognition, social innovation, and interdisciplinary research.',
      img: '/images/JOHN CHEN.jpg' 
    },
    { 
      name: lang === 'zh' ? '陈嘉海' : 'Harrison Chen', 
      title: lang === 'zh' ? 'PurpleCloudAI联合创始人' : 'Co-founder, PurpleCloudAI', 
      bio: lang === 'zh'
        ? '专注为北美法律行业提供人工智能解决方案与智能代理服务。通过 AI 语音助手、文档与工作流程自动化，他帮助律师事务所显著提升效率、优化运营并降低人力成本。无需改变现有流程，每年即可为律所节省数十万美元，同时加快案件处理速度并增强运营稳定性。作为 AI 在法律行业应用的先行者，Harrison 擅长快速洞察业务场景，提供可直接投入生产的前沿解决方案。'
        : 'Harrison Chen focuses on providing artificial intelligence solutions and intelligent agent services for the North American legal industry. Through AI voice assistants, document and workflow automation, he helps law firms significantly improve efficiency, optimize operations, and reduce labor costs. Without changing existing processes, law firms can save hundreds of thousands of dollars annually while accelerating case processing speed and enhancing operational stability. As a pioneer in AI applications in the legal industry, Harrison excels at quickly understanding business scenarios and providing cutting-edge solutions ready for production deployment.',
      img: '/images/Harrison Chen.png' 
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-[#030303]">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold text-sm font-medium mb-16">
          {lang === 'zh' ? '行业头部大佬的实战经验、信息差分享' : 'Practical experience and insider insights from industry leaders.'}
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
