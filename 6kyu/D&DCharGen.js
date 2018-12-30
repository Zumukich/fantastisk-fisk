function charAttribute(score) {
	var modifier = score !== 0 ? Math.floor((score - 10) / 2) : 0;
	var maximumSpellLevel = score >= 10 ? Math.min(9, score - 10) : -1;
	var extraSpells = [];
	for (let level = 0; level < maximumSpellLevel; level++) {
		const numOfBonusSpells = Math.ceil((modifier - level) / 4);
		if (numOfBonusSpells > 0) {
			extraSpells.push(numOfBonusSpells);
		}
	}
	return { modifier, maximumSpellLevel, extraSpells};
}

// From: https://www.codewars.com/kata/d-and-d-character-generator-number-1-attribute-modifiers-and-spells
// 6 kyu

for (let i = 0; i < 40; i++) {
	console.log(i, ": ", charAttribute(i));
}
