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
        qt = `What is $ ((${a} - ${b}) \\times ${c}) \\div ${d} $?`;
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


function generateQ16_convert(q_id, roundToDecimalPlaces) {
    
    let s, l, x, qt, at, m, u;
    while (true) {
        s = getRandomInt(1, 2);
        l = getRandomInt(2, 3);
        if (s < l) {
            break;
        }
    }
    
    u = ["g","L","m"][getRandomInt(0,2)];
    let p = ['mc', 'm', ''];
    const sn = p[s - 1];
    const ln = p[l - 1];
    
    let e = getRandomInt(10,25);
    let a = roundToDecimalPlaces(getRandomInt(100,999)/100,2);
    let c = getRandomInt(0,1);
    
    
    if (c === 0) {
        x = e + 3*(s-l);
        qt = `Given $${a} \\times 10^{${e}} \\text{ ${sn}${u}} = ${a} \\times 10^{x} \\text{ ${ln}${u}} $, what is the value of $x$?`;
        at = `To convert ${sn}${u} into ${ln}${u}, multiply by $10^{${3*(s-l)}}$: $$${a} \\times 10^{${e}} \\times 10^{${3*(s-l)}}$$`+
            `Add the powers: $$${a} \\times 10^{${x}} \\text{ ${ln}${u}}$$ $$ x = ${x} $$`;
    } else if (c == 1) {
        x = e + 3*(l-s);
        qt = `Given $${a} \\times 10^{${e}} \\text{ ${ln}${u}} = ${a} \\times 10^{x} \\text{ ${sn}${u}} $, what is the value of $x$?`;
        at = `To convert ${ln}${u} into ${sn}${u}, multiply by $10^{${3*(l-s)}}$: $$${a} \\times 10^{${e}} \\times 10^{${3*(l-s)}}$$`+
            `Add the powers: $$${a} \\times 10^{${x}} \\text{ ${ln}${u}}$$ $$ x = ${x} $$`;
        }
    
return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ16_convert);
        

function generateQ17_mw(q_id, roundToDecimalPlaces) {
    
    let ml, mw, M, x;
    
    while (true) {    
        ml = getRandomInt(1,19)*50;
        mw = roundToDecimalPlaces(getRandomInt(60,200)/2,1);
        M = getRandomInt(2,20);
        x = M*ml*mw/1000;
        if (x > 1) break;
    }
    
    qt = `How many grams of compound X (molecular weight = ${mw}) are required to produce ${ml} mL of a ${M} molar solution? <br> Give the answer correct to no more than 2 decimal places`;
    
    at = `$$ \\text{mass (g)} = \\text{MW (g/mol) } \\times \\text{Molarity (mol/L) } \\times \\text{Volume (L)}$$`+
        `$$\\text{mass (g)} = ${mw} \\times ${M} \\times ${ml/1000} = ${x}$$`;

return { 
    id: q_id, 
    question: qt, 
    answer: x, 
    solution: at 
    
};
}
window.CurrentTestGenerators.push(generateQ17_mw);


function generateQ18_bsa(q_id, roundToDecimalPlaces) {
    
    let mass, height, bsa2;

    while (true) {
        mass = Math.floor(Math.random() * 41) + 50;   // 50–90
        height = [120, 150, 180, 200][Math.floor(Math.random() * 4)];
        bsa2 = (mass * height) / 3600;

        // Python conditions:
        // 1.1 ≤ bsa2 ≤ 5
        // round(bsa2,2) == bsa2
        const bsa2Rounded = Math.round(bsa2 * 100) / 100;

        if (bsa2 >= 1.1 && bsa2 <= 5 && bsa2Rounded === bsa2) {
            break;
        }
    }

    const height_m = height / 100;
    const height_m_str = `${height_m}`;
    const x = roundToDecimalPlaces(Math.sqrt(bsa2), 2);

    // Construct list of 7 values: six random, last = bsa2
    const srlist2 = [
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        (Math.floor(Math.random() * 391) + 110) / 100,
        bsa2
    ];

    const sorted_vals = srlist2.slice().sort((a, b) => a - b);

    const lines = sorted_vals.map(v => {
        const root = Math.sqrt(v);
        return `\\( \\sqrt{${v.toFixed(2)}} = ${root.toFixed(2)} \\)`;
    });

    const result_string = lines.join(" <br />\n");

    const question_text =
        `Given these values:<br />` +
        `${result_string} <br />` +
        `The formula: <br />` +
        `\\( \\text{BSA}(m^2) = \\sqrt{ \\frac{ \\text{mass(kg)} \\times \\text{height(cm)} }{3600} } \\) <br />` +
        `Find the body surface area, in metres squared, of someone who is ${height_m_str} metres tall and weights ${mass} kg. <br />`;

    const solution_text =
        `\\( \\frac{${mass} \\times ${height}}{3600} = ${bsa2} \\) <br />` +
        `Look up in list gives ${x}`;

    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
}
window.CurrentTestGenerators.push(generateQ18_bsa);


function generateQ19_dilute(q_id, roundToDecimalPlaces) {
    
    let m1, v1, mp, ad, pc, x, m2, v2, v3;
    while (true) {
        m1 = roundToDecimalPlaces(getRandomInt(1,20)/2,1);
        v1 = getRandomInt(1,8)*25;
        mp = getRandomInt(3,10);
        v2 = v1*mp
        m2 = m1*mp
        v3 = Math.pow(2,getRandomInt(0,4))*Math.pow(5,getRandomInt(0,2))*50;
        ad = v3-v2;
        pc = 100*m2/(v3);
        x = roundToDecimalPlaces(pc,1);
        
        if (v3 > v2 && pc < 30) break;
    }
    
    let qt = `A solution contains ${m1} g of solute per ${v1} ml of solution. ${v2} ml of this solution is diluted by adding a further ${ad} ml of water. `+ 
            `What is the resulting percentage strength of the new solution expressed as % w/v? Give the answer correct to 1 decimal place.`;
            
    let at = `${m1} g of solute per ${v1} ml is <br />`+
    `${m2} g of solute per ${v2} ml (multiplying by ${mp}) <br />`+
    `Add ${ad} ml means ${v2+ad} ml <br />`+
    `${m2} g of solute per ${v2+ad} ml of solution <br />`+
    `For percentage need 100 ml, so divide through by ${(v2+ad)/100} <br />`+
    `${pc} g of solute per 100 ml <br />`+
    `${x} %w/v (round to 1 d.p.)`;
    
    return {
        id: q_id,
        question: qt,
        answer: x,
        solution: at
    };
}
window.CurrentTestGenerators.push(generateQ19_dilute);


function generateQ20_active(q_id, roundToDecimalPlaces) {
    
    let pc, ml, x;
    
    while (true) {
        pc = roundToDecimalPlaces(getRandomInt(1,10)/2,1);
        ml = getRandomInt(8,99);
        x = 10*pc*ml
        
        if (x > 1 && x < 1000 && pc != 1 && pc != 10 && ml != 10) break;
    }
    
    let qt = `A liquid medication contains ${pc} % active ingredient. How many milligrams would there be in a ${ml} ml dose?`;
    
    let at = `${pc} % of ${ml} ml is $$ \\frac{${pc}}{100} \\times ${ml} = ${x/1000} $$` +
            `This is ${x/1000} g, so convert to mg:`+
            `$$ ${x/1000} \\times 1000 = ${x} $$`+
            `${x} mg`;

    return {
        id: q_id,
        question: qt,
        answer: x,
        solution: at
    };
}
window.CurrentTestGenerators.push(generateQ20_active);
