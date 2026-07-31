function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

window.simplifyingGenerators = {};

window.simplifyingGenerators.add_like_terms = function(q_id) {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 8) + 2;
    const variable = ['x', 'y', 't'][Math.floor(Math.random() * 3)];
    
    return {
        id: q_id,
        question: `Simplify $${a}${variable} + ${b}${variable}$`,
        answer: `$${a+b}${variable}$`,
        check_val: `${a+b}${variable}`,
        solution: `$${a} + ${b} = ${a+b}$, so the result is $${a+b}${variable}$`
    };
};

window.simplifyingGenerators.collect_like_terms = function(q_id) {
    const var1 = ['x', 'y', 't', 'q', 'ab'][getRandomInt(0, 4)];
    const var2 = ['m', 'p', 'rs'][getRandomInt(0, 2)];

    // Randomly assign 2 or 3 items per variable
    const var1items = getRandomInt(2, 3);
    const var2items = getRandomInt(2, 3);

    let v1 = [];
    let v2 = [];
    let total1 = 0;
    let total2 = 0;

    // Generate values and calculate totals
    for (let i = 0; i < var1items; i++) {
        v1[i] = getRandomInt(1, 12) * (Math.random() < 0.5 ? -1 : 1);
        total1 += v1[i];
    }
    for (let i = 0; i < var2items; i++) {
        v2[i] = getRandomInt(1, 12) * (Math.random() < 0.5 ? -1 : 1);
        total2 += v2[i];
    }

    // --- 1. BUILD THE QUESTION STRING (qt) ---
    // We combine terms into a single list to interleave them naturally
    let questionTerms = [];
    const maxItems = Math.max(var1items, var2items);

    for (let i = 0; i < maxItems; i++) {
        if (i < var1items) questionTerms.push({ val: v1[i], vbl: var1 });
        if (i < var2items) questionTerms.push({ val: v2[i], vbl: var2 });
    }

    let qt = "$";
    questionTerms.forEach((term, index) => {
        let val = term.val;
        let vbl = term.vbl;

        if (index === 0) {
            if (val === 1) {
                qt += `${vbl}`;
            } else if (val === -1) {
                qt += `-${vbl}`;
            } else {
            // First term: don't show '+' if positive
                qt += `${val}${vbl}`;
            }
        } else {
            if (Math.abs(val) === 1) {
                qt += (val > 0 ? ` + ` : ` - `) + `${vbl}`;
            } else {
            // Subsequent terms: handle signs properly
                qt += (val > 0 ? ` + ${val}` : ` - ${Math.abs(val)}`) + `${vbl}`;
            }
        }
    });
    qt += "$";

    // --- 2. BUILD THE ANSWER STRING ---
    // Helper to format coefficients (handling 1, -1, and 0)
    function formatTerm(coeff, variable, isFirst) {
        if (coeff === 0) return "";
        let res = "";
        let displayCoeff = Math.abs(coeff) === 1 ? "" : Math.abs(coeff);
        
        if (isFirst) {
            res = (coeff < 0 ? "-" : "") + displayCoeff + variable;
        } else {
            res = (coeff > 0 ? " + " : " - ") + displayCoeff + variable;
        }
        return res;
    }

    let ansText = formatTerm(total1, var1, true);
    ansText += formatTerm(total2, var2, ansText === "");

    // Final fallback if everything cancels to 0
    if (ansText === "") ansText = "0";

    return {
        id: q_id,
        question: qt,
        answer: `$${ansText}$`,
        check_val: ansText,
        goal: "simplify",
        solution: `Combine the ${var1} terms: (${v1.join(' + ')}). Combine the ${var2} terms: (${v2.join(' + ')}). <br>Result: $${ansText}$`
    };
};
        
    

window.simplifyingGenerators.multiply_indices = function(q_id) {
    const p1 = Math.floor(Math.random() * 7) + 2;
    const p2 = Math.floor(Math.random() * 7) + 2;
    
    return {
        id: q_id,
        question: `Simplify $x^{${p1}} \\times x^{${p2}}$`,
        answer: `$x^{${p1+p2}}$`,
        check_val: `x^{${p1+p2}}`,
        solution: `Add the powers: $${p1} + ${p2} = ${p1+p2}$`
    };
};

window.simplifyingGenerators.divide_indices = function(q_id) {
    
    let p1, p2;
    while (true) {
        
        p1 = Math.floor(Math.random() * 7) + 2;
        p2 = Math.floor(Math.random() * 7) + 2;
        if (p1 != p2) break;
    }
    
    return {
        id: q_id,
        question: `Write as a single power of $y$:<br /> $y^{${p1}} \\div y^{${p2}}$`,
        answer: `$y^{${p1-p2}}$`,
        check_val: `y^{${p1-p2}}`,
        solution: `Subtract the powers: $${p1} - ${p2} = ${p1-p2}$`
    };
};

window.simplifyingGenerators.power_indices = function(q_id) {
    
    let p1, p2;
    while (true) {
        p1 = getRandomInt(-5,10);
        p2 = getRandomInt(-4,12);
        if (p1 !=0 && p2 !=0 && p1 != 1 && p2 != 1) break;
    }
    
    return {
        id: q_id,
        question: `Simplify:  $\\left ( x^{${p1}} \\right )^{${p2}}$`,
        answer: `$x^{${p1*p2}}$`,
        check_val: `x^{${p1*p2}}`,
        solution: `Multiply the powers: $${p1} \\times ${p2} = ${p1*p2}$`
    };
};
        


window.simplifyingGenerators.simplify_multiplication = function(q_id) {
    const c1 = getRandomInt(2,10);
    const v1 = ['f', 'k', 'm', 'n', 'p', 'mn', 'pk'][getRandomInt(0,6)];
    const c2 = getRandomInt(4,20);
    const v2 = ['q', 'r', 's', 'x', 'y', 'qs', 'rx', 'sy'][getRandomInt(0,7)];
    
    return {
        id: q_id,
        question: `Simplify $${c1}${v1} \\times ${c2}${v2}$`,
        answer: `$${c1*c2}${v1}${v2}$`,
        check_val: `${c1*c2}${v1}${v2}`,
        solution: `Multiply the coefficients: $${c1} \\times ${c2} = ${c1*c2}$ <br /> Write the algebra parts next to each other $${v1}${v2}$`
    };
};
        
window.simplifyingGenerators.simplify_multiplication_powers = function(q_id) {
    
    let c = [];
    let p = [];
    let ct = [];
    let pt = [];
    
     c[0] = getRandomInt(1,10);
     c[1] = getRandomInt(1,10);
    const v1 = ['f', 'k', 'm', 'n', 'p'][getRandomInt(0,4)];
     p[0] = getRandomInt(1,4);
     p[1] = getRandomInt(2,4);
     c[2] = getRandomInt(1,10);
     c[3] = getRandomInt(1,10);
    const v2 = ['q', 'r', 's', 'x', 'y'][getRandomInt(0,4)];
     p[2] = getRandomInt(1,2);
     p[3] = getRandomInt(2,5);
    
    const type = getRandomInt(1,1);
    
    for (let i=0; i<4; i++) {
        if (c[i] === 1) {
            ct[i] = "";
        } else {
            ct[i] = c[i].toString();
        }
        if (p[i] === 1) {
            if (i<2) {
            pt[i] = `${v1}`;
        } else {
            pt[i] = `${v2}`;
        }
        } else {
            if (i<2) {
            pt[i] = `${v1}^{${p[i]}}`;
        } else {
            pt[i] = `${v2}^{${p[i]}}`;
        }
    }
}
    
    let qt, at;
    
    
    if (type === 1) {
        qt = `Simplify: $${ct[0]}` + pt[0] + `\\times ${ct[2]}` + pt[2] + `\\times ${ct[3]}` + pt[3] + ` \\times ${ct[1]}` + pt[1] + `$`;
        at = `Multiply coefficients $${c[0]} \\times ${c[2]} \\times ${c[3]} \\times ${c[1]} = ${c[0]*c[1]*c[2]*c[3]}$ <br />Collect like terms $`+pt[0] + ` \\times `+ pt[1] + ` = ${v1}^{${p[0]+p[1]}}$ <br />$` + pt[2] + ` \\times ` + pt[3] + ` = ${v2}^{${p[2]+p[3]}}$`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$${c[0]*c[1]*c[2]*c[3]}${v1}^{${p[0]+p[1]}}${v2}^{${p[2]+p[3]}}$`,
        check_val: `${c[0]*c[1]*c[2]*c[3]}${v1}^{${p[0]+p[1]}}${v2}^{${p[2]+p[3]}}`,
        solution: at
    };
};    
    

window.simplifyingGenerators.simplify_multiplication_division_power_powers = function(q_id) {
    let c = [];
    let p = [];
    let pt = [];
    let check = 1;
    let xp, yp, qt, at;
    
    while (true) {
        for (let i = 0; i<4; i++) {
            c[i] = getRandomInt(1,9);
            p[i] = getRandomInt(2,9);
        }
        p[4] = getRandomInt(2,9);
        check = (c[0] * c[1]* Math.pow(c[2],p[2])) / c[3];
        xp = p[0] + p[2] - p[3];
        yp = p[1] + p[2] - p[4];
        if (check === roundToDecimalPlaces(check,0) && xp>0 && yp>0 && check <= 100) break;
    }
    
    if (c[0] === 1) {
        pt[0] = `x^{${p[0]}}`;
    } else {
        pt[0] = `${c[0]}x^{${p[0]}}`;
    }
    
    if (c[1] === 1) {
        pt[1] = `y^{${p[1]}}`;
    } else {
        pt[1] = `${c[1]}y^{${p[1]}}`;
    }
    
    if (c[2] === 1) {
        pt[2] = `(xy)^{${p[2]}}`;
    } else {
        pt[2] = `(${c[2]}xy)^{${p[2]}}`;
    }
    
    if (c[3] === 1) {
        pt[3] = `x^{${p[3]}}y^{${p[4]}}`;
    } else {
        pt[3] = `${c[3]}x^{${p[3]}}y^{${p[4]}}`;
    }
    
    qt = `Simplify <br /> $$ \\frac{` + pt[0] + ` \\times ` + pt[1] +` \\times ` + pt[2] + `}{` + pt[3] + `} $$`;
    at = `Calculate coefficients: <br /> $${c[0]} \\times ${c[1]} \\times ${c[2]}^{${p[2]}} \\div ${c[3]} = ${check}$ <br /> Power of $x$ <br /> $${p[0]} + ${p[2]} - ${p[3]} = ${xp}$ <br />`+
        `Power of $y$ <br /> $${p[1]} + ${p[2]} - ${p[4]} = ${yp} $ <br /> Put together`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$${check}x^{${xp}}y^{${yp}}$`,
        check_val: `${check}x^{${xp}}y^{${yp}}`,
        solution: at
    };
};    
    

                
window.simplifyingGenerators.simplify_multiplication_division_power_powers2 = function(q_id) {
    let c = [];
    let p = [];
    let pt = [];
    let check = 1;
    let pp, qp, qt, at;
    
    c[1] = getRandomInt(2,5);
    c[0] = c[1] * getRandomInt(1,10);
    
    const coef = c[0]/c[1];
    
    while (true) {
        p[0] = getRandomInt(1,9);
        p[1] = getRandomInt(2,9);
        p[2] = getRandomInt(2,9);
        p[3] = getRandomInt(2,9);
        p[4] = getRandomInt(1,9);
        p[5] = getRandomInt(1,9);
        
        pp = p[0] + p[1]*p[3] - p[4];
        qp = p[2]*p[3] - p[5];
        
        if (p[1] != p[2] && pp > 1 && qp > 1) break;
    }
    
    if (p[0] === 1) {
        pt[0] = `${c[0]}p`;
    } else {
        pt[0] = `${c[0]}p^{${p[0]}}`;
    }
    
    if (p[4] === 1 && p[5] === 1) {
        pt[1] = `${c[1]}pq`;
    } else if (p[4] === 1 && p[5] != 1) {
        pt[1] = `${c[1]}pq^{${p[5]}}`;
    } else if (p[4] != 1 && p[5] === 1) {
        pt[1] = `${c[1]}p^{${p[4]}}q`;
    } else {
        pt[1] = `${c[1]}p^{${p[4]}}q^{${p[5]}}`;
    }
    
    qt = `Simplify <br /> $$ \\frac{` + pt[0] + ` \\times (p^{${p[1]}}q^{${p[2]}})^{${p[3]}}}{` + pt[1] + `}$$`;
    at = `Coefficient: $${c[0]} \\div ${c[1]} = ${coef}$ <br /> Power of $p$: $${p[0]} + ${p[1]} \\times ${p[3]} - ${p[4]} = ${pp}$ <br />Power of $q$: $${p[2]} \\times ${p[3]} - ${p[5]} = ${qp}$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$${coef}p^{${pp}}q^{${qp}}$`,
        check_val: `${coef}p^{${pp}}q^{${qp}}$`,
        solution: at
    };
};    
        
        
    
