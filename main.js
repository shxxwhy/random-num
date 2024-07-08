let button = document.querySelector('.btn');
let result = document.querySelector('.result');

function findMinMax() {
    let minInput = parseInt(document.querySelector('#min').value);
    let maxInput = parseInt(document.querySelector('#max').value);
    let randomNum = Math.floor(Math.random() * (maxInput - minInput + 1) + minInput);
    result.innerText = randomNum;
    console.log(minInput, maxInput);
}

button.addEventListener('click', findMinMax);
