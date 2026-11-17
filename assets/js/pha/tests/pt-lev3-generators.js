function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.CurrentTestGenerators = [];

function generateQ1_arithmetic(q_id, roundToDecimalPlaces) {
    
    let a, b, c, d, mc, x, abm, abchoice, signchoice, qt, at;
    
    while (true) {
        
        a = getRandomInt(12,90);
        b = getRandomInt(12,90);
        c = getRandomInt(5,40);
        d = getRandomInt(3,9);
        
        signchoice = getRandomInt(0,1);
        
        x = ((a*b + Math.pow(-1,signchoice)*c)/d);
        
        if (x === roundToDecimalPlaces(x,0) & x > 0) break;
    }
    
    if (signchoice === 0) {
        qt = `What is $ (${a} \\times ${b} + ${c}) \\div ${d} $?`;
    } else {
        qt = `What is $ (${a} \\times ${b} - ${c}) \\div ${d} $?`;
    }
    
    at = `Multiplication inside brackets: $$ ${a} \\times ${b} = ${a*b} $$ Remainder of brackets:`;
    
    if (signchoice === 0) {
        at+= `$$ ${a*b} + ${c} = ${a*b+c} $$ Division: $$ ${a*b+c} \\div ${d} = ${x} $$`;
    } else {
        at+= `$$ ${a*b} - ${c} = ${a*b-c} $$ Division: $$ ${a*b-c} \\div ${d} = ${x} $$`;
    }
    
return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ1_arithmetic);


function generateQ2_arithmetic(q_id, roundToDecimalPlaces) {
    
    let a, b, c, d, mc, x, abm, abchoice, signchoice, qt, at;
    
    while (true) {
        
        a = getRandomInt(100,300);
        b = getRandomInt(25,95);
        c = getRandomInt(5,15);
        d = getRandomInt(3,9);
        
        signchoice = getRandomInt(0,1);
        
        x = ((a + b*Math.pow(-1,signchoice))*c)/d;
        
        if (x === roundToDecimalPlaces(x,0) & x > 0) break;
    }
    
    if (signchoice === 0) {
        qt = `What is $ ((${a} + ${b}) \\times ${c}) \\div ${d} $?`;
    } else {
        qt = `What is $ (${a} - ${b}) \\times ${c}) \\div ${d} $?`;
    }
    
    if (signchoice === 0) {
        at= `Inside brackets: $$ ${a} + ${b} = ${a+b} $$ Outside brackets: $$ ${a+b} \\times ${c} = ${c*(a+b)} $$ Division: $$ ${c*(a+b)} \\div ${d} = ${x} $$`;
    } else {
        at= `Inside brackets: $$ ${a} - ${b} = ${a-b} $$ Outside brackets: $$ ${a-b} \\times ${c} = ${c*(a-b)} $$ Division: $$ ${c*(a-b)} \\div ${d} = ${x} $$`;
    }
    
return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ2_arithmetic);


function generateQ3_multiply(q_id, roundToDecimalPlaces) {
    
    const a1 = getRandomInt(2,7);
    const a2 = getRandomInt(0,9);
    const a3 = getRandomInt(1,9);
    const a4 = getRandomInt(2,9);
    const b1 = getRandomInt(3,9);
    const b2 = getRandomInt(2,9);
    
    const a = 1000*a1 + 100*a2 + 10*a3 + a4;
    const b = 10*b1 + b2;
    
    const x = a*b;
    
    let qt = `What is $${a} \\times ${b} $?`;
    let at = `$$ ${a} \\times ${b1*10} = ${a*b1*10} $$ $$ ${a} \\times ${b2} = ${a*b2} $$ $$ ${a*b1*10} + ${a*b2} = ${x} $$`;
    
return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ3_multiply);


function generateQ4_multiply(q_id, roundToDecimalPlaces) {
    
    const a1 = getRandomInt(2,7);
    const a2 = getRandomInt(0,9);
    const a3 = getRandomInt(0,9);
    const b1 = getRandomInt(3,9);
    const b2 = getRandomInt(2,9);
    
    const a = 10*a1 + a2 + 0.1*a3;
    const b = b1 + 0.1*b2;
    
    const x = roundToDecimalPlaces(a*b,2);
    
    let qt = `What is $${a} \\times ${b} $?`;
    let at;
    if (a3 === 0) {
        at = `$$ ${a} \\times ${10*b} = ${roundToDecimalPlaces(x*10,0)} $$`;
    } else {
        at = `$$ ${10*a} \\times ${10*b} = ${roundToDecimalPlaces(x*100,0)} $$`;
    }
    
    at += `Therefore: $$ ${a} \\times ${b} = ${x} $$`;
    
return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ4_multiply);


function generateQ5_divide(q_id, roundToDecimalPlaces) {
    
    const x = getRandomInt(300,950);
    const d1 = getRandomInt(2,9);
    const d2 = getRandomInt(1,5);
    const d = 10*d1 + d2;
    const n = x*d;
    
    let qt = `What is $${n} \\div ${d} $?`;
    
    let at = `$$ ${n} \\div ${d} = ${x} $$`;

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ5_divide);


function generateQ6_divide(q_id, roundToDecimalPlaces) {
    
    const d1 = getRandomInt(2,5);
    const d2 = getRandomInt(1,5);
    const d = 10*d1 + d2;
    const n1 = getRandomInt(5,9);
    const n2 = getRandomInt(0,9);
    const n3 = getRandomInt(1,9);
    const n = roundToDecimalPlaces(n1 + 0.1*n2 + 0.01*n3,2);
    const x1 = roundToDecimalPlaces(n/d,5);
    const x2 = (Math.trunc(1000* n/d)/1000).toFixed(3);
    const x = roundToDecimalPlaces(n/d,2);

    
    let qt = `What is $${n} \\div ${d} $? Give your answer correct to 2 decimal places.`;
    
    let at = `$$ ${n} \\div ${d} = ${x2}... $$ Round to 2 d.p: $$${n} \\div ${d} = ${x}$$`;

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ6_divide);


function generateQ7_decToPc(q_id, roundToDecimalPlaces) {
    
    const x = getRandomInt(1,95);
    const d = roundToDecimalPlaces(x/100,2);
    
    let qt = `What is ${d} as a percentage?`;
    let at = `$$ ${d} \\times 100 = ${x} $$`;

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ7_decToPc);


function generateQ8_fraToDec(q_id, roundToDecimalPlaces) {
    
    let n,d,c;
    
    while (true) {
        n = getRandomInt(1,85);
        c = getRandomInt(0,5);
        d = [2,4,5,20,25,50][c];
        if (n/d === roundToDecimalPlaces(n/d,2) & n/d != roundToDecimalPlaces(n/d,1)) break;
    }
    const x = n/d;
    qt = `What is $\\frac{${n}}{${d}}$ as a decimal?`;
    
    let m = [5, 25, 2, 5, 4, 2][c];
    
    at = `$$ \\frac{${n}}{${d}} = \\frac{${n} \\times ${m}}{${d} \\times ${m}} =  \\frac{${n*m}}{${d*m}} = ${x}$$`;

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ8_fraToDec);


function generateQ9_fraToPc(q_id, roundToDecimalPlaces) {
    
    let n,d;
    
    while (true) {
        n = getRandomInt(1,20)*25;
        d = getRandomInt(1,19)*500;
        
        if (n < d && n/d >= 0.01) break;
    }
    
    let p = 100*n/d;
    let p3 = (Math.trunc(1000*p)/1000).toFixed(3);
    let x = roundToDecimalPlaces(p,2);
    
    if (p === roundToDecimalPlaces(p,0)) {
        p3 = p;
    } else if (p === roundToDecimalPlaces(p,1)) {
        p3 = p;
    } else if (p === roundToDecimalPlaces(p,2)) {
        p3 = p;
    }
    
    let qt = `Write ${n} out of ${d} as a percentage. Give your answer correct to no more than 2 decimal places.`;
    let at = `$$ \\frac{${n}}{${d}} = \\frac{${n}}{${d}} \\times 100 \\%$$`+
            `$$ \\frac{${n}}{${d}} \\times 100 = \\frac{${n}}{${d/100}} = ${p3}`;
            
    if (p3 === p) {
        at = at + `\\% $$`;
    } else {
        at = at + `= ${x} \\% \\text{ (2 d.p.)} $$`;
    }
    
return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ9_fraToPc);


function generateQ10_pcDec(q_id, roundToDecimalPlaces) {
    
    const c = getRandomInt(0,1);
    
    let qt, at, x, q, p, a, af, xf;
    
    if (c === 0) {
        q = getRandomInt(6,21)*5;
        p = getRandomInt(2,9);
        
        qt = `If you are travelling at ${q} km/h and your speed decreases by ${p} percent, what is your new speed in km/h? Give answer correct to 2 decimal places.`;
    } else if (c === 1) {
        q = getRandomInt(1,19)*50;
        p = getRandomInt(11,24);
        
        qt = `The cost of a drug is normally £ ${q} but has been reduced by ${p} percent. What is the new cost of the drug? Give the answer correct to 2 decimal places.`;
    }
    
    a = roundToDecimalPlaces((1 - p/100)*q,4);
    x = roundToDecimalPlaces((1 - p/100)*q,2);
    
    
    if (a === x || a === roundToDecimalPlaces(a,1) || a === roundToDecimalPlaces(a,0)) {
        af = q*p/100;
    } else {
        af = (Math.trunc(10*q*p)/1000).toFixed(3);
    }
    xf = roundToDecimalPlaces(af,2);
        
    at = `Find ${p} percent of ${q}: $$\\frac{${p}}{100} \\times ${q} = ${af}`;
    if (a === x || a === roundToDecimalPlaces(a,1) || a === roundToDecimalPlaces(a,0)) {
        at = at + `$$`;
    } else {
        at = at + `= ${xf} \\text{ (2 d.p.)} $$`;
    }
    at = at + `Subtract from ${q}: $$ ${q} - ${xf} = ${x} $$`;

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ10_pcDec);
    

function generateQ11_pcInc(q_id, roundToDecimalPlaces) {
    
    const c = getRandomInt(0,1);
    
    let qt, at, x, q, p, a, af, xf;
    
    if (c === 0) {
        q = getRandomInt(40,90);
        p = getRandomInt(20,70)/10;
        
        qt = `A patient's weight increases by ${p} percent from an original weight of ${q} kilograms. What is their new weight in kg? Give the answer correct to the nearest whole number.`;
    } else if (c === 1) {
        q = getRandomInt(1,19)*50;
        p = getRandomInt(20,70)/10;
        
        qt = `If your weekly wages are ${q} and you recieve a ${p} percent pay increase, what are your new weekly wages? Give answer correct to the nearest whole number.`;
    }
    
    a = roundToDecimalPlaces((1 + p/100)*q,4);
    x = roundToDecimalPlaces((1 + p/100)*q,0);
    
    
    if (a === x || a === roundToDecimalPlaces(a,1) || a === roundToDecimalPlaces(a,0)) {
        af = q*p/100;
    } else {
        af = (Math.trunc(10*q*p)/1000).toFixed(1);
    }
    xf = roundToDecimalPlaces(af,1);
        
    at = `Find ${p} percent of ${q}: $$\\frac{${p}}{100} \\times ${q} = ${af}$$`;
    at = at + `Add to ${q}: $$ ${q} + ${xf} = ${q+xf} $$ Nearest whole number $ ${x}$`;

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ11_pcInc);


function generateQ12_pcOf(q_id, roundToDecimalPlaces) {
    
    const c = getRandomInt(0,1);
    
    let qt, at, x, q, p, a, af, xf;
    
    q = getRandomInt(4,35)*25;
    p = getRandomInt(1,20);
    
    if (c === 0) {
        qt = `You have ${q} ml of a solution that is ${p} % w/v.  How many grams of active ingredient are there? Give answer correct to the nearest whole number.`;
    } else if (c === 1) {
        qt = `How many grams of active ingredient is there in ${q} g of cream that is ${p} % w/w? Give answer correct to the nearest whole number.`;
    }
    
    a = roundToDecimalPlaces((p/100)*q,4);
    x = roundToDecimalPlaces((p/100)*q,0);
    
    
    if (a === x || a === roundToDecimalPlaces(a,1)) {
        af = q*p/100;
    } else {
        af = (Math.trunc(10*q*p)/1000).toFixed(1);
    }
        
    at = `Find ${p} percent of ${q}: $$\\frac{${p}}{100} \\times ${q} = ${af}$$`;
    at = at + `Nearest whole number $ ${x}$ g`;
    

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ12_pcOf);


function generateQ13_convert(q_id, roundToDecimalPlaces) {
    
    let s, l, x, qt, at;
    while (true) {
        s = getRandomInt(1, 3);
        l = getRandomInt(2, 4);
        if (s < l) {
            break;
        }
    }

    const u = ['mc', 'm', '','k'];
    const sn = u[s - 1];
    const ln = u[l - 1];
    
    const sp = getRandomInt(10000000000000,99999999999999);
    const x1 = sp/Math.pow(10,getRandomInt(10,12));
    const q = roundToDecimalPlaces(x1*Math.pow(10,3*(l-s)),0);
    
    const m = Math.pow(10,3*(l-s));
    x = roundToDecimalPlaces(q/Math.pow(10,3*(l-s)),2);
    
    qt = `Convert ${q} ${sn}g into ${ln}g. Give your answer correct to 2 decimal places`;
    
    at = `To convert ${sn}g into ${ln}g, divide by ${m} $(10^{${3*(l-s)}})$: $$ ${q} \\div ${Math.pow(10,3*(l-s))} = ${q/Math.pow(10,3*(l-s))} $$ Rounds to (2dp) $$ ${x} $$`;
    

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ13_convert);


function generateQ14_convert(q_id, roundToDecimalPlaces) {
    
    let s, l, x, qt, at, sp, q;
    while (true) {
        s = getRandomInt(1, 3);
        l = getRandomInt(2, 4);
        if (l > s && l - s <= 2) {
            break;
        }
    }

    const u = ['mc', 'm', '','k'];
    const sn = u[s - 1];
    const ln = u[l - 1];
    
    while (true) {
    
        sp = getRandomInt(1000,99999);
        q = sp/Math.pow(10,(3*(l-s)+getRandomInt(1,5)));
        x = roundToDecimalPlaces(q*Math.pow(10,3*(l-s)),2);
        if (x != q*Math.pow(10,3*(l-s)) && q > 0.000001) break;
    }
    
    const m = Math.pow(10,3*(l-s));
    const qs = roundToDecimalPlaces(q*Math.pow(10,3*(l-s)),5);
    
    qt = `Convert ${q} ${ln}g into ${sn}g. Give your answer correct to 2 decimal places`;
    
    at = `To convert ${ln}g into ${sn}g, multiply by ${m} $(10^{${3*(l-s)}})$: $$ ${q} \\times ${Math.pow(10,3*(l-s))} = ${qs} $$ Rounds to (2dp) $$ ${x} $$`;
    

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ14_convert);


function generateQ15_convert(q_id, roundToDecimalPlaces) {
    
    let s, l, x, qt, at, m;
    while (true) {
        s = getRandomInt(1, 2);
        l = getRandomInt(2, 3);
        if (s < l) {
            break;
        }
    }

    const u = ['mc', 'm', ''];
    const sn = u[s - 1];
    const ln = u[l - 1];
    
    const c = getRandomInt(0,1);
    if (c === 0) {
        x = getRandomInt(1000,9000)/Math.pow(10,getRandomInt(1,3));
        q = roundToDecimalPlaces(x/Math.pow(10,3*(l-s)),12);
        m = Math.pow(10,3*(l-s));
        qt = `Convert ${q} ${ln}mol into ${sn}mol.`;
        at = `To convert ${ln}mol into ${sn}mol, multiply by ${m} $(10^{${3*(l-s)}})$: $$ ${q} \\times ${Math.pow(10,3*(l-s))} = ${x} $$`;
    } else if (c === 1) {
        x = getRandomInt(1000,9000)/Math.pow(10,getRandomInt(1,3));
        q = roundToDecimalPlaces(x*Math.pow(10,3*(l-s)),12);
        m = Math.pow(10,3*(l-s));
        qt = `Convert ${q} ${sn}mol into ${ln}mol.`;
        at = `To convert ${ln}mol into ${sn}mol, divide by ${m} $(10^{${3*(l-s)}})$: $$ ${q} \\div ${Math.pow(10,3*(l-s))} = ${x} $$`;
    }
 
return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ15_convert);
