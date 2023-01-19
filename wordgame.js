var numbuttons;
var score = 0;

window.onload=function(){
	const submit = document.querySelector('button[type="submit"]');
	const radio_num_buttons = document.querySelectorAll('input[name="num_buttons"]');
	submit.addEventListener(
	"click",
	(event) => {
		numbuttons = 0;
		update_score(0);
		clearbuttons();
		// number of buttons
		for (const radio_button of radio_num_buttons) {
			if (radio_button.checked){
				numbuttons = radio_button.value;
				break;
			}			
		}
		if (numbuttons == 0) {
			console.log("invalid entry");
		}		
	});
}

function clearbuttons(){
	const toremove = document.querySelectorAll(".gamebutton");
	toremove.forEach(button => {
		button.remove();
	});	
}	

function update_score(new_score) {
	score = new_score;
	const text = document.getElementById("score");
	text.innerHTML = "Current Score: " + (score);	
}	

function rungame(){
	/* remove existing buttons */
	clearbuttons();
	const buttonlist = document.getElementById("game");
	for (let i = 1; i < numbuttons; i++) {
		const newButton = document.createElement("button");
		newButton.innerHTML = "Desert";
		newButton.classList.add("gamebutton");
		newButton.setAttribute("onclick","incorrect_button()");
		buttonlist.appendChild(newButton);
	}
	const correctButton = document.createElement("button");
	correctButton.innerHTML = "Dessert";
	correctButton.classList.add("gamebutton");
	correctButton.setAttribute("onclick","correct_button()");
	buttonlist.appendChild(correctButton);
	shuffle();
}	

/* randomizes positions of each gamebutton within the image */
// TODO: alter xpos and ypos calculations to be dependant on image and button size,
// 		 just in case those change later
function shuffle(){
	var xpos, ypos;
	const buttonlist = document.querySelectorAll(".gamebutton");
	buttonlist.forEach(button => {
		/* randomizer */
		xpos = (Math.random() * (720 - 60)) + 30;
		ypos = (Math.random() * (720 - 25)) + 12.5;
		button.setAttribute("style","top:"+ypos+"px;left:"+xpos+"px");
	});	
}

function correct_button(){
	update_score(++score);
	shuffle();
}

function incorrect_button(){
	update_score(--score);
	shuffle();
}	