const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");
const video3 = document.getElementById("video-3");
const paraVideo = document.getElementById("para-video");
const video1Text = document.getElementById("video-text-1");
const video2Text = document.getElementById("video-text-2");
const video3Text = document.getElementById("video-text-3");
const menuBtn = document.getElementsByClassName("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");
const videoEnd = document.getElementById("video-end");

let paraVideoDone = false;
let firstVideoDone = false;

window.scrollTo({
  top: 0,
});
if (window.innerWidth > 600) {
  // document.body.style.overflow = "hidden";

  // menuOverlay.addEventListener("click", handleMenuClose);

  video1.addEventListener("ended", onVideoOneEnd);
  video2.addEventListener("ended", onVideoOneEnd);
  video3.addEventListener("ended", onVideoOneEnd);

  video1Text.addEventListener("click", () => {
    const getRect = video2.getBoundingClientRect();
    window.scrollTo({
      top: window.pageYOffset + getRect.top,
      behavior: "smooth",
    });
  });

  video2Text.addEventListener("click", () => {
    const getRect = video3.getBoundingClientRect();
    window.scrollTo({
      top: window.pageYOffset + getRect.top,
      behavior: "smooth",
    });
  });

  video3Text.addEventListener("click", () => {
    const getRect = videoEnd.getBoundingClientRect();
    window.scrollTo({
      top: window.pageYOffset + getRect.top,
      behavior: "smooth",
    });
  });

  setVideoTextFadeInTime(video1, video1Text, 3);
  setVideoTextFadeInTime(video2, video2Text, 5);
  setVideoTextFadeInTime(video3, video3Text, 5);

  video1.addEventListener("canplay", () => {
    window.scrollTo({
      top: 0,
    });
    video1.play();
    // playVideoWhenInView(video1);
  });

  video2.addEventListener("canplay", (e) => {
    playVideoWhenInView(video2);
  });
  video3.addEventListener("canplay", () => {
    playVideoWhenInView(video3);
  });
}

window.addEventListener("scroll", handleScroll);

paraVideo.addEventListener("ended", onVideoOneEnd);

paraVideo.addEventListener("canplay", () => {
  playVideoWhenInView(paraVideo);
});

function handleScroll() {
  if (window.innerWidth > 600) {
    playVideoWhenInView(video1);
    playVideoWhenInView(video2);
    playVideoWhenInView(video3);
  }
  playVideoWhenInView(paraVideo);
}

function playVideoWhenInView(videoElem) {
  const videoRect = videoElem.getBoundingClientRect();
  const offset = 0.5;
  if (
    videoRect.top <= window.innerHeight * offset &&
    videoRect.top >= -window.innerHeight * offset
  ) {
    if (videoElem.id === "para-video" && paraVideoDone) {
      videoElem.pause();
    } else if (videoElem.id === "video-1" && firstVideoDone) {
      videoElem.pause();
    } else {
      videoElem.play();
    }
  } else if (!videoElem.paused) {
    videoElem.pause();
  }
}

function setVideoTextFadeInTime(videoElem, textElem, time) {
  videoElem.addEventListener("timeupdate", handleTimeUpdate);
  function handleTimeUpdate(e) {
    if (videoElem.currentTime > time) {
      textElem.style.opacity = 1;
      videoElem.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }
}

function onVideoOneEnd(e) {
  if (e.target.id === "para-video") {
    // paraVideoDone = true;
    return;
  } else if (e.target.id === "video-1") {
    firstVideoDone = true;
  }
  const targetRect = e.target.getBoundingClientRect();
  // document.body.style.overflow = "initial";

  window.scrollTo({
    top: window.pageYOffset + targetRect.top + targetRect.height,
    behavior: "smooth",
  });
  if (e.target.id == "video-3") {
    document.body.style.overflow = "initial";
  }
}

changeVideoOnSmallScreens();

function changeVideoOnSmallScreens() {
  if (window.innerWidth <= 480) {
    // video1.src = "videos/home-1-small.mp4";
    // video2.src = "videos/home-2-small.mp4";
    // video3.src = "videos/home-3-small.mp4";
    paraVideo.src = "videos/home-4-small.mp4";
  }
}
// setTimeout(() => {
//   window.scrollTo({
//     top: 0,
//   });
// }, 100);
