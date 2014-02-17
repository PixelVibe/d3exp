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

  var data = [4, 8, 15, 16, 23, 42];

  d3.select('.bar-chart').selectAll('div').data(data).enter().append('div').style('width', function(d) {return d * 10 + 'px'}).text(function(d) {return d;})

});