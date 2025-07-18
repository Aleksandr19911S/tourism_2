document.addEventListener('DOMContentLoaded', function() {
    // Heart animation
    const heart = document.querySelector('.footer-heart');
    if (heart) {
        let scale = 1;
        let growing = true;
        setInterval(() => {
            heart.style.transition = 'transform 0.25s cubic-bezier(.4,0,.6,1)';
            heart.style.transform = growing ? 'scale(1.25)' : 'scale(1)';
            growing = !growing;
        }, 500);
    }

    // Carousel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const images = track.querySelectorAll('img');
        const prevBtn = carousel.querySelector('.carousel-btn.prev');
        const nextBtn = carousel.querySelector('.carousel-btn.next');
        let current = 0;
        function showImage(idx) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === idx);
            });
        }
        function goPrev() {
            current = (current - 1 + images.length) % images.length;
            showImage(current);
        }
        function goNext() {
            current = (current + 1) % images.length;
            showImage(current);
        }
        prevBtn.addEventListener('click', goPrev);
        nextBtn.addEventListener('click', goNext);
        // Инициализация
        showImage(current);
    }
}); 