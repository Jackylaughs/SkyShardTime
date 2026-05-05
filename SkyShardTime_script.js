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

const los_now = new Date();

const formatter = new Intl.DateTimeFormat ("en-US", {
    timeZone: "America/los_Angeles",
    day: "numeric",
    weekday: "short",
});

const parts = formatter.formatToParts (los_now);

const los_today = Number (parts.find(part => part.type === "day").value); // ロスの日付
const los_weekday = parts.find (part => part.type === "weekday").value; // ロスの曜日

// console.log (los_today);
// console.log (los_weekday);

let venue ;

switch (los_today){
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
        venue = "捨て地・最初のエリア";
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
        venue = "捨て地・座礁船";
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
        venue = "捨て地・戦場";
        break;
    case 16:
        venue = "草原・蝶々の住処";
        break;
    case 17:
        venue = "雨林・晴れ間";
        break;
    case 19:
        venue = "捨て地・墓所";
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
        venue = "捨て地・方舟";
        break;
}

// 闇の破片の種類

let shardType ;

if (los_today % 6 === 1) {
    shardType = "赤A";
} else if (los_today % 6 === 3) {
    shardType = "赤B";
} else if (los_today % 6 === 5) {
    shardType = "赤C";
} else if (los_today % 4 === 2) {
    shardType = "黒A";
} else if (los_today % 4 === 0) {
    shardType = "黒B";
}

// console.log(shardType);

// 開催判定

let isEvent ;

if (shardType === "赤A" && los_weekday !== "Mon" || los_weekday !== "Tue") {
    isEvent = "赤A開催";
} else if(shardType === "赤B" && los_weekday !== "Tue" || los_weekday !== "Wed") {
    isEvent = "赤B開催";
} else if(shardType === "赤C" && los_weekday !== "Wed" || los_weekday !== "Thu") {
    isEvent = "赤C開催";
} else if(shardType === "黒A" && los_weekday !== "Sun" || los_weekday !== "Mon") {
    isEvent = "黒A開催";
} else if(shardType === "黒B" && los_weekday !== "Sat" || los_weekday !== "Sun") {
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
} else if(isEvent !== "開催なし" && venue === "捨て地・最初のエリア"){
    document.body.style.backgroundImage = "url('images/GW_outer.png')";
} else if(isEvent !== "開催なし" && venue === "書庫・星月夜（海月の入り江）"){
    document.body.style.backgroundImage = "url('images/VK_jellyfish.png')";
} else if(isEvent !== "開催なし" && venue === "草原・神殿前"){
    document.body.style.backgroundImage = "url('images/DP_temple.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・神殿奥"){
    document.body.style.backgroundImage = "url('images/HF_temple.png')";
} else if(isEvent !== "開催なし" && venue === "峡谷・スケートリンク"){
    document.body.style.backgroundImage = "url('images/VT_icerink.png')";
} else if(isEvent !== "開催なし" && venue === "捨て地・座礁船"){
    document.body.style.backgroundImage = "url('images/GW_crab.png')";
} else if(isEvent !== "開催なし" && venue === "書庫・星月夜（バラの先）"){
    document.body.style.backgroundImage = "url('images/VK_desert.png')";
} else if(isEvent !== "開催なし" && venue === "草原・楽園"){
    document.body.style.backgroundImage = "url('images/DP_sanctuary.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・小川"){
    document.body.style.backgroundImage = "url('images/HF_brook.png')";
} else if(isEvent !== "開催なし" && venue === "捨て地・戦場"){
    document.body.style.backgroundImage = "url('images/GW_battlefield.png')";
} else if(isEvent !== "開催なし" && venue === "草原・蝶々の住処"){
    document.body.style.backgroundImage = "url('images/DP_butterfly.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・晴れ間"){
    document.body.style.backgroundImage = "url('images/HF_clearing.png')";
} else if(isEvent !== "開催なし" && venue === "捨て地・墓所"){
    document.body.style.backgroundImage = "url('images/GW_graveyard.png')";
} else if(isEvent !== "開催なし" && venue === "草原・鳥の巣"){
    document.body.style.backgroundImage = "url('images/DP_birdnest.png')";
} else if(isEvent !== "開催なし" && venue === "峡谷・隠者"){
    document.body.style.backgroundImage = "url('images/VT_hermit.png')";
} else if(isEvent !== "開催なし" && venue === "雨林・ツリーハウス"){
    document.body.style.backgroundImage = "url('images/HF_treehouse.png')";
} else if(isEvent !== "開催なし" && venue === "捨て地・方舟"){
    document.body.style.backgroundImage = "url('images/GW_ark.png')";
} else {
    document.body.style.backgroundImage = "url('images/no_event.png')";
}

// 開催場所の表示

if(isEvent !== "開催なし"){
    document.getElementById("today_location").textContent = venue;
} else {
    document.getElementById("today_location").textContent = "開催なし";
}