function humanReadableTime(input) {
    var hours = Math.floor(input / 3600);
    var minutes = Math.floor((input - hours * 3600) / 60);
    var seconds = input - hours * 3600 - minutes * 60;
    return String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

// From: https://www.codewars.com/kata/human-readable-time/
// 5 kyu

console.log(humanReadableTime(254));
console.log(humanReadableTime(359999));
