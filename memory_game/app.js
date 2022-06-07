const cardArr = [
  {
    name: "cheeseburger",
    src: "cheeseburger.png",
  },
  {
    name: "fries",
    src: "fries.png",
  },
  {
    name: "hotdog",
    src: "hotdog.png",
  },
  {
    name: "ice-cream",
    src: "ice-cream.png",
  },
  {
    name: "milkshake",
    src: "milkshake.png",
  },
  {
    name: "pizza",
    src: "pizza.png",
  },
  {
    name: "cheeseburger",
    src: "cheeseburger.png",
  },
  {
    name: "fries",
    src: "fries.png",
  },
  {
    name: "hotdog",
    src: "hotdog.png",
  },
  {
    name: "ice-cream",
    src: "ice-cream.png",
  },
  {
    name: "milkshake",
    src: "milkshake.png",
  },
  {
    name: "pizza",
    src: "pizza.png",
  },
];

// sort in random order
cardArr.sort(() => 0.5 - Math.random());

const gridContainer = document.querySelector(".grid-container");
const result = document.getElementById("score");
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

// create the board
function createBoard() {
  for (i = 0; i < cardArr.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridContainer.appendChild(card);
  }
}

// check for matches
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const option1Id = cardsChosenId[0];
  const option2Id = cardsChosenId[1];
  console.log(cardsChosen);

  if (option1Id == option2Id) {
    // same image is clicked
    cards[option1Id].setAttribute("src", "blank.png");
    cards[option2Id].setAttribute("src", "blank.png");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    // correct match
    cards[option1Id].setAttribute("src", "white.png");
    cards[option2Id].setAttribute("src", "white.png");
    cards[option1Id].removeEventListener("click", flipCard);
    cards[option2Id].removeEventListener("click", flipCard);

    cardsWon.push(cardsChosen);
  } else {
    // incorrect match
    cards[option1Id].setAttribute("src", "blank.png");
    cards[option2Id].setAttribute("src", "blank.png");
  }

  cardsChosen = [];
  cardsChosenId = [];

  // displaying the score
  result.textContent = cardsWon.length;

  if (cardsWon.length == cardArr.length / 2)
    alert("Congratulations!! You have won the game!!");
}

// flip the card
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArr[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArr[cardId].src);

  if (cardsChosen.length == 2) setTimeout(checkMatch, 500);
}

createBoard();
