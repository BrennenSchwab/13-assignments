let currMovie = 0;
let movieList = [];

$(function() {

  $("form").on("submit", function(evt) {

    evt.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();

    let movieData = { title, rating, currMovie };
    const HTMLtoAppend = createDataTable(movieData);

    currMovie++
    movieList.push(movieData);      

    $("#table-body").append(HTMLtoAppend);
    $("#movie-form").trigger("reset");
  });

  $("tbody").on("click", function(evt) {
   
    $(evt.target)
      .closest("tr")
      .remove();
    
  });
});
function createDataTable(data) {
  return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn" data-delete-id=${data.currMovie}>
          Delete
        </button>
      </td>
    <tr>
  `;
}