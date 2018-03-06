let game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.image('tausta','media/backround.jpeg');
    game.load.audio('music', 'media/music.mp3');
  
}
function create() {
    let s = game.add.sprite(80, 0, 'tausta');

}
