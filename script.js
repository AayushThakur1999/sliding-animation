const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', slideBoxes);

slideBoxes();

function slideBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
};

// In-order to use an arrow function or function expression you need to declare and initialize
// it before using because arrow functions and function expressions are not hoisted.