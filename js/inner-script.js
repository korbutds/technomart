
var popupClose = "pop-up-close";
var popupError = "pop-up-error"

var basketButton = document.querySelectorAll(".basket-btn");
var cartPopUp = document.querySelector(".cart-section");
var cartClose = cartPopUp.querySelector(".close-btn");


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!cartPopUp.classList.contains(popupClose)) {
      cartPopUp.classList.add(popupClose);
    }
  }
});

for (var i=0; i < basketButton.length; i++) {
basketButton[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopUp.classList.add(popupClose);
  cartPopUp.classList.remove(popupClose);
})
}

cartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopUp.classList.add(popupClose);
})
