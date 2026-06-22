window.reviewQuestionGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

function fraction_mult(q_id) {
    
    let n1, d1, n2, d2;
    
    while (true) {
        n1 = getRandomInt(1,8);
        d1 = getRandomInt(3,20);
        n2 = getRandomInt(1,8);
        d2 = getRandomInt(3,20);
        
        if (findHCF(n1,d1) === 1 && findHCF(n2,d2) === 1) break;
    }
    
    const n = n1*n2;
    const d = d1*d2;
    
    const hcf = findHCF(n,d);
    
    const num = n1*n2/hcf;
    const den = d1*d2/hcf;
    
    let question_text = `Calculate <br /> \\( \\frac{${n1}}{${d1}} \\times  \\frac{${n2}}{${d2}} \\)`;
    
    let solution_text = `\\( \\frac{${n1}}{${d1}} \\times  \\frac{${n2}}{${d2}} = \\frac{${n1} \\times ${n2}}{${d1} \\times ${d2}} = \\frac{${n}}{${d}} \\)`;
    
    if (hcf != 1) {
        solution_text = solution_text + `<br /> This simplifies to <br /> \\( \\frac{${num}}{${den}} \\)`;
    }
    
    return {
        id: q_id,
        question: question_text,
        numerator_answer: num,
        denominator_answer: den,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(fraction_mult);


function fraction_div(q_id) {
    
    let n1, d1, n2, d2;
    
    while (true) {
        n1 = getRandomInt(1,8);
        d1 = getRandomInt(3,20);
        n2 = getRandomInt(1,8);
        d2 = getRandomInt(3,20);
        
        if (findHCF(n1,d1) === 1 && findHCF(n2,d2) === 1) break;
    }
    
    const n = n1*d2;
    const d = d1*n2;
    
    const hcf = findHCF(n,d);
    
    const num = n1*d2/hcf;
    const den = d1*n2/hcf;
    
    let question_text = `Calculate <br /> \\( \\frac{${n1}}{${d1}} \\div  \\frac{${n2}}{${d2}} \\)`;
    
    let solution_text = `\\( \\frac{${n1}}{${d1}} \\div  \\frac{${n2}}{${d2}} = \\frac{${n1}}{${d1}} \\times  \\frac{${d2}}{${n2}} \\) <br /> <br />`+
                        `\\( \\frac{${n1}}{${d1}} \\times  \\frac{${d2}}{${n2}} = \\frac{${n1} \\times ${d2}}{${d1} \\times ${n2}} = \\frac{${n}}{${d}} \\)`;
    
    if (hcf != 1) {
        solution_text = solution_text + `<br /> This simplifies to <br /> \\( \\frac{${num}}{${den}} \\)`;
    }
    
    return {
        id: q_id,
        question: question_text,
        numerator_answer: num,
        denominator_answer: den,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(fraction_div);

function fraction_add(q_id) {
    let n1, d1, n2, d2;
    
    while (true) {
        n1 = getRandomInt(1,8);
        d1 = [2,3,4,5,6,8,9,10,12,15,20,25][getRandomInt(0,11)];
        n2 = getRandomInt(1,8);
        d2 = [2,3,4,5,6,8,9,10,12,15,20,25][getRandomInt(0,11)];
        
        if (findHCF(n1,d1) === 1 && findHCF(n2,d2) === 1) break;
    }
    
    const hcfD = findHCF(d1,d2);
    const lcmD = d1*d2/hcfD;
    
    const f1M = lcmD/d1;
    const f2M = lcmD/d2;
    
    const n1M = n1*f1M;
    const n2M = n2*f2M;
    
    const n = n1M+n2M;
    const hcf = findHCF(n,lcmD);
    const num = n/hcf;
    const den = lcmD/hcf;
    
    let question_text = `Calculate <br /> \\( \\frac{${n1}}{${d1}} + \\frac{${n2}}{${d2}} \\)`;
    let solution_text = `Both fractions can be written as equivalent factions out of ${lcmD} <br />`+
                        `\\( \\frac{${n1}}{${d1}} + \\frac{${n2}}{${d2}} = \\frac{${n1M}}{${lcmD}} + \\frac{${n2M}}{${lcmD}} = \\frac{${n1M}+${n2M}}{${lcmD}} = \\frac{${n}}{${lcmD}} \\)`;
    
    if (hcf != 1) {
        solution_text = solution_text + `<br /> This simplifies to <br /> \\( \\frac{${num}}{${den}} \\)`;
    }
    
    return {
        id: q_id,
        question: question_text,
        numerator_answer: num,
        denominator_answer: den,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(fraction_add);


function fraction_subtract(q_id) {
    let n1, d1, n2, d2;
    
    while (true) {
        n1 = getRandomInt(1,8);
        d1 = [2,3,4,5,6,8,9,10,12,15,20,25][getRandomInt(0,11)];
        n2 = getRandomInt(1,8);
        d2 = [2,3,4,5,6,8,9,10,12,15,20,25,40,50][getRandomInt(0,13)];
        
        if (findHCF(n1,d1) === 1 && findHCF(n2,d2) === 1 && n1/d1 > n2/d2) break;
    }
    
    const hcfD = findHCF(d1,d2);
    const lcmD = d1*d2/hcfD;
    
    const f1M = lcmD/d1;
    const f2M = lcmD/d2;
    
    const n1M = n1*f1M;
    const n2M = n2*f2M;
    
    const n = n1M-n2M;
    const hcf = findHCF(n,lcmD);
    const num = n/hcf;
    const den = lcmD/hcf;
    
    let question_text = `Calculate <br /> \\( \\frac{${n1}}{${d1}} - \\frac{${n2}}{${d2}} \\)`;
    let solution_text = `Both fractions can be written as equivalent factions out of ${lcmD} <br />`+
                        `\\( \\frac{${n1}}{${d1}} - \\frac{${n2}}{${d2}} = \\frac{${n1M}}{${lcmD}} - \\frac{${n2M}}{${lcmD}} = \\frac{${n1M}-${n2M}}{${lcmD}} = \\frac{${n}}{${lcmD}} \\)`;
    
    if (hcf != 1) {
        solution_text = solution_text + `<br /> This simplifies to <br /> \\( \\frac{${num}}{${den}} \\)`;
    }
    
    return {
        id: q_id,
        question: question_text,
        numerator_answer: num,
        denominator_answer: den,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(fraction_subtract);
