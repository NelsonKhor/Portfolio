/* Auto-typing */ 
const heroContent = [
    "a Self-Taught Web Developer",
    "a Tech Enthusiast",
    "a Mechanical Engineer",
    "an Avid SCUBA Diver",
    "a Boglehead Investor",
    "a Weight Lifter"
];

// Declare variables
let myPart = 0;
let myIndex = 0;
let Interval;
let blink = true;
let myElement = document.getElementById("mytext");
let myCursor = document.getElementById("mycursor");

// Function: Type out array content
function Type() {
    let text = heroContent[myPart].substring(0, myIndex+1);
    myElement.innerHTML = text + (myCursor.innerHTML = '|'); /* temporary solution for the blinker*/ 
    myIndex++;

    if(text === heroContent[myPart]) {
        myCursor.style.display = 'inline-block';
        clearInterval(Interval);
        setTimeout(function() 
        {Interval = setInterval(Delete,50);}
        ,1000)
    }
}

// Function: Delete content
function Delete() {
	let text =  heroContent[myPart].substring(0, myIndex - 1);
	myElement.innerHTML = text + '_';
	myIndex--;

	if(text === '') {
		clearInterval(Interval);

		if(myPart == (heroContent.length - 1))
			myPart = 0;
		else
			myPart++;
		
		myIndex = 0;
		setTimeout(function() {
			myCursor.style.display = 'inline-block';
			Interval = setInterval(Type, 100);
		}, 200);
	}
}

window.setInterval(function () {
    if (blink) {
      myCursor.style.opacity = "0";
      blink = false;
    } else {
      myCursor.style.opacity = "1";
      blink = true;
    }
  }, 400)

// Default typing interval set at 100ms
Interval = setInterval(Type,100);

/* Form Validation */
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const regexName = /^[a-zA-Z ]*$/;
const regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

function inputValidate(field,regex){
  if(regex.test(field.value)){
    console.log('valid');
    field.className = 'valid';
  } else {
    console.log('invalid');
    field.className = 'invalid';
  }
}

userName.addEventListener('keyup', (e) => {
  inputValidate(e.target,regexName);
});
userEmail.addEventListener('keyup', (e) => {
  inputValidate(e.target,regexEmail);
});