const inputs =document.querySelectorAll('.input-angle');
const isTriangleBtn=document.querySelector('#is-triangle-btn');
const outputE1 =document.querySelector('#output');



function calculateSumOfAngles(angle1,angle2,angle3)
{
    const sumOfAngles= angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle()
{
    const sumOfAngles = calculateSumOfAngles
    (Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180){
        
        output.innerText="This forms a triangle, Go on !";
    }
    else{
        
         output.innerText="O0ps !! This doesn't forms a triangle";
    }  

}
isTriangleBtn.addEventListener("click", isTriangle);
