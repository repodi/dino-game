const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;
let position = 0;

function jump() {
  
  const jumpMaxHeight = 200;
  const jumpInterval = 5;

  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= jumpMaxHeight) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        position = position - jumpInterval;
        dino.style.bottom = position + "px";
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        }
      }, jumpInterval);
    } else {
      position = position + jumpInterval;
      dino.style.bottom = position + "px";
    }
  }, jumpInterval);
}

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
        clearInterval(leftInterval);
        document.body.innerHTML ='<h1 class="game-over">Fim de jogo</h1>';
    }else{
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener("keyup", handleKeyUp);
