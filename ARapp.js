// 時計

function displayTime(){

const now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

if (hour < 10){
    hour = "0" + hour;
}

if (minute < 10){
    minute = "0" + minute;
}

if (second < 10){
    second = "0" + second;
}

const currentTime = hour + ":" + minute + ":" + second;

document.getElementById("clock").textContent = currentTime;


}

displayTime();
setInterval(displayTime, 1000);

// メニューボタンとメニュー表示

const menuButton = document.querySelector(".menu_button");
const menuOpen = document.querySelector(".menu_container");
const menuOpen_main = document.querySelector(".main_content");

let isOpen = false;
let timer;

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle ("open");
    menuOpen_main.classList.toggle ("open");

    clearTimeout(timer);

    if (isOpen) {
        isOpen = false;
        // console.log(isOpen);
        menuOpen.classList.remove ("open");
        menuOpen.addEventListener("transitionend", () => {
            if (!isOpen){
                menuOpen.style.display = "none";
            }
        })
    } else {
        isOpen = true;
        // console.log(isOpen);
        menuOpen.style.display = "flex";
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                menuOpen.classList.add ("open");
            })
        })
    }
});


// ロスの時間 { 曜日, 日付, 時間(秒) }

function getLosTime(){
    const los_now = new Date();

    const formatter = new Intl.DateTimeFormat ("en-US", {
        timeZone: "America/los_Angeles",
        weekday: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    });

    const parts = formatter.formatToParts (los_now);

    const los_weekday = parts.find (part => part.type === "weekday").value; // ロスの曜日
    const los_today = Number (parts.find(part => part.type === "day").value); // ロスの日付
    const los_hour = Number (parts.find(part => part.type === "hour").value); // ロスの時間
    const los_minute = Number (parts.find(part => part.type === "minute").value); // ロスの分
    const los_second = Number (parts.find(part => part.type === "second").value); // ロスの秒

    const los_time = los_hour * 3600 + los_minute * 60 + los_second; // ロスの時間を秒に変換

    return { los_weekday, los_today, los_time };
}

// setInterval(getLosTime, 1000)
// setInterval(() => {
//     console.log(getLosTime());
// }, 1000);


// イベントの情報

const isEvent = [
    {
        type: "赤A", 
        time1: [28200, 42000],
        time2: [49800, 63600],
        time3: [71400, 85200],
        skip: ["Mon", "Tue"]
    },
    {
        type: "赤B",
        time1: [9000, 22800],
        time2: [30600, 44400],
        time3: [52200, 66000],
        skip: ["Tue", "Wed"]
    },
    {
        type: "赤C",
        time1: [13200, 27000],
        time2: [34800, 48600],
        time3: [56400, 70200],
        skip: ["Wed", "Thu"]
    },
    {
        type: "黒A",
        time1: [8400, 22200],
        time2: [37200, 51000],
        time3: [66000, 79800],
        skip: ["Sun", "Mon"]
    },
    {
        type: "黒B",
        time1: [7200, 21000],
        time2: [36000, 49800],
        time3: [64800, 78600],
        skip: ["Sun", "Sat"]
    }
];

// イベントの種類

let eventType ;
let candleType ;

if(getLosTime().los_today % 6 === 1 && !isEvent[0].skip.includes(getLosTime().los_weekday)){ // 今日が1日かつ月火じゃなかったら
    eventType = isEvent[0]; // イベントは赤A
    candleType = 2
} else if(getLosTime().los_today % 6 === 3 && !isEvent[1].skip.includes(getLosTime().los_weekday)){ // 今日が3日かつ火水じゃなかったら
    eventType = isEvent[1]; // イベントは赤B
    candleType = 2
} else if(getLosTime().los_today % 6 === 5 && !isEvent[2].skip.includes(getLosTime().los_weekday)){ // 今日が5日かつ水木じゃなかったら
    eventType = isEvent[2]; // イベントは赤C
    candleType = 2
} else if(getLosTime().los_today % 4 === 2 && !isEvent[3].skip.includes(getLosTime().los_weekday)){ // 今日が2日かつ日月じゃなかったら
    eventType = isEvent[3]; // イベントは黒A
    candleType = 1
} else if(getLosTime().los_today % 4 === 0 && !isEvent[4].skip.includes(getLosTime().los_weekday)){ // 今日が4日かつ日土じゃなかったら
    eventType = isEvent[4]; // イベントは黒B
    candleType = 1
} else {
    eventType = "noEvent"; // イベントなし
    candleType = 0
}

console.log(eventType.type);

// 場所の表示

let venue ;

switch (getLosTime().los_today){
    case 1:
    case 31:
        venue = "草原・洞窟";
        break;
    case 2:
    case 22:
        venue = "雨林・神殿前";
        break;
    case 3:
    case 13:
        venue = "峡谷・夢見";
        break;
    case 4:
    case 24:
        venue = "捨てられた地・最初のエリア";
        break;
    case 5:
    case 15:
    case 25:
        venue = "書庫・星月夜（海月の入り江）";
        break;
    case 6:
    case 26:
        venue = "草原・神殿前";
        break;
    case 7:
        venue = "雨林・神殿奥";
        break;
    case 8:
    case 18:
    case 28:
        venue = "峡谷・スケートリンク";
        break;
    case 9:
        venue = "捨てられた地・座礁船";
        break;
    case 10:
    case 20:
    case 30:
        venue = "書庫・星月夜（バラの先）";
        break;
    case 11:
        venue = "草原・楽園";
        break;
    case 12:
        venue = "雨林・小川";
        break;
    case 14:
        venue = "捨てられた地・戦場";
        break;
    case 16:
        venue = "草原・蝶々の住処";
        break;
    case 17:
        venue = "雨林・晴れ間";
        break;
    case 19:
        venue = "捨てられた地・墓所";
        break;
    case 21:
        venue = "草原・鳥の巣";
        break;
    case 23:
        venue = "峡谷・隠者";
        break;
    case 27:
        venue = "雨林・ツリーハウス";
        break;
    case 29:
        venue = "捨てられた地・方舟";
        break;
}

if (eventType !== "noEvent"){
    document.getElementById("today_location").textContent = venue;
} else {
    document.getElementById("today_location").textContent = "";
}

// 背景の表示

if(eventType !== "noEvent" && venue === "草原・洞窟"){
    document.body.style.backgroundImage = "url('images/DP_cave.png')";
} else if(eventType !== "noEvent" && venue === "雨林・神殿前"){
    document.body.style.backgroundImage = "url('images/HF_boneyard.png')";
} else if(eventType !== "noEvent" && venue === "峡谷・夢見"){
    document.body.style.backgroundImage = "url('images/VT_dream.png')";
} else if(eventType !== "noEvent" && venue === "捨てられた地・最初のエリア"){
    document.body.style.backgroundImage = "url('images/GW_outer.png')";
} else if(eventType !== "noEvent" && venue === "書庫・星月夜（海月の入り江）"){
    document.body.style.backgroundImage = "url('images/VK_jellyfish.png')";
} else if(eventType !== "noEvent" && venue === "草原・神殿前"){
    document.body.style.backgroundImage = "url('images/DP_temple.png')";
} else if(eventType !== "noEvent" && venue === "雨林・神殿奥"){
    document.body.style.backgroundImage = "url('images/HF_temple.png')";
} else if(eventType !== "noEvent" && venue === "峡谷・スケートリンク"){
    document.body.style.backgroundImage = "url('images/VT_icerink.png')";
} else if(eventType !== "noEvent" && venue === "捨てられた地・座礁船"){
    document.body.style.backgroundImage = "url('images/GW_crab.png')";
} else if(eventType !== "noEvent" && venue === "書庫・星月夜（バラの先）"){
    document.body.style.backgroundImage = "url('images/VK_desert.png')";
} else if(eventType !== "noEvent" && venue === "草原・楽園"){
    document.body.style.backgroundImage = "url('images/DP_sanctuary.png')";
} else if(eventType !== "noEvent" && venue === "雨林・小川"){
    document.body.style.backgroundImage = "url('images/HF_brook.png')";
} else if(eventType !== "noEvent" && venue === "捨てられた地・戦場"){
    document.body.style.backgroundImage = "url('images/GW_battlefield.png')";
} else if(eventType !== "noEvent" && venue === "草原・蝶々の住処"){
    document.body.style.backgroundImage = "url('images/DP_butterfly.png')";
} else if(eventType !== "noEvent" && venue === "雨林・晴れ間"){
    document.body.style.backgroundImage = "url('images/HF_clearing.png')";
} else if(eventType !== "noEvent" && venue === "捨てられた地・墓所"){
    document.body.style.backgroundImage = "url('images/GW_graveyard.png')";
} else if(eventType !== "noEvent" && venue === "草原・鳥の巣"){
    document.body.style.backgroundImage = "url('images/DP_birdnest.png')";
} else if(eventType !== "noEvent" && venue === "峡谷・隠者"){
    document.body.style.backgroundImage = "url('images/VT_hermit.png')";
} else if(eventType !== "noEvent" && venue === "雨林・ツリーハウス"){
    document.body.style.backgroundImage = "url('images/HF_treehouse.png')";
} else if(eventType !== "noEvent" && venue === "捨てられた地・方舟"){
    document.body.style.backgroundImage = "url('images/GW_ark.png')";
} else {
    document.body.style.backgroundImage = "url('images/no_event.png')";
}

// キャンドルの種類の表示

let candle ;

if (candleType === 2){
    switch (venue){
        case "草原・楽園":
        case "雨林・ツリーハウス":
        case "雨林・晴れ間":
        case "峡谷・隠者":
        case "捨てられた地・方舟":
        case "書庫・星月夜（海月の入り江）":
        case "書庫・星月夜（バラの先）":
            candle = "星のキャンドル 3.5本";
            break;

        case "草原・鳥の巣":
        case "雨林・神殿奥":
        case "峡谷・夢見":
        case "捨てられた地・座礁船":
            candle = "星のキャンドル 2.5本";
            break;

        case "草原・洞窟":
        case "捨てられた地・墓所":
            candle = "星のキャンドル 2.5本";
            break;
    }
} else if (candleType === 1){
    candle = "光のかけら x200"
}

document.querySelector(".pattern").textContent = candle;

// 時間の表示

if (eventType.type === "赤A"){
    document.querySelector(".event_1").textContent = "23:50 - 03:40";
    document.querySelector(".event_2").textContent = "05:50 - 09:40";
    document.querySelector(".event_3").textContent = "11:50 - 15:40";
} else if (eventType.type === "赤B"){
    document.querySelector(".event_1").textContent = "18:30 - 22:20";
    document.querySelector(".event_2").textContent = "00:30 - 04:20";
    document.querySelector(".event_3").textContent = "06:30 - 10:20";
} else if (eventType.type === "赤C"){
    document.querySelector(".event_1").textContent = "19:40 - 23:30";
    document.querySelector(".event_2").textContent = "01:40 - 05:30";
    document.querySelector(".event_3").textContent = "07:40 - 11:30";
} else if (eventType.type === "黒A"){
    document.querySelector(".event_1").textContent = "18:20 - 22:10";
    document.querySelector(".event_2").textContent = "02:20 - 06:10";
    document.querySelector(".event_3").textContent = "10:20 - 14:10";
} else if (eventType.type === "黒B"){
    document.querySelector(".event_1").textContent = "18:00 - 21:50";
    document.querySelector(".event_2").textContent = "02:00 - 05:50";
    document.querySelector(".event_3").textContent = "10:00 - 13:50";
} else {
    document.querySelector(".event_1").textContent = "";
    document.querySelector(".event_2").textContent = "";
    document.querySelector(".event_3").textContent = "";
}

const noEvent = document.querySelector("#no_event");

if (eventType === "noEvent"){
    noEvent.classList.remove("hidden");
} else {
    noEvent.classList.add("hidden");
}

// 時間の色と枠の表示

if (eventType !== "noEvent"){
    if (getLosTime().los_time >= eventType.time1[0] && getLosTime().los_time < eventType.time1[1]){
    document.querySelector(".event_1").style.border = "2px solid #FEFDF2";
    document.querySelector(".event_1").style.color = "#FEFDF2";
    } else {
    document.querySelector(".event_1").style.border = "none";
    document.querySelector(".event_1").style.color = "#848484";
    }

    if (getLosTime().los_time >= eventType.time2[0] && getLosTime().los_time < eventType.time2[1]){
    document.querySelector(".event_2").style.border = "2px solid #FEFDF2";
    document.querySelector(".event_2").style.color = "#FEFDF2";
    } else {
    document.querySelector(".event_2").style.border = "none";
    document.querySelector(".event_2").style.color = "#848484";
    }

    if (getLosTime().los_time >= eventType.time3[0] && getLosTime().los_time < eventType.time3[1]){
    document.querySelector(".event_3").style.border = "2px solid #FEFDF2";
    document.querySelector(".event_3").style.color = "#FEFDF2";
    } else {
    document.querySelector(".event_3").style.border = "none";
    document.querySelector(".event_3").style.color = "#848484";
    }
} else {
    document.querySelector(".event_1").style.border = "none";
    document.querySelector(".event_2").style.border = "none";
    document.querySelector(".event_3").style.border = "none";
}

// 画面の自動リロード

function reload(){
    if (getLosTime().los_time === 0){
        location.reload(); // 日本時間16時
        return;
    }

    if (eventType !== "noEvent"){
        if (getLosTime().los_time === eventType.time1[0] || getLosTime().los_time === eventType.time1[1]){
            location.reload(); // time1の開始と終了時
            return;
        }

        if (getLosTime().los_time === eventType.time2[0] || getLosTime().los_time === eventType.time2[1]){
            location.reload(); // time2の開始と終了時
            return;
        }

        if (getLosTime().los_time === eventType.time3[0] || getLosTime().los_time === eventType.time3[1]){
            location.reload(); // time3の開始と終了時
            return;
        }
}
    // console.log("リロード判定中");
    
}

reload();
setInterval(reload, 1000);

// ロード画面

const loader = document.querySelector(".loading_container");

window.onload = function(){
    setTimeout(() => {
        loader.classList.add("loaded");
    }, 1000);

    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
};

// カウントダウン

let countdownRem;
let countdownMinute;
let countdownHour;
let countdownSecond;

let countdownText;
let countdownTime;

function countdown() {
    if (eventType !== "noEvent"){
        if (getLosTime().los_time < eventType.time1[0]){
            countdownRem = eventType.time1[0] - getLosTime().los_time;
            countdownText = "開始まで";
        } else if (getLosTime().los_time >= eventType.time1[0] && getLosTime().los_time < eventType.time1[1]){
            countdownRem = eventType.time1[1] - getLosTime().los_time;
            countdownText = "終了まで";
        } else if (getLosTime().los_time >= eventType.time1[1] && getLosTime().los_time < eventType.time2[0]){
            countdownRem = eventType.time2[0] - getLosTime().los_time;
            countdownText = "開始まで";
        } else if (getLosTime().los_time >= eventType.time2[0] && getLosTime().los_time < eventType.time2[1]){
            countdownRem = eventType.time2[1] - getLosTime().los_time;
            countdownText = "終了まで";
        } else if (getLosTime().los_time >= eventType.time2[1] && getLosTime().los_time < eventType.time3[0]){
            countdownRem = eventType.time3[0] - getLosTime().los_time;
            countdownText = "開始まで";
        } else if (getLosTime().los_time >= eventType.time3[0] && getLosTime().los_time < eventType.time3[1]){
            countdownRem = eventType.time3[1] - getLosTime().los_time;
            countdownText = "終了まで";
        } else if (getLosTime().los_time >= eventType.time3[1]){
            countdownText = "今日の噴出は終了しました";
        }

        countdownHour = Math.floor(countdownRem / 3600);
        countdownMinute = Math.floor((countdownRem % 3600) / 60);
        countdownSecond = Math.floor(countdownRem % 60);

        if (countdownMinute < 10) {
            countdownMinute = "0" + countdownMinute;
        }

        if (countdownSecond < 10) {
            countdownSecond = "0" + countdownSecond;
        }

        countdownTime = "0" + countdownHour + ":" + countdownMinute + ":" + countdownSecond;

        if (getLosTime().los_time >= eventType.time3[1]){
            countdownTime = "";
        }

        document.querySelector(".countdown_text").textContent = countdownText;
        document.querySelector(".countdown_number").textContent = countdownTime;
    } else {
        document.querySelector(".countdown_text").textContent = "";
        document.querySelector(".countdown_number").textContent = "";
    }
}

countdown();
setInterval(countdown, 1000);