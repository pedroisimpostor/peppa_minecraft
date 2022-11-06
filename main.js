
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("?????", ?????); // quando o evento "keydown" acontece, a função "mykeydown" também acontece.
// window significa: a tela inteira

function myKeyDown(e) //Precisamos definir a função myKeyDown para que possamos ver qual tecla foi pressionada
{
keyPressed = e.keyCode; //  "e.keyCode" obterá o valor da tecla pressionada. Armazenaremos-o dentro da variável keyPressed
console.log(????); // mostre no console a variável da linha 51
if(e.shiftKey == true && keyPressed == '80')
//e.shiftKey == true significa que a tecla SHIFT foi pressionada.
//keyPressed == 80 significa que a tecla P foi pressionada.
{
	console.log("p e shift pressionadas juntas");
	blockImageWidth = blockImageWidth + ???; // qual quantidade você quer que seja aumentada?
	blockImageHeight = blockImageHeight + ???;
	document.getElementById("???").innerHTML = blockImageWidth; // resposta no html
	document.getElementById("???").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = ?????
	document.getElementById("???").innerHTML = blockImageWidth;
	document.getElementById("???").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '???') // w na tabela ascii
	{
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '???')// g na tabela ascii
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '???')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '???')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '???')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(playerY >=0) 
	{
		playerY = playerY - blockImageHeight;
		canvas.remove(playerObject);
		playerUpdate(); // função que adiciona uma nova imagem no canvas
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		canvas.remove(playerObject);
		????();
	}
}

function left()
{
	if(playerX >0)
	{
		player? = player? - blockImageWidth;
		canvas.remove(playerObject);
		???();
	}
}

function right()
{
	if(playerX <=850)
	{
		player? = player? + blockImageWidth;
		canvas.remove(playerObject);
		???();
	}
}
