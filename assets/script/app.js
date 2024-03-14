/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*                                                       */
/*  Digi Arena (2024)                                    */
/*  https://github.com/josephadoga/digi-arena            */
/*                                                       */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

// This app requires a server to handle import statements and CORS issues


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*  Organizer                                            */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}


const slider = select('.slider');

const leftArrow = select('.left');

const rightArrow = select('.right');

const indicatorParents = select('.controls ul');

const productClick = select('.one');

const dialog = select('.sign-up-section');

const overlay = select('.overlay');

const contact = select('.sign-up-load');

let sectionIndex = 0;
let isVisible = false;
    
productClick.addEventListener('click', function() {
     window.location.href = './detail.html';
});

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -50 + '%)';
};

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');   
    });
});

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 1) ? sectionIndex + 1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
    
});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 1;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected');
    
});

function showDialog() {
    dialog.classList.add('isvisible');
    overlay.classList.add('isvisible');
    isVisible = true;
}
  
function hideDialog() {
    dialog.classList.remove('isvisible');
    overlay.classList.remove('isvisible');
    isVisible = false;
}

onEvent('load', window, function() {
    clearForm();
});
  
onEvent('click', contact, function() {
    showDialog()
});
  
onEvent('click', overlay, function() {
    if (isVisible) hideDialog();
});
  
onEvent('keyup', document, function(event) {
    if (isVisible && event.key === 'Escape') {
        hideDialog();
    }
});
  
onEvent('click', button, function() {
    alert.classList.add('isvisible');
    hideDialog();
    setTimeout(function() {
        alert.classList.remove('isvisible');
        clearForm();
    }, 5500);
});