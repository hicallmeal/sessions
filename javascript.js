function onAccept() {
	var name = document.getElementById("name").value;
	var loc = document.getElementById("location").value;
	c_error = document.getElementById("c_error");
	c_style = c_error.style; 
	
	if (name == ""	|| loc == ""){
		c_error = document.getElementById("c_error");
		c_error.innerHTML = "Error missing fields!"
		c_style.backgroundColor = 'pink';

		}
	else{
		c_error.innerHTML = "";
		alert(`Hello ${name} from ${loc}!`);}
}

