# Simple Front-end Demo

This introductory web project showcases front-end development concepts using HTML, CSS, and JavaScript.

## Overview

The project consists of three main files:

1. **HTML (index.html)** - The structure of the webpage.
2. **CSS (styles.css)** - The styling that makes the webpage visually appealing.
3. **JavaScript (scripts.js)** - The functionality that allows interaction with the webpage.

### 1. HTML Structure

The HTML file provides the basic layout of the application. It includes:

- A title displayed as an `<h1>` heading.
- Two buttons:
  - **Get data**: Fetches and displays data from a public API.
  - **Clear**: Removes any displayed data.
- A container (`div`) where the fetched data will be shown.

### 2. CSS Styling

The CSS file styles the webpage to ensure it is visually organized. Key features include:

- A flexbox layout to center elements.
- Custom font settings for the title and event texts.
- A bordered container for displaying event data.

### 3. JavaScript Functionality

The JavaScript file adds interactivity to the webpage:

- The `getData` function fetches bank holiday data from the UK government API and displays the title and date of events in the content container.
- The `clearData` function removes all displayed data when the clear button is clicked.
- The maximum number of events displayed is capped at 12 for better readability.

## Getting Started

To run this project:

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.
3. Click "Get data" to fetch bank holiday events, and use "Clear" to reset the view.
