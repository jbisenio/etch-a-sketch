$(document).ready(function() {
	takeUserInput();
	makeGrid();
	clearScreen();
	rainbowMod();
	classicMod();
	eraser();
});

function takeUserInput() {
	$('#button').on('click', function() {
		var gridWidth = parseInt($('.container').css('width'));
		var size = prompt('Enter a number of squares/row/column between 2 and 100:');	
		for (var i=0; i < 100; i++) {
			if (size >= 2 && size <= 100) {
				var dimension = gridWidth / size;

				//remove previous grid
				$('.row').remove();

				//create custom grid
				for (var i = 0; i < size; i++) {
					$('#container').append("<div class='row'></div>").css('height', dimension);
				}
				for (var i = 0; i< size; i++) {
					$('.row').append("<div class='square'></div>").css('height', dimension).css('width', dimension);
				}
				break;
			} else {
				size = prompt('Please enter a correct number:');
				continue
			}
		}
		hoverEffect();
	});
}

function makeGrid() {
	for (var i = 0; i < 10; i++) {
		$('#container').append("<div class='square'></div>"); // each grid gets 10 rows
	}
	for (var i = 0; i < 10; i++) {
		$('.row').append("<div class='square'></div>"); // Each row gets 10 squares
	}
	hoverEffect();
}

function hoverEffect() {
	$('.square').on('mouseover', function() {
		$(this).css('background-color', 'black');
	});
}

function clearScreen() {
	$('#clear-button').on('click', function() {
		$('.square').css('background-color', 'white');
	});
}

function rainbowMod() {
	$('#rainbow-button').on('click', function() {
		S('.square').on('mouseover', function(){
			var randomcolor = Math.floor(Math.random()*16777215).toString(16);
			$(this).css('background-color', '#' + randomcolor);
		});
	});
}

function classicMod() {
	$('.classic-button').on('click', function() {
		$('.square').on('mouseover', function() {
			$(this).css('background-color', 'black');
		});
	});
}

function eraser() {
	$('#eraser-button').on('click', function() {
		$('.square').on('mouseover', function() {
			$(this).css('background-color', 'white');
		});
	});
}