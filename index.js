let form = document.getElementsByTagName('form');
let value = document.getElementsByClassName('email-address');
let errorMessage = document.getElementsByClassName('error-message');
let isError = false;

form.item(0).addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.item(0).value)
  );
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value.item(0).value)
  ) {
    form.item(0).className = 'border-red';
    errorMessage.item(0).style.display = 'block';
  } else {
    form.item(0).classList.remove('border-red');
    errorMessage.item(0).style.display = 'none';
    form.item(0).reset();
  }
});
