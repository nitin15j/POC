/*d3.select("body").append("p");

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50);

var circle = svg
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple");
*/

/* reading data from array and creating circles
var labels = ["Bangalore", "New Delhi", "Chennai", "Pune"];

d3
  .select("body")
  .selectAll("p")
  .data(labels)
  .enter()
  .append("p")
  .text((data, index) => {
    return "i = " + index + " , data = " + data;
  });
*/

/*var circleRadius = [10, 30, 60, 100, 130];
var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

var circles = svg
  .selectAll("circle")
  .data(circleRadius)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => d * 2)
  .attr("cy", 100)
  .attr("r", (d, i) => d / 4)
  .attr("fill", "grey");
*/

/* creating bars with labels on top if each rect bar
var rectWidth = [50, 100, 150];

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

var rects = svg
  .selectAll("rect")
  .data(rectWidth)
  .enter()
  .append("rect")
  .attr("x", 100)
  .attr("y", (d, i) => d)
  .attr("width", (d, i) => d)
  .attr("height", 40)
  .attr("fill", "grey")
  .append("text")
  .text((data, index) => {
    return "i = " + index + " , data = " + data;
  });
*/

var data = [
  {
    name: "Burj Khalifa",
    height: "350"
  },
  {
    name: "Shanghai Tower",
    height: "263.34"
  },
  {
    name: "Lotte World Tower",
    height: "230"
  }
];

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

var group = svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => d.height)
  .attr("y", 100)
  .attr("width", 20)
  .attr("height", (d, i) => d.height)
  .attr("fill", "grey")
  .append("text")
  .text((data, index) => {
    return "i = " + index + " , data = " + data;
  });
