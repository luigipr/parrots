const arrayCartas = [];
let arrayback = [];
let numCards = 0;
let rightCards  = 0;
let numMoves = 0;
let interval = 0;
let count = 0;
let card1, card2;
let hasFlippedCard = false;
const arraybackface = ['midia/bobrossparrot.gif','midia/bobrossparrot.gif','midia/explodyparrot.gif','midia/explodyparrot.gif','midia/fiestaparrot.gif','midia/fiestaparrot.gif',
'midia/metalparrot.gif','midia/metalparrot.gif','midia/revertitparrot.gif','midia/revertitparrot.gif','midia/tripletsparrot.gif','midia/tripletsparrot.gif','midia/unicornparrot.gif',
 'midia/unicornparrot.gif' ];

function cardnumber() {
    numberOfCards = Number(prompt('Com quantas cartas você quer jogar? 4-14'));
    if (3 < numberOfCards && numberOfCards < 15 && numberOfCards % 2 === 0) {          
         } else {
             cardnumber();
         }    
};
cardnumber();


function backCards(numberOfCards) {
   arrayback = arraybackface.slice(0, numberOfCards);   

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
        
        let front = document.createElement('img');
        let back = document.createElement('img');
        //front.classList.add('front')
        front.classList.add('face');
        front.classList.add('front-face');
        back.setAttribute("src" , 'midia/back.png');
        back.classList.add('back-face');
        back.classList.add('face');
        //back.classList.add('back');
        front.setAttribute("src" , arrayback[i]);
        front.innerHTML = arrayback[i];
        div.setAttribute('onclick', 'flipCard(this)');
        console.log(div) ;  
        front.setAttribute('data-test', 'face-up-image');
        back.setAttribute('data-test', 'face-down-image')
        div.setAttribute('data-test', 'card');
        div.setAttribute('data-framework', arrayback[i]);
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


function flipCard(card) {
    numMoves++;
    card.classList.add('flip');

    if(!hasFlippedCard) {
      hasFlippedCard = true;
      card1 = card;
    } else {
      hasFlippedCard = false;
      card2 = card;
    
    console.log(card1, card2)
    virar = document.querySelectorAll('.card')
    if (card1.dataset.framework === card2.dataset.framework) {
      card1.removeAttribute('onclick');
      card2.removeAttribute('onclick');
      rightCards += 2
    } else {      
      virar.removeAttribute('onclick');
      setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
      }, 1000 );
      virar.removeAttribute('onclick');
      setTimeout(() => {
        virar.setAttribute('onclick', 'flipCard(this)');
      }, 1000 );
    }
    }

    setTimeout(() => {
      if (rightCards === numberOfCards) {
      endGame();
    }}, 1500 );
    


  }

    function endGame(){
      clearInterval(interval);
      alert (`Você ganhou em ${numMoves} jogadas!`);
      
      //let restart = prompt("Deseja reiniciar a partida? (Sim ou Não)");
      
      // if (restart.toUpperCase() === "SIM" || restart.toUpperCase() === "S"){
      //   restartGame();
      // }
      }





//     card.classList.add('selected')
//     const front = card.querySelector('.front-face');
//     console.log(front)
//     front.classList.add('front');

//     const back = card.querySelector('.back-face');
//     console.log(back)
//     back.classList.add('back');
//     card.removeAttribute("onclick")
// //    verifyPair();



// function verifyPair() {
//     turnedCards = document.querySelectorAll('.selected');
//     if (turnedCards.length === 2){
//         card1 = turnedCards[0];
//         card2 = turnedCards[1];
//         if (card1.id === card2.id) {
//             card1.classList.remove('selected');
//             card2.classList.remove('selected');
//             card1.classList.add('par');
//             card2.classList.add('par');
//         }


//     }
    

//     rightCards += 2;

//     if (rightCards === numCards) {
//       endGame();
//     }
//   } else{
//     setTimeout ( returnCards , 2000 ); 
//   }
// } 
// }


