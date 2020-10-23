"use strict";
window.addEventListener("keydown", handleEvent);

function handleEvent(event) {
  //   console.log(event);
  //   console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key ="${event.keyCode}"]`);
  //   console.log(audio);
  if (!audio) {
    return;
  } //if there si no audio, stop executing the function and do nothing!
  audio.currentTime = 0; //rewind to start if pressing the same key before the audio finish
  audio.play(); //rules for .play(): first the audios need to be in the same folder as the app, in case they are not it needs the crossOrigin="anonymous" inside audio tag, but in my case even with the crossOrigin, it wasn't working... so better to have the audios inside the folder.
  const key = document.querySelector(`.key[data-key ="${event.keyCode}"]`);
  // console.log(key);
  // console.log(key.id);
  if (key.id % 2 === 0) {
    key.classList.add("color1");
  } else {
    key.classList.add("color2");
  }
  setTimeout(() => {
    key.classList.remove("color1", "color2");
  }, 1000);
}
