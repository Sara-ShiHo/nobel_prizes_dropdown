// here are all the values that go into the dropdown menu
prizes = ['chemistry', 'medicine', 'physics', 'economics', 'literature', 'peace']

// add them to the dropdown
var selection = d3.select("#selPrize")
prizes.forEach(function (name) {
  selection.append("option")
    .text(name)
    .attr("value", name)
})

// run the function on the default value
filterData('chemistry')


// the function that runs "onchange"
function filterData(value){
  d3.json("http://api.nobelprize.org/v1/prize.json").then(data => {
    var filteredData = data.prizes.filter(record => record['category'] == value);
    console.log(filteredData);


    // OPTIONAL: display all the resuls in paragraphs
    textArea = d3.select("#textArea")

    // clear the existing display
    textArea.html("")

    // insert information
    filteredData.forEach(function (record) {
      
      // append the year
      textArea.append("h4")
          .text(record.year)

      // append the laureates, if any
      if (record.laureates) {
        record.laureates.forEach(function (winner) {
          textArea.append("p")
          .text(`${winner.firstname} ${winner.surname}: ${winner.motivation}`)
        })
      }

      // else, append an explanation
      else {
        textArea.append("p")
          .text(record.overallMotivation)
      }
    })
  })
}
