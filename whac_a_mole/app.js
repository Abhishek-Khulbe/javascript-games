const container = document.querySelectorAll(".square");
let num = 0,
  i = 0,
  t = 10;
const score = document.getElementById("score");
const time = document.getElementById("time");

// adding event-listeners to all the blocks
container.forEach((e) => {
  e.addEventListener("click", () => hit(e.id));
});

// setting mole
setInterval(() => {
  num = Math.floor(Math.random() * 9);
  container[num].classList.add("mole");
  setTimeout(() => {
    container[num].classList.remove("mole");
  }, 900);
}, 1000);

// checking if we have hit the mole and setting up score
function hit(e) {
  if (e == container[num].id) {
    i++;
    score.textContent = i;
  }
}

// setting up time
setInterval(() => {
  time.textContent = t;
  if (t == 0) {
    alert("YOUR POINTS ARE " + score.textContent);
    t = 10;
    score.textContent = 0;
    i = 0;
  }
  t--;
}, 1000);