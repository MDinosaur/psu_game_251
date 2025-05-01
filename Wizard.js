import Calling from './Calling.js'
export default class Wizard extends Phaser.Scene {
   constructor() {
     super({ key: 'Wizard' });
   }

      function preload () {
    console.log('Wizard preloading assets...');
    this.load.image('Calling', 'Calling.png'); 
    this.load.image('Exist', 'Exist.png');
    this.load.image('Nostalgia', 'Nostalgia core.png');
    this.load.image('Poetry', 'Poetry.png');
    this.load.image('Wizard', 'Wizard.png');

    }
        create () {
            this.add.image(400,300, 'Wizard');
            this.add.text(300,0, 'Press enter to go back to the beginning', {font: 'American Typewriter'});

         enterKey.on('enter', () => {
           console.log('Enter Key was pressed')
             //this.add.start('Calling');
        });
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Calling],
};

const game = new Phaser.Game(config);
