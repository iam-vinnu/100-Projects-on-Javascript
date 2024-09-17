const inputField = document.querySelector('#input');

const changeText = document.querySelector('#pound');


inputField.addEventListener('input' ,(e)=>{
      e.preventDefault();
      changeText.textContent = inputField.value*2.2046
})