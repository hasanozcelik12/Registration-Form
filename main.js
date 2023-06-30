const formOpenBtn = document.querySelector('#form-open')
const home = document.querySelector('.home')
const formnContainer = document.querySelector('.form-container')
const formCloseBtn = document.querySelector('.form-close')
const loginBtn = document.querySelector('#login')
const signupBtn = document.querySelector('#signup')
const pwShowHide = document.querySelectorAll('.pw-hide')

formOpenBtn.addEventListener('click',() => home.classList.add("show"))
formCloseBtn.addEventListener('click',() => home.classList.remove("show"))


pwShowHide.forEach(icon => {
   icon.addEventListener('click', () => {
    let getPwInput = icon.parentElement.querySelector("input")
    console.log(getPwInput)
    if(getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash","uil-eye")
    } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye-slash","uil-eye-slash")
    }
  
   })
})

signupBtn.addEventListener('click', (e) => {
e.preventDefault();
formnContainer.classList.add("active");
})

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    formnContainer.classList.remove("active");
    })