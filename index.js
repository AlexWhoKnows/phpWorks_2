window.addEventListener('load', function () {
    document.querySelector('.menu>ul').classList.add('nav', 'nav-tabs');
    document.querySelectorAll('ul.nav>li').forEach(function (el) {
        el.classList.add('nav-item', 'dropdown');
    })
    document.querySelectorAll('.nav-item>a').forEach(function (el) {
        el.classList.add('nav-link');
        el.setAttribute('role','button');
    })
    document.querySelectorAll('.nav-item').forEach(function (el) {
        if (el.children.length > 1) {
            el.querySelector('.nav-item>a').classList.add('dropdown-toggle');
            el.querySelector('.nav-item>a').setAttribute('data-bs-toggle','dropdown');
        }
    })
    document.querySelectorAll('.nav-item>ul').forEach(function (el) {
        el.classList.add('dropdown-menu')
    })
    document.querySelectorAll('.dropdown-menu a').forEach(function (el) {
        el.classList.add('dropdown-item')
    })
})