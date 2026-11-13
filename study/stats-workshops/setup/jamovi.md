---
layout: stats
title: Software Setup - Jamovi
interactive: 0
mj: 0
---

# Setting up Jamovi

The file included for many of the workshops is a comma seperated variable (csv) text file. The software packages can open this type of file but they don't always correctly identify the type of data the variables hold (i.e. nominal, ordinal, interval/ratio types). This guide will take you through opening the file, setting the correct variable types, and saving the file in the software's native format.

{% include_relative datafile.html %}

---

## Part 1 - Introduction to the Software

**jamovi** is a statistical analysis program. It has:

- A spreadsheet like area for entering and showing variables and data
- An output window that shows statistical analysis and graphs
- A tabbed menu which offers a variety of analysis tools

As well as the pre-installed tools, additional tools can be installed using the **+ modules** button

---

## Part 2 - Opening the File

Some of the software packages can simply open the file while others need to use an import.

1. Download the file and note where it is located on your computer
2. In jamovi, click the hamburger menu `☰`
3. Click the **Open** button
4. Click **Browse**, navigate to the downloaded csv file and open it

You should now see the data in the **Data** tab, with variables that match those from above.

---

## Part 3 - Setting up the Variable Types

Some of the software packages will try and guess the type of data based on the values in the variables. They don't always get it right.

This next section will lead you through setting up the variable types.

In jamovi, you will need to set the **Measure Type**. There are 4 options: **Nominal**, **Ordinal**, **Continous**, **ID**.

**Continous** is jamovi's word for **interval/ratio** type data, called **scale** in the table above.

1. Click on the **Data** tab at the top of jamovi
2. Click the **Setup** button
3. In the data window, click somewhere in the first column, the `participant_id` variable
4. Set the measure type to **ID**
5. Move to the next variable, by either clicking in the data window on another variable or by clicking the right chevron in the top setup menu
6. Change each of the measure types so that they match that of the table

---

## Part 4 - Saving the File

To preserve the work you have done, you should save the file (or environment in R Studio).

1. Click the hamburger menu `☰`
2. Choose **Save As**
3. Browse to a suitable location on your computer
4. Give the file a name and save

The native format for jamovi files is **omv**. This format saves both the data and any output you generate in your analyses.
