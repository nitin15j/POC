var margin = { top: 10, right: 10, bottom: 100, left: 80 };

var width = 600 - margin.left - margin.right; // chart's width
var height = 600 - margin.top - margin.bottom; // charts height

var svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .style("border", "1px solid navy");

d3
  .json("buildings.json")
  .then(function(data) {
    console.log(data);
    data.forEach(d => {
      d.height = +d.height;
    });

    var g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Linear Scale for height of the building
    var scaleY = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.height)])
      .range([height, 0]);
    console.log(scaleY(500));
    // Band Scale

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
      .attr("fill", function(d) {
        if (d.name === "Burj Khalifa") {
          return "green";
        } else {
          return "lightgreen";
        }
      });
  })
  .catch(err => {
    console.log(err); // change file name and check
  });
