requirejs.config({
    enforceDefine: false,
    paths: {
        d3: [
            //'//d3js.org/d3.v3.min',
            '../lib/d3.min'
        ]
    }
});

require(['d3'], function (d3) {

/* ============================== */
/* http://bost.ocks.org/mike/bar/ */
/* ============================== */
  
  var data = [4, 8, 15, 16, 23, 42];
  var scaleto = d3.scale.linear()
                  .domain([0, d3.max(data)])
                  .range([0, 420]);

  d3.select('.bar-chart')
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .style('width', function(el) {return scaleto(el) + 'px'})
    .text(function(el) {return el;})

  
/* ================================ */
/* http://bost.ocks.org/mike/bar/2/ */
/* ================================ */

  var width = 420,
      barHeight = 24,
      pad = 2;

  var chart = d3.select('.bar-chart-2')
                .attr('width', width)
                .attr('height', (barHeight + pad) * data.length);

  // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
  var bar = chart.selectAll('g')
                 .data(data)
                 .enter().append('g')
                 .attr('transform', function(el, i) {return 'translate(0,' + i * (barHeight + pad) + ')';});

      bar.append('rect')
         .attr('width', scaleto)
         .attr('height', barHeight - 1);

      bar.append('text')
         .attr('x', function(el) {return scaleto(el) - 10})
         .attr('y', barHeight / 2)
         .attr('dy', '.3em')
         .text(function(el) {return el});

  // External file loading
  var scaletoEXT = d3.scale.linear()
                     .range([0, width]);

  var chartExt = d3.select('.bar-chart-2-ext')
                   .attr('width', width);

  d3.tsv('../dummy/MOCK_DATA.txt', type, function(error, extdata)
  {
    scaletoEXT.domain([0, d3.max(extdata, function(el) {return el.value;})]);
    chartExt.attr('height', (barHeight + pad) * extdata.length);

    var barExt = chartExt.selectAll('g')
                         .data(extdata)
                         .enter()
                         .append('g')
                         .attr('transform', function(el, i) {return 'translate(0,' + i * (barHeight + pad) + ')';});

        barExt.append("rect")
              .attr("width", function(d) { return scaletoEXT(d.value); })
              .attr("height", barHeight - 1);

        barExt.append("text")
              .attr("x", function(d) { return scaletoEXT(d.value) - 10; })
              .attr("y", barHeight / 2)
              .attr("dy", ".35em")
              .text(function(d) { return d.first_name; });
  });

  function type(d)
  {
    d.value = +d.value;
    return d;
  }

/* ================================ */
/* http://bost.ocks.org/mike/bar/3/ */
/* ================================ */

  var vWidth = 960,
      vheight = 500,
      vPad = 10;

  var scaleToY = d3.scale.linear().range([height, 0]);
  
  var vChart = d3.select('.bar-chart-3-ext').attr('width', vWidth).attr('height', vheight);

});