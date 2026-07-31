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

window.factorisingGenerators = window.factorisingGenerators || {};

window.factorisingGenerators.one_pair_one_var = function(q_id) {
    
    const choice = getRandomInt(1,2);
     
    const a = getRandomInt(2,12);
    const v = ["p","q","r","s","t","x","y"][getRandomInt(0,6)];
    
    let b, c, qt, at, av, ans;
    
    while (true) {
        b = getRandomInt(1,10);
        c = getRandomInt(1,12);
        
        if (findHCF(b,c) === 1) break;
    }
    
    if (choice === 1) {
        qt = `Fully factorise: <br> $${a*b}${v} + ${a*c}$`;
        if (b != 1) {
            at = `Both terms can be divided by ${a}, which is the highest common factor. <br> Taking ${a} outside of a bracket and dividing each term by ${a}: <br> $${a}(${b}${v}+${c})$`;
            ans = `$${a}(${b}${v}+${c})$`;
        } else {
            at = `Both terms can be divided by ${a}, which is the highest common factor. <br> Taking ${a} outside of a bracket and dividing each term by ${a}: <br> $${a}(${v}+${c})$`;
            ans = `$${a}(${v}+${c})$`;
        }
        av = `${a}(${b}${v}+${c})`;
    } else if (choice === 2) {
        qt = `Fully factorise: <br> $${a*b}${v} - ${a*c}$`;
        if (b != 1) {
            at = `Both terms can be divided by ${a}, which is the highest common factor. <br> Taking ${a} outside of a bracket and dividing each term by ${a}: <br> $${a}(${b}${v}-${c})$`;
            ans = `$${a}(${b}${v}-${c})$`;
        } else {
            at = `Both terms can be divided by ${a}, which is the highest common factor. <br> Taking ${a} outside of a bracket and dividing each term by ${a}: <br> $${a}(${v}-${c})$`;
            ans = `$${a}(${v}-${c})$`;
        }
        av = `${a}(${b}${v}-${c})`;
    }
    
    return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "factorise",
        solution: at
    };
};    


window.factorisingGenerators.one_pair = function(q_id) {
    
    const mchoice = getRandomInt(1,2);
    
    let choice;
    let a, b, c, qt, at, av, ans;
    let m, n, p, q;
    let co = [];
    let po = [];
    let atp = [];
    let ansp = [];
    
    while (true) {
        
        b = getRandomInt(1,9);
        c = getRandomInt(1,12);
            
        if (findHCF(b,c) === 1) break;
        }
    
    // mchoice 1: Factorise to ax(by +/- c)
    
    if (mchoice === 1) {
        choice = getRandomInt(1,2);
        a = getRandomInt(1,9);
        
        if (choice === 1) {
            if (a*b === 1 && a*c === 1) {
                qt = `Fully factorise <br> $xy + x$`;
            } else if (a*b === 1 && a*c != 1) {
                qt = `Fully factorise <br> $xy + ${a*c}x$`;
            } else if (a*b != 1 && a*c === 1) {
                qt = `Fully factorise <br> $${a*b}xy + x$`;
            } else {
                qt = `Fully factorise <br> $${a*b}xy + ${a*c}x$`;
            }
            if (a === 1) {
                at = `Both terms can be divided by $x$: <br>`;
                if (b === 1) {
                    at = at + `$x(y + ${c})$`;
                    ans = `$x(y + ${c})$`;
                } else {
                    at = at + `$x(${b}y + ${c})$`;
                    ans = `$x(${b}y + ${c})$`;
                }
            } else {
                at = `Both terms can be divided by ${a} and by $x$: <br>`;
                if (b === 1) {
                    at = at + `$${a}x(y+${c})$`;
                    ans = `$${a}x(y+${c})$`;
                } else {
                    at = at + `$${a}x(${b}y+${c})$`;
                    ans = `$${a}x(${b}y+${c})$`;
                }
            }
            av = `${a}x(${b}y+${c})`;
        } else if (choice === 2) {
            if (a*b === 1 && a*c === 1) {
                qt = `Fully factorise <br> $xy - x$`;
            } else if (a*b === 1 && a*c != 1) {
                qt = `Fully factorise <br> $xy - ${a*c}x$`;
            } else if (a*b != 1 && a*c === 1) {
                qt = `Fully factorise <br> $${a*b}xy - x$`;
            } else {
                qt = `Fully factorise <br> $${a*b}xy - ${a*c}x$`;
            }
            if (a === 1) {
                at = `Both terms can be divided by $x$: <br>`;
                if (b === 1) {
                    at = at + `$x(y - ${c})$`;
                    ans = `$x(y - ${c})$`;
                } else {
                    at = at + `$x(${b}y - ${c})$`;
                    ans = `$x(${b}y - ${c})$`;
                }
            } else {
                at = `Both terms can be divided by ${a} and by $x$: <br>`;
                if (b === 1) {
                    at = at + `$${a}x(y-${c})$`;
                    ans = `$${a}x(y-${c})$`;
                } else {
                    at = at + `$${a}x(${b}y-${c})$`;
                    ans = `$${a}x(${b}y-${c})$`;
                }
            }
            av = `${a}x(${b}y-${c})`;
        }
        
        
        // mchoice 2: Factorise to ax^my^n(bx^p + cy^q)
        
    } else if (mchoice === 2) {
        
        a = getRandomInt(1,9);
        
        n = getRandomInt(1,9);
        m = getRandomInt(1,9);
        p = getRandomInt(1,9);
        q = getRandomInt(1,9);
        
        av = `${a}x^{${m}}y^{${n}}(${b}x^{${p}}+${c}y^{${q}})`;
        
        
        if (a*b != 1) {
            co[0] = `${a*b}`;
        }
        
        if (n != 1) {
            po[1] = `y^{${n}}`;
        } else {
            po[1] = `y`;
        }
        
        if (a*c != 1) {
            co[1] = `${a*c}`;
        }
        
        if (m != 1) {
            po[0] = `x^{${m}}`;
        } else {
            po[0] = `x`;
        }
        
        qt = `Fully factorise: <br> $` + co[0] + `x^{${m+p}}` + po[1] + `+` + co[1] + po[0] + `y^{${n+q}}$`;
        
        if (a != 1) {
            atp[0] = `There is a numerical highest common factor of ${a} for the terms`;
            ansp[0] = `$${a}`;
        } else {
            atp[0] = `The is no common numerical factor other than 1`;
            ansp[0] = `$`;
        }
        
        if (m != 1) {
            atp[1] = `There is a common factor in $x$ of $x^{${m}}$`;
            ansp[1] = `x^{${m}}`;
        } else {
            atp[1] = `There is a common factor of $x$`;
            ansp[1] = `x`;
        }
        
        if (n !=1 ) {
            atp[2] = `There is a common factor in $y$ of $y^{${n}}$`;
            ansp[2] = `y^{${n}}`;
        } else {
            atp[2] = `There is a common factor of $y$`;
            ansp[2] = `y`;
        }
        
        if (m + n != 2) {
            atp[3] = `When dividing by variables with powers, you need to subtract the powers (i.e. $k^m \\div k^n = k^{m-n}$).`;
        }
        
        at = atp[0] + `<br>` + atp[1] + `<br>` + atp[2] + `<br>` + atp[3];
        
        if (b != 1) {
            ansp[3] = `(${b}`;
        } else {
            ansp[3] = `(`;
        }
        
        if (p != 1) {
            ansp[4] = `x^{${p}}`;
        } else {
            ansp[4] = `x`;
        }
        
        if (c != 1) {
            ansp[5] = `+ ${c}`;
        } else {
            ansp[5] = `+`;
        }
        
        if (q != 1) {
            ansp[6] = `y^{${q}})$`;
        } else {
            ansp[6] = `y)$`;
        }
        
        ans = ansp[0];
        
        for (let i = 1; i < 7; i++) {
            ans += ansp[i]
        }
        
        
    }
            
        
        

        
        
        return {
        id: q_id,
        question: qt,
        answer: ans,
        check_val: av,
        goal: "factorise",
        solution: at
    };
};    
        
                    
        
