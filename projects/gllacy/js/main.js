(function() {
  var product1 = document.querySelector("#product-1");
  var product2 = document.querySelector("#product-2");
  var product3 = document.querySelector("#product-3");
  var body = document.querySelector("body");

  product1.addEventListener("click", function(evt) {
      body.classList.add("js-slider-1");
      body.classList.remove("js-slider-2");
      body.classList.remove("js-slider-3");
  });

  product2.addEventListener("click", function(evt) {
      body.classList.add("js-slider-2");
      body.classList.remove("js-slider-1");
      body.classList.remove("js-slider-3");
  });

  product3.addEventListener("click", function(evt) {
      body.classList.add("js-slider-3");
      body.classList.remove("js-slider-1");
      body.classList.remove("js-slider-2");
  });
})();
(function() {
  var feedback = document.querySelector(".feedback_button");
  var popup = document.querySelector(".modal-feedback");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-feedback__button-close");

  var form = document.querySelector(".modal-feedback__form");
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var message = popup.querySelector("[name=message]");

  feedback.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      popup.classList.add("modal-animation-bounce")
      overlay.classList.add("modal-show");
  });

  close.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-animation-error");
      overlay.classList.remove("modal-show");
  });

  form.addEventListener("submit", function(evt) {
      if (!name.value || !email.value || !message.value) {
          evt.preventDefault();
          popup.classList.remove("modal-animation-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-animation-error");
      }
  });

  window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
          if (popup.classList.contains("modal-show")) {
              evt.preventDefault();
              popup.classList.remove("modal-show");
              popup.classList.remove("modal-animation-error");
              overlay.classList.remove("modal-show");
          }
      }
  });

})();
