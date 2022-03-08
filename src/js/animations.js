const woman = document.getElementById("woman");
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

woman.addEventListener("click", harvest);
