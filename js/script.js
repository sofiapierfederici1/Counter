
// funzione per creare elementi HTML
function createElement (tagElement,classElement,textElement) {
    tagElement = document.createElement(tagElement);
    tagElement.classList.add(classElement);
    textElement = document.createTextNode(textElement);
    tagElement.appendChild(textElement);
    return tagElement;
}

// creazione elementi
const title = createElement("h1","title","Counter with Javascript");
document.body.appendChild(title);

const container = createElement("div","container","");
document.body.appendChild(container);

const containerButton = createElement("div","container-button","");
container.appendChild(containerButton);

const buttonPlus = createElement("button","button-plus","+")
containerButton.appendChild(buttonPlus);

const counter = createElement("div","counter-zero","0");
containerButton.appendChild(counter);

const buttonLess = createElement("button","button-less","-");
containerButton.appendChild(buttonLess);

const buttonReset = createElement("button","button-reset","Reset");
container.appendChild(buttonReset);



// funzionamento contatore
let contatore = 0;


// contatore incrementa di 1
buttonPlus.addEventListener("click", () => {
    contatore++; 
    document.querySelector(".counter-zero").innerHTML = contatore;
});

// contatore decrementa di 1
buttonLess.addEventListener("click",() =>{
    contatore--;
    document.querySelector(".counter-zero").innerHTML = contatore;
});

//  contatore resetta 0
buttonReset.addEventListener("click",() => {
    contatore = 0;
    document.querySelector(".counter-zero").innerHTML= contatore;
});







