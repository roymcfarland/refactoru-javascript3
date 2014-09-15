var userInput = prompt("Please enter your phone number using this format:" + "\n"
	+ "xxx-xxx-xxxx" + "\n"
	+ "Don't worry. We'll keep it secret. We hate SPAM too!" 
	);

alert(userInput.charAt(3, 7) === "-" && userInput.length === 12);

var userDOB = prompt("Please enter your birth date using this format:" + "\n"
	+ "xx/xx/xx"
	);

alert(userDOB.charAt(2, 5) === "/" && userDOB.length === 8);

var userZIP = prompt("Please enter your ZIP code");

alert(userZIP.length === 5 || userZIP.length === 10);

var userState = prompt("Please enter the 2-letter abbreviation of the state where you reside");

alert(userState.length === 2 && userState === userState.toUpperCase());

var userStatus = prompt("Are you married? Yes or No?");

alert(userStatus.toUpperCase() === "YES" || userStatus.toUpperCase() === "NO");