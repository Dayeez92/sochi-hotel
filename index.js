const navLink = document.querySelectorAll('.nav-link');

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-menu").style.top = "0";
  } else {
    document.getElementById("navigation-menu").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function img(anything) {
    document.querySelector('.slide').src = anything;
  };

  function change(change) {
    const line = document.querySelector('.image');
    line.style.background = change;
  };
  const hambuger = document.querySelector('.hambuger');
  const navMenu = document.querySelector('.nav-menu');

  hambuger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  var accItem = document.getElementsByClassName('accordionItem');
  var accHD = document.getElementsByClassName('accordionIHeading');

  for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
  }

  function toggleItem() {
    var itemClass = this.parentNode.className;
    for (var i = 0; i < accItem.length; i++) {
      accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
      this.parentNode.className = 'accordionItem open';
    }
  }
