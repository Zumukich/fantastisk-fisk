function persistentBugger(num) {
    return num <= 9 ? num : persistentBugger(String(num).split("").reduce((a, b) => parseInt(a) + parseInt(b)));
}

console.log(persistentBugger(493193));
