function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

function findHCF(a, b) {
    // Make numbers positive to handle negative inputs safely
    a = Math.abs(a);
    b = Math.abs(b);
    
    // Base case: if b is 0, the HCF is a
    if (b === 0) {
        return a;
    }
    
    // Recursive call using the remainder
    return findHCF(b, a % b);
}

window.expandingGenerators = window.expandingGenerators || {};

window.expandingGenerators.one_pair_one_var = function(q_id) {
    
    const choice = getRandomInt(1,3);
     
    const a = getRandomInt(2,10);
    const v = ["p","q","r","s","t","x","y"][getRandomInt(0,6)];
    
    let b, c, qt, at, av;
    
    while (true) {
        b = getRandomInt(2,10);
        c = getRandomInt(1,12);
        
        if (findHCF(b,c) === 1) break;
    }
    
    if (choice === 1) {
        qt = `Expand: <br> $${a}(${b}${v} + ${c})$`;
        at = `Multiply all terms in the bracket by $${a}$: <br> $${a} \\times ${b}${v} + ${a} \\times ${c} \\equiv ${a*b}${v} + ${a*c}$`;
        av = `${a*b}${v} + ${a*c}`;
    } else if (choice === 2) {
        qt = `Expand: <br> $${a}(${b}${v} - ${c})$`;
        at = `Multiply all terms in the bracket by $${a}$: <br> $${a} \\times ${b}${v} - ${a} \\times ${c} \\equiv ${a*b}${v} - ${a*c}$`;
        av = `${a*b}${v} - ${a*c}`;
    } else if (choice === 3) {
        qt = `Expand: <br> $${a}(${c} - ${b}${v})$`;
        at = `Multiply all terms in the bracket by $${a}$: <br> $${a} \\times ${c} - ${a} \\times ${b}${v} \\equiv ${a*c} - ${a*b}${v}$`;
        av = `${a*c} - ${a*b}${v}`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};    

window.expandingGenerators.one_pair_two_var_inside = function(q_id) {
    
    const choice = getRandomInt(1,2);
    const a = getRandomInt(2,10);
    
    let v1r, v2r;
    
    while (true) {
        v1r = getRandomInt(0,6);
        v2r = getRandomInt(0,6);
        if (v1r != v2r) break;
    }
    
    const v1 = ["p","q","r","s","t","x","y"][v1r];
    const v2 = ["p","q","r","s","t","x","y"][v2r];
    
    let b, c, qt, at, av;
    
    while (true) {
        b = getRandomInt(2,10);
        c = getRandomInt(2,12);
        
        if (findHCF(b,c) === 1) break;
    }
    
    if (choice === 1) {
        qt = `Expand: <br> $${a}(${b}${v1} + ${c}${v2})$`;
        at = `Multiply all terms in the bracket by $${a}$: <br> $${a} \\times ${b}${v1} + ${a} \\times ${c}${v2} \\equiv ${a*b}${v1} + ${a*c}${v2}$`;
        av = `${a*b}${v1} + ${a*c}${v2}`;
    } else if (choice === 2) {
        qt = `Expand: <br> $${a}(${b}${v1} - ${c}${v2})$`;
        at = `Multiply all terms in the bracket by $${a}$: <br> $${a} \\times ${b}${v1} - ${a} \\times ${c}${v2} \\equiv ${a*b}${v1} - ${a*c}${v2}$`;
        av = `${a*b}${v1} - ${a*c}${v2}`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};    


window.expandingGenerators.one_pair_two_var_inside_outside = function(q_id) {
    
    const choice = getRandomInt(1,2);
    const a = getRandomInt(2,10);
    
    let v1r, v2r;
    
    while (true) {
        v1r = getRandomInt(0,6);
        v2r = getRandomInt(0,6);
        if (v1r != v2r) break;
    }
    
    const v1 = ["p","q","r","s","t","x","y"][v1r];
    const v2 = ["p","q","r","s","t","x","y"][v2r];
    
    let b, c, qt, at, av;
    
    while (true) {
        b = getRandomInt(2,10);
        c = getRandomInt(2,12);
        
        if (findHCF(b,c) === 1) break;
    }
    
    if (choice === 1) {
        qt = `Expand: <br> $${a}${v1}(${b}${v2} + ${c})$`;
        at = `Multiply all terms in the bracket by $${a}${v1}$: <br> $${a}${v1} \\times ${b}${v2} + ${a}${v1} \\times ${c} \\equiv ${a*b}${v1}${v2} + ${a*c}${v1}$`;
        av = `${a*b}${v1}${v2} + ${a*c}${v1}`;
    } else if (choice === 2) {
        qt = `Expand: <br> $${a}${v1}(${b} - ${c}${v2})$`;
        at = `Multiply all terms in the bracket by $${a}${v1}$: <br> $${a}${v1} \\times ${b} - ${a}${v1} \\times ${c}${v2} \\equiv ${a*b}${v1} - ${a*c}${v1}${v2}$`;
        av = `${a*b}${v1} - ${a*c}${v1}${v2}`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};    
    

window.expandingGenerators.one_pair_two_var_inside_outside_share = function(q_id) {
    
    const choice = getRandomInt(1,2);
    const a = getRandomInt(2,10);
    
    let v1r, v2r;
    
    while (true) {
        v1r = getRandomInt(0,6);
        v2r = getRandomInt(0,6);
        if (v1r != v2r) break;
    }
    
    const v1 = ["p","q","r","s","t","x","y"][v1r];
    const v2 = ["p","q","r","s","t","x","y"][v2r];
    
    let b, c, qt, at, av;
    
    while (true) {
        b = getRandomInt(2,10);
        c = getRandomInt(2,12);
        
        if (findHCF(b,c) === 1) break;
    }
    
    if (choice === 1) {
        qt = `Expand and simplify: <br> $${a}${v1}(${b}${v1} + ${c}${v2})$`;
        at = `Multiply all terms in the bracket by $${a}${v1}$: <br> $${a}${v1} \\times ${b}${v1} + ${a}${v1} \\times ${c}${v2} \\equiv ${a*b}${v1}^2 + ${a*c}${v1}${v2}$`;
        av = `${a*b}${v1}^2 + ${a*c}${v1}${v2}`;
    } else if (choice === 2) {
        qt = `Expand and simplify: <br> $${a}${v1}(${b}${v2} - ${c}${v1})$`;
        at = `Multiply all terms in the bracket by $${a}${v1}$: <br> $${a}${v1} \\times ${b}${v2} - ${a}${v1} \\times ${c}${v1} \\equiv ${a*b}${v1}${v2} - ${a*c}${v1}^2$`;
        av = `${a*b}${v1}${v2} - ${a*c}${v1}^2`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};    


window.expandingGenerators.two_pair_add = function(q_id) {
    
    const choice = getRandomInt(1,3);
    const a = getRandomInt(2,12);
    const d = getRandomInt(2,12);
    
    let v1r, v2r;
    
    while (true) {
        v1r = getRandomInt(0,6);
        v2r = getRandomInt(0,6);
        if (v1r != v2r) break;
    }
    
    let v = [];
    v[0] = ["p","q","r","s","t","x","y"][v1r];
    v[1] = ["p","q","r","s","t","x","y"][v2r];
    
    const vca = getRandomInt(0,1);
    let vcb = 0;
    if (vca === 0) {
        vcb = 1;
    }
    
    let b, c, e, f, qt, at, av;
    
    while (true) {
        b = getRandomInt(2,10);
        c = getRandomInt(2,12);
        e = getRandomInt(2,10);
        f = getRandomInt(2,10);
        
        if (findHCF(b,c) === 1 && findHCF(e,f) === 1) break;
    }
    
    if (choice === 1) {
        qt = `Expand and simplify: <br> $${a}(${b}${v[0]} + ${c}${v[1]}) + ${d}${v[vca]}(${e} + ${f}${v[vcb]}) $`;
        at = `Expand both brackets: <br> $${a} \\times ${b}${v[0]} + ${a} \\times ${c}${v[1]} + ${d}${v[vca]} \\times ${e} + ${d}${v[vca]} \\times ${f}${v[vcb]} `+
            `= ${a*b}${v[0]} + ${a*c}${v[1]} + ${d*e}${v[vca]} + ${d*f}${v[vca]}${v[vcb]} $ <br>`+
            `Collect like terms to simplify: <br>`;
        if (vca === 0) {
            at = at + `$${a*b + d*e}${v[0]} + ${a*c}${v[1]} + ${d*f}${v[vca]}${v[vcb]}$`;
            av = `${a*b + d*e}${v[0]} + ${a*c}${v[1]} + ${d*f}${v[vca]}${v[vcb]}`;
        } else {
            at = at + `$${a*b}${v[0]} + ${a*c + d*e}${v[1]} + ${d*f}${v[vca]}${v[vcb]}$`;
            av = `${a*b}${v[0]} + ${a*c + d*e}${v[1]} + ${d*f}${v[vca]}${v[vcb]}`;
        }
    } else if (choice === 2) {
        qt = `Expand and simplify: <br> $${a}(${b}${v[0]} + ${c}${v[1]}) + ${d}${v[vca]}(${e} - ${f}${v[vcb]}) $`;
        at = `Expand both brackets: <br> $${a} \\times ${b}${v[0]} + ${a} \\times ${c}${v[1]} + ${d}${v[vca]} \\times ${e} - ${d}${v[vca]} \\times ${f}${v[vcb]} `+
            `= ${a*b}${v[0]} + ${a*c}${v[1]} + ${d*e}${v[vca]} - ${d*f}${v[vca]}${v[vcb]} $ <br>`+
            `Collect like terms to simplify: <br>`;
        if (vca === 0) {
            at = at + `$${a*b + d*e}${v[0]} + ${a*c}${v[1]} - ${d*f}${v[vca]}${v[vcb]}$`;
            av = `${a*b + d*e}${v[0]} + ${a*c}${v[1]} - ${d*f}${v[vca]}${v[vcb]}`;
        } else {
            at = at + `$${a*b}${v[0]} + ${a*c + d*e}${v[1]} - ${d*f}${v[vca]}${v[vcb]}$`;
            av = `${a*b}${v[0]} + ${a*c + d*e}${v[1]} - ${d*f}${v[vca]}${v[vcb]}`;
        }
    } else if (choice === 3) {
        qt = `Expand and simplify: <br> $${a}(${b}${v[0]} - ${c}${v[1]}) - ${d}${v[vca]}(${e} - ${f}${v[vcb]}) $`;
        at = `Expand both brackets: <br> $${a} \\times ${b}${v[0]} - ${a} \\times ${c}${v[1]} - ${d}${v[vca]} \\times ${e} + ${d}${v[vca]} \\times ${f}${v[vcb]} `+
            `= ${a*b}${v[0]} - ${a*c}${v[1]} - ${d*e}${v[vca]} + ${d*f}${v[vca]}${v[vcb]} $ <br>`+
            `Collect like terms to simplify: <br>`;
        if (vca === 0) {
            if (a*b - d*e != 0) {
                at = at + `$${a*b - d*e}${v[0]} - ${a*c}${v[1]} + ${d*f}${v[vca]}${v[vcb]}$`;
                av = `${a*b - d*e}${v[0]} - ${a*c}${v[1]} + ${d*f}${v[vca]}${v[vcb]}`;
            } else {
                at = at + ` ${d*f}${v[vca]}${v[vcb]} - ${a*c}${v[1]}$`;
                av = `${d*f}${v[vca]}${v[vcb]} - ${a*c}${v[1]}`;
            }
        } else {
            if (a*c - d*e > 0) {
                at = at + `$${a*b}${v[0]} + ${a*c - d*e}${v[1]} + ${d*f}${v[vca]}${v[vcb]}$`;
                av = `${a*b}${v[0]} + ${a*c - d*e}${v[1]} + ${d*f}${v[vca]}${v[vcb]}`;
            } else if (a*c - d*e < 0) {
                at = at + `$${a*b}${v[0]} - ${d*e - a*c}${v[1]} + ${d*f}${v[vca]}${v[vcb]}$`;
                av = `${a*b}${v[0]} - ${d*e - a*c}${v[1]} + ${d*f}${v[vca]}${v[vcb]}`;
            } else {
                at = at + `$${a*b}${v[0]} + ${d*f}${v[vca]}${v[vcb]}$`;
                av = `${a*b}${v[0]} + ${d*f}${v[vca]}${v[vcb]}`;
            }
        }
    }
        
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};    

window.expandingGenerators.two_pair_mult_1var_c1 = function(q_id) {
    
    const v = ["p","q","r","s","t","x","y"][getRandomInt(0,6)];
    const a = getRandomInt(1,12);
    const b = getRandomInt(1,12);
    
    const choice = getRandomInt(1,5);
    
    let qt, at, av;
    
    if (choice === 1) {
        qt = `Expand and simplify: <br> $(${v} + ${a})(${v} + ${b})$`;
        at = `Expand: <br> First: $${v}^2$ <br> Outside: $+${b}${v}$ <br> Inside: $+${a}${v}$ <br> Last: $+${a} \\times ${b} = +${a*b}$ <br> Simplify: <br>`;
        av = `${v}^2 + ${a+b}${v} + ${a*b}`;
        } else if (choice === 2) {
        qt = `Expand and simplify: <br> $(${v} - ${a})(${v} - ${b})$`;
        at = `Expand: <br> First: $${v}^2$ <br> Outside: $-${b}${v}$ <br> Inside: $-${a}${v}$ <br> Last: $-${a} \\times -${b} = +${a*b}$ <br> Simplify: <br>`;
        av = `${v}^2 - ${a+b}${v} + ${a*b}`;
        } else if (choice === 3) {
        qt = `Expand and simplify: <br> $(${v} + ${a})(${v} - ${b})$`;
        at = `Expand: <br> First: $${v}^2$ <br> Outside: $-${b}${v}$ <br> Inside: $+${a}${v}$ <br> Last: $${a} \\times -${b} = -${a*b}$ <br> Simplify: <br>`;
            if (a-b > 0 ) {
                av = `${v}^2 + ${a-b}${v} - ${a*b}`;
            } else if (a-b < 0) {
                av = `${v}^2 - ${b-a}${v} - ${a*b}`;
            } else {
                av = `${v}^2 - ${a*b}`;
            }
        } else if (choice === 4) {
            qt = `Expand and simplify: <br> $(${a} - ${v})(${v} + ${b})$`;
            at = `Expand: <br> First: $${a}${v}$ <br> Outside: $+${a} \\times ${b} = +${a*b}$ <br> Inside: $-${v}^2$ <br> Last: $-${b}${v}$ <br> Simplify: <br>`;
            if (a-b > 0 ) {
                av = `${a*b} + ${a-b}${v} - ${v}^2`;
            } else if (a-b < 0) {
                av = `${a*b} - ${b-a}${v} - ${v}^2`;
            } else {
                av = `${a*b} - ${v}^2`;
            }
        } else if (choice === 5) {
            qt = `Expand and simplify: <br> $(${a} - ${v})(${b} - ${v})$`;
            at = `Expand: <br> First: $${a} \\times ${b} = ${a*b} $ <br> Outside: $-${a}${v}$ <br> Inside: $-${b}${v}$ <br> Last: $${v}^2$ <br> Simplify: <br>`;
            av = `${a*b} - ${a+b}${v} + ${v}^2`;
        }
    
    
    at = at + `$` + av + `$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};   
    

window.expandingGenerators.two_pair_mult_1var = function(q_id) {
    
    const v = ["p","q","r","s","t","x","y"][getRandomInt(0,6)];
    const a = getRandomInt(2,10);
    const b = getRandomInt(1,12);
    const c = getRandomInt(2,10);
    const d = getRandomInt(1,12);
    
    const choice = getRandomInt(1,3);
    
    let qt, at, av;
    
    if (choice === 1) {
        qt = `Expand and simplify: <br> $(${a}${v} + ${b})(${c}${v} + ${d})$`;
        at = `Expand: <br> First: $${a}${v} \\times ${c}${v} = ${a*c}${v}^2$ <br> Outside: $+${a*d}${v}$ <br> Inside: $+${b*c}${v}$ <br> Last: $+${b} \\times ${d} = +${b*d}$ <br> Simplify: <br>`;
        av = `${a*c}${v}^2 + ${a*d+b*c}${v} + ${d*b}`;
    } else if (choice === 2) {
        qt = `Expand and simplify: <br> $(${a}${v} - ${b})(${c}${v} - ${d})$`;
        at = `Expand: <br> First: $${a}${v} \\times ${c}${v} = ${a*c}${v}^2$ <br> Outside: $-${a*d}${v}$ <br> Inside: $-${b*c}${v}$ <br> Last: $-${b} \\times -${d} = +${b*d}$ <br> Simplify: <br>`;
        av = `${a*c}${v}^2 - ${a*d+b*c}${v} + ${d*b}`;
    } else if (choice === 3) {
        qt = `Expand and simplify: <br> $(${a}${v} - ${b})(${c}${v} + ${d})$`;
        at = `Expand: <br> First: $${a}${v} \\times ${c}${v} = ${a*c}${v}^2$ <br> Outside: $+${a*d}${v}$ <br> Inside: $-${b*c}${v}$ <br> Last: $-${b} \\times ${d} = -${b*d}$ <br> Simplify: <br>`;
        if (a*d - b*c > 0) {
            av=`${a*c}${v}^2 + ${a*d-b*c}${v} - ${d*b}`;
        } else if (a*d - b*c < 0) {
            av=`${a*c}${v}^2 - ${b*c-a*d}${v} - ${d*b}`;
        } else {
            av=`${a*c}${v}^2 - ${d*b}`;
        }
    }
    
    at = at + `$` + av + `$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};   
    
