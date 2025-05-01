import Exist from './Exist.js'
import Nostalgia from './Nostalgia.js'
import Poetry from './Poetry.js'
import Wizard from './Wizard.js'
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
      this.add.image(800, 300, 'Calling');
      this.add.text(200, 80, 'Press up key to see a cool wizard', { font: 'American Typewriter' });
      this.add.text(200, 100, 'Press down key to see poetry', { font: 'American Typewriter' });
      this.add.text(200, 120, 'Press left key to see a cool photo', { font: 'American Typewriter' });
      this.add.text(200, 140, 'Press right key to see a note', { font: 'American Typewriter' });

   this.input.keyboard.on('keyup-UP', this.handleUpKey, this);
   this.input.keyboard.on('keyup-DOWN', this.handleDownKey, this);
   this.input.keyboard.on('keyup-LEFT', this.handleLeftKey, this);
   this.input.keyboard.on('keyup-RIGHT', this.handleRightKey, this);
   this.input.keyboard.on('keyup-ENTER', this.handleEnterKey, this);
     }

   handleUpKey() {
        this.scene.start('Wizard');
      console.log(`Up Key has been pressed`);
    }

    handleDownKey() {
        this.scene.start('Poetry'); 
       console.log(`Down Key has been pressed`);
    }

    handleLeftKey() {
        this.scene.start('Nostalgia'); 
       console.log(`Left Key has been pressed`);
    }

    handleRightKey() {
        this.scene.start('Exist'); 
       console.log(`Right Key has been pressed`);
    }

    handleEnterKey() {
        this.scene.start('Calling');
       console.log(`Enter Key has been pressed`);
    }

  }

const config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: [Calling, Wizard, Poetry, Nostalgia, Exist]
};
 const game = new Phaser.Game(config);
