const container = document.querySelector('.container');
const inputField = document.querySelector('#input');
const ouput = document.querySelector('#text');


inputField.addEventListener('input', (e) => {
     let password = inputField.value
     if (password.length < 8) {
          ouput.textContent = 'password is too short'
          ouput.style.color = 'red';
     } else {
          // ouput.textContent = 'password is long enough'
          // ouput.style.color = 'green';
          if (password.search(/[a-z]/) == -1) {
               ouput.textContent = 'password is missing a lower case'
               ouput.style.color = 'red';
          } else if (password.search(/[A-Z]/) == -1) {
               ouput.textContent = 'password is missing a upper case case'
               ouput.style.color = 'red';
          } else if (password.search(/[0-9]/) == -1) {
               ouput.textContent = 'password is missing a Numeric value case'
               ouput.style.color = 'red';
          } else if (password.search(/[!\@\#\$\%\^\&\*\(\)\{\<\}\>\?\/]/) == -1) {
               ouput.textContent = 'password is missing a Special character case'
               ouput.style.color = 'red';
          }
          else {
               ouput.textContent = 'password is strong'
               ouput.style.color = 'green';
          }
     }
})
