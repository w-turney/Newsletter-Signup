const dismissBtn = document.querySelector('.dismiss');
const signUpBox = document.querySelector('.sign-up-box');
const successBox = document.querySelector('.success-box');
const mobileImgContainer = document.querySelector('.mobile-image')
const input = document.getElementById('email');
const span = document.querySelector('.email-address');
const form = document.querySelector('.form')



form.onsubmit = event => {
    event.preventDefault();
    span.innerHTML = `<strong>${email.value}</strong>`;
    signUpBox.style.display = 'none';
    successBox.style.display = 'flex';
    mobileImgContainer.style.display = 'none'
}

dismissBtn.addEventListener('click', () => {
    signUpBox.style.display = 'flex';
    successBox.style.display = 'none';
})