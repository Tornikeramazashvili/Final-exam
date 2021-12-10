/* Slideshow starts from here ↓ */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

/* Slideshow ends here ↑ */

/* Sending Form Data(Post) starts here ↓ */

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("http://api.kesho.me/v1/user-test/contact", {
    method: "post",
    body: formData,
  })
    .then(function (respone) {
      return respone.text();
    })
    .then(function (text) {
      console.log(text);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// Sending Form Data(Post) ends here ↑
