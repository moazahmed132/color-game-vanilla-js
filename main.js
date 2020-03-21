let numberOfBoxes = 6; //default number
console.log("numberOfBoxes", numberOfBoxes)
let title = document.getElementById("rgb");
let boxContainer = document.querySelector(".center");
let boxContainerArray = Array.from(boxContainer);
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let hardBoxes = document.querySelectorAll(".hard");
let newGame = document.getElementById("new");
let msg = document.getElementById("msg");

hardButtonMode = () => {
  easyBtn.style.backgroundColor = '#408E61';
  hardBtn.style.backgroundColor = 'gray';
}
easyButtonMode = () => {
  easyBtn.style.backgroundColor = 'gray';
  hardBtn.style.backgroundColor = '#408E61';
}
singleCellGenerator = () => {
  return Math.floor(Math.random() * (256 - 0)) + 0;
}
generatRandomBox = () => {
  return Math.floor(Math.random() * (numberOfBoxes - 0)) + 0;
}
// function to generate rgb color 
rgbColorGenerator = () => {
  let firstCell = singleCellGenerator();
  let secondCell = singleCellGenerator();
  let thirdCell = singleCellGenerator();
  return "rgb(" + firstCell + ", " + secondCell + ", " + thirdCell + ")";
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
  let random = generatRandomBox();
  let colors = generateMulitColors();
  return colors[random];
}


// function to generate 
generateBoxes = (numberOfBoxes) => {

  let moazColor = pickedColor();
  title.innerHTML = moazColor;

  // color the boxes at first

  let pickedBox = generatRandomBox();
  console.log("generateBoxes -> pickedBox", pickedBox)

  for (i = 0; i < numberOfBoxes; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = pickedColor();
    boxContainer.appendChild(box);
    boxContainerArray.push(box);
    console.log("generateBoxes -> boxContainerArray", boxContainerArray[i]);
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

// removing boxes function
removeBoxes = (numberOfBoxes) => {
  boxContainerArray.forEach((r) => {
    r.remove();

  });
}
//console.log("removeBoxes -> boxContainerArray", boxContainerArray)

hardBtn.addEventListener("click", function () {
  numberOfBoxes = 6;
  removeBoxes(numberOfBoxes);
  generateBoxes(numberOfBoxes);
  hardButtonMode();
});
easyBtn.addEventListener("click", function () {
  numberOfBoxes = 3;
  removeBoxes(numberOfBoxes);
  easyButtonMode();
  generateBoxes(numberOfBoxes);

});
newGame.addEventListener("click", function () {
  numberOfBoxes = 6;
  removeBoxes(numberOfBoxes);
  generateBoxes(numberOfBoxes);
  hardButtonMode();
});