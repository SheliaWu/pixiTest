import * as PIXI from 'pixi.js'; 
//1.renderer
//2.stage
//3.texture
//4.sprite
//5.ticker
/*var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight,{
        antialias:true,
        resolution: 1,
        backgroundColor : 0x000000
    },false);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
PIXI.loader
  .add("http://img1.imgtn.bdimg.com/it/u=3838881056,1923662775&fm=27&gp=0.jpg")
  .load(setup);

function setup() {

  var bunny = new PIXI.Sprite(
    PIXI.loader.resources["http://img1.imgtn.bdimg.com/it/u=3838881056,1923662775&fm=27&gp=0.jpg"].texture
  );

  stage.addChild(bunny);  
  renderer.render(stage);
}
*/
var app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader
	.add('goblins','http://pixijs.io/examples/required/assets/spine/goblins.json')
	.load(onAssetsLoaded);

	app.stage.interactive = true;
	app.stage.buttonMode = true;
	
function onAssetsLoaded(loader, res){
	var goblin = new PIXI.spine.Spine(res.goblins.spineData);

	goblin.skeleton.setSkinByName('goblin');
	goblin.skeleton.setSlotsToSetuoPose();

	goblin.x = 400;
	goblin.y = 600;

	goblin.scale.set(1.5);

	goblin.state.setAnimation(0,'walk', true);

	app.stage.addChild(goblin);

	app.stage.on('pointertap', function(){
		var currentSkinName = goblin.skeleton.skin.name;
		var newSkinName = (currentSkinName === 'goblin' ? 'goblingirl': 'goblin');
		goblin.skeleton.setSkinByName(newSkinName);
		goblin.skeleton.setSlotsToSetuoPose();
	});
}


