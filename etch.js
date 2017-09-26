// Fill the container with grid boxes
function create_grid(rows) {

  for(i = 1; i <= rows * rows; i++) {
    var grid = $("<div class='grid'></div>");
    $("#container").append(grid); // add grid to the container
  }

  $('.grid').width(960/rows); // set grid width and height
  $('.grid').height(960/rows);
}

// coloring function
function color(element, color) {
  $(element).css('background-color', color);
}

// code-block where live functions are run
$(document).ready(function () {

  create_grid(10);

  $(".grid").mouseover( function() {
    color(this, 'slateblue');
  });

  $(".new_grid_button").click( function() {
    $('.grid').remove();
    var rows = prompt("How many rows do you want?")
    create_grid(rows);

    $(".grid").mouseover( function() {
      color(this, 'slateblue');
    });
  })
});
