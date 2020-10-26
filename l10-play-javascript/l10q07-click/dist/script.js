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