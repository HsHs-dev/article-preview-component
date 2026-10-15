/* Selectors */
const avatar = document.querySelector(".avatar")
const avatarInfo = avatar.querySelector(".avatar-info")
const share = avatar.querySelector(".share")
const shareButton = avatar.querySelector("button")

/* Events Hanlers */
function toggleVisibility() {
  avatar.classList.toggle("visible")
  avatarInfo.classList.toggle("visible")
  share.classList.toggle("visible")
  shareButton.classList.toggle("visible")
}

/* Event Listeners */
shareButton.addEventListener("click", toggleVisibility)