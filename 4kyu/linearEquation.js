let gcd = (a, b) => a ? gcd(b % a, a) : b;

function mapifySingleSide(eqSide) {
	let sideMap = new Map();
	let matchFirst = /^(.+?)(?=$|[+-])/gi;
	do {
		let firstTerm = matchFirst.exec(eqSide)[0];
		let coefficient = parseInt(firstTerm.match(/(?:[+-]|^)\d+/) || 1);
		if (firstTerm.match(/^-\D/)) {
			coefficient *= -1;
		}
		let unknown = (firstTerm.match(/[a-zA-Z]+/) || [1])[0];
		if (!sideMap.get(unknown)) {
			sideMap.set(unknown, 0);
		}
		sideMap.set(unknown, sideMap.get(unknown) + coefficient);
		eqSide = eqSide.replace(matchFirst, "");
	} while (eqSide.length > 0);
	return sideMap;
}

function normalizeEquation(equation) {
	let [leftSide, rightSide] = equation.split("=");
	let leftMap = mapifySingleSide(leftSide);
	let rightMap = mapifySingleSide(rightSide);
	let eqMap = new Map();
	for (let [key, value] of leftMap) {
		eqMap.set(key, value);
	}
	for (let [key, value] of rightMap) {
		if (!eqMap.get(key)) {
			eqMap.set(key, 0);
		}
		eqMap.set(key, eqMap.get(key) + value * -1);
	}
	eqMap.forEach((value, key, map) => { if (value === 0) map.delete(key) });
	eqMap.get(1) ? eqMap.set(1, eqMap.get(1) * -1) : eqMap.set(1, 0);
	let reduceFactor = Math.abs(Array.from(eqMap.values()).reduce(gcd));
	if (reduceFactor > 1) {
		for (let [key, value] of eqMap) {
			eqMap.set(key, value / reduceFactor);
		}
	}
	console.log(eqMap);
	return new Map([...eqMap.entries()].sort());
}

function matrixifyEquations(equations) {
	// ✔ create matrix
	// ✘ order by unknowns
	// ✘ remove duplications
	// ✘ pivot positions: prefer 1's
	// ✘ pivot positions: avoid zeroes

	let equationSystem = [[]];
	for (let i = 0; i < equations.length; i++) {
		let equationMap = normalizeEquation(equations[i]);
		let curLine = equationSystem.push(Array(equationSystem[0].length).fill(0)) - 1; // beteszünk egy új sort az új egyenletnek
		// console.log("Kiindulási állapot \n", equationSystem, "Sor: ", curLine);
		for (let [key, value] of equationMap) {
			if (equationSystem[0].indexOf(key) === -1) {
				// keressük meg a kulcs beszúrási pozícióját
				// ha -1, akkor szúrjuk be elsőként
				// amúgy meg szúrjuk be az őt megillető helyre
				equationSystem = equationSystem.map(ar => ar.concat([0])); // nem létező változó esetén bővítsük az összes oszlopot jobbra
				// console.log(`Nem létező kulcs: ${key}, oszlopok beszúrva: \n`, equationSystem);
				equationSystem[0][equationSystem[0].length - 1] = key; // tegyük be az új oszlop fejlécét a tetejére
			}
			equationSystem[curLine][equationSystem[0].indexOf(key)] = value; // ...majd az új oszlop tartalmát az utolsó sorba
			// console.log("Map az uj kulccsal és értékkel \n", equationSystem);
		}
	}
	return equationSystem;
}

function solve(equations) {
	let eliminationMatrix = matrixifyEquations(equations);
	return eliminationMatrix;
}

module.exports = {
	mapifySingleSide,
	normalizeEquation,
	matrixifyEquations
}

console.log(solve(["-y=-4z", "-x+4=8z-1", "6y-10x-2=0", "3x+2y-4z=5"]));
// console.log(solve(["2x=4"]));
// console.log(solve(["2x+8y=4", "-x+4y=14"]));
// console.log(solve(["x=4y", "2x=8y", "x+y=5"]));
// console.log(solve(["x+y=7z-1", "6x+z=-3y", "4y+10z=-8x"]));
// console.log(solve(["2alpha+8beta=4", "-alpha+4beta=14"]));
// console.log(solve(["2x=8y", "x+y=5"]));
// console.log(solve(["2x-y+3x=-2y+3x+9y", "-y+x+2y=5"]));
// console.log(solve(["x+y=0"]));
// console.log(solve(["x+2y=1", "2x=2-4y"]));
// console.log(solve(["x+y=1", "2x+2y=2"]));

// Solvable
// console.log(solve(['-42s-z-28u-932-66r-54q+21q+32v-39z-2635+92t-29w-52y+16p+33p+35w+29p+51x+35z-28u-25q=32q-28y+11z-23s',
// 	'-1640+13y-62v-4851+17x-9s+30u-17t+13q+36w-104z-11r+15p=-65u-56t-22z-2w-21v',
// 	'14u+18x-17484-31p+78u+17z+39y-80q+33w+12v-78t-5841-67p+71z+54r-78s=-4x+5x-59y',
// 	'34u+22v-50z+6z-18u-5852+32x-68q+37t-40q+5p-45w+93s-48r-22x=-30v-21t+10s+2v-38q-39q',
// 	'-38r+16p-51v+3447+36s-50y+36p+14x+90w-72s-7x-77u+10385+14p-80z-60t+43q=-2u+39q+4x',
// 	'28q-90t-27v-71y-30x-32r-13z-2779-23v-74w+20p-53q-12s+58u=-40r-50x+958+26z',
// 	'-10z+73v+19z-2t-17y-64y+99w+38r+8203+26x-69u-47p+73s+45q=30s-37x-2735',
// 	'29v+48u+2742-70z+44p-3s+5w+29v+1399-66t+39y+1376-24y-25q-97x+53r+10z+57s=14p-v-35w+26q',
// 	'30t-94s-93v+52w-38z-8w+27q+51y+19p+28r-9t+1591-u-15x=45r-13w+5y-536-33s-26y',
// 	'10z+40y-19v-118s-62x-83r-58w+32p+23s-68q+10p-14t-38z+2u+31t-10856=-16q+46y+3632+5z+13p+42p-27v',
// 	'-40y+20y-73z-27r-8s+26w-28u-84p+54t-90v-3q-535+46x-1417=41w-26s+35t+46x']));

// Zero as solution
// console.log(solve(['-98q+17u+81w-59s-76u-3p-11z+18t-41x-w-82y+68v+46t-83z-4691-r=2355+2326',
// 	'-x+44u-69s+p-51v-43q-85r+71t-32y-1413+6z-33p+67w=56y-17q-18p+60p',
// 	'-17q+17y-37z-43r+15p+47r-100v+3220+6318+15t+15v-55r-19w+50s-24s-55t+14q-75u=-68t-64x-3168-66p-51t',
// 	'-3t+23v+12v+75p-72q-69x-44r+24r-36u+38x+8v+15s+3509+28y+30s+10413-55w-52z=-12t-35s-48t-12p',
// 	'18w-7346+65r+26t+z+64x-10v-36q-14p-22u+9s+56y+22u+59q-22t=8s+17p-11z-11p-31w',
// 	'4505-46w-78s-51v+11z-6x-10r+94p-72u+46q-20u+6x+48w-24t+44r+3y+21z=-27y+43r-33w+y+17r',
// 	'9v+6050-45z+21y-47v+32y+81p+25r+10v+3086+54t-5q+3050+62s+41u-35w+35z+28x=-15z-14r',
// 	'-59u-97r+r+29q-2t-53z-28x-21p+52p-35q-16y+4395+2y-60v+31x-20s+37w-11u=-6u-1489',
// 	'13u+37p+6840-41w-50t+86z+4x-23w-17v-50u-19q+16y-56r+56s+62x-27r=44t+30s+17y+8p-32q',
// 	'-93r+70w+106q-67z+78p+33x-11p+44u-67t-9y-7v-15s+22t+26r-8x+21z-6564=9q-3x-61s-64v',
// 	'-35u-80q-32r+15w-90t+71p-85z-204-63u-72y-112v+29x-556+67s=-26v+2x-27w+17x-26x']));

// Not enough equations
// console.log(solve(['-14s-34v+90u+38x-58y-54w+67q+5w-37s+47t+11r-10z-45z+17p-8545=6z-36v+2798+24t+15s',
// 	'41y+53q-18z+39x+16w-1887+11y-6v-39y+21s-17t-43u+3v+31p-51u-28r=-s-4x-30w+49p-11t',
// 	'-39q-46y+59s+75t+24w+21y-33s+60v+76x+4146+29u+55w+90p+87r+58z=11t+10s+30u',
// 	'-65w-4z+19p-63v+68t-20y-57p-3142+34x+14y-90q+95s-76z+69u-1573-20s+20s-5r+9u=1619-17r-17t+7x',
// 	'74w+64p-8608+17z-7y-84r+41t+13v-6z+98q-22y+35u-13w-56x-64v-51s=-36r',
// 	'51v-59p+11z-44v+91q+54y-60w-12q+69x-73s+5375+34r+25y-98u+11t=-33r-2682-17w-2700',
// 	'-37t+68p+68z-7z+22918-73r-47s+89v-17u+23p+36s-11t-61x-45w-33q+90y+2z=-38z+23v-53q+42v+8z+65u+39w',
// 	'-111z+15z+91t-24y+38x+52s-2010-1062+60r+10u+63v+49p-9u-19x-15u+9q-47w+28s=32t+34p+1060']));

// Solvable with related equations
// console.log(solve(['-37y-17x-51t-6760-20u-33q-15w-91s-4v+10w-54z-15u+12p-66r+34y=12x+14q-17s-5y',
// 	'8v+92p+q-17w+97q-62x+84s-51v-90u-33r-27t-89y+32z+4237=-20v+23t-52v-54w',
// 	'-83t-69v-97z+584+19p-91q-102s-2x+30u+33v-80y-13r+36w=-26s+3r-176-62w',
// 	'-35u-25s-20p-13t+19345-38q+36s-54u-63v+63y-25z+90x+74w-67z+60r=-34y+15v',
// 	'-35r-144v-320y-364q+29p-388z-266s+58p-332t+392w+120u+14r-38s-8x+3040-43r=11p',
// 	'14669+85t-27v+45u+43p-26z+59w-44x+56q+31s+20s+21r+51y=18y-23w-4826',
// 	'-11v-11y+28t+69z+95w+25u+58p+18r-4u+24z+31v-11t+32s+21s-21x+25s+4017-32x-67q=-1325-49t+9w',
// 	'-119s+105r-77s+34584+279v-164z+10x+231w+10p+68p-23s+83q-4u-154y+37q-212u-3t-58z=-26x+89y-36t',
// 	'356z+168r-131p+356q+140u-16w-124s+56t+32y-307v+12y+8t-24x-7767=85v+2589+33p',
// 	'-31y+12x+35r-74z-54s+77w+11t+101v-72u-8v+26p+10q-16y+11528=19s+34y-30q',
// 	'5p+18v-45x-73y-27r-95u-6s+21q+50w+42z-747+5p-27q-6v-15t=-4z+49p+30v-35w+21w',
// 	'-244u+58v-152r-272x-30s+44t+219q+30936+12w+3s-340z-181y-87y-5s+258v-292p=-93q+40s',
// 	'56v+27v-32t+96p+693-93z-41r+8y-96x+30u-88q-119w+19s=-22w+14p-28r',
// 	'189r+765t+163p+738w-234z-108x-288x+134p+459s+131y+131582+504q+405u-145v=98v-43873-115y-90p-51y',
// 	'101v-164y+9525-251r+288z+610s-377t-456x-561u+828p+882q+333w+100v-637y+60v+19055=-146s+73t+102x+46r+249u-9553',
// 	'-67y+37v+3w-49x-38r+1904-85z+11t-18s+5830-19x-85p+78q-61u=-19v-29p-23v+17p',
// 	'16t+35u+22y-98v+33r+5x-4w+89q-3x+9r+89z-8x-11y-2589-41p-43s=-12s']));

// Large solvable system
// console.log(solve(['66e-12m+3914+71z-56i-38p-81b+25n-23j-39s+27v-28h-41l+17l+24k-14x-52o-26w+31c+38r+13p+30q+80m-31n-54h-25m+66g+11935+95f-35i+85a+25y-43s-67t+14e+96u-29w-60d=43g-45d-59d+19y-42p-10j+25c',
// 	'-76e+12038-2l+10m+49r-13o-39n+23u+3973-29g+59s-17n+18a-97x-50l-26m-29w+10z+66z-85i-21k+48q-73h-27w-57y+39k-28v+16x-30j+2t-3f-44j+9b-46k-43p-79c+94d+104g=-33b-20v+19j-35q+6b+44a+2n-17j+36p+29d+32z-44r+31u',
// 	'-29o+83t-6e+26j+8e+59k-24c+33x+28q+37h-78s+3f-17u-83r+16d+3f+32n+10l+63y+23n+54x+72g+13w+54v-41b-31g-22p-85m-19i-2858+88z+41l+30u+84a+49o-49h=29k+31z+45v+6t-23m+33e+45i',
// 	'-11t+55k+28h-85u+37p+20v+73v-50f-2473-64x+31z-49g-44l-35r-78s-73d-82b+45o-4l+42e-81w-1192+59q-5n+87y-27z-26t+60a+12p-32p+19f+31g-76i+22c+96m=1224-32s-49s-3o',
// 	'-24z+46k+66n-44v+42h+50u+76c+18s-22c+20n+24w+53p-6e-33i+63r+45x+43e-27h-14y+6q-17625+4s-12o-16l+15q-33d+28t-9q+51f+47z-50m-57a-57g-33b+60j=26n-38f+9w-17n+19j',
// 	'4p+50j+78a-17m+2388+8g-53w-q-83e-69r-101o-69h+1109-76z+75d-54v-32y+71k+10f+7b+19s-19i-3c-33w-28l+1102+23m+5y+40n-58x+64t-37v-29u=-30e+55u+22k-49i+33j-16o-2i',
// 	'28e+22i-44c-39p-55v-30m-114e+54s-78l-42w-89f-37u+76o-2c-1139-15i+t+58c-60a-96z+6b-25q+47d-4j+13g+46y+44x+20b-41n-67r-k+63h-90t=-9v+19v-45r+42m+18b+24k-33n-20x+2z+13b+4l',
// 	'-20p-35k-4148+17x-20c-78v+35w-4i+7k+45j+32f+49l+33u-20y-71t-33m+48a+88s-99z+58o+65g-10y+42n-45d-31j+67m+11e+5b-38r-11a-41h+5e+29q+25l+32i=56k-e+40g+6d-24z+31a-2i-28i-31u+1354-33o-21c-34n',
// 	'-14f-11n-8l-15t+31i+115t-18c-51w-93y+44h+33e+30c+83o+78p-24u+9370-22j+28k+48a-88d-29n-21u+44e+43x+20v+33z+5s+35r-w+74m+25h-25t+29b-52g+5r-31m+35q=31c+40w-39z-26h-26b-15n+17x-3p+16n',
// 	'-31t-20a+4v+2n-67f+14f-17t-55x+52p+57t+69o+32h+59m+8y-73g-13978+82r-84i+z-18d+19e-13h-94u+9f+65l-j-2c+14w+43t+30j-18s+11k-12p-45k-54s+4b+18x-54q=4g-16r-50b+32l+12e+37o+29t-43u+50f-50u',
// 	'31y-58g-34d+36t-22v-17o-25h-4n+13k-75u+33r+51j+10d-26o-50x+30t-21s-18m-39b+34z+59c+93f+35i-35q+97l+13a+71e+29w-19a-36k-37p-12243=26v-46v+4c+43n+32w',
// 	'-15n+31d+46u-81e+93y+99h+13w+22x-23z+28a+53p+13a+47p-82k+99o-40j+99b+41f+2l+22c-18q+47m-83s-75i-t-85g+51v+42u-22c+20782-74x+95r=24f-56f+26y-9l-13y+3m',
// 	'-j-10r+103b-22c+30w-14p+52f+12j+89o+16q-92l+14h+13q+24s-87i-35p+26a-23b+62y-46r-28w+16z-58n-35d+17l+38p+32f+76u-25f-44t+67a-26v-7x+96e-52g+9499+5z-23m-5r=53s-42h+24w+52v+36d+44c-31j+40s+38y+30n',
// 	'72h+7o+13w+12n+68p+91v+3x-30b-97e-24u+3c-43l+61g+37z+21i-62z-36f+49y+28a+42u+49c-17g-16t+34k+17n-53s-74q-35w-64d-6l-62k-27f+58m-15r+16o+34j+1004=19i+32z+29w+11v+53a',
// 	'22z-3n-30a-30c-33g+38r-49p+14l-19b+4o-18y+y+9054-88w-23h-61s-11f-11o+37i-65m-86j-63t+81o-27x-45u-42b+98d+91a+6v+94e-67k-41q-9n+13z=20q+40s+62v-22f+27o+9g+42u-31s-6u-2y+10j+39i+7a+5a-2989',
// 	'2o+78h+62n-7v-61g+62b+17429-33w-75k+20u-25j-64f+41o-42c+21a-31y-33m+45e+29l-36z+20d-79t-14x+50p-70r+100q+28x+30s+3z+90m+16i+10g+w=14l+52j-31g-73a+29e-5755-31b+41m+36n+16y',
// 	'-28l+24w+6z-6u-5e+42p-87u-100b+51v+95f-6d-5q+45n-9t-53d-42o+24418-28j+11c-24y-92c+13s+8081+93q+37a+13x-35j+61g-42h+60r-63e-2k+120y-44k+54i+56p+89m=-44a+11s+22j-56w-32b',
// 	'7f-10u-29v+62o-15s-56b-38g-7194-38y+79q-57m+41a-2f-27q+81k-40f-54n+40p-105d-48x-37c+88j-41y-93z+13f-30e+2i-71h+29w-72t-4c-50l-81r=-13b+4x-9m-14d-58p-46s-28d+33e+15h',
// 	'77z-47m+17i+39k+33q-61j-42o+66r+36g+46t-80x-47b+32f-46p-76h+66e-34s+51u+62c-n-74l-4568-82w+22d+33q+63y-56s+7e+f-8j-5i+77a+9v-j-12o+10y=-19r-21c-50i+28d-35v+35c-42t+33i-16u+35o',
// 	'31w+75j-51p-12t+38x+23a+66w-18d+16q+4x+38n-49i+76y+79u-96v-40p-85e+32z+46r-98g+9t+42m+80c+10s-36l+39f-11407-19b-38z-74h+83d-31r+75o-84q-24k=8v+49t-13h-27a-30e-14v+3811',
// 	'-58o-3e-27d+14q-27w+96u-32b+30n-24k-60r+11156-10c-97s+42a-76j-82h+63z-52d-76v-51g+96x+34t-13p+94m-31c-57y-13b+36q+60i+30l+31c=-57k+24b-2d-44l+24f-3693+13c-3j+7n-25z+13z',
// 	'-71p+17t+10u+25a+35x-50e+74c-9j+21y-70s+60f+25z-35g+19v-108h+20i-5m-65d-50o-45r-15a+71b-41c+32q-29q+40r-22x+35k-40f-20x-90l-1992-37c+42n+68t+29w=21w+26y+22b-48z+13t-3g-20h+3c-34n-61y+32j-66w',
// 	'35c-47h+29p+43a+38g-48a+2x-97y-24d+25s+99r+41z-92e+69v-94t-85o-56b-22x+41a+2821-16n-52k-28w+66p-u+58f+18q-19r+29o+91j-94m+25l-s+84i-8z=-12r-25f-33w-20d-37k+49z-959+17k+55s-15b-35y+16v+39d',
// 	'43q+76m+33b+80t-4y-4765+33d+59n-98l+51z+28g-38d+25u+61v+31f-16b-15c+90a-45h+48e-49r+92w+32l+28k+13p+74y+27j-8x+17s-97o-72q+89c+32i+36r=2338+2368-69k+24d-8d+2w-44d',
// 	'43p+39b-43z+19k+72r-96w-86f-92s-68d+69l+55y+80n+3261-103a-24e-8v+56h-31q+55o-6s-61g+59m+38i+49u+105c-17c+29x-34v+25a+41x-69j-97t=-5q+24d-17u+10f+62e-23m-32p-8w+9c-24d-43h-24l-53q-1070+34z-7r',
// 	'-78q-22i+44a+37u+59w+20n+35f-40j-45r+40m-14h-83k+x+20r-13w+59l-60r+17q+1838-74c+36s-43o-5i-29p-78z-4c-15e-8g-23y+24w+21r+7e+90d+2v+8b-17n+64t+28f+35n=3x+g-2w+25s+56y+33l-19u+16b+5d+4h+58p']));

// https://www.codewars.com/kata/linear-equation-solver
// 4 kyu
