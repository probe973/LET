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

function normalCdf(x, mu, sigma) {
  const z = (x - mu) / sigma;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327;
  const p = d * Math.exp(-z * z / 2) *
    t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z >= 0 ? 1 - p : p;
}

function normalQuantile(p, mu, sigma) {
  // Acklam's approximation
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.3577518672690, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
  const plow = 0.02425, phigh = 1 - plow;

  let z;
  if (p < plow) {
    const q = Math.sqrt(-2 * Math.log(p));
    z = (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  } else if (p <= phigh) {
    const q = p - 0.5, r = q * q;
    z = (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
  } else {
    const q = Math.sqrt(-2 * Math.log(1 - p));
    z = -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
  }
  return mu + sigma * z;
}


window.normalGenerators = window.normalGenerators || {};

window.normalGenerators.typeNormalCDFtype1 = function(q_id) {
    
    const direction = getRandomInt(0,1);
    
    const mu = getRandomInt(55, 200);
    const sigma = getRandomInt(5, 20);
    const z = [-1,1][getRandomInt(0,1)] * getRandomInt(60,250)/100;
    const x = roundToDecimalPlaces(z*sigma + mu,2);
    
    const lt = normalCdf(x, mu, sigma);
    const rt = 1 - lt;
    
    let pq, ans, pz;
    if (direction === 0) {
        pq = `P(X < ${x})`;
        pz = `P(Z < ${z})`;
        ans = `${roundToDecimalPlaces(lt,3)}`;
    } else {
        pq = `P(X > ${x})`;
        pz = `P(Z > ${z})`;
        ans = `${roundToDecimalPlaces(rt,3)}`;
    }
    
    let qt = `Given that $X \\sim N(${mu}, ${sigma*sigma})$, what is $` + pq + `$. Please ensure you give your answer correct to 3 decimal places.`;
    let at = `You can standardise: $$z = \\frac{${x} - ${mu}}{\\sqrt{${sigma*sigma}}} = ${z}$$ Using tables or calculators to find $$`+pq+`=`+pz+`= ${ans}$$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$` + ans + `$`,
        check_val: ans,
        goal: "solve",
        solution: at
    };
};


window.normalGenerators.typeNormalCDFtype2 = function(q_id) {
    
    
    const mu = getRandomInt(55, 200);
    const sigma = getRandomInt(5, 20);
    
    let z1,z2;
    while (true) {
        z1 = [-1,1][getRandomInt(0,1)] * getRandomInt(60,250)/100;
        z2 = [-1,1][getRandomInt(0,1)] * getRandomInt(60,250)/100;
        if (z2 - z1 > 0.2) break;
    }
        
    const x1 = roundToDecimalPlaces(z1*sigma + mu,2);
    const x2 = roundToDecimalPlaces(z2*sigma + mu,2);
    
    const lt1 = roundToDecimalPlaces(normalCdf(x1, mu, sigma),4);
    const lt2 = roundToDecimalPlaces(normalCdf(x2, mu, sigma),4);
    ans = `${roundToDecimalPlaces(lt2 - lt1,3)}`;
    
    let qt = `Given that $X \\sim N(${mu}, ${sigma*sigma})$, what is $P(${x1} < X < ${x2})$. Please ensure you give your answer correct to 3 decimal places.`;
    let at = `You can standardise: $$z_1 = \\frac{${x1} - ${mu}}{\\sqrt{${sigma*sigma}}} = ${z1}$$ $$z_2 = \\frac{${x2} - ${mu}}{\\sqrt{${sigma*sigma}}} = ${z2}$$`+
    `$$P(${z1} < Z < ${z2}) = P(Z < ${z2}) - P(Z < ${z1}) = ${lt2} - ${lt1} = `+ ans + `$$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$` + ans + `$`,
        check_val: ans,
        goal: "solve",
        solution: at
    };
};


window.normalGenerators.typeNormalCDFtype3 = function(q_id) {
    
    const direction = getRandomInt(0,1);
    
    const mu = getRandomInt(55, 200);
    const sigma = getRandomInt(5, 20);
    const z = [-1,1][getRandomInt(0,1)] * getRandomInt(60,250)/100;
    const x = roundToDecimalPlaces(z*sigma + mu,1);
    
    const lt = roundToDecimalPlaces(normalCdf(x, mu, sigma),4);
    const rt = roundToDecimalPlaces(1 - lt,4);
    
    let pq, ans, pz;
    if (direction === 0) {
        pq = `P(X < x) = ${lt}`;
        pz = `P(Z < {z}) = ${lt}`;
    } else {
        pq = `P(X > x) = ${rt}`;
        pz = `P(Z > ${z}) = ${rt}`;
    }
    
    ans = `${x}`;
    
    let qt = `Given that $X \\sim N(${mu}, ${sigma*sigma})$, what is the value of $x$ if $` + pq + `$. Please ensure you give your answer correct to 1 decimal place.`;
    let at = `You can use tables and calculators to show that $$` + pz + `$$ Destandardising gives $$x = ${x}$$` ;
    
    return {
        id: q_id,
        question: qt,
        answer: `$` + ans + `$`,
        check_val: ans,
        goal: "solve",
        solution: at
    };
};

window.normalGenerators.typeStandardise = function(q_id) {
    
    const mu = getRandomInt(55, 200);
    const sigma = getRandomInt(5, 20);
    const z = [-1,1][getRandomInt(0,1)] * getRandomInt(60,250)/100;
    const x = roundToDecimalPlaces(z*sigma + mu,2);
    
    const ans = `${z}`;
    
    let qt = `Given that $X \\sim N(${mu}, ${sigma*sigma})$, standardise a raw score of ${x}, giving your answer correct to 2 decimal places`;
    let at = `$$ z = \\frac{x - \\mu}{\\sigma} = \\frac{${x} - ${mu}}{${sigma}} = ${z}$$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$` + ans + `$`,
        check_val: ans,
        goal: "solve",
        solution: at
    };
};

window.normalGenerators.typeDeStandardise = function(q_id) {
    
    const mu = getRandomInt(55, 200);
    const sigma = getRandomInt(5, 20);
    const z = [-1,1][getRandomInt(0,1)] * getRandomInt(60,250)/100;
    const x = roundToDecimalPlaces(z*sigma + mu,2);
    
    const ans = `${x}`;
    
    let qt = `Given that $X \\sim N(${mu}, ${sigma*sigma})$, what would a raw score of $x$ be for a standardised score of $z=${z}$? Give your answer correct to 2 decimal places`;
    let at = `$$ x = \\mu + \\sigma z = ${mu} +${z} \\times ${sigma} = ${x} $$`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$` + ans + `$`,
        check_val: ans,
        goal: "solve",
        solution: at
    };
};
    
