"use strict" 

const pets = [

    {
        image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/s960x960/93366679_10221584510259882_1653151457899184128_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=Uvlk5CYAhrwAX-3RMpY&_nc_ht=scontent-atl3-1.xx&_nc_tp=7&oh=2a5eabade88f74514544ac279ca9f77c&oe=5F3F984C",
        name: "Mocha",
        color: "brown",
        specialSkill: "fetch",
        typeOfPet: "dog"
      },

      {
        image: "https://pixy.org/download/4663301/",
        name: "Kitters",
        color: "Spotted",
        specialSkill: "Sleeping",
        typeOfPet: "cat"
      },

      {
        image: "https://i.pinimg.com/originals/1d/26/14/1d26144b04873f9a13ee05c0ae8d583f.jpg",
        name: "Chomper",
        color: "green",
        specialSkill:"chomping",
        typeOfPet: "dino"
      },

      {
        image: "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/01160419/black-cat-1-940x503.jpg" ,
        name: "Souffle",
        color: "brown",
        specialSkill: "spin",
        typeOfPet: "cat"
      },

      {
        image: "https://images.creativemarket.com/0.1.0/ps/2438977/300/200/m2/fpc/wm0/kgdhbglux2txdxhfk4pgijvt454ybpmzocyw6evyd4zhw5ijjjpguadsz34cgjfh-.jpg?1490100724&s=6f95e764e2a1d7bb2e37b089edc594b8",
        name: "BK",
        color: "orange",
        specialSkill: "boxing",
        typeOfPet: "cat"
      },

      {
        image: "https://vignette.wikia.nocookie.net/landbeforetime/images/0/0b/Littlefoot_IV.png/revision/latest?cb=20171227183122" ,
        name: "Little foot",
        color: "purple",
        specialSkill: "javascript",
        typeOfPet: "dino"
        
      },



    ]

    const printToDom= (divid,textToPrint)=> {

        const selectedDiv = document.getElementById(divid);
        selectedDiv.innerHTML = textToPrint;
        }
        const buildPetCards = () => {
          let domString ='';
        
            for(let i=0; i <pets.length; i++) {
            domString += `<div class="pet">`; 
            domString += `<div class="pet-name"><h2>${pets[i].name}</h2></div>`;
            domString += `<div class="pet-image"><img src =${pets[i].image} alt ="Image of a ${pets[i].typeOfPet}"></div>`;
            domString += `<div class ="pet-color"><h3>${pets[i].color}</h3></div>`;
        
            domString += `<div class="pet-skills"><p> This pet's special skill is ${pets[i].specialSkill}</p></div>`;
            domString +=`<div class="pet-type"><h3>${pets[i].typeOfPet}</h3></div>`;
            domString += `</div>`;
            }

            printToDom("pets", domString);
        }
        
           
            
            buildPetCards();
        
        
       