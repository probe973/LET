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

function ratio_2_left_total(q_id) {
    let p, q;
    
    while (true) {
        p = getRandomInt(1,10);
        q = getRandomInt(1,10);
        
        if (findHCF(p,q) === 1 && p != q) break;
    }
    
    const t = p+q;
    const m = getRandomInt(3,12);
    const pm = p*m;
    const qm = q*m;
    const tm = t*m;
    
     if (tm < 100) {
        qchoice = [0, 2, 3, 4][getRandomInt(0,3)];
    } else {
        qchoice = [1, 3][getRandomInt(0,1)];
    }
    
    const qchoiceRatioWords1 = ["The ratio of cats to dogs in an animal shelter is ","The ratio of red counters to blue counters in a bag is ", "The ratio of wins to losses for a team is ", "Red and white paint is mixed in the ratio ", "Gifts are split between Alan and Betty in the ratio "][qchoice];
    const qchoiceRatioWords2 = `${p}:${q}. <br />`; 
    const qchoiceRatioWords3 = [`If there are ${tm} animals in total, how many cats are there?`,`If there are ${tm} counters in total, how many red counters are there?`,`If the team played ${tm} games, how many did they win?`,`To get ${tm} L of paint, how many L of red paint is required?`,`If there are ${tm} gifts, how many gifts does Alan receive?`][qchoice];
    
    let question_text = qchoiceRatioWords1 + qchoiceRatioWords2 + qchoiceRatioWords3;
    
    let solution_text = `The total number of parts in the ratio ${p}:${q} is ${p}+${q} = ${p+q} <br />`+
                        `Divide the total of ${tm} into the total parts to get the value of one part: <br />`+
                        `${tm} ÷ ${t} = ${m} <br />` +
                        `We want the ${p} parts, so ${p} × ${m} = ${pm}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: pm,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(ratio_2_left_total);


function ratio_2_right_total(q_id) {
    let p, q, qchoice;
    
    while (true) {
        p = getRandomInt(1,10);
        q = getRandomInt(1,10);
        
        if (findHCF(p,q) === 1 && p != q) break;
    }
    
    const t = p+q;
    const m = getRandomInt(3,12);
    const pm = p*m;
    const qm = q*m;
    const tm = t*m;
    
    if (tm < 100) {
        qchoice = [0, 2, 3, 4][getRandomInt(0,3)];
    } else {
        qchoice = [1, 3][getRandomInt(0,1)];
    }
    
        
    const qchoiceRatioWords1 = ["The ratio of cats to dogs in an animal shelter is ","The ratio of red counters to blue counters in a bag is ", "The ratio of wins to losses for a team is ", "Red and white paint is mixed in the ratio ", "Gifts are split between Frank and Georgia in the ratio "][qchoice];
    const qchoiceRatioWords2 = `${p}:${q}. <br />`; 
    const qchoiceRatioWords3 = [`If there are ${tm} animals in total, how many dogs are there?`,`If there are ${tm} counters in total, how many blue counters are there?`,`If the team played ${tm} games, how many did they lose?`,`To get ${tm} L of paint, how many L of white paint is required?`,`If there are ${tm} gifts, how many gifts does Georgia receive?`][qchoice];
    
    let question_text = qchoiceRatioWords1 + qchoiceRatioWords2 + qchoiceRatioWords3;
    
    let solution_text = `The total number of parts in the ratio ${p}:${q} is ${p}+${q} = ${p+q} <br />`+
                        `Divide the total of ${tm} into the total parts to get the value of one part: <br />`+
                        `${tm} ÷ ${t} = ${m} <br />` +
                        `We want the ${q} parts, so ${q} × ${m} = ${qm}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: qm,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(ratio_2_right_total);
    

function ratio_2_left_right(q_id) {
    let p, q, qchoice;
    
    while (true) {
        p = getRandomInt(1,10);
        q = getRandomInt(1,10);
        
        if (findHCF(p,q) === 1 && p != q) break;
    }
    
    const t = p+q;
    const m = getRandomInt(3,12);
    const pm = p*m;
    const qm = q*m;
    const tm = t*m;
    
    if (tm < 100) {
        qchoice = [0, 2, 3, 4][getRandomInt(0,3)];
    } else {
        qchoice = [1, 3][getRandomInt(0,1)];
    }
    
        
    const qchoiceRatioWords1 = ["The ratio of cats to dogs in an animal shelter is ","The ratio of green counters to black counters in a bag is ", "The ratio of wins to losses for a team is ", "Green and white paint is mixed in the ratio ", "Gifts are split between Alcie and Bernie in the ratio "][qchoice];
    const qchoiceRatioWords2 = `${p}:${q}. <br />`; 
    const qchoiceRatioWords3 = [`If there are ${qm} dogs, how many cats are there?`,`If there are ${qm} black counters, how many red counters are there?`,`If the team lost ${qm} games, how many did they win?`,`If you have ${qm} of white paint, how many L of green paint is required?`,`If Bernie received ${qm} gifts, how many gifts does Alice receive?`][qchoice];
    
    let question_text = qchoiceRatioWords1 + qchoiceRatioWords2 + qchoiceRatioWords3;
    
    let solution_text = `The number of parts  given, in the ratio ${p}:${q}, is ${q}<br />`+
                        `Divide the amount, ${qm}, into the parts to get the value of one part: <br />`+
                        `${qm} ÷ ${q} = ${m} <br />` +
                        `We want the ${p} parts, so ${p} × ${m} = ${pm}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: pm,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(ratio_2_left_right);


function ratio_2_total_right(q_id) {
    let p, q, qchoice;
    
    while (true) {
        p = getRandomInt(1,10);
        q = getRandomInt(1,10);
        
        if (findHCF(p,q) === 1 && p != q) break;
    }
    
    const t = p+q;
    const m = getRandomInt(3,12);
    const pm = p*m;
    const qm = q*m;
    const tm = t*m;
    
    if (tm < 100) {
        qchoice = [0, 2, 3, 4][getRandomInt(0,3)];
    } else {
        qchoice = [1, 3][getRandomInt(0,1)];
    }
    
        
    const qchoiceRatioWords1 = ["The ratio of cats to dogs in an animal shelter is ","The ratio of green counters to black counters in a bag is ", "The ratio of wins to losses for a team is ", "Green and white paint is mixed in the ratio ", "Gifts are split between Alcie and Bernie in the ratio "][qchoice];
    const qchoiceRatioWords2 = `${p}:${q}. <br />`; 
    const qchoiceRatioWords3 = [`If there are ${qm} dogs, how many animals in total are there?`,`If there are ${qm} black counters, how many counters are there?`,`If the team lost ${qm} games, how many games did they play?`,`If you have ${qm} of white paint, how many L of paint can be created?`,`If Bernie received ${qm} gifts, how many gifts are shared?`][qchoice];
    
    let question_text = qchoiceRatioWords1 + qchoiceRatioWords2 + qchoiceRatioWords3;
    
    let solution_text = `The number of parts  given, in the ratio ${p}:${q}, is ${q}<br />`+
                        `Divide the amount, ${qm}, into the parts to get the value of one part: <br />`+
                        `${qm} ÷ ${q} = ${m} <br />` +
                        `We want the total, ${p}+${q} = ${t} parts, so ${t} × ${m} = ${tm}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: tm,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(ratio_2_total_right);


function ratio_3_total_left(q_id) {
    let p, q, r, hpass, qchoice;
    while (true) {
        p = getRandomInt(1,10);
        q = getRandomInt(1,10);
        r = getRandomInt(1,10);
        hpass = 0
        if (findHCF(p,q) === 1 || findHCF(p,r) === 1 || findHCF(q,r) === 1) {
            hpass = 1;
        }
        if (hpass === 1 && p + q + r != 3) break;
    }
    
    const t = p+q+r;
    const m = getRandomInt(3,12);
    const pm = p*m;
    const qm = q*m;
    const rm = r*m;
    const tm = t*m;
    
    if (tm < 100) {
        qchoice = 0;
    } else {
        qchoice = 1;
    }
    
    const qchoiceRatioWords1 = ["Tea, coffee, and water are sold in a cafe in the ratio ","The ratio of oak to pine to maple trees in a wooded area is "][qchoice];
    const qchoiceRatioWords2 = `${p}:${q}:${r}. <br />`; 
    const qchoiceRatioWords3 = [`If ${pm} teas are sold, how many beverages are sold in total?`,`If there are ${pm} oak tress, how many trees are there in total?`][qchoice];
    
    let question_text = qchoiceRatioWords1 + qchoiceRatioWords2 + qchoiceRatioWords3;
    
    let solution_text = `The number of parts  given, in the ratio ${p}:${q}:${r}, is ${p}<br />`+
                        `Divide the amount, ${pm}, into the parts to get the value of one part: <br />`+
                        `${pm} ÷ ${p} = ${m} <br />` +
                        `We want the total, ${p}+${q}+${r} = ${t} parts, so ${t} × ${m} = ${tm}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: tm,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(ratio_3_total_left);


function ratio_3_smallest_total(q_id) {
    let p, q, r, hpass;
    while (true) {
        p = getRandomInt(1,12);
        q = getRandomInt(1,12);
        r = getRandomInt(1,12);
        hpass = 0
        if (findHCF(p,q) === 1 || findHCF(p,r) === 1 || findHCF(q,r) === 1) {
            hpass = 1;
        }
        if (hpass === 1 && p != q && p != r && r != q) break;
    }
    
    const t = p+q+r;
    const m = getRandomInt(3,12);
    const pm = p*m*1000;
    const qm = q*m*1000;
    const rm = r*m*1000;
    const tm = t*m*1000;
    
    const sm = Math.min(pm, qm, rm);
    const s = Math.min(p,q,r);
    
    const qchoice = getRandomInt(0,1);
    
    const qchoiceRatioWords1 = ["An inheritance is split between three siblings in the ratio ","A budget is allocated to marketing, sales, and research in the ratio "][qchoice];
    const qchoiceRatioWords2 = `${p}:${q}:${r}. <br />`; 
    const qchoiceRatioWords3 = [`If the inheritance is £${tm} in total, what is the amount of money given in the smallest share?`,`If the budget is £${tm}, how much is given to the department with the smallest share?`][qchoice];
    
    let question_text = qchoiceRatioWords1 + qchoiceRatioWords2 + qchoiceRatioWords3;
    
    let solution_text = `The total number of parts in the ratio ${p}:${q}:${r} is ${p}+${q}+${r} = ${t} <br />`+
                        `Divide the total of ${tm} into the total parts to get the value of one part: <br />`+
                        `${tm} ÷ ${t} = ${m*1000} <br />` +
                        `We want the ${s} parts, so ${s} × ${m*1000} = ${sm}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: sm,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(ratio_3_smallest_total);
