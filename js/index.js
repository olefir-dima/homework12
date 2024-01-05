const randomImg = document.getElementById("randomImg");
const imageFolder = "";
const imageCount = 9;

function showRandomImg() {
  const randomIndex = Math.ceil(Math.random() * imageCount);
  const imageUrl = "images/" + randomIndex + ".jpg";
  randomImg.src = imageUrl;
}

showRandomImg();
