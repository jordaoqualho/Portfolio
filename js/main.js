const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const sidebarOption = document.querySelector('.sidebar ul');
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
sidebarOption.addEventListener('click', () =>{
  if (menuOpen) {
    menu.classList.remove('open');
    sidebar.classList.remove('ativo');
    menuOpen = false;
  }
})

//função que ajusta o escroll da tag "a"
let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}