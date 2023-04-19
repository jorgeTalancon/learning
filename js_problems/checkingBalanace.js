
var balance = -1;
var isActive = true;

function checkingMyBalance() {
let checkBalance = prompt('Do you want to check your balance?. y/n');
 if (checkBalance === 'y') {
	if (balance > 0 && isActive) {
		alert('Your balance is $' + balance + '.');
	}
	if (isActive === false) {
		alert('Your account is no longer active');
	}
	if (balance === 0) {
		alert('Your account is empty')
	} 
	else if (balance < 0) {
		alert('Your account is negative. Talk with your bank')
	}
	} else {
		alert('thank you');
	}
 }	

checkingMyBalance();

