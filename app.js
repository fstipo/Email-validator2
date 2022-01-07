const emailEl = document.querySelector('.email');
console.log(emailEl);
const emailLabelEl = document.querySelector('.email-label');

email.addEventListener('focus', (e) => {
  console.log('Focus');
  console.log(emailLabelEl);
  emailLabelEl.style.display = 'none';
  emailEl.setAttribute('placeholder', 'Please enter your email address');
  emailEl.style.border = '1px solid #939393';
});

emailEl.addEventListener('keyup', (e) => {
  emailLabelEl.style.display = 'none';
  emailEl.style.border = '3px solid red';
});

// "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
