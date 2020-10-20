const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
let menuOpen = false;
menu.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('open');
    sidebar.classList.add('ativo');
    menuOpen = true;
  } else {
    menu.classList.remove('open');
    sidebar.classList.remove('ativo');
    menuOpen = false;
    
  }
})

