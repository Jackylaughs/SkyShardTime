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

setTimeout(displayTime, 1000);
}

displayTime();

// メニューボタン

const menuButton = document.querySelector(".menu_button");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle ("open");
});



// 場所

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

    return { los_weekday, los_today, los_hour, los_minute, los_second };

    setTimeout(getLosTime, 1000);
}

getLosTime();

console.log(getLosTime());
console.log("曜日: " + getLosTime().los_weekday);
console.log("日付: " + getLosTime().los_today);
console.log("時間: " + getLosTime().los_hour);
console.log("分: " + getLosTime().los_minute);
console.log("秒: " + getLosTime().los_second);

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

// 開催判定

let isEvent ;

if (getLosTime().los_today % 6 === 1 && getLosTime().los_weekday !== "Mon" && getLosTime().los_weekday !== "Tue") {
    isEvent = "赤A開催";
} else if(getLosTime().los_today % 6 === 3 && getLosTime().los_weekday !== "Tue" && getLosTime().los_weekday !== "Wed") {
    isEvent = "赤B開催";
} else if(getLosTime().los_today % 6 === 5 && getLosTime().los_weekday !== "Wed" && getLosTime().los_weekday !== "Thu") {
    isEvent = "赤C開催";
} else if(getLosTime().los_today % 4 === 2 && getLosTime().los_weekday !== "Sun" && getLosTime().los_weekday !== "Mon") {
    isEvent = "黒A開催";
} else if(getLosTime().los_today % 4 === 0 && getLosTime().los_weekday !== "Sat" && getLosTime().los_weekday !== "Sun") {
    isEvent = "黒B開催";
} else {
    isEvent = "開催なし";
}

// console.log(isEvent);

// 背景

if(isEvent !== "開催なし" && venue === "草原・洞窟"){
    document.body.style.backgroundImage = "url('images/DP_cave.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・神殿前"){
    document.body.style.backgroundImage = "url('images/HF_boneyard.png')";
} else if(isEvent !== "開催なし" && venue === "峡谷・夢見"){
    document.body.style.backgroundImage = "url('images/VT_dream.png')";
} else if(isEvent !== "開催なし" && venue === "捨てられた地・最初のエリア"){
    document.body.style.backgroundImage = "url('images/GW_outer.png')";
} else if(isEvent !== "開催なし" && venue === "書庫・星月夜（海月の入り江）"){
    document.body.style.backgroundImage = "url('images/VK_jellyfish.png')";
} else if(isEvent !== "開催なし" && venue === "草原・神殿前"){
    document.body.style.backgroundImage = "url('images/DP_temple.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・神殿奥"){
    document.body.style.backgroundImage = "url('images/HF_temple.png')";
} else if(isEvent !== "開催なし" && venue === "峡谷・スケートリンク"){
    document.body.style.backgroundImage = "url('images/VT_icerink.png')";
} else if(isEvent !== "開催なし" && venue === "捨てられた地・座礁船"){
    document.body.style.backgroundImage = "url('images/GW_crab.png')";
} else if(isEvent !== "開催なし" && venue === "書庫・星月夜（バラの先）"){
    document.body.style.backgroundImage = "url('images/VK_desert.png')";
} else if(isEvent !== "開催なし" && venue === "草原・楽園"){
    document.body.style.backgroundImage = "url('images/DP_sanctuary.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・小川"){
    document.body.style.backgroundImage = "url('images/HF_brook.png')";
} else if(isEvent !== "開催なし" && venue === "捨てられた地・戦場"){
    document.body.style.backgroundImage = "url('images/GW_battlefield.png')";
} else if(isEvent !== "開催なし" && venue === "草原・蝶々の住処"){
    document.body.style.backgroundImage = "url('images/DP_butterfly.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・晴れ間"){
    document.body.style.backgroundImage = "url('images/HF_clearing.png')";
} else if(isEvent !== "開催なし" && venue === "捨てられた地・墓所"){
    document.body.style.backgroundImage = "url('images/GW_graveyard.png')";
} else if(isEvent !== "開催なし" && venue === "草原・鳥の巣"){
    document.body.style.backgroundImage = "url('images/DP_birdnest.png')";
} else if(isEvent !== "開催なし" && venue === "峡谷・隠者"){
    document.body.style.backgroundImage = "url('images/VT_hermit.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・ツリーハウス"){
    document.body.style.backgroundImage = "url('images/HF_treehouse.png')";
} else if(isEvent !== "開催なし" && venue === "捨てられた地・方舟"){
    document.body.style.backgroundImage = "url('images/GW_ark.png')";
} else {
    document.body.style.backgroundImage = "url('images/no_event.png')";
}

// 開催場所の表示

if(isEvent !== "開催なし"){
    document.getElementById("today_location").textContent = venue;
    // document.getElementById("no_event").textContent = "本日の闇の破片はありません";  // 後で消す
} else {
    document.getElementById("today_location").textContent = "";
    document.getElementById("no_event").textContent = "本日の闇の破片はありません";
}

// 日付をまたいだ時の自動リロード

function reload(){
    const los_now = new Date();

    const formatter = new Intl.DateTimeFormat ("en-US", {
        timeZone: "America/los_Angeles",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    });

    const parts = formatter.formatToParts (los_now);
    const los_hour = Number (parts.find(part => part.type === "hour").value); // ロスの時間
    const los_minute = Number (parts.find(part => part.type === "minute").value); // ロスの分
    const los_second = Number (parts.find(part => part.type === "second").value); // ロスの秒  

    if (los_hour === 0 && los_minute === 0 && los_second === 0){
        location.reload();
    }

    setTimeout(reload, 1000);
}

reload();

// 時間表記

if (isEvent === "赤A開催"){
    document.querySelector(".event_1").textContent = "23:50 - 03:40";
    document.querySelector(".event_2").textContent = "05:50 - 09:40";
    document.querySelector(".event_3").textContent = "11:50 - 15:40";
} else if (isEvent === "赤B開催"){
    document.querySelector(".event_1").textContent = "18:30 - 22:20";
    document.querySelector(".event_2").textContent = "00:30 - 04:20";
    document.querySelector(".event_3").textContent = "06:30 - 10:20";
} else if (isEvent === "赤C開催"){
    document.querySelector(".event_1").textContent = "19:40 - 23:30";
    document.querySelector(".event_2").textContent = "01:40 - 05:30";
    document.querySelector(".event_3").textContent = "07:40 - 11:30";
} else if (isEvent === "黒A開催"){
    document.querySelector(".event_1").textContent = "18:20 - 22:10";
    document.querySelector(".event_2").textContent = "02:20 - 06:10";
    document.querySelector(".event_3").textContent = "10:20 - 14:10";
} else if (isEvent === "黒B開催"){
    document.querySelector(".event_1").textContent = "18:00 - 21:50";
    document.querySelector(".event_2").textContent = "02:00 - 05:50";
    document.querySelector(".event_3").textContent = "10:00 - 13:50";
} else {
    document.querySelector(".event_1").textContent = "";
    document.querySelector(".event_2").textContent = "";
    document.querySelector(".event_3").textContent = "";
}

// 時間の枠

let currentMinute = getLosTime().los_hour * 60 + getLosTime().los_minute;
let event_1;
let event_2;
let event_3;

if (isEvent === "赤A開催"){
    if (currentMinute >= 470 && currentMinute < 700){
        event_1 = true;
    } else if (currentMinute >= 830 && currentMinute < 1060){
        event_2 = true;
    } else if (currentMinute >= 1190 && currentMinute < 1420){
        event_3 = true;
    } else {
        event_1 = false;
        event_2 = false;
        event_3 = false;
    }
} else if (isEvent === "赤B開催"){
    if (currentMinute >= 150 && currentMinute < 380){
        event_1 = true;
    } else if (currentMinute >= 510 && currentMinute < 740){
        event_2 = true;
    } else if (currentMinute >= 870 && currentMinute < 1100){
        event_3 = true;
    } else {
        event_1 = false;
        event_2 = false;
        event_3 = false;
    }
} else if (isEvent === "赤C開催"){
    if (currentMinute >= 220 && currentMinute < 450){
        event_1 = true;
    } else if (currentMinute >= 580 && currentMinute < 810){
        event_2 = true;
    } else if (currentMinute >= 940 && currentMinute < 1170){
        event_3 = true;
    } else {
        event_1 = false;
        event_2 = false;
        event_3 = false;
    }
} else if (isEvent === "黒A開催"){
    if (currentMinute >= 140 && currentMinute < 370){
        event_1 = true;
    } else if (currentMinute >= 620 && currentMinute < 850){
        event_2 = true;
    } else if (currentMinute >= 1100 && currentMinute < 1330){
        event_3 = true;
    } else {
        event_1 = false;
        event_2 = false;
        event_3 = false;
    }
} else if (isEvent === "黒B開催"){
    if (currentMinute >= 120 && currentMinute < 350){
        event_1 = true;
    } else if (currentMinute >= 600 && currentMinute < 830){
        event_2 = true;
    } else if (currentMinute >= 1080 && currentMinute < 1310){
        event_3 = true;
    } else {
        event_1 = false;
        event_2 = false;
        event_3 = false;
    }
} else {
    event_1 = false;
    event_2 = false;
    event_3 = false;
}

if (event_1 === true){
    document.querySelector(".event_1").style.border = "2px solid #FEFDF2";
    document.querySelector(".event_1").style.color = "#FEFDF2";
} else {
    document.querySelector(".event_1").style.border = "none";
    document.querySelector(".event_1").style.color = "#848484";
}

if (event_2 === true){
    document.querySelector(".event_2").style.border = "2px solid #FEFDF2";
    document.querySelector(".event_2").style.color = "#FEFDF2";
} else {
    document.querySelector(".event_2").style.border = "none";
    document.querySelector(".event_2").style.color = "#848484";
}

if (event_3 === true){
    document.querySelector(".event_3").style.border = "2px solid #FEFDF2";
    document.querySelector(".event_3").style.color = "#FEFDF2";
} else {
    document.querySelector(".event_3").style.border = "none";
    document.querySelector(".event_3").style.color = "#848484";
}

console.log("経過分: " + currentMinute);
console.log(event_1, event_2, event_3);