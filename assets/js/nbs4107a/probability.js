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

window.probabilityGenerators = window.probabilityGenerators || {};

window.probabilityGenerators.typeCT2x2type1 = function(q_id) {

    const qc = getRandomInt(1,4);
    
    let rowname = [];
    let columnname = [];
    let cells = [];
    let cellsratio = [];
    let rowtitle, columntitle, qi, wc;
    let total = getRandomInt(4,40)*10;
    
    if (qc === 1) {
        rowtitle = "favoured hand";
        rowname[0] = "Left";
        rowname[1] = "Right";
        columntitle = "wearing glasses";
        columnname[0] = "Yes";
        columnname[1] = "No";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(5,15);
            cellsratio[1] = getRandomInt(5,15);
            cellsratio[2] = getRandomInt(30,50);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "is left-handed and wears glasses";
        } else if (wc === 1) {
            qi = "is left-handed and does not wear glasses";
        } else if (wc === 2) {
            qi = "is right-handed and wears glasses";
        } else if (wc === 3) {
            qi = "is right-handed and does not wear glasses";
        } else if (wc === 4) {
            qi = "wears glasses";
        } else if (wc === 5) {
            qi = "does not wear glasses";
        } else if (wc === 6) {
            qi = "is left-handed";
        } else {
            qi = "is right-handed";
        }
    }
    
    if (qc === 2) {
        rowtitle = "plays snooker";
        rowname[0] = "Plays";
        rowname[1] = "Does not play";
        columntitle = "enjoys malted loaf";
        columnname[0] = "enjoys";
        columnname[1] = "does not enjoy";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(15,40);
            cellsratio[1] = getRandomInt(15,40);
            cellsratio[2] = getRandomInt(15,40);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "plays snooker and enjoys malted loaf";
        } else if (wc === 1) {
            qi = "plays snooker and does not enjoy malted loaf";
        } else if (wc === 2) {
            qi = "does not play snooker and enjoys malted loaf";
        } else if (wc === 3) {
            qi = "does not play snooker and does not enjoy malted loaf";
        } else if (wc === 4) {
            qi = "enjoys malted loaf";
        } else if (wc === 5) {
            qi = "does not enjoy malted loaf";
        } else if (wc === 6) {
            qi = "plays snooker";
        } else {
            qi = "does not play snooker";
        }
    }
    
    if (qc === 3) {
        rowtitle = "drink preference";
        rowname[0] = "Coffee";
        rowname[1] = "Tea";
        columntitle = "interest in buying a new product a company has launched";
        columnname[0] = "Interested";
        columnname[1] = "Not interested";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(5,15);
            cellsratio[1] = getRandomInt(20,25);
            cellsratio[2] = getRandomInt(30,60);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "prefers coffee and is interested";
        } else if (wc === 1) {
            qi = "prefers coffee and is not interested";
        } else if (wc === 2) {
            qi = "prefers tea and is interested";
        } else if (wc === 3) {
            qi = "preferes tea and is not interested";
        } else if (wc === 4) {
            qi = "is interested";
        } else if (wc === 5) {
            qi = "is not interested";
        } else if (wc === 6) {
            qi = "prefers coffee";
        } else {
            qi = "prefers tea";
        }
    }
    
    if (qc === 4) {
        rowtitle = "whether a person is a meat eater";
        rowname[0] = "Meat eater";
        rowname[1] = "Not a meat eater";
        columntitle = "whether a person drinks alcohol";
        columnname[0] = "Drinks alcohol";
        columnname[1] = "Does not drink alcohol";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(20,30);
            cellsratio[1] = getRandomInt(20,30);
            cellsratio[2] = getRandomInt(15,25);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "is a meat eater and drinks alcohol";
        } else if (wc === 1) {
            qi = "is a meat eater and does not drink alcohol";
        } else if (wc === 2) {
            qi = "is not a meat eater and drinks alcohol";
        } else if (wc === 3) {
            qi = "is not a meat eater and does not drink alcohol";
        } else if (wc === 4) {
            qi = "drinks alcohol";
        } else if (wc === 5) {
            qi = "does not drink alcohol";
        } else if (wc === 6) {
            qi = "is a meat eater";
        } else {
            qi = "is not a meat eater";
        }
    }
        
        let tableHtml = `
        <table aria-label="Contingency table of survey results" style="border-collapse: collapse; margin: 15px 0; width: 100%; max-width: 400px;">
            <thead>
                <tr>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;"></th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[0]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[1]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[0]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[0]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[1]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[6]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[1]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[2]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[3]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[7]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[4]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[5]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[8]}</td>
                </tr>
            </tbody>
        </table>
    `;
    
    let qt = `A survey was conducted looking at ${rowtitle} (rows) and ${columntitle} (columns). <br>${tableHtml} <br> What is the probability that a randomly selected person ` + qi + `?`;
    let hcf = findHCF(cells[wc],cells[8]);
    let answerVal = `\\frac{${cells[wc]/hcf}}{${cells[8]/hcf}}`;
    let at = `There are ${cells[wc]} possibilities out of ${cells[8]}, therefore the probability is $$\\frac{${cells[wc]}}{${cells[8]}}`;
    if (hcf != 1) {
        at = at + `=\\frac{${cells[wc]/hcf}}{${cells[8]/hcf}}`;
    }
    at = at + `=` + roundToDecimalPlaces(cells[wc]/cells[8],2) + `$$`;

    return {
        id: q_id,
        question: qt,
        answer: `$` + answerVal + `$`,
        check_val: answerVal,
        goal: "solve",
        solution: at
    };
};


window.probabilityGenerators.typeCT2x2type2 = function(q_id) {

    const qc = getRandomInt(1,4);
    
    let rowname = [];
    let columnname = [];
    let cells = [];
    let cellsratio = [];
    let rowtitle, columntitle, qi, wc;
    let total = getRandomInt(4,40)*10;
    
    if (qc === 1) {
        rowtitle = "favoured hand";
        rowname[0] = "Left";
        rowname[1] = "Right";
        columntitle = "wearing glasses";
        columnname[0] = "Yes";
        columnname[1] = "No";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(5,15);
            cellsratio[1] = getRandomInt(5,15);
            cellsratio[2] = getRandomInt(30,50);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "is left-handed and wears glasses";
        } else if (wc === 1) {
            qi = "is left-handed and does not wear glasses";
        } else if (wc === 2) {
            qi = "is right-handed and wears glasses";
        } else if (wc === 3) {
            qi = "is right-handed and does not wear glasses";
        } else if (wc === 4) {
            qi = "wears glasses";
        } else if (wc === 5) {
            qi = "does not wear glasses";
        } else if (wc === 6) {
            qi = "is left-handed";
        } else {
            qi = "is right-handed";
        }
    }
    
    if (qc === 2) {
        rowtitle = "plays snooker";
        rowname[0] = "Plays";
        rowname[1] = "Does not play";
        columntitle = "enjoys malted loaf";
        columnname[0] = "enjoys";
        columnname[1] = "does not enjoy";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(15,40);
            cellsratio[1] = getRandomInt(15,40);
            cellsratio[2] = getRandomInt(15,40);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "plays snooker and enjoys malted loaf";
        } else if (wc === 1) {
            qi = "plays snooker and does not enjoy malted loaf";
        } else if (wc === 2) {
            qi = "does not play snooker and enjoys malted loaf";
        } else if (wc === 3) {
            qi = "does not play snooker and does not enjoy malted loaf";
        } else if (wc === 4) {
            qi = "enjoys malted loaf";
        } else if (wc === 5) {
            qi = "does not enjoy malted loaf";
        } else if (wc === 6) {
            qi = "plays snooker";
        } else {
            qi = "does not play snooker";
        }
    }
    
    if (qc === 3) {
        rowtitle = "drink preference";
        rowname[0] = "Coffee";
        rowname[1] = "Tea";
        columntitle = "interest in buying a new product a company has launched";
        columnname[0] = "Interested";
        columnname[1] = "Not interested";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(5,15);
            cellsratio[1] = getRandomInt(20,25);
            cellsratio[2] = getRandomInt(30,60);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "prefers coffee and is interested";
        } else if (wc === 1) {
            qi = "prefers coffee and is not interested";
        } else if (wc === 2) {
            qi = "prefers tea and is interested";
        } else if (wc === 3) {
            qi = "preferes tea and is not interested";
        } else if (wc === 4) {
            qi = "is interested";
        } else if (wc === 5) {
            qi = "is not interested";
        } else if (wc === 6) {
            qi = "prefers coffee";
        } else {
            qi = "prefers tea";
        }
    }
    
    if (qc === 4) {
        rowtitle = "whether a person is a meat eater";
        rowname[0] = "Meat eater";
        rowname[1] = "Not a meat eater";
        columntitle = "whether a person drinks alcohol";
        columnname[0] = "Drinks alcohol";
        columnname[1] = "Does not drink alcohol";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(20,30);
            cellsratio[1] = getRandomInt(20,30);
            cellsratio[2] = getRandomInt(15,25);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "is a meat eater and drinks alcohol";
        } else if (wc === 1) {
            qi = "is a meat eater and does not drink alcohol";
        } else if (wc === 2) {
            qi = "is not a meat eater and drinks alcohol";
        } else if (wc === 3) {
            qi = "is not a meat eater and does not drink alcohol";
        } else if (wc === 4) {
            qi = "drinks alcohol";
        } else if (wc === 5) {
            qi = "does not drink alcohol";
        } else if (wc === 6) {
            qi = "is a meat eater";
        } else {
            qi = "is not a meat eater";
        }
    }
    
    let keepinner;
    while (true) {
        keepinner = getRandomInt(0,3);
        if (keepinner != wc) break;
    }
    
    let keepouter1;
    while (true) {
        keepouter1 = getRandomInt(4,5);
        if (keepouter1 != wc) break;
    }
    
    let keepouter2;
    while (true) {
        keepouter2 = getRandomInt(6,7);
        if (keepouter2 != wc && keepouter2 != keepouter1) break;
    }
    
    let cellsk = [];
    for (let i = 0; i < 8; i++) {
        if (i === keepinner || i === keepouter1 || i === keepouter2) {
            cellsk[i] = cells[i];
        } else {
            cellsk[i] = ``;
        }
    }
    cellsk[8] = cells[8];
        let tableHtmlC = `
        <table aria-label="Contingency table of survey results" style="border-collapse: collapse; margin: 15px 0; width: 100%; max-width: 400px;">
            <thead>
                <tr>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;"></th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[0]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[1]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[0]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[0]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[1]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[6]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[1]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[2]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[3]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[7]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[4]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[5]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[8]}</td>
                </tr>
            </tbody>
        </table>
    `;
        
        let tableHtml = `
        <table aria-label="Contingency table of survey results" style="border-collapse: collapse; margin: 15px 0; width: 100%; max-width: 400px;">
            <thead>
                <tr>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;"></th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[0]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[1]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[0]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[0]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[1]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[6]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[1]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[2]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[3]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[7]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[4]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[5]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[8]}</td>
                </tr>
            </tbody>
        </table>
    `;
    
    let qt = `A survey was conducted looking at ${rowtitle} (rows) and ${columntitle} (columns). <br>${tableHtml} <br> What is the probability that a randomly selected person ` + qi + `?`;
    let hcf = findHCF(cells[wc],cells[8]);
    let answerVal = `\\frac{${cells[wc]/hcf}}{${cells[8]/hcf}}`;
    let at = `${tableHtmlC} <br> By adding and subtracting rows and columns it can be found that there are ${cells[wc]} possibilities out of ${cells[8]}, therefore the probability is $$\\frac{${cells[wc]}}{${cells[8]}}`;
    if (hcf != 1) {
        at = at + `=\\frac{${cells[wc]/hcf}}{${cells[8]/hcf}}`;
    }
    at = at + `=` + roundToDecimalPlaces(cells[wc]/cells[8],2) + `$$`;

    return {
        id: q_id,
        question: qt,
        answer: `$` + answerVal + `$`,
        check_val: answerVal,
        goal: "solve",
        solution: at
    };
};


window.probabilityGenerators.typeCT2x2type3 = function(q_id) {

    const qc = getRandomInt(1,4);
    
    let rowname = [];
    let columnname = [];
    let cells = [];
    let cellsratio = [];
    let rowtitle, columntitle, qi, wc;
    let total = getRandomInt(4,40)*10;
    
    if (qc === 1) {
        rowtitle = "favoured hand";
        rowname[0] = "Left";
        rowname[1] = "Right";
        columntitle = "wearing glasses";
        columnname[0] = "Yes";
        columnname[1] = "No";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(5,15);
            cellsratio[1] = getRandomInt(5,15);
            cellsratio[2] = getRandomInt(30,50);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "is left-handed given they wear glasses";
        } else if (wc === 1) {
            qi = "is left-handed given that they do not wear glasses";
        } else if (wc === 2) {
            qi = "is right-handed given they wear glasses";
        } else if (wc === 3) {
            qi = "is right-handed given they do not wear glasses";
        } else if (wc === 4) {
            qi = "wears glasses given they are left-handed";
        } else if (wc === 5) {
            qi = "does not wear glasses given they are left-handed";
        } else if (wc === 6) {
            qi = "wears glasses given they are right-handed";
        } else {
            qi = "does not wear glasses given they are right-handed";
        }
    }
    
    if (qc === 2) {
        rowtitle = "plays snooker";
        rowname[0] = "Plays";
        rowname[1] = "Does not play";
        columntitle = "enjoys malted loaf";
        columnname[0] = "enjoys";
        columnname[1] = "does not enjoy";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(15,40);
            cellsratio[1] = getRandomInt(15,40);
            cellsratio[2] = getRandomInt(15,40);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "plays snooker given they enjoy malted loaf";
        } else if (wc === 1) {
            qi = "plays snooker given they do not enjoy malted loaf";
        } else if (wc === 2) {
            qi = "does not play snooker given they enjoy malted loaf";
        } else if (wc === 3) {
            qi = "does not play snooker given they do not enjoy malted loaf";
        } else if (wc === 4) {
            qi = "enjoys malted loaf given they play snooker";
        } else if (wc === 5) {
            qi = "does not enjoy malted loaf given they play snooker";
        } else if (wc === 6) {
            qi = "enjoys malted loaf given they do not play snooker";
        } else {
            qi = "does not enjoy malted loaf given they do not play snooker";
        }
    }
    
    if (qc === 3) {
        rowtitle = "drink preference";
        rowname[0] = "Coffee";
        rowname[1] = "Tea";
        columntitle = "interest in buying a new product a company has launched";
        columnname[0] = "Interested";
        columnname[1] = "Not interested";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(5,15);
            cellsratio[1] = getRandomInt(20,25);
            cellsratio[2] = getRandomInt(30,60);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "prefers coffee given they are interested";
        } else if (wc === 1) {
            qi = "prefers coffee given they are not interested";
        } else if (wc === 2) {
            qi = "prefers tea given they are interested";
        } else if (wc === 3) {
            qi = "preferes tea given they are not interested";
        } else if (wc === 4) {
            qi = "is interested given they prefer coffee";
        } else if (wc === 5) {
            qi = "is not interested given they prefer coffee";
        } else if (wc === 6) {
            qi = "is interested given they prefer tea";
        } else {
            qi = "is not interested given they prefer tea";
        }
    }
    
    if (qc === 4) {
        rowtitle = "whether a person is a meat eater";
        rowname[0] = "Meat eater";
        rowname[1] = "Not a meat eater";
        columntitle = "whether a person drinks alcohol";
        columnname[0] = "Drinks alcohol";
        columnname[1] = "Does not drink alcohol";
        while (true) {
            let checko = 0;
            total = getRandomInt(4,80)*10;
            cellsratio[0] = getRandomInt(20,30);
            cellsratio[1] = getRandomInt(20,30);
            cellsratio[2] = getRandomInt(15,25);
            cellsratio[3] = 100 - cellsratio[0] - cellsratio[1] - cellsratio[2];
            for (let i = 0; i < 4; i++) {
                cells[i] = cellsratio[i]*total/100;
                if (cells[i] != roundToDecimalPlaces(cells[i],0)) checko = 1;
            }
            if (cellsratio[3] >= 0 && checko === 0) break;
        }
        
        
        cells[4] = cells[0] + cells[2];
        cells[5] = cells[1] + cells[3];
        cells[6] = cells[0] + cells[1];
        cells[7] = cells[2] + cells[3];
        cells[8] = total;
        
        wc = getRandomInt(0,7);
        if (wc === 0) {
            qi = "is a meat eater given they drink alcohol";
        } else if (wc === 1) {
            qi = "is a meat eater given they do not drink alcohol";
        } else if (wc === 2) {
            qi = "is not a meat eater given they drink alcohol";
        } else if (wc === 3) {
            qi = "is not a meat eater given they do not drink alcohol";
        } else if (wc === 4) {
            qi = "drinks alcohol given they are a meat eater";
        } else if (wc === 5) {
            qi = "does not drink alcohol given they are a meat eater";
        } else if (wc === 6) {
            qi = "drinks alcohol given they are a meat eater";
        } else {
            qi = "does no drink alcohol given they are not a meat eater";
        }
    }
    
    let li = [0,1,2,3,0,1,2,3];
    let lo = [4,5,4,5,6,6,7,7];
    let loseinner = li[wc];
    let loseouter = lo[wc];
    cells[9] = cells[lo[wc]];
    cells[10] = cells[li[wc]];
    
    let cellsk = [];
    for (let i = 0; i < 8; i++) {
        if (i === loseinner || i === loseouter) {
            cellsk[i] = ``;
        } else {
            cellsk[i] = cells[i];
        }
    }
    cellsk[8] = ``;
        
        let tableHtmlC = `
        <table aria-label="Contingency table of survey results" style="border-collapse: collapse; margin: 15px 0; width: 100%; max-width: 400px;">
            <thead>
                <tr>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;"></th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[0]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[1]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[0]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[0]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[1]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[6]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[1]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[2]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[3]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[7]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[4]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[5]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cells[8]}</td>
                </tr>
            </tbody>
        </table>
    `;
        
        let tableHtml = `
        <table aria-label="Contingency table of survey results" style="border-collapse: collapse; margin: 15px 0; width: 100%; max-width: 400px;">
            <thead>
                <tr>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;"></th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[0]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">${columnname[1]}</th>
                    <th scope="col" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[0]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[0]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[1]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[6]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">${rowname[1]}</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[2]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[3]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[7]}</td>
                </tr>
                <tr>
                    <th scope="row" style="border: 1px solid #ccc; padding: 8px;">Total</th>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[4]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[5]}</td>
                    <td style="border: 1px solid #ccc; padding: 8px; text-align: center;">${cellsk[8]}</td>
                </tr>
            </tbody>
        </table>
    `;
    
    const lot = qi.length;
    const fgiv = qi.indexOf("given");
    const qic = qi.slice(fgiv + 5 - lot);
    
    let qt = `A survey was conducted looking at ${rowtitle} (rows) and ${columntitle} (columns). <br>${tableHtml} <br> What is the probability that a randomly selected person ` + qi + `?  Give your answer as an exact fraction in its simplest form.`;
    let hcf = findHCF(cells[10],cells[9]);
    let answerVal = `\\frac{${cells[10]/hcf}}{${cells[9]/hcf}}`;
    let at = `${tableHtmlC} <br> By adding and subtracting rows and columns it can be found that there are ${cells[10]} possibilities out of ${cells[9]}. Only looking at ${cells[9]} because this is only out of `+qic+`<br>Therefore the probability is $$\\frac{${cells[10]}}{${cells[9]}}`;
    if (hcf != 1) {
        at = at + `=\\frac{${cells[10]/hcf}}{${cells[9]/hcf}}`;
    }
    at = at + `$$`;

    return {
        id: q_id,
        question: qt,
        answer: `$` + answerVal + `$`,
        check_val: answerVal,
        goal: "solve",
        solution: at
    };
};



