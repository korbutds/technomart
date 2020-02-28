var writeBtn = document.querySelector(".write-btn");
var writePopUp = document.querySelector(".write-pop-up");
var closeWrite = document.querySelector(".write-pop-up .close-btn");
var popupClose = "pop-up-close";
var popupError = "pop-up-error";

var form = document.querySelector(".write-form");
var userName = document.querySelector("#write-name");
var email = document.querySelector("#write-email");
var letter = document.querySelector("#letter-us");

var isStorageSupport = true;
var storageName = localStorage.getItem("");
var storageEmail = localStorage.getItem("");

var mapButton = document.querySelector(".map-section button");
var mapPopUp = document.querySelector(".map-pop-up");
var mapClose = document.querySelector(".map-pop-up .close-btn");

var basketButton = document.querySelectorAll(".basket-btn");
var cartPopUp = document.querySelector(".cart-section");
var cartClose = document.querySelector(".cart-section .close-btn");

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (writePopUp) {
  writeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopUp.classList.remove(popupClose);
    if (storageName) {
      userName.value = storageName;
      email.value = storageEmail;
      letter.focus();
    } else {
      userName.focus();
    }
  })
  closeWrite.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopUp.classList.add(popupClose);
    writePopUp.classList.remove(popupError);
  })
  form.addEventListener("submit", function(evt) {
    if (!userName.value || !email.value || !letter.value) {
      evt.preventDefault();
      writePopUp.classList.remove(popupError);
      writePopUp.offsetWidth = writePopUp.offsetWidth;
      writePopUp.classList.add(popupError);
    } else  {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("email", email.value);
      }
    }
  })
}

if (mapPopUp) {
  mapButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopUp.classList.add(popupClose);
    mapPopUp.classList.remove(popupClose);
  })

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopUp.classList.add(popupClose);
  })
}

for (var i=0; i < basketButton.length; i++) {
  basketButton[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopUp.classList.remove(popupClose);
  })
}

cartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopUp.classList.add(popupClose);
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writePopUp && !writePopUp.classList.contains(popupClose)) {
      writePopUp.classList.add(popupClose);
      writePopUp.classList.remove(popupError);
    }
    if (mapPopUp && !mapPopUp.classList.contains(popupClose)) {
      mapPopUp.classList.add(popupClose);
    }
    if (cartPopUp && !cartPopUp.classList.contains(popupClose)) {
      cartPopUp.classList.add(popupClose);
    }
  }
});
