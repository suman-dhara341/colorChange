let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let link = document.querySelector(".link");

let color1 = "#613dcf";

let color2 = "#613dcf";

let colorChange = () => {
  let color = "#";
  let hexCode = "123456789abcdef";
  for (i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 15)];
  }
  return color;
};

btn1.addEventListener("click", () => {
  color1 = colorChange();
  document.body.style.background = `linear-gradient(to right,${color1}, ${color2})`;
  link.innerHTML = `linear-gradient(to right,${color1}, ${color2})`;
});
btn2.addEventListener("click", () => {
  color2 = colorChange();
  document.body.style.background = `linear-gradient(to right,${color1}, ${color2})`;
  link.innerHTML = `linear-gradient(to right,${color1}, ${color2})`;
});

link.addEventListener("click", () => {
  navigator.clipboard.writeText(link.innerText);
  alert("Copy text");
});
