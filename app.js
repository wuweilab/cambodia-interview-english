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

const state = {
  view: "day1",
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

function phraseId(sectionId, phrase) {
  return `${sectionId}::${phrase[1]}`;
}

function includesQuery(section, phrase) {
  const haystack = [section.title, section.subtitle, section.tag, ...phrase].join(" ").toLowerCase();
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

function updateIntro() {
  const title = document.querySelector("#viewTitle");
  const description = document.querySelector("#viewDescription");
  const copy = {
    day1: ["第一天 · 金边", "抵达、入住、参观吐斯廉屠杀博物馆，并在夜市采访当地人的生活成本。"],
    toolkit: ["通用采访工具箱", "从接近陌生人到结束采访，任何一天都可以直接调用。"],
    all: ["全部样板内容", "同时查看第一天行程与通用采访工具。"]
  };
  [title.textContent, description.textContent] = copy[state.view];
}

function render() {
  content.replaceChildren();
  let visibleCount = 0;

  sections
    .filter(section => state.view === "all" || section.view === state.view)
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

      content.appendChild(fragment);
    });

  emptyState.hidden = visibleCount > 0;
  favoriteToggle.setAttribute("aria-pressed", String(state.favoritesOnly));
  favoriteToggle.textContent = state.favoritesOnly ? "★ 查看全部" : "☆ 只看收藏";
  updateIntro();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    state.view = tab.dataset.view;
    document.querySelectorAll(".tab").forEach(item => item.classList.toggle("is-active", item === tab));
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
