/*
    - conditional logic controls the flow of code
    - if (place condition here) {code to be executed if condition is met/true}
    - if / else if / else -> if the first statement is false, we move to else if, if that is also false we move to else (it can continue on for a while like this and we can have multiple 'else ifs' within an if statement)
*/

const topic = 'HTML';

if (topic === 'HTML') {
    console.log("Let's study HTML!");
} else if (topic === 'CSS') {
    console.log("Let's study CSS!");
} else if (topic === 'Git') {
    console.log("Let's study Gut!");
} else if (topic === 'Javascript') {
    console.log("let's study Javascript");
} else {
    console.log('Please try again!');
}


// the above ^ will log: 'Let's study HTML' because the topic equals HTML therefore the first if statement is true and thus logged to the console

// ARRAYS + LOOPS

const topics = ['HTML', 'CSS', 'Git', 'Javascript'];

for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
}