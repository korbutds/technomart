var mapBtn = document.querySelector('.map-btn');
var writePopUp = document.querySelector('.write-pop-up');
var closeBtn = writePopUp.querySelector('.close-btn');

var form = writePopUp.querySelector('form');
var userName = writePopUp.querySelector('[name = name]');
var email = writePopUp.querySelector('[name = e-mail]');
var letter = writePopUp.querySelector('[name = text-letter]');

var isStorageSupport = true;
var storage = localStorage.getItem('');

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

mapBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  writePopUp.classList.remove('pop-up-close');
  if (storage) {
    email.focus();
  } else {
    userName.focus();
  }
})

closeBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  writePopUp.classList.add('pop-up-close');
  writePopUp.classList.remove('pop-up-error');
})

form.addEventListener('submit', function(evt) {
  if (!userName.value || !email.value || text-letter.value) {
    evt.preventDefault();
    writePopUp.classList.remove('pop-up-error');
    writePopUp.offsetWidth = writePopUp.offsetWidth;
    writePopUp.classList.add('pop-up-error');
  } else  {
    if (isStorageSupport) {
    localStorage.setItem('userName', userName.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writePopUp.classList.contains("pop-up-close")) {

    } else {
      writePopUp.classList.add("pop-up-close");
      writePopUp.classList.remove('pop-up-error');
    }
  }
});
