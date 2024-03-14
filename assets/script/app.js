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

const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');

const rightArrow = document.querySelector('.right');

const indicatorParents = document.querySelector('.controls ul');

const productClick = document.querySelector('.one')

let sectionIndex = 0;

    
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



