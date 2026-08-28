function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToDecimalPlaces(value, dp) {
    if (isNaN(value)) return NaN;
    const m = Math.pow(10, dp);
    return Math.round(value * m) / m;
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

function factorial(n) {
  if (n < 0) throw new Error("Negative numbers not allowed");
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

window.binomialGenerators = window.binomialGenerators || {};

window.binomialGenerators.equals = function(q_id) {
    
    let n, p, r, ncr, pr;
    while (true) {
        n = getRandomInt(5,20);
        p = roundToDecimalPlaces(getRandomInt(100,900)/1000,2);
        r = getRandomInt(0,n);
    
        ncr = factorial(n)/factorial(r)/factorial(n-r);
        pr = roundToDecimalPlaces(ncr*Math.pow(p,r)*Math.pow(1-p,n-r),3);
        
        if (pr > 0.02) break;
    }
    
    let ans = `${pr}`;
    
    let qt = `Given $X \\sim B(${n},${p})$ find, correct to 3 decimal places, $P(X = ${r})$`;
    let at = `$$P(X=x) = \\binom{n}{x} \\times p^{x} \\times (1-p)^{n-x}$$`+
    `$$P(X = ${r}) = \\binom{${n}}{${r}} \\times ${p}^{${r}} \\times ${roundToDecimalPlaces(1-p,2)}^{${n-r}} = ${pr}$$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$` + ans + `$`,
        min: pr - 0.001,
        max: pr + 0.001,
        solution: at
    };
};

window.binomialGenerators.lessthan = function(q_id) {
    
    let n, p, r, ncr, pr;
    let pri = [];
    while (true) {
        n = getRandomInt(5,12);
        p = roundToDecimalPlaces(getRandomInt(100,900)/1000,2);
        r = getRandomInt(0,n-1);
    
        let ncr, checksmall;
        checksmall=0
        pr = 0;
        for (let i=0; i<=n; i++) {
            ncr = factorial(n)/factorial(i)/factorial(n-i);
            pri[i] = roundToDecimalPlaces(ncr*Math.pow(p,i)*Math.pow(1-p,n-i),4);
            if (pri[i] < 0.001) checksmall=1;
            if (i < r) {
                pr += roundToDecimalPlaces(pri[i],4);
            }
        }
        if (pr >= 0.1 && checksmall===0) break;
    }
    const pra = roundToDecimalPlaces(pr,3);
    let ans = `${pra}`;
    
    let qt = `Given $X \\sim B(${n},${p})$ find, correct to 3 decimal places, $P(X < ${r})$`;
    
    let at, ptext, ctext;
    
    if (r < n/2) {
        ptext = `P(X < ${r}) = `;
        ctext = `P(X < ${r}) = `;
        for (let i=0; i<r-1; i++) {
            ptext += `P(X = ${i}) +`;
            ctext += `${pri[i]} +`;
        }
        ptext = ptext + `P(X = ${r-1})`;
        ctext = ctext + `${pri[r-1]}`;
        
        at = `$$` + ptext + `$$ $$` + ctext + `$$ $$P(X < ${r}) = ${pra}$$`;
    } else {
        ptext = `P(X < ${r}) = 1 - P(X \\geq ${r}) = 1 - (`;
        ctext = `P(X < ${r}) = 1 - (`;
        for (let i=r; i<n; i++) {
            ptext += `P(X = ${i}) +`;
            ctext += `${pri[i]}+`;
        }
        ptext = ptext + `P(X = ${n})`;
        ctext = ctext + `${pri[n]})`;
        
        at = `Easier here to use $P(X < ${r}) = 1 - P(X \\geq ${r})$ $$ ` + ptext + `)$$ $$` + ctext + `$$ $$P(X < ${r}) = ${pra}$$`;
    }
        
       
    
    return {
        id: q_id,
        question: qt,
        answer: `$` + ans + `$`,
        min: pra - 0.001,
        max: pra + 0.001,
        solution: at
    };
};
    
