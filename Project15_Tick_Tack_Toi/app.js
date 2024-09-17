const gamePlaces = document.querySelectorAll('.btns');
const resultText = document.querySelector('.result');
let gameX = true;
const winnerCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],  
    [2,4,6],
]



const checkWinner = ()=>{
    // if(gamePlaces[0].textContent === gamePlaces[3].textContent 
    //     && gamePlaces[3].textContent === gamePlaces[6].textContent ){
    //         const winner = gamePlaces[0].textContent
    //         whoisWinner(winner);
            
    //     }
    for(let condition of winnerCondition){
        const box1 = gamePlaces[condition[0]].textContent;
        const box2 = gamePlaces[condition[1]].textContent;
        const box3 = gamePlaces[condition[2]].textContent;
       if(box1!== '' && box2!== '' && box3!== ''){
            if(box1===box2 && box2===box3){
                resultText.textContent = `Winner is ${box1}`
            }
       }
    }
        
    }



gamePlaces.forEach(item=>{
    item.addEventListener('click' , ()=>{
        if(gameX){
           item.textContent = "X"
           item.style.color="#dc68e8"
           item.style.textShadow="rgba(230,0,255,0.9) 0px 0px 39px"
           gameX=false
        }else{
            item.textContent="0"
            item.style.color=" #4cbed5  "
            item.style.textShadow="rgba(0,170,255,0.9) 0px 0px 39px "
            gameX=true
        }
        checkWinner();
        
    })

})








