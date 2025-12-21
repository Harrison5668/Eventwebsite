
import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Ecosystem: React.FC<Props> = ({ t, lang }) => {
  const [activeRegion, setActiveRegion] = useState<number>(0); // Start from North America (index 0)

  const regions = [
    { name: lang === 'zh' ? '北美洲' : 'NORTH AMERICA', img: '🌎', index: 0 },
    { name: lang === 'zh' ? '中南美洲' : 'LATIN AMERICA', img: '🌍', index: 1 },
    { name: lang === 'zh' ? '欧洲' : 'EUROPE', img: '🌍', index: 2 },
    { name: lang === 'zh' ? '非洲及中东' : 'AFRICA & THE MIDDLE EAST', img: '🌍', index: 3 },
    { name: lang === 'zh' ? '亚洲及太平洋' : 'ASIA & THE PACIFIC', img: '🌏', index: 4 }
  ];

  // All regions' cities data
  const allCities = {
    0: [ // North America
      { en: "ANCHORAGE", zh: "安克雷奇" }, { en: "ARKANSAS", zh: "阿肯色" }, { en: "ARUBA", zh: "阿鲁巴" },
      { en: "ATLANTA", zh: "亚特兰大" }, { en: "BALTIMORE", zh: "巴尔的摩" }, { en: "BIRMINGHAM", zh: "伯明翰" },
      { en: "BOSTON", zh: "波士顿" }, { en: "CANCUN", zh: "坎昆" }, { en: "CHARLESTON", zh: "查尔斯顿" },
      { en: "CHICAGO", zh: "芝加哥" }, { en: "CULIACAN", zh: "库利亚坎" }, { en: "CURACAO", zh: "库拉索" },
      { en: "DELAWARE", zh: "特拉华" }, { en: "DENVER", zh: "丹佛" }, { en: "DETROIT", zh: "底特律 / 温莎" },
      { en: "DULLES", zh: "杜勒斯国际机场" }, { en: "EDMONTON", zh: "埃德蒙顿" }, { en: "GUADALAJARA", zh: "瓜达拉哈拉" },
      { en: "HAITI", zh: "海地" }, { en: "HALIFAX", zh: "哈利法克斯" }, { en: "HARRISBURG", zh: "哈里斯堡" },
      { en: "HAVANA", zh: "哈瓦那" }, { en: "HOUSTON", zh: "休斯顿" }, { en: "INDIANAPOLIS", zh: "印第安纳波利斯" },
      { en: "KANSAS CITY", zh: "堪萨斯城" }, { en: "KENTUCKY", zh: "肯塔基" }, { en: "LAS VEGAS", zh: "拉斯维加斯" },
      { en: "MCALLEN", zh: "麦卡伦" }, { en: "LONG BEACH", zh: "长滩" }, { en: "LOS ANGELES", zh: "洛杉矶" },
      { en: "MERIDA", zh: "梅里达" }, { en: "MEXICO CITY", zh: "墨西哥城" }, { en: "MIAMI", zh: "迈阿密" },
      { en: "MONTANA", zh: "蒙大拿" }, { en: "MONTERREY", zh: "蒙特雷" }, { en: "MONTREAL", zh: "蒙特利尔" },
      { en: "NAUCALPAN", zh: "瑙卡尔潘" }, { en: "NEW ORLEANS", zh: "新奥尔良" }, { en: "NEW YORK", zh: "纽约" },
      { en: "NIAGARA", zh: "布法罗尼亚加拉" }, { en: "NORFOLK", zh: "诺福克" }, { en: "NUEVO LAREDO", zh: "新拉雷多" },
      { en: "ORLANDO", zh: "奥兰多" }, { en: "OXNARD", zh: "奥克斯纳德" }, { en: "PALM BEACH", zh: "棕榈滩" },
      { en: "PHILADELPHIA", zh: "费城" }, { en: "PITTSBURGH", zh: "匹兹堡" }, { en: "PORTLAND", zh: "波特兰" },
      { en: "PROVIDENCE", zh: "普罗维登斯" }, { en: "QUERETARO", zh: "克雷塔罗" }, { en: "SAN DIEGO", zh: "圣迭戈" },
      { en: "SAN FRANCISCO", zh: "旧金山" }, { en: "SAN LUIS POTOSI", zh: "圣路易斯波托西" }, { en: "SASKATOON", zh: "萨斯卡通" },
      { en: "SAVANNAH", zh: "萨凡纳" }, { en: "SEATTLE", zh: "西雅图" }, { en: "ST. LOUIS", zh: "圣路易斯" },
      { en: "TACOMA", zh: "塔科马" }, { en: "TAMPA", zh: "坦帕湾" }, { en: "TORONTO", zh: "多伦多" },
      { en: "UTAH", zh: "犹他" }, { en: "VANCOUVER", zh: "温哥华" }, { en: "VERACRUZ", zh: "韦拉克鲁斯" },
      { en: "WASHINGTON, D.C.", zh: "华盛顿特区" }, { en: "WINNIPEG", zh: "温尼伯" }, { en: "SACRAMENTO", zh: "北加州-萨克拉门托" },
      { en: "FORT LAUDERDALE", zh: "劳德代尔堡" }, { en: "MAZATLÁN", zh: "马萨特兰" }, { en: "PUEBLA", zh: "普埃布拉" },
      { en: "SAN JUAN", zh: "圣胡安" }, { en: "SAN MIGUEL DE ALLENDE", zh: "圣米格尔德阿连德" }
    ],
    1: [ // Latin America
      { en: "ASUNCION", zh: "亚松森" }, { en: "BARRANQUILLA", zh: "巴兰基亚" }, { en: "BELO HORIZONTE", zh: "贝洛哈里桑塔" },
      { en: "BOGOTA", zh: "波哥大" }, { en: "BUENOS AIRES", zh: "布宜诺斯艾利斯" }, { en: "CALI", zh: "卡利" },
      { en: "CARACAS", zh: "加拉加斯" }, { en: "CARTAGENA", zh: "卡塔赫纳" }, { en: "CIUDAD DEL ESTE", zh: "埃斯特" },
      { en: "COCHABAMBA", zh: "科恰班巴" }, { en: "COLONIA DEL SACRAMENTO", zh: "科洛尼亚-德尔萨克拉门托" }, { en: "CORDOBA", zh: "科尔多瓦" },
      { en: "CURITIBA", zh: "库里蒂巴" }, { en: "ENCARNACION", zh: "恩卡纳辛" }, { en: "GOIANIA", zh: "戈亚尼亚" },
      { en: "IBAGUE", zh: "伊瓦格" }, { en: "JOINVILLE", zh: "茹安维尔" }, { en: "LA PAZ", zh: "拉巴斯" },
      { en: "LIMA", zh: "利马" }, { en: "MARACAIBO", zh: "马拉开波" }, { en: "MEDELLIN", zh: "麦德林" },
      { en: "MONTEVIDEO", zh: "蒙得维的亚" }, { en: "PANAMA", zh: "巴拿马" }, { en: "PEREIRA", zh: "佩雷拉" },
      { en: "PORLAMAR", zh: "波拉马尔" }, { en: "PUNTA DEL ESTE", zh: "埃斯特角" }, { en: "ROSARIO", zh: "罗萨里奥" },
      { en: "SAN PEDRO SULA", zh: "圣佩德罗苏拉" }, { en: "SAN SALVADOR", zh: "圣萨尔瓦多" }, { en: "SANTA CRUZ DE LA SIERRA", zh: "圣克鲁斯-德拉谢拉" },
      { en: "SANTIAGO", zh: "圣地亚哥" }, { en: "SANTO DOMINGO", zh: "圣多明戈" }, { en: "SAO PAULO", zh: "圣保罗" },
      { en: "VALENCIA", zh: "瓦伦西亚，委内瑞拉" }, { en: "Ribeirão Preto", zh: "里贝朗普雷图" }, { en: "PORTO ALEGRE", zh: "阿雷格里港" },
      { en: "GEORGETOWN", zh: "乔治城" }, { en: "UBERLANDIA", zh: "乌贝兰迪亚" }
    ],
    2: [ // Europe
      { en: "ALMATY", zh: "阿拉木图" }, { en: "ALMEDA PARK", zh: "阿尔梅达商业园区" }, { en: "ALMERE", zh: "阿尔梅勒" },
      { en: "AMSTERDAM", zh: "阿姆斯特丹" }, { en: "ANKARA", zh: "安卡拉" }, { en: "ANTWERP", zh: "安特卫普" },
      { en: "ARNHEM-NIJMEGEN", zh: "阿纳姆-奈梅亨" }, { en: "BALLERUP", zh: "巴勒鲁普" }, { en: "BARCELONA", zh: "巴塞罗那" },
      { en: "BASILICATA", zh: "巴斯利卡塔" }, { en: "BATUMI", zh: "巴统市" }, { en: "BELFAST", zh: "贝尔法斯特" },
      { en: "BERLIN", zh: "柏林" }, { en: "BREDA", zh: "布雷达" }, { en: "BREMEN", zh: "不来梅" },
      { en: "BREST", zh: "布雷斯特" }, { en: "BRUSSELS", zh: "布鲁塞尔" }, { en: "BUCHAREST", zh: "布加勒斯特" },
      { en: "CHELYABINSK", zh: "车里雅宾斯克" }, { en: "CYPRUS", zh: "塞浦路斯" }, { en: "DRESDEN", zh: "德累斯顿" },
      { en: "DUBLIN", zh: "都柏林" }, { en: "EINDHOVEN", zh: "埃因霍温" }, { en: "FRANKFURT (ODER)", zh: "法兰克福(奥德)" },
      { en: "GENEVA", zh: "日内瓦" }, { en: "GENOA", zh: "热那亚" }, { en: "GIBRALTAR", zh: "直布罗陀" },
      { en: "GOTHENBURG", zh: "哥德堡" }, { en: "GRENOBLE", zh: "格勒诺布尔" }, { en: "Heerlen-Aachen", zh: "海尔伦-亚琛" },
      { en: "HELSINGBORG", zh: "赫尔辛堡" }, { en: "ISTANBUL", zh: "伊斯坦布尔" }, { en: "JONKOPING", zh: "延雪平" },
      { en: "KARLSKRONA", zh: "卡尔斯克鲁纳" }, { en: "Kyiv", zh: "基辅" }, { en: "LAUSANNE", zh: "洛桑" },
      { en: "LEEUWARDEN", zh: "吕伐登" }, { en: "LILLE", zh: "里尔" }, { en: "LINKOPING", zh: "林雪平" },
      { en: "LISBON", zh: "里斯本" }, { en: "LONDON", zh: "伦敦" }, { en: "LUGANO", zh: "卢加诺" },
      { en: "LUND", zh: "隆德" }, { en: "LUXEMBOURG", zh: "卢森堡" }, { en: "MADRID", zh: "马德里" },
      { en: "MALMO", zh: "马尔默" }, { en: "MALPENSA AIRPORT", zh: "马尔本萨机场" }, { en: "MALTA", zh: "马耳他" },
      { en: "MARSEILLE", zh: "马赛普罗旺斯" }, { en: "METZ", zh: "梅斯-萨尔布吕肯" }, { en: "MILAN", zh: "米兰" },
      { en: "MONACO", zh: "摩纳哥" }, { en: "MOSCOW", zh: "莫斯科" }, { en: "NANTES", zh: "南特-亚特兰蒂克" },
      { en: "NICE", zh: "尼斯/索非亚安蒂波利斯" }, { en: "NIZHNY NOVGOROD", zh: "下诺夫哥罗德" }, { en: "NORRKOPING", zh: "诺尔雪平" },
      { en: "OSLO", zh: "奥斯陆" }, { en: "PARIS", zh: "巴黎" }, { en: "POITIERS", zh: "普瓦捷未来影视城" },
      { en: "POZNAN", zh: "波兹南" }, { en: "RENNES", zh: "雷恩-布列塔尼" }, { en: "ROTTERDAM", zh: "鹿特丹" },
      { en: "SCHIPHOL AIRPORT", zh: "史基浦机场" }, { en: "SEVILLA", zh: "塞维利亚" }, { en: "SOFIA", zh: "索非亚" },
      { en: "SOFIA(AF)", zh: "索非亚(附属)" }, { en: "STOCKHOLM", zh: "斯德哥尔摩" }, { en: "TALLINN", zh: "塔林" },
      { en: "TBILISI", zh: "第比利斯" }, { en: "THE HAGUE", zh: "海牙" }, { en: "TRIESTE", zh: "的里雅斯特" },
      { en: "TURKU", zh: "图尔库" }, { en: "TWENTE", zh: "特温特" }, { en: "UTRECHT", zh: "乌得勒支" },
      { en: "VAXJO", zh: "韦克舍" }, { en: "WARSAW", zh: "华沙" }, { en: "ZARAGOZA", zh: "萨拉戈萨" },
      { en: "YEREVAN", zh: "埃里温" }, { en: "AMERSFOORT", zh: "阿默斯福特" }, { en: "MALAGA", zh: "马拉加" }
    ],
    3: [ // Africa & Middle East
      { en: "ABU DHABI", zh: "阿布扎比" }, { en: "ABUJA", zh: "阿布贾" }, { en: "ACCRA", zh: "阿克拉" },
      { en: "AL KHOBAR", zh: "胡拜尔" }, { en: "ALEPPO", zh: "阿勒颇" }, { en: "ALGIERS", zh: "阿尔及尔" },
      { en: "AMMAN", zh: "安曼" }, { en: "ANTANANARIVO", zh: "塔那那利佛" }, { en: "BAGHDAD", zh: "巴格达" },
      { en: "BAHRAIN", zh: "巴林" }, { en: "BASRA", zh: "巴士拉" }, { en: "BEIRUT", zh: "贝鲁特" },
      { en: "BENGHAZI", zh: "班加西" }, { en: "CAIRO", zh: "开罗" }, { en: "CASABLANCA", zh: "卡萨布兰卡" },
      { en: "DAMASCUS", zh: "大马士革" }, { en: "DUBAI", zh: "迪拜" }, { en: "ERBIL", zh: "埃尔比勒" },
      { en: "JEDDAH", zh: "吉达" }, { en: "KABUL", zh: "喀布尔" }, { en: "LAGOS", zh: "拉各斯" },
      { en: "LUANDA", zh: "罗安达" }, { en: "NAIROBI", zh: "内罗毕" }, { en: "PRAIA", zh: "普拉亚" },
      { en: "QATAR", zh: "卡塔尔" }, { en: "RAMALLAH", zh: "拉姆安拉" }, { en: "RIYADH", zh: "利雅得" },
      { en: "SANAA", zh: "萨那" }, { en: "SHARJAH", zh: "沙迦" }, { en: "TUNIS", zh: "突尼斯" },
      { en: "VERDUN", zh: "凡尔登" }, { en: "ABIDJAN", zh: "阿比让" }, { en: "ADDIS ABABA", zh: "亚的斯亚贝巴" }
    ],
    4: [ // Asia & Pacific
      { en: "AHMEDABAD", zh: "艾哈迈达巴德" }, { en: "AMARAVATI", zh: "阿马拉瓦蒂" }, { en: "AMRITSAR", zh: "阿姆利则" },
      { en: "AMTZ", zh: "安得拉邦医疗技术园区" }, { en: "ANYANG", zh: "安阳" }, { en: "BEIJING", zh: "北京" },
      { en: "BENGALURU", zh: "班加罗尔" }, { en: "BHOPAL", zh: "博帕尔" }, { en: "BHUBANESWAR", zh: "布巴内什瓦尔" },
      { en: "BINH DUONG NEW CITY", zh: "平阳新城" }, { en: "CHANDIGARH", zh: "昌迪加尔" }, { en: "CHANGSHA", zh: "长沙万家丽" },
      { en: "CHENNAI", zh: "金奈" }, { en: "CHINA(BEIJING)", zh: "中国国际贸易中心" }, { en: "CHITTAGONG", zh: "吉大港" },
      { en: "CHONGQING", zh: "重庆" }, { en: "COLOMBO", zh: "科伦坡" }, { en: "DAEJEON", zh: "大田广域市" },
      { en: "DANDONG", zh: "丹东" }, { en: "DELHI-GURGAON", zh: "德里-古尔冈" }, { en: "DEVANAHALLI", zh: "德瓦恩哈尔利" },
      { en: "DHAKA", zh: "达卡" }, { en: "FARIDABAD", zh: "法里达巴德" }, { en: "FUZHOU", zh: "福州" },
      { en: "Genome Valley", zh: "基因组谷" }, { en: "GIFT CITY", zh: "古吉拉特邦国际金融科技城" }, { en: "GOA", zh: "果阿" },
      { en: "GUANGZHOU", zh: "广州" }, { en: "GUIYANG", zh: "贵阳" }, { en: "GUWAHATI", zh: "古瓦哈蒂" },
      { en: "HAIKOU", zh: "海口" }, { en: "HANGZHOU", zh: "杭州" }, { en: "HONG KONG(AF)", zh: "香港(附属)" },
      { en: "HOSUR", zh: "霍苏尔" }, { en: "HUNCHUN", zh: "珲春" }, { en: "HYDERABAD", zh: "海得拉巴" },
      { en: "ISLAMABAD", zh: "伊斯兰堡" }, { en: "JAIPUR", zh: "斋浦尔" }, { en: "JAKARTA", zh: "雅加达" },
      { en: "JINZHONG", zh: "晋中" }, { en: "KARACHI", zh: "卡拉奇" }, { en: "KOCHI", zh: "科钦" },
      { en: "KOLKATA", zh: "加尔各答" }, { en: "KUALA LUMPUR", zh: "吉隆坡" }, { en: "KUNMING", zh: "昆明" },
      { en: "LUCKNOW", zh: "勒克瑙" }, { en: "MACAU", zh: "澳门" }, { en: "MELBOURNE", zh: "墨尔本" },
      { en: "METRO MANILA", zh: "马尼拉大都会" }, { en: "MUMBAI", zh: "孟买" }, { en: "NAGPUR", zh: "那格浦尔" },
      { en: "NANJING", zh: "南京" }, { en: "NANNING", zh: "南宁" }, { en: "NANSHA", zh: "南沙" },
      { en: "NAVI MUMBAI", zh: "新孟买" }, { en: "NEW DELHI", zh: "新德里" }, { en: "NINGBO", zh: "宁波" },
      { en: "NOIDA CBD", zh: "诺伊达中央商务区" }, { en: "NOIDA", zh: "诺伊达" }, { en: "OKINAWA", zh: "冲绳" },
      { en: "PATNA", zh: "巴特那" }, { en: "PENANG", zh: "槟城" }, { en: "PERTH", zh: "珀斯" },
      { en: "PIMPRI CHINCHWAD", zh: "宾布里 平钦" }, { en: "PINGTAN", zh: "平潭" }, { en: "PUNE", zh: "浦那" },
      { en: "PUNE-BALEWADI BANER", zh: "浦那—巴尔瓦迪 巴纳" }, { en: "QINGDAO", zh: "青岛" }, { en: "QUANZHOU", zh: "泉州" },
      { en: "SANYA", zh: "三亚" }, { en: "SEOUL", zh: "首尔" }, { en: "Shamshabad", zh: "沙姆沙巴德" },
      { en: "SHANGHAI", zh: "上海" }, { en: "SHENYANG", zh: "沈阳" }, { en: "SHENZHEN", zh: "深圳" },
      { en: "SINGAPORE", zh: "新加坡" }, { en: "SURABAYA", zh: "泗水" }, { en: "SURAT", zh: "苏拉特" },
      { en: "SUWON", zh: "水原" }, { en: "SUZHOU", zh: "苏州" }, { en: "SYDNEY", zh: "悉尼" },
      { en: "TAICHUNG", zh: "台中" }, { en: "TAIPEI", zh: "台北" }, { en: "THIRUVANANTHAPURAM", zh: "特里凡得琅" },
      { en: "TIANJIN", zh: "天津" }, { en: "TOKYO(AF)", zh: "东京(附属)" }, { en: "VADODARA", zh: "瓦尔道拉" },
      { en: "VARANASI", zh: "瓦拉纳西" }, { en: "Visakhapatnam", zh: "维沙卡帕特南" }, { en: "WUHAN", zh: "武汉" },
      { en: "WUHAN CBD", zh: "武汉中央商务区" }, { en: "XI AN", zh: "西安" }, { en: "XIAMEN", zh: "厦门" },
      { en: "YANGON", zh: "仰光" }, { en: "ZHENGZHOU", zh: "郑州" }, { en: "TOKYO", zh: "东京" },
      { en: "OSAKA", zh: "大阪" }
    ]
  };

  const currentCities = allCities[activeRegion as keyof typeof allCities] || [];

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
    <section id="ecosystem" className="py-8 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Core Title Section - Gold style for Chinese text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">{t.title}</h2>
          <p className="text-gold text-sm font-medium max-w-3xl mx-auto leading-relaxed">
            {t.copy}
          </p>
        </div>

        {/* WTC Section with Introduction */}
        <div className="mb-12">
          <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative z-10">
              {/* Title and Introduction */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-black mb-4">
                  {lang === 'zh' ? '亚太世界贸易商务联盟' : 'APAC World Trade Business Alliance'}
                </h3>
                <p className="text-gold text-sm font-bold leading-relaxed">
                  {t.wtcIntro}
                </p>
              </div>

              {/* Region Globe Icons */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {regions.map((r) => (
                  <div 
                    key={r.index} 
                    className={`flex flex-col items-center cursor-pointer transition-all ${activeRegion === r.index ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-60'}`}
                    onClick={() => setActiveRegion(r.index)}
                  >
                    <div className="text-4xl mb-4">{r.img}</div>
                    <span className="text-[10px] font-black tracking-widest text-center">{r.name}</span>
                    {activeRegion === r.index && <div className="h-0.5 w-full bg-gold mt-2"></div>}
                  </div>
                ))}
              </div>

              {/* City Grid - Fixed height to prevent layout shift */}
              <div className="bg-gold rounded-[2rem] overflow-hidden shadow-2xl">
                <div className="bg-black/10 p-4 border-b border-black/5">
                  <span className="text-xs font-black text-black/60 tracking-widest uppercase">
                    {lang === 'zh' ? `${regions[activeRegion].name}城市` : `LOCATIONS IN ${regions[activeRegion].name}`}
                  </span>
                </div>
                <div className="p-8 md:p-12 min-h-[600px]">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
                    {currentCities.map((city, idx) => (
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
        <div className="mb-12">
          <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
            <div className="relative z-10">
              {/* Title and Introduction */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-black mb-4">
                  {lang === 'zh' ? '全球企业家责任基金会' : 'Global CSR Foundation'}
                </h3>
              </div>

              {/* SDGs, CSR, UN Cards - Desktop view (hidden on mobile) */}
              <div className="hidden md:grid md:grid-cols-3 gap-8">
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
                    src={lang === 'zh' ? '/images/UN1.png' : '/images/UN2.png'}
                    alt="UN" 
                    className="w-full h-auto max-h-[380px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view - Single image (shown only on mobile) */}
          <div className="md:hidden">
            <img 
              src={lang === 'zh' ? '/partner/111.png' : '/partner/222.png'}
              alt="Global CSR Foundation"
              className="w-full h-auto rounded-2xl"
            />
          </div>
            </div>
          </div>
        </div>

        {/* Influencer Network */}
        <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4 text-center">{lang === 'zh' ? '全球网红经济联盟' : 'Master TV MCN'}</h3>
            <p className="text-gold text-sm font-bold leading-relaxed mb-12 text-center">
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
        <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden mt-12">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4 text-center">{lang === 'zh' ? '硅谷华人创业者社区GPTDAO' : 'GPTDAO Silicon Valley AI Founder Community'}</h3>
            <p className="text-gold text-sm font-bold leading-relaxed text-center mb-12">
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
        <div className="mt-12 text-center">
          <h3 className="text-4xl font-black mb-4">
            {t.exhibition.title}
          </h3>
          <p className="text-gold text-sm font-medium mb-20 max-w-4xl mx-auto leading-relaxed">
            {t.exhibition.desc}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-white/10 overflow-hidden group">
              <img 
                src="/exhibit/图片5.jpg" 
                alt="New Times Exhibition 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl border border-white/10 overflow-hidden group">
              <img 
                src="/exhibit/图片6.jpg" 
                alt="New Times Exhibition 2" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl border border-white/10 overflow-hidden group">
              <img 
                src="/exhibit/图片7.jpg" 
                alt="New Times Exhibition 3" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl border border-white/10 overflow-hidden group">
              <img 
                src="/exhibit/图片8.jpg" 
                alt="New Times Exhibition 4" 
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
