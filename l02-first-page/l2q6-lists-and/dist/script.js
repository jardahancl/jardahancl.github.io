let names = ["Claude", "Boris", "Jaroslav", "Peter"];

console.log(names);

names.forEach(name => {
  if (name === "Jaroslav") {
    $('ul').append("<li><strong>"+name+"</li></strong>");
  } else {
    $('ul').append("<li>"+name+"</li>");
  }
});


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
console.log(additionalBlock);


$('body').append("<h1>"+additionalBlock.title+"</h1>");
$('body').append("<p>"+additionalBlock.text+"</p>");