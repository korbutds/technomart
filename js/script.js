var userLogin = document.querySelector(".log-btn");
var loggedMenu = document.querySelector("body");
var userLogout = document.querySelector(".logout-btn");

var writeBtn = document.querySelector(".write-btn");
var writePopUp = document.querySelector(".write-pop-up");
var writeClose = document.querySelector(".write-pop-up .close-btn");
var popupCloseClass = "pop-up-close";
var popupErrorClass = "pop-up-error";

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
};

userLogin.addEventListener("click", function(evt) {
  evt.preventDefault();
  loggedMenu.classList.add("logged-in");
});

userLogout.addEventListener("click", function(evt) {
  evt.preventDefault();
  loggedMenu.classList.remove("logged-in");
});

if (writePopUp) {
  writeBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopUp.classList.remove(popupCloseClass);
    if (storageName) {
      userName.value = storageName;
      email.value = storageEmail;
      letter.focus();
    } else {
      userName.focus();
    };
  });

  writeClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writePopUp.classList.add(popupCloseClass);
    writePopUp.classList.remove(popupErrorClass);
  });

  form.addEventListener("submit", function(evt) {
    if (!userName.value || !email.value || !letter.value) {
      evt.preventDefault();
      writePopUp.classList.remove(popupErrorClass);
      writePopUp.offsetWidth = writePopUp.offsetWidth;
      writePopUp.classList.add(popupErrorClass);
    } else  {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("email", email.value);
      };
    };
  });
};

if (mapPopUp) {
  mapButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopUp.classList.add(popupCloseClass);
    mapPopUp.classList.remove(popupCloseClass);
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopUp.classList.add(popupCloseClass);
  });
};

for (var i=0; i < basketButton.length; i++) {
  basketButton[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopUp.classList.remove(popupCloseClass);
  });
};

cartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopUp.classList.add(popupCloseClass);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writePopUp && !writePopUp.classList.contains(popupCloseClass)) {
      writePopUp.classList.add(popupCloseClass);
      writePopUp.classList.remove(popupErrorClass);
    };
    if (mapPopUp && !mapPopUp.classList.contains(popupCloseClass)) {
      mapPopUp.classList.add(popupCloseClass);
    };
    if (cartPopUp && !cartPopUp.classList.contains(popupCloseClass)) {
      cartPopUp.classList.add(popupCloseClass);
    };
  };
});
