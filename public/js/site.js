const cocktails = Array.from(document.querySelectorAll('.cocktail-list-row > a'));

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

var tId = setTimeout(setFooter, 500);

window.addEventListener('resize',
    () => {
    clearTimeout(tId);
    tId = setTimeout(setFooter, 500);
});

document.querySelector('.search-form button')
    .addEventListener('click', () => {
        const regex = new RegExp('<figcaption>(.*)</figcaption>', 'i');
        const text = document.getElementById('search-input').value;

        let searched = cocktails.filter(c => {
            name = regex.exec(c.innerHTML)[1];
            return name.includes(text);
        });

        console.log(searched);

        let container = document.querySelector('.cocktail-list-row');
        container.innerHTML = '';

        for (let el of searched) {
            container.appendChild(el);
        }

        clearTimeout(tId);
        tId = setTimeout(setFooter, 500);
    });