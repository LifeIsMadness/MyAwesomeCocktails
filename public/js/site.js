
let _main = document.querySelector('main');
let _body = document.querySelector('body');
let bodyHeight = window.getComputedStyle(_body).height.replace('px', '');
while (window.innerHeight - bodyHeight > 0) {
    _main.appendChild(document.createElement('br'));
    bodyHeight = window.getComputedStyle(_body).height.replace('px', '');
}