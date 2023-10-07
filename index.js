// This id used here just because i already two rows with sample data.
let id = 2;

// Here we grab data from the table, store it in variables and pass to PostRow function
// on click of the submit button
document.getElementById("formSubmit").addEventListener("click", () => {
  id++;
  const date = document.getElementById("form-date").value;
  const title = document.getElementById("form-title").value;
  const tags = document.getElementById("form-tags").value;
  const description = document.getElementById("form-description").value;
  postRow(id, date, title, tags, description);
  document.getElementById("form-date").value = "";
  document.getElementById("form-title").value = "";
  document.getElementById("form-tags").value = "";
  document.getElementById("form-description").value = "";
});

// this function is used for the populate first table row with data from the form
function postRow(id, date, title, tags, description) {
  let row = document.getElementById("table-body");

  row.insertRow(0).innerHTML = `<tr id=${id} >
    <th scope="row">${id}</th>
    <td>${date}</td>
    <td>${title}</td>
    <td>${tags}</td>
    <td>${description}</td>
    <td>
        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-action btn-danger">Delete</button>
        <button type="button" class="btn btn-action btn-warning">Correct</button>
        </div>
    </td>
    </tr>`;

  // Here we add id to the first child of the row, so we can use it later for deleting
  let rowFirstChild = row.firstElementChild;
  rowFirstChild.setAttribute("id", `${id}`);
}
