window.addEventListener('DOMContentLoaded', () => {

    /* Burger */

     const body = document.body;
     const burger = document.querySelector('.burger');
     const burgerBackground = document.querySelector('.burger_background');
     const navMenu = document.querySelector('.nav-menu');
     const navMenuList = document.querySelector('.nav-menu_list');

     burger.addEventListener('click', () => {
         burger.classList.toggle('burger_active');
         navMenu.classList.toggle('nav-menu_active');
         burgerBackground.classList.toggle('burger_background_active');
         body.classList.toggle('body-noscroll');
     });

     const navMenuItemArray = document.querySelectorAll('.nav-menu_item');
     navMenuItemArray.forEach(item => {
         item.addEventListener('click', closeMenu);
         });


     function closeMenu(event) {
         navMenu.classList.remove('nav-menu_active');
         burgerBackground.classList.remove('burger_background_active');
         body.classList.remove('body-noscroll');
         burger.classList.remove('burger_active');
     }

     burgerBackground.addEventListener('click', closeMenu);
     navMenuList.addEventListener('click', closeMenu);

});