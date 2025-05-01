export default class Calling extends Phaser.Scene {
   constructor() {
      super({ key: 'Calling' });

  preload () {
    console.log(' Calling preloading assets...');
    this.load.image('Calling', 'Transitions/Calling.png'); 
    this.load.image('Exist', 'Transitions/Exist.png');
    this.load.image('Nostalgia', 'Transitions/Nostalgia core.png');
    this.load.image('Poetry', 'Transitions/Poetry.png');
    this.load.image('Wizard', 'Transitions/Wizard.png');
}
   create () {
     console.log('Creating scene...')
      this.add.image(400, 300, 'Calling');
      this.add.text(400, 20, 'Press up key to see a cool wizard', { font: 'American Typewriter' });
      this.add.text(400, 40, 'Press down key to see poetry', { font: 'American Typewriter' });
      this.add.text(400, 80, 'Press left key to see a cool photo', { font: 'American Typewriter' });
      this.add.text(400, 100, 'Press right key to see a note', { font: 'American Typewriter' });

    const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    const enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    upKey.on('up', () => {
        //this.scene.start('Wizard');
      console.log(`Up Key has been pressed`);
    });

    downKey.on('down', () => {
        //this.scene.start('Poetry'); 
       console.log(`Down Key has been pressed`);
    });

    leftKey.on('left', () => {
        //this.scene.start('Nostalgia'); 
       console.log(`Left Key has been pressed`);
    });

    rightKey.on('right', () => {
        //this.scene.start('Exist'); 
       console.log(`Right Key has been pressed`);
    });

    enterKey.on('enter', () => {
        //this.scene.start('Calling');
       console.log(`Enter Key has been pressed`);
    });

     }
  }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Calling], //[Wizard, Poetry, Nostalgia, Exist] 
};
 const game = new Phaser.Game(config);
