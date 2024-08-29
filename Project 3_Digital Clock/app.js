const display = document.querySelector('#display');

setInterval(()=>{
    const date = new Date();
    display.textContent = date.toLocaleTimeString();
},1000)