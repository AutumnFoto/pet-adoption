"use strict";

const pets = [
  {
    image:
      "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/s960x960/93366679_10221584510259882_1653151457899184128_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=Uvlk5CYAhrwAX-3RMpY&_nc_ht=scontent-atl3-1.xx&_nc_tp=7&oh=2a5eabade88f74514544ac279ca9f77c&oe=5F3F984C",
    name: "Mocha",
    color: "Brown",
    specialSkill: "Playing fetch",
    typeOfPet: "Dog",
  },

  {
    image: "https://pixy.org/download/4663301/",
    name: "Kitters",
    color: "Spotted",
    specialSkill: "Sleeping",
    typeOfPet: "Cat",
  },

  {
    image:
      "https://i.pinimg.com/originals/1d/26/14/1d26144b04873f9a13ee05c0ae8d583f.jpg",
    name: "Chomper",
    color: "Green",
    specialSkill: "Chomping",
    typeOfPet: "Dino",
  },

  {
    image:
      "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/01160419/black-cat-1-940x503.jpg",
    name: "Souffle",
    color: "Brown",
    specialSkill: "Spinning",
    typeOfPet: "Cat",
  },

  {
    image:
      "https://images.creativemarket.com/0.1.0/ps/2438977/300/200/m2/fpc/wm0/kgdhbglux2txdxhfk4pgijvt454ybpmzocyw6evyd4zhw5ijjjpguadsz34cgjfh-.jpg?1490100724&s=6f95e764e2a1d7bb2e37b089edc594b8",
    name: "BK",
    color: "Orange",
    specialSkill: "Boxing",
    typeOfPet: "Cat",
  },

  {
    image:
      "https://vignette.wikia.nocookie.net/landbeforetime/images/0/0b/Littlefoot_IV.png/revision/latest?cb=20171227183122",
    name: "Little foot",
    color: "Purple",
    specialSkill: "Javascript",
    typeOfPet: "Dino",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
const buildPetCards = () => {
  let domString = "";

  for (let i = 0; i < pets.length; i++) {
    domString += `<div class="pet ${pets[i].typeOfPet}">`;
    domString += `<div class="pet-name"><h2>${pets[i].name}</h2></div>`;
    domString += `<div class="pet-image"><img src =${pets[i].image} alt ="Image of a ${pets[i].typeOfPet}"></div>`;
    domString += `<div class ="pet-color"><h3>${pets[i].color}</h3></div>`;

    domString += `<div class="pet-skills"><p> This pet's special skill is ${pets[i].specialSkill}</p></div>`;
    domString += `<div class="pet-type"><h3>${pets[i].typeOfPet}</h3></div>`;
    domString += `</div>`;
  }

  printToDom("pets", domString);
};
buildPetCards();

const dogButton = document.getElementById("dog-btn");
const catButton = document.getElementById("cat-btn");
const dinoButton = document.getElementById("dino-btn");
const allButton = document.getElementById("all-btn");

const getPets = document.getElementsByClassName("pet");

const sortPets = (petType) => {
  for (let l = 0; l < getPets.length; l++) {
    if (getPets[l].classList.contains(petType)) {
      getPets[l].style.display = "";
    } else {
      getPets[l].style.display = "none";
    }
  }
};

dogButton.addEventListener("click", function() { sortPets('Dog'); });
catButton.addEventListener("click", function () { sortPets('Cat'); });
dinoButton.addEventListener("click", function () { sortPets('Dino'); });
allButton.addEventListener("click", function () { sortPets('pet')});
