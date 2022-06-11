// var cocktail = 'bloody mary';
// $.ajax({
//     url: 'https://api.api-ninjas.com/v1/cocktail?name=' + cocktail,
//     method: 'GET',
//     headers: { 'X-Api-Key': 'hMzMH+MBft5+cJHF/Lmajw==dN7wK4DXcPXKuOva'},

//MJ:Declare global vars 
var ingredientList
var alchoholType



//MJ:When asked dirnking age 
//Then use is prensented with either alcholic or non-alcholic options


//MJ:This function makes the modal popup once the browser is opened

function openModalOnRefresh(){
    const modalDiv = document.getElementById('modal-js-example')
    modalDiv.classList.add('is-active');
}
openModalOnRefresh()


//MJ:Age Restriction Modal

var over21 = document.getElementById("over21");
over21.addEventListener("click", function(){
    console.log ("over21")

    localStorage.setItem("over21","true")
})
// 
var under21 = document.getElementById("under21")





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



// Drink Randomizer 
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



// $.ajax({
//     url: 'www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
//     method: 'GET',
//     headers: { 'X-Api-Key': '1'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

$.ajax({
    url:'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
    method:'GET'
}).then(function (response) {
console.log(response)
})


// var drinkingAge = $(."21overbutton");
// var underAge = $(."under21button");
// 21over.click(function() {
//     if (21over == "")
// })
//MJ:When selcting drink 
//Then full recipe is shown

