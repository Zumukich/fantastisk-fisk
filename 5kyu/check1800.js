var WORDS = ["ACT", "ADD", "ALL", "APE", "AND", "ANN", "ANY", "ANT", "ARE", "ART", "ASS", "BAD", "BAR", "BAT", "BAY", "BEE", "BIG", "BIT", "BOB", "BOY", "BUN", "BUT", "CAN", "CAR", "CAT", "COT", "COW", "CUT", "DAD", "DAY", "DEW", "DID", "DIN", "DOG", "DON", "DOT", "DUD", "EAR", "EAT", "EEL", "EGG", "ERR", "EYE", "FAG", "FAR", "FLY", "FOR", "FUN", "FUR", "GAY", "GET", "GOT", "GUM", "GUN", "GUY", "GUT", "GYM", "HAS", "HAT", "HER", "HEY", "HIM", "HIS", "HIT", "HOW", "HUG", "HUN", "ICE", "INK", "ITS", "IVE", "JAN", "JET", "JOB", "JOT", "JOY", "KEY", "LAP", "LAY", "LIE", "LET", "LOG", "MAN", "MAP", "MAY", "MEN", "MOM", "MUD", "MUM", "NAP", "NEW", "NOD", "NOT", "NOW", "OAR", "ODD", "OFF", "OLD", "ONE", "OUR", "OUT", "PAN", "PAL", "PAT", "PAW", "PEN", "PET", "PIG", "PIT", "POT", "PRO", "PUT", "QUO", "RAG", "RAM", "RAN", "RAP", "RAT", "RED", "RIP", "ROD", "ROT", "RUN", "RUT", "SAT", "SAW", "SAY", "SEA", "SEE", "SEX", "SHE", "SOY", "SUN", "SUX", "TAN", "TAT", "TEA", "THE", "TIN", "TIP", "TIT", "TON", "TOP", "TOO", "TWO", "URN", "USE", "VAN", "VET", "VIP", "WAR", "WAS", "WAY", "WED", "WHO", "WHY", "WIN", "WON", "XXX", "YAK", "YAM", "YAP", "YOU", "YUM", "ZAP", "ZIP", "ZIT", "ZOO", "ABLE", "ACED", "AGOG", "AHEM", "AHOY", "ALLY", "AMEN", "ANTI", "ANTS", "ANUS", "APES", "ARMY", "ARSE", "ARTY", "AVID", "AWED", "BABY", "BARS", "BATS", "BAYS", "BEAR", "BEES", "BILL", "BITE", "BITS", "BLOW", "BLUE", "BOLD", "BONE", "BOOB", "BOOM", "BOSS", "BOYS", "BUFF", "BUNG", "BUNS", "BUMS", "BURP", "BUST", "BUSY", "BUZZ", "CANS", "CANT", "CARS", "CART", "CATS", "CHAP", "CHIC", "CHUM", "CIAO", "CLAP", "COCK", "CODE", "COOL", "COWS", "COZY", "CRAB", "CREW", "CURE", "CULT", "DADS", "DAFT", "DAWN", "DAYS", "DECK", "DEED", "DICK", "DING", "DOGS", "DOTS", "DOLL", "DOLT", "DONG", "DOPE", "DOWN", "DRAW", "DUCK", "DUDE", "DUMB", "DUTY", "EARL", "EARN", "EARS", "EASY", "EATS", "EDGE", "EELS", "EGGS", "ENVY", "EPIC", "EYES", "FACE", "FAGS", "FANG", "FARM", "FART", "FANS", "FAST", "FEAT", "FEET", "FISH", "FIVE", "FIZZ", "FLAG", "FLEW", "FLIP", "FLOW", "FOOD", "FORT", "FUCK", "FUND", "GAIN", "GEEK", "GEMS", "GIFT", "GIRL", "GIST", "GIVE", "GLEE", "GLOW", "GOLD", "GOOD", "GOSH", "GRAB", "GRIN", "GRIT", "GROT", "GROW", "GRUB", "GUNS", "GUSH", "GYMS", "HAIL", "HAIR", "HALO", "HANG", "HATS", "HEAD", "HEAL", "HEIR", "HELL", "HELP", "HERE", "HERO", "HERS", "HIGH", "HIRE", "HITS", "HOLY", "HOPE", "HOST", "HUNK", "HUGE", "HUNG", "HUNS", "HURT", "ICON", "IDEA", "IDLE", "IDOL", "IOTA", "JAZZ", "JERK", "JESS", "JETS", "JINX", "JOBS", "JOHN", "JOKE", "JUMP", "JUNE", "JULY", "JUNK", "JUST", "KATA", "KEYS", "KICK", "KIND", "KING", "KISS", "KONG", "KNOB", "KNOW", "LARK", "LATE", "LEAN", "LICE", "LICK", "LIKE", "LION", "LIVE", "LOGS", "LOCK", "LONG", "LOOK", "LORD", "LOVE", "LUCK", "LUSH", "MAKE", "MANY", "MART", "MATE", "MAXI", "MEEK", "MIKE", "MILD", "MINT", "MMMM", "MOMS", "MOOD", "MOON", "MOOT", "MUCH", "MUFF", "MUMS", "MUTT", "NAPS", "NAZI", "NEAT", "NECK", "NEED", "NEWS", "NEXT", "NICE", "NICK", "NOON", "NOSE", "NOTE", "OARS", "OATS", "ONCE", "ONLY", "OPEN", "ORGY", "OVAL", "OVER", "PANS", "PALS", "PART", "PAST", "PATS", "PAWS", "PEAR", "PERT", "PENS", "PETS", "PHEW", "PIPE", "PIPS", "PLAN", "PLUM", "PLUS", "POET", "POOF", "POOP", "POSH", "POTS", "PROS", "PSST", "PUKE", "PUNK", "PURE", "PUSH", "PUSS", "QUAD", "QUAK", "QUID", "QUIT", "RANT", "RAPE", "RAPS", "RAPT", "RATE", "RAMS", "RATS", "REAP", "RICK", "RING", "RIPE", "ROOT", "ROSE", "ROSY", "ROTS", "RUNT", "RUTS", "SAFE", "SAGE", "SANE", "SAVE", "SAWS", "SEEK", "SEXY", "SHAG", "SHIT", "SICK", "SIGH", "SIRE", "SLAG", "SLIT", "SLUT", "SNAP", "SNOG", "SNUG", "SOFT", "SOON", "SOUL", "SOUP", "SPRY", "STIR", "STUN", "SUCK", "SWAG", "SWAY", "TACT", "TANK", "TANS", "THAT", "THIS", "TIME", "TINS", "TINY", "TITS", "TOES", "TONS", "TONY", "TOPS", "TOYS", "UBER", "URNS", "USED", "USER", "USES", "VAIN", "VAMP", "VARY", "VEIN", "VENT", "VERY", "VEST", "VIEW", "VIVA", "VOLT", "VOTE", "WAFT", "WAGE", "WAKE", "WALK", "WALL", "WANG", "WANK", "WANT", "WARD", "WARM", "WARP", "WARS", "WART", "WASH", "WAVE", "WEAR", "WEDS", "WEED", "WEEN", "WELD", "WHAT", "WHEE", "WHEW", "WHIP", "WHIZ", "WHOA", "WIFE", "WILL", "WIND", "WING", "WINK", "WINS", "WIRE", "WISH", "WITH", "WORD", "WORK", "WRAP", "XMAN", "XMEN", "XRAY", "XTRA", "XXXX", "YANK", "YAKS", "YAMS", "YAPS", "YARD", "YARN", "YELP", "YERN", "YOKE", "YOLK", "YULE", "ZANY", "ZAPS", "ZIPS", "ZITS", "ZERO", "ZOOM", "ZOOS"];

function check1800(str) {
	var codeBook = {
		"A": "ABC", "B": "ABC", "C": "ABC",
		"D": "DEF", "E": "DEF", "F": "DEF",
		"G": "GHI", "H": "GHI", "I": "GHI",
		"J": "JKL", "K": "JKL", "L": "JKL",
		"M": "MNO", "N": "MNO", "O": "MNO",
		"P": "PQRS", "Q": "PQRS", "R": "PQRS", "S": "PQRS",
		"T": "TUV", "U": "TUV", "V": "TUV",
		"W": "WXYZ", "X": "WXYZ", "Y": "WXYZ", "Z": "WXYZ"
	};
	var result = [];
	var ranges = str.replace(/-/g, "").substring(4).split("").map(element => codeBook[element]);
	var re = new RegExp("\\b" + "[" + ranges[0] + "]" + "[" + ranges[1] + "]" + "[" + ranges[2] + "]" + "\\b");
	var starters = WORDS.filter(element => re.test(element));
	re = new RegExp("\\b" + "[" + ranges[3] + "]" + "[" + ranges[4] + "]" + "[" + ranges[5] + "]" + "[" + ranges[6] + "]" + "\\b");
	var finishers = WORDS.filter(element => re.test(element));
	if (starters.length != 0 && finishers.length != 0) {
		for (var i = 0; i < starters.length; i++)
			for (var j = 0; j < finishers.length; j++)
				result.push("1-800-" + starters[i] + "-" + finishers[j]);
	}
	re = new RegExp("\\b" + "[" + ranges[0] + "]" + "[" + ranges[1] + "]" + "[" + ranges[2] + "]" + "[" + ranges[3] + "]" + "\\b");
	starters = WORDS.filter(element => re.test(element));
	re = new RegExp("\\b" + "[" + ranges[4] + "]" + "[" + ranges[5] + "]" + "[" + ranges[6] + "]" + "\\b");
	finishers = WORDS.filter(element => re.test(element));
	if (starters.length != 0 && finishers.length != 0) {
		for (var k = 0; k < starters.length; k++)
			for (var l = 0; l < finishers.length; l++)
				result.push("1-800-" + starters[k] + "-" + finishers[l]);
	}
	return result;
}

// From: https://www.codewars.com/kata/1-800-code-war/
// 5 kyu

console.log(check1800("1-800-CODE-WAR"));
console.log(check1800("1-800-ART-RAPT"));