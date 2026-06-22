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

function large_df_1dp(q_id) {
    
    const ab = getRandomInt(10,99)/10;
    const exp = getRandomInt(3,8);
       
    const a = roundToDecimalPlaces(ab,1);
    const q = roundToDecimalPlaces(Math.pow(10,exp)*a,0);
    
    let question_text = `Write \\( ${a} \\times 10^{${exp}} \\) is normal form`;
    let solution_text = `Positive exponent, so multiply by powers of 10, move decimal place ${exp} to the right <br /> ${q}`;
    
    return {
        id: q_id,
        question: question_text,
        answer: q,
        solution: solution_text
    };
    
};
    
window.reviewQuestionGenerators.push(large_df_1dp);
