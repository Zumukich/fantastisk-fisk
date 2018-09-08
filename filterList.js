function filter_list(l) {
    var output = [];
    for (var i = 0; i < l.length; i++) {
        if (Number.isInteger(l[i])) {
            output.push(l[i]);
        }
    }
    return output;
}

// From: https://www.codewars.com/kata/list-filtering/
// 7 kyu

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));
