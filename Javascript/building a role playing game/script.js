let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let text = document.querySelector("#text");
let healthText = document.querySelector(".health");
let goldText = document.querySelector(".gold");
let xpText = document.querySelector(".xp");
let monster = document.querySelector("#monster");
let monsterName = document.querySelector("#monsterName");
let monsterHealth = document.querySelector("#monsterHealth");
const weapons = [{ name: "stick", power: 5}, {name: "dagger" , power: 30}, {name: "claw hammer", power: 50}, {name: "sword", power: 100}];


let inventory = ["stick"];
let weaponFactor = 0;

let health = 100;
let gold = 50;
let xp = 0;

goldText.innerHTML = gold;

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
const data = [
  { // go town
    text : ["Go to store", "Go to cave", "Fight dragon"],
    "game function" : [goStore, goCave, fightDragon],
    onText : "You are in the town square. You see a sign that says \"Store\"."
  },
  { // go store
    text : ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "game function" : [buyHealth, buyWeapon, goTown],
    onText : "You enter the store",
  },
  { // go cave
    text: ["Fight slime", "Fight fanged beast", "Go to town square"],
    "game function" : [fightSlime, fightFangedBeast, goTown],
    onText : "You enter the cave. You see some monsters"
  },
  { // fightButton
    text: ["Attack", "Dodge", "Run"],
    "game function" : [attack, dodge, goTown],
    onText: "You are fighting a monster",
  },
  { // lose
    text: ["REPLAY?", "REPLAY?", "REPLAY?"],
    "game function" : [replay, replay, replay],
    onText: "You die. &#x2620;",
  },
  { // replay
    text : ["Go to store", "Go to cave", "Fight dragon"],
    "game function" : [goStore, goCave, fightDragon],
    onText : "Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above."
  },

  { // win
    text: ["REPLAY?", "REPLAY?", "REPLAY?"],
    "game function" : [replay, replay, replay],
    onText: "You defeat the dragon! YOU WIN THE GAME &#x1F389;",
  },

  { // defeat monster 7
    text: ["Go to town square", "Go to town square", "Go to town square"],
    "game function" : [goTown, goTown, easterEgg],
    onText: "The monster screams \"Arg!\" as it dies. You gain experience points and find gold."
  },
  { // easter egg 8
    text: ["2", "8", "Go to town square?"],
    "game function" : [pick2, pick8, goTown],
    onText: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!",
  }
]

const monsterData = [
  {
    name: "Slime",
    level: 2,
    health: 15,
  },
  {
    name: "Fanged Beast",
    level: 8,
    health: 60,
  },
  {
    name: "Dragon",
    level: 20,
    health: 300,
  }
]
function update(dataObject) {
  button1.innerHTML = dataObject["text"][0];
  button2.innerHTML = dataObject["text"][1];
  button3.innerHTML = dataObject["text"][2];
  button1.onclick = dataObject["game function"][0];
  button2.onclick = dataObject["game function"][1];
  button3.onclick = dataObject["game function"][2];
  text.innerHTML = dataObject["onText"];
}

function goStore() {
  update(data[1]);
};

function goTown() {
  update(data[0]);
  monster.style.display = "none";
};

function goCave(){
  update(data[2]);
};

function buyHealth() {
  if (gold >= 10) {
    health += 10;
    gold -= 10;
    healthText.innerHTML = health;
    goldText.innerHTML = gold;
  } else {
    text.innerHTML = "You do not have enough gold to buy health";
  }
};
function buyWeapon() {
  if (weaponFactor < 3) {
    if (gold >= 30) {
    weaponFactor++ ;
    inventory.push(weapons[weaponFactor].name);
    text.innerHTML = "You now have a " + weapons[weaponFactor].name + ". In your inventory you have: " + inventory ;
    gold -= 30;
    goldText.innerHTML = gold;
    } else {
      text.innerHTML = "You don't have enough money";
    }
  } else {
    text.innerHTML = "You already have the most powerful weapon!"
    button2.innerHTML = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}; 

let healthOfMonster;

function fightMonsters(monsterObj) {
  monster.style.display = "block";
  monsterName.innerHTML = monsterObj.name;
  healthOfMonster = monsterData[fighting].health
  monsterHealth.innerHTML = healthOfMonster;
  text.innerHTML = "You are fighting a monster";
  update(data[3]);
}

function fightSlime() {
  fighting = 0;
  fightMonsters(monsterData[fighting]);
};

function fightFangedBeast() {
  fighting = 1;
  fightMonsters(monsterData[fighting]);
};

function attack() {
  text.innerHTML = "The " + monsterData[fighting].name + " attacks. You attack it with your " +  inventory[inventory.length - 1];
  health -= monsterDamage(); /*monsterData[fighting].level + Math.floor(Math.random() * xp) + 1; */
  healthText.innerHTML = health;
  healthOfMonster -= weapons[weaponFactor].power - Math.floor(Math.random() * xp );
  monsterHealth.innerHTML = healthOfMonster;
  if (health < 0){
    lose();
  };
  if (healthOfMonster <= 0){
    if (fighting === 2) {
      win();
    } else {
      defeatMonster();
    }
  };
};

function win() {
  update(data[6]);

}

function defeatMonster() {
  update(data[7]);
}

function monsterDamage() {
  const monsterDamage = monsterData[fighting].level + Math.floor(Math.random() * xp) + 1;
  return monsterDamage > 0 ? monsterDamage : 0;
}

function lose() {
  update(data[4]);
  healthText.innerHTML = 0;
};

function replay() {
  xp = 0;
  health = 100;
  gold = 50;
  xpText.innerHTML = xp;
  healthText.innerHTML = health;
  goldText.innerHTML = gold;
  update(data[5]);

}

function dodge() {
  text.innerHTML = "You dodge the attack from the " + monsterData[fighting].name ;
};

function fightDragon() {
  fighting = 2;
  fightMonsters(monsterData[fighting]);
}

function sellWeapon() {
  if (inventory.length > 1) {
    let sold = inventory.shift();
    text.innerHTML = "You sold a " + sold + ". In your inventory you have: " + inventory;
    gold += 15;
    goldText.innerHTML = gold;
  } else {
    text.innerHTML = "Don't sell your only weapon!";
  }
}

function easterEgg() {
  update(data[8]);
}

function pick2() {
  pick(2);
}

function pick8() {
  pick(8);
}


function pick(number) {
  let numbersArray = [];
  text.innerText = "You picked " + number + ". Here are the random numbers:" + "\n";
  for (i = 0; i <= 10; i++ ) {
    numbersArray.push(Math.floor(Math.random() * 10));
    text.innerText += numbersArray[i] + "\n";
  };
  if (numbersArray.includes(number)){
    text.innerText += "Right! You win 20 gold!";
    gold += 20;
    goldText.innerHTML = gold;
  } else {
    text.innerText += "Wrong! You lose 10 health!";
    health -= 10;
    healthText.innerText = health;
    if (health < 0) {
      lose();
    }
  }
}














 


