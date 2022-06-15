//MJ:When asked dirnking age 
//Then use is prensented with alcholic 

//MJ:This function makes the modal popup once the browser is opened

function openModalOnRefresh(){
  const modalDiv = document.getElementById('modal-js-example')
  modalDiv.classList.add('is-active');
}
openModalOnRefresh()

//MJ:Age Restriction Modal
//MJ: Intially the age restriction modal would pop up on refresh but changed it to only pop up when there is a new session
//if yes
var over21 = document.getElementById("over21");
const modalDiv = document.getElementById('modal-js-example')
const underAgeModal = document.getElementById('modal-under21')
over21.addEventListener("click", function(){
  console.log ("over21")
 modalDiv.classList.remove('is-active')
  localStorage.setItem("over21","true")
})
// if no
var under21 = document.getElementById("under21")
under21.addEventListener("click", function(){
  console.log ("under21")
  modalDiv.classList.remove('is-active')
  underAgeModal.classList.add('is-active')
  localStorage.setItem("under21","true")
})

// MJ: Close modal function
function closeModal($el) {
  $el.classList.remove('is-active');
}

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
// MJ: adding to Elain's code to call the api and randomize the cocktail recipe
//cocktail options for drink randomizer
$(".js-modal-trigger").click(function() {
$(".ingredient-list").empty();
$(".drink-name").empty();
$("#drink-week-ingredient").addClass("is-active");
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(function (response) {
  return response.json()
}).then(function(data) {
  $(".drink-name").text(data.drinks[0].strDrink);
  if(data.drinks[0].strIngredient1 !== null && data.drinks[0].strMeasure1 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure1 + " " + data.drinks[0].strIngredient1);
    $(".ingredient-list").append(ingredientList);
  } 
  if (data.drinks[0].strIngredient2 !== null && data.drinks[0].strMeasure2 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure2 + " " + data.drinks[0].strIngredient2);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient3 !== null && data.drinks[0].strMeasure3 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure3 + " " + data.drinks[0].strIngredient3);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient4 !== null && data.drinks[0].strMeasure4 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure4 + " " + data.drinks[0].strIngredient4);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient5 !== null && data.drinks[0].strMeasure5 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure5 + " " + data.drinks[0].strIngredient5);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient6 !== null && data.drinks[0].strMeasure6 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure6 + " " + data.drinks[0].strIngredient6);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient7 !== null && data.drinks[0].strMeasure7 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure7 + " " + data.drinks[0].strIngredient7);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient8 !== null && data.drinks[0].strMeasure8 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure8 + " " + data.drinks[0].strIngredient8);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient9 !== null && data.drinks[0].strMeasure9 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure9 + " " + data.drinks[0].strIngredient9);
    $(".ingredient-list").append(ingredientList);
  }
  if (data.drinks[0].strIngredient10 !== null && data.drinks[0].strMeasure10 !== null) {
    var ingredientList = $("<li>").append(data.drinks[0].strMeasure10 + " " + data.drinks[0].strIngredient10);
    $(".ingredient-list").append(ingredientList);
  }
  $(".ingredient-list").append("Intructions: " + data.drinks[0].strInstructions);

})
})


//Doug: Title Animation
function ShowOnScroll() {
  this.toShow = [];
  this.nextEventY = undefined;
}

ShowOnScroll.prototype.show = function (e) {
  e.style.display = "";
};

ShowOnScroll.prototype.hide = function (e) {
  e.style.display = "none";
};

ShowOnScroll.prototype.getTop = function (e) {
  if (e.Top != undefined && e.Top != 0) {
    return e.Top;
  }
  var top = 0;
  var iter = e;
  do {
    top += iter.offsetTop || 0;
    iter = iter.offsetParent;
  } while (iter);
  e.Top = top;
  return top;
};

ShowOnScroll.prototype.onScroll = function () {
  var screenBottom = window.pageYOffset + window.innerHeight;
  if (this.nextEventY == undefined || this.nextEventY > screenBottom) {
    return;
  }
  this.nextEventY = undefined;
  for (var i = 0; i < this.toShow.length; i++) {
    var e = this.toShow[i];
    var top = this.getTop(e);
    if (top < screenBottom) {
      this.show(e);
      this.toShow.shift();
      i--;
    } else {
      this.nextEventY = top;
      break;
    }
  }
};

ShowOnScroll.prototype.resetScrolling = function () {
  // Clear state
  var screenBottom = window.pageYOffset + window.innerHeight;
  for (var i = 0; i < this.toShow.length; i++) {
    var e = this.toShow[i];
    this.show(e);
  }
  this.toShow = [];
  this.nextEventY == undefined;

  // Collect items
  var itemsToShowOnScroll = Array.prototype.slice.call(document.getElementsByTagName("*"));
  itemsToShowOnScroll = itemsToShowOnScroll.filter(function (e) {
    return e.getAttribute("show-on-scroll") != undefined;
  });
  var getTop = this.getTop;
  itemsToShowOnScroll.sort(function (a, b) {
    return getTop(a) - getTop(b);
  });
  for (var i = 0; i < itemsToShowOnScroll.length; i++) {
    var e = itemsToShowOnScroll[i];
    var top = this.getTop(e);
    if (top < screenBottom) {
      continue;
    }
    this.toShow.push(e);
    this.hide(e);
    this.nextEventY = this.nextEventY != undefined ? this.nextEventY : top;
  }
};

ShowOnScroll.prototype.handleEvent = function (e) {
  switch (e.type) {
    case "scroll":
      this.onScroll();
      break;
    case "resize":
      this.resetScrolling();
      break;
  }
};

ShowOnScroll.prototype.init = function () {
  this.resetScrolling();
  window.addEventListener("scroll", this);
  window.addEventListener("resize", this);
};


setTimeout(function () {
  var instShowOnScroll = new ShowOnScroll();
  instShowOnScroll.init();
}, 250);

//   ELAINE: Drink of the Week function & modal

$(".drinkweekbtn").click(function() {
$(".ingredient-list").empty();
$(".drink-name").empty();
var drinkOfWeek = $(this).text()
$("#drink-week-ingredient").addClass("is-active");
$.ajax({
  method: 'GET',
  url: 'https://api.api-ninjas.com/v1/cocktail?name=' + drinkOfWeek,
  headers: { 'X-Api-Key': 'hMzMH+MBft5+cJHF/Lmajw==dN7wK4DXcPXKuOva'},
  contentType: 'application/json',
  success: function(result) {
    var ingredients = result[0].ingredients;
    for (var i = 0; i < ingredients.length; i++) {   
      var ingredientList = $("<li>").text(ingredients[i]);
      $(".ingredient-list").append(ingredientList);
    }
    $(".ingredient-list").append("Intructions: " + result[0].instructions);
  },
  error: function ajaxError(jqXHR) {
    console.error('Error: ', jqXHR.responseText);
  }
});
})

// DOUG: Search Bar
var searchBtn = $(".search-btn");
searchBtn.click(function() {
  $(".search-ingredients").empty();
  var searchInput = $(".search-input").val();
  if (searchInput == "") {
  } else {
    console.log(searchInput)
      $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/cocktail?name=' + searchInput,
        headers: { 'X-Api-Key': 'hMzMH+MBft5+cJHF/Lmajw==dN7wK4DXcPXKuOva'},
        contentType: 'application/json',
        success: function(result) {
          var ingredients = result[0].ingredients;
          console.log(ingredients)
          $(".search-ingredients").text("Ingredients:")
          for (var i = 0; i < ingredients.length; i++) {   
            var searchIngredient = $("<li>").text(ingredients[i]);
            $(".search-ingredients").append(searchIngredient);
          }
          $(".search-ingredients").append("Intructions: " + result[0].instructions);
        },
        error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
        }
      });    
  }
})

