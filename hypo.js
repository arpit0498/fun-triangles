const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn=document.querySelector('#hypotenuse-btn');
const output =document.querySelector('#output');

function calculateSquareSum(a,b){
    const sumSquare=a*a + b*b ;
    return sumSquare;
}

function calculateHypotenuse(){
    const sumSquare = calculateSquareSum(Number(sides[0].value),Number (sides[1].value));
    const lengthHypotenuse= Math.sqrt(sumSquare);
    output.innerText="Length of hypotenuse: "+ lengthHypotenuse
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);