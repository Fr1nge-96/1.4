document.getElementById('menu__button').addEventListener('click', toggleMenu)
document.getElementById('vector').addEventListener('click', toggleMenu)
document.getElementById('blur').addEventListener('click', blurOff)


function toggleMenu(){
    document.getElementById('main__menu').classList.toggle('menu-visible')
}

function blurOff(){
    document.getElementById('menu__blur').classList.add('menu__blur-remove')
}