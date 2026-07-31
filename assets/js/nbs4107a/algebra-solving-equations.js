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

window.solvingGenerators = window.solvingGenerators || {};

window.solvingGenerators.linear_one_step = function(q_id) {
    const x = getRandomInt(2, 15);
    const a = getRandomInt(2, 10);
    const b = a * x;
    
    return {
        id: q_id,
        question: `Solve for $x$: <br /> $${a}x = ${b}$`,
        answer: `$x = ${x}$`,
        check_val: `${x}`,
        goal: "simplify",
        solution: `Divide both sides by $${a}$: <br /> $x = ${b} \\div ${a} = ${x}$.`
    };
};

window.solvingGenerators.linear_two_step = function(q_id) {
    const x = getRandomInt(2, 10);
    const a = getRandomInt(2, 6);
    const b = getRandomInt(1, 20);
    const c = (a * x) + b;
    
    return {
        id: q_id,
        question: `Solve for $x$: <br /> $${a}x + ${b} = ${c}$`,
        answer: `$x = ${x}$`,
        check_val: `${x}`,
        goal: "simplify",
        solution: `Subtract $${b}$ from both sides: <br /> $${a}x = ${c - b}$. <br> Divide by $${a}$: <br> $x = ${x}$.`
    };
};


window.solvingGenerators.linear_frac_left_fracans = function(q_id) {
          
    const a = getRandomInt(2, 10);
    const b = getRandomInt(1, 12);
    const c = getRandomInt(2, 8);
    const d = getRandomInt(1, 10);
    
    const xn = (c*d - b)/findHCF(c*d - b,a)
    const xd = a/findHCF(c*d-b,a)
    
    let av;
    
    if (xd === 1) {
        av = `$x = ${xn}$`;
    } else {
        av = `$x = \\frac{${xn}}{${xd}}$`;
    }
    
    return {
        id: q_id,
        question: `Solve for $x$: <br /> $\\frac{${a}x + ${b}}{${c}} = ${d}$`,
        answer: av,
        check_val: `\\frac{${xn}}{${xd}}`,
        goal: "solve",
        solution: `Multiply both sides by $${c}$: <br> $${a}x + ${b} = ${c*d}$ <br> Subtract $${b}$ from both sides: <br /> $${a}x = ${c*d - b}$. <br> Divide by $${a}$ both sides: <br>` + av
    };
};


window.solvingGenerators.linear_unknown_both_sides = function(q_id) {
    
    let a, b, c, d, av;
    const choice = getRandomInt(1,3);
    
    while (true) {
        a = getRandomInt(2,12);
        b = getRandomInt(1,12);
        c = getRandomInt(2,8);
        d = getRandomInt(1,10);
        if (a != c && b != d && Math.abs(a-c)>1) break;
    }
    
    let xn, xd
    
    if (choice === 1) {
        qt = `Solve the equation $${a}t + ${b} = ${c}t + ${d}$`;
        if (a > c) {
            xn = (d-b)/findHCF(d-b,a-c);
            xd = (a-c)/findHCF(d-b,a-c);
            at = `Subtract $${c}t$ from both sides: <br> $${a}t + ${b} - ${c}t = ${d}$ <br> Subtract $${b}$ from both sides: <br> $${a-c}t = ${d-b}$ <br>Divide both sides by $${a-c}$: <br>`;
        }
        else {
            xn = (b-d)/findHCF(d-b,a-c);
            xd = (c-a)/findHCF(d-b,a-c);
            at = `Subtract $${a}t$ from both sides: <br> $${b} = ${c}t + ${d} - ${a}t$ <br> Subtract $${d}$ from both sides: <br> $${b-d} = ${c-a}t$ <br>Divide both sides by $${c-a}$: <br>`;
        }
    } else if (choice === 2) {
        qt = `Solve the equation $${a}t - ${b} = ${c}t + ${d}$`;
        if (a > c) {
            xn = (d+b)/findHCF(d+b,a-c);
            xd = (a-c)/findHCF(d+b,a-c);
            at = `Subtract $${c}t$ from both sides: <br> $${a}t - ${b} - ${c}t = ${d}$ <br> Add $${b}$ to both sides: <br> $${a-c}t = ${d+b}$ <br>Divide both sides by $${a-c}$: <br>`;
        } else {
            xn = (-d-b)/findHCF(d+b,c-a);
            xd = (c-a)/findHCF(d+b,c-a);
            at = `Subtract $${a}t$ from both sides: <br> $-${b} = ${c}t + ${d} - ${a}t$ <br> Subtract $${d}$ from both sides: <br> $${-b-d} = ${c-a}t$ <br>Divide both sides by $${c-a}$: <br>`;
        }
    } else if (choice === 3) {
        qt = `Solve the equation $${a}t - ${b} = ${d} - ${c}t$`
        xn = (d+b)/findHCF(d+b,a+c);
        xd = (a+c)/findHCF(d+b,a+c);
        at = `Add $${c}t$ to both sides: <br> $${a}t - ${b} + ${c}t = ${d}$ <br> Add $${b}$ to both sides: <br> $${a+c}t = ${d+b}$ <br>Divide both sides by $${a+c}$: <br>`;
    }
    
    if (xd === 1) {
        av = `$t = ${xn}$`;
    } else {
        av = `$t = \\frac{${xn}}{${xd}}$`;
    }
    
    
    return {
        id: q_id,
        question: qt,
        answer: av,
        check_val: `\\frac{${xn}}{${xd}}`,
        goal: "solve",
        solution: at + av
    };
};    
        

window.solvingGenerators.linear_brackets = function(q_id) {
    
    const choice = getRandomInt(1,3);
    
    let a, b, c, d;
    
    const x = getRandomInt(1,8)*[-1,1][getRandomInt(0,1)];
    
    while (true) {
        a = getRandomInt(2,7);
        b = getRandomInt(2,9);
        c = getRandomInt(1,15);
        if (findHCF(b,c) === 1) break;
    }
    
    if (choice === 1) {
        d = a*(b*x + c);
        qt = `Solve the equation: <br> $${a}(${b}x + ${c}) = ${d}$`;
        atm1 = `Method 1 - Expand the brackets: <br> $${a*b}x + ${a*c} = ${d}$ <br> Subtract $${a*c}$ from both sides: <br> $${a*b}x = ${d - a*c}$ <br> Divide both sides by $${a*b}$: <br> $x=${x}$ <br> <br>`;
        atm2 = `Method 2: Divide both sides by $${a}$: <br> $${b}x+${c} = ${d/a}$ <br> Subtract $${c}$ from both sides: <br> $${b}x = ${d/a - c}$ <br> Divide both sides by $${b}$: <br> $x=${x}$`;
        at = atm1+atm2;
    } else if (choice === 2) {
        d = a*(b*x - c);
        qt = `Solve the equation: <br> $${a}(${b}x - ${c}) = ${d}$`;
        atm1 = `Method 1 - Expand the brackets: <br> $${a*b}x - ${a*c} = ${d}$ <br> Add $${a*c}$ to both sides: <br> $${a*b}x = ${d + a*c}$ <br> Divide both sides by $${a*b}$: <br> $x=${x}$ <br> <br>`;
        atm2 = `Method 2: Divide both sides by $${a}$: <br> $${b}x-${c} = ${d/a}$ <br> Add $${c}$ to both sides: <br> $${b}x = ${d/a + c}$ <br> Divide both sides by $${b}$: <br> $x=${x}$`;
        at = atm1+atm2;
    } else if (choice === 3) {
        d = a*(c - b*x);
        qt = `Solve the equation: <br> $${a}(${c} - ${b}x) = ${d}$`;
        atm1 = `Method 1 - Expand the brackets: <br> $${a*c} - ${a*b}x = ${d}$ <br> Subtract $${a*c}$ from both sides: <br> $-${a*b}x = ${d - a*c}$ <br> Divide both sides by $-${a*b}$: <br> $x=${x}$ <br> <br>`;
        atm2 = `Method 2: Divide both sides by $${a}$: <br> $${c}-${b}x = ${d/a}$ <br> Subtract $${c}$ from both sides: <br> $-${b}x = ${d/a - c}$ <br> Divide both sides by $-${b}$: <br> $x=${x}$`;
        at = atm1+atm2;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$x = ${x}$`,
        check_val: `${x}`,
        goal: "solve",
        solution: at
    };
};    
    

window.solvingGenerators.linear_brackets_both_sides = function(q_id) {
    
    let a, b, c, d, e, f, g, xt, av;
    
    while (true) {
        a = getRandomInt(2,9);
        b = getRandomInt(2,7);
        c = getRandomInt(1,10);
        d = getRandomInt(2,9);
        e = getRandomInt(2,7);
        f = getRandomInt(1,10);
        g = getRandomInt(2,9);
        
        if (findHCF(b,c) === 1 && findHCF(e,f) === 1 && a*b - d*e + g > 0) break;
    }
    
    const num = d*f + a*c;
    const den = a*b - d*e + g;
    const fac = findHCF(num,den);
    const xn = num/fac;
    const xd = den/fac;
    
    if (fac === 1 && xd != 1) {
        xt = `\\frac{${xn}}{${xd}}$`;
        av = `$x=\\frac{${xn}}{${xd}}$`;
    } else if (fac !=1 && xd !=1) {
        xt = `\\frac{${num}}{${den}} = \\frac{${xn}}{${xd}}$`;
        av = `$x=\\frac{${xn}}{${xd}}$`;
    } else {
        xt = `${xn}$`;
        av = `$x = ${xn}$`;
    }
    
    qt = `Solve: <br> $${a}(${b}x - ${c}) = ${d}(${e}x + ${f}) - ${g}x$`;
    at = `Expand all brackets: <br> $${a*b}x - ${a*c} = ${d*e}x + ${d*f} - ${g}x$ <br> Add ${a*c} to both sides and simplify right-hand side: <br> $${a*b}x = ${d*e - g}x +${d*f+a*c}$ <br>`+
        `Subtract $${d*e - g}x$ from both sides: <br> $${a*b-d*e+g}x = ${d*f+a*c}$ <br> Divide both sides by $${a*b-d*e+g}$: <br> $x = ` + xt;
        
    return {
        id: q_id,
        question: qt,
        answer: av,
        check_val: `\\frac{${xn}}{${xd}}`,
        goal: "solve",
        solution: at
    };
};    
    
