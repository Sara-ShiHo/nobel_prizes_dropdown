# Nobel Prizes Dropdown

A very simple example of creating a filter and dynamically populating a website with new data using only (vanilla) JavaScript, D3.js, and HTML.

See here for result:
http://sara-shiho.github.io/nobel_prizes_dropdown

See here for data:
http://api.nobelprize.org/v1/prize.json

## Explanation

The first part of `logic.js` takes each nobel prize category and uses D3 to insert the categories as `option` elements into the dropdown. Alternatively, this could be done without JavaScript by hardcoding the `option` elements directly into the html.

There is an event listener in the `select` element in the html. When triggered, the function `filterData()` is called using the subject selected from the dropdown menu as a parameter. `filterData()` filters the data from the nobel prize API on the subject selected, clears the existing data from the webpage, and displays the annual winner information, again using D3.

`filterData("chemistry")` is called so that when the page is initially loaded, the chemistry winners are displayed by default.