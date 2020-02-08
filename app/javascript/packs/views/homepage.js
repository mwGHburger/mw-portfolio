export const homePageLoad = () => {
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

export const homeCardClick = () => {
  const homeCards = Array.from(document.querySelectorAll(".home-card"));
  homeCards.forEach((card, i) => {
    setTimeout(() => {
      // iterate through each card in the list
      // apply transition to card
      card.classList.remove("home-page-load");
    }, i * 180);
  });
};

export const getCurrentTime = () => {
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
