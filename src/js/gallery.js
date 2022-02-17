const gallery = [].slice.call(document.querySelectorAll(".gallery-item"));

const showPhoto = (e) => {
  //Hide the gallery
  e.path[1].style.display = "none";
  console.log(e);
  const galleryPopUp = document.getElementById("gallery-container-popup");
  galleryPopUp.style.visibility = "visible";
  galleryPopUp.style.opacity = "1";
  galleryPopUp.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
  console.log(galleryPopUp);
};

gallery.forEach((image) => image.addEventListener("click", showPhoto));
