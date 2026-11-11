const S = (id, view, category, tag, title, subtitle, phrases, terms, dialogue, tip) => ({
  id, view, category, tag, title, subtitle, phrases, terms, dialogue, tip
});

window.additionalSections = [
  // Day 2 · Phnom Penh
  S("d2-palace", "day2", "attraction", "景点与文化", "王宫、银殿与国家博物馆", "购票、着装、开放区域与文化采访", [
    ["TICKET", "Two tickets for the Royal Palace and Silver Pagoda, please.", "请给我两张王宫和银殿的门票。"],
    ["DRESS CODE", "Is this shirt acceptable for the dress code?", "这件上衣符合着装要求吗？"],
    ["TIME", "What time does the ticket office close?", "售票处几点关闭？"],
    ["FILMING", "Which areas do not allow photography or filming?", "哪些区域不允许拍照或录像？"],
    ["GUIDE", "Is an English-speaking guide available?", "有英文导游吗？"],
    ["INTERVIEW", "What does the Royal Palace mean to people in Cambodia today?", "如今王宫对柬埔寨人意味着什么？"]
  ], [
    ["Royal Palace", "/ˈrɔɪəl ˈpæləs/", "ROY-əl PAL-əs · 王宫"],
    ["Silver Pagoda", "/ˈsɪlvər pəˈɡoʊdə/", "SIL-ver pə-GOH-də · 银殿"],
    ["National Museum", "/ˈnæʃənəl mjuˈziːəm/", "NASH-ə-nəl myoo-ZEE-əm · 国家博物馆"],
    ["dress code", "/ˈdres koʊd/", "DRESS code · 着装规定"]
  ], [
    ["You", "Excuse me, does my shirt meet the dress code?", "请问，我的上衣符合着装要求吗？"],
    ["Staff", "Yes, your shoulders are covered, so it’s fine.", "符合。你的肩膀遮住了，所以没问题。"],
    ["You", "Thank you. Which areas are closed to visitors?", "谢谢。哪些区域不对游客开放？"],
    ["Staff", "Some buildings are used by the royal family. Please follow the signs.", "有些建筑由王室使用。请遵守标识。"],
    ["You", "Understood. Is photography allowed inside the Silver Pagoda?", "明白。银殿里面允许拍照吗？"],
    ["Staff", "No photography inside, but you may take photos outside.", "室内不能拍，但可以在外面拍。"],
    ["You", "Could you also tell me where the entrance to the National Museum is?", "还可以告诉我国家博物馆入口在哪里吗？"]
  ], "开放区域和拍摄规定可能临时调整，以工作人员和现场标识为准。"),

  S("d2-pse", "day2", "interview", "预约采访", "PSE Welcome Center", "确认预约、说明拍摄用途并采访教育工作者", [
    ["APPOINTMENT", "We have an appointment for a visit this afternoon.", "我们预约了今天下午参观。"],
    ["IDENTITY", "I’m a travel vlogger making a video for Chinese viewers.", "我是为中国观众制作视频的旅行博主。"],
    ["PERMISSION", "Which parts of the visit may I film?", "参观过程中哪些部分可以拍摄？"],
    ["PRIVACY", "I will not film any children without clear permission.", "未经明确许可，我不会拍摄任何儿童。"],
    ["INTERVIEW", "Could I interview a staff member about education and job training?", "可以采访一位工作人员，谈谈教育和职业培训吗？"],
    ["IMPACT", "What changes do you see after students complete the program?", "学生完成项目后，通常会发生哪些变化？"]
  ], [
    ["PSE", "/ˌpiː es ˈiː/", "P-S-E · 机构简称"],
    ["Welcome Center", "/ˈwelkəm ˈsentər/", "WEL-come SEN-ter · 接待中心"],
    ["job training", "/ˈdʒɑːb ˌtreɪnɪŋ/", "JOB TRAIN-ing · 职业培训"],
    ["permission", "/pərˈmɪʃən/", "per-MISH-ən · 许可"]
  ], [
    ["You", "Hello, we have an appointment for a visit. I’m a travel vlogger from China.", "你好，我们预约了参观。我是一名来自中国的旅行博主。"],
    ["Staff", "Welcome. What would you like to focus on in your video?", "欢迎。你的视频主要想关注什么？"],
    ["You", "I’d like to understand how education and job training can change a young person’s future.", "我想了解教育和职业培训怎样改变年轻人的未来。"],
    ["Staff", "We can explain our programs, but some students cannot be filmed.", "我们可以介绍项目，但部分学生不能拍摄。"],
    ["You", "Of course. Please tell me clearly which areas and people I should not film.", "当然。请明确告诉我哪些区域和人员不能拍摄。"],
    ["Staff", "You may film the public areas and interview a staff member. Please ask before filming any class.", "公共区域可以拍，也可以采访工作人员。拍摄课堂前请先询问。"],
    ["You", "Thank you. What is the biggest challenge families in this community face today?", "谢谢。这个社区的家庭目前面临的最大困难是什么？"],
    ["Staff", "Stable work is still difficult to find, so practical training is very important.", "稳定工作仍然难找，所以实用技能培训非常重要。"],
    ["You", "Could you share one example of how training led to a stable job?", "可以举一个培训帮助学生找到稳定工作的例子吗？"]
  ], "对机构采访先确认拍摄边界；不拍未成年人，不要求参与者公开创伤、住址或可识别的个人信息。"),

  S("d2-central-market", "day2", "food", "市场采访", "中央市场与生活成本", "购物、砍价，并从具体商品价格谈到家庭开支", [
    ["SHOPPING", "Is this locally made or imported?", "这是本地生产的还是进口的？"],
    ["PRICE", "Is that your best price?", "这是你能给的最低价吗？"],
    ["FILMING", "May I film your stall while we talk?", "我们聊天时可以拍你的摊位吗？"],
    ["COST", "Which everyday product has gone up the most in price?", "哪种日常商品涨价最多？"],
    ["COMPARE", "How different are prices compared with ten years ago?", "和十年前相比，价格有多大变化？"],
    ["INCOME", "Do most families feel their income is keeping up?", "大多数家庭觉得收入跟得上吗？"]
  ], [
    ["Central Market", "/ˈsentrəl ˈmɑːrkɪt/", "SEN-trəl MAR-ket · 中央市场"],
    ["imported", "/ɪmˈpɔːrtɪd/", "im-POR-tid · 进口的"],
    ["household expenses", "/ˈhaʊshoʊld ɪkˈspensɪz/", "HOUSE-hold ex-PEN-siz · 家庭开支"],
    ["keep up", "/kiːp ʌp/", "keep UP · 跟得上"]
  ], [
    ["You", "This looks good. Is it made in Cambodia?", "这个看起来不错。是柬埔寨生产的吗？"],
    ["Vendor", "No, it’s imported from Thailand.", "不是，是从泰国进口的。"],
    ["You", "Has the import price changed much in recent years?", "这些年进口价格变化大吗？"],
    ["Vendor", "Yes. Transport and wholesale prices are higher now.", "变化很大。现在运输和批发价格都更高。"],
    ["You", "Do customers buy less because of the higher price?", "价格上涨后，顾客会减少购买吗？"],
    ["Vendor", "Yes. People compare prices more and buy only what they need.", "会。大家更爱比价，只买需要的东西。"],
    ["You", "Besides this product, what everyday expense worries families the most?", "除了这种商品，哪项日常开支最让家庭担心？"],
    ["Vendor", "Rent and food. They take most of a family’s income.", "房租和食品。它们占了家庭收入的大部分。"],
    ["You", "Compared with ten years ago, what can an ordinary salary buy today?", "和十年前相比，如今一份普通工资能买到什么？"]
  ], "先围绕正在看的商品提问，再自然转向运输、食品、房租和收入，比直接问月薪更容易得到具体回答。"),

  S("d2-city-change", "day2", "interview", "城市变化", "老城、传统CBD与钻石岛", "比较老城区和新开发区，安全讨论高薪招聘与城市机会", [
    ["CHANGE", "How is this part of Phnom Penh different from the new districts?", "金边这一带和新城区有什么不同？"],
    ["DEVELOPMENT", "Who benefits most from the new development?", "谁从新的开发中获益最多？"],
    ["JOBS", "What kind of jobs attract young people to this area?", "什么样的工作会吸引年轻人来到这里？"],
    ["WARNING", "Are people cautious about online job advertisements?", "人们会警惕网上的招聘广告吗？"],
    ["SAFETY", "I’m only asking about public awareness, not specific people or locations.", "我只想了解公众认知，不询问具体人员或地点。"],
    ["FUTURE", "What kind of city do local people want Phnom Penh to become?", "当地人希望金边成为一座怎样的城市？"]
  ], [
    ["Diamond Island", "/ˈdaɪmənd ˈaɪlənd/", "DIE-mənd EYE-lənd · 钻石岛"],
    ["development", "/dɪˈveləpmənt/", "di-VEL-up-ment · 开发、发展"],
    ["job advertisement", "/ˈdʒɑːb ˌædvərˈtaɪzmənt/", "JOB ad-ver-TIZE-ment · 招聘广告"],
    ["public awareness", "/ˈpʌblɪk əˈwernəs/", "PUBLIC a-WARE-ness · 公众认知"]
  ], [
    ["You", "You’ve lived in Phnom Penh for a long time. What feels most different now?", "你在金边生活很久了。现在最大的不同是什么？"],
    ["Local", "The city is larger, more modern, and more expensive.", "城市更大、更现代，也更贵了。"],
    ["You", "Do the new districts create good opportunities for ordinary young people?", "新城区给普通年轻人创造了好的机会吗？"],
    ["Local", "There are more jobs, but some advertisements promise salaries that are too good to be true.", "工作更多了，但有些广告承诺的工资高得不真实。"],
    ["You", "How do families teach young people to recognize risky job offers?", "家庭怎样教年轻人识别有风险的工作机会？"],
    ["Local", "They tell them to check the company, the address, and the contract before going anywhere.", "他们会提醒年轻人先核实公司、地址和合同，再决定是否前往。"],
    ["You", "Without naming anyone, what warning signs should people pay attention to?", "不需要说任何名字，人们应该注意哪些危险信号？"],
    ["Local", "Very high pay, no clear company information, and pressure to leave quickly.", "工资异常高、公司信息不清楚，以及催促尽快出发。"],
    ["You", "How has this problem affected trust in legitimate employers?", "这个问题怎样影响了人们对正规雇主的信任？"]
  ], "只讨论公开可见的社会影响和防范意识；不要寻找园区、入口、安保人员或内部运作信息。"),

  // Day 3 · Phnom Penh to Sihanoukville
  S("d3-bus", "day3", "transport", "长途交通", "Giant Ibis大巴去西港", "找车站、托运行李、中途休息与抵达地点", [
    ["CHECK-IN", "I have a booking for the bus to Sihanoukville.", "我预订了去西港的大巴。"],
    ["LUGGAGE", "Where should I put my suitcase?", "我的行李箱应该放在哪里？"],
    ["STOP", "Will there be a rest stop on the way?", "途中会停车休息吗？"],
    ["ARRIVAL", "Where exactly does the bus stop in Sihanoukville?", "大巴在西港具体停在哪里？"],
    ["DELAY", "The bus is delayed. What is the new departure time?", "大巴延误了，新的出发时间是几点？"],
    ["CONTACT", "Could you call me when we are close to Sihanoukville?", "快到西港时可以提醒我吗？"]
  ], [
    ["Giant Ibis", "/ˈdʒaɪənt ˈaɪbɪs/", "JAI-ənt EYE-bis · 大巴公司"],
    ["Sihanoukville", "/ˌsiːhəˈnuːkvɪl/", "see-hə-NOOK-ville · 西哈努克市／西港"],
    ["departure", "/dɪˈpɑːrtʃər/", "di-PAR-chər · 出发"],
    ["rest stop", "/ˈrest stɑːp/", "REST stop · 中途休息站"]
  ], [
    ["You", "Hi, I have a booking for the bus to Sihanoukville. Is this the correct counter?", "你好，我预订了去西港的大巴。是在这个柜台办理吗？"],
    ["Staff", "Yes. May I see your booking and passport?", "是的。可以看一下你的预订和护照吗？"],
    ["You", "Here you are. Where should I put my suitcase?", "给你。我的行李箱应该放在哪里？"],
    ["Staff", "The driver will put it under the bus. Keep your valuables with you.", "司机会把行李放在车下。贵重物品请随身携带。"],
    ["You", "Will there be a rest stop, and how long will the trip take?", "途中会休息吗？全程大概多久？"],
    ["Staff", "There will be one stop. The trip normally takes around three hours, but traffic can cause delays.", "会停一次。正常约三小时，但交通可能造成延误。"],
    ["You", "Where exactly will we arrive in Sihanoukville? I need to arrange a ride to my hotel.", "我们在西港具体到哪里？我需要安排去酒店的车。"]
  ], "把护照、现金、相机和存储卡随身携带；抵达点和时间以当天车站通知为准。"),

  S("d3-hotel-driver", "day3", "hotel", "住宿与包车", "独立酒店与司机沟通", "办理入住、寻找午餐并商量下午拍摄路线", [
    ["CHECK-IN", "I have a reservation at Independence Hotel by Dara.", "我在独立酒店有预订。"],
    ["LUNCH", "Is there a local restaurant within walking distance?", "步行范围内有当地餐馆吗？"],
    ["DRIVER", "Could you help me arrange a car for this afternoon?", "可以帮我安排今天下午的车吗？"],
    ["ROUTE", "I’d like to drive along 2 Thnou Street to the Golden Lions Roundabout.", "我想沿着2 Thnou Street前往双狮转盘。"],
    ["FILMING", "I may need a few short stops to film the street.", "我可能需要短暂停几次拍摄街道。"],
    ["PRICE", "What is the total price for three hours, including waiting?", "三小时包括等候的总价是多少？"]
  ], [
    ["Independence Hotel", "/ˌɪndɪˈpendəns hoʊˈtel/", "in-di-PEN-dəns ho-TEL · 独立酒店"],
    ["Golden Lions Roundabout", "/ˈɡoʊldən ˈlaɪənz ˈraʊndəbaʊt/", "GOLD-en LIONS ROUND-about · 双狮转盘"],
    ["within walking distance", "/wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/", "within WALK-ing distance · 步行可到"],
    ["including waiting", "/ɪnˈkluːdɪŋ ˈweɪtɪŋ/", "in-CLUD-ing WAIT-ing · 包括等候"]
  ], [
    ["You", "Could you help me arrange a driver for about three hours this afternoon?", "可以帮我安排一位司机，今天下午用车大约三小时吗？"],
    ["Receptionist", "Certainly. Where would you like to go?", "当然。你想去哪里？"],
    ["You", "First the Golden Lions Roundabout, then Ochheuteal Beach and the Otres area.", "先去双狮转盘，然后去奥彻迭海滩和奥特斯一带。"],
    ["Receptionist", "Would you like the driver to wait at each place?", "需要司机在每个地方等候吗？"],
    ["You", "Yes. I’m filming, so I may also need a few short stops along the road.", "需要。我在拍摄，沿途可能还需要短暂停几次。"],
    ["Receptionist", "I’ll explain that to the driver and ask for the total price.", "我会向司机说明，并询问总价。"],
    ["You", "Please confirm the total price before the driver arrives.", "请在司机到达前确认总价。"]
  ], "包车时把路线、用车时长、等候和临时停车一次说清楚，避免结束时对费用理解不同。"),

  S("d3-city-interview", "day3", "interview", "司机采访", "双狮转盘与赌场建筑", "从司机亲历了解西港十年变化、工作和生活成本", [
    ["OPEN", "How long have you been driving in Sihanoukville?", "你在西港开车多久了？"],
    ["COMPARE", "What was the city like before the casino boom?", "赌场建设热潮之前，这座城市是什么样？"],
    ["JOBS", "Did the boom create better jobs for local people?", "建设热潮给当地人创造了更好的工作吗？"],
    ["COST", "How did rent and food prices change?", "房租和食品价格发生了怎样的变化？"],
    ["CLOSURES", "What happened to drivers and shops when casinos closed?", "赌场关闭后，司机和商店发生了什么？"],
    ["FUTURE", "What should Sihanoukville become next?", "接下来西港应该发展成什么样？"]
  ], [
    ["casino boom", "/kəˈsiːnoʊ buːm/", "ca-SEE-no boom · 赌场建设热潮"],
    ["closure", "/ˈkloʊʒər/", "CLO-sure · 关闭"],
    ["construction", "/kənˈstrʌkʃən/", "con-STRUC-tion · 建设"],
    ["local economy", "/ˈloʊkəl ɪˈkɑːnəmi/", "LOCAL e-CON-o-my · 当地经济"]
  ], [
    ["You", "How long have you been driving in Sihanoukville?", "你在西港开车多久了？"],
    ["Driver", "About fifteen years. The city has changed completely.", "大约十五年。这座城市完全变了。"],
    ["You", "What was it like before the casino and construction boom?", "赌场和建设热潮之前是什么样？"],
    ["Driver", "It was quieter. There were fewer jobs, but rent and food were much cheaper.", "更安静。工作较少，但房租和食品便宜得多。"],
    ["You", "During the boom, did local drivers earn more?", "热潮期间，当地司机收入增加了吗？"],
    ["Driver", "Yes, there were many customers, but our living costs also went up quickly.", "增加了，顾客很多，但生活成本也涨得很快。"],
    ["You", "What happened after many casinos and businesses closed?", "许多赌场和企业关闭后发生了什么？"],
    ["Driver", "Many workers left. Drivers, restaurants, and landlords all lost business.", "很多工人离开了。司机、餐馆和房东的生意都减少了。"],
    ["You", "Which change affected your own family the most?", "哪项变化对你自己的家庭影响最大？"],
    ["Driver", "Income became less predictable, but rent did not fall immediately.", "收入变得不稳定，但房租没有立刻下降。"],
    ["You", "What kind of future would be healthier for the city?", "怎样的未来发展对这座城市更健康？"]
  ], "采访司机时先问个人从业年限和可见变化，再进入赌场经济；不要求指认具体人员或带你进入封闭建筑。"),

  S("d3-beach", "day3", "interview", "海滩与商户", "Ochheuteal、Otres与周边社区", "采访海滩商户和居民，了解旅游复苏与华人商业变化", [
    ["BUSINESS", "Is business better during weekends or holidays?", "周末还是节假日生意更好？"],
    ["RECOVERY", "Has tourism returned to the level it was before the pandemic?", "旅游业恢复到疫情前的水平了吗？"],
    ["VISITORS", "What kinds of visitors come here now?", "现在这里主要是什么样的游客？"],
    ["CHINESE BUSINESS", "How has the Chinese business community changed?", "这里的华人商业社区发生了怎样的变化？"],
    ["LOCAL IMPACT", "What did local shops gain or lose during that period?", "那段时期当地商店得到了什么，又失去了什么？"],
    ["MISUNDERSTANDING", "What do outsiders often misunderstand about this area?", "外地人经常误解这一地区的什么？"]
  ], [
    ["Ochheuteal Beach", "/ˌoʊtʃəˈtiːəl biːtʃ/", "oh-chə-TEAL beach · 奥彻迭海滩（实用近似）"],
    ["Otres Beach", "/ˈoʊtres biːtʃ/", "OH-tres beach · 奥特斯海滩"],
    ["tourism recovery", "/ˈtʊrɪzəm rɪˈkʌvəri/", "TOUR-ism re-COV-er-y · 旅游复苏"],
    ["misunderstand", "/ˌmɪsʌndərˈstænd/", "mis-under-STAND · 误解"]
  ], [
    ["You", "How long have you had this shop near the beach?", "你在海滩附近开这家店多久了？"],
    ["Shopkeeper", "Seven years. We saw the busy years, the pandemic, and the slow recovery.", "七年了。我们经历了繁荣期、疫情和缓慢复苏。"],
    ["You", "Who are your main customers now?", "现在主要顾客是谁？"],
    ["Shopkeeper", "Mostly local families and some international tourists. There are fewer large Chinese groups now.", "主要是当地家庭和一些国际游客。现在大型中国旅行团少了。"],
    ["You", "How did the rise and fall of Chinese businesses affect local shops?", "华人企业的兴衰怎样影响当地商店？"],
    ["Shopkeeper", "At first there were more customers and higher rent. Later many shops lost business when workers left.", "起初顾客更多、房租更高。后来工人离开，许多商店失去了生意。"],
    ["You", "Did local businesses change what they sell or who they serve?", "当地商户有没有改变商品或服务对象？"],
    ["Shopkeeper", "Yes. We focus more on local customers and independent travelers now.", "有。现在我们更重视当地顾客和自由行游客。"],
    ["You", "What do you wish Chinese viewers understood about this neighborhood today?", "你希望中国观众怎样理解今天的这个社区？"]
  ], "避免把所有中国人、华人企业和赌场混为一谈；追问具体时期、行业和普通商户的实际变化。"),

  // Day 4 · Sihanoukville
  S("d4-market", "day4", "food", "本地生活", "Phsar Leu Market早餐", "点本地早餐并采访食品价格、摊位成本和家庭开支", [
    ["FOOD", "What is a popular local breakfast here?", "这里受欢迎的当地早餐是什么？"],
    ["INGREDIENT", "What is this made with?", "这是用什么做的？"],
    ["SPICY", "Could you make it less spicy?", "可以少放辣吗？"],
    ["FILMING", "May I film how you prepare it?", "可以拍摄制作过程吗？"],
    ["PRICE", "Which food prices have increased the most?", "哪些食品涨价最多？"],
    ["STALL", "Have stall rent and operating costs also gone up?", "摊位租金和经营成本也上涨了吗？"]
  ], [
    ["Phsar Leu", "/pʰsaː ləː/", "普萨-勒 · 上市场／大市场（高棉语近似）"],
    ["ingredient", "/ɪnˈɡriːdiənt/", "in-GREE-dee-ent · 食材"],
    ["stall rent", "/ˈstɔːl rent/", "STALL rent · 摊位租金"],
    ["operating costs", "/ˈɑːpəreɪtɪŋ kɔːsts/", "OPERATING costs · 经营成本"]
  ], [
    ["You", "What breakfast do local people usually eat here?", "当地人通常在这里吃什么早餐？"],
    ["Vendor", "Many people have rice noodles or rice with pork.", "很多人吃米粉或者猪肉饭。"],
    ["You", "I’ll try the rice noodles. Please make it only a little spicy.", "我试试米粉。请只放一点辣。"],
    ["Vendor", "No problem. Would you like an egg?", "没问题。要加鸡蛋吗？"],
    ["You", "Yes, please. May I film how you prepare it?", "要。可以拍摄制作过程吗？"],
    ["Vendor", "You can film the food, but please don’t film my customers.", "可以拍食物，但请不要拍我的顾客。"],
    ["You", "Of course. Have the prices of noodles, meat, and eggs changed much?", "当然。米粉、肉和鸡蛋的价格变化大吗？"],
    ["Vendor", "Meat and cooking oil are much more expensive now.", "现在肉和食用油贵了很多。"],
    ["You", "Can you raise your selling price, or do customers stop buying?", "你能提高售价吗，还是顾客会因此不买？"]
  ], "先完成购买再提出采访，尊重其他顾客的隐私；价格问题从具体食材切入。"),

  S("d4-ekareach", "day4", "transport", "沿途观察", "Ekareach Street城市拍摄", "让司机沿主路行驶、减速和安全停车，并了解建设项目", [
    ["ROUTE", "Please take Ekareach Street and stay on the main road.", "请走Ekareach Street，沿主路行驶。"],
    ["SLOW", "Could you slow down a little while we pass these buildings?", "经过这些建筑时可以稍微开慢一点吗？"],
    ["STOP", "Please stop only if there is a safe place.", "只有在安全地点才能停车。"],
    ["QUESTION", "Were these buildings planned as hotels or casinos?", "这些建筑原计划是酒店还是赌场？"],
    ["STATUS", "Are most of them operating, unfinished, or empty?", "它们大多在营业、未完工还是空置？"],
    ["IMPACT", "Did the construction improve roads and public services?", "这些建设改善了道路和公共服务吗？"]
  ], [
    ["Ekareach Street", "/ˌeɪkəˈriːtʃ striːt/", "ay-kə-REECH street · 独立大道（实用近似）"],
    ["unfinished", "/ˌʌnˈfɪnɪʃt/", "un-FIN-isht · 未完工的"],
    ["vacant", "/ˈveɪkənt/", "VAY-kənt · 空置的"],
    ["public services", "/ˈpʌblɪk ˈsɜːrvɪsɪz/", "PUBLIC SERVICES · 公共服务"]
  ], [
    ["You", "Please take Ekareach Street. I’d like to film the buildings along the main road.", "请走Ekareach Street。我想拍主路沿线的建筑。"],
    ["Driver", "Okay, but there may not be many safe places to stop.", "可以，但可能没有太多安全停车点。"],
    ["You", "That’s fine. Please stop only where it is legal and safe.", "没问题。只在合法、安全的地方停车。"],
    ["Driver", "Many buildings here were planned as hotels, apartments, or casinos.", "这里很多建筑原计划是酒店、公寓或赌场。"],
    ["You", "Which period had the most construction?", "哪个时期建设项目最多？"],
    ["Driver", "Around the late 2010s. Some projects stopped before they were completed.", "大约在2010年代后期。有些项目尚未完工就停了。"],
    ["You", "Did ordinary residents benefit from the new roads and buildings?", "普通居民从新道路和建筑中受益了吗？"],
    ["Driver", "Some found work, but higher rent pushed other people farther away.", "一些人找到了工作，但更高的房租迫使另一些人搬得更远。"]
  ], "不要要求司机在车流中急停；用 unfinished、vacant、operating 等中性词描述建筑状态。"),

  S("d4-watleu", "day4", "interview", "宗教与城市", "Wat Leu上寺", "问路、尊重寺庙礼仪，并采访佛教与城市变化", [
    ["DIRECTION", "Is this the way to the main viewpoint?", "这是去主要观景点的路吗？"],
    ["ETIQUETTE", "Should I remove my shoes before entering?", "进入前需要脱鞋吗？"],
    ["PERMISSION", "Would it be appropriate to speak with a monk?", "和僧侣交谈合适吗？"],
    ["FILMING", "May I film here without disturbing anyone?", "我可以在不打扰他人的情况下拍摄吗？"],
    ["ROLE", "What role does this temple play in local life?", "这座寺庙在当地生活中扮演什么角色？"],
    ["CHANGE", "Has the city’s rapid development changed people’s values?", "城市快速发展改变了人们的价值观吗？"]
  ], [
    ["Wat Leu", "/wɑːt ləː/", "瓦特-勒 · 上寺（近似）"],
    ["monk", "/mʌŋk/", "蒙克 · 僧侣"],
    ["viewpoint", "/ˈvjuːpɔɪnt/", "VIEW-point · 观景点"],
    ["disturb", "/dɪˈstɜːrb/", "di-STURB · 打扰"]
  ], [
    ["You", "Excuse me, would it be appropriate to ask you a few questions?", "打扰一下，可以问您几个问题吗？"],
    ["Monk", "Yes, but please keep the conversation short.", "可以，但请简短一些。"],
    ["You", "Of course. What role does this temple play in the lives of local families?", "当然。这座寺庙在当地家庭生活中扮演什么角色？"],
    ["Monk", "People come to pray, make offerings, and seek advice during difficult times.", "人们来祈祷、供奉，并在困难时期寻求建议。"],
    ["You", "Sihanoukville has changed very quickly. Has that affected the community’s values?", "西港变化非常快。这影响了社区的价值观吗？"],
    ["Monk", "Economic change creates both opportunity and stress. People still need a place for reflection.", "经济变化既带来机会，也带来压力。人们仍然需要反思和安静的空间。"],
    ["You", "What do you hope visitors understand when they come here?", "您希望游客来到这里时理解什么？"],
    ["Monk", "Respect the place, the people, and the quiet atmosphere.", "尊重这里、尊重人，也尊重安静的氛围。"]
  ], "先询问是否适合交谈；不触碰僧侣，不挡住礼拜者，不在对方明确要求简短时持续追问。"),

  S("d4-sensitive", "day4", "safety", "敏感区域", "Golden Casino与Victory Hill", "只在公共区域了解关闭、就业和商业转型，随时安全退出", [
    ["PUBLIC SPACE", "Is this a public area, or is access restricted?", "这里是公共区域，还是限制进入？"],
    ["FILMING", "Is filming the building from here allowed?", "从这里拍摄建筑允许吗？"],
    ["CLOSURE", "How did the closure affect workers and nearby shops?", "关闭对员工和附近商店造成了什么影响？"],
    ["TRANSITION", "What kinds of businesses are replacing the old bars and casinos?", "什么样的生意正在取代过去的酒吧和赌场？"],
    ["EXIT", "Thank you. I won’t ask about specific people or companies.", "谢谢。我不会询问具体人员或公司。"],
    ["SAFETY", "We’re leaving now. Please don’t follow us.", "我们现在要离开。请不要跟随我们。"]
  ], [
    ["Golden Casino", "/ˈɡoʊldən kəˈsiːnoʊ/", "GOLD-en ca-SEE-no · 金色赌场"],
    ["Victory Hill", "/ˈvɪktəri hɪl/", "VIC-tor-y hill · 胜利山"],
    ["restricted access", "/rɪˈstrɪktɪd ˈækses/", "re-STRICT-ed ACCESS · 限制进入"],
    ["business transition", "/ˈbɪznəs trænˈzɪʃən/", "BUSINESS transition · 商业转型"]
  ], [
    ["You", "I’m making a video about how this neighborhood has changed. May I ask a general question?", "我在制作一条关于这个社区变化的视频。可以问一个概括性问题吗？"],
    ["Shopkeeper", "You can ask, but I don’t want to talk about specific owners.", "可以问，但我不想谈具体老板。"],
    ["You", "That’s fine. I’m only interested in how closures affected ordinary shops and workers.", "没问题。我只想了解关闭怎样影响普通商店和员工。"],
    ["Shopkeeper", "When workers left, restaurants and rental businesses lost customers.", "工人离开后，餐馆和租赁生意失去了顾客。"],
    ["You", "What kinds of businesses are trying to replace that income now?", "现在有哪些生意试图取代过去的收入来源？"],
    ["Shopkeeper", "Some places are trying regular tourism, local restaurants, and small hotels.", "一些地方尝试发展普通旅游、本地餐馆和小酒店。"],
    ["You", "Do local residents feel hopeful about that transition?", "当地居民对这种转型有希望吗？"],
    ["Shopkeeper", "Some do, but it will take time to change the area’s reputation.", "有些人有希望，但改变这里的名声需要时间。"],
    ["You", "Thank you. I won’t ask for any names or private details.", "谢谢。我不会询问任何姓名或私人信息。"]
  ], "只在公共区域活动。若有人阻止拍摄、要求进入封闭空间或持续跟随，停止采访并离开，不争辩。"),

  // Day 5 · Sihanoukville to Siem Reap
  S("d5-flight", "day5", "transport", "国内航班", "西港飞暹粒", "值机、托运行李、登机口变化与抵达交通", [
    ["CHECK-IN", "I’m checking in for the flight to Siem Reap.", "我要办理飞往暹粒的航班值机。"],
    ["BAGGAGE", "Is this bag within the weight limit?", "这个行李在限重范围内吗？"],
    ["GATE", "Has the boarding gate changed?", "登机口变了吗？"],
    ["DELAY", "How long is the delay expected to be?", "预计延误多久？"],
    ["ARRIVAL", "Where is the official taxi or ride-hailing pickup area?", "官方出租车或网约车上车区在哪里？"],
    ["HOTEL", "Please take me to Khmer Mansion Residence.", "请送我去高棉宅邸住宅酒店。"]
  ], [
    ["Sihanouk International Airport", "/ˌsiːhəˈnuːk ˌɪntərˈnæʃənəl ˈerpɔːrt/", "see-hə-NOOK International Airport · 西港国际机场"],
    ["Siem Reap", "/siːˌem riˈæp/", "see-em ree-AP · 暹粒"],
    ["boarding gate", "/ˈbɔːrdɪŋ ɡeɪt/", "BOARD-ing gate · 登机口"],
    ["weight limit", "/ˈweɪt lɪmɪt/", "WEIGHT limit · 限重"]
  ], [
    ["You", "Hi, I’m checking in for the flight to Siem Reap. Can I check this suitcase?", "你好，我要办理飞往暹粒的航班值机。这个行李箱可以托运吗？"],
    ["Agent", "Yes, but it is two kilograms over the limit.", "可以，但超重两公斤。"],
    ["You", "Can I move some items into my carry-on bag?", "我可以把一些物品放进随身行李吗？"],
    ["Agent", "Yes. Please repack it and bring it back to the counter.", "可以。请重新整理后拿回柜台。"],
    ["You", "Thank you. Is the flight on time, and which gate should I go to?", "谢谢。航班准时吗？我应该去哪个登机口？"],
    ["Agent", "It is on time. Boarding starts at Gate 3 in forty minutes.", "航班准时。四十分钟后在3号登机口开始登机。"],
    ["You", "If the gate changes, will it be shown on the screen?", "如果登机口改变，屏幕上会显示吗？"]
  ], "国内航班也可能严格执行行李限额；相机、电池和存储卡放在随身行李中。"),

  S("d5-angkor-logistics", "day5", "attraction", "吴哥行程", "酒店、包车与吴哥一日票", "寄存行李、安排司机、买票并确认闭园时间", [
    ["HOTEL", "Could you store my luggage until the room is ready?", "房间准备好之前可以寄存行李吗？"],
    ["DRIVER", "I need a driver for Ta Prohm, Bayon, and Angkor Wat this afternoon.", "今天下午我需要司机前往塔布隆寺、巴戎寺和吴哥窟。"],
    ["TICKET", "I’d like to buy a one-day Angkor Pass.", "我想买一张吴哥一日票。"],
    ["VALIDITY", "Is the pass valid immediately after purchase?", "门票购买后立即生效吗？"],
    ["CLOSING", "What time is the last entry to Angkor Wat?", "吴哥窟最晚几点入场？"],
    ["TIMING", "Can we reach Angkor Wat before the last entry?", "我们能在最晚入场时间前赶到吴哥窟吗？"]
  ], [
    ["Khmer Mansion Residence", "/kəˈmɛr ˈmænʃən ˈrezɪdəns/", "kə-MAIR MAN-shən RES-i-dence · 高棉宅邸住宅酒店"],
    ["Angkor Pass", "/ˈæŋkɔːr pæs/", "ANG-kor pass · 吴哥门票"],
    ["valid", "/ˈvælɪd/", "VAL-id · 有效的"],
    ["last entry", "/ˈlæst ˈentri/", "LAST entry · 最晚入场"]
  ], [
    ["You", "I’d like to visit Ta Prohm, Bayon, and Angkor Wat this afternoon. Is that realistic?", "我想今天下午游览塔布隆寺、巴戎寺和吴哥窟。时间现实吗？"],
    ["Driver", "It is possible, but you will need to keep each stop short.", "可以，但每个景点的停留时间要控制。"],
    ["You", "Which order is best if I want to reach Angkor Wat before the last entry?", "如果想在最晚入场前到吴哥窟，什么顺序最好？"],
    ["Driver", "Start with Ta Prohm, then Bayon, and finish at Angkor Wat.", "先去塔布隆寺，然后巴戎寺，最后吴哥窟。"],
    ["You", "How long will you wait at each temple?", "你会在每座寺庙等多久？"],
    ["Driver", "About one hour at Ta Prohm and Bayon, then we must leave for Angkor Wat.", "塔布隆寺和巴戎寺各约一小时，然后必须出发去吴哥窟。"],
    ["You", "Please tell me ten minutes before we need to leave each place.", "每个地方需要离开前十分钟请提醒我。"],
    ["Driver", "No problem. I’ll wait at the agreed pickup point.", "没问题。我会在约定的上车点等。"]
  ], "路线紧凑时，用 Is that realistic? 让司机直接判断可行性，并约定每站提醒和集合点。"),

  S("d5-temples", "day5", "attraction", "古迹游览", "Ta Prohm与Bayon", "问入口、集合点、古迹故事和保护问题", [
    ["DIRECTION", "Which entrance should I use for Ta Prohm?", "塔布隆寺应该从哪个入口进入？"],
    ["PICKUP", "Is the exit near the same pickup point?", "出口靠近同一个上车点吗？"],
    ["HISTORY", "Why is Ta Prohm partly left with trees growing through it?", "为什么塔布隆寺部分保留了树木穿过建筑的状态？"],
    ["BAYON", "Where is the best place to see the stone faces?", "在哪里看石雕人脸最好？"],
    ["PROTECTION", "What damage is caused by large visitor numbers?", "大量游客会造成哪些损害？"],
    ["GUIDE", "What do visitors often misunderstand about these temples?", "游客经常误解这些寺庙的什么？"]
  ], [
    ["Ta Prohm", "/tɑː proʊm/", "TAH prohm · 塔布隆寺"],
    ["Bayon", "/ˈbaɪɒn/", "BY-on · 巴戎寺"],
    ["stone faces", "/ˈstoʊn ˈfeɪsɪz/", "STONE faces · 石雕人脸"],
    ["conservation", "/ˌkɑːnsərˈveɪʃən/", "con-ser-VAY-shun · 保护修复"]
  ], [
    ["You", "Many visitors know Ta Prohm from a movie. Does that help or hurt the temple?", "很多游客通过电影认识塔布隆寺。这对寺庙是帮助还是伤害？"],
    ["Guide", "It brings visitors and income, but too many people can damage fragile areas.", "它带来游客和收入，但过多游客会损害脆弱区域。"],
    ["You", "Why were some trees and ruins kept together instead of fully restoring the site?", "为什么保留部分树木和遗迹共存，而不是完全修复？"],
    ["Guide", "That appearance became part of the site’s identity, but it requires careful conservation.", "这种景观已经成为遗址特色的一部分，但需要非常谨慎的保护。"],
    ["You", "At Bayon, what do the stone faces represent?", "巴戎寺的石雕人脸代表什么？"],
    ["Guide", "There are different interpretations. Many people connect them with the king and compassion.", "有不同解释。很多人把它们与国王和慈悲联系起来。"],
    ["You", "What is one detail most visitors walk past without noticing?", "有什么细节是大多数游客经过却没有注意到的？"]
  ], "历史解释可能存在不同学术观点，用 What are the different interpretations? 追问，不把单一导游说法当成唯一结论。"),

  S("d5-angkor-interview", "day5", "interview", "旅游业采访", "Angkor Wat与当地生计", "采访导游、司机和商贩，了解旅游收入、疫情与保护", [
    ["MEANING", "What does Angkor Wat mean to Cambodians beyond tourism?", "除了旅游，吴哥窟对柬埔寨人意味着什么？"],
    ["LIVELIHOOD", "How many local families depend on tourism?", "有多少当地家庭依赖旅游业？"],
    ["PANDEMIC", "What happened to workers when tourism stopped?", "旅游停止时，从业者经历了什么？"],
    ["RECOVERY", "Has income recovered as quickly as visitor numbers?", "收入恢复得和游客数量一样快吗？"],
    ["CHINESE VISITORS", "How are Chinese visitors different from other visitor groups?", "中国游客与其他游客群体有什么不同？"],
    ["BALANCE", "How can tourism support families without damaging the temples?", "怎样让旅游帮助家庭，又不损害古迹？"]
  ], [
    ["Angkor Wat", "/ˌæŋkɔːr ˈwɑːt/", "ANG-kor WAT · 吴哥窟"],
    ["livelihood", "/ˈlaɪvlihʊd/", "LIVELY-hood · 生计"],
    ["heritage", "/ˈherɪtɪdʒ/", "HER-i-tage · 遗产"],
    ["visitor numbers", "/ˈvɪzɪtər ˈnʌmbərz/", "VISITOR numbers · 游客数量"]
  ], [
    ["You", "How long has your family depended on tourism around Angkor?", "你的家庭依靠吴哥旅游业多久了？"],
    ["Vendor", "More than twenty years. Several people in my family work with tourists.", "二十多年了。家里有好几个人从事旅游相关工作。"],
    ["You", "What happened when international tourism stopped during the pandemic?", "疫情期间国际旅游停止时发生了什么？"],
    ["Vendor", "We lost almost all our income. Some relatives returned to farming or found construction work.", "我们几乎失去了全部收入。一些亲戚回去务农或找建筑工作。"],
    ["You", "Visitor numbers are returning. Has your income recovered at the same speed?", "游客数量正在恢复。你的收入也以同样速度恢复了吗？"],
    ["Vendor", "Not yet. Visitors spend differently now, and there are many businesses competing for them.", "还没有。现在游客的消费方式不同，而且很多商家在竞争。"],
    ["You", "What differences do you notice between Chinese visitors and other groups?", "你注意到中国游客和其他群体有什么差别？"],
    ["Vendor", "Group tourists follow a tight schedule, while independent travelers often stay longer and ask more questions.", "团队游客行程紧，自由行游客通常停留更久，也问更多问题。"],
    ["You", "What kind of tourism would give local families more stable income?", "怎样的旅游方式能给当地家庭更稳定的收入？"],
    ["Vendor", "Visitors who stay longer, use local services, and respect the temples help the most.", "停留更久、使用当地服务并尊重古迹的游客帮助最大。"],
    ["You", "What would you like Chinese viewers to understand before they visit Angkor?", "你希望中国观众参观吴哥前了解什么？"]
  ], "比较游客群体时避免刻板印象，追问对方观察到的消费方式、停留时间和服务使用，而非评价民族性格。"),

  // Day 6 · Siem Reap and Kampong Phluk
  S("d6-morning", "day6", "food", "暹粒早晨", "Phsar Leu、皇家花园与暹粒河", "早餐、市场价格、龙舟赛和普通居民的城市生活", [
    ["BREAKFAST", "What do local families usually eat for breakfast?", "当地家庭早餐通常吃什么？"],
    ["LOCAL PRICE", "Is this the local price or the tourist price?", "这是本地价格还是游客价格？"],
    ["MARKET", "Does this market depend much on tourism?", "这个市场很依赖旅游业吗？"],
    ["FESTIVAL", "When does the boat race usually take place?", "龙舟赛通常什么时候举行？"],
    ["DAILY LIFE", "Where do local people spend time away from the tourist area?", "当地人离开旅游区后通常在哪里活动？"],
    ["COMPARE", "Is daily life more expensive near the temples?", "寺庙附近的日常生活成本更高吗？"]
  ], [
    ["Siem Reap River", "/siːˌem riˈæp ˈrɪvər/", "see-em ree-AP river · 暹粒河"],
    ["Royal Gardens", "/ˈrɔɪəl ˈɡɑːrdənz/", "ROY-al GARDENS · 皇家花园"],
    ["boat race", "/ˈboʊt reɪs/", "BOAT race · 龙舟赛"],
    ["tourist area", "/ˈtʊrɪst ˈeriə/", "TOURIST area · 旅游区"]
  ], [
    ["You", "Is this market mainly for local families or tourists?", "这个市场主要服务当地家庭还是游客？"],
    ["Vendor", "Mostly local people. Tourists come, but this is a daily market.", "主要是当地人。也有游客，但这是日常市场。"],
    ["You", "Are prices here different from the markets near Pub Street and the temples?", "这里的价格和酒吧街、寺庙附近的市场不同吗？"],
    ["Vendor", "Yes, tourist areas are usually more expensive, especially for rent.", "不同。旅游区通常更贵，尤其是房租。"],
    ["You", "Does tourism still affect the prices local families pay here?", "旅游业仍会影响当地家庭在这里支付的价格吗？"],
    ["Vendor", "Yes. Fuel, rent, and transport affect every market in the city.", "会。燃油、房租和运输会影响全城的市场。"],
    ["You", "What is one expense that has become difficult for ordinary families?", "哪项开支对普通家庭变得困难？"],
    ["Vendor", "Education and healthcare are major worries, not only food.", "教育和医疗是主要担忧，不只是食品。"],
    ["You", "How do families manage when income from tourism is seasonal?", "旅游收入有淡旺季时，家庭怎样安排生活？"]
  ], "把暹粒分成旅游区和本地生活区来问，能避免把整座城市只理解为吴哥的配套。"),

  S("d6-tour-pickup", "day6", "transport", "旅行团", "空邦鲁日落团集合", "确认导游、车辆、包含项目、附加费用和返回时间", [
    ["IDENTIFY", "Are you the guide for the Kampong Phluk sunset tour?", "你是空邦鲁日落团的导游吗？"],
    ["INCLUDED", "Could you confirm what is included in the tour price?", "可以确认团费包含哪些项目吗？"],
    ["EXTRA", "Is the mangrove boat an optional extra?", "红树林手划船是自费项目吗？"],
    ["RETURN", "What time do we expect to return to the hotel?", "预计几点回到酒店？"],
    ["MEETING", "Where should I wait if the group gets separated?", "如果和团队走散，我应该在哪里等？"],
    ["GUIDE", "Please speak a little more slowly when explaining local history.", "讲解当地历史时请稍微说慢一点。"]
  ], [
    ["Kampong Phluk", "/kæmˈpɔːŋ flʊk/", "kam-PONG fluk · 空邦鲁（近似）"],
    ["sunset tour", "/ˈsʌnset tʊr/", "SUNSET tour · 日落团"],
    ["optional extra", "/ˈɑːpʃənəl ˈekstrə/", "OPTIONAL extra · 自费可选项目"],
    ["meeting point", "/ˈmiːtɪŋ pɔɪnt/", "MEETING point · 集合点"]
  ], [
    ["You", "Hi, are you the guide for the Kampong Phluk sunset tour?", "你好，你是空邦鲁日落团的导游吗？"],
    ["Guide", "Yes. May I check your booking name?", "是的。可以确认一下你的预订姓名吗？"],
    ["You", "It’s under Li. Could you confirm what is included in the tour?", "用李这个名字预订的。可以确认团费包含什么吗？"],
    ["Guide", "Hotel pickup, the main boat, the village visit, and the return transfer are included.", "包含酒店接送、主船、村庄参观和回程。"],
    ["You", "Is the small mangrove boat included?", "红树林小船包含吗？"],
    ["Guide", "No, that is optional and paid directly to the local boat operator.", "不包含。那是自费项目，直接支付给当地船夫。"],
    ["You", "Where and when should I meet the group after the village visit?", "参观村庄后，我应该在何时何地与团队集合？"],
    ["Guide", "Meet at the main pier at five. Please save my phone number in case you get separated.", "五点在主码头集合。请保存我的电话，以防走散。"]
  ], "上车前确认 included、optional、meeting point 和 return time；把导游电话与集合点截图保存。"),

  S("d6-village", "day6", "interview", "深度采访", "空邦鲁浮村生活", "了解水位、捕鱼、教育、医疗、旅游和居民真正的需要", [
    ["SEASON", "How does daily life change between the wet and dry seasons?", "雨季和旱季的日常生活有什么不同？"],
    ["FISHING", "Is fishing income still reliable for most families?", "捕鱼收入对大多数家庭来说仍然稳定吗？"],
    ["SCHOOL", "How do children get to school when the water level changes?", "水位变化时，孩子们怎样上学？"],
    ["HEALTHCARE", "How do residents reach a clinic or hospital?", "居民怎样前往诊所或医院？"],
    ["TOURISM", "Who benefits most from tourism in the village?", "村里谁从旅游业中受益最多？"],
    ["CONCERN", "What is the biggest concern for families here now?", "这里的家庭目前最担心什么？"],
    ["DIGNITY", "How would you like visitors to talk about this community?", "你希望游客怎样描述这个社区？"]
  ], [
    ["floating village", "/ˈfloʊtɪŋ ˈvɪlɪdʒ/", "FLOAT-ing village · 浮村"],
    ["wet season", "/ˈwet ˌsiːzən/", "WET season · 雨季"],
    ["water level", "/ˈwɔːtər ˈlevəl/", "WATER level · 水位"],
    ["reliable income", "/rɪˈlaɪəbəl ˈɪnkʌm/", "re-LIABLE income · 稳定可靠的收入"]
  ], [
    ["You", "How long has your family lived in this community?", "你的家庭在这个社区生活多久了？"],
    ["Resident", "My parents and grandparents lived here. Our life follows the lake and the seasons.", "我的父母和祖父母都住在这里。我们的生活跟随湖泊和季节变化。"],
    ["You", "What changes most when the water rises in the wet season?", "雨季水位上涨时，变化最大的是什么？"],
    ["Resident", "Boats become the main transport. School, work, and shopping all depend on the water.", "船成为主要交通工具。上学、工作和购物都依赖水路。"],
    ["You", "Is fishing still enough to support a family?", "捕鱼收入仍足以养家吗？"],
    ["Resident", "It is less reliable now. Fuel costs more, and catches are not always good.", "现在没那么稳定。燃油更贵，捕捞量也不总是理想。"],
    ["You", "When fishing income is low, what other work can people do?", "捕鱼收入低时，人们还能做什么工作？"],
    ["Resident", "Some work in tourism, construction, or markets in Siem Reap.", "一些人从事旅游、建筑，或者去暹粒市场工作。"],
    ["You", "Does tourism income reach many families, or only a few operators?", "旅游收入能惠及许多家庭，还是只到少数经营者手中？"],
    ["Resident", "Boat owners benefit directly. Other families may sell food or small goods, but the income is uneven.", "船主直接受益。其他家庭可能卖食物或小商品，但收入分配不均。"],
    ["You", "What do visitors often misunderstand when they see the village for only one hour?", "游客只参观一小时时，最容易误解这里的什么？"],
    ["Resident", "They see unusual houses, but they may not see our work, family life, and connection to the lake.", "他们看到特别的房屋，但可能看不到我们的工作、家庭生活以及与湖泊的联系。"],
    ["You", "How would you like me to describe this community to Chinese viewers?", "你希望我怎样向中国观众描述这个社区？"]
  ], "不要把居民当成贫困景观。先征得许可，不拍儿童特写、家庭内部和私人财物；问题聚焦生活方式、环境与居民主体感受。"),

  S("d6-lake", "day6", "interview", "湖泊与生态", "红树林、渔民与洞里萨湖日落", "确认小船费用和安全，采访环境变化、捕鱼和旅游分配", [
    ["BOAT", "How long is the mangrove boat ride?", "红树林手划船大约多久？"],
    ["PRICE", "Is the five-dollar fee per person or per boat?", "五美元是每人还是每条船？"],
    ["SAFETY", "Are life jackets available?", "有救生衣吗？"],
    ["ENVIRONMENT", "Has the mangrove area changed in recent years?", "红树林区域这些年发生变化了吗？"],
    ["FISH", "Are there fewer fish than there used to be?", "鱼类资源比以前减少了吗？"],
    ["BENEFIT", "How is tourism income shared with local boat operators?", "旅游收入怎样分配给当地船夫？"],
    ["SUNSET", "What time must we return to the main boat?", "我们必须几点回到主船？"]
  ], [
    ["Tonle Sap", "/ˌtɑːnleɪ ˈsæp/", "TON-lay SAP · 洞里萨湖"],
    ["mangrove", "/ˈmæŋɡroʊv/", "MANG-grove · 红树林"],
    ["fisherman", "/ˈfɪʃərmən/", "FISH-er-man · 渔民"],
    ["life jacket", "/ˈlaɪf ˌdʒækɪt/", "LIFE jacket · 救生衣"]
  ], [
    ["You", "Is the mangrove boat five dollars per person or per boat?", "红树林小船五美元是每人还是每条船？"],
    ["Boat operator", "It is five dollars per person, and the ride takes about thirty minutes.", "每人五美元，行程约三十分钟。"],
    ["You", "Are life jackets available, and will we return before the main boat leaves?", "有救生衣吗？我们能在主船离开前回来吗？"],
    ["Boat operator", "Yes. Wear the life jacket, and we will return to the pier before five.", "有。请穿救生衣，我们会在五点前回到码头。"],
    ["You", "May I ask how the mangrove and fishing conditions have changed?", "可以问问红树林和捕鱼状况发生了什么变化吗？"],
    ["Boat operator", "Water levels are less predictable, and some fish are harder to find.", "水位变得更难预测，有些鱼也更难捕到。"],
    ["You", "How does that affect your family’s income through the year?", "这怎样影响你家庭全年的收入？"],
    ["Boat operator", "We depend more on tourists during some months, but tourism is also seasonal.", "某些月份我们更依赖游客，但旅游也有淡旺季。"],
    ["You", "What would help local boat operators earn a more stable income?", "什么能帮助当地船夫获得更稳定的收入？"]
  ], "先完成价格和安全确认，再采访；不要在小船移动时站立或让船夫为镜头做危险动作。"),

  // Day 7 · Return
  S("d7-checkin", "day7", "transport", "返程航班", "暹粒飞金边", "国内段值机、行李去向和转机时间", [
    ["ITINERARY", "I’m flying to Phnom Penh and then connecting to Wuhan.", "我要先飞金边，然后转机去武汉。"],
    ["BAGGAGE", "Will my checked bag go to Wuhan, or must I collect it in Phnom Penh?", "托运行李会直达武汉，还是必须在金边领取？"],
    ["BOARDING PASS", "Can you issue both boarding passes here?", "可以在这里打印两段登机牌吗？"],
    ["CONNECTION", "Is this enough time for the connection?", "这个转机时间足够吗？"],
    ["TERMINAL", "Do I need to change terminals in Phnom Penh?", "我需要在金边换航站楼吗？"],
    ["URGENT", "My connection is tight. Could you mark my bag as priority?", "我的转机时间很紧，可以给行李加急吗？"]
  ], [
    ["connecting flight", "/kəˈnektɪŋ flaɪt/", "con-NECT-ing flight · 转机航班"],
    ["checked through", "/tʃekt θruː/", "checked THROUGH · 行李直挂"],
    ["boarding pass", "/ˈbɔːrdɪŋ pæs/", "BOARD-ing pass · 登机牌"],
    ["terminal", "/ˈtɜːrmɪnəl/", "TER-mi-nal · 航站楼"]
  ], [
    ["You", "I’m flying to Phnom Penh and then connecting to Wuhan. Will my bag be checked through?", "我要飞金边再转机去武汉。行李会直挂吗？"],
    ["Agent", "No. These are separate tickets, so you must collect your bag in Phnom Penh.", "不会。这是分开的机票，所以你必须在金边领取行李。"],
    ["You", "After collecting it, where do I check in for the international flight?", "领取后，我在哪里办理国际航班值机？"],
    ["Agent", "Go to the international departures area and check in again with the next airline.", "前往国际出发区，再到下一家航空公司办理值机。"],
    ["You", "My connection is short. Is there any faster transfer route?", "我的转机时间很短。有更快的转机路线吗？"],
    ["Agent", "There is no airside transfer for separate tickets. Please go directly to baggage claim after landing.", "分开机票没有隔离区内转机。落地后请直接去行李提取处。"],
    ["You", "Could you tell me the expected baggage belt in Phnom Penh?", "可以告诉我预计在金边哪个行李转盘领取吗？"]
  ], "是否直挂完全取决于航空公司和票务安排，必须在值机柜台得到明确回答，不要只凭经验判断。"),

  S("d7-transfer", "day7", "transport", "机场转机", "金边转国际航班", "取行李、寻找国际出发、重新值机和通过安检", [
    ["BAGGAGE", "Which belt is for the flight from Siem Reap?", "暹粒航班的行李在哪个转盘？"],
    ["DIRECTION", "Where is international departures?", "国际出发在哪里？"],
    ["CHECK-IN", "Where is the check-in counter for the flight to Wuhan?", "飞往武汉的航班值机柜台在哪里？"],
    ["TIME", "When does check-in close for this flight?", "这趟航班几点停止值机？"],
    ["SECURITY", "Is there a faster security line for a tight connection?", "转机时间紧，有快速安检通道吗？"],
    ["GATE", "How long does it take to walk to the gate?", "走到登机口需要多久？"]
  ], [
    ["international departures", "/ˌɪntərˈnæʃənəl dɪˈpɑːrtʃərz/", "international de-PAR-tures · 国际出发"],
    ["baggage belt", "/ˈbæɡɪdʒ belt/", "BAGGAGE belt · 行李转盘"],
    ["security check", "/sɪˈkjʊrəti tʃek/", "se-CUR-i-ty check · 安检"],
    ["check-in closes", "/ˈtʃek ɪn ˈkloʊzɪz/", "check-in CLOSES · 停止值机"]
  ], [
    ["You", "Excuse me, I have a flight to Wuhan at 4:10. Where is international departures?", "请问，我四点十分飞武汉。国际出发在哪里？"],
    ["Staff", "Go upstairs and follow the international departure signs.", "上楼，跟着国际出发标识走。"],
    ["You", "I still need to check in and drop my bag. When does the counter close?", "我还需要值机和托运行李。柜台几点关闭？"],
    ["Staff", "Most counters close around one hour before departure, but ask the airline directly.", "多数柜台在起飞前约一小时关闭，但请直接询问航空公司。"],
    ["You", "My domestic flight arrived late. Could you point me to the fastest route?", "我的国内航班晚点了。可以告诉我最快路线吗？"],
    ["Staff", "Use the escalator on your right, then turn left after the information desk.", "走右侧扶梯，上去后在问询台左转。"],
    ["You", "Thank you. Is the airline counter before or after security?", "谢谢。航空公司柜台在安检前还是安检后？"]
  ], "把下一段航班时间直接告诉工作人员，比只说 I’m in a hurry 更容易得到清晰指引。"),

  S("d7-disruption", "day7", "safety", "航班异常", "延误、误机与行李丢失", "在时间紧张或行李异常时提出明确请求", [
    ["DELAY", "My first flight was delayed, and I may miss my connection.", "我的第一段航班延误了，可能赶不上转机。"],
    ["HELP", "What is the fastest option available?", "目前最快的解决方案是什么？"],
    ["REBOOK", "Can you rebook me on the next available flight?", "可以帮我改签到下一班有座位的航班吗？"],
    ["BAGGAGE", "My bag did not arrive on the belt.", "我的行李没有出现在转盘上。"],
    ["REPORT", "Where can I file a missing baggage report?", "在哪里可以填写行李遗失报告？"],
    ["CONTACT", "How will you contact me if the bag is found?", "找到行李后，你们会怎样联系我？"]
  ], [
    ["miss a connection", "/mɪs ə kəˈnekʃən/", "miss a con-NEC-tion · 错过转机"],
    ["rebook", "/ˌriːˈbʊk/", "ree-BOOK · 改签"],
    ["missing baggage report", "/ˈmɪsɪŋ ˈbæɡɪdʒ rɪˈpɔːrt/", "MISSING BAGGAGE report · 行李遗失报告"],
    ["reference number", "/ˈrefərəns ˈnʌmbər/", "REFERENCE number · 查询编号"]
  ], [
    ["You", "My flight from Siem Reap was delayed, and check-in for my Wuhan flight may already be closed.", "我从暹粒来的航班延误了，飞武汉的航班可能已经停止值机。"],
    ["Airline staff", "Are both flights on the same ticket?", "两段航班是同一张联程票吗？"],
    ["You", "No, they are separate tickets. What is the fastest option available?", "不是，是分开的机票。目前最快的解决方案是什么？"],
    ["Airline staff", "We need to check whether the original flight can still accept you. If not, you may need a new ticket.", "我们需要确认原航班是否还能接收你。如果不能，你可能需要购买新票。"],
    ["You", "Please check the original flight first. If it is impossible, show me the next available options and total cost.", "请先确认原航班。如果确实不行，请告诉我下一班可选航班和总费用。"],
    ["Airline staff", "Please wait here while I call the gate.", "请在这里等一下，我联系登机口。"],
    ["You", "Thank you. Please tell them I’m already at the airport and coming directly to the counter.", "谢谢。请告诉他们我已经在机场，会直接赶到柜台。"]
  ], "分开机票时航空公司通常不承担衔接责任。先请求核实原航班，再比较改签或新票方案，不在压力下立即接受不清楚的费用。"),

  S("d7-farewell", "day7", "interview", "收尾采访", "离开前的最后一个问题", "邀请司机或酒店员工给中国游客一句建议，为视频自然收尾", [
    ["FINAL QUESTION", "What is one thing you wish Chinese visitors understood about Cambodia?", "你最希望中国游客了解柬埔寨的一件事是什么？"],
    ["ADVICE", "What advice would you give someone visiting for the first time?", "你会给第一次来柬埔寨的人什么建议？"],
    ["CHANGE", "What positive change do you hope to see in the next ten years?", "你希望未来十年看到什么积极变化？"],
    ["MESSAGE", "Would you like to say a few words directly to Chinese viewers?", "你愿意直接对中国观众说几句话吗？"],
    ["PERMISSION", "May I use this as the closing message of my video?", "我可以把这段话用作视频结尾吗？"]
  ], [
    ["first-time visitor", "/ˌfɜːrst taɪm ˈvɪzɪtər/", "FIRST-time visitor · 第一次来访的游客"],
    ["closing message", "/ˈkloʊzɪŋ ˈmesɪdʒ/", "CLOSING message · 结尾寄语"],
    ["hospitality", "/ˌhɑːspɪˈtæləti/", "hos-pi-TAL-i-ty · 热情好客"],
    ["respectful", "/rɪˈspektfəl/", "re-SPECT-ful · 尊重他人的"]
  ], [
    ["You", "Before I leave, may I ask one final question for my video?", "离开前，可以为我的视频问最后一个问题吗？"],
    ["Local", "Sure. What would you like to ask?", "可以。你想问什么？"],
    ["You", "What is one thing you wish Chinese visitors understood about Cambodia?", "你最希望中国游客了解柬埔寨的一件事是什么？"],
    ["Local", "Cambodia is more than Angkor Wat or the stories people see in the news. Please meet ordinary people and learn about daily life.", "柬埔寨不只有吴哥窟，也不只是新闻里的故事。请认识普通人，了解日常生活。"],
    ["You", "What is the best way for visitors to show respect?", "游客表达尊重的最好方式是什么？"],
    ["Local", "Ask before taking photos, support local businesses, and be patient when communication is difficult.", "拍照前先询问，支持本地生意，沟通困难时保持耐心。"],
    ["You", "That’s a wonderful message. May I use it as the closing of my video?", "这段话很好。我可以把它用作视频结尾吗？"],
    ["Local", "Yes. I hope you come back again.", "可以。希望你以后再来。"],
    ["You", "Thank you. I hope more Chinese viewers will come with curiosity and respect.", "谢谢。我希望更多中国观众带着好奇和尊重来到这里。"]
  ], "最后的问题要开放、正面，让受访者拥有最后表达权，也能让整条视频从敏感议题回到人与人的理解。")
];
