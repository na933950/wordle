"use strict";

const modalWindow = document.querySelector("#modalwindow");
const backdrop = document.querySelector("#backdrop");
const closeButton = document.querySelector("#closebutton");
const questionButton = document.querySelector("#questionbutton");
const modalsAll = document.querySelector("#modals");
const letterBoxes = [[], [], [], [], [], []];
const allLetters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
let lastLetter = "";
let firstClose = 0;
let secretWordArr = [];
if (true) {
  //Setting values of the word array
  secretWordArr = [
    "which",
    "there",
    "their",
    "about",
    "would",
    "these",
    "other",
    "words",
    "could",
    "write",
    "first",
    "water",
    "after",
    "where",
    "right",
    "think",
    "three",
    "years",
    "place",
    "sound",
    "great",
    "again",
    "still",
    "every",
    "small",
    "found",
    "those",
    "never",
    "under",
    "might",
    "while",
    "house",
    "world",
    "below",
    "asked",
    "going",
    "large",
    "until",
    "along",
    "shall",
    "being",
    "often",
    "earth",
    "began",
    "since",
    "study",
    "night",
    "light",
    "above",
    "paper",
    "parts",
    "young",
    "story",
    "point",
    "times",
    "heard",
    "whole",
    "white",
    "given",
    "means",
    "music",
    "miles",
    "thing",
    "today",
    "later",
    "using",
    "money",
    "lines",
    "order",
    "group",
    "among",
    "learn",
    "known",
    "space",
    "table",
    "early",
    "trees",
    "short",
    "hands",
    "state",
    "black",
    "shown",
    "stood",
    "front",
    "voice",
    "kinds",
    "makes",
    "comes",
    "close",
    "power",
    "lived",
    "vowel",
    "taken",
    "built",
    "heart",
    "ready",
    "quite",
    "bring",
    "round",
    "horse",
    "shows",
    "piece",
    "green",
    "stand",
    "birds",
    "start",
    "river",
    "tried",
    "least",
    "field",
    "whose",
    "girls",
    "leave",
    "added",
    "color",
    "third",
    "hours",
    "moved",
    "plant",
    "doing",
    "names",
    "forms",
    "heavy",
    "ideas",
    "cried",
    "check",
    "floor",
    "begin",
    "woman",
    "alone",
    "plane",
    "spell",
    "watch",
    "carry",
    "wrote",
    "clear",
    "named",
    "books",
    "child",
    "glass",
    "human",
    "takes",
    "party",
    "build",
    "seems",
    "blood",
    "sides",
    "seven",
    "mouth",
    "solve",
    "north",
    "value",
    "death",
    "maybe",
    "happy",
    "tells",
    "gives",
    "looks",
    "shape",
    "lives",
    "steps",
    "areas",
    "sense",
    "speak",
    "force",
    "ocean",
    "speed",
    "women",
    "metal",
    "south",
    "grass",
    "scale",
    "cells",
    "lower",
    "sleep",
    "wrong",
    "pages",
    "ships",
    "needs",
    "rocks",
    "eight",
    "major",
    "level",
    "total",
    "ahead",
    "reach",
    "stars",
    "store",
    "sight",
    "terms",
    "catch",
    "works",
    "board",
    "cover",
    "songs",
    "equal",
    "stone",
    "waves",
    "guess",
    "dance",
    "spoke",
    "cause",
    "radio",
    "weeks",
    "lands",
    "basic",
    "liked",
    "trade",
    "fresh",
    "final",
    "fight",
    "meant",
    "drive",
    "spent",
    "local",
    "waxes",
    "knows",
    "train",
    "bread",
    "homes",
    "teeth",
    "coast",
    "thick",
    "brown",
    "clean",
    "quiet",
    "sugar",
    "facts",
    "steel",
    "forth",
    "rules",
    "notes",
    "units",
    "peace",
    "month",
    "verbs",
    "seeds",
    "helps",
    "sharp",
    "visit",
    "woods",
    "chief",
    "walls",
    "cross",
    "wings",
    "grown",
    "cases",
    "foods",
    "crops",
    "fruit",
    "stick",
    "wants",
    "stage",
    "sheep",
    "nouns",
    "plain",
    "drink",
    "bones",
    "apart",
    "turns",
    "moves",
    "touch",
    "angle",
    "based",
    "range",
    "marks",
    "tired",
    "older",
    "farms",
    "spend",
    "shoes",
    "goods",
    "chair",
    "twice",
    "cents",
    "empty",
    "alike",
    "style",
    "broke",
    "pairs",
    "count",
    "enjoy",
    "score",
    "shore",
    "roots",
    "paint",
    "heads",
    "shook",
    "serve",
    "angry",
    "crowd",
    "wheel",
    "quick",
    "dress",
    "share",
    "alive",
    "noise",
    "solid",
    "cloth",
    "signs",
    "hills",
    "types",
    "drawn",
    "worth",
    "truck",
    "piano",
    "upper",
    "loved",
    "usual",
    "faces",
    "drove",
    "cabin",
    "boats",
    "towns",
    "proud",
    "court",
    "model",
    "prime",
    "fifty",
    "plans",
    "yards",
    "prove",
    "tools",
    "price",
    "sheet",
    "smell",
    "boxes",
    "raise",
    "match",
    "truth",
    "roads",
    "threw",
    "enemy",
    "lunch",
    "chart",
    "scene",
    "graph",
    "doubt",
    "guide",
    "winds",
    "block",
    "grain",
    "smoke",
    "mixed",
    "games",
    "wagon",
    "sweet",
    "topic",
    "extra",
    "plate",
    "title",
    "knife",
    "fence",
    "falls",
    "cloud",
    "wheat",
    "plays",
    "enter",
    "broad",
    "steam",
    "atoms",
    "press",
    "lying",
    "basis",
    "clock",
    "taste",
    "grows",
    "thank",
    "storm",
    "agree",
    "brain",
    "track",
    "smile",
    "funny",
    "beach",
    "stock",
    "hurry",
    "saved",
    "sorry",
    "giant",
    "trail",
    "offer",
    "ought",
    "rough",
    "daily",
    "avoid",
    "keeps",
    "allow",
    "cream",
    "laugh",
    "edges",
    "teach",
    "frame",
    "bells",
    "dream",
    "magic",
    "occur",
    "ended",
    "chord",
    "skill",
    "holes",
    "dozen",
    "brave",
    "apple",
    "climb",
    "outer",
    "pitch",
    "ruler",
    "holds",
    "fixed",
    "costs",
    "calls",
    "blank",
    "staff",
    "labor",
    "eaten",
    "youth",
    "tones",
    "honor",
    "globe",
    "gases",
    "doors",
    "poles",
    "loose",
    "apply",
    "tears",
    "exact",
    "brush",
    "chest",
    "layer",
    "whale",
    "minor",
    "faith",
    "tests",
    "judge",
    "items",
    "worry",
    "waste",
    "hoped",
    "strip",
    "begun",
    "aside",
    "lakes",
    "bound",
    "depth",
    "candy",
    "event",
    "worse",
    "aware",
    "shell",
    "rooms",
    "ranch",
    "image",
    "snake",
    "aloud",
    "dried",
    "likes",
    "motor",
    "pound",
    "knees",
    "refer",
    "fully",
    "chain",
    "shirt",
    "flour",
    "drops",
    "spite",
    "orbit",
    "banks",
    "shoot",
    "curve",
    "tribe",
    "tight",
    "blind",
    "slept",
    "shade",
    "claim",
    "flies",
    "theme",
    "queen",
    "fifth",
    "union",
    "hence",
    "straw",
    "entry",
    "issue",
    "birth",
    "feels",
    "anger",
    "brief",
    "rhyme",
    "glory",
    "guard",
    "flows",
    "flesh",
    "owned",
    "trick",
    "yours",
    "sizes",
    "noted",
    "width",
    "burst",
    "route",
    "lungs",
    "uncle",
    "bears",
    "royal",
    "kings",
    "forty",
    "trial",
    "cards",
    "brass",
    "opera",
    "chose",
    "owner",
    "vapor",
    "beats",
    "mouse",
    "tough",
    "wires",
    "meter",
    "tower",
    "finds",
    "inner",
    "stuck",
    "arrow",
    "poems",
    "label",
    "swing",
    "solar",
    "truly",
    "tense",
    "beans",
    "split",
    "rises",
    "weigh",
    "hotel",
    "stems",
    "pride",
    "swung",
    "grade",
    "digit",
    "badly",
    "boots",
    "pilot",
    "sales",
    "swept",
    "lucky",
    "prize",
    "stove",
    "tubes",
    "acres",
    "wound",
    "steep",
    "slide",
    "trunk",
    "error",
    "porch",
    "slave",
    "exist",
    "faced",
    "mines",
    "marry",
    "juice",
    "raced",
    "waved",
    "goose",
    "trust",
    "fewer",
    "favor",
    "mills",
    "views",
    "joint",
    "eager",
    "spots",
    "blend",
    "rings",
    "adult",
    "index",
    "nails",
    "horns",
    "balls",
    "flame",
    "rates",
    "drill",
    "trace",
    "skins",
    "waxed",
    "seats",
    "stuff",
    "ratio",
    "minds",
    "dirty",
    "silly",
    "coins",
    "hello",
    "trips",
    "leads",
    "rifle",
    "hopes",
    "bases",
    "shine",
    "bench",
    "moral",
    "fires",
    "meals",
    "shake",
    "shops",
    "cycle",
    "movie",
    "slope",
    "canoe",
    "teams",
    "folks",
    "fired",
    "bands",
    "thumb",
    "shout",
    "canal",
    "habit",
    "reply",
    "ruled",
    "fever",
    "crust",
    "shelf",
    "walks",
    "midst",
    "crack",
    "print",
    "tales",
    "coach",
    "stiff",
    "flood",
    "verse",
    "awake",
    "rocky",
    "march",
    "fault",
    "swift",
    "faint",
    "civil",
    "ghost",
    "feast",
    "blade",
    "limit",
    "germs",
    "reads",
    "ducks",
    "dairy",
    "worst",
    "gifts",
    "lists",
    "stops",
    "rapid",
    "brick",
    "claws",
    "beads",
    "beast",
    "skirt",
    "cakes",
    "lions",
    "frogs",
    "tries",
    "nerve",
    "grand",
    "armed",
    "treat",
    "honey",
    "moist",
    "legal",
    "penny",
    "crown",
    "shock",
    "taxes",
    "sixty",
    "altar",
    "pulls",
    "sport",
    "drums",
    "talks",
    "dying",
    "dates",
    "drank",
    "blows",
    "lever",
    "wages",
    "proof",
    "drugs",
    "tanks",
    "sings",
    "tails",
    "pause",
    "herds",
    "arose",
    "hated",
    "clues",
    "novel",
    "shame",
    "burnt",
    "races",
    "flash",
    "weary",
    "heels",
    "token",
    "coats",
    "spare",
    "shiny",
    "alarm",
    "dimes",
    "sixth",
    "clerk",
    "mercy",
    "sunny",
    "guest",
    "float",
    "shone",
    "pipes",
    "worms",
    "bills",
    "sweat",
    "suits",
    "smart",
    "upset",
    "rains",
    "sandy",
    "rainy",
    "parks",
    "sadly",
    "fancy",
    "rider",
    "unity",
    "bunch",
    "rolls",
    "crash",
    "craft",
    "newly",
    "gates",
    "hatch",
    "paths",
    "funds",
    "wider",
    "grace",
    "grave",
    "tides",
    "admit",
    "shift",
    "sails",
    "pupil",
    "tiger",
    "angel",
    "cruel",
    "agent",
    "drama",
    "urged",
    "patch",
    "nests",
    "vital",
    "sword",
    "blame",
    "weeds",
    "screw",
    "vocal",
    "bacon",
    "chalk",
    "cargo",
    "crazy",
    "acted",
    "goats",
    "arise",
    "witch",
    "loves",
    "queer",
    "dwell",
    "backs",
    "ropes",
    "shots",
    "merry",
    "phone",
    "cheek",
    "peaks",
    "ideal",
    "beard",
    "eagle",
    "creek",
    "cries",
    "ashes",
    "stall",
    "yield",
    "mayor",
    "opens",
    "input",
    "fleet",
    "tooth",
    "cubic",
    "wives",
    "burns",
    "poets",
    "apron",
    "spear",
    "organ",
    "cliff",
    "stamp",
    "paste",
    "rural",
    "baked",
    "chase",
    "slice",
    "slant",
    "knock",
    "noisy",
    "sorts",
    "stays",
    "wiped",
    "blown",
    "piled",
    "clubs",
    "cheer",
    "widow",
    "twist",
    "tenth",
    "hides",
    "comma",
    "sweep",
    "spoon",
    "stern",
    "crept",
    "maple",
    "deeds",
    "rides",
    "muddy",
    "crime",
    "jelly",
    "ridge",
    "drift",
    "dusty",
    "devil",
    "tempo",
    "humor",
    "sends",
    "steal",
    "tents",
    "waist",
    "roses",
    "reign",
    "noble",
    "cheap",
    "dense",
    "linen",
    "geese",
    "woven",
    "posts",
    "hired",
    "wrath",
    "salad",
    "bowed",
    "tires",
    "shark",
  ];
}
let secretWord =
  secretWordArr[Math.trunc(Math.random() * secretWordArr.length)].toUpperCase();
let currentWordArr = [];
const wordPopup = document.getElementById("correctword1");
const wordPopupText = document.getElementById("correctwordpopup");
for (let i = 0; i < secretWord.length; i++) {
  secretWordArr.push(secretWord[i]);
}

wordPopupText.textContent = secretWord;

for (let r = 0; r < 6; r++) {
  for (let c = 0; c < 5; c++) {
    let temporary = document.getElementById(`${r}${c}`);
    letterBoxes[r].push(temporary);
  }
}

for (let r = 0; r < 6; r++) {
  for (let c = 0; c < 5; c++) {
    letterBoxes[r][c].disabled = true;
    letterBoxes[r][c].addEventListener("keyup", function (e) {
      let box = e.srcElement.id;
      let theKey = e.key;
      if (allLetters.indexOf(theKey) !== -1) {
        if (box[1] != 4) {
          letterBoxes[Number(box[0])][Number(box[1])].classList.remove("null");
          letterBoxes[Number(box[0])][Number(box[1])].classList.add("typed");
          letterBoxes[Number(box[0])][Number(box[1]) + 1].disabled = false;
          letterBoxes[Number(box[0])][Number(box[1]) + 1].focus();
          letterBoxes[Number(box[0])][Number(box[1])].value = theKey;
          letterBoxes[Number(box[0])][Number(box[1]) + 1].value = "";
          letterBoxes[Number(box[0])][Number(box[1])].disabled = true;
          currentWordArr.push(theKey.toUpperCase());
          console.log(currentWordArr);
        }
        if (box[1] == 4) {
          if (lastLetter === "") {
            currentWordArr.push(theKey.toUpperCase());
          }
          lastLetter = letterBoxes[Number(box[0])][Number(box[1])].value;
          letterBoxes[Number(box[0])][Number(box[1])].classList.remove("null");
          letterBoxes[Number(box[0])][Number(box[1])].classList.add("typed");
          console.log(currentWordArr);
        }
      } else {
        letterBoxes[Number(box[0])][Number(box[1])].value = "";
      }
      if (theKey === "Backspace") {
        if (box[1] !== 0) {
          if (box[1] == 4) {
            if (lastLetter === "") {
              letterBoxes[Number(box[0])][Number(box[1]) - 1].disabled = false;
              letterBoxes[Number(box[0])][Number(box[1]) - 1].focus();
              letterBoxes[Number(box[0])][Number(box[1]) - 1].value = "";
              letterBoxes[Number(box[0])][Number(box[1])].disabled = true;
              letterBoxes[Number(box[0])][Number(box[1]) - 1].classList.remove(
                "typed"
              );
              letterBoxes[Number(box[0])][Number(box[1]) - 1].classList.add(
                "null"
              );
              currentWordArr.pop();
            } else {
              lastLetter = "";
              letterBoxes[Number(box[0])][Number(box[1])].classList.remove(
                "typed"
              );
              letterBoxes[Number(box[0])][Number(box[1])].classList.add("null");
              currentWordArr.pop();
            }
          } else {
            letterBoxes[Number(box[0])][Number(box[1]) - 1].disabled = false;
            letterBoxes[Number(box[0])][Number(box[1]) - 1].focus();
            letterBoxes[Number(box[0])][Number(box[1]) - 1].value = "";
            letterBoxes[Number(box[0])][Number(box[1])].disabled = true;
            letterBoxes[Number(box[0])][Number(box[1]) - 1].classList.remove(
              "typed"
            );
            letterBoxes[Number(box[0])][Number(box[1]) - 1].classList.add(
              "null"
            );
            currentWordArr.pop();
          }
        }
      }
      if (theKey === "Enter") {
        if (box[1] == 4 && lastLetter !== "") {
          if (box[0] != 5) {
            letterBoxes[Number(box[0]) + 1][0].disabled = false;
            letterBoxes[Number(box[0]) + 1][0].focus();
            letterBoxes[Number(box[0])][Number(box[1])].disabled = true;
          }
          letterBoxes[Number(box[0])][Number(box[1])].value = lastLetter;
          lastLetter = "";
          currentWordArr = [
            letterBoxes[Number(box[0])][0].value.toUpperCase(),
            letterBoxes[Number(box[0])][1].value.toUpperCase(),
            letterBoxes[Number(box[0])][2].value.toUpperCase(),
            letterBoxes[Number(box[0])][3].value.toUpperCase(),
            letterBoxes[Number(box[0])][4].value.toUpperCase(),
          ];
          console.log(currentWordArr);
          let wordCorrectness = checkCorrectness(currentWordArr, secretWordArr);
          if (
            wordCorrectness.every((elem) => elem == "correct") ||
            box[0] == 5
          ) {
            for (let i = 0; i < 5; i++) {
              setTimeout(function () {
                letterBoxes[Number(box[0])][i].classList.remove("typed");
                letterBoxes[Number(box[0])][i].classList.add(
                  wordCorrectness[i]
                );
              }, i * 200 + 100);
            }
            for (let i = 0; i < 5; i++) {
              setTimeout(function () {
                letterBoxes[Number(box[0])][i].classList.remove("normal");
                letterBoxes[Number(box[0])][i].classList.add("condensed");
              }, i * 200);
            }
            for (let i = 0; i < 5; i++) {
              setTimeout(function () {
                letterBoxes[Number(box[0])][i].classList.remove("condensed");
                letterBoxes[Number(box[0])][i].classList.add("normal");
              }, i * 200 + 100);
            }
            for (let r = 0; r < 6; r++) {
              for (let c = 0; c < 5; c++) {
                letterBoxes[r][c].disabled = true;
              }
            }
            wordPopup.classList.remove("hidden");
            wordPopup.style.opacity = 1;
          }
          for (let i = 0; i < 5; i++) {
            setTimeout(function () {
              letterBoxes[Number(box[0])][i].classList.remove("typed");
              letterBoxes[Number(box[0])][i].classList.add(wordCorrectness[i]);
            }, i * 200 + 100);
          }
          for (let i = 0; i < 5; i++) {
            setTimeout(function () {
              letterBoxes[Number(box[0])][i].classList.remove("normal");
              letterBoxes[Number(box[0])][i].classList.add("condensed");
            }, i * 200);
          }
          for (let i = 0; i < 5; i++) {
            setTimeout(function () {
              letterBoxes[Number(box[0])][i].classList.remove("condensed");
              letterBoxes[Number(box[0])][i].classList.add("normal");
            }, i * 200 + 100);
          }
          currentWordArr = [];
        } else {
          document.querySelector("#missingletters").classList.remove("hidden");
          document.querySelector("#missingletters").style.opacity = 1;
          setTimeout(function () {
            document.querySelector("#missingletters").style.opacity = 0;
          }, 500);
          setTimeout(function () {
            document.querySelector("#missingletters").classList.add("hidden");
          }, 1000);
        }
      }
    });
  }
}

const checkCorrectness = function (typedArr, targetArr) {
  let wordCorrectnessArr = ["wrong", "wrong", "wrong", "wrong", "wrong"];
  let i = 0;
  while (i < targetArr.length) {
    if (typedArr[i] == targetArr[i]) {
      wordCorrectnessArr[i] = "correct";
      document.getElementById(typedArr[i]).classList.remove("nullkey");
      document.getElementById(typedArr[i]).classList.remove("wrongplace");
      document.getElementById(typedArr[i]).classList.remove("wrong");
      document.getElementById(typedArr[i]).classList.add("correct");
      typedArr[i] = "";
      targetArr[i] = "";
    }
    i += 1;
  }
  for (let typed = 0; typed < typedArr.length; typed++) {
    for (let target = 0; target < targetArr.length; target++) {
      if (targetArr[target] != "" && typedArr[typed] != "") {
        if (typedArr[typed] === targetArr[target]) {
          wordCorrectnessArr[typed] = "wrongplace";
          if (
            document
              .getElementById(typedArr[typed])
              .classList.contains("correct") == false
          ) {
            document
              .getElementById(typedArr[typed])
              .classList.remove("nullkey");
            document
              .getElementById(typedArr[typed])
              .classList.add("wrongplace");
          }
          targetArr[target] = "";
          typedArr[typed] = "";
        } else {
          if (
            document
              .getElementById(typedArr[typed])
              .classList.contains("correct") == false
          ) {
            document
              .getElementById(typedArr[typed])
              .classList.remove("nullkey");
            document.getElementById(typedArr[typed]).classList.add("wrong");
          }
        }
      }
    }
  }
  secretWordArr = [];
  for (let i = 0; i < secretWord.length; i++) {
    secretWordArr.push(secretWord[i]);
  }
  return wordCorrectnessArr;
};

letterBoxes[0][0].disabled = false;

const closeModal = function () {
  modalWindow.classList.add("hidden");
  backdrop.classList.add("hidden");
  modalsAll.style.display = "none";
  if (firstClose == 0) {
    letterBoxes[0][0].focus();
    firstClose += 1;
  }
};

const openModal = function () {
  modalWindow.classList.remove("hidden");
  backdrop.classList.remove("hidden");
  modalsAll.style.display = "flex";
};

closeButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
questionButton.addEventListener("click", openModal);
document.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    closeModal();
  }
});