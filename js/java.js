
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var whiteBg = document.getElementById('js-white-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  whiteBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();