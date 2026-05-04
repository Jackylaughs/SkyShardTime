// 時計

function displayTime(){

const now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

if(hour < 10){
    hour = "0" + hour;
}

if(minute < 10){
    minute = "0" + minute;
}

if(second < 10){
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
    menuButton.classList.toggle("open");
});



// 場所

const now = new Date();
const today = now.getDate();
let venue = "";

switch (today){
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

document.getElementById("today_location").textContent = venue;