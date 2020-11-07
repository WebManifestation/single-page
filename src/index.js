const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");
const video3 = document.getElementById("video-3");
const video1Text = document.getElementById("video-text-1");
const video2Text = document.getElementById("video-text-2");
const video3Text = document.getElementById("video-text-3");
const menuBtn = document.getElementsByClassName("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

menuOverlay.addEventListener("click", handleMenuClose);

setVideoTextFadeInTime(video1, video1Text, 3);
setVideoTextFadeInTime(video2, video2Text, 5);
setVideoTextFadeInTime(video3, video3Text, 5);
// video1.addEventListener("ended", onVideoOneEnd);

setTimeout(() => {
  window.scrollTo({
    top: 0,
  });
}, 100);

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
    console.log(videoElem.id, videoElem.currentTime);
    if (videoElem.currentTime > time) {
      textElem.style.opacity = 1;
      videoElem.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }
}

function onVideoOneEnd() {
  // if (hasScrolled) return;
  // window.scrollTo({
  //   top: topText.getBoundingClientRect().top,
  //   behavior: "smooth",
  // });
}
