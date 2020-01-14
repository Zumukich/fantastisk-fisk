function changeCase(identifier, targetCase) {
	const hasUpper = identifier.match(/[A-Z]/) !== null;
	const hasDash = identifier.match(/-/) !== null;
	const hasUndersc = identifier.match(/_/) !== null;
	if ((hasUpper && hasDash) || (hasUpper && hasUndersc) || (hasDash && hasUndersc)) return undefined;
	let blocks = identifier.split(/(?=[A-Z_-])/).map(e => e.toLowerCase()).map(e => e.replace(/[_-]/, ""));
	switch (true) {
		case (targetCase == "camel"): return blocks.map((e, i) => i > 0 ? e.replace(/^./, s => s.toUpperCase()) : e).join("");
		case (targetCase == "snake"): return blocks.join("_");
		case (targetCase == "kebab"): return blocks.join("-");
		default: return undefined;
	}
}

console.log(changeCase("snakeCase", "snake"));
console.log(changeCase("some-lisp-name", "camel"));
console.log(changeCase("doHTMLRequest", "kebab"));
console.log(changeCase("doHTMLRequest", "wtf"));
console.log(changeCase("map_to_all", "kebab"));
console.log(changeCase("invalid-inPut_bad", "kebab"));
