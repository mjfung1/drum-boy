
// click listener
const buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    // console.log(this);
    button.addEventListener("click", handleClick);
})


function handleClick() {
    // console.log(this.textContent);
    // console.log(this.innerHTML);
    // console.log(this.innerText)

    // this refers to the target of event
    let buttonTextContent = this.textContent; 

    makeSound(buttonTextContent);
    buttonAnimation(buttonTextContent);
}


// Keydown listener
document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
}



function buttonAnimation(currentKey) {

    let button = document.querySelector("." + currentKey);

    button.classList.add('pressed');

    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);
    
}



function makeSound(key) {
    let audio;

    switch (key) {
        case 'w':
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'j':
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 'k':
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'l':
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        
        default:
            console.log(key);
            break;
    }

}

