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

function simplify(q_id) {
    
    let p2, p3, p5, common, num_ans, den_ans;
    
    while (true) {
        
        p2 = getRandomInt(0,3);
        p3 = getRandomInt(0,2);
        p5 = getRandomInt(0,1);
    
        common = Math.pow(2,p2)*Math.pow(3,p3)*Math.pow(5,p5);
        num_ans = getRandomInt(2,9);
        den_ans = getRandomInt(4,12);
        
        if (findHCF(num_ans,den_ans) === 1 && common !=1 && num_ans != den_ans) break;
    }
    
    const num = num_ans*common;
    const den = den_ans*common;
    
    let question_text, solution_text;
    
    question_text = `Simplify the fraction \\( \\frac{${num}}{${den}} \\)`;
    solution_text = `Both top and bottom can be divided by ${common} <br />` +
                    `\\( \\frac{${num}}{${den}} = \\frac{${common} \\times ${num_ans}}{${common} \\times ${den_ans}} = \\frac{${num_ans}}{${den_ans}} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        numerator_answer: num_ans,
        denominator_answer: den_ans,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(simplify);
    
    
        
