function domainName(url) {
	// return url.replace(/^(.+\/\/)?(www.)?/gi, "").replace(/\/.+$/, "").replace(/(.+?)\..+$/, "$1");
	return url.replace(/https?:\/\/(www.)?/, "").split(".")[0];
}

console.log(domainName("http://github.com/carbonfive/raygun")); // "github"
console.log(domainName("http://www.zombie-bites.com"));         // "zombie-bites"
console.log(domainName("https://www.cnet.com"));                // "cnet"
console.log(domainName("http://google.co.jp"));                 // "google"
console.log(domainName("www.xakep.ru"));                        // "xakep"
