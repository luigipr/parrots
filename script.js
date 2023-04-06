const arrayCartas = [];
let arrayback = [];
let numberOfCards = '';
const arraybackface = ["<img src='midia/bobrossparrot.gif'/>", "<img src='midia/bobrossparrot.gif' />", "<img src='midia/explodyparrot.gif' />", "<img src='midia/explodyparrot.gif' />",
"<img src='midia/fiestaparrot.gif' />", "<img src='midia/fiestaparrot.gif' />", "<img src='midia/metalparrot.gif' />", "<img src='midia/metalparrot.gif' />", "<img src='midia/revertitparrot.gif' />",
"<img src='midia/revertitparrot.gif' />", "<img src='midia/tripletsparrot.gif' />", "<img src='midia/tripletsparrot.gif' />", "<img src='midia/unicornparrot.gif' />",
 "<img src='midia/unicornparrot.gif' />"];

function cardnumber() {
    numberOfCards = Number(prompt('Com quantas cartas você quer jogar? 4-14'));
};
cardnumber();

function backCards(numberOfCards) {
   arrayback = arraybackface.slice(0, numberOfCards)   
};

function comparador() { 
	return Math.random() - 0.5; 
}

function randomizador() {
    arrayback.sort(comparador);
}

backCards(numberOfCards);
randomizador();

const container = document.querySelector('.container');
// Create the specified number of divs using a loop
for (let i = 0; i < numberOfCards; i++) {
    if (3 < numberOfCards && numberOfCards < 15 && numberOfCards % 2 === 0) {   
         let div = document.createElement("div");
        div.classList.add('card');
        let front = document.createElement('div');
        let back = document.createElement('div');
        front.classList.add('face');
        front.classList.add('front-face');
        front.innerHTML = 'frente';
        back.innerHTML = arrayback[i];
        back.classList.add('back-face');
        back.classList.add('face');
        front.innerHTML = "<img src='midia/back.png'>";
        container.appendChild(div);
        div.appendChild(front);
        div.appendChild(back);
        // console.log(front)
        // console.log(back)
        // console.log(div);
        // console.log(front.parentNode);
        arrayCartas.push(back);
        // console.log(arrayCartas);
        
} else {
    i -= 1;
    cardnumber();
}
}


function flip(a) {
    a.classList.toggle('flip');
}


