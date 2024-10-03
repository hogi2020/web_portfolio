// 변수 선언
var current = 0;
showSlides();

// n번째 이미지만 화면 표시하는 함수
function showSlides() {
    var slides = document.querySelectorAll('#slides > img');

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    current++;

    if (current >= slides.length) current = 0;
    slides[current].style.display = 'block';

    setTimeout(showSlides, 3000);   // 셀프 함수 반복 실행
}