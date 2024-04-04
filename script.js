var juego = new Phaser.Game(640,640,Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var persona;

var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var nuevo;
var musicaFondo;


var estadoPrincipal ={

	preload: function (){
		juego.load.image('fondo', 'img/fondo3.png');
		juego.load.spritesheet('animacion', 'img/Spritesheet_1.png',256,256);
		// Cargar el archivo de audio
        juego.load.audio('musica', 'audio/SunoAI.mp3');
	},

	create: function(){
		//Mostrar pantalla
		fondoJuego = juego.add.tileSprite(0,0,640,640,'fondo');

		//Animacion del personaje
		nuevo = juego.add.sprite(200,400,'animacion');
		nuevo.animations.add('movi',[0,1,2,3,4,5],8,true);

		//Movimientos de teclado
		teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda= juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba= juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo= juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);

		//Estableciendo limites	del mapa
		juego.physics.startSystem(Phaser.Physics.ARCADE);
		juego.physics.arcade.enable(nuevo);
		nuevo.body.collideWorldBounds = true;

		// Reproducir el audio de fondo
        musicaFondo = juego.add.audio('musica');
        musicaFondo.loop = true;
        musicaFondo.play();

	},
	
	update: function(){
		fondoJuego.tilePosition.x -= 1;

		if(teclaDerecha.isDown){
			nuevo.position.x+=2;
			nuevo.animations.play('movi');

		}else if(teclaIzquierda.isDown){

			nuevo.position.x-=2;
			nuevo.animations.play('movi');

		}else if(teclaArriba.isDown){			
			nuevo.position.y-=2;
			nuevo.animations.play('movi');

		}else if(teclaAbajo.isDown){
			nuevo.position.y+=2;
			nuevo.animations.play('movi');
		}
		
	}
	
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');



