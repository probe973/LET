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

function r_percentage_inc(q_id) {
    
    let pc, am, x, check, question_text, solution_text;
    
    while (true) {
        pc = getRandomInt(2,40);
        am = getRandomInt(15,200);
        pcam = pc*am/100;
        check = roundToDecimalPlaces(pcam,0);
        
        if (check === pcam) break;
    }
    
    const incpc = am + check
    
      
    question_text = `The price of an object <b>increases</b> in price by ${pc}% and is now £${incpc}`;
    

    
    question_text = question_text + `<br /> What was the price before the increase? <br>`;
    
    solution_text = `The price has increased by ${pc}%, so the new price is 100 + ${pc} = ${100+pc}% of the original price.  As a decimal this is ${(100+pc)/100}. <br />`+
                    `£${incpc} ÷ ${(100+pc)/100} = £${am}`;
    
 
                    
    return {
        id: q_id,
        question: question_text,
        answer: am,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(r_percentage_inc);


function r_percentage_dec(q_id) {
    
    let pc, am, x, check, question_text, solution_text;
    
    while (true) {
        pc = getRandomInt(5,50);
        am = getRandomInt(100,2000);
        pcam = pc*am/100;
        check = roundToDecimalPlaces(pcam,0);
        
        if (check === pcam) break;
    }
    
    const decpc = am - check
    
      
    question_text = `The price of an object <b>decreases</b> in price by ${pc}% and is now £${decpc}`;
    

    
    question_text = question_text + `<br /> What was the price before the decrease? <br>`;
    
    solution_text = `The price has decreased by ${pc}%, so the new price is 100 - ${pc} = ${100-pc}% of the original price.  As a decimal this is ${(100-pc)/100}. <br />`+
                    `£${decpc} ÷ ${(100-pc)/100} = £${am}`;
    
 
                    
    return {
        id: q_id,
        question: question_text,
        answer: am,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(r_percentage_dec);

