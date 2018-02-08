var width = 400,
  height = 400,
  radius = Math.min(width, height) / 2,
  innerRadius = 0.3 * radius;

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function(d) {
    return d.width;
  });

var tip = d3
  .tip()
  .attr("class", "d3-tip")
  .offset([0, 0])
  .html(function(d) {
    return (        
      d.data.label +
      ": <span style='color:orangered'>" +
      d.data.score +
      "</span>"
    );
  });

var arc = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(function(d) {
    return (radius - innerRadius) * (d.data.score / 1000.0) + innerRadius;
  });

var outlineArc = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(radius);

var svg = d3
  .select("#chart1")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.call(tip);

d3.csv("aster_data.csv", function(error, data) {
  data.forEach(function(d) {
    d.id = d.id;
    d.order = +d.order;
    d.color = d.color;
    d.weight = +d.weight;
    d.score = +d.score;
    d.width = +d.weight;
    d.label = d.label;
  });

  // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

  var path = svg
    .selectAll(".solidArc")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", function(d) {
      return d.data.color;
    })
    .attr("class", "solidArc")
    .attr("stroke", "gray")
    .attr("d", arc)
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

  var outerPath = svg
    .selectAll(".outlineArc")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("class", "outlineArc")
    .attr("d", outlineArc);

});


var svg2 = d3
  .select("#chart2")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg2.call(tip);

d3.csv("aster_data2.csv", function(error, data) {
  data.forEach(function(d) {
    d.id = d.id;
    d.order = +d.order;
    d.color = d.color;
    d.weight = +d.weight;
    d.score = +d.score;
    d.width = +d.weight;
    d.label = d.label;
  });

  // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

  var path = svg2
    .selectAll(".solidArc")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", function(d) {
      return d.data.color;
    })
    .attr("class", "solidArc")
    .attr("stroke", "gray")
    .attr("d", arc)
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

  var outerPath = svg2
    .selectAll(".outlineArc")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("class", "outlineArc")
    .attr("d", outlineArc});
