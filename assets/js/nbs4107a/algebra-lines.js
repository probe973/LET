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

window.lineGenerators = window.lineGenerators || {};

window.lineGenerators.type1 = function(q_id) {

        //Find gradient or y-intercept y=mx+c form
        
        const mabs = getRandomInt(1,12);
        const msign = Math.pow(-1,getRandomInt(1,2));
        const m = mabs*msign;
        
        const cabs = getRandomInt(1,12);
        const csign = Math.pow(-1,getRandomInt(1,2));
        const c = cabs*csign;
        
        let mtext;
        if (mabs === 1) {
            mtext = `x`;
        } else {
            mtext = `${mabs}x`;
        }
        
        let ctext;
        if (c < 0) {
            ctext = `- ${cabs}`;
        } else {
            ctext = `+ ${cabs}`;
        }
        
        let qt, av, at;
        at = `In the $y=mx+c$ form, `;
        const choice = getRandomInt(1,2);
        if (choice === 1) {
            qt = `What is the gradient of the line: `;
            av = `${m}`;
            at = at + `$m$ is the gradient`;
        } else {
            qt = `What is the $y$-cordinate of the $y$-intercept of the line:`;
            av = `${c}`;
            at = at + `$c$ is the y-intercept`;
        }
        
        if (m > 0) {
            qt = qt + `$$ y = ${mtext} ${ctext} $$`;
        } else if (m < 0 && c > 0) {
            qt = qt + `$$ y = ${c} - ${mtext} $$`;
        } else {
            qt = qt + `$$ y = - ${mtext} ${ctext} $$`;
        }
        
        
        return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "solve",
        solution: at
    };
}; 

window.lineGenerators.type2 = function(q_id) {
    
    // Write in the form y=mx+c
    
    let c = [];
    while (true) {
        for (let i = 0; i< 4; i++) {
            c[i] = getRandomInt(1,12);
        }
        if (c[1]*c[3] != 1 && c[0]*c[3] !=1 && c[1]*c[3] <= 20 && c[0]*c[3] <= 20 && c[1]*c[2] <= 20) break;
    }
    
    c[10] = c[0]/findHCF(c[0],c[1]);
    c[11] = c[1]/findHCF(c[0],c[1]);
    c[12] = c[2]/findHCF(c[2],c[3]);
    c[13] = c[3]/findHCF(c[2],c[3]);
    let av;
    if (c[11] !=1 && c[13] !=1) {
        av = `y = \\frac{${c[10]}}{${c[11]}}x + \\frac{${c[12]}}{${c[13]}}`;
    } else if (c[11] === 1 && c[13] !=1) {
        av = `y = ${c[10]}x + \\frac{${c[12]}}{${c[13]}}`;
        if (c[10] === 1) {
            av = `y = x +  \\frac{${c[12]}}{${c[13]}}`;
        }
    } else if (c[11] !=1 && c[13] === 1) {
        av = `y = \\frac{${c[10]}}{${c[11]}}x + ${c[12]}`;
    } else {
        av = `y = ${c[10]}x + ${c[12]}`;
        if (c[10] === 1) {
            av = `y= x + ${c[12]}`;
        }
    }
    
    const choice = getRandomInt(1,3);
    
    let qt = `Write the function in the form $y=mx+c$:`;
    let at;
    
    if (choice === 1) {
        
        if (c[11] !=1 && c[13] !=1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + \\frac{${c[12]}}{${c[13]}}`;
        } else if (c[11] === 1 && c[13] !=1) {
            av = `y = ${c[10]}x + \\frac{${c[12]}}{${c[13]}}`;
            if (c[10] === 1) {
                av = `y = x +  \\frac{${c[12]}}{${c[13]}}`;
            }
        } else if (c[11] !=1 && c[13] === 1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + ${c[12]}`;
        } else {
            av = `y = ${c[10]}x + ${c[12]}`;
            if (c[10] === 1) {
                av = `y= x + ${c[12]}`;
            }
        }
    
        qt = qt + `$$${c[0]*c[3]}x - ${c[1]*c[3]}y + ${c[2]*c[1]} = 0$$`;
        at = `Add $${c[1]*c[3]}y$ to both sides: $$${c[0]*c[3]}x + ${c[2]*c[1]} = ${c[1]*c[3]}y $$ Divide through by $${c[1]*c[3]}$` +
        `$$\\frac{${c[0]*c[3]}}{${c[1]*c[3]}}x + \\frac{${c[2]*c[1]}}{${c[1]*c[3]}} = y$$` + `$$` + av + `$$`;
    
    } else if (choice === 2) {
        
        if (c[11] !=1 && c[13] !=1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x - \\frac{${c[12]}}{${c[13]}}`;
        } else if (c[11] === 1 && c[13] !=1) {
            av = `y = ${c[10]}x - \\frac{${c[12]}}{${c[13]}}`;
            if (c[10] === 1) {
                av = `y = x - \\frac{${c[12]}}{${c[13]}}`;
            }
        } else if (c[11] !=1 && c[13] === 1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x - ${c[12]}`;
        } else {
            av = `y = ${c[10]}x - ${c[12]}`;
            if (c[10] === 1) {
                av = `y= x - ${c[12]}`;
            }
        }
        
        qt = qt + `$$${c[0]*c[3]}x - ${c[1]*c[3]}y = ${c[2]*c[1]} $$`;
        
        at = `Add $${c[1]*c[3]}y$ to both sides and subtract $${c[2]*c[1]}$ from both sides: $$${c[0]*c[3]}x - ${c[2]*c[1]} = ${c[1]*c[3]}y$$` +
        `Divide through by $${c[1]*c[3]}$` +
        `$$\\frac{${c[0]*c[3]}}{${c[1]*c[3]}}x - \\frac{${c[2]*c[1]}}{${c[1]*c[3]}} = y$$` + `$$` + av + `$$`;
        
    } else if (choice === 3) {
        
        if (c[11] !=1 && c[13] !=1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + \\frac{${c[12]}}{${c[13]}}`;
        } else if (c[11] === 1 && c[13] !=1) {
            av = `y = ${c[10]}x + \\frac{${c[12]}}{${c[13]}}`;
            if (c[10] === 1) {
                av = `y = x + \\frac{${c[12]}}{${c[13]}}`;
            }
        } else if (c[11] !=1 && c[13] === 1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + ${c[12]}`;
        } else {
            av = `y = ${c[10]}x + ${c[12]}`;
            if (c[10] === 1) {
                av = `y= x + ${c[12]}`;
            }
        }
        
        qt = qt + `$$ ${c[1]*c[3]}y - ${c[0]*c[3]}x = ${c[2]*c[1]} $$`;
        
        at = `Add $${c[0]*c[3]}x$ to both sides: $$ ${c[1]*c[3]}y = ${c[2]*c[1]} + ${c[0]*c[3]}x $$` +
        `Divide through by $${c[1]*c[3]}$` +
        `$$ y = \\frac{${c[2]*c[1]}}{${c[1]*c[3]}} + \\frac{${c[0]*c[3]}}{${c[1]*c[3]}}x $$` + `$$` + av + `$$`;
        
    }


    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "rearrange",
        solution: at
    };
}; 


window.lineGenerators.type3 = function(q_id) {
    
    // Gradient or intercept
    
    let c = [];
    while (true) {
        for (let i = 0; i< 4; i++) {
            c[i] = getRandomInt(1,12);
        }
        if (c[1]*c[3] != 1 && c[0]*c[3] !=1 && c[1]*c[3] <= 20 && c[0]*c[3] <= 20 && c[1]*c[2] <= 20) break;
    }
    
    c[10] = c[0]/findHCF(c[0],c[1]);
    c[11] = c[1]/findHCF(c[0],c[1]);
    c[12] = c[2]/findHCF(c[2],c[3]);
    c[13] = c[3]/findHCF(c[2],c[3]);
    let av, ag, ai, ans, qt;

    
    const choice = getRandomInt(1,3);
    
    const gori = getRandomInt(1,4);
    if (gori < 4) {
        qt = `Write down the exact value of the gradient of the straight line:`;
    } else {
        qt = `Write down the exact value of the $y$-coordinate of the $y$-intercept of the straight line:`;
    }
    let at;
    
    if (choice === 1) {
        
        if (c[11] !=1 && c[13] !=1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + \\frac{${c[12]}}{${c[13]}}`;
            ag = `\\frac{${c[10]}}{${c[11]}}`;
            ai = `\\frac{${c[12]}}{${c[13]}}`;
        } else if (c[11] === 1 && c[13] !=1) {
            av = `y = ${c[10]}x + \\frac{${c[12]}}{${c[13]}}`;
            ag = `${c[10]}`;
            ai = `\\frac{${c[12]}}{${c[13]}}`;
            if (c[10] === 1) {
                av = `y = x +  \\frac{${c[12]}}{${c[13]}}`;
            }
        } else if (c[11] !=1 && c[13] === 1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + ${c[12]}`;
            ag = `\\frac{${c[10]}}{${c[11]}}`;
            ai = `${c[12]}`;
        } else {
            av = `y = ${c[10]}x + ${c[12]}`;
            ag = `${c[10]}`;
            ai = `${c[12]}`;
            if (c[10] === 1) {
                av = `y= x + ${c[12]}`;
            }
        }
    
        qt = qt + `$$${c[0]*c[3]}x - ${c[1]*c[3]}y + ${c[2]*c[1]} = 0$$`;
        at = `Add $${c[1]*c[3]}y$ to both sides: $$${c[0]*c[3]}x + ${c[2]*c[1]} = ${c[1]*c[3]}y $$ Divide through by $${c[1]*c[3]}$` +
        `$$\\frac{${c[0]*c[3]}}{${c[1]*c[3]}}x + \\frac{${c[2]*c[1]}}{${c[1]*c[3]}} = y$$` + `$$` + av + `$$`;
    
    } else if (choice === 2) {
        
        if (c[11] !=1 && c[13] !=1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x - \\frac{${c[12]}}{${c[13]}}`;
            ag = `\\frac{${c[10]}}{${c[11]}}`;
            ai = `-\\frac{${c[12]}}{${c[13]}}`;
        } else if (c[11] === 1 && c[13] !=1) {
            av = `y = ${c[10]}x - \\frac{${c[12]}}{${c[13]}}`;
            ag = `${c[10]}`;
            ai = `-\\frac{${c[12]}}{${c[13]}}`;
            if (c[10] === 1) {
                av = `y = x - \\frac{${c[12]}}{${c[13]}}`;
            }
        } else if (c[11] !=1 && c[13] === 1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x - ${c[12]}`;
            ag = `\\frac{${c[10]}}{${c[11]}}`;
            ai = `-${c[12]}`;
        } else {
            av = `y = ${c[10]}x - ${c[12]}`;
            ag = `${c[10]}`;
            ai = `-${c[12]}`;
            if (c[10] === 1) {
                av = `y= x - ${c[12]}`;
            }
        }
        
        qt = qt + `$$${c[0]*c[3]}x - ${c[1]*c[3]}y = ${c[2]*c[1]} $$`;
        
        at = `Add $${c[1]*c[3]}y$ to both sides and subtract $${c[2]*c[1]}$ from both sides: $$${c[0]*c[3]}x - ${c[2]*c[1]} = ${c[1]*c[3]}y$$` +
        `Divide through by $${c[1]*c[3]}$` +
        `$$\\frac{${c[0]*c[3]}}{${c[1]*c[3]}}x - \\frac{${c[2]*c[1]}}{${c[1]*c[3]}} = y$$` + `$$` + av + `$$`;
        
    } else if (choice === 3) {
        
        if (c[11] !=1 && c[13] !=1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + \\frac{${c[12]}}{${c[13]}}`;
            ag = `\\frac{${c[10]}}{${c[11]}}`;
            ai = `\\frac{${c[12]}}{${c[13]}}`;
        } else if (c[11] === 1 && c[13] !=1) {
            av = `y = ${c[10]}x + \\frac{${c[12]}}{${c[13]}}`;
            ag = `${c[10]}`;
            ai = `\\frac{${c[12]}}{${c[13]}}`;
            if (c[10] === 1) {
                av = `y = x + \\frac{${c[12]}}{${c[13]}}`;
            }
        } else if (c[11] !=1 && c[13] === 1) {
            av = `y = \\frac{${c[10]}}{${c[11]}}x + ${c[12]}`;
            ag = `\\frac{${c[10]}}{${c[11]}}`;
            ai = `${c[12]}`;
        } else {
            av = `y = ${c[10]}x + ${c[12]}`;
            ag = `${c[10]}`;
            ai = `${c[12]}`;
            if (c[10] === 1) {
                av = `y= x + ${c[12]}`;
            }
        }
        
        qt = qt + `$$ ${c[1]*c[3]}y - ${c[0]*c[3]}x = ${c[2]*c[1]} $$`;
        
        at = `Add $${c[0]*c[3]}x$ to both sides: $$ ${c[1]*c[3]}y = ${c[2]*c[1]} + ${c[0]*c[3]}x $$` +
        `Divide through by $${c[1]*c[3]}$` +
        `$$ y = \\frac{${c[2]*c[1]}}{${c[1]*c[3]}} + \\frac{${c[0]*c[3]}}{${c[1]*c[3]}}x $$` + `$$` + av + `$$`;
        
    }

    if (gori < 4) {
        at = at + `The $mx$ part represents the gradient`;
        ans = ag;
    } else {
        ans = ai;
        at = at + `The $+c$ part represents the $y$-intercept`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+ans+`$`,
        check_val: ans,
        goal: "solve",
        solution: at
    };
}; 

window.lineGenerators.type4 = function(q_id) {
    
    // Find the gradient from two points
    
    const mabs = getRandomInt(1,12);
    const msign = Math.pow(-1,getRandomInt(1,2));
    const m = mabs*msign
    const x1 = getRandomInt(-3, 8);
    const y1 = getRandomInt(-3,20);
    
    const x2 = x1 + getRandomInt(2,9);
    const y2 = y1 + (x2-x1)*m
    
    let qt, at, av;
    
    qt = `Find the gradient of the line that passes through the points $(${x1},${y1})$ and $(${x2},${y2})$`;
    at = `Using $\\Delta$ to represent change in: $$ \\text{gradient} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\frac{${y2-y1}}{${x2-x1}} = ${m} $$`;
    av = `${m}`;
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "solve",
        solution: at
    };
};  

window.lineGenerators.type5 = function(q_id) {
    
    // Find the gradient from two points
    
    let x1, x2, y1, y2, m;
    
    while (true) {
        x1 = getRandomInt(-5, 10);
        x2 = getRandomInt(1,10) + x1
        y1 = getRandomInt(-10,20);
        y2 = getRandomInt(-10,20);
        
        m = (y2-y1)/(x2-x1);
        
        if (m != roundToDecimalPlaces(m,0)) break;
    }
    
    const mnum = (y2-y1)/findHCF(y2-y1,x2-x1);
    const mden = (x2-x1)/findHCF(y2-y1,x2-x1);
    
    let qt, at, av, ans;
    
    qt = `Find the exact value of the gradient of the line that passes through the points $(${x1},${y1})$ and $(${x2},${y2})$`;
    at = `Using $\\Delta$ to represent change in: $$ \\text{gradient} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\frac{${y2-y1}}{${x2-x1}} $$`;
    av = `\\frac{${mnum}}{${mden}}`;
    
    if (mnum < 0) {
        ans = `-\\frac{${-mnum}}{${mden}}`;
    } else {
        ans = av;
    }
    
    if (findHCF(y2-y1,x2-x1) !=1) {
        at = at + `$$ \\text{gradient} = ` + ans + `$$`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+ans+`$`,
        check_val: av,
        goal: "solve",
        solution: at
    };
};  


window.lineGenerators.type6 = function(q_id) {
    
    // Find the equation y=mx+c from two points
    
    const mabs = getRandomInt(1,12);
    const msign = Math.pow(-1,getRandomInt(1,2));
    const m = mabs*msign
    const x1 = getRandomInt(-3, 8);
    const y1 = getRandomInt(-3,20);
    
    const x2 = x1 + getRandomInt(2,9);
    const y2 = y1 + (x2-x1)*m
    
    let qt, at, av;
    
    const c = y1 - m*x1
    
    qt = `Find the equation of the line that passes through the points $(${x1},${y1})$ and $(${x2},${y2})$, in the form $y=mx+c$`;
    at = `Using $\\Delta$ to represent change in: $$ \\text{gradient} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{${y2} - ${y1}}{${x2} - ${x1}} = \\frac{${y2-y1}}{${x2-x1}} = ${m} $$`;
    at = at + `<br> You now know the equation of the line is of the form: $$y = ${m}x + c$$`;
    at = at + `<br> Substitute in one of the points for $x$ and for $y$, say $(${x1},${y1})$`;
    at = at + `$$ ${y1} = ${m} \\times ${x1} + c$$ Solve for $c$: $$c = ${c}$$`;
    
    let mtext = `${m}x`;
    if (mabs === 1) {
        mtext = `x`;
    }
    
    if (m > 0 && c > 0) {
        av = `y=${mtext}+${c}`;
    } else if (m > 0 && c < 0) {
        av = `y=${mtext}-${-c}`;
    } else if (m < 0 && c > 0) {
        av = `y=${c}-${mtext}`;
    } else {
        av = `y=-${mtext} - ${-c}`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "simplify",
        solution: at
    };
};  


window.lineGenerators.type7 = function(q_id) {

        //Find x-intercept y=mx+c form
        
        const mabs = getRandomInt(1,12);
        const msign = Math.pow(-1,getRandomInt(2,2));
        const m = mabs*msign;
        
        const cabs = getRandomInt(1,12);
        const csign = Math.pow(-1,getRandomInt(1,2));
        const c = cabs*csign;
        
        let mtext;
        if (mabs === 1) {
            mtext = `x`;
        } else {
            mtext = `${mabs}x`;
        }
        
        let ctext;
        if (c < 0) {
            ctext = `- ${cabs}`;
        } else {
            ctext = `+ ${cabs}`;
        }
        
        const qt = `Find the value of the coordinate of the $x$-intercept for the straight-line $$y = ${mtext} ${ctext}$$`;
        
        let at, av, gcd;
        
        gcd = findHCF(c,m);
        
        if (gcd === m) {
            av = `-${c}`;
        } else if (gcd != 1) {
            av = `\\frac{${-c/gcd}}{${m/gcd}}`;
        } else {
            av = `\\frac{${-c}}{${m}}`;
        }
        
        at = `Need the point where $y=0$, so solve: $$0 = ${mtext} ${ctext} $$ <br>`;
        
        if (c > 0) {
            at = at + `Subtract ${cabs} from both sides: $$-${cabs} = ${mtext}$$ <br>`;
            if (m != 1) {
                at = at +`Divide both sides by ${m} <br> $$x = -\\frac{${cabs}}{${m}}`;
                if (gcd !=1) {
                    at = at + `=` + av + `$$`;
                } else {
                    at = at + `$$`;
                }
            }
        } else {
            at = at + `Add ${cabs} to both sides: $$${cabs} = ${mtext}$$ <br>`;
            if (m != 1) {
                at = at +`Divide both sides by ${m} <br> $$x = \\frac{${cabs}}{${m}}`;
                if (gcd !=1) {
                    at = at + `=` + av + `$$`;
                } else {
                    at = at + `$$`;
                }
            }
        }
        
    
        
        
        return {
        id: q_id,
        question: qt,
        answer: `$`+av+`$`,
        check_val: av,
        goal: "solve",
        solution: at
    };
}; 
