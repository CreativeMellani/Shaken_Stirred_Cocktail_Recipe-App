


//MJ:When asked dirnking age 
//Then use is prensented with alcholic 

//MJ:This function makes the modal popup once the browser is opened

// function openModalOnRefresh(){
//     const modalDiv = document.getElementById('modal-js-example')
//     // modalDiv.classList.add('is-active');
// }
// openModalOnRefresh()


//MJ:Age Restriction Modal
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




//MJ: Drink Randomizer
const getDrinkBtn = document.getElementById ("drinkRandomizer");
const cocktailContainer = document.getElementById ("cocktails");

// getDrinkBtn.addEventListener("click",function(){
//   fetch('https://api.api-ninjas.com/v1/cocktail?name=')
//     .then(res => res.json())
//     .then(res => {
//     createDrink (res.drinks[0])
//     })
// })

// function createDrink(cocktails){
//   cocktailContainer.innerHTML = `
//     <div class="row">
//       <div class="column five">
//       />
//       </div>
//     </div>
//   `;

// }



//MJ: Functions to open and close a modal
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


//   ELAINE: Drink of the Week fucntion (I commented out  fetch api as it disabled the modal)
var drinkOne = document.getElementById("drinkweek1")
drinkOne.addEventListener("click", function(){
    
})
// MJ: adding to Elain's code to call the api and randomize the cocktail recipe
function callCocktailApi(name){
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
    headers: { 'X-Api-Key': 'hMzMH+MBft5+cJHF/Lmajw==dN7wK4DXcPXKuOva'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

  // fetch('https://api.api-ninjas.com/v1/cocktail?name='+name, {
  //     method: 'GET'
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'X-Api-Key': 'hMzMH+MBft5+cJHF/Lmajw==dN7wK4DXcPXKuOva'
  //       }
  // })
  // .then(function (response) {
  //   console.log(response)
  //     return response.json()
  // }).then(function(data) {
  //     console.log(data)
  // })
}

let randomizeDrinkBtn = document.getElementById('randomizeDrinkBtn')

randomizeDrinkBtn.addEventListener('click', callCocktailApi('margarita'))



// fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
// .then(function (response) {
//     return response.json()
// }).then(function(data) {
//     console.log(data)
// })

//  ELAINE: I'm going to use jquery on this one as backup since I haven't had luck pulling the API Ninja using fetch
// $.ajax({
//     // method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
//     headers: { 'X-Api-Key': 'hMzMH+MBft5+cJHF/Lmajw==dN7wK4DXcPXKuOva'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
