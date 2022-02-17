const gallery = [].slice.call(document.querySelectorAll(".gallery-item"));
let currentImage;
const arrowNext = document.getElementById("arrow-next");
const arrowPrevious = document.getElementById("arrow-previous");

const showPhoto = (e) => {
  //Hide the gallery
  e.path[1].style.display = "none";

  //Show the popup Box
  const galleryPopUp = document.getElementById("gallery-container-popup");
  /*  galleryPopUp.style.display = "block"; */
  galleryPopUp.style.visibility = "visible";
  galleryPopUp.style.opacity = "1";
  galleryPopUp.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });

  //Show the pressed image
  currentImage = e.target.id;
  pressNext();
  e.target.src = currentImage;
  console.log(e.target.src);
};

//Show Next Image
const pressNext = () => ++currentImage;

//Show Previous Image
const pressPrevious = () => {};

gallery.forEach((image) => image.addEventListener("click", showPhoto));
