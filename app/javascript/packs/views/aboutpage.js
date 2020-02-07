export const aboutPageLoad = () => {
  if (document.querySelector(".profile-content")) {
    // animate in button
    const backButton = document.querySelector(".back-btn");
    backButton.classList.add("back-btn-load");
    // animate in title
    const title = document.querySelector(".about-title");
    title.classList.add("about-title-load");
    // animate in pic
    const image = document.querySelector(".profile-pic");
    setTimeout(() => {
      image.classList.add("profile-pic-load");
    }, 1200);

    // animate in description
    const description = document.querySelector(".about-description");
    setTimeout(() => {
      description.classList.add("about-description-load");
    }, 1400);
  }
};
