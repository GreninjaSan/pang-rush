var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'content', {
    preload: preload, create: 
        create, update: update
}); 

function preload(){ 
    game.load.image('victoireJ2', 'asset/Victoire-J2.png', 1024, 768);
}

function create(){
    victoireJ2 = game.add.sprite(0,0,'victoireJ2');
}

function update(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.I)==true){ 
        document.location.href='jeu.html'
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.O)==true){
        document.location.href='index.html'
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.P)==true){
        document.location.href='commandes.html'
    }
}