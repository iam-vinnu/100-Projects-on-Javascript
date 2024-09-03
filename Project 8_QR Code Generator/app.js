const inputText = document.querySelector('#urlText');
const inputSubmit = document.querySelector('#submit');
const qrImg = document.querySelector('.qr-img');
const img = document.createElement('img');


inputSubmit.addEventListener('click' , (e)=>{
       e.preventDefault();
       const URL = inputText.value;

       img.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${URL}`
    //    img.classList.add='code-img';
    img.setAttribute('class' , 'code-img')
       qrImg.appendChild(img);
       

})
