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

window.rearrangingGenerators = window.rearrangingGenerators || {};

window.rearrangingGenerators.type1 = function(q_id) {
    
    // ax + by = cz
    
    const choice = getRandomInt(1,2);
    
    let v = [];
    let vt = [];
    let c = [];
    let sub, check, qt, at, av, ans;
    
    if (choice === 1) {
        while (true) {
            for (let i = 0; i < 3; i++) {
                v[i] = ["p", "q", "r", "s", "t", "v", "w", "x", "y", "z"][getRandomInt(0,9)];
            }
            if (v[0] != v[1] && v[0] != v[2] && v[1] != v[2]) break;
        }
        
        while (true) {
        
            c[0] = getRandomInt(1,9);
            c[1] = getRandomInt(1,9);
            c[2] = getRandomInt(2,9);
            if (findHCF(c[1],c[2]) === 1) {
                sub = 0;
                break;
            } else if (findHCF(c[0],c[2]) === 1) {
                sub = 1;
                break;
            } else if (findHCF(c[0],c[1]) === 1) {
                sub = 2;
                break;
            } else {
                sub = 3;
            }
           
        }
        
        for (let i = 0; i < 3; i++) {
            if (c[i] === 1) {
                vt[i] = `${v[i]}`;
            } else {
                vt[i] = `${c[i]}${v[i]}`;
            }
        }
        
        let rvp;
        let rv = getRandomInt(1,3);
        if (rv === 1) {
            while (true) {
                rvp = getRandomInt(0,2);
                if (rvp != sub) break;
            }
            vt[rvp] = `${c[rvp]}`;
        }
        
        qt = `Make $${v[sub]}$ the subject of: $$` + vt[0] + `+` + vt[1] + ` = ` + vt[2] +`$$`;
        
        if (sub === 0 && c[0] === 1) {
            at = `Subtract $${vt[1]}$ from both sides of the equation:  $$${vt[0]} = ${vt[2]} - ${vt[1]}$$`;
            av = `${vt[0]} = ${vt[2]} - ${vt[1]}`;
            ans = `$${vt[0]} = ${vt[2]} - ${vt[1]}$`;
        } else if (sub === 0 && c[0] != 1) {
            at = `Subtract $${vt[1]}$ from both sides of the equation:  $$${vt[0]} = ${vt[2]} - ${vt[1]}$$  Divide both sides by $${c[0]}$: $$${v[0]} = \\frac{${vt[2]} - ${vt[1]}}{${c[0]}}$$`;
            av = `${v[0]} = \\frac{(${vt[2]} - ${vt[1]})}{${c[0]}}`;
            ans = `$${v[0]} = \\frac{${vt[2]} - ${vt[1]}}{${c[0]}}$`;
        } else if (sub === 1 && c[1] === 1) {
            at = `Subtract $${vt[0]}$ from both sides of the equation:  $$${vt[1]} = ${vt[2]} - ${vt[0]}$$`;
            av = `${vt[1]} = ${vt[2]} - ${vt[0]}`;
            ans = `$`+av+`$`;
        } else if (sub === 1 && c[1] != 1) {
            at = `Subtract $${vt[0]}$ from both sides of the equation:  $$${vt[1]} = ${vt[2]} - ${vt[0]}$$ Divide both sides by $${c[1]}$:  $$${v[0]} = \\frac{${vt[2]} - ${vt[0]}}{${c[1]}}$$`;
            av = `${v[0]} = \\frac{(${vt[2]} - ${vt[0]})}{${c[1]}}`;
            ans = `$${v[0]} = \\frac{${vt[2]} - ${vt[0]}}{${c[1]}}$`;
        } else {
            at = `Divide both sides of the equation by $${c[2]}$:  $$${v[2]} = \\frac{${vt[0]} + ${vt[1]}}{${c[2]}}$$`;
            av = `${v[2]} = \\frac{(${vt[0]} + ${vt[1]})}{${c[2]}}`;
            ans = `$${v[2]} = \\frac{${vt[0]} + ${vt[1]}}{${c[2]}}$`;
        }
        
    } else if (choice === 2) {
        
        while (true) {
            for (let i = 0; i < 3; i++) {
                v[i] = ["p", "q", "r", "s", "t", "v", "w", "x", "y", "z"][getRandomInt(0,9)];
            }
            if (v[0] != v[1] && v[0] != v[2] && v[1] != v[2]) break;
        }
        
        while (true) {
        
            c[0] = getRandomInt(1,9);
            c[1] = getRandomInt(1,9);
            c[2] = getRandomInt(2,9);
            if (findHCF(c[1],c[2]) === 1) {
                sub = 0;
                break;
            } else if (findHCF(c[0],c[2]) === 1) {
                sub = 1;
                break;
            } else if (findHCF(c[0],c[1]) === 1) {
                sub = 2;
                break;
            } else {
                sub = 3;
            }
           
        }
        
        for (let i = 0; i < 3; i++) {
            if (c[i] === 1) {
                vt[i] = `${v[i]}`;
            } else {
                vt[i] = `${c[i]}${v[i]}`;
            }
        }
        
        let rvp;
        let rv = getRandomInt(1,3);
        if (rv === 1) {
            while (true) {
                rvp = getRandomInt(0,2);
                if (rvp != sub) break;
            }
            vt[rvp] = `${c[rvp]}`;
        }
        
        qt = `Make $${v[sub]}$ the subject of: $$` + vt[0] + `-` + vt[1] + ` = ` + vt[2] +`$$`;
        
        if (sub === 0 && c[0] === 1) {
            at = `Add $${vt[1]}$ to both sides of the equation: $$${vt[0]} = ${vt[2]} + ${vt[1]}$$`;
            av = `${vt[0]} = ${vt[2]} + ${vt[1]}`;
            ans = `$${vt[0]} = ${vt[2]} + ${vt[1]}$`;
        } else if (sub === 0 && c[0] != 1) {
            at = `Add $${vt[1]}$ to both sides of the equation:  $$${vt[0]} = ${vt[2]} + ${vt[1]}$$ Divide both sides by $${c[0]}$: $$${v[0]} = \\frac{${vt[2]} + ${vt[1]}}{${c[0]}}$$`;
            av = `${v[0]} = \\frac{(${vt[2]} + ${vt[1]})}{${c[0]}}`;
            ans = `$${v[0]} = \\frac{${vt[2]} + ${vt[1]}}{${c[0]}}$`;
        } else if (sub === 1 && c[1] === 1) {
            at = `Subtract $${vt[0]}$ from both sides of the equation: $$-${vt[1]} = ${vt[2]} - ${vt[0]}$$ Multiply/Divide through by $-1$ to reverse signs: $$${vt[1]} = ${vt[0]} - ${vt[2]}$$`;
            av = `${vt[1]} = ${vt[0]} - ${vt[2]}`;
            ans = `$`+av+`$`;
        } else if (sub === 1 && c[1] != 1) {
            at = `Subtract $${vt[0]}$ from both sides of the equation:  $$-${vt[1]} = ${vt[2]} - ${vt[0]}$$ Divide both sides by $-${c[1]}$: $$${v[0]} = \\frac{${vt[0]} - ${vt[2]}}{${c[1]}}$$`;
            av = `${v[0]} = \\frac{(${vt[0]} - ${vt[2]})}{${c[1]}}`;
            ans = `$${v[0]} = \\frac{${vt[0]} - ${vt[2]}}{${c[1]}}$`;
        } else {
            at = `Divide both sides of the equation by $${c[2]}$:  $$${v[2]} = \\frac{${vt[0]} - ${vt[1]}}{${c[2]}}$$`;
            av = `${v[2]} = \\frac{(${vt[0]} - ${vt[1]})}{${c[2]}}`;
            ans = `$${v[2]} = \\frac{${vt[0]} - ${vt[1]}}{${c[2]}}$`;
        }
        
    }
        
        
        
        return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "rearrange",
        solution: at
    };
};    
            

window.rearrangingGenerators.type2 = function(q_id) {
    
    // ap(bq+cr)=d
    
    const choice = getRandomInt(1,1);
    
    let v = [];
    let vt = [];
    let c = [];
    let sub, check, qt, at, av, ans;
    
    while (true) {
        for (let i = 0; i < 3; i++) {
            v[i] = ["p", "q", "r", "s", "t", "v", "w", "x", "y", "z"][getRandomInt(0,9)];
        }
        if (v[0] != v[1] && v[0] != v[2] && v[1] != v[2]) break;
    }
    
    while (true) {
        for (let i = 0; i < 4; i++) {
            c[i] = getRandomInt(2,9);
        }
        if (findHCF(c[1],c[2]) === 1 && findHCF(c[3], c[0]*c[2]) === 1) {
            sub = 1;
            break;
        } else if (findHCF(c[1],c[2]) === 1 && findHCF(c[3], c[0]*c[1]) === 1) {
            sub = 2;
            break;
        } else if (findHCF(c[1],c[2]) === 1 && findHCF(c[0],c[3]) === 1) {
            sub = 0;
            break;
        }
                   
    }
        
    for (let i = 0; i < 3; i++) {
        if (c[i] === 1) {
            vt[i] = `${v[i]}`;
        } else {
            vt[i] = `${c[i]}${v[i]}`;
        }
    }
        
    let rvp;
    let rv = getRandomInt(1,3);
    if (rv === 1) {
        while (true) {
            rvp = getRandomInt(0,2);
            if (rvp != sub) break;
        }
        v[rvp] = ``;
    }
    
    if (choice === 1) {
        qt = `Make $${v[sub]}$ the subject of:  $$${c[0]}${v[0]}(${c[1]}${v[1]} + ${c[2]}${v[2]}) = ${c[3]}$$`;
        
        if (sub === 0) {
            at = `Divide both sides by $${c[0]}(${vt[1]} + ${vt[2]})$: $$${v[0]} = \\frac{${c[3]}}{${c[0]}(${vt[1]} + ${vt[2]})}$$`;
            av = `${v[0]} = \\frac{${c[3]}}{${c[0]}(${vt[1]} + ${vt[2]})}`;
        } else if (sub === 1) {
            at = `Expand the brackets:  $$${c[0]*c[1]}${v[0]}${v[1]} + ${c[0]*c[2]}${v[0]}${v[2]} = ${c[3]}$$ `+
                `Subtract $${c[0]*c[2]}${v[0]}${v[2]}$ from both sides: $$${c[0]*c[1]}${v[0]}${v[1]} = ${c[3]} - ${c[0]*c[2]}${v[0]}${v[2]}$$ `+
                `Divide through by $${c[0]*c[1]}${v[0]}$: $$${v[1]} = \\frac{${c[3]} - ${c[0]*c[2]}${v[0]}${v[2]}}{${c[0]*c[1]}${v[0]}}$$`;
            av = `${v[1]} = \\frac{${c[3]} - ${c[0]*c[2]}${v[0]}${v[2]}}{${c[0]*c[1]}${v[0]}}`;
        } else if (sub === 2) {
            at = `Expand the brackets: $$${c[0]*c[1]}${v[0]}${v[1]} + ${c[0]*c[2]}${v[0]}${v[2]} = ${c[3]}$$ `+
                `Subtract $${c[0]*c[1]}${v[0]}${v[1]}$ from both sides: $$${c[0]*c[2]}${v[0]}${v[2]} = ${c[3]} - ${c[0]*c[1]}${v[0]}${v[1]}$$`+
                `Divide through by $${c[0]*c[2]}${v[0]}$: $$${v[2]} = \\frac{${c[3]} - ${c[0]*c[1]}${v[0]}${v[1]}}{${c[0]*c[2]}${v[0]}}$$`;
            av = `${v[2]} = \\frac{${c[3]} - ${c[0]*c[1]}${v[0]}${v[1]}}{${c[0]*c[2]}${v[0]}}`;
        }
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
        

window.rearrangingGenerators.type3 = function(q_id) {
    
    // ax + by = cx + dz
    
    const choice = getRandomInt(1,1);
    
    let v = [];
    let ct = [];
    let c = [];
    let sub, check, qt, at, av, ans;
    
    while (true) {
        for (let i = 0; i < 3; i++) {
            v[i] = ["p", "q", "r", "s", "t", "v", "w", "x", "y", "z"][getRandomInt(0,9)];
        }
        if (v[0] != v[1] && v[0] != v[2] && v[1] != v[2]) break;
    }
    
    while (true) {
        for (let i = 0; i < 4; i++) {
            c[i] = getRandomInt(1,9);
            if (c[i] === 1) {
                ct[i] = ``;
            } else {
                ct[i] = `${c[i]}`;
            }
        }
        if (c[0] != c[2] && findHCF(c[3] - c[1], c[0] - c[2]) === 1) break;
    }
    
    let rvp;
    let rv = getRandomInt(1,3);
    if (rv === 1) {
       rvp = getRandomInt(1,2);
       v[rvp] = ``;
       if (rvp === 1) {
           ct[1] = `${c[1]}`;
       } else {
           ct[3] = `${c[3]}`;
       }
    }
    
    if (choice === 1) {
        qt = `Make $${v[0]}$ the subject of: $$${ct[0]}${v[0]} + ${ct[1]}${v[1]} = ${ct[2]}${v[0]} + ${ct[3]}${v[2]}$$`;
        at = `Collect the terms in $${v[0]}$ together on one side and the other terms on the other side of the equation <br>`;
        if (c[0] > c[2]) {
            at = at + `Subtract $${ct[2]}${v[0]}$ from both sides and subtract $${ct[1]}${v[1]}$ from both sides:` +
            `$$${ct[0]}${v[0]} - ${ct[2]}${v[0]} = ${ct[3]}${v[2]} - ${ct[1]}${v[1]}$$`;
            if (c[0] - c[2] === 1) {
                at = at + `$$${v[0]} = ${ct[3]}${v[2]} - ${ct[1]}${v[1]}$$`;
                av = `${v[0]} = ${ct[3]}${v[2]} - ${ct[1]}${v[1]}`;
            } else {
                at = at + `$$${c[0] - c[2]}${v[0]} = ${ct[3]}${v[2]} - ${ct[1]}${v[1]}$$ Divide both sides by $${c[0] - c[2]}$:`+
                    `$$${v[0]} = \\frac{${ct[3]}${v[2]} - ${ct[1]}${v[1]}}{${c[0] - c[2]}}$$`;
                av = `${v[0]} = \\frac{${ct[3]}${v[2]} - ${ct[1]}${v[1]}}{${c[0] - c[2]}}`;
            }
        } else {
            at = at + `Subtract $${ct[0]}${v[0]}$ from both sides and subtract $${ct[3]}${v[2]}$ from both sides:` +
            `$$${ct[1]}${v[1]} - ${ct[3]}${v[2]} = ${ct[2]}${v[0]} - ${ct[0]}${v[0]}$$`;
            if (c[2] - c[0] === 1) {
                at = at + `$$${ct[1]}${v[1]} - ${ct[3]}${v[2]} = ${v[0]}$$`;
                av = `${v[0]} = ${ct[1]}${v[1]} - ${ct[3]}${v[2]}`;
            } else {
                at = at + `$$${ct[1]}${v[1]} - ${ct[3]}${v[2]} = ${c[2] - c[0]}${v[0]}$$ Divide both sides by $${c[2] - c[0]}$:`+
                `$$\\frac{${ct[1]}${v[1]} - ${ct[3]}${v[2]}}{${c[2]-c[0]}} = ${v[0]}$$`;
                av = `${v[0]} = \\frac{${ct[1]}${v[1]} - ${ct[3]}${v[2]}}{${c[2]-c[0]}}`;
            }
        }

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


window.rearrangingGenerators.type4 = function(q_id) {
    
    // ax + by = cx + dz with vars
    
    const choice = getRandomInt(1,1);
    
    let v = [];
    let vo = [];
    let pl = [];
    let pr = [];
    let ct = [];
    let c = [];
    let sub, check, qt, at, av, ans;
    
    const lvn = getRandomInt(2,3);
    const rvn = getRandomInt(2,3);
    
    const lvs = getRandomInt(0,lvn-1);
    const rvs = getRandomInt(0,rvn-1);
    
    v[0] = ["x","y","t"][getRandomInt(0,2)];
    v[3] = v[0];
    c[0] = ["a", "b", "c", "d", "f", "k", "m", "n"][getRandomInt(0,3)];
    c[3] = ["a", "b", "c", "d", "f", "k", "m", "n"][getRandomInt(4,7)];
    
    while (true) {
        for (let i = 0; i < lvn; i++) {
            pl[i] = getRandomInt(1, lvn);
        }
        if (lvn === 2 && pl[1] + pl[0] === 3) break;
        if (lvn === 3 && pl[1]*pl[2]*pl[0] === 6) break;
    }
    
    while (true) {
        for (let i = 0; i < rvn; i++) {
            pr[i] = getRandomInt(1, rvn);
        }
        if (rvn === 2 && pr[0] + pr[1] === 3) break;
        if (rvn === 3 && pr[1]*pr[2]*pr[0] === 6) break;
    }
    
    while (true) {
        for (let i = 1; i < 3; i++) {
            v[i] = ["p", "q", "r", "s", "g", "v", "w"][getRandomInt(0,3)];
            c[i] = ["a", "b", "c", "d", "f", "k", "m", "n"][getRandomInt(0,7)];
        }
        if (v[1] != v[2]) break;
    }
    
    while (true) {
        for (let i = 4; i < 6; i++) {
            v[i] = ["p", "q", "r", "s", "g", "v", "w"][getRandomInt(4,6)];
            c[i] = ["a", "b", "c", "d", "f", "k", "m", "n"][getRandomInt(0,7)];
        }
        if (v[4] != v[5]) break;
    }
    
    if (choice === 1) {
        qt = `Rearrange to make $${v[0]}$ the subject:`;
        if (lvn === 2) {
            qt = qt + `$$${c[pl[0]-1]}${v[pl[0]-1]} + ${c[pl[1]-1]}${v[pl[1]-1]}`;
            if (rvn === 2) {
                qt = qt + `= ${c[pr[0]+2]}${v[pr[0]+2]} + ${c[pr[1]+2]}${v[pr[1]+2]}$$`;
                at = `Collect all $${v[0]}$ together and move other stuff to the other side by adding/subtracting:`+
                `$$${c[0]}${v[0]} - ${c[3]}${v[0]} = ${c[4]}${v[4]} - ${c[1]}${v[1]}$$`+
                `Factorise out the $${v[0]}$:` +
                `$$(${c[0]} - ${c[3]})${v[0]} = ${c[4]}${v[4]} - ${c[1]}${v[1]}$$` +
                `Divide both sides by $${c[0]} - ${c[3]}$: ` +
                `$$${v[0]} = \\frac{${c[4]}${v[4]} - ${c[1]}${v[1]}}{${c[0]} - ${c[3]}}$$`;
                av = `${v[0]} = \\frac{${c[4]}${v[4]} - ${c[1]}${v[1]}}{${c[0]} - ${c[3]}}`;
            } else {
                qt = qt + `= ${c[pr[0]+2]}${v[pr[0]+2]} + ${c[pr[1]+2]}${v[pr[1]+2]} + ${c[pr[2]+2]}${v[pr[2]+2]}$$`;
                at = `Collect all $${v[0]}$ together and move other stuff to the other side by adding/subtracting:`+
                `$$${c[0]}${v[0]} - ${c[3]}${v[0]} = ${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]}$$`+
                `Factorise out the $${v[0]}$: ` +
                `$$(${c[0]} - ${c[3]})${v[0]} = ${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]}$$` +
                `Divide both sides by $${c[0]} - ${c[3]}$: ` +
                `$$${v[0]} = \\frac{${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]}}{${c[0]} - ${c[3]}}$$`;
                av = `${v[0]} = \\frac{${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]}}{${c[0]} - ${c[3]}}`;
            }
        } else if (lvn === 3) {
            qt = qt + `$$${c[pl[0]-1]}${v[pl[0]-1]} + ${c[pl[1]-1]}${v[pl[1]-1]} + ${c[pl[2]-1]}${v[pl[2]-1]}`;
            if (rvn === 2) {
                qt = qt + `= ${c[pr[0]+2]}${v[pr[0]+2]} + ${c[pr[1]+2]}${v[pr[1]+2]}$$`;
                at = `Collect all $${v[0]}$ together and move other stuff to the other side by adding/subtracting:`+
                `$$${c[0]}${v[0]} - ${c[3]}${v[0]} = ${c[4]}${v[4]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}$$`+
                `Factorise out the $${v[0]}$:` +
                `$$(${c[0]} - ${c[3]})${v[0]} = ${c[4]}${v[4]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}$$` +
                `Divide both sides by $${c[0]} - ${c[3]}$: ` +
                `$$${v[0]} = \\frac{${c[4]}${v[4]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}}{${c[0]} - ${c[3]}}$$`;
                av = `${v[0]} = \\frac{${c[4]}${v[4]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}}{${c[0]} - ${c[3]}}`;
            } else {
                qt = qt + `= ${c[pr[0]+2]}${v[pr[0]+2]} + ${c[pr[1]+2]}${v[pr[1]+2]} + ${c[pr[2]+2]}${v[pr[2]+2]}$$`;
                at = `Collect all $${v[0]}$ together and move other stuff to the other side by adding/subtracting:`+
                `$$${c[0]}${v[0]} - ${c[3]}${v[0]} = ${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}$$`+
                `Factorise out the $${v[0]}$: ` +
                `$$(${c[0]} - ${c[3]})${v[0]} = ${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}$$` +
                `Divide both sides by $${c[0]} - ${c[3]}$: ` +
                `$$${v[0]} = \\frac{${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}}{${c[0]} - ${c[3]}}$$`;
                av = `${v[0]} = \\frac{${c[4]}${v[4]} + ${c[5]}${v[5]} - ${c[1]}${v[1]} - ${c[2]}${v[2]}}{${c[0]} - ${c[3]}}`;
            }
        }
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


window.rearrangingGenerators.type5 = function(q_id) {
    
    // (ax+b)/(cx+d) = e
    
   
    let choice;
    let v = [];
    let c = [];
    let ctype = [];
    let stype = [];
    let stypet = [];
    let qtb = [];
    let atb = [];
    let ncheck = [];
    let sub, check, qt, at, av, ans, zcheck;
    
    v[0] = ["p", "q", "r", "s", "t", "v", "w", "x", "y", "z"][getRandomInt(0,9)];
    
    while (true) {
        for (let i = 0; i < 5; i++) {
            sub = getRandomInt(0,15);
            c[i] = c[i] = ["a", "b", "c", "d", "f", "k", "m", "n","2","3","4","5","6","7","8","9"][sub];
            if (sub < 8) {
                ctype[i] = 0;
            } else {
                ctype[i] = 1;
            }
        }
        if (ctype[0] + ctype[2] != 2 && c[0] != c[2]) break;
    }
    
    for (let i=0; i < 3; i++) {
        stype[i] = getRandomInt(0,1);
        if (stype[i] === 0) {
            stypet[i] = `+`;
            stypet[i+10] = `-`;
            stypet[i+20] = ``;
            stypet[i+30] = `-`;
        } else {
            stypet[i] = `-`;
            stypet[i+10] = `+`;
            stypet[i+20] = `-`;
            stypet[i+30] = ``;
        }
    }
    
    if (stype[2] === 0) {
        if (stype[0] === 0 && stype[1] === 0) choice = 1;
        if (stype[0] === 1 && stype[1] === 0) choice = 2;
        if (stype[0] === 0 && stype[1] === 1) choice = 3;
        if (stype[0] === 1 && stype[1] === 1) choice = 4;
    } else {
        if (stype[1] === 0) choice = 5;
        if (stype[1] === 1) choice = 6;
    }
    
    // Check number
    // ec
    if (ctype[4] === 1 && ctype[2] === 0) {
        ncheck[0] = `${c[4]}${c[2]}`;
    } else if (ctype[4] === 0 && ctype[2] === 1) {
        ncheck[0] = `${c[2]}${c[4]}`;
    } else if (ctype[4] === 1 && ctype[2] === 1) {
        check = Number(c[2])*Number(c[4]);
        ncheck[0] = `${check}`;
    } else {
        if (c[2] != c[4]) {
            ncheck[0] = `${c[4]}${c[2]}`;
        } else {
            ncheck[0] = `${c[4]}^2`;
        }
    }
    
    //ed
    if (ctype[4] === 1 && ctype[3] === 0) {
        ncheck[1] = `${c[4]}${c[3]}`;
    } else if (ctype[4] === 0 && ctype[3] === 1) {
        ncheck[1] = `${c[3]}${c[4]}`;
    } else if (ctype[4] === 1 && ctype[3] === 1) {
        check = Number(c[3])*Number(c[4]);
        ncheck[1] = `${check}`;
    } else {
        if (c[3] != c[4]) {
            ncheck[1] = `${c[4]}${c[3]}`;
        } else {
            ncheck[1] = `${c[3]}^2`;
        }
    }
    
    //ed and b
    stypet[40] = ``;
    zcheck = 0;
    
    if (choice === 1 || choice === 4 || choice === 5) {
    
        if (ctype[4] === 1 && ctype[3] === 1 && ctype[1] === 1) {
            check = Number(c[3])*Number(c[4]) - Number(c[1]);
            if (check === 0) {
                zcheck = 1;
            } 
            ncheck[2] = `${check}`;
            if (choice != 1) ncheck[2] = `${-check}`;
        } else if (ncheck[1] === `${c[4]}${c[3]}` && c[1] === c[3]) {
            if (choice === 1) {
                check = Number(c[4]) - 1;
                ncheck[2] = `${check}${c[3]}`;
            } else {
                check = 1- Number(c[4]);
                ncheck[2] = `${check}${c[3]}`;
            }
            if (check < 0) {
                stypet[40] = `-`;
            } else {
                stypet[40] = ``;
            }
            
        } else if (ncheck[1] === `${c[3]}${c[4]}` && c[1] === c[4]) {
            if (choice === 1) {
                check = Number(c[3]) - 1;
                ncheck[2] = `${check}${c[4]}`;
            } else {
                check = 1- Number(c[3]);
                ncheck[2] = `${check}${c[4]}`;
            }
            if (check < 0) {
                stypet[40] = `-`;
            } else {
                stypet[40] = ``;
            }
        } else if (ncheck[1] === `${c[3]}${c[4]}`){
                if (choice === 1) {
                    ncheck[2] = ncheck[1] +` - ${c[1]}`;
                } else {
                    ncheck[2] = `${c[1]} - `+ ncheck[1];
                }
            } else {
                if (choice === 1) {
                    ncheck[2] = ncheck[1]+ ` - ${c[1]}`;
                } else {
                    ncheck[2] = `${c[1]} - ` + ncheck[1];
                }
            }
        
        
    } else {
        if (ctype[4] === 1 && ctype[3] === 1 && ctype[1] === 1) {
            check = Number(c[3])*Number(c[4]) + Number(c[1]);
            ncheck[2] = `${check}`;
        } else if (ncheck[1] === `${c[4]}${c[3]}` && c[1] === c[3]) {
            check = Number(c[4]) + 1;
            ncheck[2] = `${check}${c[3]}`;
        } else if (ncheck[1] === `${c[3]}${c[4]}` && c[1] === c[4]) {
            check = Number(c[3]) + 1;
            ncheck[2] = `${check}${c[4]}`;
        } else {
            ncheck[2] = ncheck[1] + `+ ${c[1]}`;
        }
    }
        
    
    qtb[0] = `Make $${v[0]}$ the subject of <br>`;
    atb[6] = ``;
    
    if (stype[2] === 0) {
        qtb[1] = `$$ \\frac{${c[0]}${v[0]}` + stypet[0] + `${c[1]}}{${c[2]}${v[0]}` + stypet[1] + `${c[3]}} = ${c[4]}$$`;
        atb[1] = `$$${c[0]}${v[0]}` + stypet[0] + `${c[1]} = ${c[4]}(${c[2]}${v[0]}` + stypet[1] + `${c[3]})$$`;
        atb[3] = `$$${c[0]}${v[0]}` + stypet[0] + `${c[1]} = ` + ncheck[0] + `${v[0]}` + stypet[1] + ncheck[1] +`$$`;
        atb[5] = `$$${c[0]}${v[0]} - ` + ncheck[0] + `${v[0]} = ` + stypet[21] + ncheck[1] + stypet[10] + `${c[1]}$$`;
        atb[8] = `$$(${c[0]} - ` +ncheck[0] + `)${v[0]} = `+ stypet[40] + ncheck[2]+`$$`;
        atb[10] = `$(${c[0]} - ` +ncheck[0] + `)$`;
        atb[11] = `$$${v[0]} = \\frac{` + stypet[40] + ncheck[2]+ `}{${c[0]} - ` +ncheck[0]+`}$$`;
        av = `${v[0]} = \\frac{` + stypet[40] + ncheck[2]+ `}{${c[0]} - ` +ncheck[0]+`}`;
        if (choice === 3) {
            atb[6] = `$$` + ncheck[0] + `${v[0]} - ${c[0]}${v[0]} = ` + ncheck[1] + `+ ${c[1]}$$` ;
            atb[8] = `$$(`+ ncheck[0] +  `-${c[0]})${v[0]} = ` + stypet[40] + ncheck[2]+`$$`;
            atb[10] = `$(`+ ncheck[0] +  `-${c[0]})$`;
            atb[11] = `$$${v[0]} = \\frac{` + stypet[40] + ncheck[2]+`}{`+ ncheck[0] +  `-${c[0]}}$$`
            av = `${v[0]} = \\frac{` + stypet[40] + ncheck[2]+`}{`+ ncheck[0] +  `-${c[0]}}`;
        }
        
    } else {
        stypet[0] = `-`;
        stype[0] = 1;
        qtb[1] = `$$ \\frac{${c[1]}` + stypet[0] + `${c[0]}${v[0]}}{${c[2]}${v[0]}` + stypet[1] + `${c[3]}} = ${c[4]}$$`;
        atb[1] = `$$${c[1]}` + stypet[0] + `${c[0]}${v[0]} = ${c[4]}(${c[2]}${v[0]}` + stypet[1] + `${c[3]})$$`;
        atb[3] = `$$${c[1]}` + stypet[0] + `${c[0]}${v[0]} = ` + ncheck[0] + `${v[0]}` + stypet[1] + ncheck[1] +`$$`;
        atb[5] = `$$${c[1]}` + stypet[11] + ncheck[1] + ` = ` + ncheck[0] + `${v[0]} + ${c[0]}${v[0]}$$`;
        atb[8] = `$$` + ncheck[2] + `= (` +ncheck[0] + `+${c[0]})${v[0]}$$`;
        atb[10] = `$(` +ncheck[0] + `+${c[0]})$`;
        atb[11] = `$$${v[0]} = \\frac{` + ncheck[2] + `}{` +ncheck[0] + `+${c[0]}}$$`;
        av = `${v[0]} = \\frac{` + ncheck[2] + `}{` +ncheck[0] + `+${c[0]}}`;
    }
    
    qt = qtb[0] + qtb[1];
    
    atb[0] = `Multiply both sides by $${c[2]}${v[0]}` + stypet[1] + `${c[3]}$:`;
    atb[2] = `Expand the brackets:`;
    atb[4] = `Collect all terms in $${v[0]}$ and move all other terms to the other side of the equation:`;
    atb[7] = `Factor the $${v[0]}$:`;
    atb[9] = `Divide both sides by `;
    
    if (zcheck === 1) {
        atb[11] = `$$${v[0]} = 0$$`;
        av = `${v[0]} = 0`;
    }
    
    at = atb[0];
    for (let i = 1; i < 12; i++) {
        at += atb[i];
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
    
    
            
window.rearrangingGenerators.type6 = function(q_id) {
    
    // ay+bx(x+t)=d
    // sqrt(ax+b)=cy
    
    const choice = getRandomInt(1,3);
    
    let v = [];
    let c = [];
    
    let qt, at, av;
    
    while (true) {
        for (let i = 0; i < 3; i++) {
            v[i] = ["p", "q", "r", "s", "t", "v", "w", "x", "y", "z"][getRandomInt(0,9)];
        }
        if (v[1] != v[0] && v[2] != v[0] && v[2] != v[1]) break;
    }
    
    if (choice === 1) {
        for (let i = 0; i < 3; i++) {
            c[i] = ["a", "b", "c", "d", "f", "k", "m", "n"][getRandomInt(0,7)];
        }
        
        qt = `Make $${v[0]}$ the subject of $$ ${c[0]}${v[0]}^2 + ${c[1]}${v[1]} = ${c[2]}${v[2]} $$`;
        
        at = `Subtract the $${c[1]}${v[1]}$ from both sides:`+
        `$$ ${c[0]}${v[0]}^2  = ${c[2]}${v[2]} - ${c[1]}${v[1]} $$` +
        `Divide both sides by $${c[0]}$:` +
        `$$ ${v[0]}^2 = \\frac{${c[2]}${v[2]} - ${c[1]}${v[1]}}{${c[0]}} $$` +
        `Square root both sides:` +
        `$$ ${v[0]} = \\sqrt{ \\frac{${c[2]}${v[2]} - ${c[1]}${v[1]}}{${c[0]}} } $$`;
        
        av = `${v[0]} = \\sqrt{ \\frac{${c[2]}${v[2]} - ${c[1]}${v[1]}}{${c[0]}} }`;
        
    } else if (choice === 2) {
        for (let i = 0; i < 3; i++) {
            c[i] = ["a", "b", "c", "d", "f", "k", "m", "n"][getRandomInt(0,7)];
        }
        
        let ctn = getRandomInt(0,3);
        let num;
        if (ctn < 3) {
            num = getRandomInt(2,9);
            c[ctn] = num.toString();
        }
        
        qt = `Make $${v[0]}$ the subject of $$ ${c[0]}${v[0]}^2 - ${c[1]}${v[1]} = ${c[2]}${v[2]} $$`;
        
        at = `Add the $${c[1]}${v[1]}$ from both sides:`+
        `$$ ${c[0]}${v[0]}^2  = ${c[2]}${v[2]} + ${c[1]}${v[1]} $$` +
        `Divide both sides by $${c[0]}$:` +
        `$$ ${v[0]}^2 = \\frac{${c[2]}${v[2]} + ${c[1]}${v[1]}}{${c[0]}} $$` +
        `Square root both sides:` +
        `$$ ${v[0]} = \\sqrt{ \\frac{${c[2]}${v[2]} + ${c[1]}${v[1]}}{${c[0]}} } $$`;
        
        
        if (ctn === 0) {
            av = `${v[0]} = \\sqrt{ \\frac{${c[2]}${v[2]} + ${c[1]}${v[1]}}{${num}} }`;
        } else if (ctn === 1) {
            av = `${v[0]} = \\sqrt{ \\frac{${c[2]}${v[2]} + ${num}${v[1]}}{${c[0]}} }`;
        } else if (ctn === 2) {
            av = `${v[0]} = \\sqrt{ \\frac{${num}${v[2]} + ${c[1]}${v[1]}}{${c[0]}} }`;
        } else {
            av = `${v[0]} = \\sqrt{ \\frac{${c[2]}${v[2]} + ${c[1]}${v[1]}}{${c[0]}} }`;
        }
    } else if (choice === 3) {
        for (let i = 0; i < 3; i++) {
            c[i] = ["a", "b", "c", "d", "f", "k", "m", "n"][getRandomInt(0,7)];
        }
        
        let ctn = getRandomInt(0,3);
        let num, sr1, sr2;
        
        if (ctn < 3) {
            num = getRandomInt(2,9);
            c[ctn] = num.toString();
        }
        
        let rmv = getRandomInt(1,3);
        if (rmv < 3) {
            v[rmv] = ``;
        }
        
        if (ctn === 2) {
            sr1 = (num^2).toString();
        } else { 
            sr1 = `${c[2]}^2`;
        }
        
        if (rmv === 2) {
            sr2 = ``;
        } else {
            sr2 = `${v[2]}^2`;
        }
        
        qt = `Make $${v[0]}$ the subject of $$ \\sqrt{${c[0]}${v[0]} + ${c[1]}${v[1]}} = ${c[2]}${v[2]} $$`;
        
        at = `Square both sides of the expression: $$${c[0]}${v[0]} + ${c[1]}${v[1]} = ` + sr1 + sr2 + `$$` +
        `Subtract ${c[1]}${v[1]} from both sides: $$ ${c[0]}${v[0]} = ` + sr1 + sr2 + ` - ${c[1]}${v[1]} $$` +
        `Divide by ${c[0]}: $$ ${v[0]} = \\frac{` + sr1 + sr2 + ` - ${c[1]}${v[1]}}{${c[0]}} $$`;
        
        if (ctn === 0) {
            av = `${v[0]} = \\frac{` + sr1 + sr2 + ` - ${c[1]}${v[1]}}{${num}}`;
        } else if (ctn === 1) {
            av = `${v[0]} = \\frac{` + sr1 + sr2 + ` - ${num}${v[1]}}{${c[0]}}`;
        } else if (ctn === 2) {
            av = `${v[0]} = \\frac{${num^2}` + sr2 + ` - ${c[1]}${v[1]}}{${c[0]}}`;
        } else {
            av = `${v[0]} = \\frac{` + sr1 + sr2 + ` - ${c[1]}${v[1]}}{${c[0]}}`;
        }
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
