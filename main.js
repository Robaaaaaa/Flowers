
window.onload = () => {
  const audio = document.getElementById("myAudio");
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);
  audio.play();
};
