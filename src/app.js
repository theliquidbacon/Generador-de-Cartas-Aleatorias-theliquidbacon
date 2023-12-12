/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
    "K",
    "A"
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

// Boton

const handleClick = event => {
  const cardType2 = `${randomCard()}`;
  const cardNumber2 = `${randomNumber()}`;
  const updateNumber = document.querySelector(".card-number");
  updateNumber.innerHTML = cardNumber2;

  const updateType = document.querySelector(".card-type");
  updateType.innerHTML = cardType2;

  const updateType2 = document.querySelector(".card-type2");
  updateType2.innerHTML = cardType2;
  console.log(handleClick);
};
const updateButton = document.querySelector(".update");
updateButton.addEventListener("click", handleClick);
