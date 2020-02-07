export const projectPageLoad = () => {
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
