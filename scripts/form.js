const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#repeat-password");
const message = document.querySelector("#form-message");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Key Phrases DO NOT MATCH!";
		kp1.focus();
        message.style.display = "block";
	} else {
		message.style.display = "none";
	}
}
