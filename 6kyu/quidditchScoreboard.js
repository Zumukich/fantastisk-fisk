function scoreEvent(comment) {
	var events = new RegExp(/blatching|blurting|bumphing|haverstacking|pocking|stooging|goal|snitch/);
	var scores = {
		"blatching": -30,
		"blurting": -30,
		"bumphing": -30,
		"haverstacking": -30,
		"pocking": -30,
		"stooging": -30,
		"goal": 10,
		"snitch": 150
	};
	return [comment.split(": ")[0], scores[comment.split(": ")[1].toLowerCase().match(events)]];
}

function quidditchScoreboard(teams, commentary) {
	const teamOne = teams.split(" vs ")[0];
	const teamTwo = teams.split(" vs ")[1];
	var board = {
		[teamOne]: 0,
		[teamTwo]: 0
	};
	var scores = commentary.split(", ");
	if (scores.some(e => e.toLowerCase().match(/snitch/i))) {
		scores = scores.splice(0, scores.findIndex(e => e.toLowerCase().match(/snitch/i)) + 1)
	}
	scores.map(scoreEvent).forEach(([team, score]) => board[team] += score);
	return `${teamOne}: ${board[teamOne]}, ${teamTwo}: ${board[teamTwo]}`;
}

// From: https://www.codewars.com/kata/quidditch-scoreboard
// 6 kyu


console.log(quidditchScoreboard("Wimbourne Wasps vs Cork", "Cork: Quaffle goal, Cork: Quaffle - pocking foul, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Caught Snitch, Wimbourne Wasps: Quaffle goal"));
console.log(quidditchScoreboard("Lancashire vs Ballycastle Bats", "Lancashire: Quaffle goal, Lancashire: Stooging foul, Lancashire: Quaffle goal, Lancashire: Quaffle goal, Lancashire: Quaffle goal, Lancashire: Quaffle goal, Ballycastle Bats: Quaffle goal, Ballycastle Bats: Quaffle goal, Lancashire: Quaffle goal, Ballycastle Bats: Quaffle goal, Ballycastle Bats: Quaffle goal, Ballycastle Bats: Quaffle goal, Ballycastle Bats: Quaffle goal, Ballycastle Bats: Quaffle goal, Ballycastle Bats: Quaffle goal, Ballycastle Bats: Quaffle goal, Lancashire: Caught Snitch, Ballycastle Bats: Blurting foul"));
console.log(quidditchScoreboard("Pride of Portree vs Lancashire", "Pride of Portree: Quaffle goal, Lancashire: Quaffle goal, Lancashire: Quaffle goal"));
console.log(quidditchScoreboard("Cork vs Appleby Arrows", "Appleby Arrows: Quaffle goal, Cork: Quaffle goal, Cork: Quaffle goal, Cork: Quaffle goal, Cork: Quaffle goal, Appleby Arrows: Bumphing foul, Appleby Arrows: Bumphing foul, Cork: Quaffle goal, Cork: Quaffle goal, Appleby Arrows: Quaffle goal, Cork: Quaffle goal"));

// Wimbourne Wasps: 50, Cork: 160
// Lancashire: 180, Ballycastle Bats: 90
// Pride of Portree: 10, Lancashire: 20
// Cork: 70, Appleby Arrows: -40

// var sample = [
// 	['Ilkley', 10],
// 	['Yorkshire', -30],
// 	['Yorkshire', 150],
// 	['Ilkley', 10]];

// console.log(
// 	sample.reduce((iMax, [team, score], idx, arr) => score > arr[iMax][1] ? idx : iMax, 0)
// )

// console.log(
// 	sample.reduce((prev, [team, score], idx) => score === 150 ? idx : prev, 0)
// )

// var sampleComment = "Cork: Quaffle goal, Cork: Quaffle - pocking foul, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Quaffle goal, Wimbourne Wasps: Quaffle goal, Cork: Caught Snitch, Wimbourne Wasps: Quaffle goal";

// console.log(
// 	sampleComment.split(", ").findIndex(e => e.toLowerCase().match(/snitch/i))
// )
