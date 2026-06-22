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

function percentage_of(q_id) {
    
    let pc, am, x, check, question_text, solution_text;
    
    while (true) {
        pc = getRandomInt(1,99);
        am = getRandomInt(15,200);
        x = pc*am/100;
        check = roundToDecimalPlaces(x,2);
        
        if (check === x) break;
    }
    
    question_text = `Find ${pc} % of ${am}`;
    solution_text = `\\( \\frac{${pc}}{100} \\times ${am} = ${x} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(percentage_of);

function percentage_inc(q_id) {
    
    let pc, am, pcam, check, question_text, solution_text;
    
    while (true) {
        pc = getRandomInt(1,99);
        am = getRandomInt(15,200);
        pcam = pc*am/100;
        check = roundToDecimalPlaces(pcam,2);
        
        if (check = pcam) break;
    }
    
    const x = am + pcam
    
    question_text = `Increase ${am} by ${pc} %`;
    solution_text = `Increase by ${pc} % means you want 100 + ${pc} = ${pc+100} % of ${am} <br />` +
                    `\\( \\frac{${pc+100}}{100} \\times ${am} = ${x} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(percentage_inc);


function percentage_dec(q_id) {
    
    let pc, am, pcam, check, question_text, solution_text;
    
    while (true) {
        pc = getRandomInt(1,99);
        am = getRandomInt(15,200);
        pcam = pc*am/100;
        check = roundToDecimalPlaces(pcam,2);
        
        if (check = pcam) break;
    }
    
    const x = am - pcam
    
    question_text = `Decrease ${am} by ${pc} %`;
    solution_text = `Decrease by ${pc} % means you want 100 - ${pc} = ${100-pc} % of ${am} <br />` +
                    `\\( \\frac{${100-pc}}{100} \\times ${am} = ${x} \\)`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};
   
window.reviewQuestionGenerators.push(percentage_dec);

function as_a_percentage(q_id) {
    
    const den = Math.pow(2, getRandomInt(2,6))*Math.pow(5, getRandomInt(0,3));
    const num = getRandomInt(Math.max(roundToDecimalPlaces(den/50,0),1),den);
    const pc = num*100/den;
    const x = roundToDecimalPlaces(pc,1);
    
    let question_text = `What is ${num} out of ${den} as a percentage?  Give your answer to no more than 1 decimal place`;
    let solution_text = `\\( \\frac{${num}}{${den}} \\times 100 = ${pc} \\) <br />`+
                        `${x} %`;
    
    return {
        id: q_id,
        question: question_text,
        answer: x,
        solution: solution_text
    };
    
};
   
window.reviewQuestionGenerators.push(as_a_percentage);
