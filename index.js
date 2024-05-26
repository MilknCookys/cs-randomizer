const prompt = require("prompt-sync")();

site = ["A", "B"];

CTPistol = ["USP", "CZ75-Auto", "P250", "Five-Seven", "Deagle"];

CTGun = [
  "MP9",
  "Nova",
  "XM",
  "MP5-SD",
  "P90",
  "Phamas",
  "M4A1S",
  "M4A4",
  "Scout",
  "AWP",
];

TPistol = ["Glock", "Duelies", "P250", "Tec9", "Deagle"];

TGun = [
  "Mac-10",
  "Nova",
  "XM",
  "P90",
  "MP5",
  "Galil",
  "AK-47",
  "Scout",
  "SG",
  "AWP",
];

function randomizer(array) {
  let randomIndex = Math.floor(Math.random() * (array.length - 1));
  return randomIndex;
}

let side2 = () => {
  side = prompt("Are you on T side (Y/N): ");
  return side;
};

function sideCheck(TPistol, TGun, CTPistol, CTGun, side) {
  if (side === "Y") {
    console.log(
      `Your weapons are: ${TPistol[randomizer(TPistol)]}, ${
        TGun[randomizer(TGun)]
      }.`
    );
  } else if (side === "N") {
    console.log(
      `Your weapons are: ${CTPistol[randomizer(CTPistol)]}, ${
        CTGun[randomizer(CTGun)]
      }.`
    );
  } else {
    console.log("Please enter either Y or N");
    sideCheck(TPistol, TGun, CTPistol, CTGun, side2());
  }
}

sideCheck(TPistol, TGun, CTPistol, CTGun, side2());

// console.log(randomizer(TPistol));
