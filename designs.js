// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  /* Defining the first variables and getting their values (height & width) from the user inputs */

  const table = $("#pixel_canvas");
  const gridHeight = $("#input_height").val();
  const gridWidth = $("#input_width").val();

  /* Deleting any previous drawing. Not sure why my previous method with "while" didn't work. Note to self: Have to check. */
  table.empty();

  for (let i = 0; i < gridHeight; i++) {
    table.append("<tr></tr>");
  }

  let tableRow = $("tr");

  for (let j = 0; j < gridWidth; j++) {
    tableRow.append("<td></td>");
  }

  let tableColumn = table.find("td");

  // Color taken from the user input

  tableColumn.click(function() {
    let pickedColor = $("#colorPicker").val();
    $(this).attr("bgcolor", pickedColor);
  });
}

/*** When size is submitted by the user, call makeGrid(). I want to check again the function of preventDefault - see https://developer.mozilla.org/en-US/docs/Web/API/Event
 Note: it always goes before the function call***/

$("#sizePicker").on("submit", function(event) {
  event.preventDefault();
  makeGrid();
});