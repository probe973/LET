window.w03Questions = [
    {
        coreType: "text",
        content: "<h2>Question 1</h2><p>For the straight line $y=2x+5$</p>"
    },
    {
        label: `1a`,
        coreType: "algebra",
        goal: "solve",
        question: "Write down the gradient.",
        check_val: `2`,
        answer: `2`,
        solution: `The equation is in the form $y=mx+c$, where $m=2$.`
    },
    {
        label: "1b",
        coreType: "algebra",
        goal: "solve",
        question: "Write down the $y$-cordinate of the point where the line crosses the $y$-axis, the $y$-intercept.  This the point where $x=0$",
        check_val: "5",
        answer: "5",
        solution: "Set $x=0$: $y = 2(0) + 5 = 5$"
    },
    {
        label: "1c",
        coreType: "algebra",
        goal: "solve",
        question: "Write down the point where the line crosses the $x$-axis (the x-intercept), by substituting $y=0$ and solving for $x$",
        check_val: "-2.5",
        answer: `$-\\frac{5}{2}$ or $-2.5$`,
        solution: `Set $y=0$: $0 = 2x + 5 \\implies -5 = 2x \\implies x = -2.5$.`
    },
    
    {
        label: "1d",
        coreType: "graph-choice",
        question: "Which of the following sketches represents the line $y=2x+5$?",
        check_val: "A", 
        options: [
        { label: "A", x: -2.5, y: 5 },  // Correct: crosses at y=5, x=-2.5
        { label: "B", x: 2.5, y: 5 },   // Incorrect x-intercept
        { label: "C", x: -2.5, y: -5 }, // Incorrect y-intercept
        { label: "D", x: 5, y: -2.5 }
        ],
        solution: "The line crosses the y-axis at (0, 5) and the x-axis at (-2.5, 0)."
    },
    
    {
    label: "2i",
    coreType: "line-analysis",
    question: "For the function $2y = 6x + 8$:",
    subQuestions: [
        { label: "a", type: "math", prompt: "Rearrange to make $y$ the subject", check: "3x+4" },
        { label: "b", type: "choice", prompt: "Is it a line?", choices: ["Yes", "No"], check: "Yes", isTrigger: true, triggerValue: "Yes" },
        { label: "c", type: "math", prompt: "Gradient", check: "3", conditional: true },
        { label: "d", type: "math", prompt: "y-intercept", check: "4", conditional: true },
        { label: "e", type: "math", prompt: "x-intercept", check: "\\frac{-4}{3}", conditional: true },
        { label: "f", type: "choice", prompt: "Correct sketch", choices: ["A", "B", "C"], check: "A", conditional: true }
    ],
    graph_options: [ {label: "A", x: -1.33, y: 4}, {label: "B", x: 4, y: -1.33}, {label: "C", x: 1, y: 1} ],
    answer: "a) $y=3x+4$, b) Yes, c) m=3, y=4, x=-1.33, d) Graph A",
    solution: "Divide by 2... [Steps]"
    }

    

];
