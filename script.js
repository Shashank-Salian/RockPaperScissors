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


var compSc = 0,
    userSc = 0;

function updateResult(res) {
    if (res === "w") {
        userSc = ++userSc;
        result.innerText = "You won : )";
        user_score.innerText = userSc;

    } else if (res === "l") {
        compSc = ++compSc;
        comp_score.innerText = compSc
        result.innerText = "You lost : <";
    } else {
        result.innerText = "Its a Draw : |"
    }
}

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
            w = "l"
            break;
        default:
            updateResult("d");
            w = "d";
            break;
    }

    if (userChoice === "r") {
        userImg.src = "./images/rock.jpg";
        resImgs.style.display = "block";
    } else if(userChoice === "p"){
        userImg.src = "./images/paper.jpg";
        resImgs.style.display = "block";
    } else {
        userImg.src = "./images/scisors.jpg";
        resImgs.style.display = "block";
    }

    if(compChoice === "r"){
        compImg.src = "./images/rock.jpg";
        resImgs.style.display = "block";
    } else if(compChoice === "p"){
        compImg.src = "./images/paper.jpg";
        resImgs.style.display = "block";
    } else {
        compImg.src = "./images/scisors.jpg";
        resImgs.style.display = "block";
    }

    return w;
}

function compChoice() {
    const comp = ["r", "p", "s"];
    var a = Math.floor(Math.random() * 3);
    return comp[a];
}


rock.addEventListener("click", () => {
    for (var i = 0; i < 3; i++)
        choice[i].style.border = "2px solid white";
    var compC = compChoice();
    var b = startGame("r", compC);
    if (b === "w") {
        choice[0].style.border = "2px solid green";
    } else if (b === "l") {
        choice[0].style.border = "2px solid red";
    } else {
        choice[0].style.border = "2px solid grey";
    }
});

paper.addEventListener("click", () => {
    for (var i = 0; i < 3; i++)
        choice[i].style.border = "2px solid white";
    var compC = compChoice();
    var b = startGame("p", compC);
    if (b === "w") {
        choice[1].style.border = "2px solid green";
    } else if (b === "l") {
        choice[1].style.border = "2px solid red";
    } else {
        choice[1].style.border = "2px solid grey";
    }
});

scisor.addEventListener("click", () => {
    for (var i = 0; i < 3; i++)
        choice[i].style.border = "2px solid white";
    var compC = compChoice();
    var b = startGame("s", compC);
    if (b === "w") {
        choice[2].style.border = "2px solid green";
    } else if (b === "l") {
        choice[2].style.border = "2px solid red";
    } else {
        choice[2].style.border = "2px solid grey";
    }
});

btn.addEventListener("click", () => {
    location.reload();
});
