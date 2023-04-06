var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var colorName = document.querySelector("h3");
var ColorGen = document.getElementById("genNew")


function setGradient(){
	body.style.background =
	"linear-gradient(to right,"
	+ color1.value
	+","
	+ color2.value
	+")";

	colorName.textContent = body.style.background+";";
}
setGradient();
color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

// CREATING RANDOM COLOR

function colorGenerator(){
	const colorValue = Math.floor(Math.random()*16777215).toString(16);;
	return colorValue;
}

function setRandomcolor(){
	var randomColor1 = colorGenerator();
	var randomColor2 = colorGenerator();

	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;

	setGradient();
}

ColorGen.addEventListener("click",setRandomcolor)




// function generateRandomColor(){
//     let maxVal = 0xFFFFFF; // 16777215
//     let randomNumber = Math.random() * maxVal; 
//     randomNumber = Math.floor(randomNumber);
//     randomNumber = randomNumber.toString(16);
//     let randColor = randomNumber.padStart(6, 0);   
//     return `#${randColor.toUpperCase()}`
// }
// console.log(generateRandomColor()); 
