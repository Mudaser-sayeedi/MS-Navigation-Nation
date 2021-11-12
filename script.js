// dom selection
const domElement = {
    menuBar: document.querySelector('.menu-bars'),
    overlay: document.querySelector('#overlay'),
    anchors: document.querySelectorAll('a'),
    listItems: document.querySelectorAll('li')
}

// list item toggle between slide in and out function
const navListSlide = (remove,add) => {
    domElement.listItems[0].classList.replace(`${remove}1`, `${add}1`);
    domElement.listItems[1].classList.replace(`${remove}2`, `${add}2`);
    domElement.listItems[2].classList.replace(`${remove}3`, `${add}3`);
    domElement.listItems[3].classList.replace(`${remove}4`, `${add}4`);
    domElement.listItems[4].classList.replace(`${remove}5`, `${add}5`);
}

// when menu button clicked listener
const toggleNav = () => {
    domElement.menuBar.classList.toggle('change');
    if (domElement.menuBar.classList.contains('change')) {
        if (domElement.overlay.classList.contains('overlay-slide-out')) {
            domElement.overlay.classList.replace('overlay-slide-out', 'overlay-slide-in');
            navListSlide('slide-out', 'slide-in');

        } else {
            domElement.overlay.classList.add('overlay-slide-in');
            domElement.listItems[0].classList.add('slide-in1');
            domElement.listItems[1].classList.add('slide-in2'); 
            domElement.listItems[2].classList.add('slide-in3');
            domElement.listItems[3].classList.add('slide-in4');
            domElement.listItems[4].classList.add('slide-in5');
        }
        
    } else {
        domElement.overlay.classList.replace('overlay-slide-in', 'overlay-slide-out');
        navListSlide('slide-in','slide-out');
    }
}

// listeners
domElement.menuBar.addEventListener('click', toggleNav);
domElement.anchors.forEach((anchor) => {
    anchor.addEventListener('click', toggleNav);
});
