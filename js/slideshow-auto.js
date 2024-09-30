var current = 0;
showSlides();

function showSlides() {
    var slides = document.querySelectorAll("#slides > img");
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    current++;
    if(current > slides.length)
        current = 1;
    slides[current - 1].style.display = "block";  // 현재 위치 이미지 표시
    setTimeout(showSlides, 3000);
}