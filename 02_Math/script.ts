// ======= MATH() =======
// ======= Lvl 1_1 =======
console.log(Math.PI);

const pi = Math.PI;
const roundedPI = pi.toFixed(2);
console.log(roundedPI);

// ======= Lvl 1_2 =======
console.log("Lvl 1_2");

function roundMe(num : number) {
    const roundedNum = Math.round(num)
    console.log(roundedNum);
}

const randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

roundMe(randomNumbers[0]);
roundMe(randomNumbers[1]);
roundMe(randomNumbers[2]);
roundMe(randomNumbers[3]);

// ======= Lvl 1_3 =======
console.log("Lvl 1_3");

const randomNum = Math.random();
console.log(randomNum);

const randomNum1to10 = Math.round(Math.random() * 10);
console.log(randomNum1to10);

const randomNum1to100 = Math.round(Math.random() * 100);
console.log(randomNum1to100);

// ======= Lvl 2_2 =======
const gameNum = Math.round(Math.random() * 10);

const yourNum = Number(window.prompt("Errate die Zahl zwischen 1 und 10"));

if (gameNum === yourNum) {
    console.log(`Du hast gewonnen! Es war ${gameNum}`);
} else {
    console.log(`Du hast verloren. Die Zahl war ${gameNum}`);
}