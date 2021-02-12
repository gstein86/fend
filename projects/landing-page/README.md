# Landing Page Project

## Table of Contents

* [Description](#description)
* [Functions](#functions)
  * [Dynamic generation of a navigation bar](#Dynamic-generation-of-a-navigation-bar)
  * [Scroll to section on navigation item click](#Scroll-to_section-on-navigation-item-click)
  * [Visualize the currently focused section](#Visualize-the-currently-focused-section)
* [Open](#open)

## Description
This project is based on the *Landing Page* starter code provided by Udacity for the *Front End Web Developer Nanodegree Program*.
Technologies used: HTML, CSS and Javascript.

To convert the static landing page to an interactive one, three main functions were added to the starter code.
These functions were added to the `js/app.js` file, which is referenced as the last element of the body of the `index.html` file.

## Functions
  ### Dynamic generation of a navigation bar
  The navigation bar is generated dynamically by adding a list item to the navigation bar list element for each section element of the `index.html` file.
  Each list item holds a reference to the id of its corresponding section.

  ### Scroll to section on navigation item click
  To be able to scroll to the desired section by clicking on an navigation item, an event listener is added to the navigation bar. When a click on a navigation item is registered, the window scrolls to the connected section element by its referenced id.

  ### Visualize the currently focused section
  Finally a scroll event listener is added to visualize the currently focused section by applying 'active' styles to the section element and its corresponding navigation item. The currently focused section is identified by a helper method which calculates its position on the page in relation to its position in the viewport.

## Open
Clone the repo or extract the .zip file and open the `index.html` file in your favorite browser.

## Author
G. Stein, 2021