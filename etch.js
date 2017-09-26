// Fill the container with 100 boxes
function create_grid(rows) {
  for(i = 1; i <= rows * rows; i++) {
    var grid = $("<div class='grid'></div>");

    $("#container").append(grid);


    // if(i % 10 == 0) {
    //   grid.addClass("#end");
    // }


  }

  $('.grid').width(960/rows);
  $('.grid').height(960/rows);
}

// function clear_grid() {
//   while($(".grid") != null) {
//     $(".grid").remove();
//   }
// }

function color(element, color) {
  $(element).css('background-color', color);
}

$(document).ready(function () {
  // $(".new_grid_button").on('click', new_grid);
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
  //new_grid();
});
