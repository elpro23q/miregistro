let currrentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
function moveSlide(step){
    currrentIndex += step;
    if (currrentIndex < 0){
        currrentIndex = totalItems - 1;
    }
    if (currrentIndex >= totalItems) {
        currrentIndex = 0;
    }
    const offset = -currrentIndex * 100;
    document.querySelector('.carousel').style.transform =
    `translatex(${offset}%)`
}
setInterval(() => {
    moveSlide(1);
}, 5000);