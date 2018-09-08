function songDecoder(song) {
	return song.replace(/WUB/gi, " ").replace(/ {2,}/gi, " ").replace(/^ +/gi, "").replace(/ +$/gi, "");
}

// From: https://www.codewars.com/kata/dubstep/
// 6 kyu

console.log("\"" + songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") + "\"");
