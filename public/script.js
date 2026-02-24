// function updtClk() {
//   const now = new Date();

//   let hrs = now.getHours();
//   const mrdn = hrs >= 12 ? "P.M" : "A.M"
//   const mins = now.getMinutes();
//   const secs = now.getSeconds().toString().padStart(2, 0);
//   const tmStr = `${hrs}:${mins}:${secs} ${mrdn}`;
//   document.getElementById("clk").textContent = tmStr;
// }

// updtClk();
// setInterval(updtClk, 1000);

// const dspy = document.getElementById("dspy");
// let tmr = null;
// let strtTm = 0;
// let elpsdTm = 0;
// let isRng = false;

// function strt() {
//   if (!isRng) {
//     strtTm = Date.now() - elpsdTm;
//     tmr = setInterval(updt, 10);
//     isRng = true;
//   }

// }

// function stop() {
//   if (isRng) {
//     clearInterval(tmr);
//     elpsdTm = Date.now() - strtTm;
//     isRng = false;
//   }
// }

// function rst() {
//   clearInterval(tmr);
//   strtTm = 0;
//   elpsdTm = 0;
//   isRng = false;
//   dspy.textContent = "00:00:00:00";
// }

// function updt() {
//   const crtTm = Date.now();
//   elpsdTm = crtTm - strtTm;

//   let hrs = Math.floor(elpsdTm / (1000 * 60 * 60));
//   let mins = Math.floor(elpsdTm / (1000 * 60) % 60);
//   let secs = Math.floor(elpsdTm / 1000 % 60);
//   let mlsecs = Math.floor(elpsdTm % 1000 / 10);

//   hrs = String(hrs).padStart(2, "0");
//   mins = String(mins).padStart(2, "0");
//   secs = String(secs).padStart(2, "0");
//   mlsecs = String(mlsecs).padStart(2, "0");

//   dspy.textContent = `${hrs}:${mins}:${secs}:${mlsecs}`
// }

// const choices = ["rock", "paper", "scissors"];
// const plyrDsply = document.getElementById("plyrDsply");
// const compDsply = document.getElementById("compDsply");
// const resDsply = document.getElementById("resDsply");

// function plyGm(plyrChc) {
//     const compChc = choices[Math.floor(Math.random() * 3)];
//     let res = "";

//     if (plyrChc === compChc) {
//         res = "IT'S A TIE!";
//     }

//     else {
//         switch (plyrChc) {
//             case "rock":
//                 res = (compChc === "scissors") ? "YOU WIN!" : "YOU LOSE!"
//                 break;

//                 case "paper":
//                 res = (compChc === "rock") ? "YOU WIN!" : "YOU LOSE!"
//                 break;

//                 case "scissors":
//                 res = (compChc === "paper") ? "YOU WIN!" : "YOU LOSE!"
//                 break;

//         }
//     }

//     plyrDsply.textContent = `PLAYER: ${plyrChc}`;
//     compDsply.textContent = `COMPUTER: ${compChc}`;
//     resDsply.textContent = res;
// }

let calciBTNs = document.querySelectorAll(".calciBTN");
let clearBTN = document.querySelector("#clear");
let backspaceBTN = document.querySelector("#backspace");
let equalToBTN = document.querySelector("#equalTo");
let display = document.querySelector("#display");

calciBTNs.forEach((el) => {
  el.addEventListener("click", () => {
    display.value += el.value;
  });
});

const evaluate = () => {
  if (display.value !== "") {
    try {
      let result = math.evaluate(display.value);
      display.value = result;
    } catch (err) {
      display.value("ERROR");
    }
  }
};

equalToBTN.addEventListener("click", evaluate);

clearBTN.addEventListener("click", () => {
    display.value = ""
})

backspaceBTN.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
})
