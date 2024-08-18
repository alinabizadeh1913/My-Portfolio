export const loadMenu = () => {
    const menu = document.querySelector('#menu');
    menu.style.transform = 'translateY(0)'
}

export const loadBack = () => {
    const back1 = document.querySelector('#menu .back1');
    // const back2 = document.querySelector('#menu .back2');
    back1.style.visibility = 'visible';
    back1.style.opacity = 1;
    // back2.style.visibility = 'visible';
    // back2.style.opacity = 1;
}