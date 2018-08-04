function myFunction() {
  // Declare variables
  var input, filter, a;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  var anchor = document.querySelectorAll('.gallery a');


  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < anchor.length; i++) {
    a = anchor[i];
    var data = a.getAttribute('data-title');
    if (data.toUpperCase().indexOf(filter) > -1) {
       anchor[i].parentElement.style.display = "";
    } else {
      anchor[i].parentElement.style.display = "none";
    }
  }
}
