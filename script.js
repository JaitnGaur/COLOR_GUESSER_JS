let squares = 3;
let mode = 'easy';
let topdisplay = document.querySelector("#head-color")
let hard = document.getElementById('hard');
let easy = document.getElementById('easy');
let box = document.getElementsByClassName('box');
let hardbox = document.getElementById('hardbox');
let displayMsg = document.getElementById('display-msg');
let newclr = document.getElementById('reset');
let head = document.querySelector('header');
let again = document.querySelector('#reset');
hardbox.style.display = 'none';
let real_color;
reset();

hard.addEventListener('click', () => {

    reset();
    mode = 'hard';
    squares = 6;
    hardbox.style.display = "block";
    hardbox.style.display = "flex";
    color_assigner(squares);


})
easy.addEventListener('click', function easy() {
    reset();
    mode = 'easy';
    squares = 3;
    hardbox.style.display = 'none';
    color_assigner(squares);
})

const color_assigner = (squares) => {
    for (i = 0; i < squares; i++) {
        let clr = color_generator();
        box[i].style.backgroundColor = clr;

        box[i].addEventListener('click', function () {
            if (this.style.backgroundColor == real_color) {
                displayMsg.innerText = "Hurray! CORRECT";
                head.style.background = real_color;
                for (i = 0; i < squares; i++) {
                    box[i].style.backgroundColor = real_color;
                }
                again.innerText = 'PLAY AGAIN?';
            }
            else {
                displayMsg.innerText = "TRY AGAIN!";
                this.style.backgroundColor = "transparent";
            }
        })
    }
    let rndm = Math.floor(Math.random() * squares)
    box[rndm].style.backgroundColor = real_color;
    displayMsg.innerText = "";
    console.log(real_color);


}

newclr.addEventListener('click', () => {
    reset();
    color_assigner(squares);
    displayMsg.innerText = "";
})

function reset() {
    real_color = color_generator();
    topdisplay.innerHTML = real_color;
    head.style.background = '#4682B4';
    again.innerText = 'NEW COLORS';

}

function color_generator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}