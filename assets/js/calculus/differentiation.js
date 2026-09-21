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

window.diffGenerators = window.diffGenerators || {};

window.diffGenerators.power_one_type1 = function(q_id) {

    const a = getRandomInt(2,12);
    const n = getRandomInt(3,12);
    
    let x,y;
    while (true) {
        x = ["m","n","t","x"][getRandomInt(0,3)];
        y = ["E", "G", "t", "x", "y"][getRandomInt(0,4)];
        
        if (x !=y ) break;
    }
    
    let qt = `Find $\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}}$ for $$${y} = ${a}${x}^{${n}}$$` ;
    let av = `${a*n}${x}^{${n-1}}`
    let ans = `$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = ${a*n}${x}^{${n-1}}$`;
    let at = `$$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = ${n} \\times ${a} ${x}^{${n}-1} = ${a*n}${x}^{${n-1}}$$`;
    
    return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};

window.diffGenerators.power_one_type2 = function(q_id) {

    const a = getRandomInt(2,12);
    const n = getRandomInt(2,12);
    
    let x,y;
    while (true) {
        x = ["m","n","t","x"][getRandomInt(0,3)];
        y = ["E", "G", "t", "x", "y"][getRandomInt(0,4)];
        
        if (x !=y ) break;
    }
    
    let qt = `Find $\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}}$ for $$${y} = \\frac{${a}}{${x}^{${n}}}$$` ;
    let av = `${-a*n}${x}^{${-n-1}}`
    let ans = `$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = ${-a*n}${x}^{${-n-1}} = \\frac{${-a*n}}{${x}^{${n+1}}}$`;
    let at = `$$${y} = ${a}${x}^{${-n}}$$`
    +`$$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = ${-n} \\times ${a} ${x}^{${-n}-1} = ${-a*n}${x}^{${-n-1}} = \\frac{${-a*n}}{${x}^{${n+1}}}$$`;
    
    return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};

window.diffGenerators.power_one_type3 = function(q_id) {

    const a = getRandomInt(2,12);
    const n = getRandomInt(2,4);
    
    if (n === 2) {
        nt =``;
    } else {
        nt = `${n}`;
    }
    
    let x,y;
    while (true) {
        x = ["m","n","t","x"][getRandomInt(0,3)];
        y = ["E", "G", "t", "x", "y"][getRandomInt(0,4)];
        
        if (x !=y ) break;
    }
    
    const gcd = findHCF(a,n);
    const num = a/gcd
    const den = n/gcd
    
    let av, ans, at;
    
    at = `$$${y} = ${a}${x}^{\\frac{1}{${n}}}$$` +
    `$$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = \\frac{1}{${n}} \\times ${a} ${x}^{\\frac{1}{${n}}-1}$$`;
    
    if (den === 1 && num != 1) {
        av = `${num}${x}^{-\\frac{${-1+n}}{${n}}}`;
        ans = `$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = ${num}${x}^{-\\frac{${-1+n}}{${n}}}$`;
    } else if (den === 1 && num === 1) {
        av = `${x}^{-\\frac{${-1+n}}{${n}}}`;
        ans = `$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = ${x}^{-\\frac{${-1+n}}{${n}}}$`;
    } else {
        av = `\\frac{${num}}{${den}}${x}^{\\frac{${(1-n)}}{${n}}}`;
        ans = `$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = \\frac{${num}}{${den}}${x}^{-\\frac{${-1+n}}{${n}}}$`;
    }
        
    let qt = `Find $\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}}$ for $$${y} = ${a}\\sqrt[${nt}]{${x}}$$` ;
    at = at + `$` + ans + `$`;
    at = at + `<br><br>` + av;
    
    return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "x",
        solution: at
    };
};


window.diffGenerators.power_multi = function(q_id) {
    // 1. Pick random variables for y and x (ensuring they aren't the same)
    let x, y;
    while (true) {
        x = ["m", "n", "t", "x"][getRandomInt(0, 3)];
        y = ["E", "G", "t", "x", "y"][getRandomInt(0, 4)];
        if (x !== y) break;
    }

    // 2. Generate terms, ensuring we ALWAYS have a mix of positive and negative powers
    // so the "Rewrite" step actually makes sense for the student.
    let termPairs = [];
    
    // Pick 1 guaranteed positive power (e.g., 2, 3, or 4)
    let posPow = getRandomInt(2, 4);
    let posCoeff = getRandomInt(1, 9) * [-1, 1][getRandomInt(0, 1)];
    termPairs.push({ a: posCoeff, n: posPow });

    // Pick 1 guaranteed negative power (e.g., -1, -2, or -3)
    let negPow = getRandomInt(-3, -1);
    let negCoeff = getRandomInt(1, 9) * [-1, 1][getRandomInt(0, 1)];
    termPairs.push({ a: negCoeff, n: negPow });

    // Optionally add a 3rd random term (either positive or negative)
    if (Math.random() > 0.5) {
        let extraPow;
        while (true) {
            extraPow = getRandomInt(-3, 4);
            // Make sure it doesn't clash with existing powers or zero
            if (extraPow !== 0 && !termPairs.some(t => t.n === extraPow)) break;
        }
        let extraCoeff = getRandomInt(1, 9) * [-1, 1][getRandomInt(0, 1)];
        termPairs.push({ a: extraCoeff, n: extraPow });
    }

    // Sort terms by power descending for a standard mathematical layout
    termPairs.sort((p1, p2) => p2.n - p1.n);

    // Helper: Formats terms for the question (turns negative powers into fractions)
    function formatTerm(coeff, pow, varName, isFirst) {
        if (coeff === 0) return "";
        let signPrefix = "";
        if (!isFirst) {
            signPrefix = coeff < 0 ? " - " : " + ";
        } else {
            signPrefix = coeff < 0 ? "-" : "";
        }

        let absC = Math.abs(coeff);
        let termStr = "";

        if (pow === 0) {
            termStr = `${absC}`;
        } else if (pow === 1) {
            termStr = (absC === 1) ? varName : `${absC}${varName}`;
        } else if (pow === -1) {
            termStr = (absC === 1) ? `\\frac{1}{${varName}}` : `\\frac{${absC}}{${varName}}`;
        } else if (pow > 1) {
            termStr = (absC === 1) ? `${varName}^{${pow}}` : `${absC}${varName}^{${pow}}`;
        } else { 
            let absPow = Math.abs(pow);
            termStr = (absC === 1) ? `\\frac{1}{${varName}^{${absPow}}}` : `\\frac{${absC}}{${varName}^{${absPow}}}`;
        }
        return signPrefix + termStr;
    }

    // Helper: Formats terms strictly in index/power form ($ax^n$) for the rewrite step
    function formatPowerFormTerm(coeff, pow, varName, isFirst) {
        if (coeff === 0) return "";
        let signPrefix = "";
        if (!isFirst) {
            signPrefix = coeff < 0 ? " - " : " + ";
        } else {
            signPrefix = coeff < 0 ? "-" : "";
        }

        let absC = Math.abs(coeff);
        let termStr = "";

        if (pow === 0) {
            termStr = `${absC}`;
        } else if (pow === 1) {
            termStr = (absC === 1) ? varName : `${absC}${varName}`;
        } else {
            termStr = (absC === 1) ? `${varName}^{${pow}}` : `${absC}${varName}^{${pow}}`;
        }
        return signPrefix + termStr;
    }

    // 3. Build the Question Expression (fractions shown)
    let questionExpr = termPairs.map((term, i) => formatTerm(term.a, term.n, x, i === 0)).join("");

    // Build the Power Form Expression (all on one line with negative indices for the rewrite step)
    let powerFormExpr = termPairs.map((term, i) => formatPowerFormTerm(term.a, term.n, x, i === 0)).join("");

    // 4. Calculate the Derivative (Power Rule: ax^n -> (a*n)x^(n-1))
    let derivativePairs = termPairs.map(term => {
        return { a: term.a * term.n, n: term.n - 1 };
    });

    // Build the Final Answer Expression
    let answerExpr = derivativePairs.map((term, i) => formatTerm(term.a, term.n, x, i === 0)).join("");

    // 5. Assemble the output strings
    let qt = `Find $\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}}$ for $$${y} = ${questionExpr}$$`;
    let av = answerExpr;
    let ans = `$\\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} = ${answerExpr}$`;
    
    // Solution layout: explicitly shows the rewrite step first, followed by the derivative
    let at = `$$\\begin{aligned}
    \\text{Rewrite: } & ${y} = ${powerFormExpr} \\\\[6pt]
    \\frac{\\mathrm{d}${y}}{\\mathrm{d}${x}} & = ${answerExpr}
    \\end{aligned}$$`;

    return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};


window.diffGenerators.chain_brackets = function(q_id) {
    
    let a = [];
    let n = [];
    let s = getRandomInt(0,1);
    
    while (true) {
        
        a[0] = getRandomInt(1,10);
        a[1] = getRandomInt(1,10);
        if (findHCF(a[0],a[1]) === 1) break;
    }
    
    n[0] = getRandomInt(2,5);
    n[1] = getRandomInt(0,n[0]-1);
    n[2] = getRandomInt(3,10);
    
    let qt, ans, av, at, atf, st;
    
    if (s === 0) {
        st =`-`;
    } else {
        st = `+`;
    }
    
    qt = `Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ for `;
    
    let atx = [];
    if (a[0] === 1) {
        atx[0] = ``;
    } else {
        atx[0] = a[0];
    }
    if (s === 1 && a[1] === 1) {
        atx[1] = `+`;
    } else if (s === 1) {
        atx[1] = `+` + a[1];
    } else if (s === 0 && a[1] === 1) {
        atx[1] = `-`;
    } else {
        atx[1] = `-` + a[1];
    }
    
    let nt = [];
    for (let i = 0; i < 2; i++) {
        if (n[i] === 1) {
            nt[i] = `x`;
        } else {
            nt[i] = `x^{${n[i]}}`;
        }
    }
    if (a[1] === 1 && n[1] === 0) {
        atx[1] = st + `1`;
    }
        
    if (n[1] === 0) {
        nt[1] = ``;
    }
    let gcdb = findHCF(n[0]*a[0],a[1]);
    
    qt = qt + `$$ y = (${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]}} $$`;
    at = `$$ \\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${n[2]} \\times (${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]} - 1}`;
    av = ``;
    
if (n[1] === 0) {
        if (n[0] === 2) {
            at = at + `\\times 2 \\times ${atx[0]} x$$`;
            at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${n[2]*2*a[0]}x(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}$$`;
            av = `${n[2]*2*a[0]}x(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
        } else {
            let dCoeff0 = n[0] * a[0];
            let dPow0 = n[0] - 1;
            let powStr0 = dPow0 === 1 ? `x` : `x^{${dPow0}}`;
            at = at + `\\times ${n[0]} \\times ${atx[0]} x^{${n[0]}-1}$$`;
            
            av = `${n[2] * dCoeff0}${powStr0}(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
            at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${av} $$`;
        }
    } else if (n[1] === 1) {
        if (n[0] === 2) {
            at = at + `\\times ( 2 \\times ${atx[0]} x ${st} ${a[1]} ) $$`;
            at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${n[2]}(${2*a[0]}x ${st} ${a[1]})(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}} $$`;
            av = `${n[2]}(${2*a[0]}x ${st} ${a[1]})(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
            if (typeof gcdb !== 'undefined' && gcdb != 1) {
                let factoredDisplay = `${gcdb*n[2]}(${2*a[0]/gcdb}x ${st} ${a[1]/gcdb})(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
                at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${factoredDisplay} $$`;
            }
        } else {
            let dCoeff0 = n[0] * a[0];
            let dPow0 = n[0] - 1;
            let powStr0 = dPow0 === 1 ? `x` : `x^{${dPow0}}`;
            at = at + `\\times ( ${n[0]} \\times ${atx[0]} x^{${n[0]}-1} ${atx[1]} ) $$`;
            
            av = `${n[2]}(${dCoeff0}${powStr0} ${st} ${a[1]})(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
            at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${av} $$`;
            
            let g = findHCF(dCoeff0, a[1]);
            if (g !== 1) {
                let sc = g * n[2];
                let ta = (dCoeff0/g === 1) ? `x^{${dPow0}}` : `${dCoeff0/g}x^{${dPow0}}`;
                let tb = a[1]/g;
                let factoredDisplay = `${sc}(${ta} ${st} ${tb})(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
                at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${factoredDisplay} $$`;
            }
        }
    } else {
        let dCoeff0 = n[0] * a[0];
        let dPow0 = n[0] - 1;
        let powStr0 = dPow0 === 1 ? `x` : `x^{${dPow0}}`;
        
        let dCoeff1 = n[1] * a[1];
        let dPow1 = n[1] - 1;
        let powStr1 = dPow1 === 1 ? `x` : `x^{${dPow1}}`;
        
        at = at + `\\times ( ${n[0]} \\times ${atx[0]} x^{${n[0]}-1} ${st} ${n[1]} \\times ${a[1]} x^{${n[1]}-1} ) $$`;
        
        av = `${n[2]}(${dCoeff0}${powStr0} ${st} ${dCoeff1}${powStr1})(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
        at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${av} $$`;
        
        let g = findHCF(dCoeff0, dCoeff1);
        let minX = Math.min(dPow0, dPow1);
        
        if (g !== 1 || minX > 0) {
            let sc = g * n[2];
            let rem0 = dCoeff0 / g;
            let remPow0 = dPow0 - minX;
            let rem1 = dCoeff1 / g;
            let remPow1 = dPow1 - minX;
            
            let ta = rem0 === 1 && remPow0 > 0 ? (remPow0 === 1 ? `x` : `x^{${remPow0}}`) : `${rem0}${remPow0 === 0 ? '' : (remPow0 === 1 ? 'x' : `x^{${remPow0}}`)}`;
            let tb = rem1 === 1 && remPow1 > 0 ? (remPow1 === 1 ? `x` : `x^{${remPow1}}`) : `${rem1}${remPow1 === 0 ? '' : (remPow1 === 1 ? 'x' : `x^{${remPow1}}`)}`;
            let xFactor = minX === 0 ? '' : (minX === 1 ? `x` : `x^{${minX}}`);
            
            let factoredDisplay = `${sc}${xFactor}(${ta} ${st} ${tb})(${atx[0]}${nt[0]} ${atx[1]}${nt[1]} )^{${n[2]-1}}`;
            at = at + `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${factoredDisplay} $$`;
        }
    }
    
    ans = `$` + av + `$`;
 

    
    return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "solve",
        solution: at
    };
};
                
window.diffGenerators.chain_brackets2 = function(q_id) {
    
    let a = [];
    let n = [];
    let s = getRandomInt(0,1);
    
    while (true) {
        a[0] = getRandomInt(1,10);
        a[1] = getRandomInt(1,10);
        if (findHCF(a[0],a[1]) === 1) break;
    }
    
    n[0] = getRandomInt(2,5);
    n[1] = getRandomInt(0,n[0]-1);
    n[2] = getRandomInt(3,10);
    
    const st = s === 0 ? '-' : '+';
    
    // --- Helper: format "coef*x^pow" as clean LaTeX ---
    function term(coef, pow) {
        if (coef === 0) return '';
        let out = '';
        if (coef === 1) out = '';
        else out = coef;
        if (pow === 0) { if (out === '') out = '1'; }
        else if (pow === 1) out += 'x';
        else out += `x^{${pow}}`;
        return out;
    }
    
    // --- Question ---
    let atx0 = a[0] === 1 ? '' : a[0];
    let atx1 = st + (a[1] === 1 ? '' : a[1]);
    if (n[1] === 0) atx1 = st + '1';
    
    let nt0 = n[0] === 1 ? 'x' : `x^{${n[0]}}`;
    let nt1 = n[1] === 0 ? '' : (n[1] === 1 ? 'x' : `x^{${n[1]}}`);
    
    let bracket = `${atx0}${nt0} ${atx1}${nt1}`;
    let qt = `Find $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ for $$ y = (${bracket})^{${n[2]}} $$`;
    
    // --- Solution steps ---
    // Inner derivative terms:
    let d1 = term(a[0]*n[0], n[0]-1);           // derivative of first term
    let d2 = n[1] > 0 ? ` ${st} ${term(a[1]*n[1], n[1]-1)}` : ''; // derivative of second term (empty if n[1]=0)
    let inner = `${d1}${d2}`;
    
    // GCD factoring of the inner bracket
    let gcdb = n[1] > 0 ? findHCF(a[0]*n[0], a[1]*n[1]) : 1;
    let inner_simplified;
    if (gcdb > 1) {
        let f1 = term(a[0]*n[0]/gcdb, n[0]-1);
        let f2 = n[1] > 0 ? ` ${st} ${term(a[1]*n[1]/gcdb, n[1]-1)}` : '';
        inner_simplified = `${gcdb}(${f1}${f2})`;
    } else {
        inner_simplified = inner;
    }
    
    let at = `$$ \\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${n[2]}(${bracket})^{${n[2]-1}} \\times (${inner}) $$`;
    at += `$$\\frac{\\mathrm{d}y}{\\mathrm{d}x} = ${n[2]}(${inner_simplified})(${bracket})^{${n[2]-1}} $$`;
    
    // --- Check value (final answer) ---
    const { simplify } = require('mathjs');
    let av = simplify(
        `${n[2]}*(${a[0]}*x^${n[0]} ${st} ${a[1]}*x^${n[1]})^${n[2]-1}*(${a[0]*n[0]}*x^${n[0]-1} ${st} ${a[1]*n[1]}*x^${n[1]-1})`
    ).toTex();
    
    return {
        id: q_id,
        question: qt,
        answer: 'x',
        check_val: av,
        goal: "solve",
        solution: at
    };
};   
