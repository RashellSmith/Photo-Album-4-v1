function myFunction() {
  // Declare variables
  var input, filter, list, item, data, a, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  list = document.getElementById("list");
  item = document.getElementsByclassname('item');
  data = $('a').data('title');
  title = $("item").children("img").attr("alt");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < title.length; i++) {
    a = title[i][0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      title[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
  // for (i = 0; i < item.length; i++) {
  //     // a = item[i].getElementsByTagName("a")[0];
  //     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //         item[i].style.display = "";
  //     } else {
  //         item[i].style.display = "none";
  //     }
}
}









// (function ($) {
//   jQuery.expr[':'].Contains = function(a,i,m){
//       return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
//   };
//
//   function listFilter(header, list) {
//     var form = $("<form>").attr({"class":"filterform","action":"#"}),
//         input = $("<input>").attr({"class":"filterinput","type":"text"});
//     var data =  $('.item').data('title');
//     $(form).append(input).appendTo(header);
//
//     $(input)
//       .change( function () {
//         var filter = $(this).val();
//         if(filter) {
//           $(list).find(".movieTitle:not(:Contains(" + filter + "))").parent().slideUp();
//           $(list).find(".movieTitle:Contains(" + filter + ")").parent().slideDown();
//         } else {
//           $(list).find(".entry").slideDown();
//         }
//         return false;
//       })
//     .keyup( function () {
//         $(this).change();
//     });
//   }
//
//   $(function () {
//     listFilter($("#header"), $("#list"));
//   });
// }(jQuery));
