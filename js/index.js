const randomImg = document.getElementById("randomImg");
const imageCount = 9;

function getRandomIndex() {
  return Math.ceil(Math.random() * imageCount);
}

function showRandomImg() {
  const srcArr = randomImg.src.split("/");

  let currentIndex;
  if (srcArr[srcArr.length - 1].includes("jpg")) {
    const lastEl = srcArr[srcArr.length - 1];
    currentIndex = parseInt(lastEl.substring(0, lastEl.indexOf(".")));
  }

  let randomIndex;
  do {
    randomIndex = getRandomIndex();
  } while (currentIndex === randomIndex);

  const imageUrl = "images/" + randomIndex + ".jpg";
  randomImg.src = imageUrl;
}

showRandomImg();
