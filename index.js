let playerState ='roll';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})



const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
playerImage.src = 'dog.png';
const spriteWidth = 575;
const spriteHeight = 523;


let gameFrame = 0 ;
const staggerFrames = 7;
 const spriteAnimations = [];
 const animationStates =[
    { 
        name: 'idle',
        frames: 7,
    },

     {
        name: 'jump',
        frames: 6,
     },
     {
        name: 'fall',
        frames: 9,
     },
     {
        name: 'run',
        frames: 9,
     },
     {
        name: 'dizzy',
        frames: 11,
     },
     {
        name: 'sit',
        frames: 5,
     },
     {
        name: 'roll',
        frames: 7,
     },
     {
        name: 'bite',
        frames: 7,
     },
     {
        name: 'ko',
        frames: 12,
     },
     {
        name: 'getHit',
        frames: 4,
     }
 ];
   animationStates.forEach((state, index) => {
    let frames = { 
        loc:[],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let posistionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: posistionY});
    }
    spriteAnimations[state.name] = frames;
   });
   console.log(spriteAnimations);

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
   let frameX = spriteWidth *  position;
    let  frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX , frameY, spriteWidth,spriteHeight,0,0 ,spriteWidth,spriteHeight);
    // if (frameX < 4) frameX++;
    //   else frameX =0 ;


      gameFrame++;
      requestAnimationFrame(animate);
};

animate();