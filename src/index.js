const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");
const video3 = document.getElementById("video-3");
const paraVideo = document.getElementById("para-video");
const video1Text = document.getElementById("video-text-1");
const video2Text = document.getElementById("video-text-2");
const video3Text = document.getElementById("video-text-3");
const menuBtn = document.getElementsByClassName("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

let isScrolling = false;

menuOverlay.addEventListener("click", handleMenuClose);

// video1.addEventListener("ended", onVideoOneEnd);
changeVideoOnSmallScreens();

video1Text.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

video2Text.addEventListener("click", () => {
  console.log("hi");
  window.scrollTo({
    top: window.innerHeight * 2,
    behavior: "smooth",
  });
});

video3Text.addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight * 3,
    behavior: "smooth",
  });
});

setVideoTextFadeInTime(video1, video1Text, 3);
setVideoTextFadeInTime(video2, video2Text, 5);
setVideoTextFadeInTime(video3, video3Text, 5);

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  // playVideoWhenInView(video1);
  playVideoWhenInView(video2);
  playVideoWhenInView(video3);
  playVideoWhenInView(paraVideo);
}

function playVideoWhenInView(videoElem) {
  if (
    videoElem.getBoundingClientRect().top <= window.innerHeight * 0.25 &&
    videoElem.getBoundingClientRect().top >= -window.innerHeight * 0.25
  ) {
    videoElem.play();
  } else if (!videoElem.paused) {
    videoElem.pause();
  }
}

for (let i = 0; i < menuBtn.length; i++) {
  const element = menuBtn[i];
  console.log(element);
  element.addEventListener("click", handleMenuOpen);
}

function handleMenuOpen(e) {
  menuOverlay.style.opacity = 1;
  menuOverlay.style.pointerEvents = "initial";
}

function handleMenuClose(e) {
  menuOverlay.style.opacity = 0;
  menuOverlay.style.pointerEvents = "none";
}

function setVideoTextFadeInTime(videoElem, textElem, time) {
  console.log(videoElem, textElem, time);

  videoElem.addEventListener("timeupdate", handleTimeUpdate);
  function handleTimeUpdate(e) {
    // console.log(videoElem.id, videoElem.currentTime);
    if (videoElem.currentTime > time) {
      textElem.style.opacity = 1;
      videoElem.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }
}

function onVideoOneEnd() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

function changeVideoOnSmallScreens() {
  if(window.innerWidth <= 480) {
    video1.src = 'videos/home-1-small.mp4'
    video2.src = 'videos/home-2-small.mp4'
    video3.src = 'videos/home-3-small.mp4'
    paraVideo.src = 'videos/home-4-small.mp4'
  }
}

// setTimeout(() => {
//   window.scrollTo({
//     top: 0,
//   });
// }, 100);