const images = [].slice.call(document.querySelectorAll(".gallery-item"));
let currentImage;
const arrowNext = document.getElementById("arrow-next");
const arrowPrevious = document.getElementById("arrow-previous");

const showPhoto = (e) => {
  //Hide the gallery
  e.path[1].style.display = "none";

  //Display the popup Box at the center of the view
  const galleryPopUp = document.getElementById("gallery-container-popup");
  /*  galleryPopUp.style.display = "block"; */
  galleryPopUp.style.visibility = "visible";
  galleryPopUp.style.opacity = "1";
  galleryPopUp.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });

  //------------------ Show the pressed image ------------------
  //get the element img from #gallery-image-popup
  popUpImage = document.querySelector("#gallery-image-popup img");

  //set currentImageID with the id of the selected image
  currentImageID = e.target.querySelector("img").id;

  //change the src of the image that is displayed with the selected one
  popUpImage.src = "../img/" + currentImageID + ".jpg";
  console.log(popUpImage);
};

//Show Next Image
const pressNext = () => {
  if (currentImageID < 9) ++currentImageID;
  else currentImageID = 1;
  console.log("Next");
  //get the element img from #gallery-image-popup
  popUpImage = document.querySelector("#gallery-image-popup img");
  //change the src of the image that is displayed with the selected one
  popUpImage.src = "../img/" + currentImageID + ".jpg";
  console.log(popUpImage);
};

//Show Previous Image
const pressPrevious = () => {
  --currentImageID;
  //get the element img from #gallery-image-popup
  popUpImage = document.querySelector("#gallery-image-popup img");
  //change the src of the image that is displayed with the selected one
  popUpImage.src = "../img/" + currentImageID + ".jpg";
  console.log(popUpImage);
  console.log("Previous");
};

images.forEach((image) => image.addEventListener("click", showPhoto));
arrowNext.addEventListener("click", pressNext);
arrowPrevious.addEventListener("click", pressPrevious);
