
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




// evento per incrementare,diminuire e resettare contatore
document.addEventListener("click",(event) => {
    let target = event.target;

     if (target == buttonPlus) {
        contatore++;
        document.querySelector(".counter-zero").innerHTML = contatore;
    } 

     else if (target == buttonLess) {
        contatore --;
        document.querySelector(".counter-zero").innerHTML = contatore;
    } 

     else if  (target == buttonReset){
        contatore = 0;
        document.querySelector(".counter-zero").innerHTML= contatore;
    } 


    });




