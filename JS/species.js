let speciesCont = document.getElementsByClassName("species");

function selectSpecies(sp){
    deselectSpecies();
    sp.style.backgroundColor = "#0d0";
}

function deselectSpecies(){
    for(let i = 0; i<speciesCont.length; i++){
        speciesCont[i].style.backgroundColor = "#0a0";
    }
}
