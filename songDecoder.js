function songDecoder(song) {
	return song.replace(/WUB/gi, " ").replace(/ {2,}/gi, " ").replace(/^ +/gi, "").replace(/ +$/gi, "");
}

console.log("\"" + songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") + "\"");
