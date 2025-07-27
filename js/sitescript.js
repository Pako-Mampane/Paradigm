
document.addEventListener('DOMContentLoaded', function() {
// Handle navbar scrolling
// window.addEventListener('scroll', function() {
//   var navbar = document.getElementById('custom-navbar');
//   var heroHeight = document.querySelector('#home').offsetHeight;
//   var triggerPoint = heroHeight * 0.8;

//   if (window.scrollY > triggerPoint) {
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });

// Heading animations
var headings = document.querySelectorAll('h1, h2');

function revealHeadings() {
    var windowHeight = window.innerHeight;
    headings.forEach(function(heading) {
    var elementTop = heading.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) { // Offset for triggering
        heading.classList.add('visible');
    }
    });
}

var cards = document.querySelectorAll('.card');
function revealCards() {
    var windowHeight = window.innerHeight;
    cards.forEach(function(card, index) {
    var elementTop = card.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) { // Offset for triggering
        card.classList.add('visible');
    }
    });
}

function mobileMenu(){
    var menuToggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function(){
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('clicked');
})
}

function bacToTop(){
  var backToTopButton = document.getElementById("backToTop");

  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

window.addEventListener('scroll', function(){
    revealHeadings();
    revealCards();
});

bacToTop();
mobileMenu();
revealHeadings(); 
revealCards();
});
