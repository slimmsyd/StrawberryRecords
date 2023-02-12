const items = document.querySelectorAll(".artist");
function handleVisibilityChange(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
   
    }
  });
}

const observer = new IntersectionObserver(handleVisibilityChange, {
  threshold: [0, 0.5, 1],
});

items.forEach((item) => {
  observer.observe(item);
});




// Nav bar scroll change code 

const navbar = document.querySelector(".nav");

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 1)";
  }
};

// Menu Open Code 

const menu = document.querySelector('.menu');
const nav_links = document.querySelector(".nav-links");

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    navbar.classList.toggle('nav-expand');
    nav_links.classList.toggle("displayFlex")
});

const navClick = document.querySelectorAll(".navLinks")

navClick.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle('open');
        navbar.classList.toggle('nav-expand');
        nav_links.classList.toggle("displayFlex");
    });
  });

//Change backdrop code 

const bannerForeground = document.querySelector(".banner-foreground");

// setInterval(function() {
//     console.log("this is playing")
//   bannerForeground.classList.toggle("activated");
// }, 9000);


