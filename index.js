/*
add background to be saved
add save feature
add other maps

---Done
add drones
add snail
*/
var srcDay = 'https://i.imgur.com/37q8eVr.png';
var srcNight = 'https://i.imgur.com/vEeFuI7.png'
var srcDusk = 'https://i.imgur.com/kTY9Zvp.png'

var width = window.innerWidth;
var height = window.innerHeight - 20;

var stage = new Konva.Stage({
  container: 'container',
  width: width,
  height: height
});

var spriteWidth = window.innerWidth * 0.05;
var spriteHeight = (window.innerHeight - 20) * 0.08;

var goldSpriteXPosition = 0;
var blueSpriteXPosition = width - spriteWidth;



//https://i.imgur.com/1xe3nT4.png //stri
//https://i.imgur.com/AcVyzDY.png //check
//https://i.imgur.com/qDcPM1i.png //skul
//https://i.imgur.com/gnayS66.png //abs


var backgroundLayer = new Konva.Layer(); //drones

function helloWorld() {
  alert("helloWorld");
}

function drawBackground(_src) {
  var imageObjBackground = new Image();
  imageObjBackground.onload = function() {
    var background = new Konva.Image({
      x: 0,
      y: 0,
      image: imageObjBackground,
      width: stage.getWidth(),
      height: stage.getHeight(),
    });
    backgroundLayer.add(background);
    stage.add(backgroundLayer);
    if (spritesLayer) stage.add(spritesLayer)
  }
  imageObjBackground.src = _src;
}
drawBackground(srcDay);

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
var spritesLayer = new Konva.Layer(); //drones

function drawSprites() {
  var imageObjgCheckersDrone = new Image();
  imageObjgCheckersDrone.onload = function() {
    var gCheckersDrone = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgCheckersDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gCheckersDrone);
    stage.add(spritesLayer);
  }
  imageObjgCheckersDrone.src = 'https://i.imgur.com/AcVyzDY.png';

  var imageObjgSkullsDrone = new Image();
  imageObjgSkullsDrone.onload = function() {
    var gSkullsDrone = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgSkullsDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gSkullsDrone);
    stage.add(spritesLayer);
  }
  imageObjgSkullsDrone.src = 'https://i.imgur.com/qDcPM1i.png';

  var imageObjgAbsDrone = new Image();
  imageObjgAbsDrone.onload = function() {
    var gAbsDrone = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgAbsDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gAbsDrone);
    stage.add(spritesLayer);
  }
  imageObjgAbsDrone.src = 'https://i.imgur.com/gnayS66.png';

  var imageObjgStripesDrone = new Image();
  imageObjgStripesDrone.onload = function() {
    var gStripesDrone = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgStripesDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gStripesDrone);
    stage.add(spritesLayer);
  }
  imageObjgStripesDrone.src = 'https://i.imgur.com/1xe3nT4.png';

  var imageObjgCheckersWarrior = new Image();
  imageObjgCheckersWarrior.onload = function() {
    var gCheckersWarrior = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgCheckersWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gCheckersWarrior);
    stage.add(spritesLayer);
  }
  imageObjgCheckersWarrior.src = 'https://i.imgur.com/zgjh6YM.png';

  var imageObjgSkullsWarrior = new Image();
  imageObjgSkullsWarrior.onload = function() {
    var gSkullsWarrior = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgSkullsWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gSkullsWarrior);
    stage.add(spritesLayer);
  }
  imageObjgSkullsWarrior.src = 'https://i.imgur.com/OZiiA7K.png';

  var imageObjgAbsWarrior = new Image();
  imageObjgAbsWarrior.onload = function() {
    var gAbsWarrior = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgAbsWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gAbsWarrior);
    stage.add(spritesLayer);
  }
  imageObjgAbsWarrior.src = 'https://i.imgur.com/4GbreUA.png';

  var imageObjgStripesWarrior = new Image();
  imageObjgStripesWarrior.onload = function() {
    var gStripesWarrior = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgStripesWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gStripesWarrior);
    stage.add(spritesLayer);
  }
  imageObjgStripesWarrior.src = 'https://i.imgur.com/lrZyBlh.png';

  var imageObjgQueen = new Image();
  imageObjgQueen.onload = function() {
    var gQueen = new Konva.Image({
      x: goldSpriteXPosition,
      y: 0,
      image: imageObjgQueen,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    goldSpriteXPosition += spriteWidth;
    spritesLayer.add(gQueen);
    stage.add(spritesLayer);
  }
  imageObjgQueen.src = 'https://i.imgur.com/Z9IX1st.png';
  ////////////////////////////////
  var imageObjbChecksDrone = new Image();
  imageObjbChecksDrone.onload = function() {
    var bChecksDrone = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbChecksDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bChecksDrone);
    stage.add(spritesLayer);
  }
  imageObjbChecksDrone.src = 'https://i.imgur.com/9M3DrOb.png';

  var imageObjbSkullsDrone = new Image();
  imageObjbSkullsDrone.onload = function() {
    var bSkullsDrone = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbSkullsDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bSkullsDrone);
    stage.add(spritesLayer);
  }
  imageObjbSkullsDrone.src = 'https://i.imgur.com/YFzD1Rn.png';

  var imageObjbAbsDrone = new Image();
  imageObjbAbsDrone.onload = function() {
    var bAbsDrone = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbAbsDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bAbsDrone);
    stage.add(spritesLayer);
  }
  imageObjbAbsDrone.src = 'https://i.imgur.com/LlrNhwu.png';

  var imageObjbStripesDrone = new Image();
  imageObjbStripesDrone.onload = function() {
    var bStripesDrone = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbStripesDrone,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bStripesDrone);
    stage.add(spritesLayer);
  }
  imageObjbStripesDrone.src = 'https://i.imgur.com/0dB15Sx.png';

  var imageObjbChecksWarrior = new Image();
  imageObjbChecksWarrior.onload = function() {
    var bChecksWarrior = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbChecksWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bChecksWarrior);
    stage.add(spritesLayer);
  }
  imageObjbChecksWarrior.src = 'https://i.imgur.com/XfWSwdI.png';

  var imageObjbSkullsWarrior = new Image();
  imageObjbSkullsWarrior.onload = function() {
    var bSkullsWarrior = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbSkullsWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bSkullsWarrior);
    stage.add(spritesLayer);
  }
  imageObjbSkullsWarrior.src = 'https://i.imgur.com/paXTZO2.png';

  var imageObjbAbsWarrior = new Image();
  imageObjbAbsWarrior.onload = function() {
    var bAbsWarrior = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbAbsWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bAbsWarrior);
    stage.add(spritesLayer);
  }
  imageObjbAbsWarrior.src = 'https://i.imgur.com/facRMOH.png';

  var imageObjbStripesWarrior = new Image();
  imageObjbStripesWarrior.onload = function() {
    var bStripesWarrior = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbStripesWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bStripesWarrior);
    stage.add(spritesLayer);
  }
  imageObjbStripesWarrior.src = 'https://i.imgur.com/9f3mED2.png';

  var imageObjbQueen = new Image();
  imageObjbQueen.onload = function() {
    var bQueen = new Konva.Image({
      x: blueSpriteXPosition,
      y: 0,
      image: imageObjbQueen,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    blueSpriteXPosition -= spriteWidth;
    spritesLayer.add(bQueen);
    stage.add(spritesLayer);
  }
  imageObjbQueen.src = 'https://i.imgur.com/wzfOjPo.png';
////
  var  imageObjGenericWarrior= new Image();
  imageObjGenericWarrior.onload = function() {
    var genericWarrior = new Konva.Image({
      x: (width / 2) - (spriteWidth / 2),
      y: 0,
      image: imageObjGenericWarrior,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    spritesLayer.add(genericWarrior);
    stage.add(spritesLayer);
  }
  imageObjGenericWarrior.src = 'https://i.imgur.com/TJ5jcGN.png';


  var imageObjGenericQueen = new Image();
  imageObjGenericQueen.onload = function() {
    var genericQueen = new Konva.Image({
      x: (width / 2) - (spriteWidth / 2),
      y: 0,
      image: imageObjGenericQueen,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    spritesLayer.add(genericQueen);
    stage.add(spritesLayer);
  }
  imageObjGenericQueen.src = 'https://i.imgur.com\nD3ctvz.png';


/////////

  var imageObjSnail = new Image();
  imageObjSnail.onload = function() {
    var snail = new Konva.Image({
      x: (width / 2) - (spriteWidth / 2),
      y: 0,
      image: imageObjSnail,
      width: spriteWidth,
      height: spriteHeight,
      draggable: true
    });
    spritesLayer.add(snail);
    stage.add(spritesLayer);
  }
  imageObjSnail.src = 'https://i.imgur.com/UT07KA6.png';
}
drawSprites();
/////////////////////////
////////////////////////

//stage.add(layer1);
//stage.add(layer2);

function about() {
  alert("KQ Whiteboard.\nMade with ♥ by Ammar(CLT) and friends. \nSend me your feedback (and noodz)\nOr join us at #kqwhiteboard channel\n\nTodo:\n1. Update sprite size,\n2. add in berries and holes in the hive that you can click to fill in.\n3. free form draw with an undo button.\n4. Save & upload to photo sharing site.\n5. ability to flip the models so they're facing the other way.\n6. some ability to hide the characters you aren't using.\n7. importing capsule hitboxes in here.\n8. ability to zoom in.\n9. Add gates, berries, and hive holes. \n10. Fix issue with sprites not draggable.\n11. Add offline mode (save all files in same folder).\n12. Ability to add gifs.\n13. collision detection (between charachters and walls. Between Charachters can be helpful too)");
}

var json = stage.toJSON();

console.log(json);
