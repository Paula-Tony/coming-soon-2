document.forms[0].addEventListener('submit', function(e) {
  let emailInput = document.querySelector('input[type="email"]');
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regEx.test(emailInput.value)) e.preventDefault();
  this.querySelector('p').style.display = 'block';
  this.querySelector('div > img').style.display = 'block'
})