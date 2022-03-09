/* const woman = document.getElementById("woman");
const olive = document.getElementById("olives");
let harvestInterval;
const olives = 5;

const harvest = () => {
  harvestInterval = setInterval(() => {
    let div = document.createElement("div");
    let oliveImages = [];
    for (let i = 0; i < olives; ++i) {
      oliveImages[i] = document.createElement("img");
      oliveImages[i].src = "../img/olive.jpg";
      olive.src = "../img/olive.jpg";
    }
    document.getElementById("welcome").append(div);
  }, 3000);

  olive.src = "";
};

woman.addEventListener("click", harvest); */

gsap.to("#olive1", { duration: 2, y: "303px", ease: "bounce", delay: 8 });
gsap.to("#olive2", { duration: 2, y: "590px", ease: "bounce", delay: 8 });
gsap.to("#olive3", { duration: 2, y: "590px", ease: "bounce", delay: 9 });
gsap.to("#olive4", { duration: 2, y: "590px", ease: "bounce", delay: 7 });
gsap.to("#olive5", { duration: 2, y: "590px", ease: "bounce", delay: 7 });
gsap.to("#olive6", { duration: 2, y: "590px", ease: "bounce", delay: 7 });
gsap.to("#olive7", { duration: 2, y: "590px", ease: "bounce", delay: 8 });
gsap.to("#olive8", { duration: 2, y: "590px", ease: "bounce", delay: 10 });
gsap.to("#olive9", { duration: 2, y: "590px", ease: "bounce", delay: 10 });
gsap.to("#olive10", { duration: 1.8, y: "146px", ease: "bounce", delay: 8 });
gsap.to("#olive11", { duration: 2, y: "590px", ease: "bounce", delay: 9 });
gsap.to("#olive12", { duration: 2, y: "590px", ease: "bounce", delay: 7 });
gsap.to("#olive13", { duration: 2, y: "590px", ease: "bounce", delay: 7 });
gsap.to("#olive14", { duration: 2, y: "590px", ease: "bounce", delay: 7 });
gsap.to("#olive15", { duration: 2, y: "590px", ease: "bounce", delay: 10 });
gsap.to("#olive16", { duration: 2, y: "590px", ease: "bounce", delay: 10 });
