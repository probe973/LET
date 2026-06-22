window.standardFormGenerators = [];

// Local rounding helper
function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function large_sf_1dp(q_id) {
    
    const ab = getRandomInt(10,99)/10;
    const exp = getRandomInt(3,8);
       
    const a = roundToDecimalPlaces(ab,1);
    const q = roundToDecimalPlaces(Math.pow(10,exp)*a,0);
    
    let question_text = `Write ${q} in standard index form`;
    
    let solution_text = `Write the number between 1 and 10:  ${a} <br /> Decimal point needs to move ${exp} places to the right`;
    
    return {
        id: q_id,
        question: question_text,
        base_answer: a,
        exponent_answer: exp,
        solution: solution_text
    };
    
};
    
window.standardFormGenerators.push(large_sf_1dp);


function large_sf_2dp(q_id) {
    
    const ab = getRandomInt(100,999)/100;
    const exp = getRandomInt(3,8);
    
    const a = roundToDecimalPlaces(ab,2);
    const q = roundToDecimalPlaces(Math.pow(10,exp)*a,0);
    
    let question_text = `Write ${q} in standard index form`;
    
    let solution_text = `Write the number between 1 and 10:  ${a} <br /> Decimal point needs to move ${exp} places to the right`;
    
    return {
        id: q_id,
        question: question_text,
        base_answer: a,
        exponent_answer: exp,
        solution: solution_text
    };
    
};
    
window.standardFormGenerators.push(large_sf_2dp);


function small_sf_2dp(q_id) {
    
    const ab = getRandomInt(100,999)/100;
    const exp = getRandomInt(1,5);
    
    const a = roundToDecimalPlaces(ab,2);
    const q = roundToDecimalPlaces(Math.pow(10,-exp)*a,exp+2);
    
    let question_text = `Write ${q} in standard index form`;
    
    let solution_text = `Write the number between 1 and 10:  ${a} <br /> Decimal point needs to move ${exp} places to the left`;
    
    return {
        id: q_id,
        question: question_text,
        base_answer: a,
        exponent_answer: -exp,
        solution: solution_text
    };
    
};
    
window.standardFormGenerators.push(small_sf_2dp);


function small_sf_1dp(q_id) {
    
    const ab = getRandomInt(10,99)/10;
    const exp = getRandomInt(1,5);
    
    const a = roundToDecimalPlaces(ab,1);
    const q = roundToDecimalPlaces(Math.pow(10,-exp)*a,exp+1);
    
    let question_text = `Write ${q} in standard index form`;
    
    let solution_text = `Write the number between 1 and 10:  ${a} <br /> Decimal point needs to move ${exp} places to the left`;
    
    return {
        id: q_id,
        question: question_text,
        base_answer: a,
        exponent_answer: -exp,
        solution: solution_text
    };
    
};
    
window.standardFormGenerators.push(small_sf_1dp);
