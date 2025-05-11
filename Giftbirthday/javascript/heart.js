const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 15 + 10}px`;
  heart.style.animationDuration = `${Math.random() * 3 + 3}s`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 500);
