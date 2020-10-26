// 4th part

$('div').text('Hello world');

$('div').css('background', 'purple');

$('.first').toggleClass('hidden');

$('p').html('<strong>Hello world</strong>');

$('p').append(' another');

$('p').prepend('before ');

$('h1').remove();

$('button').click(() => {
    $('.second').toggleClass('hidden');
    console.log("JavaScript is working!");
});



















// From 1st part to the 3rd

console.log("JavaScript is working!");

let colors = ["orange", "blue", "purple", "black"]
let post = {
    title: "My title",
    description: "awesome",
    likes: 12,
    comments: ["wow", "shit"],
};

let posts = [{
    title: "First post",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 222
}]

console.log(posts[0].title);
console.log(colors);
console.log(posts);


let age = 22;

if (age > 18) {
    console.log("You are an adult");
} else if (age < 18) {
    console.log("You are a kid!");
} else {
    console.log("You are 18!");
}

for (let i = 0; i < 3; i++) {
    console.log(i);    
}

// console.log(colors);

// f(x) = x * x
let myFunction = x => {
    console.log(x);
}

colors.forEach(color => {
     console.log(color);   
});

let calendar = ["Pete", "Mate", "Claude", "Nora"];

let greeter = name => {
    console.log(`Hello, ${name}`);
    if (name === "Mate") {
        console.log("You are an adult");
    }
}

calendar.forEach(name => greeter(name));

console.log("nearing to the end of the lecture.");





console.log("This is the end of the code.")