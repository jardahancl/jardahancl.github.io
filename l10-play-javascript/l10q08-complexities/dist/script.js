$('p').append(' another');

$(".fb").click(() => {
  console.log("Yeah, you clicked me");
});

$(".sb").click(() => {
  $(".fb").text("Detest");
});

$(".tb").click(() => {
  $("button").css("background-color", "purple");
});


let colorChangePossible = true;
$("#given-color").click(() => {
  let color = $("#input-color").val();
  if (colorChangePossible) {
    $("button").css("background-color", color);
    // colorChangePossible = false;
  }
});