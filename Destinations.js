const container = document.querySelector('.container');
const slide = document.querySelector('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const moveNext = () => {
    const items = document.querySelectorAll('.item');
    slide.appendChild(items[0]); 
};

const movePrev = () => {
    const items = document.querySelectorAll('.item');
    slide.prepend(items[items.length - 1]); 
};

nextButton.addEventListener('click', moveNext);
prevButton.addEventListener('click', movePrev);

container.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        moveNext();
    } else {
        movePrev();
    }
});

