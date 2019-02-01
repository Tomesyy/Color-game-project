var colors = generateRandomColors(6);
var numSquares = 6;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var pickedColor = pickColor();
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	//mode buttons event listener
   setUpModeButtons();
   setUpSquares();
   reset();
}


function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener('click', function(){
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
		reset();
	 });
    }
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener('click', function(){
		//grab color of picked square
		var clickedColor = this.style.backgroundColor; 
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = 'CORRECT!';
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = 'PLAY AGAIN?'
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
			resetButton.textContent = 'New Colors';
		}
	});
   }
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the colors of the squares
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = '';
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = 'none';
		}
		
	}

}


resetButton.addEventListener('click', function(){
	reset();
});




function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//make a random number less than or equal to the color length
	var random = Math.floor(Math.random() * colors.length);
	//return the random color
	return colors[random]; 
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		//get random color and push into arr
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//pick a green from 0 -255
	var g = Math.floor(Math.random() * 256)
	//pick a blue from 0 -255
	var b = Math.floor(Math.random() * 256)
  	return 'rgb('+ r +', ' + g + ', ' + b + ')';
}