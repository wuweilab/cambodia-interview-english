const sections = [
  {
    id: "airport",
    view: "day1",
    tag: "旅行办事",
    title: "抵达金边机场",
    subtitle: "入境、行李、电话卡与打车",
    phrases: [
      ["MUST SAY", "Where can I collect my checked baggage?", "我在哪里领取托运行李？"],
      ["MUST SAY", "My bag hasn't arrived. Could you help me?", "我的行李没有到，可以帮我吗？"],
      ["MUST SAY", "Where can I buy a local SIM card?", "在哪里可以买当地电话卡？"],
      ["PRICE", "How much is the ride to Champs Elysees Hotel?", "去香榭丽舍酒店多少钱？", "先确认是美元还是瑞尔，并确认是整车价格。"],
      ["CONFIRM", "Is this the total price, including all fees?", "这是包含所有费用的总价吗？"],
      ["LOCATION", "I’ll send you the hotel location on my phone.", "我把酒店定位发到你手机上。"],
      ["TIME", "About how long will it take?", "大约需要多长时间？"],
      ["SAFETY", "Please stop here. I’d like to get out.", "请停在这里，我想下车。"]
    ]
  },
  {
    id: "hotel",
    view: "day1",
    tag: "旅行办事",
    title: "酒店入住",
    subtitle: "预订、押金、Wi-Fi和寄存行李",
    phrases: [
      ["OPEN", "Hi, I have a reservation under the name…", "你好，我用……这个名字订了房。"],
      ["CHECK", "Is the room ready now?", "房间现在准备好了吗？"],
      ["PAYMENT", "Do I need to pay a deposit?", "我需要支付押金吗？"],
      ["INFO", "What time is breakfast and where is it served?", "早餐几点开始，在哪里用餐？"],
      ["INFO", "Could you write down the Wi-Fi password?", "可以把Wi-Fi密码写下来吗？"],
      ["HELP", "Could you keep my luggage after check-out?", "退房后可以帮我寄存行李吗？"]
    ]
  },
  {
    id: "museum-visit",
    view: "day1",
    tag: "景点",
    title: "吐斯廉屠杀博物馆",
    subtitle: "买票、语音导览与拍摄规则",
    phrases: [
      ["TICKET", "One ticket and one English audio guide, please.", "请给我一张门票和一个英文语音导览。"],
      ["TIME", "What time is the last admission?", "最晚几点可以入场？"],
      ["ROUTE", "Where should I start the visit?", "我应该从哪里开始参观？"],
      ["FILMING", "Is filming allowed inside the museum?", "博物馆里面允许录像吗？"],
      ["INTERVIEW", "Is there an English-speaking guide I could talk to?", "这里有可以交流的英文导游吗？"],
      ["INTERVIEW", "Would it be possible to interview a staff member?", "可以采访一位工作人员吗？"]
    ]
  },
  {
    id: "museum-interview",
    view: "day1",
    tag: "历史采访",
    title: "谈红色高棉历史",
    subtitle: "从公共记忆开始，不突然追问私人创伤",
    phrases: [
      ["PERMISSION", "If you're comfortable talking about it, may I ask you about this history?", "如果你愿意谈这个话题，我可以问你一些关于这段历史的问题吗？", "先给对方明确的拒绝空间。"],
      ["CORE QUESTION", "How has this period of history affected Cambodia?", "这段历史对柬埔寨产生了怎样的影响？"],
      ["TODAY", "Can people still feel its impact today?", "今天人们还能感受到它的影响吗？"],
      ["EDUCATION", "How is this history taught in Cambodian schools?", "柬埔寨学校怎样教授这段历史？"],
      ["YOUNG PEOPLE", "How do young Cambodians understand this period?", "柬埔寨年轻人怎样理解这段历史？"],
      ["FAMILY", "Do families usually talk about this history with younger generations?", "家庭通常会向年轻一代讲述这段历史吗？"],
      ["MEMORY", "Why is it important to preserve places like this museum?", "为什么保存这样的博物馆很重要？"],
      ["CHANGE", "Has the way people talk about this history changed over time?", "人们谈论这段历史的方式有没有随时间改变？"],
      ["FOLLOW-UP", "Could you give me an example of that impact?", "可以举一个这种影响的例子吗？"],
      ["FOLLOW-UP", "Do younger and older people see it differently?", "年轻人和年长者的看法不同吗？"],
      ["VISITORS", "What do you hope foreign visitors understand after coming here?", "你希望外国游客参观后理解什么？"],
      ["SAFETY", "You don’t have to answer if this feels too personal.", "如果这个问题太私人，你不需要回答。"]
    ]
  },
  {
    id: "tuktuk",
    view: "day1",
    tag: "交通",
    title: "突突车与市区拍摄",
    subtitle: "多站路线、等候与司机采访",
    phrases: [
      ["ROUTE", "I’d like to make three stops: the Independence Monument, the Royal Palace, and the riverside.", "我想停三站：独立纪念碑、王宫和河边。"],
      ["PRICE", "How much for the whole trip, including waiting time?", "整段行程加等候一共多少钱？"],
      ["FILMING", "Could you drive a little more slowly here? I’d like to film the street.", "这里可以开慢一点吗？我想拍一下街道。"],
      ["STOP", "Could you stop somewhere safe for two minutes?", "可以在安全的地方停两分钟吗？"],
      ["INTERVIEW", "Would you mind if I ask you a few questions while we drive?", "路上可以问你几个问题吗？"],
      ["QUESTION", "What is the biggest change you’ve seen in Phnom Penh?", "你看到金边最大的变化是什么？"],
      ["QUESTION", "Has driving a tuk-tuk become easier or harder in recent years?", "这些年开突突车是变容易了还是变难了？"]
    ]
  },
  {
    id: "night-market",
    view: "day1",
    tag: "市场采访",
    title: "金边夜市与生活成本",
    subtitle: "先买东西、轻松聊天，再进入收入和物价",
    phrases: [
      ["FOOD", "What do local people usually order here?", "当地人来这里通常点什么？"],
      ["PRICE", "How much is this?", "这个多少钱？"],
      ["PAYMENT", "Can I pay in US dollars?", "可以用美元付款吗？"],
      ["OPEN", "Have you been selling here for a long time?", "你在这里摆摊很久了吗？"],
      ["CHANGE", "How has this market changed in the past ten years?", "这个市场在过去十年发生了什么变化？"],
      ["COST", "What has become more expensive: food, rent, or transport?", "食品、房租和交通，哪一项涨得最多？"],
      ["COST", "How much does a simple meal usually cost for a local person?", "当地人吃一顿简单的饭通常要多少钱？"],
      ["INCOME", "Have wages increased as fast as prices?", "工资上涨的速度赶得上物价吗？"],
      ["RENT", "How much does it cost to rent a small room in Phnom Penh?", "在金边租一间小房间大约多少钱？"],
      ["YOUNG PEOPLE", "Is it difficult for young people to live independently in Phnom Penh?", "年轻人在金边独立生活困难吗？"],
      ["BUSINESS", "Are there more or fewer customers than before?", "顾客比以前更多还是更少？"],
      ["TOURISM", "How important are tourists to your business?", "游客对你的生意有多重要？"],
      ["CHINA", "Have Chinese visitors changed the business here in any way?", "中国游客有没有给这里的生意带来变化？"],
      ["FOLLOW-UP", "Could you give me a real example from your daily life?", "可以用你日常生活里的真实例子说明吗？"]
    ]
  },
  {
    id: "identity",
    view: "toolkit",
    tag: "通用采访",
    title: "介绍身份与来意",
    subtitle: "中国旅行博主的自然说法",
    phrases: [
      ["OPEN", "Hi, I’m a travel vlogger from China.", "你好，我是一名来自中国的旅行博主。"],
      ["OPEN", "I make travel videos for Chinese viewers.", "我为中国观众制作旅行视频。"],
      ["PURPOSE", "I’m documenting everyday life and local culture in Cambodia.", "我正在记录柬埔寨的日常生活和当地文化。"],
      ["PURPOSE", "I’d like to show Chinese viewers what life here is really like.", "我想让中国观众看到这里真实的生活。"],
      ["REQUEST", "May I ask you a few simple questions?", "可以问你几个简单的问题吗？"],
      ["TIME", "It will only take about five minutes.", "大约只需要五分钟。"]
    ]
  },
  {
    id: "consent",
    view: "toolkit",
    tag: "拍摄许可",
    title: "录像、露脸与匿名",
    subtitle: "先取得明确同意，再开始采访",
    phrases: [
      ["FILMING", "Is it okay if I film our conversation?", "我可以拍摄我们的谈话吗？"],
      ["CAMERA", "Do you mind being on camera?", "你介意出镜吗？"],
      ["VOICE ONLY", "If you prefer, I can record only your voice.", "如果你愿意，我可以只录声音。"],
      ["ANONYMOUS", "I can keep your name and identity private.", "我可以不公开你的姓名和身份。"],
      ["STOP", "We can stop recording at any time.", "我们随时可以停止拍摄。"],
      ["PUBLISH", "May I use this interview in my travel video?", "我可以把这段采访放进旅行视频吗？"]
    ]
  },
  {
    id: "follow-up",
    view: "toolkit",
    tag: "深挖追问",
    title: "让回答更具体",
    subtitle: "原因、时间、例子和不同观点",
    phrases: [
      ["WHY", "Why do you think that happened?", "你觉得为什么会这样？"],
      ["IMPACT", "How has that affected your daily life?", "这对你的日常生活有什么影响？"],
      ["EXAMPLE", "Could you give me an example?", "可以举个例子吗？"],
      ["TIME", "When did you first notice this change?", "你最早什么时候注意到这种变化？"],
      ["COMPARE", "What was it like ten years ago?", "十年前是什么样？"],
      ["COMMON", "Is this common for most local people?", "大多数当地人也是这样吗？"],
      ["GENERATION", "Do younger people feel the same way?", "年轻人也有同样的感受吗？"],
      ["FUTURE", "What do you hope will change in the future?", "你希望未来发生什么变化？"]
    ]
  },
  {
    id: "listening",
    view: "toolkit",
    tag: "听不懂",
    title: "请对方重复和确认理解",
    subtitle: "采访现场最常用的补救句",
    phrases: [
      ["REPEAT", "Sorry, could you say that again more slowly?", "不好意思，可以再慢一点说吗？"],
      ["SIMPLE", "Could you use simpler words?", "可以说得简单一点吗？"],
      ["CONFIRM", "Do you mean that prices are going up?", "你的意思是物价正在上涨吗？"],
      ["CONFIRM", "Let me make sure I understand you correctly.", "我确认一下自己有没有理解正确。"],
      ["SPELL", "Could you spell that for me?", "可以拼写一下吗？"],
      ["MAP", "Could you show me on the map?", "可以在地图上指给我看吗？"]
    ]
  },
  {
    id: "sensitive",
    view: "toolkit",
    tag: "敏感话题",
    title: "历史、赌场与电诈",
    subtitle: "不给压力，不索要危险信息",
    phrases: [
      ["PERMISSION", "If you’re comfortable talking about it, may I ask…?", "如果你愿意谈这个话题，我可以问……吗？"],
      ["OPTION", "You don’t have to answer if it’s too personal.", "如果问题太私人，你可以不回答。"],
      ["PRIVACY", "I don’t need any names or personal details.", "我不需要任何姓名或个人信息。"],
      ["PUBLIC VIEW", "I’m only asking about what local people can see in daily life.", "我只想了解当地人在日常生活中能观察到的情况。"],
      ["IMPACT", "How has this issue affected ordinary people here?", "这件事对这里的普通人造成了什么影响？"],
      ["EXIT", "Thank you. We can leave this topic here.", "谢谢，我们可以不再继续这个话题。"]
    ]
  },
  {
    id: "closing",
    view: "toolkit",
    tag: "结束采访",
    title: "感谢、补充与发布许可",
    subtitle: "让采访自然、安全地收尾",
    phrases: [
      ["THANKS", "Thank you for sharing your experience.", "谢谢你分享自己的经历。"],
      ["FINAL", "Is there anything else you’d like Chinese viewers to know?", "还有什么是你希望中国观众知道的吗？"],
      ["CHECK", "Is there anything you would like me not to use?", "有没有哪一部分是你不希望我使用的？"],
      ["CONTACT", "Could I have your contact information?", "可以留下你的联系方式吗？"],
      ["FOLLOW-UP", "May I contact you if I need to confirm something later?", "如果之后需要确认信息，我可以联系你吗？"],
      ["GOODBYE", "Thank you again. Have a good day.", "再次感谢，祝你今天愉快。"]
    ]
  }
];

sections.push(...(window.additionalSections || []));

const sectionExtras = {
  airport: {
    terms: [
      ["Phnom Penh", "/pəˈnɑːm ˈpɛn/", "坡-NOM PEN · 金边（英语实用读法）"],
      ["Champs-Élysées", "/ˌʃɑːnz eɪˈliːzeɪ/", "尚兹·诶-利-ZAY · 酒店名核心部分"],
      ["checked baggage", "/tʃekt ˈbæɡɪdʒ/", "切克特 BAG-集 · 托运行李"]
    ],
    dialogue: [
      ["You", "Hi, I’m going to Champs Elysees Hotel. How much is the ride?", "你好，我要去香榭丽舍酒店。车费多少钱？"],
      ["Driver", "It’s fifteen dollars.", "十五美元。"],
      ["You", "Is that the total price, including all fees?", "这是包含所有费用的总价吗？"],
      ["Driver", "Yes, that’s the total. It takes about forty minutes, depending on traffic.", "是的，这是总价。大约四十分钟，具体看交通情况。"],
      ["You", "Great. I’ll send you the hotel location on my phone.", "好的，我把酒店定位发到你手机上。"]
    ],
    tip: "可能听到 depending on traffic，意思是“要看堵不堵车”。先确认总价，再上车。"
  },
  hotel: {
    terms: [
      ["reservation", "/ˌrezərˈveɪʃən/", "雷泽尔-VAY-申 · 预订"],
      ["deposit", "/dɪˈpɑːzɪt/", "迪-PAH-泽特 · 押金"],
      ["check-out", "/ˈtʃek aʊt/", "切克-奥特 · 退房"]
    ],
    dialogue: [
      ["You", "Hi, I have a reservation under the name Li.", "你好，我用李这个名字订了房。"],
      ["Receptionist", "May I see your passport, please?", "可以看一下你的护照吗？"],
      ["You", "Sure. Do I need to pay a deposit?", "当然。需要支付押金吗？"],
      ["Receptionist", "Yes, the deposit is fifty dollars. You’ll get it back at check-out.", "需要，押金是五十美元。退房时会退还。"],
      ["You", "Thank you. What time is breakfast, and what time is check-out?", "谢谢。早餐几点，退房时间是几点？"]
    ],
    tip: "前台说 under the name…，是在问预订登记的姓名；get it back 表示会退还。"
  },
  "museum-visit": {
    terms: [
      ["Tuol Sleng", "/tuəl slæŋ/", "都-额尔 斯朗 · 吐斯廉"],
      ["genocide museum", "/ˈdʒenəsaɪd mjuˈziːəm/", "杰纳赛德 缪-ZEE-额姆 · 屠杀博物馆"],
      ["audio guide", "/ˈɔːdioʊ ɡaɪd/", "奥迪欧 盖德 · 语音导览"],
      ["admission", "/ədˈmɪʃən/", "额德-MI-申 · 入场"]
    ],
    dialogue: [
      ["You", "One ticket and one English audio guide, please.", "请给我一张门票和一个英文语音导览。"],
      ["Staff", "Of course. The audio guide is an additional three dollars.", "可以。语音导览需要另外支付三美元。"],
      ["You", "Thank you. Is filming allowed inside?", "谢谢。里面允许录像吗？"],
      ["Staff", "You may film in some areas, but please follow the signs.", "部分区域可以拍摄，但请遵守现场标识。"],
      ["You", "Understood. Where should I start the visit?", "明白。我应该从哪里开始参观？"]
    ],
    tip: "拍摄规定以现场回答和标识为准。additional 表示“额外的”，follow the signs 表示“遵守标识”。"
  },
  "museum-interview": {
    terms: [
      ["Khmer Rouge", "/kəˌmɛr ˈruːʒ/", "克-MAIR ROOZH · 红色高棉"],
      ["trauma", "/ˈtrɔːmə/", "TRO-么 · 创伤"],
      ["generation", "/ˌdʒenəˈreɪʃən/", "杰纳-RAY-申 · 一代人"],
      ["preserve", "/prɪˈzɜːrv/", "普里-ZERV · 保存、保护"]
    ],
    dialogue: [
      ["You", "If you’re comfortable talking about it, may I ask how this history still affects Cambodia today?", "如果你愿意谈这个话题，我可以问问这段历史今天仍怎样影响柬埔寨吗？"],
      ["Local", "It is still painful for many families. Some older people don’t like to talk about it.", "对许多家庭来说仍然很痛苦。有些老人不愿谈论。"],
      ["You", "I understand. You don’t need to share anything personal. How do young people learn about it?", "我理解。你不需要分享私人经历。年轻人怎样了解这段历史？"],
      ["Local", "They learn some of it at school, but visiting the museum makes it feel more real.", "学校会教一部分，但参观博物馆会让这段历史变得更真实。"],
      ["You", "Why do you think preserving this museum is important for the next generation?", "你觉得为下一代保存这座博物馆为什么重要？"]
    ],
    tip: "对方提到 family、painful 或 don’t like to talk 时，不追问具体伤亡；转向教育、公共记忆和下一代。"
  },
  tuktuk: {
    terms: [
      ["tuk-tuk", "/ˈtʊk tʊk/", "图克-图克 · 突突车"],
      ["Independence Monument", "/ˌɪndɪˈpendəns ˈmɑːnjumənt/", "印迪-PEN-登斯 MON-优门特 · 独立纪念碑"],
      ["riverside", "/ˈrɪvərsaɪd/", "RIVER-赛德 · 河岸"]
    ],
    dialogue: [
      ["You", "I’d like to stop at the Independence Monument, the Royal Palace, and the riverside.", "我想在独立纪念碑、王宫和河岸停留。"],
      ["Driver", "Okay. How long do you want me to wait at each place?", "好的。每个地方需要我等多久？"],
      ["You", "About fifteen minutes. How much for the whole trip, including waiting time?", "大约十五分钟。整段行程包括等候一共多少钱？"],
      ["Driver", "I can do the whole trip for twelve dollars.", "整段行程我可以收十二美元。"],
      ["You", "Does that include all three stops?", "这个价格包括三个停靠点吗？"],
      ["Driver", "Yes, all three stops.", "是的，三个都包括。"]
    ],
    tip: "司机可能反问 How long do you want me to wait? 先说每站时间，再确认 whole trip 和 all stops。金额只是对话示例，现场重新议价。"
  },
  "night-market": {
    terms: [
      ["Phnom Penh Night Market", "/pəˈnɑːm ˈpɛn naɪt ˈmɑːrkɪt/", "坡-NOM PEN 奈特 MARKET · 金边夜市"],
      ["living costs", "/ˈlɪvɪŋ kɔːsts/", "LIVING 科斯茨 · 生活成本"],
      ["independently", "/ˌɪndɪˈpendəntli/", "印迪-PEN-登特利 · 独立地"],
      ["wages", "/ˈweɪdʒɪz/", "WAY-吉兹 · 工资"]
    ],
    dialogue: [
      ["You", "Have you been selling here for a long time?", "你在这里摆摊很久了吗？"],
      ["Vendor", "Almost eight years. Business was better before the pandemic.", "快八年了。疫情前生意更好。"],
      ["You", "What has changed the most in those eight years?", "这八年里变化最大的是什么？"],
      ["Vendor", "Food and rent are more expensive, but customers still want low prices.", "食品和房租更贵了，但顾客仍希望价格便宜。"],
      ["You", "Have wages increased as fast as food and rent?", "工资上涨的速度赶得上食品和房租吗？"],
      ["Vendor", "Not really. Many young people need to share a room.", "没有。很多年轻人需要合租。"],
      ["You", "Could you give me an example of a normal monthly rent?", "可以举例说说普通房租一个月多少钱吗？"]
    ],
    tip: "对方说 not really，通常是委婉地表示“并没有”。继续追问具体例子，比直接问收入更容易得到回答。"
  },
  identity: {
    terms: [
      ["travel vlogger", "/ˈtrævəl ˈvlɑːɡər/", "TRAVEL VLOG-额 · 旅行视频博主"],
      ["documenting", "/ˈdɑːkjəmentɪŋ/", "DOC-优门廷 · 正在记录"],
      ["local culture", "/ˈloʊkəl ˈkʌltʃər/", "LOW-口 CULTURE · 当地文化"]
    ],
    dialogue: [
      ["You", "Hi, I’m a travel vlogger from China. May I ask you a few questions?", "你好，我是来自中国的旅行博主。可以问你几个问题吗？"],
      ["Local", "What kind of video are you making?", "你在制作什么样的视频？"],
      ["You", "I’m making a video about everyday life and local culture in Cambodia.", "我在制作一条关于柬埔寨日常生活和当地文化的视频。"],
      ["Local", "How long will it take?", "需要多长时间？"],
      ["You", "Only about five minutes. You can skip any question you don’t want to answer.", "大约五分钟。不想回答的问题可以跳过。"]
    ],
    tip: "对方最常问 What kind of video? 和 How long will it take? 先回答内容与时长，能明显降低戒备。"
  },
  consent: {
    terms: [
      ["conversation", "/ˌkɑːnvərˈseɪʃən/", "康沃尔-SAY-申 · 谈话"],
      ["identity", "/aɪˈdentəti/", "爱-DEN-特提 · 身份"],
      ["anonymous", "/əˈnɑːnɪməs/", "额-NON-尼默斯 · 匿名的"]
    ],
    dialogue: [
      ["You", "Is it okay if I film our conversation?", "我可以拍摄我们的谈话吗？"],
      ["Local", "I can talk, but I don’t want my face in the video.", "我可以聊，但不想在视频里露脸。"],
      ["You", "No problem. I can point the camera away and record only your voice.", "没问题。我可以把镜头移开，只录你的声音。"],
      ["Local", "That’s okay.", "这样可以。"],
      ["You", "Thank you. We can stop at any time.", "谢谢。我们随时可以停止。"]
    ],
    tip: "听到 don’t want my face 时，不再劝说露脸；立刻提供 voice only 或完全不录制的选择。"
  },
  "follow-up": {
    terms: [
      ["affect", "/əˈfekt/", "额-FECT · 影响（动词）"],
      ["specific example", "/spəˈsɪfɪk ɪɡˈzæmpəl/", "斯佩-SI-菲克 ig-ZAM-普尔 · 具体例子"],
      ["generation", "/ˌdʒenəˈreɪʃən/", "杰纳-RAY-申 · 一代人"]
    ],
    dialogue: [
      ["You", "Has this area changed a lot?", "这个地区变化大吗？"],
      ["Local", "Yes, a lot. Life is more difficult now.", "很大。现在生活更困难了。"],
      ["You", "What has become more difficult?", "具体是什么变得更困难了？"],
      ["Local", "Rent is higher, and there is more competition for work.", "房租更高了，找工作的竞争也更激烈。"],
      ["You", "How has higher rent affected your daily life?", "房租上涨怎样影响了你的日常生活？"],
      ["Local", "I moved farther from the city center to save money.", "为了省钱，我搬到了离市中心更远的地方。"],
      ["You", "When did you first notice this change?", "你最早什么时候注意到这种变化？"]
    ],
    tip: "追问顺序建议是：泛泛评价 → 哪一方面 → 怎样影响你 → 什么时候开始。"
  },
  listening: {
    terms: [
      ["correctly", "/kəˈrektli/", "克-RECT-利 · 正确地"],
      ["spell", "/spel/", "斯佩尔 · 拼写"],
      ["in other words", "/ɪn ˈʌðər wɜːrdz/", "in OTHER words · 换句话说"]
    ],
    dialogue: [
      ["Local", "The cost of utilities has gone up as well.", "水电等公共费用也上涨了。"],
      ["You", "Sorry, could you say that again more slowly?", "不好意思，可以再慢一点说吗？"],
      ["Local", "Electricity and water are more expensive now.", "现在电费和水费更贵了。"],
      ["You", "I see. So by utilities, you mean electricity and water, correct?", "明白了。所以utilities指的是水和电，对吗？"],
      ["Local", "Yes, exactly.", "对，没错。"],
      ["You", "How much have they increased?", "它们大约涨了多少？"]
    ],
    tip: "没听懂关键词时，可以用 So by X, you mean Y, correct? 把自己的理解说出来让对方确认。"
  },
  sensitive: {
    terms: [
      ["casino", "/kəˈsiːnoʊ/", "克-SEE-诺 · 赌场"],
      ["online scam", "/ˈɑːnlaɪn skæm/", "ON-line 斯甘姆 · 网络诈骗"],
      ["personal details", "/ˈpɜːrsənəl ˈdiːteɪlz/", "PERSONAL DEE-tails · 个人信息"],
      ["ordinary people", "/ˈɔːrdəneri ˈpiːpəl/", "ORDINARY people · 普通人"]
    ],
    dialogue: [
      ["You", "If you’re comfortable talking about it, how have casino closures affected this area?", "如果你愿意谈，这里的赌场关闭对该地区造成了什么影响？"],
      ["Local", "I’d rather not talk about specific companies or people.", "我不太想谈具体公司或个人。"],
      ["You", "That’s completely fine. I don’t need any names or personal details.", "完全没问题。我不需要任何姓名或个人信息。"],
      ["You", "Could we talk only about changes ordinary people can see, such as jobs or rent?", "我们可以只谈普通人能看到的变化，比如工作或房租吗？"],
      ["Local", "Yes. Many workers left, so some shops lost customers.", "可以。很多工人离开了，所以一些商店失去了顾客。"],
      ["You", "How did local businesses adapt to that change?", "当地商户怎样适应这种变化？"]
    ],
    tip: "听到 rather not talk 时立即缩小问题范围，转向 jobs、rent、customers 等公开可观察的影响。"
  },
  closing: {
    terms: [
      ["contact information", "/ˈkɑːntækt ˌɪnfərˈmeɪʃən/", "CONTACT in-for-MAY-shun · 联系方式"],
      ["published", "/ˈpʌblɪʃt/", "PUB-lisht · 已发布"],
      ["confirm", "/kənˈfɜːrm/", "肯-FIRM · 确认"]
    ],
    dialogue: [
      ["You", "Thank you for sharing your experience. Is there anything else you’d like Chinese viewers to know?", "谢谢你分享经历。还有什么希望中国观众知道的吗？"],
      ["Local", "I hope people come here and speak with local residents, not only visit tourist places.", "我希望大家来到这里后能和当地居民交流，而不只是参观旅游景点。"],
      ["You", "That’s a great final message. May I use this interview in my travel video?", "这是很好的结尾。我可以把这段采访放进旅行视频吗？"],
      ["Local", "Yes, that’s fine.", "可以，没问题。"],
      ["You", "Thank you again. May I contact you if I need to confirm something later?", "再次感谢。如果之后需要确认信息，我可以联系你吗？"]
    ],
    tip: "结束前再次确认发布许可，并询问有没有不希望使用的内容。"
  }
};

const baseCategories = {
  airport: "transport",
  hotel: "hotel",
  "museum-visit": "attraction",
  "museum-interview": "interview",
  tuktuk: "transport",
  "night-market": "food"
};

sections.forEach(section => {
  Object.assign(section, sectionExtras[section.id] || {});
  section.category ||= baseCategories[section.id] || (section.view === "toolkit" ? "interview" : "interview");
});

const state = {
  mode: "day",
  day: "day1",
  category: "all",
  query: "",
  favoritesOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("cambodiaEnglishFavorites") || "[]"))
};

const content = document.querySelector("#content");
const emptyState = document.querySelector("#emptyState");
const sectionTemplate = document.querySelector("#sectionTemplate");
const phraseTemplate = document.querySelector("#phraseTemplate");
const searchInput = document.querySelector("#searchInput");
const favoriteToggle = document.querySelector("#favoriteToggle");
const toast = document.querySelector("#toast");
const dayFilter = document.querySelector("#dayFilter");
const sceneFilter = document.querySelector("#sceneFilter");

const dayCopy = {
  day1: ["第一天 · 抵达金边", "机场、酒店、吐斯廉博物馆、城市交通与夜市生活成本采访。"],
  day2: ["第二天 · 深入金边", "王宫与博物馆、PSE、中央市场、老城与钻石岛。"],
  day3: ["第三天 · 前往西港", "Giant Ibis大巴、酒店包车、赌场建筑与海滩商户采访。"],
  day4: ["第四天 · 西港深访", "本地市场、城市建设、Wat Leu与敏感区域的安全采访。"],
  day5: ["第五天 · 暹粒与吴哥", "国内航班、吴哥交通、古迹讲解与旅游业生计采访。"],
  day6: ["第六天 · 浮村与洞里萨湖", "本地市场、旅行团、浮村生活、红树林与湖泊生态。"],
  day7: ["第七天 · 转机返程", "行李直挂、机场转机、延误应对与旅程收尾采访。"]
};

const categoryCopy = {
  all: ["全部场景", "跨越七天查看所有旅行办事与采访内容。"],
  transport: ["交通场景", "机场、大巴、包车、突突车、航班与转机。"],
  hotel: ["酒店场景", "入住、寄存行李、前台协助和安排车辆。"],
  attraction: ["景点场景", "购票、着装、开放时间、导游与古迹保护。"],
  food: ["餐饮与市场", "点餐、购物、砍价和生活成本采访。"],
  interview: ["采访场景", "历史、城市变化、旅游业、生计与环境的深度交流。"],
  safety: ["安全与应急", "敏感区域、航班异常、行李丢失和安全退出。"]
};

function phraseId(sectionId, phrase) {
  return `${sectionId}::${phrase[1]}`;
}

function includesQuery(section, phrase) {
  const extra = [
    ...(section.terms || []).flat(),
    ...(section.dialogue || []).flat(),
    section.tip || ""
  ];
  const haystack = [section.title, section.subtitle, section.tag, ...phrase, ...extra].join(" ").toLowerCase();
  return haystack.includes(state.query.toLowerCase().trim());
}

function saveFavorites() {
  localStorage.setItem("cambodiaEnglishFavorites", JSON.stringify([...state.favorites]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1400);
}

function speak(text) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  window.speechSynthesis.speak(utterance);
}

function speakDialogue(lines) {
  window.speechSynthesis.cancel();
  lines.forEach((line, index) => {
    const utterance = new SpeechSynthesisUtterance(line[1]);
    utterance.lang = "en-US";
    utterance.rate = 0.8;
    utterance.pitch = index % 2 === 0 ? 1 : 0.92;
    window.speechSynthesis.speak(utterance);
  });
}

function updateIntro() {
  const title = document.querySelector("#viewTitle");
  const description = document.querySelector("#viewDescription");
  let copy;
  if (state.mode === "day") copy = dayCopy[state.day];
  else if (state.mode === "scene") copy = categoryCopy[state.category];
  else if (state.mode === "toolkit") copy = ["通用采访工具箱", "接近陌生人、拍摄许可、追问、敏感话题和自然收尾。"];
  else copy = ["全部内容", "七天行程与通用采访工具的完整内容。"];
  [title.textContent, description.textContent] = copy;
}

function sectionMatchesMode(section) {
  if (state.mode === "day") return section.view === state.day;
  if (state.mode === "scene") return section.view !== "toolkit" && (state.category === "all" || section.category === state.category);
  if (state.mode === "toolkit") return section.view === "toolkit";
  return true;
}

function render() {
  content.replaceChildren();
  let visibleCount = 0;

  sections
    .filter(sectionMatchesMode)
    .forEach(section => {
      const filteredPhrases = section.phrases.filter(phrase => {
        const id = phraseId(section.id, phrase);
        return includesQuery(section, phrase) && (!state.favoritesOnly || state.favorites.has(id));
      });

      if (!filteredPhrases.length) return;
      visibleCount += filteredPhrases.length;

      const fragment = sectionTemplate.content.cloneNode(true);
      const scene = fragment.querySelector(".scene");
      const header = fragment.querySelector(".scene__header");
      fragment.querySelector(".scene__tag").textContent = section.tag;
      fragment.querySelector(".scene__title").textContent = section.title;
      fragment.querySelector(".scene__subtitle").textContent = `${section.subtitle} · ${filteredPhrases.length}句`;
      const list = fragment.querySelector(".phrase-list");

      header.addEventListener("click", () => {
        const collapsed = scene.classList.toggle("is-collapsed");
        header.setAttribute("aria-expanded", String(!collapsed));
      });

      filteredPhrases.forEach(phrase => {
        const [kind, en, zh, note] = phrase;
        const id = phraseId(section.id, phrase);
        const phraseFragment = phraseTemplate.content.cloneNode(true);
        const favoriteButton = phraseFragment.querySelector(".favorite-button");
        phraseFragment.querySelector(".phrase-card__kind").textContent = kind;
        phraseFragment.querySelector(".english").textContent = en;
        phraseFragment.querySelector(".chinese").textContent = zh;
        if (note) {
          const noteEl = phraseFragment.querySelector(".note");
          noteEl.textContent = note;
          noteEl.hidden = false;
        }
        if (state.favorites.has(id)) {
          favoriteButton.classList.add("is-favorite");
          favoriteButton.textContent = "★";
        }
        favoriteButton.addEventListener("click", () => {
          if (state.favorites.has(id)) state.favorites.delete(id);
          else state.favorites.add(id);
          saveFavorites();
          render();
        });
        phraseFragment.querySelector(".speak-button").addEventListener("click", () => speak(en));
        phraseFragment.querySelector(".copy-button").addEventListener("click", async () => {
          await navigator.clipboard.writeText(`${en}\n${zh}`);
          showToast("已复制");
        });
        list.appendChild(phraseFragment);
      });

      const pronunciationPanel = fragment.querySelector(".pronunciation-panel");
      if (section.terms?.length) {
        pronunciationPanel.hidden = false;
        const heading = document.createElement("div");
        heading.className = "panel-heading";
        heading.innerHTML = "<div><h3>发音卡</h3><p>IPA音标＋便于开口的中文近似读音</p></div>";
        const termList = document.createElement("div");
        termList.className = "term-list";
        section.terms.forEach(([word, ipa, hint]) => {
          const term = document.createElement("div");
          term.className = "term";
          term.innerHTML = `<span class="term__word"></span><span class="term__ipa"></span><span class="term__hint"></span>`;
          term.querySelector(".term__word").textContent = word;
          term.querySelector(".term__ipa").textContent = ipa;
          term.querySelector(".term__hint").textContent = hint;
          term.addEventListener("click", () => speak(word));
          term.title = "点击朗读";
          termList.appendChild(term);
        });
        pronunciationPanel.append(heading, termList);
      }

      const dialoguePanel = fragment.querySelector(".dialogue-panel");
      if (section.dialogue?.length) {
        dialoguePanel.hidden = false;
        const heading = document.createElement("div");
        heading.className = "panel-heading";
        heading.innerHTML = "<div><h3>对话示例</h3><p>对方可能怎样回答，以及你怎样回应和追问</p></div>";
        const playButton = document.createElement("button");
        playButton.type = "button";
        playButton.className = "play-dialogue";
        playButton.textContent = "▶ 播放整段";
        playButton.addEventListener("click", () => speakDialogue(section.dialogue));
        heading.appendChild(playButton);
        const dialogue = document.createElement("div");
        dialogue.className = "dialogue";
        section.dialogue.forEach(([speaker, en, zh]) => {
          const line = document.createElement("div");
          line.className = "dialogue-line";
          line.dataset.speaker = speaker === "You" ? "you" : "other";
          const speakerEl = document.createElement("span");
          speakerEl.className = "dialogue-line__speaker";
          speakerEl.textContent = speaker === "You" ? "你" : speaker;
          const copy = document.createElement("div");
          const english = document.createElement("p");
          english.className = "dialogue-line__english";
          english.textContent = en;
          const chinese = document.createElement("p");
          chinese.className = "dialogue-line__chinese";
          chinese.textContent = zh;
          copy.append(english, chinese);
          const play = document.createElement("button");
          play.type = "button";
          play.className = "line-speak";
          play.textContent = "▶";
          play.setAttribute("aria-label", `朗读：${en}`);
          play.addEventListener("click", () => speak(en));
          line.append(speakerEl, copy, play);
          dialogue.appendChild(line);
        });
        dialoguePanel.append(heading, dialogue);
        if (section.tip) {
          const tip = document.createElement("p");
          tip.className = "dialogue-tip";
          tip.textContent = `现场提示：${section.tip}`;
          dialoguePanel.appendChild(tip);
        }
      }

      content.appendChild(fragment);
    });

  emptyState.hidden = visibleCount > 0;
  favoriteToggle.setAttribute("aria-pressed", String(state.favoritesOnly));
  favoriteToggle.textContent = state.favoritesOnly ? "★ 查看全部" : "☆ 只看收藏";
  updateIntro();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    state.mode = tab.dataset.mode;
    document.querySelectorAll(".tab").forEach(item => item.classList.toggle("is-active", item === tab));
    dayFilter.hidden = state.mode !== "day";
    sceneFilter.hidden = state.mode !== "scene";
    render();
  });
});

document.querySelectorAll("[data-day]").forEach(button => {
  button.addEventListener("click", () => {
    state.day = button.dataset.day;
    document.querySelectorAll("[data-day]").forEach(item => item.classList.toggle("is-active", item === button));
    render();
  });
});

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("is-active", item === button));
    render();
  });
});

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  render();
});

favoriteToggle.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  render();
});

render();
