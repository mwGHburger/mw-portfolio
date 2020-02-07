import * as homePage from "../views/homepage";
import * as aboutPage from "../views/aboutpage";
import * as portfolioPage from "../views/portfoliopage";

// LOAD event
window.addEventListener("load", e => {
  // Homepage
  homePage.homePageLoad();
  // Portfolio page
  portfolioPage.projectPageLoad();
  // About page
  aboutPage.aboutPageLoad();
});

// CLICK event
window.addEventListener("click", e => {
  console.log(e.target.matches(".card-content, .card-content *"));
  if (e.target.matches(".card-content, .card-content *")) {
    homePage.homeCardClick();
    // e.preventDefault();
  }
});

// HOVER event
window.addEventListener("hover", e => {
  if (e.target.matches(".card-content, .card-content *")) {
    console.log("todo");
  }
});

homePage.getCurrentTime();
setInterval(homePage.getCurrentTime, 2000);

// MOUSEMOVE event
// window.addEventListener("mousemove", e => {
//     if (e.target.matches(".card-content")) {
//       const rect = e.target.getBoundingClientRect();

//       // calculating the relative position of the mouse within the element it is in
//       let y = (e.clientY - rect.top) / e.target.offsetHeight;
//       let x = (e.clientX - rect.left) / e.target.offsetWidth;

//       // format
//       if (x === 0.5) {
//         x = 0;
//       } else if (x < 0.5) {
//         x = (1 - x) * -1;
//       }

//       if (y === 0.5) {
//         y = 0;
//       } else if (y < 0.5) {
//         y = 1 - y;
//       } else if (y > 0.5) {
//         y = y * -1;
//       }

//       console.log(x * 5);
//       console.log(y * 5);
//       e.target.style.transition = "0.1s";
//       e.target.style.transform = `skew(${y * 5}deg, ${x * 5}deg)`;
//     }
//   });
