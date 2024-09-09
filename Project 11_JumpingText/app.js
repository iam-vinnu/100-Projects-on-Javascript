const text = document.querySelectorAll('span');

text.forEach((char) => {
    char.addEventListener('click', (e) => {
       console.log(e.target);
       
         char.classList.toggle('active')
    })
})
