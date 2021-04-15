function setFooter() {
    let _main = document.querySelector('main');
    let _body = document.querySelector('body');
    let bodyHeight = window.getComputedStyle(_body).height.replace('px', '');
    console.log(window.innerHeight, bodyHeight);
    while (window.innerHeight - bodyHeight > 0) {
        _main.appendChild(document.createElement('br'));
        console.log(window.innerHeight, bodyHeight);
        bodyHeight = window.getComputedStyle(_body).height.replace('px', '');
    }
}

window.addEventListener('resize',
    () => {
    setTimeout(setFooter, 500);
});

