document.addEventListener("DOMContentLoaded", init);

let output = document.querySelector(".terminal-output");
let body = document.querySelector(".terminal-body-main");

let commands = [
    "help",
    "ls",
    "cat info.txt"
]

function init() {
    body.innerHTML = `
    <p class="terminal-input">visitor@portfolio$ 
        <input type="text" name="args" id="terminal-input" autofocus>
    </p>
                
    <div class="terminal-output"></div>
    `;

    let input = document.querySelector("#terminal-input:last-of-type");
    input.addEventListener("keyup", (e) => {
        input.autofocus = false;
        onEnter(e);
    });
}

function onEnter(event) {
    let inputs = document.querySelectorAll("#terminal-input");
    let newInput = inputs[inputs.length - 1];
    if (event.keyCode === 13) {
        console.log(newInput.value);
        processCommand(newInput.value);
    }
}

function processCommand(cmd) {
    switch (cmd) {
        case commands[0]:
            console.log("You requested help");
            newLine("You requested help", commands[0]);
            break;
        case commands[1]:
            console.log("You requested ls");
            newLine(`
            Listing files: <br>
            -r--r--r--\tvisitor\tvisitor\t<strong>info.txt</strong> <br>
            -r--r--r--\tvisitor\tvisitor\t<strong>projects.txt</strong>`
            , commands[1]);
            break;
        case commands[2]:
            console.log("You requested cat");
            newLine("Here is all my information 🤠", commands[2]);
            break;
    }
}

function newLine(data, cmd) {
    output = document.querySelector(".terminal-output:last-of-type");
    body = document.querySelector(".terminal-body-main:last-of-type");

    output.innerHTML += `<p>${data}</p>`;
    body.innerHTML += `
                    <p class="terminal-input">
                        visitor@portfolio$
                        <input onkeyup="onEnter(event)" type="text" id="terminal-input" autofocus>
                    </p>
                
                    <div class="terminal-output"></div>
    `;
    let inputs = document.querySelectorAll("#terminal-input");
    let newInput = inputs[inputs.length - 1];
    let oldInput = inputs[inputs.length - 2];

    oldInput.replaceWith(cmd);
    newInput.focus();
}