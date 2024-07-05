const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", scrollRevealOption);

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 50,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 100,
});
// =============================scroll dected===============================

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      navbar.classList.add('nav--hidden');
    } else {
      // Scrolling up
      navbar.classList.remove('nav--hidden');
    }
    lastScrollY = window.scrollY;
  });

  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  const sidebar = document.getElementById('sidebar');

  hamburgerIcon.addEventListener('click', function () {
    sidebar.classList.add('active');
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', function () {
    sidebar.classList.remove('active');
    closeIcon.style.display = 'none';
    hamburgerIcon.style.display = 'block';
  });

  document.addEventListener('click', function (event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = hamburgerIcon.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnHamburger) {
      sidebar.classList.remove('active');
      closeIcon.style.display = 'none';
      hamburgerIcon.style.display = 'block';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.reveal');

  function checkVisibility() {
      for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var position = element.getBoundingClientRect();

          // If the element is in the viewport
          if (position.top < window.innerHeight) {
              element.classList.add('reveal');
          }
      }
  }

  // Initial check when the page loads
  checkVisibility();

  // Check when scrolling
  window.addEventListener('scroll', checkVisibility);
});





// ====================================nav=================================



// pop_up????????????????????????????????????????????????????????????????????

document.getElementById("downloadBtn").onclick = function() {
  document.getElementById("popupBox").style.display = "block";
}

// Hide the popup when the close button is clicked
document.getElementById("closePopup").onclick = function() {
  document.getElementById("popupBox").style.display = "none";
}

// Hide the popup when the user clicks outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById("popupBox")) {
    document.getElementById("popupBox").style.display = "none";
  }
}

//////////////////////////////////////////////////////////////////////////////////
// about container



// =====================================





