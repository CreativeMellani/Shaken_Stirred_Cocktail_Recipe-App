// var cocktail = 'bloody mary';
// $.ajax({
//     url: 'https://api.api-ninjas.com/v1/cocktail?name=' + cocktail,
//     method: 'GET',
//     headers: { 'X-Api-Key': 'hMzMH+MBft5+cJHF/Lmajw==dN7wK4DXcPXKuOva'},
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
