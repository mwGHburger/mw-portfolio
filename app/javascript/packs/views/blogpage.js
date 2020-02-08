export const blogPageLoad = () => {
  if (document.querySelector(".blog-page")) {
    // animate in button
    const backButton = document.querySelector(".back-btn");
    backButton.classList.add("back-btn-load");
  }
};
