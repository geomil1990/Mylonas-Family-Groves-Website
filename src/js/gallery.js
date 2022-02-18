const images = [].slice.call(document.querySelectorAll(".gallery-item"));
let currentImageID;
const arrowNext = document.getElementById("arrow-next");
const arrowPrevious = document.getElementById("arrow-previous");
const playBtn = document.getElementById("play");
const pause = document.getElementById("pause");
const ppcBtns = document.getElementById("play-pause-cancel");
const galleryPopUp = document.getElementById("gallery-container-popup");
const gallery = document.getElementById("gallery-container");
let myInterval;

const showPhoto = (e) => {
  //Hide the gallery
  gallery.style.display = "none";
  console.log(gallery);

  //Display the popup Box at the center of the view
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

  //Display cancel Button
  ppcBtns.style.visibility = "visible";
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
  if (currentImageID > 1) --currentImageID;
  else currentImageID = 9;

  //get the element img from #gallery-image-popup
  popUpImage = document.querySelector("#gallery-image-popup img");

  //change the src of the image that is displayed with the selected one
  popUpImage.src = "../img/" + currentImageID + ".jpg";
  console.log(popUpImage);
  console.log("Previous");
};

//Play
const play = () => {
  myInterval = setInterval(() => {
    /* while (currentImageID) { */
    //get the element img from #gallery-image-popup
    popUpImage = document.querySelector("#gallery-image-popup img");

    //change the src of the image that is displayed with the selected one
    popUpImage.src = "../img/" + currentImageID + ".jpg";
    ++currentImageID;
    if (currentImageID >= 10) currentImageID = 1;
    console.log(currentImageID);
    /*  } */
  }, 3000);
};

//Cancel and return to the Gallery
const goBack = () => {
  //clear Interval in order to stop the timer and close the window
  clearInterval(myInterval);
  currentImageID = 0;
  //Hide the popup Box
  galleryPopUp.style.visibility = "hidden";
  galleryPopUp.style.opacity = "0";

  //Display the gallery at the center of the view
  /*  galleryPopUp.style.display = "block"; */
  gallery.style.display = "grid";
  gallery.scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });

  //Stop Displaying cancel Button
  ppcBtns.style.visibility = "hidden";
};

images.forEach((image) => image.addEventListener("click", showPhoto));
arrowNext.addEventListener("click", pressNext);
arrowPrevious.addEventListener("click", pressPrevious);
playBtn.addEventListener("click", play);
cancel.addEventListener("click", goBack);
