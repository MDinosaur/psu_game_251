export default class Wizard extends Phaser.Scene {
   constructor() {
     super({ key: 'Wizard' });
   }

    preload () {
    console.log('Wizard preloading assets...');
    this.load.image('Calling', 'Transitions/Calling.png'); 
    this.load.image('Exist', 'Transitions/Exist.png');
    this.load.image('Nostalgia', 'Transitions/Nostalgia core.png');
    this.load.image('Poetry', 'Transitions/Poetry.png');
    this.load.image('Wizard', 'Transitions/Wizard.png');

    }
        create () {
            this.add.image(500, 400, 'Wizard');
            this.add.text(300, 80, 'Press enter to go back to the beginning', {font: 'American Typewriter'});

    this.input.keyboard.on('keyup-ENTER', this.handleEnterKey, this);
         }
   handleEnterKey() {
           console.log('Enter Key was pressed')
             this.scene.start('Calling');
 }
}
