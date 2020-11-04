$(window).on('load', function () {
    $('#preloader .inner').delay(1000).fadeOut();
    $('#preloader').delay(1000).fadeOut('slow'); 
    $('body').delay(1000).css({'overflow': 'visible'});
  })
  
  $(window).scroll(function () {
      if ($(document).scrollTop() > 200) {
          $(".header").addClass("flying-header");
      } else {
          $(".header").removeClass("flying-header");
      }
  });
  
  const hamburguer = document.querySelector(".hamburguer");
  const submenu = document.querySelector(".sub-menu");
  const id1 = document.querySelector("#l1");
  const id2 = document.querySelector("#l2");
  const id3 = document.querySelector("#l3");
  const line = document.querySelector(".line");
  const lines = document.querySelectorAll(".sub-menu li");
  
  hamburguer.addEventListener("click", () => {
      submenu.classList.toggle("clicked-menu");
      id1.classList.toggle("line1");
      id2.classList.toggle("line2");
      id3.classList.toggle("line3");
  });
  
  //funÃ§Ã£o que ajusta o escroll da tag "a"
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