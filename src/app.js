import "bootstrap";
import "./style.css";

window.onload = function() {};

function randomCard() {
  let cards = [
    "<p class='diamond'>♦</p>",
    "<p class='heart'>♥</p>",
    "<p class='spade'>♠</p>",
    "<p class='club'>♣</p>"
  ];
  let cardsIndex = Math.floor(Math.random() * cards.length);
  return cards[cardsIndex];
}

function randomNumber() {
  let cards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  return cards[Math.floor(Math.random() * cards.length)];
}

const cardType = `${randomCard()}`;
const cardNumber = `${randomNumber()}`;

const typeElement = document.querySelector(".card-type");
typeElement.innerHTML = cardType;

const type2Element = document.querySelector(".card-type2");
type2Element.innerHTML = cardType;

const numberElement = document.querySelector(".card-number");
numberElement.innerHTML = cardNumber;

const handleClick = event => {
  const cardType2 = `${randomCard()}`;
  const cardNumber2 = `${randomNumber()}`;
  const updateNumber = document.querySelector(".card-number");
  updateNumber.innerHTML = cardNumber2;

  const updateType = document.querySelector(".card-type");
  updateType.innerHTML = cardType2;

  const updateType2 = document.querySelector(".card-type2");
  updateType2.innerHTML = cardType2;
};
const updateButton = document.querySelector(".update");
updateButton.addEventListener("click", handleClick);

function generateNewCard() {
  const cardType = `${randomCard()}`;
  const cardNumber = `${randomNumber()}`;

  const typeElement = document.querySelector(".card-type");
  typeElement.innerHTML = cardType;

  const type2Element = document.querySelector(".card-type2");
  type2Element.innerHTML = cardType;

  const numberElement = document.querySelector(".card-number");
  numberElement.innerHTML = cardNumber;
}

const intervalId = setInterval(generateNewCard, 10000);

function handleInputChange() {
  const cardWidth = document.getElementById("card-width").value;
  const cardHeight = document.getElementById("card-height").value;

  if (cardWidth && cardHeight) {
    const cardElement = document.querySelector(".card");
    cardElement.style.width = `${cardWidth}px`;
    cardElement.style.height = `${cardHeight}px`;
  }
}

const widthInput = document.getElementById("card-width");
const heightInput = document.getElementById("card-height");

widthInput.addEventListener("change", handleInputChange);
heightInput.addEventListener("change", handleInputChange);
