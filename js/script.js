// PASSWORD
const password = document.getElementById('password'),
      upperLetter = document.getElementById('upperLetter'),
      lowLetter = document.getElementById('lowLetter');

password.onkeyup = function() {
  if(password.value.length >= 8 ) {
    password.style.borderBottom = '1px solid #ced4da';
  } else {
    password.style.borderBottom = '1px solid red';
  }

  let uppLet = /[A-Z]/g;
  if(password.value.match(uppLet)) {
    password.style.borderBottom = '1px solid #ced4da';
  } else {
    upperLetter.style.display = 'block';
  }

  let lowLet = /[a-z]/g;
  if(password.value.match(lowLet)) {
    password.style.borderBottom = '1px solid #ced4da';
  } else {
    lowLetter.style.display = 'block'; 
  }
}

// SUBMIT FORM
const form = document.querySelector('form');

function post(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
  
}