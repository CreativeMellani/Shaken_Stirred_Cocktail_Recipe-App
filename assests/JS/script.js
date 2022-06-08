//MJ:Declare global vars 
var ingredientList
var alchoholType



//MJ:When asked dirnking age 
//Then use is prensented with either alcholic or non-alcholic options


//This function makes the modal popup once the browser is opened

function openModalOnRefresh(){
    const modalDiv = document.getElementById('modal-js-example')
    modalDiv.classList.add('is-active');
}
openModalOnRefresh()

// Yes button

// No button


// Functions to open and close a modal
function openModal($el) {
    $el.classList.add('is-active');
}

function closeModal($el) {
    $el.classList.remove('is-active');
}

function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
    });
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
        openModal($target);
    });
});

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
        closeModal($target);
    });
});

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
        closeAllModals();
    }
});



// Drink Randomizer Modal

//MJ:When selecting possible ingredients 
//Then relevant recipes including selected ingredients are shown

 
//MJ:multiple choice/ selection here 
//modal here


//MJ:Drink options
// var name = 'bloody mary'
// $.ajax({
//     // method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });



//MJ:When selcting drink 
//Then full recipe is shown

