// 변수 선언
var slides = document.querySelectorAll('#slides > img');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var current = 0;
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

// n번째 이미지만 화면 표시하는 함수
function showSlides(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = 'block';
}

// 이전 이미지로 이동
function prevSlide() {
    if(current > 0) current -= 1;
    else current = slides.length - 1;
    showSlides(current);
}

// 이후 이미지로 이동
function nextSlide() {
    if(current < slides.length -1) current += 1;
    else current = 0;
    showSlides(current);
}