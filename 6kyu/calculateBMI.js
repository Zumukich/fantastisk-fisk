function calculateBMI(weight, height) {
	var bmi = weight / Math.pow(height / 100, 2);
	var scale = "";
	switch (true) {
		case (bmi < 15): scale = "Very severely underweight"; break;
		case (bmi < 16): scale = "Severely underweight"; break;
		case (bmi < 18.5): scale = "Underweight"; break;
		case (bmi < 25): scale = "Normal (healthy weight)"; break;
		case (bmi < 30): scale = "Overweight"; break;
		case (bmi < 35): scale = "Obese Class I (Moderately obese)"; break;
		case (bmi < 40): scale = "Obese Class II (Severely obese)"; break;
		case (bmi < 45): scale = "Obese Class III (Very severely obese)"; break;
		case (bmi < 50): scale = "Obese Class IV (Morbidly Obese)"; break;
		case (bmi < 60): scale = "Obese Class V (Super Obese)"; break;
		default: scale = "Obese Class VI (Hyper Obese)";
	}
return { value: `${bmi.toFixed(1)}`, category: `${scale}` };
}

// From: https://www.codewars.com/kata/body-mass-index-calculation
// 6 kyu

console.log(calculateBMI(65, 175));
