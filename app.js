// 명언 데이터
const swiftQuotes = [
    {
        en: "You are the only one who gets to decide\nwhat you will be remembered for.",
        ko: "네가 어떤 모습으로 기억될지는 네가 선택하는 거다.",
        source: "NYU Commencement Speech, 2022"
    },
    {
        en: "Happiness and confidence are the prettiest things you can wear.",
        ko: "네가 가질 수 있는 가장 아름다운 건 행복과 자신감이다.",
        source: "Teen Vogue, 2012"
    },
    {
        en: "You’re lucky enough to be different, never change.",
        ko: "너가 특별하다는 건 정말 큰 행운이다. 절대 변하지 마라.",
        source: "Red Tour Speech, 2013"
    },
    {
        en: "No matter what happens in life, be good to people.",
        ko: "인생에서 무슨 일이 있더라도 사람들에게 친절하게 대해라.",
        source: "NYU Commencement Speech, 2022"
    },
    {
        en: "You are not the opinion of someone who doesn’t know you.",
        ko: "너를 모르는 사람의 의견이 너를 정의하지는 않는다.",
        source: "NYU Commencement Speech, 2022"
    },
    {
        en: "You have to fight through bad days to earn the best days.",
        ko: "좋은 날을 얻으려면 나쁜 날을 이겨내야 한다.",
        source: "NYU Commencement Speech, 2022"
    },
    {
        en: "Just be yourself, there is no one better.",
        ko: "너답게 살아라. 너보다 나은 사람은 없다.",
        source: "Interview with Oprah, 2012"
    },
    {
        en: "Don’t you dream impossible things?",
        ko: "불가능해 보이는 꿈 꿔본 적 있나?",
        source: "Lover Album, 2019"
    },
    {
        en: "There’s always something you can gain from every experience.",
        ko: "어떤 경험에서도 얻을 수 있는 건 항상 있다.",
        source: "Rolling Stone Interview, 2014"
    },
    {
        en: "Love is unpredictable but worth it.",
        ko: "사랑은 예측할 수 없지만 그만큼 가치 있다.",
        source: "Time Magazine, 2014"
    },
    { 
        en: "Fearless means facing your fears head on.", 
        ko: "두려움이 없다는 건 두려움을 정면으로 마주하는 것.", 
        source: "Fearless Album, 2008" 
    },
    { 
        en: "No matter what love throws at you, you have to believe in it.", 
        ko: "사랑이 어떤 시련을 던지더라도 그 사랑을 믿어라.", 
        source: "Fearless Album, 2008" 
    },
    {  
        en: "Happiness is not the absence of problems,\nit’s the ability to deal with them.", 
        ko: "행복은 문제가 없는 상태가 아니라, 문제를 극복하는 능력이다.", 
        source: "Teen Vogue, 2012" 
    },
    { 
        en: "Success is not measured by what you achieve,\nbut how you inspire others.", 
        ko: "성공은 당신이 성취한 것이 아니라 다른 사람에게 주는 영감으로 측정된다.", 
        source: "NYU Commencement Speech, 2022" 
    },
    { 
        en: "Don’t wait for things to happen, go out and make them happen.", 
        ko: "무언가가 일어나길 기다리지 말고 당신이 만들어라.", 
        source: "Glamour Magazine, 2013" 
    },
    { 
        en: "It’s important to stay true to yourself.", 
        ko: "자기 자신에게 진실되게 사는 것이 중요하다.", 
        source: "Elle Interview, 2019" 
    }
];

// 명언 랜덤 생성 함수
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * swiftQuotes.length);
    const randomQuote = swiftQuotes[randomIndex];

    // 명언 텍스트와 출처 업데이트
    document.getElementById("quote-en").textContent = `"${randomQuote.en}"`;
    document.getElementById("quote-ko").textContent = `${randomQuote.ko}`;
    document.getElementById("source").textContent = `출처: ${randomQuote.source}`;
}

// 버튼 이벤트 리스너 추가
document.getElementById("generate").addEventListener("click", displayRandomQuote);
