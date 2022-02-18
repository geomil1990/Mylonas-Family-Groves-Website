const images = [].slice.call(document.querySelectorAll(".gallery-item"));
let currentImageID;
const arrowNext = document.getElementById("arrow-next");
const arrowPrevious = document.getElementById("arrow-previous");
const playBtn = document.getElementById("play");
/* const pauseBtn = document.getElementById("pause"); */
const stopBtn = document.getElementById("stop");
const ppcBtns = document.getElementById("play-pause-cancel");
const galleryPopUp = document.getElementById("gallery-container-popup");
const gallery = document.getElementById("gallery-container");
let playIcon = document.querySelector("#play img");
let pauseicon = document.querySelector("#pause img");
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
  clearInterval(myInterval);
  //Use the alt attribute in order to check the state of the button
  if (playIcon.alt === "play") {
    //change the image and the attribute alt of the button
    playIcon.src = "../img/pause-24px.png";
    playIcon.alt = "pause";
    myInterval = setInterval(() => {
      //get the element img from #gallery-image-popup
      popUpImage = document.querySelector("#gallery-image-popup img");
      //change the src of the image that is displayed with the selected one
      popUpImage.src = "../img/" + currentImageID + ".jpg";
      ++currentImageID;
      if (currentImageID >= 10) currentImageID = 1;
      console.log(currentImageID);
      console.log(playIcon.alt);
    }, 3000);
  } else if (playIcon.alt === "pause") {
    //change the image and the attribute alt of the button
    playIcon.src = "../img/play-24px.png";
    playIcon.alt = "play";
    //clear the timer
    clearInterval(myInterval);
    console.log(playIcon.alt);
  }
};

//Pause
const pause = () => {
  clearInterval(myInterval);
};

//Stop
const stop = () => {
  //clear Interval in order to stop the timer
  clearInterval(myInterval);
  //Show the first image
  currentImageID = 1;
  //get the element img from #gallery-image-popup
  popUpImage = document.querySelector("#gallery-image-popup img");
  //change the src of the image that is displayed with the selected one
  popUpImage.src = "../img/" + currentImageID + ".jpg";
};

//Cancel and return to the Gallery
const goBack = () => {
  //clear Interval in order to stop the timer
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
  //Stop Displaying all the buttons
  ppcBtns.style.visibility = "hidden";
};

images.forEach((image) => image.addEventListener("click", showPhoto));
arrowNext.addEventListener("click", pressNext);
arrowPrevious.addEventListener("click", pressPrevious);
playBtn.addEventListener("click", play);
/* pauseBtn.addEventListener("click", pause); */
stopBtn.addEventListener("click", stop);
cancel.addEventListener("click", goBack);
