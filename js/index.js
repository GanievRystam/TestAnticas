
(function burgerMenu () {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  burger.addEventListener('click', ()=> {
      menu.classList.remove('mobile-close');
      burgerExit()
  });
})()

function burgerExit() {
  const exit = document.querySelector('[data-exit]');
  const menu = document.querySelector('[data-menu]');
  exit.addEventListener('click', ()=> {
    menu.classList.add('mobile-close');
});
}
