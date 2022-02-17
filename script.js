let clicks = 0;
let visibility = true;

function add_count() {
	clicks = clicks + 1;

	let txt = document.getElementById("text_counts");

	txt.innerHTML = clicks;
}

function change_visibility() {

	let circle = document.getElementById("circle_three");

	if (visibility) {
		circle.style.opacity="0.0";
		visibility = false;
	} else {
		circle.style.opacity="1.0";
		visibility = true;
	}
}