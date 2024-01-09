const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (slideIndex < 2) { // 3 images, donc 2 est l'index maximum
        slideIndex++;
        showSlide(slideIndex);
    }
});

showSlide(slideIndex);