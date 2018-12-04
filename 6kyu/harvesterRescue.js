function harvesterRescue(data) {
	var [hX, hY] = data.harvester, [wX, wY] = data.worm[0], [cX, cY] = data.carryall[0];
	var timeW = Math.sqrt(Math.pow(hX - wX, 2) + Math.pow(hY - wY, 2)) / data.worm[1];
	var timeC = Math.sqrt(Math.pow(hX - cX, 2) + Math.pow(hY - cY, 2)) / data.carryall[1];
	return timeC + 1 < timeW ? "The spice must flow! Rescue the harvester!" : "Damn the spice! I'll rescue the miners!";
}

console.log(harvesterRescue({ harvester: [345, 600], worm: [[200, 100], 25], carryall: [[350, 200], 32] }));
