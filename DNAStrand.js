function DNAStrand(dna) {
    var complementaryArray = dna.split("").map(function (basePair) {
        switch ( basePair ) {
            case "A": return "T";
            case "C": return "G";
            case "G": return "C";
            case "T": return "A";
            default: return "";
        }
    } );
    return complementaryArray.join("");
}

console.log(DNAStrand("ATTGC"));   // should return "TAACG"
console.log(DNAStrand("GTAT"));    // should return "CATA"
