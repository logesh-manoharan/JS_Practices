// Both VAR, LET is used to declare the variables

// Ony the DIFFERENCE
// 1. VAR -> Scope of the VAR is FUNCTION LEVEL
// 2. LET -> Scope of the LET is BLCK LEVEL

function sample() {
    if (true) {
        let b = 20;
        var a = 10;
    }
    console.log("Var: " + a);
    //console.log("Let: " + b);
}

sample();