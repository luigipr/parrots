const arrayCartas = [];
let numberOfCards = '';
function cardnumber() {
    numberOfCards = Number(prompt('Com quantas cartas você quer jogar? 4-14'));
}
cardnumber();
const container = document.querySelector('.container');
// Create the specified number of divs using a loop
for (let i = 0; i < numberOfCards; i++) {
    if (3 < numberOfCards && numberOfCards < 15 && numberOfCards % 2 === 0) {   
         let div = document.createElement("div");
        div.classList.add('card');
        console.log(div);
        front = document.createElement('div')
        console.log(front.parentNode)
        div.innerHTML = "<img src='midia/back.png'>"
        container.appendChild(div);
} else {
    i -= 1;
    cardnumber();
}}




