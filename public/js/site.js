function setFooter() {
    let _main = document.querySelector('main');
    let _body = document.querySelector('body');
    let bodyHeight = window.getComputedStyle(_body).height.replace('px', '');
    // console.log(window.innerHeight, bodyHeight);
    while (window.innerHeight - bodyHeight > 0) {
        _main.appendChild(document.createElement('br'));
        // console.log(window.innerHeight, bodyHeight);
        bodyHeight = window.getComputedStyle(_body).height.replace('px', '');
    }
}

window.addEventListener('resize',
    () => {
    setTimeout(setFooter, 500);
});

const token = 'https://api.jsonbin.io/v3/b/607a08295b165e19f62196cf/latest';
const key = '$2b$10$pr6K8aK2mjCmm5vXuEJzw.mn99BW4mJHMveq9Wx3tUQRlvm3LAUkK';
