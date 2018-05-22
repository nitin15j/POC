var margin = { top: 20, right: 20, bottom: 100, left: 100 };

var width = 600 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

d3.json("buildings.json").then(function(data) {
  console.log(data);
  data.forEach(d => {
    d.height = +d.height;
  });

  //Linear Scale for Height

  var svg = d3
    .select("#chart-area")
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("border", "2px solid green");

  var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var scaleY = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.height)])
    .range([0, height]);

  var scaleX = d3
    .scaleBand()
    .domain(data.map(d => d.name))
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.3);

  var bars = g
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => {
      return scaleX(d.name);
    })
    .attr("y", function(d) {
      return scaleY(d.height);
    })
    .attr("width", scaleX.bandwidth)
    .attr("height", (d, i) => {
      return height - scaleY(d.height);
    })
    .attr("fill", "grey");
});
