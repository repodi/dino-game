const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

function jump (){
    
    let position = 0;
    const jumpMaxHeight = 150;
    const jumpInterval = 5; 

    isJumping = true;    

    let upInterval = setInterval(() => {
        if (position >= jumpMaxHeight){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                position = position - jumpInterval;
                dino.style.bottom = position + 'px';
                if (position <= 0 ){
                    clearInterval(downInterval);
                    isJumping = false;
                }
            }, jumpInterval);
        }else{
            position = position + jumpInterval;
            dino.style.bottom = position + 'px';
        }        
    }, jumpInterval);
}

function handleKeyUp(event){
    if (event.keyCode === 32){
        if (!isJumping){
            jump();
        }
    }
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 0;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);