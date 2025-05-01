import Calling from './Calling.js'
export default class Exist extends Phaser.Scene {
   constructor() {
     super({ key: 'Exist' });
   }

      function preload () {
    console.log('Exist preloading assets...');
    this.load.image('Calling', 'Transitions/Calling.png'); 
    this.load.image('Exist', 'Transitions/Exist.png');
    this.load.image('Nostalgia', 'Transitions/Nostalgia core.png');
    this.load.image('Poetry', 'Transitions/Poetry.png');
    this.load.image('Wizard', 'Transitions/Wizard.png');

    }
        create () {
            this.add.image(800, 600, 'Exist');
            this.add.text(300,0, 'Press enter to go back to the beginning', {font: 'American Typewriter'});

    const enterKey = this.input.keyboard.on('keyup-ENTER', listener);
         enterKey.on('enter', () => {
           console.log('Enter Key was pressed')
             //this.add.start('Calling');
        });
    }
}

var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 1200,
    scene: [Calling, Exist],
};

const game = new Phaser.Game(config);
