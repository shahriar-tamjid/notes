'use strict';
// For following the DRY Principle we should keep all the querySelectors in variables.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Limitation of querySelector method:
// whenever we use querySelector with a selector which matches multiple elements only the first one will get selected. To overcome this situation we use querySelectorAll() method.
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
// In order to response to a click event we need to attach an event listener to the element.

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // It looks bulky ... So let's make it more readable by putting the function into a variable

  // btnsOpenModal[i].addEventListener('click', function() {
  //     console.log("Button Clicked");
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  // });

  // And that's the clean version of the previous block

  btnsOpenModal[i].addEventListener('click', openModal);
}
// Repeatation of code is not good

// btnCloseModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// We can make the code DRY by crating a function for closing the modals like: 'closeModal'

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
There are 3 types of events for the keyboard: 1. keyup  2. keypress  3. keydown
keyup - This one only happens when we lift our finger off the key.
keypress -  This is fired continuously as we keep our finger on a certain key.
keydown - This is fired as soon as we just press the key. So ususally that is one which we use.
*/
// When a function executes it returns a object loaded with information about that function.
// We can use that object to modify our function according to our needs.
// To do so we need to give our function a parameter and then call that parameter to make changes.
document.addEventListener('keydown', function (e) {
  console.log(e.key); // This shows which key is pressed

  // if(e.key === 'Escape'){
  //     if(!modal.classList.contains('hidden')){
  //         closeModal();
  //     }
  // }

  // Making the code DRY
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
