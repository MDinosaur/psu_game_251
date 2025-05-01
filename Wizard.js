import Calling from './Calling.js'
export default class Wizard extends Phaser.Scene {
   constructor() {
     super({ key: 'Wizard' });
   }

      function preload () {
    console.log('Wizard preloading assets...');
    this.load.image('Calling', 'Transitions/Calling.png'); 
    this.load.image('Exist', 'Transitions/Exist.png');
    this.load.image('Nostalgia', 'Transitions/Nostalgia core.png');
    this.load.image('Poetry', 'Transitions/Poetry.png');
    this.load.image('Wizard', 'Transitions/Wizard.png');

    }
        create () {
            this.add.image(800, 600, 'Wizard');
            this.add.text(300,0, 'Press enter to go back to the beginning', {font: 'American Typewriter'});

    this.input.keyboard.on('keyup-ENTER', this.handleEnterKey, this);
         }
   handleEnterKey {
           console.log('Enter Key was pressed')
             //this.add.start('Calling');
 }
}

var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: [Calling, Wizard],
};

const game = new Phaser.Game(config);
