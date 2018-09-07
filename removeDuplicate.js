function removeDuplicate(str) {
	var arr = str.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if (arr.lastIndexOf(arr[i]) != i) {
			arr.splice(arr.lastIndexOf(arr[i]), 1);
			console.log(arr, i, arr.lastIndexOf(arr[i]), arr);
		}
	}
	return arr.join(" ");
}


console.log(removeDuplicate("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
