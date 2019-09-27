// @TODO: YOUR CODE HERE!
//function makeResponsive() {

// if the SVG area isn't empty when the browser loads, remove it
// and replace it with a resized version of the chart


// SVG wrapper dimensions are determined by the current width
// and height of the browser window.
var svgWidth = 900;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var svg = d3.select("body")
  .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bubble")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("assets/data/data.csv", function(data) {
  //Add X axis

  var y = d3.scaleLinear()
    .domain([0, (d3.max(data, d => d.obesityHigh)) + 10])
    .range([svgHeight, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  var x = d3.scaleLinear()
    .domain([0, (d3.max(data, d => d.poverty)) + 10])
    .range([0, svgWidth]);
  svg.append("g")
    .call(d3.axisBottom(x));

  svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", 0)
    .attr("y", -20)
    .text("Poverty")
    .attr("text-anchor", "start")

  svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", svgWidth)
    .attr("y", svgHeight + 50)
    .text("Obesity (High)")

  svg.append("g")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", function(d) {return "bubbles" + d.state})
      .attr("cx", function(d) {return x(d.poverty);})
      .attr("cy", function(d) {return y(d.obesityHigh);})
      .style("fill", function(d) {return myColor(d.state); })






});
      //  }
