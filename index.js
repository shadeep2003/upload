let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

// ස්වයංක්‍රීයව slider එක මාරු කිරීම


let refreshInterval = setInterval(()=> {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();


}, 3000); 

// සෑම තත්පර 3කට වරක්ම මාරු වේ

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    
    // Active dot එක update කිරීම
    let last_active_dot = document.querySelector('.slider .dots li.active');
    if (last_active_dot) { // last_active_dot එකක් තියෙනවද කියලා check කරනවා
        last_active_dot.classList.remove('active');
    }
    dots[active].classList.add('active');

    // Interval එක නැවත පටන් ගැනීම (user interaction එකෙන් පස්සේ)
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }, 3000);
}

// Dots click කළ විට
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})

// Window resize කළ විට slider එක adjust කිරීම
window.onresize = function(event) {
    reloadSlider();
};

// මුලින්ම slider එක load කරන විට
reloadSlider();