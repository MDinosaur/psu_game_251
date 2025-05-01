import Calling from './Calling.js'
export default class Poetry extends Phaser.Scene {
   constructor() {
     super({ key: 'Poetry' });
   }

      function preload () {
    console.log('Poetry preloading assets...');
    this.load.image('Calling', 'Transitions/Calling.png'); 
    this.load.image('Exist', 'Transitions/Exist.png');
    this.load.image('Nostalgia', 'Transitions/Nostalgia core.png');
    this.load.image('Poetry', 'Transitions/Poetry.png');
    this.load.image('Wizard', 'Transitions/Wizard.png');

    }
        create () {
            this.add.image(800, 600, 'Poetry');
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
    scene: [Calling, Poetry],
};

const game = new Phaser.Game(config);
