---
layout: stats
title: Statistics Software Guides
---

# Statistics Software Guides

Here you will find a series of guides for using software for statistical analyses. The guides available for jamovi, R Studio, SPSS, and Stata.

Many of the workshops will make use of the following dataset, which can be downloaded [here](omni.csv), which relates to a sample of students from a fictional educational environment.

<button class="collapsible">File Information</button>
<div class="content" markdown="1">

<table aria-label="Description of the variables in the omni datafile">
      <thead>
                <tr><th>Variable</th><th>Explanation</th><th>Type</th></tr>
            </thead>
            <tbody>
                <tr><td>participant_id</td><td>Unique identifier for each student</td><td>Nominal</td></tr>
                <tr><td>study_hours_per_week</td><td>Average number of hours the student studies per week</td><td>Scale</td></tr>
                <tr><td>note_taking_frequency</td><td>Frequency with which the student takes notes during study sessions</td><td>Ordinal</td></tr>
                <tr><td>preferred_study_method</td><td>Student's preferred study method (e.g., Summarising, Practice Tests, Flashcards)</td><td>Nominal</td></tr>
                <tr><td>used_study_support_services</td><td>Indicates whether the student used academic support services</td><td>Nominal</td></tr>
                <tr><td>final_exam_score</td><td>Score obtained by the student in the final exam</td><td>Scale</td></tr>
                <tr><td>quiz_score_pre</td><td>Score on the quiz before the study intervention</td><td>Scale</td></tr>
                <tr><td>quiz_score_post</td><td>Score on the quiz after the study intervention</td><td>Scale</td></tr>
                <tr><td>assignment_score</td><td>Average score across all assignments</td><td>Scale</td></tr>
                <tr><td>class_participation_score</td><td>Score reflecting participation in class activities</td><td>Scale</td></tr>
                <tr><td>mood_day1</td><td>Self-reported mood on day 1</td><td>Ordinal</td></tr>
                <tr><td>mood_day2</td><td>Self-reported mood on day 2</td><td>Ordinal</td></tr>
                <tr><td>mood_day3</td><td>Self-reported mood on day 3</td><td>Ordinal</td></tr>
                <tr><td>anxiety_score_pre</td><td>Anxiety level before the study intervention</td><td>Scale</td></tr>
                <tr><td>anxiety_score_post</td><td>Anxiety level after the study intervention</td><td>Scale</td></tr>
                <tr><td>stress_level</td><td>Overall stress level reported by the student</td><td>Ordinal</td></tr>
                <tr><td>sleep_quality</td><td>Self-reported quality of sleep</td><td>Ordinal</td></tr>
                <tr><td>attended_peer_study_group</td><td>Indicates if the student attended peer-led study groups</td><td>Nominal</td></tr>
                <tr><td>submitted_all_assignments</td><td>Indicates if the student submitted all required assignments</td><td>Nominal</td></tr>
                <tr><td>satisfaction_q1</td><td>Response to a satisfaction survey question</td><td>Ordinal</td></tr>
                <tr><td>satisfaction_q2</td><td>Response to a satisfaction survey question</td><td>Ordinal</td></tr>
                <tr><td>satisfaction_q3</td><td>Response to a satisfaction survey question</td><td>Ordinal</td></tr>
                <tr><td>satisfaction_q4</td><td>Response to a satisfaction survey question</td><td>Ordinal</td></tr>
                <tr><td>satisfaction_q5</td><td>Response to a satisfaction survey question</td><td>Ordinal</td></tr>
                <tr><td>study_session_group</td><td>Group assigned for study sessions (e.g., High, Low, Medium)</td><td>Nominal</td></tr>
                <tr><td>study_session_score</td><td>Score or evaluation of the study session</td><td>Scale</td></tr>
            </tbody>
        </table>

</div>

## The Guides

<div class="card-menu">

    <a href="{{ "/study/stats-workshops/setup" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Loading and Setting Up Data</h3>
                <p>How to load data into the software and set the variable types</p>
            </div>
        </div>
    </a>
    
    <a href="{{ "/study/stats-workshops/descriptive" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Descriptive Statistics</h3>
                <p>Generating descriptive summary statistics and charts</p>
            </div>
        </div>
    </a>

    <a href="{{ "/study/stats-workshops/normality" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Testing Normality</h3>
                <p>Determining whether interval/ratio data are normally distributed or not</p>
            </div>
        </div>
    </a>

    <a href="{{ "/study/stats-workshops/reliability" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Reliability</h3>
                <p>Testing the reliability of scales in measuring a construct, using Cronbach's alpha</p>
            </div>
        </div>
    </a>

    <a href="{{ "/study/stats-workshops/onesample" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>One Sample Tests</h3>
                <p>Testing whether a sample differs from an hypothesised population value</p>
            </div>
        </div>
    </a>

    <a href="{{ "/study/stats-workshops/between2" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Tests for Difference (2 Groups)</h3>
                <p>Testing for a difference on a measure between two groups, using the independent-samples t-test or the Mann-Whitney U test</p>
            </div>
        </div>
    </a>

    <a href="{{ "/study/stats-workshops/between2plus" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Tests for Difference (2 or More Groups)</h3>
                <p>Testing for a difference on a measure between two or more groups, using one-way ANOVA or the Kruskal-Wallis test</p>
            </div>
        </div>
    </a>

    <a href="{{ "/study/stats-workshops/within2" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Within Groups Tests for Difference (2 Measures)</h3>
                <p>Testing for a difference within two different measures, using paired-samples t-test or the Wilcoxon test</p>
            </div>
        </div>
    </a>

    <a href="{{ "/study/stats-workshops/within2plus" | relative_url }}" class="card">
        <div class="card-content">
            <div class="card-text">
                <h3>Within Groups Tests for Difference (2 or More Measures)</h3>
                <p>Testing for a difference within two or more measures, using within-groups ANOVA or the Friedmann test</p>
            </div>
        </div>
    </a>
    

</div>



<script src="{{ '/assets/js/collapsible.js' | relative_url }}"></script>
