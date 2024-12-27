// ======= DATE() =======
// ======= Lvl 1_1 =======
console.log("Lvl 1_1");

const date1 = new Date("September 2, 2019 09:00:00")
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const dateDiv = document.querySelector("#date-div") as HTMLDivElement;
dateDiv.innerHTML += `<p>${date1}</p><p>${date2}</p><p>${date3}</p><p>${date4}</p>`;

// ======= Lvl 2_1 ======= 
console.log("Lvl 2_1");

const todayDate = new Date();
const todayDay = todayDate.getDay();
const todayMonth = todayDate.getMonth() + 1;
const todayYear = todayDate.getFullYear();

const todayDiv = document.querySelector("#today") as HTMLDivElement;

if (todayDiv) {
    todayDiv.innerHTML += `<p>${todayDay < 10 ? "0" : ""}${todayDay}-${todayMonth < 10 ? "0" : ""}${todayMonth}-${todayYear}</p>`;
    todayDiv.innerHTML += `<p>${todayDay < 10 ? "0" : ""}${todayDay}/${todayMonth < 10 ? "0" : ""}${todayMonth}/${todayYear}</p>`;
}

const locale = todayDate.toLocaleTimeString("de-DE", {hour: '2-digit', minute: '2-digit'});
todayDiv.innerHTML += `<p>${locale} Uhr</p>`;

const utc = todayDate.toUTCString();
todayDiv.innerHTML += `<p>${utc.substring(17, 22)} Uhr</p>`;

// ======= Lvl 3_2 ======= 

const backThen = new Date(0);
const today = new Date();

const fnsDiv = document.querySelector("#fns");

import { differenceInYears, differenceInHours, differenceInSeconds } from "date-fns";

const differenceYears = differenceInYears(today, backThen);
console.log(differenceYears);
const differenceHours = differenceInHours(today, backThen);
console.log(differenceHours);
const differenceSeconds = differenceInSeconds(today, backThen);
console.log(differenceSeconds);
