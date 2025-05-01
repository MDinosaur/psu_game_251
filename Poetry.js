export default class Poetry extends Phaser.Scene {
   constructor() {
     super({ key: 'Poetry' });
   }

    preload () {
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

   this.input.keyboard.on('keyup-ENTER', this.handleEnterKey, this);
      
        }
   handleEnterKey () {
           console.log('Enter Key was pressed')
             this.scene.start('Calling');
    }
}
