function recoverSecret(list) {
	var secret = [];
	return secret.join("");
}

console.log(recoverSecret([
	['w', 'h', 'i'],
	['t', 'u', 'p'],
	['t', 's', 'u'],
	['a', 't', 's'],
	['h', 'a', 'p'],
	['t', 'i', 's'],
	['w', 'h', 's']
]));

/*
https://www.codewars.com/kata/recover-a-secret-string-from-random-triplets/


['t','u','p'],
['w','h','i'],
['t','s','u'],
['a','t','s'],
['h','a','p'],
['t','i','s'],
['w','h','s']

Válasszunk egy tripletet.
	't' 'u' 'p'

Legyen ez a megoldásunk.

Vegyük a következő tripletet
	Első és harmadik betűje szomszédos a megoldásban? -> a megoldásban tegyük be szomszédos betűk közé a triplet középső betűjét
	Második és harmadik betűje a megoldás eleje? -> tegyük be a megoldás elejére a triplet első betűjét
	Első és második betűje a megoldás vége? -> tegyük be a megoldás végére a triplet harmadik betűjét
	Térjünk vissza a ciklus elejére

*/
