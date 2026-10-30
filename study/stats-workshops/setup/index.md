---
layout: stats
title: Software Setup
---

# Opening the Data File and Setting Up Variables

The file included for many of the workshops is a comma seperated variable (csv) text file. The software packages can open this type of file but they don't always correctly identify the type of data the variables hold (i.e. nominal, ordinal, interval/ratio types). This guide will take you through opening the file, setting the correct variable types, and saving the file in the software's native format.

Example data file:

<table aria-label="Description of the variables in the omni datafile">
      <thead>
                <tr><th>Variable</th><th>Explanation</th><th>Type</th></tr>
            </thead>
            <tbody>
                <tr><td>participant_id</td><td>Unique identifier for each student</td><td>ID</td></tr>
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


## Part 1 - Introduction to the Software

<button class="collapsible">jamovi Guide</button>
<div class="content" markdown="1">

**jamovi** is a statistical analysis program. It has:

- A spreadsheet like area for entering and showing variables and data
- An output window that shows statistical analysis and graphs
- A tabbed menu which offers a variety of analysis tools

As well as the pre-installed tools, additional tools can be installed using the **+ modules** button
                 
</div>

<button class="collapsible">R Studio Guide</button>
<div class="content" markdown="1">

**RStudio** is the software program we will use to write code, manage data, and perform statistical analyses. 

When you first open RStudio, the screen is divided into four main sections (called **panes**):

1. **Source / Script Pane (Top-Left):** This is your main workspace where you write, edit, and save your code instructions. 
2. **Console Pane (Bottom-Left):** This is where R actually runs your commands and shows your results or error messages.
3. **Environment Pane (Top-Right):** This shows a list of your loaded datasets and variables so you can see what data R currently has saved in its memory.
4. **Files, Plots & Packages Pane (Bottom-Right):** A handy window for browsing files on your computer, viewing graphs you create, and managing any extra add-on packages needed for your workshops.

</div>


## Part 2 - Opening the File

Some of the software packages can simply open the file while others need to use an import.

<button class="collapsible">jamovi Guide</button>
<div class="content" markdown="1">

1. Download the file and note where it is located on your computer
2. In jamovi, click the hamburger menu `☰`
3. Click the **Open** button
4. Click **Browse**, navigate to the downloaded csv file and open it

You should now see the data in the **Data** tab, with variables that match those from above.
                 
</div>

<button class="collapsible">R Studio Guide</button>
<div class="content" markdown="1">

There are two ways to open a CSV file in RStudio.

#### Method 1 - Using the Import Dataset Tool

1. Open RStudio.
2. Find the Environment panel and click **Import Dataset**.
3. Select **From Text (readr)...**.
4. Browse to your CSV file and open it.

A preview window will appear.

Before clicking Import, check the following:

- **Name**: This is the name RStudio will give the dataset. Choose something meaningful, such as `omni_data`.
- **First Row as Column Names**: This should be selected if the first row of the file contains variable names such as `participant_id` and `study_hours_per_week`.
- **Delimiter**: This tells RStudio how the values are separated. For a CSV file, this should be a comma.
- **Preview Window**: Check that the variable names appear across the top of the table and that the data is arranged into separate columns.

If the preview looks correct, click **Import**.

The dataset will appear in the Environment panel and is ready to use.

#### Method 2 - Using an R Script

1. Open RStudio.
2. Select **File → New File → R Script**.
3. Type the command below, replacing the file path with the location of your own CSV file.

omni_data <- read.csv("C:/Users/username/Downloads/omni_data.csv", header = TRUE)

Explanation:

- `omni_data` is the name that will be given to the dataset.
- `<-` stores the imported data in the dataset.
- `read.csv()` tells R to open a CSV file.
- `"C:/Users/username/Downloads/omni_data.csv"` is the location of the file.
- `header = TRUE` tells R that the first row contains variable names rather than data values.

4. Press **Ctrl + Enter** (Windows) or **Cmd + Enter** (Mac) to run the command.

The dataset will appear in the Environment panel and is ready to use.

</div>

## Part 3 - Setting up the Variable Types

Some of the software packages will try and guess the type of data based on the values in the variables. They don't always get it right.

This next section will lead you through setting up the variable types.

<button class="collapsible">jamovi Guide</button>
<div class="content" markdown="1">

In jamovi, you will need to set the **Measure Type**. There are 4 options: **Nominal**, **Ordinal**, **Continous**, **ID**.

**Continous** is jamovi's word for **interval/ratio** type data, called **scale** in the table above.

1. Click on the **Data** tab at the top of jamovi
2. Click the **Setup** button
3. In the data window, click somewhere in the first column, the `participant_id` variable
4. Set the measure type to **ID**
5. Move to the next variable, by either clicking in the data window on another variable or by clicking the right chevron in the top setup menu
6. Change each of the measure types so that they match that of the table
                 
</div>

<button class="collapsible">R Studio Guide</button>
<div class="content" markdown="1">

When a CSV file is imported, RStudio automatically decides what type of data is stored in each variable. Before carrying out any analysis, it is important to check these data types and make any necessary changes.

1. Open a new script by selecting **File → New File → R Script**.

2. Enter the following command, replacing `omni_data` with the name you gave your dataset during import.

str(omni_data)

3. Run the command by pressing **Ctrl + Enter** (Windows) or **Cmd + Enter** (Mac).

The `str()` function displays the structure of a dataset. For each variable, it shows:

- The variable name.
- The type of data assigned by R.
- Example values from the variable.

Common data types include:

- `num` for decimal numbers.
- `int` for whole numbers.
- `chr` for text.
- `factor` for categories.

For this workshop:

- Score variables should normally be stored as numbers (`num` or `int`).
- Variables containing categories or labels should normally be stored as factors (`factor`).
- Participant identifiers should normally be stored as text (`chr`) or factors (`factor`).

If a variable has been assigned the wrong data type, it can be converted.

To convert a variable into a factor, use:

omni_data$preferred_study_method <- as.factor(omni_data$preferred_study_method)

In this command:

- `omni_data` is the name of the dataset.
- `$preferred_study_method` identifies the variable to be changed.
- `as.factor()` converts the variable into categories.
- `<-` saves the updated variable back into the dataset.

To convert a variable into a numeric variable, use:

omni_data$study_hours_per_week <- as.numeric(omni_data$study_hours_per_week)

In this command:

- `as.numeric()` converts values into numbers so they can be used in calculations and statistical tests.

To convert a variable into a text variable, use:

omni_data$participant_id <- as.character(omni_data$participant_id)

In this command:

- `as.character()` converts values into text.

After making any changes, run:

str(omni_data)

again.

This will display the updated data types and confirm that the changes have been applied.

Once the required variables have been assigned the correct data types, the dataset is ready for analysis.

</div>

## Part 4 - Saving the File

To preserve the work you have done, you should save the file (or environment in R Studio).

<button class="collapsible">jamovi Guide</button>
<div class="content" markdown="1">

1. Click the hamburger menu `☰`
2. Choose **Save As**
3. Browse to a suitable location on your computer
4. Give the file a name and save

The native format for jamovi files is **omv**. This format saves both the data and any output you generate in your analyses.
                 
</div>


<button class="collapsible">R Studio Guide</button>
<div class="content" markdown="1">

To avoid losing your work, you should save both your script and your workspace before closing RStudio.

#### Saving Your Script

Any commands that you have written should be saved in a script file.

1. Click **File**.
2. Select **Save** or **Save As...**.
3. Choose a location on your computer.
4. Enter a meaningful file name.
5. Click **Save**.

Scripts are saved with the `.R` extension.

Saving a script allows you to run the same analysis again in the future without having to retype the commands.

#### Saving Your Workspace

The workspace contains the datasets and variables currently loaded into R.

1. Click **File**.
2. Select **Save Workspace As...**.
3. Choose a location on your computer.
4. Enter a file name.
5. Click **Save**.

Workspace files are saved with the `.RData` extension.

Saving the workspace allows you to reopen RStudio later and continue working with the same datasets and variables without having to import the data again.

#### Which File Should I Save?

The script and workspace serve different purposes:

- The script (`.R`) contains the commands used during your analysis.
- The workspace (`.RData`) contains the datasets and variables currently loaded into R.

For most workshop activities, save both files before closing RStudio.

This allows you to reopen the script to see the commands you used and load the workspace to continue working with the same data.

</div>

<script src="{{ '/assets/js/collapsible.js' | relative_url }}"></script>
