// ======= CONDITIONALS II =======
// ======= LVL 1_5 =======
console.log("Lvl 1_5");

let weekdayAsNumber : number;
let weekdayAsString : string;

weekdayAsNumber = Number(window.prompt("Please inset a number from 1 to 7"))
console.log(weekdayAsNumber);

switch (weekdayAsNumber) {
    case 1:
        console.log(weekdayAsString = "Montag");
        break;
    case 2:
        console.log(weekdayAsString = "Dienstag");
        break;
    case 3:
        console.log(weekdayAsString = "Mittwoch");
        break;
    case 4:
        console.log(weekdayAsString = "Donnerstag");
        break;
    case 5:
        console.log(weekdayAsString = "Freitag");
        break;
    case 6:
        console.log(weekdayAsString = "Samstag");
        break;
    case 7:
        console.log(weekdayAsString = "Sonntag");
        break;
    default:
        console.log("Weekday must be between 1 and 7");
}

// ======= LVL 2_4 =======
console.log("Lvl 2_4");

const zufall1 = Math.floor(Math.random() * 77);
const zufall2 = Math.floor(Math.random() * 77);

if (zufall1 == zufall2) {
    console.log("Was für ein Zufall");
} else if (zufall1 > zufall2) {
    console.log("Erste Zahl größer");
} else {
    console.log("Zweite Zahl größer");
}

const zufallDiff = zufall1 - zufall2;

switch(true) {
    case zufallDiff == 0:
        console.log("Was für ein Zufall");
        break;
    case zufallDiff < 0:
        console.log("Erste Zahl ist größer");
        break;
    case zufallDiff > 0:
        console.log("Zweite Zahl ist größer");
}

// ======= LVL 2_4 =======
console.log("Lvl 2_8");

const schoolGrade = Math.round(Math.random() * 10);

switch (schoolGrade) {
    case 1:
        console.log("Sehr gut");
        break;
    case 2:
        console.log("Gut");
        break;
    case 3:
        console.log("Befriedigend");
        break;
    case 4:
        console.log("Ausreichend");
        break;
    case 5:
        console.log("Mangelhaft");
        break;
    case 6:
        console.log("Ungenügend");
        break;
    default:
        console.log("Das ist keine gültige Schulnote.");
}

// ======= LVL 3_1 =======
console.log("Lvl 3_1");

const salesMonth = Math.round(Math.random() * 12);
let quartal : string | null;

switch (salesMonth) {
    case 1:
    case 2:
    case 3:
        quartal = "1. Quartal"
        console.log(quartal);
        break;
    case 4:
    case 5:
    case 6:
        quartal = "2. Quartal"
        console.log(quartal);
        break;
    case 7:
    case 8:
    case 9:
        quartal = "3. Quartal"
        console.log(quartal);
        break;
    case 10:
    case 11:
    case 12:
        quartal = "4. Quartal"
        console.log(quartal);
        break;
    default:
        quartal = null;
}

const totalSales = (Math.random() * (10000 - 1000) + 1000);
let salesOutput : string | null;

// ? Math.random() * (max - min) + min
// bsp 
// ? const getRandomNumber = (min, max) => {
// ?    return Math.random() * (max - min) + min
// ?  }

// Random number between 5 and 10
// ? const randomNumber = getRandomNumber(5, 10)

// Random number between 0 and 100
// ? const randomNumber2 = getRandomNumber(0, 100)

switch (true) {
    case totalSales <= 2500:
        salesOutput = "schlecht";
        break;
    case totalSales >= 2501 && totalSales <= 5000:
        salesOutput = "mittelmäßig";
        break;
    case totalSales >= 5001 && totalSales <= 7500:
        salesOutput = "hoch";
        break;
    case totalSales >= 7501:
        salesOutput = "unglaublich";
        break;
    default:
        salesOutput = null;
}
console.log(`Im ${quartal} war der Umsatz ${salesOutput}!`);