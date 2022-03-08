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

gsap.from("#olive1", { duration: 1.5, y: "-1450%", ease: "bounce", delay: 5 });
gsap.from("#olive2", { duration: 1.5, y: "-1200%", ease: "bounce", delay: 5 });
gsap.from("#olive3", { duration: 1.5, y: "-1800%", ease: "bounce", delay: 6 });
gsap.from("#olive4", { duration: 1.5, y: "-1950%", ease: "bounce", delay: 7 });
gsap.from("#olive5", { duration: 1.5, y: "-1760%", ease: "bounce", delay: 7 });
gsap.from("#olive6", { duration: 1.5, y: "-1600%", ease: "bounce", delay: 7 });
gsap.from("#olive7", { duration: 1.5, y: "-1500%", ease: "bounce", delay: 8 });
gsap.from("#olive8", { duration: 1.5, y: "-1620%", ease: "bounce", delay: 8 });
gsap.from("#olive9", { duration: 1.5, y: "-1550%", ease: "bounce", delay: 5 });
gsap.from("#olive10", { duration: 1.5, y: "-1250%", ease: "bounce", delay: 5 });
gsap.from("#olive11", { duration: 1.5, y: "-1850%", ease: "bounce", delay: 6 });
gsap.from("#olive12", { duration: 1.5, y: "-1650%", ease: "bounce", delay: 7 });
gsap.from("#olive13", { duration: 1.5, y: "-1760%", ease: "bounce", delay: 7 });
gsap.from("#olive14", { duration: 1.5, y: "-1610%", ease: "bounce", delay: 7 });
gsap.from("#olive15", { duration: 1.5, y: "-1300%", ease: "bounce", delay: 8 });
gsap.from("#olive16", { duration: 1.5, y: "-1720%", ease: "bounce", delay: 8 });
