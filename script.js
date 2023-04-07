const arrayCartas = [];
let arrayback = [];
let numberOfCards = '';
const arraybackface = ["<img src='midia/bobrossparrot.gif'>", "<img src='midia/bobrossparrot.gif'>", "<img src='midia/explodyparrot.gif' />", "<img src='midia/explodyparrot.gif' />",
"<img src='midia/fiestaparrot.gif' />", "<img src='midia/fiestaparrot.gif' />", "<img src='midia/metalparrot.gif' />", "<img src='midia/metalparrot.gif' />", "<img src='midia/revertitparrot.gif' />",
"<img src='midia/revertitparrot.gif' />", "<img src='midia/tripletsparrot.gif' />", "<img src='midia/tripletsparrot.gif' />", "<img src='midia/unicornparrot.gif' />",
 "<img src='midia/unicornparrot.gif' />"];

function cardnumber() {
    numberOfCards = Number(prompt('Com quantas cartas você quer jogar? 4-14'));
    if (3 < numberOfCards && numberOfCards < 15 && numberOfCards % 2 === 0) {          
         } else {
             cardnumber();
         }    
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
        //front.classList.add('front')
        front.classList.add('face');
        front.classList.add('front-face');
        back.innerHTML = arrayback[i];
        back.classList.add('back-face');
        back.classList.add('face');
        //back.classList.add('back');
        front.innerHTML = "<img src='midia/back.png'>";
        div.setAttribute('onclick', 'flipcard(this)')
        console.log(div) ;  
        container.appendChild(div);
        div.appendChild(front);
        div.appendChild(back);
        // console.log(front)
        // console.log(back)
        // <div>card
        //     <div> front </div>
        //     <div> back </div> 
        // </div>    
        // console.log(div);
        // console.log(front.parentNode);
        arrayCartas.push(back);
        // console.log(arrayCartas);
           
} 
}

function flipcard(card) {
    console.log(card)

    const front = card.querySelector('.front-face');
    console.log(front)
    front.classList.toggle('front');

    const back = card.querySelector('.back-face');
    console.log(back)
    back.classList.toggle('back');

}


// const arrayCardsFront = document.querySelectorAll('.front-face')
// console.log(arrayCardsFront)
// arrayCardsFront.forEach((front) => {
//     front.addEventListener('click', () => {
//         if (!front.classList.contains('.flip')) {
//             front.classList.add(".flip")
//             console.log(arrayCardsFront)
//         }

//     })
// })
// const arrayCardsBack = document.querySelectorAll('.back-face')
// console.log(arrayCardsBack)
// arrayCardsBack.forEach((back) => {
//     back.addEventListener('click', () => {
//         if (!back.classList.contains('.backflip')) {
//             back.classList.add(".flip")
//             console.log(arrayCardsBack)
//         }

//     })
// })

// function flipcard(card) {
//     card.classList.add('flip');
// }
// const cardclick = document.querySelectorAll('.card')

// function flipcard(){
//     alert('oi')
// }

// cardclick.onclick = flipcard;