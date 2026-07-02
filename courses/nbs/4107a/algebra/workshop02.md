---
layout: nbs4107a
title: Workshop 2
---

# Workshop: Algebra Skills

This page contains practice questions covering a range of algebra skills.

## Expanding and Simplifying


{% include question_expand.html
    id="exp01"
    title="1"
    question_text="Expand and simplify $5(4x+3)$."
    correct_answer="20x+15"
    solution_text="Multiply each term inside the bracket by 5: $5 \times 4x = 20x$ and $5 \times 3 = 15$. <br> $20x + 15$."
%}

{% include question_expand.html
    id="exp02"
    title="2"
    question_text="Expand and simplify $2x(3+4y)$."
    correct_answer="6x + 8xy"
    solution_text="Multiply each term inside the bracket by the term outside. $2x \\times 3 = 6x$. $2x \\times 4y = 8xy$. <br> $6x + 8xy$"
%}

{% include question_expand.html
    id="exp03"
    title="3"
    question_text="Expand and simplify $5(2x+1)+x(3x-2)$."
    correct_answer="3x^2 + 8x + 5"
    solution_text="Expand each bracket separately. First bracket: $5 \\times 2x = 10x$, $5 \\times 1 = 5$. Second bracket: $x \\times 3x = 3x^2$, $x \\times -2 = -2x$. Combine the results: $10x + 5 + 3x^2 - 2x$. Group like terms: $3x^2 + (10x - 2x) + 5$ <br> $3x^2 + 8x + 5$"
%}

{% include question_expand.html
    id="exp04"
    title="4"
    question_text="Expand and simplify $x(4x+y)+y(3x-1)$."
    correct_answer="4x^2 + 4xy - y"
    solution_text="Expand each bracket separately. First bracket: $x \\times 4x = 4x^2$, $x \\times y = xy$. Second bracket: $y \\times 3x = 3xy$, $y \\times -1 = -y$. Combine the results: $4x^2 + xy + 3xy - y$. Group like terms: $4x^2 + (xy + 3xy) - y$. <br> $4x^2 + 4xy - y$"
%}

{% include question_expand.html
    id="exp05"
    title="5"
    question_text="Expand and simplify $(x+5)(x+2)$."
    correct_answer="x^2 + 7x + 10"
    solution_text="Use the FOIL method (First, Outer, Inner, Last). First: $x \\times x = x^2$. Outer: $x \\times 2 = 2x$. Inner: $5 \\times x = 5x$. Last: $5 \\times 2 = 10$. Combine and simplify: $x^2 + 2x + 5x + 10$. <br> $x^2 + 7x + 10$"
%}

{% include question_expand.html
    id="exp06"
    title="6"
    question_text="Expand and simplify $(3x-4)(2x+1)$."
    correct_answer="6x^2 - 5x - 4"
    solution_text="Use the FOIL method. First: $3x \\times 2x = 6x^2$. Outer: $3x \\times 1 = 3x$. Inner: $-4 \\times 2x = -8x$. Last: $-4 \\times 1 = -4$. Combine and simplify: $6x^2 + 3x - 8x - 4$. <br> $6x^2 - 5x - 4$"
%}

## Solving Linear Equations

{% include question_solve.html
    id="sol01"
    title="7"
    question_text="Solve for $x$ in the equation $4x-1=21$."
    correct_answer="5.5"
    solution_text="First, add 1 to both sides: $4x = 22$. <br> Then, divide by 4: <br> $x = 5.5$."
%}

{% include question_solve.html
    id="sol02"
    title="8"
    question_text="Solve for $x$ in the equation $18-7x=4$."
    correct_answer="2"
    solution_text="First, subtract 18 from both sides: $-7x = 4 - 18 = -14$. <br> Then, divide both sides by -7: $x = \\frac{-14}{-7}$. <br> $x=2$"
%}


{% include question_solve.html
    id="sol03"
    title="9"
    question_text="Solve for $x$ in the equation $5(2x-3)=11$."
    correct_answer="2.6"
    solution_text="First, expand the bracket: $10x - 15 = 11$.<br> Then, add 15 to both sides: $10x = 11 + 15 = 26$. <br> Finally, divide by 10: $x = \\frac{26}{10}$. <br> $x=\\frac{13}{5} = 2.6$"
%}


{% include question_solve.html
    id="sol04"
    title="10"
    question_text="Solve for $x$ in the equation $5x-3=3x+7$."
    correct_answer="5"
    solution_text="First, move the $x$ terms to one side by subtracting $3x$ from both sides: $2x - 3 = 7$.<br>Then, add 3 to both sides: $2x = 10$. <br> Finally, divide by 2. <br> $x=5$"
%}


{% include question_solve.html
    id="sol05"
    title="11"
    question_text="Solve for $x$ in the equation $9x+7=5x-9$."
    correct_answer="-4"
    solution_text="First, subtract $5x$ from both sides: $4x + 7 = -9$. <br> Then, subtract 7 from both sides: $4x = -9 - 7 = -16$. <br> Finally, divide by 4. <br> $x=-4$"
%}


{% include question_solve.html
    id="sol06"
    title="12"
    question_text="Solve for $x$ in the equation $\\frac{10}{x+1}=4$."
    correct_answer="1.5"
    solution_text="First, multiply both sides by $(x+1)$: $10 = 4(x+1)$. <br> Expand the bracket: $10 = 4x + 4$. <br> Subtract 4 from both sides: $6 = 4x$. <br> Divide by 4: $x = \\frac{6}{4}$.<br> $x=\\frac{3}{2}=1.5$"
%}


## Rearranging Expressions

{% include question_rearrange.html
    id="rearrange_01"
    title="13"
    question_text="Make $x$ the subject of the formula $y=3x+5$."
    correct_answer="(y - 5) / 3"
    solution_text="Subtract 5 from both sides: <br> $y - 5 = 3x$ <br> Then, divide both sides by 3.<br><strong>Answer:</strong> $x = \frac{y-5}{3}$"
%}

{% include question_rearrange.html
    id="rearrange_02"
    title="14"
    question_text="Make $t$ the subject of the formula $4t-8s=20$."
    correct_answer="5 + 2s"
    solution_text="Add $8s$ to both sides: <br> $4t = 20 + 8s$ <br> Then, divide both sides by 4.<br><strong>Answer:</strong> $t = 5 + 2s$"
%}

{% include question_rearrange.html
    id="rearrange_03"
    title="15"
    question_text="Make $Q$ the subject of the formula $P=4Q+3$."
    correct_answer="(P - 3) / 4"
    solution_text="Subtract 3 from both sides: <br>$P - 3 = 4Q$ <br> Then, divide both sides by 4.<br><strong>Answer:</strong> $Q = \frac{P-3}{4}$"
%}

{% include question_rearrange.html
    id="rearrange_04"
    title="16"
    question_text="Make $Q$ the subject of the formula $P=20-2Q$."
    correct_answer="(20 - P) / 2"
    solution_text="Add $2Q$ to both sides:<br> $P + 2Q = 20$ <br> Then, subtract $P$ from both sides: <br> $2Q = 20 - P$ <br> Finally, divide by 2.<br><strong>Answer:</strong> $Q = \frac{20-P}{2}$"
%}

{% include question_rearrange.html
    id="rearrange_05"
    title="17"
    question_text="Make $P$ the subject of the formula $\frac{P+Q}{5}=2$."
    correct_answer="10 - Q"
    solution_text="Multiply both sides by 5:<br> $P + Q = 10$ <br> Then, subtract $Q$ from both sides.<br><strong>Answer:</strong> $P = 10 - Q$"
%}

{% include question_rearrange.html
    id="rearrange_06"
    title="18"
    question_text="Make $Q$ the subject of the formula $5(Q-3)=10P$."
    correct_answer="2P + 3"
    solution_text="Divide both sides by 5: $Q - 3 = 2P$. Then, add 3 to both sides.<br><strong>Answer:</strong> $Q = 2P + 3$"
%}

{% include question_rearrange.html
    id="rearrange_07"
    title="19"
    question_text="Make $T$ the subject of the formula $MV=PT$."
    correct_answer="(M V) / P"
    solution_text="To isolate T, divide both sides by P.<br><strong>Answer:</strong> $T = \frac{MV}{P}$"
%}

{% include question_rearrange.html
    id="rearrange_08"
    title="20"
    question_text="Make $L$ the subject of the formula $Q=0.25L^2K^3$."
    correct_answer="\\sqrt{\\frac{4Q}{K^3}}"
    solution_text="Divide both sides by $0.25K^3$:<br> $\frac{Q}{0.25K^3} = L^2$ <br> Then, take the square root of both sides. <br> Note that dividing by 0.25 is the same as multiplying by 4.<br><strong>Answer:</strong> $L = \sqrt{\frac{4Q}{K^3}}$"
%}

{% include question_rearrange.html
    id="rearrange_09"
    title="21"
    question_text="Make $M$ the subject of the formula $S=\frac{1}{1-M}$."
    correct_answer="1 - (1 / S)"
    solution_text="Multiply both sides by $(1-M)$:<br> $S(1-M) = 1$ <br> Divide both sides by S: <br> $1-M = \frac{1}{S}$ <br> Add M to both sides: $1 = \frac{1}{S} + M$ <br> Finally, subtract $\frac{1}{S}$ from both sides.<br><strong>Answer:</strong> $M = 1 - \frac{1}{S}$"
%}

{% include question_rearrange.html
    id="rearrange_10"
    title="22"
    question_text="Make $x$ the subject of the formula $z=\frac{x-\mu}{\sigma}$."
    correct_answer="z\\sigma+\\mu"
    solution_text="Multiply both sides by $\sigma$: <br>$z\sigma = x - \mu$ <br> Then, add $\mu$ to both sides.<br><strong>Answer:</strong> $x = z\sigma + \mu$"
%}

{% include question_rearrange.html
    id="rearrange_11"
    title="23"
    question_text="Make $\mu$ the subject of the formula $z=\frac{x-\mu}{\sigma}$."
    correct_answer="x-z\\sigma"
    solution_text="Multiply both sides by $\sigma$: <br> $z\sigma = x - \mu$ <br> Add $\mu$ to both sides:<br> $z\sigma + \mu = x$ <br> Finally, subtract $z\sigma$ from both sides.<br><strong>Answer:</strong> $\mu = x - z\sigma$"
%}

{% include question_rearrange.html
    id="rearrange_12"
    title="24"
    question_text="Make $E(X)$ the subject of the formula $Var(X)=E(X^2)-(E(X))^2$."
    correct_answer="\\sqrt{E(X^2)-Var(X)}"
    solution_text="Add $(E(X))^2$ to both sides:<br> $Var(X) + (E(X))^2 = E(X^2)$ <br> Subtract $Var(X)$ from both sides:<br> $(E(X))^2 = E(X^2) - Var(X)$ <br> Finally, take the square root of both sides.<br><strong>Answer:</strong> $E(X) = \sqrt{E(X^2) - Var(X)}$"
%}

{% include question_rearrange.html
    id="rearrange_13"
    title="25"
    question_text="Make $P(A \cap B)$ the subject of the formula $P(A\cup B)=P(A)+P(B)-P(A \cap B)$."
    correct_answer="P(A)+P(B)-P(A\\cup B)"
    solution_text="First, add $P(A \cap B)$ to both sides:<br> $P(A\cup B) + P(A \cap B) = P(A) + P(B)$ <br> Then, subtract $P(A\cup B)$ from both sides.<br><strong>Answer:</strong> $P(A \cap B) = P(A) + P(B) - P(A\cup B)$"
%}


## Laws of Indices

{% include question_indices.html
    id="ind_01"
    title="26"
    question_text="Use the laws of indices to simplify $x^5x^{10}$."
    correct_answer="x^{15}"
    solution_text="When multiplying terms with the same base, add the powers: $5 + 10 = 15$. <br> Result: $x^{15}$."
%}

{% include question_indices.html
    id="ind_02"
    title="27"
    question_text="Use the laws of indices to simplify $\\frac{t \\cdot t^9}{t^6}$."
    correct_answer="t^4"
    solution_text="First, simplify the numerator by adding the powers: $t^{1+9} = t^{10}$.<br> Now we have $\\frac{t^{10}}{t^6}$. <br>When dividing terms with the same base, we subtract the powers: $t^{10-6}$. <br> Result: $t^4$"
%}

{% include question_indices.html
    id="ind_03"
    title="28"
    question_text="Use the laws of indices to simplify $(xy^2)^5$."
    correct_answer="x^5y^{10}"
    solution_text="When raising a power to a power, we multiply the powers for each term inside the bracket: $x^{1 \\times 5}y^{2 \\times 5}$. <br> Result: $x^5y^{10}$"
%}

{% include question_indices.html
    id="ind_04"
    title="29"
    question_text="Use the laws of indices to simplify $y^4tyt^{-5}$"
    correct_answer="y^5 / t^4"
    solution_text="Group the terms with the same base and add their powers. <br> For y: $y^{4+1} = y^5$. <br>For t: $t^{1+(-5)} = t^{-4}$. <br> Result: $y^5t^{-4}$ or $\\frac{y^5}{t^4}$"
%}

{% include question_indices.html
    id="ind_05"
    title="30"
    question_text="Use the laws of indices to simplify $xy^2\\sqrt{xy}$."
    correct_answer="x^{3/2} y^{5/2}"
    solution_text="First, write the square root using index notation: $\\sqrt{xy} = (xy)^{1/2} = x^{1/2}y^{1/2}$. <br> Now combine with the original terms by adding the powers.<br> For x: $x^{1+1/2} = x^{3/2}$. <br>For y: $y^{2+1/2} = y^{5/2}$. <br> Result: $x^{3/2}y^{5/2}$"
%}

{% include question_indices.html
    id="ind_06"
    title="31"
    question_text="Use the laws of indices to simplify $\\frac{xy^2}{\\sqrt{xy}}$."
    correct_answer="x^{1/2} y^{3/2}"
    solution_text="Write the denominator using index notation: $x^{1/2}y^{1/2}$. <br>Now subtract the powers of the denominator from the numerator. <br> For x: $x^{1-1/2} = x^{1/2}$. <br> For y: $y^{2-1/2} = y^{3/2}$. <br> Result: $x^{1/2}y^{3/2}$"
%}

{% include question_indices.html
    id="ind_07"
    title="32"
    question_text="Use the laws of indices to simplify $\\frac{a^4b^{-4}a^8}{(a^{-3}b)^{-4}}$."
    correct_answer="1"
    solution_text="First, simplify the numerator by adding powers of a: $a^{4+8}b^{-4} = a^{12}b^{-4}$. <br> Then, simplify the denominator by multiplying the powers: $a^{(-3 \\times -4)}b^{(1 \\times -4)} = a^{12}b^{-4}$. <br> Now we have $\\frac{a^{12}b^{-4}}{a^{12}b^{-4}}$, which is 1. <br> Result: 1"
%}

## Factorising Expressions

{% include question_factorise.html
    id="fac_01"
    title="33"
    question_text="Fully factorise the expression $10t+25$."
    correct_answer="5(2t+5)"
    solution_text="The GCF of 10 and 25 is 5. Divide both terms by 5 to get $5(2t+5)$."
%}

{% include question_factorise.html
    id="fac_02"
    title="34"
    question_text="Fully factorise the expression $8x-32y$."
    correct_answer="8(x-4y)"
    solution_text="Find the greatest common factor of 8 and 32, which is 8. Take 8 outside the bracket. $8x \\div 8 = x$. $-32y \\div 8 = -4y$. <br> $8(x-4y)$"
%}

{% include question_factorise.html
    id="fac_03"
    title="35"
    question_text="Fully factorise the expression $7pt+12pk$."
    correct_answer="p(7t+12k)"
    solution_text="The only common factor is $p$. Take $p$ outside the bracket. <br> $p(7t+12k)$"
%}

{% include question_factorise.html
    id="fac_04"
    title="36"
    question_text="Fully factorise the expression $5y^4-8xy^2$."
    correct_answer="y^2(5y^2 - 8x)"
    solution_text="The common factors are $y^2$. Take $y^2$ outside the bracket. $5y^4 \\div y^2 = 5y^2$. $-8xy^2 \\div y^2 = -8x$. <br> $y^2(5y^2 - 8x)$"
%}

{% include question_factorise.html
    id="fac_05"
    title="37"
    question_text="Fully factorise the expression $12xy^3+30x^3y^3$."
    correct_answer="6xy^3(2+5x^2)"
    solution_text="The greatest common factor for the numbers is 6. For x, it's $x^1$. For y, it's $y^3$. So we take out $6xy^3$. $12xy^3 \\div 6xy^3 = 2$. $30x^3y^3 \\div 6xy^3 = 5x^2$. <br> $6xy^3(2+5x^2)$"
%}

{% include question_factorise.html
    id="fac_06"
    title="38"
    question_text="Fully factorise the expression $9a^2b+27a^3b^2$."
    correct_answer="9a^2b(1+3ab)"
    solution_text="The greatest common factor for the numbers is 9. For a, it's $a^2$. For b, it's $b^1$. So we take out $9a^2b$. $9a^2b \\div 9a^2b = 1$. $27a^3b^2 \\div 9a^2b = 3ab$. <br> $9a^2b(1+3ab)$"
%}

{% include question_factorise.html
    id="fac_07"
    title="39"
    question_text="Fully factorise $16ab^2c-4a^2b^2c^3+12a^5b^2c^4$."
    correct_answer="4ab^2c(4-ac^2+3a^4c^3)"
    solution_text="The GCF for numbers is 4. For a, it's $a^1$. For b, it's $b^2$. For c, it's $c^1$. We take out $4ab^2c$. First term: $16ab^2c \\div 4ab^2c = 4$. Second term: $-4a^2b^2c^3 \\div 4ab^2c = -ac^2$. Third term: $12a^5b^2c^4 \\div 4ab^2c = 3a^4c^3$. <br> $4ab^2c(4-ac^2+3a^4c^3)$"
%}

## Using Factorising

{% include question_simplify_factor.html
    id="sim_fac_01"
    title="40"
    question_text="Use factorising to simplify $\frac{5x+20}{10}$."
    correct_answer="(x+4)/2"
    solution_text="Factorise the numerator by taking out a common factor of 5: $5(x+4)$. The expression is now $\frac{5(x+4)}{10}$. We can cancel the 5 and 10 to leave 1 and 2.<br><strong>Answer:</strong> $\frac{x+4}{2}$"
%}


{% include question_simplify_factor.html
    id="sim_fac_02"
    title="41"
    question_text="Use factorising to simplify $\\frac{12y-30}{2y-5}$."
    correct_answer="6"
    solution_text="Factorise the numerator by taking out a common factor of 6: $6(2y-5)$. The expression is now $\\frac{6(2y-5)}{2y-5}$. We can cancel the $(2y-5)$ terms.<br><strong>Answer:</strong> 6"
%}

{% include question_simplify_factor.html
    id="sim_fac_03"
    title="42"
    question_text="Use factorising to simplify $\\frac{8t+40}{6t+30}$."
    correct_answer="4/3"
    solution_text="Factorise the numerator: $8(t+5)$. Factorise the denominator: $6(t+5)$. The expression is now $\\frac{8(t+5)}{6(t+5)}$. We can cancel the $(t+5)$ terms, leaving $\\frac{8}{6}$.<br><strong>Answer:</strong> $\\frac{4}{3}$"
%}

{% include question_simplify_factor.html
    id="sim_fac_04"
    title="43"
    question_text="Use factorising to simplify $\\frac{8x^3-8x^2}{16x-16}$."
    correct_answer="(x^2) / 2"
    solution_text="Factorise the numerator: $8x^2(x-1)$. Factorise the denominator: $16(x-1)$. The expression is now $\\frac{8x^2(x-1)}{16(x-1)}$. We can cancel the $(x-1)$ terms and simplify $\\frac{8x^2}{16}$.<br><strong>Answer:</strong> $\\frac{x^2}{2}$"
%}


{% include question_simplify_factor.html
    id="sim_fac_05"
    title="44"
    question_text="Use factorising to simplify $\\frac{10a^2b}{a^2b-ab}$."
    correct_answer="(10a) / (a - 1)"
    solution_text="Factorise the denominator by taking out the common factor $ab$: $ab(a-1)$. The expression is now $\\frac{10a^2b}{ab(a-1)}$. We can cancel $a$ and $b$ from the top and bottom.<br><strong>Answer:</strong> $\\frac{10a}{a-1}$"
%}

## Algebraic Fractions

{% include question_algebra_fractions.html
    id="alg_frac_01"
    title="45"
    question_text="Simplify $\frac{x}{5}+\frac{2x}{5}$."
    correct_answer="(3x)/5"
    solution_text="The denominators are the same, so add the numerators: $x + 2x = 3x$.<br><strong>Answer:</strong> $\frac{3x}{5}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_02"
    title="46"
    question_text="Simplify $\frac{5}{x}+\frac{2}{x}$."
    correct_answer="7/x"
    solution_text="The denominators are the same, so add the numerators.<br><strong>Answer:</strong> $\frac{7}{x}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_03"
    title="47"
    question_text="Simplify $\frac{10}{x}-\frac{5}{2x}$."
    correct_answer="15/(2x)"
    solution_text="Common denominator is $2x$. $\frac{20}{2x} - \frac{5}{2x} = \frac{15}{2x}$.<br><strong>Answer:</strong> $\frac{15}{2x}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_04"
    title="48"
    question_text="Simplify $\frac{2}{x}+\frac{1}{y}$."
    correct_answer="(2y+x)/(xy)"
    solution_text="Common denominator is $xy$. $\frac{2y}{xy} + \frac{x}{xy} = \frac{2y+x}{xy}$.<br><strong>Answer:</strong> $\frac{2y+x}{xy}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_05"
    title="49"
    question_text="Simplify $\frac{2a}{b} \times \frac{3c}{5d}$."
    correct_answer="(6ac)/(5bd)"
    solution_text="Multiply across: $\frac{2a \times 3c}{b \times 5d} = \frac{6ac}{5bd}$.<br><strong>Answer:</strong> $\frac{6ac}{5bd}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_06"
    title="50"
    question_text="Simplify $\frac{5m}{2p} \times \frac{4m}{3k}$."
    correct_answer="(10m^2)/(3pk)"
    solution_text="Multiply numerators and denominators: $\frac{20m^2}{6pk}$. Simplify numbers: $\frac{10m^2}{3pk}$.<br><strong>Answer:</strong> $\frac{10m^2}{3pk}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_07"
    title="51"
    question_text="Simplify $\frac{8t}{5k} \times \frac{10k}{5t^2}$."
    correct_answer="16/(5t)"
    solution_text="Multiply to get $\frac{80tk}{25kt^2}$. Simplify numbers to $16/5$, cancel $k$, and reduce $t/t^2$ to $1/t$.<br><strong>Answer:</strong> $\frac{16}{5t}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_08"
    title="52"
    question_text="Simplify $\frac{8x}{3} \div \frac{2y}{5x}$."
    correct_answer="(20x^2)/(3y)"
    solution_text="Invert and multiply: $\frac{8x}{3} \times \frac{5x}{2y} = \frac{40x^2}{6y}$. Simplify to $\frac{20x^2}{3y}$.<br><strong>Answer:</strong> $\frac{20x^2}{3y}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_09"
    title="53"
    question_text="Simplify $\frac{x+1}{5} \div \frac{2x+2}{3}$."
    correct_answer="3/10"
    solution_text="Invert and multiply: $\frac{x+1}{5} \times \frac{3}{2(x+1)}$. Cancel $(x+1)$ to get $\frac{3}{10}$.<br><strong>Answer:</strong> $\frac{3}{10}$"
%}

{% include question_algebra_fractions.html
    id="alg_frac_10"
    title="54"
    question_text="Simplify $\frac{5}{x} \left ( \frac{x^2}{4}+ \frac{x}{5} \right )$."
    correct_answer="(5x+4)/4"
    solution_text="Multiply both terms by $\frac{5}{x}$: $\frac{5x^2}{4x} + \frac{5x}{5x} = \frac{5x}{4} + 1$.<br><strong>Answer:</strong> $\frac{5x}{4} + 1$"
%}

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>
