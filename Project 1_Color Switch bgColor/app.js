const boxElements = document.querySelectorAll('.button');
const body = document.querySelector('body');
const list = document.querySelectorAll('li');
boxElements.forEach((buttons) => {
        buttons.addEventListener('click', (event) => {

                switch (event.target.id) {
                        case 'blue':
                                body.style.backgroundColor = event.target.id
                                break;
                        case 'red':
                                body.style.backgroundColor = event.target.id
                                break;
                        case 'purple':
                                body.style.backgroundColor = event.target.id
                                break;
                        case 'yellow':
                                body.style.backgroundColor = event.target.id
                                break;
                }
             
             list.forEach((item)=>{
                   item.style.color = 'white'
                   if(body.style.backgroundColor === 'yellow'){
                        item.style.color = 'red'
                   }
             })
        });
});     

const addLanguage = (lang) =>{
    const liLang = document.createElement('li');
    liLang.appendChild(document.createTextNode(lang));
    document.querySelector('.languages').appendChild(liLang);
}
 addLanguage('lua');
 addLanguage('Mojo');
 addLanguage('Html');


 const editlanguage = (lang)=>{
      const li = document.querySelector('li:nth-child(2)');
     // li.appendChild(document.createTextNode(lang)); 
     const newLi = document.createElement('li');
     newLi.textContent = lang
     li.replaceWith(newLi);
 }

 editlanguage('css')

 const removeElement = (lang) =>{
        const li = document.querySelectorAll('li');
       li.forEach((item)=>{
        if(item.textContent === lang){
                item.remove();
         }
       })
 }

 removeElement('css');