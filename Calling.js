export default class Calling extends Phaser.Scene {
   constructor() {
      super({ key: 'Calling' });
   }
   
  preload () {
    console.log(' CALLING preloading assets...');
    this.load.image('Calling', 'Transitions/Calling.png'); 
    this.load.image('Exist', 'Transitions/Exist.png');
    this.load.image('Nostalgia', 'Transitions/Nostalgia core.png');
    this.load.image('Poetry', 'Transitions/Poetry.png');
    this.load.image('Wizard', 'Transitions/Wizard.png');
}
   create () {
     console.log('CALLING creating scene...')
      this.add.image(800, 600, 'Calling');
      this.add.text(800, 20, 'Press up key to see a cool wizard', { font: 'American Typewriter' });
      this.add.text(800, 40, 'Press down key to see poetry', { font: 'American Typewriter' });
      this.add.text(800, 80, 'Press left key to see a cool photo', { font: 'American Typewriter' });
      this.add.text(800, 100, 'Press right key to see a note', { font: 'American Typewriter' });

    const upKey = this.input.keyboard.on('keyup-UP', listener);
    const downKey = this.input.keyboard.on('keyup-DOWN', listener);
    const leftKey = this.input.keyboard.on('keyup-LEFT', listener);
    const rightKey = this.input.keyboard.on('keyup-RIGHT', listener);
    const enterKey = this.input.keyboard.on('keyup-ENTER', listener);

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

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: [Calling], //[Wizard, Poetry, Nostalgia, Exist] 
};
 const game = new Phaser.Game(config);
