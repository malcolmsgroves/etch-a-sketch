// Fill the container with 100 boxes
function new_grid() {
  for(i = 1; i <= 100; i++) {
    var grid = $("<div class='grid'></div>");

    // if(i % 10 == 0) {
    //   grid.addClass("#end");
    // }
    console.log("i'm in")
    $("#container").append(grid);
  }
}

function clear_grid() {
  while($(".grid") != null) {
    $(".grid").remove();
  }
}

function change_grid_color() {
  $(this).
}

$(document).ready(function () {
  $(".new_grid_button").on('click', new_grid);
  $(".grid").on('mouseenter', change_grid_color);
  //new_grid();
});
