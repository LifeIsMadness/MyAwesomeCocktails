
if((form = document.querySelector('form')) != null) {
    form.addEventListener('submit', e => {
            e.preventDefault();
    });
}


    if (localStorage.getItem('isAuthenticated') === 'true') {
    document.getElementById('logout-link')
        .style.display = "inline-block";
}

function logout() {
    localStorage.removeItem('isAuthenticated');
    document.getElementById('logout-link')
        .style.display = "none";
}

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

const token_users = 'https://api.jsonbin.io/v3/b/607cbdd90ed6f819beaf22fd/';
const token_cocktails = 'https://api.jsonbin.io/v3/b/607a08295b165e19f62196cf/';
const key = '$2b$10$pr6K8aK2mjCmm5vXuEJzw.mn99BW4mJHMveq9Wx3tUQRlvm3LAUkK';

// this is not a list, therefore users.users
var users;
async function getUsers() {
    const response = await fetch(token_users + 'latest', {
        method: 'GET',
        headers: {
            'X-Master-Key': key,
        }
    });

    return await response.json();
}

getUsers().then(result => {
    users = result.record;
});

document.getElementById('favorites-link')
    .addEventListener('click', function () {
        let a = this.children[0];
        if (localStorage.getItem('isAuthenticated') !== null) {
            console.log(a.href);
            a.href = './favorites.html';
        }
    });



