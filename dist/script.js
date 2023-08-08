const mobileBtn = document.querySelector("#mobile-button");
const mobileMenu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})