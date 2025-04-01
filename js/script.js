openMenu.addEventListener('click', () => {
menu.style.display = "flex";
menu.style.right = (menu.offsetWidth * -1) + 'px';

setTimeout( () =>{

    menu.style.opacity = '1';

    menu.style.right = '0';

    openMenu.style.display = 'none';
}, 10);
});