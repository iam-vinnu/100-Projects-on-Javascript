const container = document.querySelector('.container');
const setHour =  document.querySelector('#hour')
const setMinute =  document.querySelector('#minute')
const setSecond =  document.querySelector('#second')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let secoundCounter = 0 ;
 let   hourCounter = 0 ;
  let   minuteCouter = 0;
let reference;

startBtn.addEventListener('click' , ()=>{
      if(!reference){
        reference =  setInterval(()=>{
            secoundCounter++;
            setSecond.textContent = secoundCounter;
            if (secoundCounter === 60){
                secoundCounter = 0 ;
                 minuteCouter++;
                 setMinute.textContent = minuteCouter;
                 if(minuteCouter === 59){
                    minuteCouter = 0
                    hourCounter++;
                    setHour.textContent = hourCounter;
                }
            }
        
        } , 1000)
    
      }

})

stopBtn.addEventListener('click' , ()=>{
    clearInterval(reference);
    reference = null ;
})

resetBtn.addEventListener('click' , ()=>{
    secoundCounter = 0
     hourCounter = 0
      minuteCouter = 0
    setSecond.textContent ='00'
    setMinute.textContent ='00'
    setHour.textContent = '00'
})