const arr = ["rock", "paper", "scissors"];

const computer = document.getElementById("computerChoice");
const you = document.getElementById("yourChoice");
const result = document.getElementById("result");
const btnContainer = document.querySelector(".btn-container");
const rock = document.querySelector(".btn-rock");
const paper = document.querySelector(".btn-paper");
const scissors = document.querySelector(".btn-scissors");

function choice() {
  const num = Math.random() * arr.length;
  return Math.floor(num);
}

btnContainer.addEventListener("click", function () {
    let num = choice();
    computer.innerHTML = arr[num];
    if (computer.innerHTML == "") result.innerHTML = "";
    else {
      if (computer.innerHTML == you.innerHTML) result.innerHTML = "YOU WIN!!";
      else result.innerHTML = "YOU LOSE!!";
    }
});

rock.addEventListener("click", function () {
  you.innerHTML = "rock";
});

paper.addEventListener("click", function () {
  you.innerHTML = "paper";
});

scissors.addEventListener("click", function () {
  you.innerHTML = "scissors";
});

