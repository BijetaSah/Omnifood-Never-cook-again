"use strict";
const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

// Making mobile navigation work
navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Implementing smoooth behaviour
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to different sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
