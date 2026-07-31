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


window.simGens = window.simGens || {};

window.simGens.linear_type1 = function(q_id) {
    
    const choice = getRandomInt(1,3);
    
    let c = [];
    let ct = [];
    let qt, at, cv1, cv2, ans;
    
    if (choice === 1) {
        while (true) {
            for (let i = 0; i < 4; i++) {
                c[i] = getRandomInt(1,30);
            }
            if (c[0] != c[2] && roundToDecimalPlaces((c[3] - c[1])/(c[0] - c[2]),0) === (c[3] - c[1])/(c[0] - c[2])) break;
        }
        
        for (let i = 0; i < 4; i++) {
            if (c[i] === 1) {
                ct[i] = ``;
            } else {
                ct[i] = `${c[i]}`;
            }
        }
        
        
        qt = `Solve: $$ \\begin{align} y &= ${ct[0]}x + ${c[1]} \\\\ y &= ${ct[2]}x + ${c[3]} \\end{align}$$`;
        cv1 = (c[3] - c[1])/(c[0] - c[2]);
        cv2 = c[0]*cv1 + c[1];
        
        
        if (c[2] > c[0]) {
            if (c[2] - c[0] === 1) {
                ct[4] = ``;
            } else {
                ct[4] = `${c[2]-c[0]}`;
            }
            at = `Substitute the $y$ from the bottom equation into $y$ in the top equation:`+
            `$$ ${ct[2]}x + ${c[3]} = ${ct[0]}x + ${c[1]}$$`+
            `Subtract ${c[0]}x and ${c[3]} from both sides:`+
            `$$ ${ct[4]}x = ${c[1] - c[3]}$$`;
            if (c[2] - c[0] != 1) {
                at = at + `Divide through by ${c[2]-c[0]}: $$ x = ${cv1}$$`;
            }
            
        } else {
            if (c[0] - c[2] === 1) {
                ct[4] = ``;
            } else {
                ct[4] = `${c[0]-c[2]}`;
            }
            at = `Substitute the $y$ from the top equation into $y$ in the bottom equation:`+
            `$$  ${ct[0]}x + ${c[1]} = ${ct[2]}x + ${c[3]} $$`+
            `Subtract ${c[2]}x and ${c[1]} from both sides:`+
            `$$ ${ct[4]}x = ${c[3] - c[1]}$$`;
            if (c[0] - c[2] != 1) {
                at = at + `Divide through by ${c[0]-c[2]}: $$ x = ${cv1}$$`;
            }
        }
        
        at = at + `Substitute $x = ${cv1}$ into one of the $y$ equations: $$y = ${c[0]} \\times ${cv1} + ${c[1]} = ${cv2}$$`;
            
        
    } else if (choice === 2) {
        while (true) {
            for (let i = 0; i < 4; i++) {
                c[i] = getRandomInt(1,30);
            }
            if (c[0] != c[2] && roundToDecimalPlaces((c[3] + c[1])/(c[0] - c[2]),0) === (c[3] + c[1])/(c[0] - c[2])) break;
        }
        
        for (let i = 0; i < 4; i++) {
            if (c[i] === 1) {
                ct[i] = ``;
            } else {
                ct[i] = `${c[i]}`;
            }
        }
        
        qt = `Solve: $$ \\begin{align} y &= ${ct[0]}x - ${c[1]} \\\\ y &= ${ct[2]}x + ${c[3]} \\end{align}$$`;
        cv1 = (c[3] + c[1])/(c[0] - c[2]);
        cv2 = c[0]*cv1 - c[1];
        
        if (c[2] > c[0]) {
            if (c[2] - c[0] === 1) {
                ct[4] = ``;
            } else {
                ct[4] = `${c[2]-c[0]}`;
            }
            at = `Substitute the $y$ from the bottom equation into $y$ in the top equation:`+
            `$$ ${ct[2]}x + ${c[3]} = ${ct[0]}x - ${c[1]}$$`+
            `Subtract ${c[0]}x and ${c[3]} from both sides:`+
            `$$ ${ct[4]}x = ${-c[1] - c[3]}$$`;
            if (c[2] - c[0] != 1) {
                at = at + `Divide through by ${c[2]-c[0]}: $$ x = ${cv1}$$`;
            }
            
        } else {
            if (c[0] - c[2] === 1) {
                ct[4] = ``;
            } else {
                ct[4] = `${c[0]-c[2]}`;
            }
            at = `Substitute the $y$ from the top equation into $y$ in the bottom equation:`+
            `$$  ${ct[0]}x - ${c[1]} = ${ct[2]}x + ${c[3]} $$`+
            `Subtract ${c[2]}x from and add ${c[1]} to both sides:`+
            `$$ ${ct[4]}x = ${c[3] + c[1]}$$`;
            if (c[0] - c[2] != 1) {
                at = at + `Divide through by ${c[0]-c[2]}: $$ x = ${cv1}$$`;
            }
        }
        
        at = at + `Substitute $x = ${cv1}$ into one of the $y$ equations: $$y = ${c[0]} \\times ${cv1} - ${c[1]} = ${cv2}$$`;
        
    } else if (choice === 3) {
        while (true) {
            for (let i = 0; i < 4; i++) {
                c[i] = getRandomInt(1,30);
            }
            if (roundToDecimalPlaces((c[1] - c[3])/(c[0] + c[2]),0) === (c[1] - c[3])/(c[0] + c[2])) break;
        }
        
        for (let i = 0; i < 4; i++) {
            if (c[i] === 1) {
                ct[i] = ``;
            } else {
                ct[i] = `${c[i]}`;
            }
        }
        
        qt = `Solve: $$ \\begin{align} y &= ${c[1]} - ${ct[0]}x \\\\ y &= ${ct[2]}x + ${c[3]} \\end{align}$$`;
        cv1 = (c[1] - c[3])/(c[0] + c[2]);
        cv2 = -c[0]*cv1 + c[1];
        
        at = `Substitute the $y$ from the bottom equation into $y$ in the top equation:`+
            `$$ ${ct[2]}x + ${c[3]} = ${c[1]} - ${ct[0]}x $$`+
            `Add ${c[0]}x to and subtract ${c[3]} from both sides:`+
            `$$ ${c[2]+c[0]}x = ${c[1] - c[3]}$$`+
            `Divide through by ${c[2]+c[0]}: $$ x = ${cv1}$$`+
            `Substitute $x = ${cv1}$ into one of the $y$ equations: $$y = ${c[1]} - ${c[0]} \\times ${cv1} = ${cv2}$$`;
        }
    
    
    return {
        id: q_id,
        question: qt,
        var1_label: "x",
        var2_label: "y",
        check_val1: "" + cv1,
        check_val2: "" + cv2,
        answer: "$x = " +cv1+ ", y = " +cv2 +"$",
        solution: at
    };
};


window.simGens.linear_type2 = function(q_id) {
    
    const choice = getRandomInt(1,1);
    
    let c = [];
    let ct = [];
    let qt, at, cv1n, cv2n, cv1d, cv2d, cv1, cv2, hcf1, hcf2;
    
    if (choice === 1) {
        while (true) {
            for (let i = 0; i < 4; i++) {
                c[i] = getRandomInt(1,30);
            }
            if (c[0] != c[2]) break;
        }
        
        for (let i = 0; i < 4; i++) {
            if (c[i] === 1) {
                ct[i] = ``;
            } else {
                ct[i] = `${c[i]}`;
            }
        }
        
        qt = `Solve: $$ \\begin{align} y &= ${ct[0]}x + ${c[1]} \\\\ y &= ${ct[2]}x + ${c[3]} \\end{align}$$`;
        cv1n = (c[3] - c[1]);
        cv1d = (c[0] - c[2]);
        
        hcf1 = findHCF(cv1n,cv1d);
        
        if (cv1d < 0) {
            cv1n = -cv1n;
            cv1d = -cv1d;
        }
        
        cv1 = `\\frac{${cv1n/hcf1}}{${cv1d/hcf1}}`;
        
        if (cv1d/hcf1 === 1) cv1 = `${cv1n/hcf1}`;
        
        cv2n = (c[0]*cv1n + c[1]*cv1d)
        cv2d = cv1d
        
        hcf2 = findHCF(cv2n, cv2d);
        
        if (cv2d < 0) {
            cv2n = -cv2n;
            cv2d = -cv2d;
        }
        
        cv2 = `\\frac{${cv2n/hcf2}}{${cv2d/hcf2}}`;
        
        if (cv2d/hcf2 === 1) cv2 = `${cv2n/hcf2}`;
        
        at = `Wait`;
    }
        
        return {
        id: q_id,
        question: qt,
        var1_label: "x",
        var2_label: "y",
        check_val1: cv1,
        check_val2: cv2,
        answer: "$x = " +cv1+ ", y = " +cv2 +"$",
        solution: at
    };
};


window.simGens.linear_type3 = function(q_id) {
    
    let c = [];
    let sc = [];
    let ct = [];
    let cval = [];
    
    let x,y;
    while (true) {
        x = getRandomInt(-8,8);
        y = getRandomInt(-8,8);
        if (x != 0 || y != 0) break;
    }
    
    while (true) {
    for (let i = 0; i < 4; i++) {
        c[i] = getRandomInt(1,8);
        sc[i] = getRandomInt(0,1);
        if (i === 1 || i === 3) {
            if (sc[i] === 1) {
                if (c[i] != 1) {
                    ct[i] = `+ ${c[i]}`;
                } else {
                    ct[i] = `+`;
                }
                cval[i] = c[i];
            } else {
                if (c[i] != 1) {
                    ct[i] = `- ${c[i]}`;
                } else {
                    ct[i] = `-`;
                }
                cval[i] = -c[i];
            }
        } else {
            if (c[i] != 1) {
                ct[i] = `${c[i]}`;
            } else {
                ct[i] = ``;
            }
        }
    }
        if(c[0]/c[2] != c[1]/c[3]) break;
    }
    
    c[4] = c[0]*x + cval[1]*y;
    c[5] = c[2]*x + cval[3]*y;
    
    const lcmx = c[0]*c[2]/findHCF(c[0],c[2]);
    const lcmy = c[1]*c[3]/findHCF(c[1],c[3]);
    
    c[10] = c[0]*lcmy/c[1];
    c[11] = c[1]*lcmx/c[0];
    c[12] = c[2]*lcmy/c[3];
    c[13] = c[3]*lcmx/c[2];
    
    c[20] = c[0]*lcmx/c[0];
    c[21] = lcmy
    c[22] = c[2]*lcmx/c[3];
    c[23] = lcmy
    
    
    
    if (sc[1] > 0) {
        ct[11] = `+ ${c[11]}`;
        cval[11] = c[11];
        ct[21] = `+ ${c[21]}`;
        cval[21] = c[21];
    } else {
        ct[11] = `- ${c[11]}`;
        cval[11] = -c[11];
        ct[21] = `- ${c[21]}`;
        cval[21] = -c[21];
    }
    
    if (sc[3] > 0) {
        ct[13] = `+ ${c[13]}`;
        cval[13] = c[13];
        ct[23] = `+ ${c[23]}`;
        cval[23] = c[23];
    } else {
        ct[13] = `- ${c[13]}`;
        cval[13] = -c[13];
        ct[23] = `- ${c[23]}`;
        cval[23] = -c[23];
    }
    
    if (c[10] === 1) {
        ct[10] = ``;
    } else {
        ct[10] = `${c[10]}`;
    }
    
    if (c[12] === 1) {
        ct[12] = ``;
    } else {
        ct[12] = `${c[12]}`;
    }
    
    
    // 1 = x same, 2 = y same, 3 = y diff signs, 4 = choose x, 5 = choose y ss, 6 = choose y ds, 7 = 1x, 8 = 1y ss, 9 = 1y ds
    
    let solvemethod;
    if (c[0] === c[2]) {
        solvemethod = 1;
    } else if (cval[1] === cval[3]) {
        solvemethod = 2;
    } else if (cval[1] === -cval[3]) {
        solvemethod = 3;
    } else if (c[0] === 1 || c[2] === 1) {
        solvemethod = 4;
    } else if ((c[1] === 1 || c[3] === 1) & sc[1] === sc[3]) {
        solvemethod = 5;
    } else if ((c[1] === 1 || c[3] === 1) & sc[1] != sc[3]) {
        solvemethod = 6;
    } else if (lcmx <= lcmy) {
        solvemethod = 4;
    } else if (lcmy < lcmx && sc[1] === sc[3]) {
        solvemethod = 5;
    } else {
        solvemethod = 6;
    }
    
    qt = `Solve for $x$ and $y$: $$ \\begin{align} `+ ct[0] + `x` + ct[1] + `y &= ${c[4]} \\\\ ` + ct[2] + `x` + ct[3] + `y &= ${c[5]} \\end{align}$$`;
    
    if (solvemethod === 1) {
        at = `Both equations contain $${c[0]}x$, so subtract the equations: $$ ${cval[1] - cval[3]}y = ${c[4] - c[5]} $$`+
        `Divide through by $${cval[1] - cval[3]}$: $$ y = ${y} $$` +
        `Substitute into one of the equations: $$ ${ct[0]}x + (${cval[1]}) \\times (${y}) = ${c[4]} $$`;
        if (cval[1]*y < 0) {
            at = at + `$$ ${ct[0]}x - ${-cval[1]*y} = ${c[4]} $$`;
        } else {
            at = at + `$$ ${ct[0]}x + ${cval[1]*y} = ${c[4]} $$`;
        }
        at = at + `Solve the equation: $$ x = ${x}$$`;
    } else if (solvemethod === 2) {
        at = `Both equations contain $${cval[1]}y$, so subtract the equations: $$ ${c[0] - c[2]}x = ${c[4] - c[5]} $$`+
        `Divide through by $${c[0] - c[2]}$: $$ x = ${x} $$` +
        `Substitute into one of the equations: $$ ${c[0]} \\times (${x})` + ct[1] + `y = ${c[4]} $$`+
        `$$ ${c[0]*x}` + ct[1] + `y = ${c[4]} $$`+
        `Solve the equation: $$ y = ${y}$$`;
    } else if (solvemethod === 3) {
        at = `One equation contains $${c[1]}y$ and the other $-${c[1]}y$, so add the equations: $$ ${c[0] + c[2]}x = ${c[4] + c[5]} $$`+
        `Divide through by $${c[0] + c[2]}$: $$ x = ${x} $$` +
        `Substitute into one of the equations: $$ ${c[0]} \\times (${x})` + ct[1] + `y = ${c[4]} $$`+
        `$$ ${c[0]*x}` + ct[1] + `y = ${c[4]} $$`+
        `Solve the equation: $$ y = ${y}$$`;
    } else if (solvemethod === 4) {
        at = `The amount of $x$ in each equation can be made the same by multiplying the top equation by ${lcmx/c[0]} and the bottom equation by ${lcmx/c[2]}, giving $${lcmx}x$ in both:`+
        `$$ \\begin{align} ${lcmx}x` + ct[11] + `y &= ${c[4]*lcmx/c[0]} \\\\ ${lcmx}x` + ct[13] + `y &= ${c[5]*lcmx/c[2]} \\end{align}$$`+
        `Now subtract the equations: $$ ${cval[11]-cval[13]}y = ${lcmx*(c[4]/c[0]-c[5]/c[2])} $$`+
        `Divide through by $${cval[11]-cval[13]}$: $$ y=${y} $$` +
        `Substitute into one of the original equations: $$ ${ct[0]}x + (${cval[1]}) \\times (${y}) = ${c[4]} $$`;
        if (cval[1]*y < 0) {
            at = at + `$$ ${ct[0]}x - ${-cval[1]*y} = ${c[4]} $$`;
        } else {
            at = at + `$$ ${ct[0]}x + ${cval[1]*y} = ${c[4]} $$`;
        }
        at = at + `Solve the equation: $$ x = ${x}$$`;
    } else if (solvemethod === 5) {
        at = `The amount of $y$ in each equation can be made the same by multiplying the top equation by ${lcmy/c[1]} and the bottom equation by ${lcmy/c[3]}, giving $${lcmy*Math.pow(-1,sc[1]+1)}y$ in both:`+
        `$$ \\begin{align} ` + ct[10] + `x` + ct[21] + `y &= ${c[4]*lcmy/c[1]} \\\\ ` + ct[12] + `x` + ct[23] + `y &= ${c[5]*lcmy/c[3]} \\end{align}$$`+
        `Now subtract the equations:`;
        if (c[10] - c[12] === 1) {
            at = at + `$$ x = `;
        } else if (c[10] - c[12] === -1) {
            at = at + `$$ -x = `;
        } else {
            at= at + `$$ ${c[10]-c[12]}x = `;
        }
        at = at + `${c[4]*lcmy/c[1] - c[5]*lcmy/c[3]} $$`;
        if (c[10] - c[12] != 1) {
            at = at + `Divide through by ${c[10]-c[12]}: $$ x = ${x} $$`;
        }
        at = at + `Substitute into one of the original equations: $$ (${c[0]}) \\times (${x}) ` +ct[1]+`y = ${c[4]}$$`+
        `$$ ${c[0]*x} `+ct[1]+`y = ${c[4]}$$` +
        `Solve the equation: $$ y = ${y} $$`;
    } else if (solvemethod === 6) {
        at = `The amount of $y$ in each equation can be either plus or minus $${lcmy}y$ by multiplying the top equation by ${lcmy/c[1]} and the bottom equation by ${lcmy/c[3]}:`+
        `$$ \\begin{align} ` + ct[10] + `x` + ct[21] + `y &= ${c[4]*lcmy/c[1]} \\\\ ` + ct[12] + `x` + ct[23] + `y &= ${c[5]*lcmy/c[3]} \\end{align}$$`+
        `Add the two equations: $$ ${c[10]+c[12]}x = ${c[4]*lcmy/c[1] + c[5]*lcmy/c[3]} $$`+
        `Divide through by ${c[10]+c[12]}: $$ x = ${x}$$`+
        `Substitute into one of the original equations: $$ (${c[0]}) \\times (${x}) ` +ct[1]+`y = ${c[4]}$$`+
        `$$ ${c[0]*x} `+ct[1]+`y = ${c[4]}$$` +
        `Solve the equation: $$ y = ${y} $$`;
    }
    
    cv1 = `${x}`;
    cv2 = `${y}`;
    
    return {
        id: q_id,
        question: qt,
        var1_label: "x",
        var2_label: "y",
        check_val1: cv1,
        check_val2: cv2,
        answer: "$x = " +cv1+ ", y = " +cv2 +"$",
        solution: at
    };
};


window.simGens.linear_type4 = function(q_id) {
    
    let c = [];
    let sc = [];
    let ct = [];
    let cval = [];
    
    let x,y;
    while (true) {
        x = getRandomInt(-8,8);
        y = getRandomInt(-8,8);
        if (x != 0 || y != 0) break;
    }
    
    const choice = getRandomInt(1,1);
    
    while (true) {
        c[0] = getRandomInt(1,8);
        c[1] = getRandomInt(1,8);
        sc[1] = getRandomInt(0,1);
        c[2] = getRandomInt(1,8);
        sc[2] = getRandomInt(0,1);
        
        if (c[0] + c[1]*Math.pow(-1,sc[1]+1)*c[2]*Math.pow(-1, sc[2]+1) != 0 && y - c[2]*Math.pow(-1,sc[2]+1)*x != 0) break;
    }
    
    cval[0] = c[0];
    if (c[0] === 1) {
        ct[0] = `x`;
        ct[10] = `-x`;
    } else {
        ct[0] = `${c[0]}x`;
        ct[10] = `- ${c[0]}x`;
    }
    cval[1] = c[1]*Math.pow(-1,sc[1]+1);
    if (c[1] === 1) {
        if (cval[1] < 0) {
            ct[1] = `- y`;
            ct[11] = `y`;
            ct[21] = `-`;
        } else {
            ct[1] = `+ y`;
            ct[11] = `- y`;
            ct[21] = `+`;
        }
    } else {
        if (cval[1] < 0) {
            ct[1] = `- ${c[1]}y`;
            ct[11] = `+ ${c[1]}y`
            ct[21] = `- ${c[1]}`;
        } else {
            ct[1] = `+ ${c[1]}y`;
            ct[11] = `- ${c[1]}y`;
            ct[21] = `+ ${c[1]}`;
        }
    }
    c[3] = cval[0]*x + cval[1]*y;
    
    cval[2] = c[2]*Math.pow(-1,sc[2]+1);
    if (c[2] === 1) {
        if (cval[2] < 0) {
            ct[2] = `- x`;
            ct[12] = `x`;
        } else {
            ct[2] = `+ x`;
            ct[12] = `- x`;
        }
    } else {
        if (cval[2] < 0) {
            ct[2] = `- ${c[2]}x`;
            ct[12] = `+ ${c[2]}x`;
        } else {
            ct[2] = `+ ${c[2]}x`;
            ct[12] = `- ${c[2]}x`;
        }
    }
    c[4] = y - cval[2]*x;
    if (c[4] < 0) {
        ct[4] = `${c[4]}`;
    } else {
        ct[4] = `+ ${c[4]}`;
    }
    
    c[6] = cval[1]*cval[2];
    if (c[6] > 0) {
        ct[6] = `+ ${c[6]}x`;
    } else {
        ct[6] = `- ${-c[6]}x`;
    }
    
    c[7] = cval[1]*c[4];
    if (c[7] > 0) {
        ct[7] = `+ ${c[7]}`;
    } else {
        ct[7] = `- ${-c[7]}`;
    }
    
    ct[16] = ct[6];
    ct[17] = ct[7];
    
    if (cval[2] > 0 || c[4] < 0) {
        ct[5] = `${c[2]}x` + ct[4] ;
    } else {
        ct[5] = `${c[4]}` + ct[2];
        ct[16] = ct[7];
        ct[17] = ct[6];
    }
    
    c[8] = cval[0] + cval[1]*cval[2];
    c[9] = cval[1]*c[4];
    if (c[8] === 1) {
        ct[8] = `x`;
    } else if (c[8] === -1) {
        ct[8] = `-x`;
    } else if (c[8] > 1) {
        ct[8] = `${c[8]}x`;
    } else {
        ct[8] = `-${-c[8]}x`;
    }
        
    
    qt = `Solve for $x$ and $y$: $$ \\begin{align} ` + ct[0] + ct[1] + `&= ${c[3]} \\\\ y &= `+ct[5]+` \\end{align} $$`;
    
    at = `Substitute $y$ from the bottom equation into the top equation: $$`+
    ct[0] + ct[21] + `(` + ct[5] + `) = ${c[3]} $$`;
    if (c[1] != 1) {
        at = at +`Expand the brackets: $$ ` + ct[0] + ct[16] + ct[17] + `= ${c[3]} $$`;
    }
    at = at + `Simplify, rearrange, and solve: $$ ` + ct[8] + `= ${c[3] - c[9]} $$`;
    if (c[8] !=1) {
        at = at + `$$x = ${x}$$`;
    }
    at = at + `Substitute back into $y = ` + ct[5] +`$`;
    if (cval[2] > 0 || c[4] < 0) {
        at = at + `$$ y = (${c[2]})(${x}) `+ct[4] + `$$`;
    } else {
        at = at + `$$ y = ${c[4]} - (${c[2]})(${x}) $$`;
    }
    at = at + `$$ y = ${y} $$`;
    
    cv1 = `${x}`;
    cv2 = `${y}`;
    
    return {
        id: q_id,
        question: qt,
        var1_label: "x",
        var2_label: "y",
        check_val1: cv1,
        check_val2: cv2,
        answer: "$x = " +cv1+ ", y = " +cv2 +"$",
        solution: at
    };
};
    

    
