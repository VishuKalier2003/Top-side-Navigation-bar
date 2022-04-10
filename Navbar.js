const touch = document.getElementById('touch');
const elem = document.querySelector('#list');
touch.addEventListener('click', function() {
    elem.classList.toggle('navlist1');
});