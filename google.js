
//"https://www.google.com/#q=" + queryString + "&btnK=Google+Search"
window.onload = function() {

document.getElementById('google').addEventListener("click", gSearch);
document.getElementById('lucky').addEventListener("click", lucky);


function gSearch() {
var queryString = "https://www.google.com/#q=";
queryString = queryString + document.getElementById("text").value;
window.location.href = queryString;
}

function lucky() {
	queryString = document.getElementById("text").value;
	window.location.href = "https://www.google.com/search?q=" + queryString + "&btnI";
}
 
}