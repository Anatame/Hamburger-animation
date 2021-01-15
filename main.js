const menuBtn = document.querySelector('.menu-btn');
let toggle = false;

menuBtn.addEventListener('click', function(){
    toggle = !toggle;
    if(toggle ? menuBtn.classList.add('open') : menuBtn.classList.remove('open'));
})