var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6dfe86f2-e9d8-4567-bcad-6f67703a1669","f36e7290-ae3c-4753-8cee-18ad3750f911"],"propsByKey":{"6dfe86f2-e9d8-4567-bcad-6f67703a1669":{"name":"diamond_1","sourceUrl":null,"frameSize":{"x":224,"y":180},"frameCount":3,"looping":true,"frameDelay":12,"version":"8ZJ6VQsKcTtylMsfGe4p2hTU9mz2MIEr","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":448,"y":360},"rootRelativePath":"assets/6dfe86f2-e9d8-4567-bcad-6f67703a1669.png"},"f36e7290-ae3c-4753-8cee-18ad3750f911":{"name":"thief_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LW3NVAYESDS18f5zmtSQbke0B78Bo_I2/category_emoji/emoji_16.png","frameSize":{"x":304,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"LW3NVAYESDS18f5zmtSQbke0B78Bo_I2","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LW3NVAYESDS18f5zmtSQbke0B78Bo_I2/category_emoji/emoji_16.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var thief = createSprite(10,390,15,15);
thief.shapeColor = "grey";
thief.setAnimation("thief_1");
thief.scale = (0.11);
var diamond = createSprite(380,20,15,15);
diamond.shapeColor = "blue";
diamond.setAnimation("diamond_1");
diamond.scale = (0.2);
var laser1 = createSprite(100,250,200,5);
laser1.shapeColor = "red";
var laser2 = createSprite(300,100,200,5);
laser2.shapeColor = "red";
var laser3 = createSprite(100,100,5,200);
laser3.shapeColor = "red";

laser1.velocityX = 5;
laser2.velocityX = -5;
laser3.velocityY = 5;

function draw() {
background("orange");
drawSprites();
createEdgeSprites();
thief.velocityX = 0;
thief.velocityY = 0;
  if(keyDown("space")){
  laser1.velocityX = 5;
  laser2.velocityX = -5;
  laser3.velocityY = 5;
  }
  if(thief.isTouching(diamond)){
    strokeWeight(2);
    stroke("red");
    textSize(20);
    text("Oh no! The Thief has stolen the diamond!",25,200);
  }

  if(laser1.bounceOff(rightEdge)){
    laser1.velocityX = -5;
  }
  if(laser1.bounceOff(leftEdge)){
    laser1.velocityX = 5;
  }
  if(laser2.bounceOff(leftEdge)){
   laser2.velocityX = 5;
  }  
  if(laser2.bounceOff(rightEdge)){
    laser2.velocityX = -5;
  }
  if(laser3.bounceOff(bottomEdge)){
    laser3.velocityY = -5;
  }
  if(laser3.bounceOff(topEdge)){
    laser3.velocityY = 5;
  }
  if(keyDown("up")){
  thief.velocityY=  - 2;
}
  if(keyDown("down")){
  thief.velocityY =  2;
}
  if(keyDown("left")){
  thief.velocityX =  - 2;
}
  if(keyDown("right")){
  thief.velocityX = 2;
}
  if(thief.isTouching(laser1)){
  reset()
  fill("blue");
  strokeWeight(2);
  stroke("blue");
  textSize(20);
  text("The Thief Has Been Caught",100,200);
reset();
}
  if(thief.isTouching(laser2)){
reset()
  fill("blue");
  strokeWeight(2);
  stroke("blue");
  textSize(20);
text("The Thief Has Been Caught",100,200);
}
if(thief.isTouching(laser3)){
reset()
  fill("blue");
  strokeWeight(2);
  stroke("blue");
  textSize(20);
text("The Thief Has Been Caught",100,200);
}

thief.collide(edges);  

}
function reset(){

  thief.setVelocity(0,0);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
