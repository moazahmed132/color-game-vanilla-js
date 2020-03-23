let numberOfBoxes = 3; //default number
let title = document.getElementById("rgb");
let boxContainer = document.querySelector(".center");
let boxContainerArray = Array.from(boxContainer);
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let hardBoxes = document.querySelectorAll(".hard");
let newGame = document.getElementById("new");
let msg = document.getElementById("msg");
singleCellGenerator = () => {
  return Math.floor(Math.random() * (256 - 0)) + 0;
}
generatRandomBox = () => {
  return Math.floor(Math.random() * (numberOfBoxes - 0)) + 0;
}
// function to generate rgb color 
rgbColorGenerator = () => {
  return `rgb(${singleCellGenerator()}, ${singleCellGenerator()}, ${singleCellGenerator()})`;
}
// function to generate X numers of rgb colors 
generateMulitColors = () => {
  let arr = [];
  for (let i = 0; i < numberOfBoxes; i++) {
    arr.push(rgbColorGenerator());
  }
  return arr;
}
// function to choose a color
pickedColor = () => {
  return generateMulitColors()[generatRandomBox()];
}
// function to generate 
generateBoxes = (numberOfBoxes) => {
  boxContainerArray = [];
  boxContainer.innerHTML = '';
  let moazColor = pickedColor();
  title.innerHTML = moazColor;
  let pickedBox = generatRandomBox();
  for (i = 0; i < numberOfBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = pickedColor();
    boxContainer.appendChild(box);
    boxContainerArray.push(box);
  }
  boxContainerArray[pickedBox].style.backgroundColor = moazColor;
  // matching function
  boxContainerArray.forEach((box) => {
    box.addEventListener('click', () => {
      if (box.style.backgroundColor == moazColor) {
        boxContainerArray.forEach((r) => {
          r.style.backgroundColor = moazColor;
          r.style.visibility = 'visible';
        });
        msg.innerHTML = 'will done';
      } else {
        box.style.visibility = 'hidden';
        msg.innerHTML = 'try again';
      }
    })
  });
}
generateBoxes(numberOfBoxes);
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numberOfBoxes = hardBtn.dataset.type;
  generateBoxes(hardBtn.dataset.type);
});
easyBtn.addEventListener("click", function () {
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  generateBoxes(easyBtn.dataset.type);
});
newGame.addEventListener("click", function () {
  //numberOfBoxes = newGame.dataset.type;
  generateBoxes(newGame.dataset.type);
});