
var time = document.getElementById("time")
var timeInterval;
document.getElementById("start").addEventListener("click", function() {
	timeInterval = setInterval(function() {
		var value = time.innerText;
		time.innerText = parseInt(value) + 1 
	}, 1000);
});

document.getElementById("stop").addEventListener("click", function() {
	clearInterval(timeInterval)
});

document.getElementById("reset").addEventListener("click", function() {
	clearInterval(timeInterval);
	time.innerText = 0
});




