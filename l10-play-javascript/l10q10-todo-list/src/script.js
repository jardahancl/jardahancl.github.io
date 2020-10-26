let numberClick = 1;

$("#to-list").click(() => {
  numberClick++;
  $("h2").text("Todos ("+numberClick+")");
  let quest = $("#input-todo").val();
  $('ul').append("<li>"+quest+"</li>");
});

// $("li").click(() => {
//   $('li').css('text-decoration', 'line-through');
// })





