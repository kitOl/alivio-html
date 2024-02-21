const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");

mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

const videoBtn = document.querySelector("#video-story-btn");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
const videoOverlay = document.querySelector("#video-story-overlay");
const videoFile = document.querySelector("#video-story");

videoBtn.addEventListener("click", function () {
  function toggleOverlay(event) {
    if (event.type === "mouseleave") {
      videoOverlay.classList.add("hidden");
    } else {
      videoOverlay.classList.remove("hidden");
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoBtnIcon.src = "./img/story/pause-btn.svg";
    videoOverlay.classList.add("hidden");

    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;
  } else {
    videoFile.pause();
    videoBtnIcon.src = "./img/story/play-btn.svg";
    videoOverlay.classList.remove("hidden");

    videoOverlay.onmouseleave = null;
  }
});
