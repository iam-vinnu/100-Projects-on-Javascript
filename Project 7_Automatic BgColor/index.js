
const start = document.getElementById('start')
const stop = document.getElementById('stop')

const randomColor = ()=>{
    const colorStr = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
       color += colorStr[Math.floor(Math.random()*16)]   
    }

    return color;
}
console.log(randomColor());

let interval;
const startColorChange =()=>{
  if(!interval){
    interval = setInterval(()=>{
        document.body.style.backgroundColor = randomColor()
      }, 1000);
  }
}

const stopColorChange  = ()=>{
   clearInterval(interval);
   interval = null ;
}

start.addEventListener('click',(e)=>{
    startColorChange();
});
stop.addEventListener('click',(e)=>{
    stopColorChange();
});