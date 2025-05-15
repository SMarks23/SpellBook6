let feat = document.getElementsByClassName("feat");
let af = []

function addFeat(f) {
    if (af.includes(f.innerHTML)) {
        const index = af.indexOf(f.innerHTML);
        af.splice(index, 1);
        checkFeat();
    } else {
        af.push(f.innerHTML);
        console.log(af);
        checkFeat();

    }
}

function checkFeat() {
    for (let i = 0; i < feat.length; i++) {
        if (af.includes(feat[i].innerHTML)) {
            feat[i].style.color = "#0a0";
            feat[i].style.borderColor = "#0a0";
        }else{
            feat[i].style.color = "whitesmoke";
            feat[i].style.borderColor = "grey";
        }
    }
}
