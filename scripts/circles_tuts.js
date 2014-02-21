/*requirejs.config({
    enforceDefine: false,
    paths: {
        d3: [
            '//d3js.org/d3.v3.min',
            '../lib/d3.min'
        ]
    }
});

require(['d3'], function (d3)
{
  var info_screen = document.getElementById('info_screen');
  // Selecting items
  var circles = d3.selectAll('circle'); //print_info(circles);

  function change_attributes()
  {
    circles.style('fill', '#CF0000').attr('cy', 48);
  }

  function print_info(info)
  {
    info_screen.innerHTML = info;
  }

});

define('change_attributes', ['d3'], function(d3) {
    return function change_attributes() {
        circles.style('fill', '#CF0000').attr('cy', 48);
    }
});*/

/*define('change_attributes', function(){
  var change_attributes = function()
  {
    circles.style('fill', '#CF0000').attr('cy', 48);
  };

  return
  {
    change_attributes: change_attributes;
  }

});*/

// Need to find out how to work with functions outside of require

// Select elements (css, jquery style)
var circles = d3.selectAll('circle');

// change element attributes
function change_attributes()
{
  circles.style('fill', '#CF0000').attr('cy', 48).attr('r', 10);
}

// change element attributes random
function change_attributes_random()
{
  w = Math.floor((Math.random() * 20)+1);
  circles.attr('r', function()
  {
    return w;
  });
}

// data binding to elements
/*
Once data is bound, that data is accessible as an argument to our attribute and style functions.
This means we visually encode data, or in other words, create a visualization!
For example, here we set the x-position and radius using the data:
*/
function change_with_data()
{
  circles.data([12, 27, 32]);
  circles.attr('r', function(sdf){return sdf});

  // with index
  circles.attr('cx', function(d,i)
  {
    return i * 100 + 50;
  });
}

function append_elements()
{
  circles.data([12, 27, 32, 45]);

}

