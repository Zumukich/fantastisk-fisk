function dirReduc(directions) {

    function opposite(cardinal) {
        switch (cardinal) {
            case "NORTH": return "SOUTH"; break;
            case "SOUTH": return "NORTH"; break;
            case "EAST": return "WEST"; break;
            case "WEST": return "EAST"; break;
            default: return "";
		}
    }

    for (var i = 0; i < directions.length; i++) {
        if (directions.indexOf(opposite(directions[i])) != -1) {

		}
	}
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) == ["WEST"]);
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) == []);
