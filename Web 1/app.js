const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

//display mobile menu
const mobilemenu = () => {
    menu.classList.toggle('is active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active'),
    menuLinks.classList.toggle('active')
})

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY

    // adds 'highlight' class to my menu items *****************work in progress window.innerWidth sort out resolution
    //if(window.innerWidth > 960 && scrollPos < 100) {
        //homeMenu.classList.add('highlight') 
       // aboutMenu.classList.remove('highlight')
       // return
    //} else if (window.innerWidth > 960 && scrollPos < 400) {
       // aboutMenu.classList.add('highlight')
       // homeMenu.classList.remove('highlight')
      //  servicesMenu.classList.remove('highlight')
     //   return
    //} else if (window.innerWidth > 960 && scrollPos < 2345) {
     //   servicesMenu.classList.add('highlight')
      //  aboutMenu.classList.remove('highlight')
      //  return
    //}

    //if((elem && window.innerWidth < 960 && scrollPos < 500) || elem) {
    //    elem.classList.remove('highlight')
    //}
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)
