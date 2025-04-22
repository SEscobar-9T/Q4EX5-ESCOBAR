function menuchoice() {
	var menuInput = document.getElementById('choiceFood').value.toUppercase();
	
	switch (parseInt(order)) {
		case "B": 
			document.getElementById('optionResult').innerHTML = "You ordered a Burger";
			break;
		
		case "F": 
			document.getElementById('optionResult').innerHTML = "You ordered Fries";
			break;

		case "S": 
			document.getElementById('optionResult').innerHTML = "You ordered Soda";
			break;

		default:
			document.getElementById('optionResult').innerHTML = "Invalid order";
			break;
		}


}
