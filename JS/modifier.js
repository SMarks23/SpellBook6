let modifier = document.getElementsByClassName("modifier_cont");
let score = document.getElementsByClassName("modifier_score");
let mod = document.getElementsByClassName("modifier_mod");
let curMod = 0;

modifier[curMod].style.display = "block";
matchModToScore();

//ARROWS
function hideMod() {
    for (let i = 0; i < modifier.length; i++) {
        modifier[i].style.display = "none";
    }
}

function switchMod(a) {
    if (a == '-') {
        prevMod();
        console.log(curMod);
    } else if (a == '+') {
        nextMod();
    }
    matchModToScore();
}

function nextMod() {
    curMod++;
    if (curMod == 3) {
        curMod = 0;
    }
    hideMod();
    modifier[curMod].style.display = "block";
}

function prevMod() {
    curMod--;
    if (curMod == -1) {
        curMod = 2;
    }
    hideMod();
    modifier[curMod].style.display = "block";
}

//SCORE
function matchModToScore() {
    validValueChacker();
    let temp = Math.floor((score[curMod].value - 10) / 2);
    if (temp > 0) {
        temp = "+" + temp;
    }
    mod[curMod].innerHTML = temp;
}

//CHECK
function validValueChacker() {
    minMaxCheck();
    noZeroCheck();
    integerCheck();

}

function minMaxCheck() {
    if (score[curMod].value > 20) {
        score[curMod].value = 20;
    }

    if (score[curMod].value < 0) {
        score[curMod].value = 0;
    }
}

function noZeroCheck() {
    if (score[curMod].value.startsWith("0") && score[curMod].value.length > 1) {
        score[curMod].value = score[curMod].value.slice(1);
    }
}

function integerCheck() {
    if(!/^[0-9]+$/.test(score[curMod].value) && score[curMod].value.length > 0){
        score[curMod].value = score[curMod].value.slice(0, -1);
    }
}