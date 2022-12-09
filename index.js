const shareBtn = document.querySelector(".profile__share-btn");
const shareBtnPath = document.querySelector(".share-btn__path");
const shareDialog = document.querySelector(".profile__share-dialog");

shareBtn.addEventListener("click", () => {
  if (!shareDialog.classList.contains("profile__share-dialog--active")) {
    shareBtn.classList.add("profile__share-btn--active");
    shareBtnPath.classList.add("share-btn__path--active");
  } else {
    shareBtn.classList.remove("profile__share-btn--active");
    shareBtnPath.classList.remove("share-btn__path--active");
  }
  shareDialog.classList.toggle("profile__share-dialog--active");
});
