import data from "./data.js";

// Ascessing the DOM
let sliderContainer = document.querySelector(".slider-content");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");

let people = [...data];

if (data.length == 1) {
  leftBtn.style.display = "none";
  rightBtn.style.display = "none";
}

if(data.lenght == 2){
  people = [...data,...data];
}

sliderContainer.innerHTML = people
  .map((e, slideIndex) => {
    let position = "next";
    if (slideIndex == 0) {
      position = "active";
    }
    if (slideIndex == data.length - 1) {
      position = "last";
    }
    if (data.lenght <= 1) {
      position = "active";
    }

    return `
    <article class="slide ${position}">
          <img src="${e.img}" alt="${e.name}" />
          <h3 class="name">${e.name}</h3>
          <h6 class="role">${e.job}</h6>
          <p class="description">
           ${e.text}
          </p>
          <div class="quote-icon">
            <i class="ri-double-quotes-r"></i>
          </div>
        </article>
    `;
  })
  .join(" ");

// Function Start Slide
const startSlide = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = sliderContainer.firstElementChild;
  }

  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");
  if (type == "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;

    if (!next) {
      next = sliderContainer.lastElementChild;
    }
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  next.classList.add("active");
  last.classList.add("next");
};

leftBtn.addEventListener("click", () => {
  startSlide("prev");
});
rightBtn.addEventListener("click", () => {
  startSlide();
});
