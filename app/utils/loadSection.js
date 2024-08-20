export const loadMenu = () => {
    const menu = document.querySelector('#menu');
    menu.style.transform = 'translateY(0)'
}

export const loadBack = () => {
    const back1 = document.querySelector('#menu .back1');
    back1.style.visibility = 'visible';
    back1.style.opacity = 1;
}

export const loadWhoAmI = () => {
    const text = document.querySelector('#header .information .who-am-i .text');
    text.style.transform = 'translateX(0)';
}

export const loadIam1 = () => {
    const text = document.querySelector('#header .information .i-am .elem-1');
    text.style.transform = 'translateX(0)';
}

export const loadIam2 = () => {
    const text = document.querySelector('#header .information .i-am .elem-2');
    text.style.transform = 'translateX(0)';
}

export const loadLabel = () => {
    const label = document.querySelector('#header .information .who-am-i .label');
    label.style.transform = 'translateY(0)'
}

export const loadDescription = () => {
    const description = document.querySelector('#header .information .my-description');
    description.style.transform = 'translateY(0)'
}

export const loadDescriptionWrapper = () => {
    const wrapper = document.querySelector('#header .information .my-description .wrapper');
    wrapper.classList.add('move-description')
}