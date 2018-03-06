let game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    
    game.load.image('tausta','media/backround.jpeg');
    game.load.audio('track', 'media/music.mp3');
    game.load.image('doggo', 'media/doggo.png');
}
function create() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    

    let s = game.add.sprite(-2500, -1200, 'tausta');


    
    let text = "Moikka!\n Tässä tämä \n Phaser-demo.";
    let style = { font: "85px Arial", fill: "#000000", align: "center" };
    let text0 = game.add.text(game.world.centerX-200, 0, text, style);
    game.physics.arcade.enable([text0]);
    text0.body.velocity.setTo(200, 200);
    text0.body.collideWorldBounds = true;
    text0.body.bounce.set(1);

    game.physics.arcade.gravity.y = 100;

    emitter = game.add.emitter(400, 100, 100);

    emitter.makeParticles('doggo');
    emitter.minParticleSpeed.setTo(-300, 30);
    emitter.maxParticleSpeed.setTo(300, 100);
    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.5;
    emitter.gravity = 250;
    emitter.flow(2000, 500, 5, -1);


    music = game.add.audio('track');
    music.play();
}
function update() {

}