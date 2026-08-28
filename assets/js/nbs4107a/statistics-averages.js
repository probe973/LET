function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
}

window.averagesGenerators = window.averagesGenerators || {};

window.averagesGenerators.type1 = function(q_id) {
    
    //Find the mean
    
    const xbar = getRandomInt(12,30);
    let n = getRandomInt(5,10);
    
    let total = xbar * n;
    
    let x = [];
    x[0] = 0;
    let xsum = 0;
    
    while (true) {
        for (let i = 1; i < n; i++) {
            x[i] = xbar + getRandomInt(-10,10);
            xsum = xsum + x[i];
        }
        x[n] = total - xsum;
        if (x[n] > 0) break;
    }
    
    let numlist="";
    
    for (let i = 1; i < n; i++) {
        numlist = numlist + x[i] + ", ";
    }
    
    numlist = numlist + x[n];
    qt = `Find the mean of the following: $$ ` + numlist + `$$`;
    at = `Find the sum of the ${n} values: $${total}$ <br><br> Divide by the number of terms: $$ \\frac{${total}}{${n}} = ${xbar}$$`
    av = `${xbar}`;
    
    return {
        id: q_id,
        question: qt,
        answer: xbar,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    

window.averagesGenerators.type2 = function(q_id) {
    
    //Find the median
    
    let n = getRandomInt(5,10);
    
    let x = [];
    let xsup = ["st","nd","rd","th"];
   
    for (let i = 0; i < n; i++) {
        x[i] = getRandomInt(1,20);
        }
    
    
    let numlist="";
    
    for (let i = 0; i < n; i++) {
        numlist = numlist + x[i];
        if (i < n - 1) {
            numlist = numlist + ", ";
        }
    }
    
    let qt, at, av, med;
    
    qt = `Find the median of the following: $$ ` + numlist + `$$`;
    
    x.sort((a, b) => a - b);
    
    let sortlist = "";
    for (let i = 0; i < n; i++) {
        sortlist = sortlist + x[i];
        if (i < n - 1) {
            sortlist = sortlist + ", ";
        }
    }
    
    at = `Place the numbers in numerical order: $$` + sortlist + `$$` +
    `Using the $\\frac{n+1}{2}$ position, $\\frac{${n}+1}{2} = ${(n+1)/2}$ <br>`;
    
    if (n/2 === roundToDecimalPlaces(n/2,0)) {
        at = at + `Need to go halfway between the ` + Math.floor((n+1)/2) + xsup[Math.min(3,Math.floor(((n+1)/2)-1))] + ` and ` + Math.ceil((n+1)/2) + xsup[Math.min(3,Math.ceil(((n+1)/2)-1))] + ` positions`;
        med = (x[Math.floor(((n+1)/2)-1)] + x[Math.ceil(((n+1)/2)-1)])/2;
        at = at + `$$ \\frac{` + x[Math.floor(((n+1)/2)-1)] + `+` + x[Math.ceil(((n+1)/2)-1)] + `}{2} = ${med}$$`;
    } else {
        at = at + `Need to read the value in the ` + (n+1)/2 + xsup[Math.min(3,((n+1)/2)-1)] + ` position`;
        med = x[((n+1)/2)-1];
    }
        
    av = `${med}`;
    //av = `${n}`;
    return {
        id: q_id,
        question: qt,
        answer: med,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    


window.averagesGenerators.type3 = function(q_id) {
    
    //Find the range
    
    let n = getRandomInt(5,10);
    
    let x = [];
   
    for (let i = 0; i < n; i++) {
        x[i] = getRandomInt(1,20);
        }
    
    
    let numlist="";
    
    for (let i = 0; i < n; i++) {
        numlist = numlist + x[i];
        if (i < n - 1) {
            numlist = numlist + ", ";
        }
    }
    
    let qt, at, av, range;
    
    qt = `Find the range of the following: $$ ` + numlist + `$$`;
    
    //x.sort((a, b) => a - b);
    const max = Math.max(...x);
    const min = Math.min(...x);
    range = max - min
    
    at = `$\\text{Max} = ${max}$, $\\text{min} = ${min}$, so $\\text{range} = ${max} - ${min} = ${range}$`

    av = `${range}`;
 
    return {
        id: q_id,
        question: qt,
        answer: range,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    


window.averagesGenerators.type4 = function(q_id) {
    
    //Find the SD
    
    const xbar = getRandomInt(8,15);
    let n = getRandomInt(4,8);
    
    let total = xbar * n;
    
    let x = [];
    x[0] = 0;
    let xsum = 0;
    
    while (true) {
        for (let i = 1; i < n; i++) {
            x[i] = xbar + getRandomInt(-7,7);
            xsum = xsum + x[i];
        }
        x[n] = total - xsum;
        if (x[n] > 0) break;
    }
    
    let numlist="";
    
    for (let i = 1; i < n; i++) {
        numlist = numlist + x[i] + ", ";
    }
    
    numlist = numlist + x[n];
    
    let xminus = [];
    let xminus2 = [];
    xminus[0] = 0;
    xminus2[0] = 0;
    
    let difflist = ""; 
    let difflist2 = "";
    let xsqsum = 0;
    
    for (let i = 1; i < n; i++) {
        xminus[i] = x[i] - xbar;
        xminus2[i] = xminus[i] * xminus[i];
        difflist = difflist + xminus[i] + ",  ";
        difflist2 = difflist2 + xminus2[i] + ",  ";
        xsqsum = xsqsum + xminus2[i];
    }
    xminus[n] = x[n] - xbar;
    xminus2[n] = xminus[n]*xminus[n];
    difflist = difflist + xminus[n];
    difflist2 = difflist2 + xminus2[n];
    xsqsum = xsqsum + (x[n] - xbar)*(x[n] - xbar);
    
    const sraw = Math.sqrt(xsqsum/(n-1));    
    const s = roundToDecimalPlaces(sraw,2);
        
    qt = `Find the sample standard deviation of the following: $$ ` + numlist + `$$ You can use the fact that the mean of these data is ${xbar}. Give your answer correct to 2 decimal places.`;
    at = `Subtract the mean, ${xbar}, from each of the values: $$` + difflist + `$$ Square each of these values: $$` + difflist2 + `$$ Sum this list: ${xsqsum}`+
    `$$ s = \\frac{${xsqsum}}{${n} - 1} = ${s} $$`;
    av = `${s}`;
    
    return {
        id: q_id,
        question: qt,
        answer: s,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    


window.averagesGenerators.type5 = function(q_id) {
    
    // Transform ax+b on average
    
    let a, b
    while (true) {
        a = getRandomInt(1,20);
        b = getRandomInt(-10,10)*5;
        if (a != 1 || b != 0) break;
    }
    
    const avg = ["mean","median"][getRandomInt(0,1)];
    const mean = getRandomInt(5,100);
    
    const newmean = a*mean + b;
    
    let qt, at, av;
    
    if (a === 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${b} is added to every value, what will the new ${avg} be?`;
        at = `The ${avg} will increase by ${b}, so the new ${avg} will be $${mean} + ${b} = ${newmean}$`;
    } else if (a === 1 && b < 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${Math.abs(b)} is subtracted from every value, what will the new ${avg} be?`;
        at = `The ${avg} will decrease by ${Math.abs(b)}, so the new ${avg} will be $${mean} - ${Math.abs(b)} = ${newmean}$`;
    } else if (a > 1 && b === 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a}, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a}, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    } else if (a > 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a} and then has ${b} added to it, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a} and then have ${b} added to it, so the new ${avg} will be $${mean} \\times ${a} + ${b} = ${newmean}$`;
    } else {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a} and then has ${Math.abs(b)} subtracted from it, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a} and then have ${Math.abs(b)} subtracted from it, so the new ${avg} will be $${mean} \\times ${a} - ${Math.abs(b)} = ${newmean}$`;
    }
    
    av = `${newmean}`;
    
    return {
        id: q_id,
        question: qt,
        answer: newmean,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    


window.averagesGenerators.type6 = function(q_id) {
    
    // Transform ax+b on spread
    
    let a, b
    while (true) {
        a = getRandomInt(1,20);
        b = getRandomInt(-10,10)*5;
        if (a != 1 || b != 0) break;
    }
    
    const avg = ["standard deviation","range"][getRandomInt(0,1)];
    const mean = getRandomInt(5,30);
    
    const newmean = a*mean;
    
    let qt, at, av;
    
    if (a === 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${b} is added to every value, what will the new ${avg} be?`;
        at = `The ${avg} is not effected by the addition, so the new ${avg} will remain at ${mean}`;
    } else if (a === 1 && b < 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${Math.abs(b)} is subtracted from every value, what will the new ${avg} be?`;
        at = `The ${avg} is not effected by the subtraction, so the new ${avg} will remain at ${mean}`;
    } else if (a > 1 && b === 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a}, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a}, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    } else if (a > 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a} and then has ${b} added to it, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a} but the addition of ${b} does not have any effect, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    } else {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a} and then has ${Math.abs(b)} subtracted from it, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a} but the subtraction of ${Math.abs(b)} does not have any effect, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    }
    
    av = `${newmean}`;
    
    return {
        id: q_id,
        question: qt,
        answer: newmean,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    


window.averagesGenerators.type7 = function(q_id) {
    
    // Transform a(x+b) on average
    
    let a, b
    while (true) {
        a = getRandomInt(1,20);
        b = getRandomInt(-10,10)*5;
        if (a != 1 || b != 0) break;
    }
    
    const avg = ["mean","median"][getRandomInt(0,1)];
    const mean = getRandomInt(5,100);
    
    const newmean = a*(mean + b);
    
    let qt, at, av;
    
    if (a === 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${b} is added to every value, what will the new ${avg} be?`;
        at = `The ${avg} will increase by ${b}, so the new ${avg} will be $${mean} + ${b} = ${newmean}$`;
    } else if (a === 1 && b < 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${Math.abs(b)} is subtracted from every value, what will the new ${avg} be?`;
        at = `The ${avg} will decrease by ${Math.abs(b)}, so the new ${avg} will be $${mean} - ${Math.abs(b)} = ${newmean}$`;
    } else if (a > 1 && b === 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a}, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a}, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    } else if (a > 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value has ${b} added to it and then this is multiplied by ${a}, what will the new ${avg} be?`;
        at = `The ${avg} will have ${b} added to it and then be multiplied by ${a}.<br> So the new ${avg} will be $ (${mean} + ${b}) \\times ${a} = ${newmean}$`;
    } else {
        qt = `A dataset has a ${avg} of ${mean}. If every value has ${Math.abs(b)} subtracted from it and is then multiplied by ${a}, what will the new ${avg} be?`;
        at = `The ${avg} will have ${Math.abs(b)} subtracted from it and then be multiplied by ${a}, so the new ${avg} will be $(${mean} - ${Math.abs(b)}) \\times ${a} = ${newmean}$`;
    }
    
    av = `${newmean}`;
    
    return {
        id: q_id,
        question: qt,
        answer: newmean,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    


window.averagesGenerators.type8 = function(q_id) {
    
    // Transform a(x+b) on spread
    
    let a, b
    while (true) {
        a = getRandomInt(1,20);
        b = getRandomInt(-10,10)*5;
        if (a != 1 || b != 0) break;
    }
    
    const avg = ["standard deviation","range"][getRandomInt(0,1)];
    const mean = getRandomInt(5,30);
    
    const newmean = a*mean;
    
    let qt, at, av;
    
    if (a === 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${b} is added to every value, what will the new ${avg} be?`;
        at = `The ${avg} is not effected by the addition, so the new ${avg} will remain at ${mean}`;
    } else if (a === 1 && b < 0) {
        qt = `A dataset has a ${avg} of ${mean}.  If ${Math.abs(b)} is subtracted from every value, what will the new ${avg} be?`;
        at = `The ${avg} is not effected by the subtraction, so the new ${avg} will remain at ${mean}`;
    } else if (a > 1 && b === 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value is multiplied by ${a}, what will the new ${avg} be?`;
        at = `The ${avg} will be multiplied by ${a}, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    } else if (a > 1 && b > 0) {
        qt = `A dataset has a ${avg} of ${mean}. If every value has ${b} added to it and then this is multiplied by ${a}, what will the new ${avg} be?`;
        at = `The addition of ${b} does not have any effect. The ${avg} will be multiplied by ${a}, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    } else {
        qt = `A dataset has a ${avg} of ${mean}. If every value has ${Math.abs(b)} subtracted from it and is then multiplied by ${a}, what will the new ${avg} be?`;
        at = `The subtraction of ${Math.abs(b)} does not have any effect. The ${avg} will be multiplied by ${a}, so the new ${avg} will be $${mean} \\times ${a} = ${newmean}$`;
    }
    
    av = `${newmean}`;
    
    return {
        id: q_id,
        question: qt,
        answer: newmean,
        check_val: av,
        goal: "solve",
        solution: at
    };
};    
