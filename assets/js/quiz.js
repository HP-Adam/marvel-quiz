const gifLocation = document.querySelector(".gif");

const userInputApi = function (gifSearch) {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=yBtaVHxMEXDfPQQhAsxu4RIaqyzHd9CN&q=${gifSearch}&limit=25&offset=0&rating=g&lang=en`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var gifImg = document.createElement("img");
      gifImg.setAttribute("src", response.data[0].images.fixed_height.url);
      gifImg.setAttribute("id", "gif");
      gifLocation.appendChild(gifImg);
    });
};

// Written questions
const question1 = [
  "Power is not something to be taken lightly.",
  "Not even a murderer deserves to die.",
  "Negotiations work much better than fighting.",
  "People consider me annoying.",
  "I feel that everyone deserves a second chance.",
  "I consider myself very intelligent",
  "I work better alone",
  "I consider myself to be an optimist",
  "I am not a dreamer, I am a realist",
  "I am calculated, not impulsive",
  "I consider myself to be calm and not very emotional",
];
// Written answers
const options1 = [
  "<button class=buttons1 onclick=q1i()>Agree</button><br /><br /><button class=buttons1 onclick=q1i()>Disagree</button>",
];
const options2 = [
  "<button class=buttons1 onclick=q2c()>Agree</button><br /><br /><button class=buttons1 onclick=q2i()>Disagree</button>",
];
const options3 = [
  "<button class=buttons1 onclick=q3c()>Agree</button><br /><br /><button class=buttons1 onclick=q3i()>Disagree</button>",
];
const options4 = [
  "<button class=buttons1 onclick=q4i()>Agree</button><br /><br /><button class=buttons1 onclick=q4c()>Disagree</button>",
];
const options5 = [
  "<button class=buttons1 onclick=q5c()>Agree</button><br /><br /><button class=buttons1 onclick=q5i()>Disagree</button>",
];
const options6 = [
  "<button class=buttons1 onclick=q6i()>Agree</button><br /><br /><button class=buttons1 onclick=q6c()>Disagree</button>",
];
const options7 = [
  "<button class=buttons1 onclick=q7c()>Agree</button><br /><br /><button class=buttons1 onclick=q7i()>Disagree</button>",
];
const options8 = [
  "<button class=buttons1 onclick=q8c()>Agree</button><br /><br /><button class=buttons1 onclick=q8i()>Disagree</button>",
];
const options9 = [
  "<button class=buttons1 onclick=q9c()>Agree</button><br /><br /><button class=buttons1 onclick=q9i()>Disagree</button>",
];
const options10 = [
  "<button class=buttons1 onclick=q10c()>Agree</button><br /><br /><button class=buttons1 onclick=q10i()>Disagree</button>",
];
const options11 = [
  "<button class=buttons1 onclick=q11c()>Agree</button><br /><br /><button class=buttons1 onclick=q11i()>Disagree</button>",
];

//  Declare each variable
let a = 1;
let scores = {
  thor: 0,
  captainAmerica: 0,
  ironMan: 0,
  hulk: 0,
  spiderMan: 0,
  blackWidow: 0,
  captainMarvel: 0,
};

//  if statement for q and a
function begin1() {
  disappear1.innerHTML = "";
  message1.innerHTML = question1[0];
  message2.innerHTML = options1;
  number1.innerHTML = a++;
}

function q1c() {
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.spiderMan++;
  scores.blackWidow++;
  scores.captainMarvel++;
  userInputApi("weak");
}

function q1i() {
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.hulk++;
  scores.thor++;
  userInputApi("powerful");
}

function q2c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.spiderMan++;
  scores.captainMarvel++;
  userInputApi("alive");
}

function q2i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.hulk++;
  scores.thor++;
  scores.blackWidow++;
  userInputApi("murder");
}

function q3c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.spiderMan++;
  scores.ironMan++;
  scores.blackWidow++;
  userInputApi("negotiating");
}

function q3i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.hulk++;
  scores.thor++;
  scores.captainMarvel++;
  userInputApi("fighting");
}

function q4c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.hulk++;
  scores.ironMan++;
  userInputApi("annoying");
}

function q4i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.thor++;
  scores.spiderMan++;
  scores.blackWidow++;
  scores.captainMarvel++;
  userInputApi("not annoying");
}

function q5c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.spiderMan++;
  scores.captainMarvel++;
  userInputApi("second chance");
}

function q5i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.hulk++;
  scores.thor++;
  scores.blackWidow++;
  userInputApi("no chance");
}

function q6c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.captainAmerica++;
  scores.spiderMan++;
  userInputApi("smart");
}

function q6i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.hulk++;
  scores.thor++;
  scores.blackWidow++;
  scores.captainMarvel++;
  userInputApi("stupid");
}

function q7c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.hulk++;
  scores.thor++;
  scores.spiderMan++;
  scores.captainMarvel++;
  userInputApi("alone");
}

function q7i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.blackWidow++;
  userInputApi("teamwork");
}

function q8c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.spiderMan++;
  userInputApi("optimist");
}

function q8i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.hulk++;
  scores.thor++;
  scores.blackWidow++;
  scores.captainMarvel++;
  scores.ironMan++;
  userInputApi("sad");
}

function q9c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.thor++;
  scores.blackWidow++;
  scores.captainMarvel++;
  scores.spiderMan++;
  userInputApi("dreamer");
}

function q9i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.hulk++;
  scores.spiderMan++;
  userInputApi("don't dream");
}

function q10c() {
  gifLocation.innerHTML = "";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.captainAmerica++;
  scores.spiderMan++;
  scores.blackWidow++;
  scores.captainMarvel++;
  userInputApi("calculate");
}

function q10i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.hulk++;
  scores.thor++;
  userInputApi("reckless");
}

function q11c() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.ironMan++;
  scores.captainAmerica++;
  scores.blackWidow++;
  userInputApi("calm");
}

function q11i() {
  gifLocation.innerHTML = "";

  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
  scores.hulk++;
  scores.thor++;
  scores.spiderMan++;
  scores.captainMarvel++;
  userInputApi("emotional");
}

function next1() {
  if (a == "2") {
    message1.innerHTML = question1[1];
    message2.innerHTML = options2;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "3") {
    message1.innerHTML = question1[2];
    message2.innerHTML = options3;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "4") {
    message1.innerHTML = question1[3];
    message2.innerHTML = options4;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "5") {
    message1.innerHTML = question1[4];
    message2.innerHTML = options5;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "6") {
    message1.innerHTML = question1[5];
    message2.innerHTML = options6;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "7") {
    message1.innerHTML = question1[6];
    message2.innerHTML = options7;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "8") {
    message1.innerHTML = question1[7];
    message2.innerHTML = options8;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "9") {
    message1.innerHTML = question1[8];
    message2.innerHTML = options9;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "10") {
    message1.innerHTML = question1[9];
    message2.innerHTML = options10;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else if (a == "11") {
    message1.innerHTML = question1[10];
    message2.innerHTML = options11;
    message4.innerHTML = "";
    number1.innerHTML = a++;
  } else {
    message1.innerHTML = "End of Quiz";
    message2.innerHTML = "";
    message4.innerHTML =
      "<button class=buttons2 onclick=restart1()>Restart</button>";
    console.log("ironMan" + scores.ironMan);
    console.log("hulk" + scores.hulk);
    console.log("captainAmerica" + scores.captainAmerica);
    console.log("captainMarvel" + scores.captainMarvel);
    console.log("thor" + scores.thor);
    console.log("blackWidow" + scores.blackWidow);
    console.log("spiderMan" + scores.spiderMan);
    finalHero();
  }
}

function restart1() {
  location.reload();
}

const finalHero = () => {
  let chosenHero = "captainAmerica";
  let names = Object.keys(scores);

  for (let i = 0; i < names.length; i++) {
    if (scores[names[i]] > scores[chosenHero]) {
      chosenHero = names[i];
    } else if (scores[names[i]] === scores[chosenHero]) {
      chosenHero = Math.random() < 0.5 ? names[i] : chosenHero;
    }
  }
  if (chosenHero === 'captainAmerica') {
    chosenHero = 'Captain America'
  } else if (chosenHero === 'spiderMan') {
    chosenHero = 'Spider-man'
  } else if (chosenHero === 'blackWidow') {
    chosenHero = 'Black Widow'
  } else if (chosenHero === 'ironMan') {
    chosenHero = 'Iron Man'
  } else if (chosenHero === 'captainMarvel') {
    chosenHero = 'Carol Danvers'
  }
  generateHero(chosenHero)
};


const PUBLIC_KEY = "407e4467d27709793035e60508d32fdf";
const PRIVATE_KEY = "d49a689257f6451c7403a124fd37f1845b3719cc";

const generateHero = async (chosenHero) => {
  let ts = Date.now();
  let hashKey = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  let request = await fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hashKey}&name=${chosenHero}`
  );
  let data = await request.json();
  console.log(data);

}

begin1();
