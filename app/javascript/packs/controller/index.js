window.addEventListener("load", e => {
  // Homepage
  homePageLoad();
  // Portfolio page
  projectPageLoad();
  // About page
  aboutPageLoad();
});

const homePageLoad = () => {
  console.log(document.querySelectorAll(".home-card").length > 0);
  if (document.querySelectorAll(".home-card").length > 0) {
    const homeCards = Array.from(document.querySelectorAll(".home-card"));
    homeCards.forEach((card, i) => {
      setTimeout(() => {
        // iterate through each card in the list
        // apply transition to card
        card.classList.add("home-page-load");
      }, i * 180);
    });
  }
};

const projectPageLoad = () => {
  if (document.querySelectorAll(".project-card").length > 0) {
    const projects = Array.from(document.querySelectorAll(".project-card"));
    const portfolioHeader = document.querySelector(".porfolio-title");
    const backButton = document.querySelector(".back-btn");
    console.log(backButton);
    setTimeout(() => {
      projects.forEach((card, i) => {
        setTimeout(() => {
          // iterate through each card in the list
          // apply transition to card
          card.classList.add("project-card-load");
        }, i * 250);
      });
    }, 1000);
    backButton.classList.add("back-btn-load");
    portfolioHeader.classList.add("porfolio-title-load");
  }
};

const aboutPageLoad = () => {
  if (document.querySelector(".profile-content")) {
    const backButton = document.querySelector(".back-btn");
    backButton.classList.add("back-btn-load");
  }
};

const backBtn = document.querySelector(".back-btn");
