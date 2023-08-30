let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let links = document.querySelectorAll("nav a");

toggler.onclick = function () {
  nav.classList.add("open");
};

close.onclick = function () {
  this.parentElement.classList.remove("open");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
};

links.forEach(function (link) {
  link.onclick = function () {
    nav.classList.remove("open"); 

    let targetSectionId = this.getAttribute("data-target");

    
document.querySelector('#'+targetSectionId).scrollIntoView({
      behavior: "smooth",
    });
  };
});
