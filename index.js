// x=<i class="fa fa-times" aria-hidden="true"></i>
// y=<i class="fa fa-circle-o-notch" aria-hidden="true"></i>

//Selecting starting page
let startingPage = document.querySelector('.Container');
let choose = document.querySelectorAll('.choose');


//selecting main page
let mainPage = document.querySelector('.Container1');
let showchange = document.querySelector('.showchange');
let boxes = document.querySelectorAll('.boxes');


//selecting winner page
let winner = document.getElementById('Container2');
let winnername = document.querySelector('#winnername');
let quit = document.querySelector('#Quit');


// false=X's turn
// True= O's  turn

let changeturn = null;
let coin = document.getElementById('coin-img');
let coin1 = document.getElementById('coin-img1');
let sound=new Audio('./mixkit-gold-coin-prize-1999.wav');

let sound1=new Audio('./SUBWAY SURFERS.mp3');

// select which you want  to be
choose.forEach(choosenow => {
    choosenow.addEventListener("click", () => {
        sound.play();
     
        MoveCoin(choosenow)
        
        setTimeout(() => {
            if (choosenow.id === "playerX") {
                changeturn = false;
               
                document.getElementById('showchange').style.left = `0px`;

                console.log("hg", coin);
                coin.style.display = "none";
              
                sound1.play();
                // coin1.style.display="none";
                // console.log("jh",coin1);


                // console.log(changeturn);

            } else {
                changeturn = true;
             
                document.getElementById('showchange').style.left = `160px`;

                coin1.style.display = "none";
                sound1.play();

                // coin.style.display="none";
                // console.log(changeturn);

            }
           
            startingPage.style.display = 'none';
            mainPage.style.display = 'block';

        }, 2000);


    })
});
// sound1.pause();

boxes.forEach(items => {
    items.addEventListener('click', () => {
      if (changeturn == false) {
            items.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
            items.id = "X";
            items.style.pointerEvents = 'none';
            showchange.style.left = `160px`;
            changeturn = true;
            let sound2 = new Audio('./mixkit-gold-coin-prize-1999.wav');
            sound2.play();
            Moveanimationright();

        } else {
            items.innerHTML = `<i class="fa fa-circle-o-notch" aria-hidden="true"></i>`;
            items.id = "O";
            items.style.pointerEvents = 'none';
            showchange.style.left = `0px`;
            changeturn = false;
            let sound2 = new Audio('./mixkit-gold-coin-prize-1999.wav');
            sound2.play();
            Moveanimationleft();
           
        }

        winningFunc();
        drawfunction();
       



    })
})


//winning Possible Winning  Combinations
let winningcombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let winningFunc = () => {
    for (let i = 0; i <= 7; i++) {
        let j = winningcombination[i];
        // console.log(j);
        if (boxes[j[0]].id == "" || boxes[j[1]].id == "" || boxes[j[2]].id == "") {
            continue;
        } else if (boxes[j[0]].id == "X" && boxes[j[1]].id == "X" && boxes[j[2]].id == "X") {
            console.log('X is winner');
            winnername.innerHTML = 'Player X win The Game';

            let addcoin=document.getElementById('leftcoin');
            // addcoin.style.display="block";
            addcoin.style.top="50%";
            let sound5= new Audio('./mixkit-winning-a-coin-video-game-2069.wav');
            sound5.play();
           

            let logotext=document.getElementById('title')
            logotext.style.display="none";
            let Animations = document.getElementById('img-2');
            Animations.classList.remove("Animation2");
            

            
            setTimeout(()=>{
             mainPage.style.display = 'none';
             winner.style.display = 'block';
             let sound3=new Audio ('./Large-crowd-cheering-and-clapping-sound-effect.mp3');
             sound1.pause();
             setInterval(() => {
                sound3.play();
             }, 2000);
           
             let winnerbox=document.getElementById('winnerbox');
             winnerbox.innerHTML=`<img src=./mysterybox.png  class="winnerbox">`;
             winnerbox.style.display="block";
            
     
            },500);

          
        } else if (boxes[j[0]].id == "O" && boxes[j[1]].id == "O" && boxes[j[2]].id == "O") {
            console.log('O is winner');

            winnername.innerHTML = 'Player O win The Game';

            let addcoin1=document.getElementById('rightcoin');
            // addcoin1.style.display="block";
            addcoin1.style.top="50%";
            let sound5= new Audio('./mixkit-winning-a-coin-video-game-2069.wav');
            sound5.play();
         
    
            let logotext=document.getElementById('title');
            logotext.style.display="none";
            let Animation = document.getElementById('img-1');
            Animation.classList.remove("Animation1");
          
            
            
            setTimeout(()=>{
                mainPage.style.display = 'none';
                 winner.style.display = 'block';
                 let sound3=new Audio ('./Large-crowd-cheering-and-clapping-sound-effect.mp3');
                 sound1.pause();
             sound3.play();
            let winnerbox=document.getElementById('winnerbox');
            winnerbox.innerHTML=`<img src=./mysterybox.png  class="winnerbox">`;
            winnerbox.style.display="block";
        
               },500);
   
           

        } else {
            continue;
        }
      

    }

}


//draw function
let drawfunction = () => {
    if (boxes[0].id != "" && boxes[1].id != "" &&
        boxes[2].id != "" && boxes[3].id != "" &&
        boxes[4].id != "" && boxes[5].id != "" &&
        boxes[6].id != "" && boxes[7].id != "" &&
        boxes[7].id != "") {
        winnername.innerHTML = 'Match Draw...!!!';
        let addcoin1=document.getElementById('rightcoin');
        addcoin1.style.display="none";
        let addcoin=document.getElementById('leftcoin');
        addcoin.style.display="none";
        let logotext=document.getElementById('title');
        logotext.style.display='none';
    
        
       

        let Animation = document.getElementById('img-1');
            Animation.classList.remove("Animation1");
            let Animations = document.getElementById('img-2');
            Animations.classList.remove("Animation2");
            
          
        setTimeout(()=>{
            mainPage.style.display = 'none';
            winner.style.display = 'block';
            let sound4=new Audio ('./mixkit-retro-arcade-lose-2027.wav');
            sound4.play();
            let winnerbox1=document.getElementById('winnerbox1');
            winnerbox1.innerHTML=`<img src=./ss.png  class="winnerbox">`;
            winnerbox1.style.display="block";
    
    
           },1000);
      


    }
}

//reset game
quit.addEventListener("click", () => {
    window.location.reload();
})

//Animations
function Moveanimationright() {
    let Animations = document.getElementById('img-2');
    Animations.classList.add("Animation2");
    let Animation = document.getElementById('img-1');
    Animation.classList.remove("Animation1");
}

function Moveanimationleft() {
    let Animation = document.getElementById('img-1');
    Animation.classList.add("Animation1");
    let Animations = document.getElementById('img-2');
    Animations.classList.remove("Animation2");
}

function MoveCoin(choosenow) {
    
if (choosenow.id === "playerX") {
    coin.style.display = "block";
    coin.classList.add('coinAnimation');  
} 
else if(choosenow.id === "playerO") {
    coin1.style.display = "block";
    coin1.classList.add("coinAnimation");
}

}


