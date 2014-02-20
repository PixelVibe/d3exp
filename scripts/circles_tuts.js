requirejs.config({
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

  /*function change_attributes()
  {
    circles.style('fill', '#CF0000').attr('cy', 48);
  }*/

  function print_info(info)
  {
    info_screen.innerHTML = info;
  }

});

define('change_attributes', ['d3'], function(d3) {
    return function change_attributes() {
        circles.style('fill', '#CF0000').attr('cy', 48);
    }
});

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