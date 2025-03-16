let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides.forEach(slide => {
        slide.classList.remove("active");
        slide.classList.remove("inactive");
    });
    

    let prevIndex = n - 1;
    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }
    slides[prevIndex].classList.add("inactive");
    slides[n].classList.add("active");
}

function changeSlide(step) {
    index += step;
    if (index >= slides.length) index = 0;
    showSlide(index);
    setTimeout(() => {
        changeSlide(1);
      }, 4000);
    
}
changeSlide(0);