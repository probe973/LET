---
layout: eco5007a
title: Workshop Optimisation
---

<script src="https://unpkg.com/mathlive"></script>
<script src="https://unpkg.com/@cortex-js/compute-engine"></script>

# One-Variable Optimisation

## Differentiation Practice

For each of the following functions below, find the first and second derivatives.

{% include question_rearrange.html
    id="eco5007aw5q1a"
    title="1a"
    question_text="$$y = 5x^3 + 2x^2 - 8x + 3$$

Find $\frac{\mathrm{d}y}{\mathrm{d}x}$"
    correct_answer="15x^2+4x-8"
    var_label="\frac{\mathrm{d}y}{\mathrm{d}x}="
    solution_text="Using the power rule for differentiation:

$$\frac{\mathrm{d}y}{\mathrm{d}x} = 3 \times 5x^2 + 2 \times 2x^1 - 8 + 0 = 15x^2+4x-8$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q1b"
    title="1b"
    question_text="$$y = 5x^3 + 2x^2 - 8x + 3$$

Find $\frac{\mathrm{d}^2y}{\mathrm{d}x^2}$"
    correct_answer="30x+4"
    var_label="\frac{\mathrm{d}^2y}{\mathrm{d}x^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}y}{\mathrm{d}x}$:

$$\frac{\mathrm{d}y}{\mathrm{d}x}=15x^2+4x-8$$

$$\frac{\mathrm{d}^2y}{\mathrm{d}x^2} = 2 \times 15x^1 + 4 - 0 = 30x+4$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q2a"
    title="2a"
    question_text="$$m = 4x - 3 + \frac{2}{x} - \frac{4}{x^2}$$

Find $\frac{\mathrm{d}m}{\mathrm{d}x}$"
    correct_answer="4 - 2x^{-2} + 8x^{-3}"
    var_label="\frac{\mathrm{d}m}{\mathrm{d}x}="
    solution_text="Write in power form:

$$ m = 4x - 3 + 2x^{-1} - 4x^{-2} $$

Using the power rule for differentiation:

$$\frac{\mathrm{d}m}{\mathrm{d}x} = 4 - 0 + (-1) \times 2x^{-2} - (-2) \times 4x^{-3} = 4 - 2x^{-2} + 8x^{-3} = 4 - \frac{2}{x^2} + \frac{8}{x^3}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q2b"
    title="2b"
    question_text="$$m = 4x - 3 + \frac{2}{x} - \frac{4}{x^2}$$

Find $\frac{\mathrm{d}^2m}{\mathrm{d}x^2}$"
    correct_answer="4x^{-3} - 24x^{-4}"
    var_label="\frac{\mathrm{d}^2m}{\mathrm{d}x^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}m}{\mathrm{d}x}$:

$$\frac{\mathrm{d}m}{\mathrm{d}x}=4 - 2x^{-2} + 8x^{-3}$$

$$\frac{\mathrm{d}^2m}{\mathrm{d}x^2} = 0 - (-2) \times 2x^{-3} + (-3) \times 8x^{-4} = 4x^{-3} - 24x^{-4} = \frac{4}{x^3} - \frac{24}{x^4}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q3a"
    title="3a"
    question_text="$$f(t) = 24 + 4\sqrt{t}$$

Find $f'(t)$"
    correct_answer="2t^{-1/2}"
    var_label="f'(t)="
    solution_text="Write in power form:

$$ f(t) = 24 + 4t^{\frac{1}{2}}$$

Using the power rule for differentiation:

$$f'(t) = 0 + \frac{1}{2} \times 4t^{-\frac{1}{2}} = 2t^{-\frac{1}{2}} = \frac{2}{\sqrt{t}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q3b"
    title="3b"
    question_text="$$f(t) = 24 + 4\sqrt{t}$$

Find $f^{\prime \prime}(t)$"
    correct_answer="-t^{-3/2}"
    var_label="f^{\prime \prime}(t) = "
    solution_text="Using the power rule for differentiation on $f'(t)$:

$$f'(t) = 2t^{-\frac{1}{2}}$$

$$ f^{\prime \prime}(t) = -\frac{1}{2} \times 2t^{-\frac{3}{2}} = -t^{-\frac{3}{2}} = -\frac{1}{t^{\frac{3}{2}}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q4a"
    title="4a"
    question_text="$$P = t^3(5t^3 - 4t^{-\frac{3}{2}})$$

Find $\frac{\mathrm{d}P}{\mathrm{d}t}$"
    correct_answer="30t^5 - 6t^{1/2}"
    var_label="\frac{\mathrm{d}P}{\mathrm{d}t}="
    solution_text="Expand the brackets:

$$ P = 5t^6 - 4t^{3/2} $$

Using the power rule for differentiation:

$$\frac{\mathrm{d}P}{\mathrm{d}t} = 6 \times 5t^{5} - \frac{3}{2} \times 4t^{\frac{1}{2}} = 30t^5 - 6t^{\frac{1}{2}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q4b"
    title="4b"
    question_text="$$P = t^3(5t^3 - 4t^{-\frac{3}{2}})$$

Find $\frac{\mathrm{d}^2P}{\mathrm{d}t^2}$"
    correct_answer="150t^4 - 3t^{-1/2}"
    var_label="\frac{\mathrm{d}^2P}{\mathrm{d}t^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}P}{\mathrm{d}t}$:

$$\frac{\mathrm{d}P}{\mathrm{d}t}= 30t^5 - 6t^{\frac{1}{2}}$$

$$\frac{\mathrm{d}^2P}{\mathrm{d}t^2} = 5 \times 30t^4 - \frac{1}{2} \times 6t^{-\frac{1}{2}} = 150t^4 - 3t^{-\frac{1}{2}} = 150t^4 - \frac{3}{t^{\frac{1}{2}}}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q5a"
    title="5a"
    question_text="$$g(x) = 3x^5 - 4x^2 + \frac{7}{x}$$

Find $\frac{\mathrm{d}g}{\mathrm{d}x}$"
    correct_answer="15x^4 - 8x - 7x^{-2}"
    var_label="\frac{\mathrm{d}g}{\mathrm{d}x}="
    solution_text="Write as powers:

$$ g(x) = 3x^5 - 4x^2 + 7x^{-1}$$

Using the power rule for differentiation:

$$\frac{\mathrm{d}g}{\mathrm{d}x} = 15x^4 - 8x - 7x^{-2} = 15x^4 - 8x - \frac{7}{x^2}$$"
%}

{% include question_rearrange.html
    id="eco5007aw5q5b"
    title="5b"
    question_text="$$g(x) = 3x^5 - 4x^2 + \frac{7}{x}$$

Find $\frac{\mathrm{d}^2g}{\mathrm{d}x^2}$"
    correct_answer="60x^3 - 8 + 14x^{-3}"
    var_label="\frac{\mathrm{d}^2g}{\mathrm{d}x^2}="
    solution_text="Using the power rule for differentiation on $\frac{\mathrm{d}g}{\mathrm{d}x}$:

$$\frac{\mathrm{d}g}{\mathrm{d}x}= 15x^4 - 8x - 7x^{-2}$$

$$\frac{\mathrm{d}^2g}{\mathrm{d}x^2} = 60x^3 - 8 +14x^{-3} = 60x^3 - 8 + \frac{14}{x^3}$$"
%}
