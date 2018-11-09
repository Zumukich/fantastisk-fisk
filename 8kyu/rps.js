const rps = (p1, p2) => {
	var winner = 0;
	switch (true) {
		case (p1 === "rock" && p2 === "paper"): {
			winner = 2; break;
		}
		case (p1 === "rock" && p2 === "scissors"): {
			winner = 1; break;
		}
		case (p1 === "paper" && p2 === "rock"): {
			winner = 1; break;
		}
		case (p1 === "paper" && p2 === "scissors"): {
			winner = 2; break;
		}
		case (p1 === "scissors" && p2 === "rock"): {
			winner = 2; break;
		}
		case (p1 === "scissors" && p2 === "paper"): {
			winner = 1; break;
		}
		default: return "Draw!";
	}
	return `Player ${winner} won`;
}

// From: https://www.codewars.com/kata/rock-paper-scissors/
// 8 kyu

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "rock"));

console.log(rps("scissors", "rock"));
console.log(rps("paper", "scissors"));
console.log(rps("rock", "paper"));

console.log(rps("rock", "rock"));
console.log(rps("scissors", "scissors"));
console.log(rps("paper", "paper"));
