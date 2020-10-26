let numberClick = 0;
let func = x => "x";

$("#plus-one").click(() => {
  numberClick++;
  $("h2").text(numberClick);
});

$("#minus-one").click(() => {
  numberClick = numberClick - 1;
  $("h2").text(numberClick);
});


