function encrypt(text, n) {
	if (!text || n <= 0) return text;
	for (var count = 0; count < n; count++) {
		var odd = [], even = [];
		for (var i = 0; i < text.length; i++) {
			i % 2 == 0 ? even.push(text[i]) : odd.push(text[i]);
		}
		text = odd.concat(even).join("");
	}
	return text;
}

function decrypt(encryptedText, n) {
	if (!encryptedText || n <= 0) return encryptedText;
	for (var count = 0; count < n; count++) {
		var firstHalf = encryptedText.slice(Math.floor(encryptedText.length / 2), encryptedText.length);
		var secondHalf = encryptedText.slice(0, Math.floor(encryptedText.length / 2));
		encryptedText = "";
		for (var i = 0; i < firstHalf.length; i++) {
			encryptedText = encryptedText.concat(firstHalf[i]);
			if (secondHalf[i]) encryptedText = encryptedText.concat(secondHalf[i]);
		}
	}
	return encryptedText;
}

console.log("Encrypt:", encrypt("This is a test!", 1));
console.log("Decrypt:", decrypt("hsi  etTi sats!", 1));

for (var j = 0; j < 20; j++) console.log(decrypt(encrypt("Lorem ipsum dolor sit amet consectetur adispiciing elit.", j), j));
