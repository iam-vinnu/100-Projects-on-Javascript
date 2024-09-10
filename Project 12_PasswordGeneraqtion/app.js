const passwordText = document.querySelector('#password');
const copyText = document.querySelector('#copy');
const inputLength = document.querySelector('#inputLength');
const uppercase = document.querySelector('#upperCheckbox');
const lowercase = document.querySelector('#lowerCheckbox');
const number = document.querySelector('#numberCheckbox');
const symbol = document.querySelector('#symbolCheckbox');
const generateBtn = document.querySelector('#generate');






const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const num = '1234567890';
const sym = '!@#$%^&*()_-+'

generateBtn.addEventListener('click' , ()=>{
    let str = '';
    if(uppercase.checked){
        str+=upper;
    }
    if(lowercase.checked){
        str+=lower;
    }
    if(number.checked){
        str+=num;
    }
    if(symbol.checked){
        str+=sym;
    }
    
    let pass = '';
    for(let i = 0 ; i < inputLength.value ; i++){
         const randomPass = Math.floor(Math.random()*str.length);
         pass += str.charAt(randomPass);
    }

    passwordText.textContent = pass;
})


copyText.addEventListener('click', async()=>{
  try {
    await navigator.clipboard.writeText(passwordText.textContent);
    alert('Text is copied');
  } catch (error) {
    console.log(error);
    
  }
});
