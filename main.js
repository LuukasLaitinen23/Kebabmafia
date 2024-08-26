const registerDialog = document.getElementById('registerDialog');
const openRegisterDialog = document.getElementById('openRegisterDialog');
const closeRegisterDialog = document.getElementById('closeRegisterDialog');

openRegisterDialog.addEventListener('click', () => {
  registerDialog.showModal();
});

closeRegisterDialog.addEventListener('click', () => {
  registerDialog.close();
});
