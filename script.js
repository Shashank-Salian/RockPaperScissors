const user_score = document.querySelector("#userScore");
const comp_score = document.querySelector("#compScore");
const result = document.querySelector(".result");
const choice = document.querySelectorAll(".choices img");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scisor = document.querySelector(".scisor");
const btn = document.querySelector(".btn");
const resImgs = document.querySelector(".resultImgs");
const compImg = document.querySelector("#compImg");
const userImg = document.querySelector("#usrImg");
const resImg = document.querySelectorAll(".resultImg")

var compSc = 0,
  userSc = 0;

/*Resets the scores and erase the results*/
function resetValue(){
  result.innerHTML = "Results Will be displayed here";
  compSc = 0;
  userSc = 0;
  user_score.innerHTML = userSc;
  comp_score.innerHTML = compSc;
  resImgs.style.opacity = "0";
  resImg[0].style.display = "none";
  resImg[1].style.display = "none";
  for (var i = 0; i < 3; i++)
    choice[i].style.border = "2px solid white";
}

/*Checks if the user/computer finally won (checks if score >= 20) */
function winLose(userSc, compSc){
  if (userSc >= 20) {
    alert("Hurray...\nYou won...!");
    resetValue();
  } else if (compSc >= 20) {
    alert("Sorry...\nYou lost from computer");
    resetValue();
  }
}

/*Displays the results*/ 
function updateResult(res) {
  if (res === "w") {
    userSc = ++userSc;
    result.innerText = "You won : )";
    user_score.innerText = userSc;
  } else if (res === "l") {
    compSc = ++compSc;
    comp_score.innerText = compSc;
    result.innerText = "You lost : <";
  } else {
    result.innerText = "Its a Draw : |";
  }
}

/*Checks fro the users choice and computers choice and displays images accordingly*/ 
function startGame(userChoice, compChoice) {
  var w;
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      updateResult("w");
      w = "w";
      break;
    case "rp":
    case "ps":
    case "sr":
      updateResult("l");
      w = "l";
      break;
    default:
      updateResult("d");
      w = "d";
      break;
  }

  if (userChoice === "r") {
    userImg.src = "./images/rock.jpg";
  } else if (userChoice === "p") {
    userImg.src = "./images/paper.jpg";
  } else {
    userImg.src = "./images/scisors.jpg";
  }

  if (compChoice === "r") {
    compImg.src = "./images/rock.jpg";
  } else if (compChoice === "p") {
    compImg.src = "./images/paper.jpg";
  } else {
    compImg.src = "./images/scisors.jpg";
  }

  resImgs.style.opacity = "1";
  resImg[0].style.display = "block";
  resImg[1].style.display = "block";

  return w;
}

/*Generates computers choice*/ 
function compChoice() {
  const comp = ["r", "p", "s"];
  var a = Math.floor(Math.random() * 3);
  return comp[a];
}


/*Set the border color of the cirle, depending upon the user won/lost/draw*/ 
function changeColor(WL, c){
  if(WL === "w"){
    choice[c].style.border = "2px solid green";
  } else if(WL === "l"){
    choice[c].style.border = "2px solid red";
  } else {
    choice[c].style.border = "2px solid grey";
  }
}

rock.addEventListener("click", () => {
  for (var i = 0; i < 3; i++) choice[i].style.border = "2px solid white";
  var compC = compChoice();
  var b = startGame("r", compC);
  changeColor(b, 0);
  winLose(userSc, compSc);
});

paper.addEventListener("click", () => {
  for (var i = 0; i < 3; i++) choice[i].style.border = "2px solid white";
  var compC = compChoice();
  var b = startGame("p", compC);
  changeColor(b, 1);
  winLose(userSc, compSc);
});

scisor.addEventListener("click", () => {
  for (var i = 0; i < 3; i++) choice[i].style.border = "2px solid white";
  var compC = compChoice();
  var b = startGame("s", compC);
  changeColor(b, 2);
  winLose(userSc, compSc);
});

btn.addEventListener("click", () => {
  resetValue()
});
