function fixPhoneNumber(str) {
	var numArray = str.replace(/[^0-9]/g, "").split("");
	return (numArray.length === 11 && numArray[0] === "0") ? numArray.join("") : "Not a phone number";
}

// From: https://www.codewars.com/kata/fix-my-phone-numbers/
// 7 kyu

console.log(fixPhoneNumber("efRFS:)0207ERGQREG88349F82!"));
console.log(fixPhoneNumber("efRFS:)207ERGQREG88349F82!"));
console.log(fixPhoneNumber("efRFS:)027ERGQREG88349F82!"));
console.log(fixPhoneNumber("efR5FS:)0207ERGQREG88349F82!"));
