/*
    - conditional logic controls the flow of code
    - if (place condition here) {code to be executed if condition is met/true}
    - if / else if / else -> if the first statement is false, we move to else if, if that is also false we move to else (it can continue on for a while like this and we can have multiple 'else ifs' within an if statement)
*/

const topics = ['HTML', 'CSS', 'Git', 'Javascript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Gut!");
    } else if (randomTopic === 'Javascript') {
        console.log("let's study Javascript");
    } else {
        console.log('Please try again!');
    }
}

function listTopics() {
    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }
}

console.log('Here are the topics we learned through Prework');
listTopics();
console.log('Which topic should we study first?');
selectTopic();