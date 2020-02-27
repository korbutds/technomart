var mapButton = document.querySelector('.map-section button');
var mapPopUp = document.querySelector('.map-pop-up');
var mapClose = mapPopUp.querySelector('.close-btn');

mapButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopUp.classList.add('pop-up-close');
  mapPopUp.classList.remove('pop-up-close');
})

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopUp.classList.add("pop-up-close");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopUp.classList.contains("pop-up-close")) {

    } else {
      mapPopUp.classList.add("pop-up-close");
    }
  }
});
