window.addEventListener("load", e => {
  // Homepage
  homePageLoad();
  // Portfolio page
  projectPageLoad();
  // About page
  aboutPageLoad();
});

window.addEventListener("click", e => {
  console.log(e.target.matches(".card-content, .card-content *"));
  if (e.target.matches(".card-content, .card-content *")) {
    homeCardClick();
    // e.preventDefault();
  }
});

const homeCardClick = () => {
  const homeCards = Array.from(document.querySelectorAll(".home-card"));
  homeCards.forEach((card, i) => {
    setTimeout(() => {
      // iterate through each card in the list
      // apply transition to card
      card.classList.remove("home-page-load");
    }, i * 180);
  });
};

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
    const clock = document.querySelector(".current-clock");
    setTimeout(() => {
      clock.classList.add("current-clock-load");
    }, 200 * document.querySelectorAll(".home-card").length);
    console.log(clock);
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

const getCurrentTime = () => {
  if (document.querySelector(".current-clock")) {
    const clock = document.querySelector(".current-clock");
    // clear the div
    clock.innerHTML = "";
    const date = new Date();
    let amPm = "AM";
    console.log(amPm);
    let hour = date.getHours();
    if (hour === 12) {
      amPm = "PM";
    } else if (hour > 12 && hour < 24) {
      hour = hour - 12;
      amPm = "PM";
    } else if (hour === 24) {
      hour = 0;
    }
    let minute = date.getMinutes();
    // format
    if (hour < 10) {
      hour = "0" + hour;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }

    clock.insertAdjacentHTML(
      "beforeend",
      `<h1>${hour}<span class="flicker">:</span>${minute} ${amPm}</h1>`
    );

    const flicker = document.querySelector(".flicker");
    setTimeout(() => {
      flicker.classList.add("active");
    }, 1500);
  }
};
getCurrentTime();
setInterval(getCurrentTime, 2000);
