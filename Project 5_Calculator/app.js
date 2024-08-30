const inputField = document.getElementById('display');
const btn = document.querySelectorAll('.btn')

btn.forEach((buttons)=>{
     buttons.addEventListener('click' , (e)=>{
        if(e.target.id === 'C'){
            inputField.value= ''
        }else if(e.target.id === '='){
           caculateValues();
        }else{
           inputField.value += e.target.id;
        }

     })
})

 const caculateValues = ()=>{
    
 }