
window.onload = () =>
{
    let button = document.querySelector("#submit");
    button.addEventListener("click",cal);

}
function cal()
{
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let res=document.querySelector("#resultbmi");
    if(height===""|| isNaN(height))
    {
        alert("Please enter height");
    }
    else if(weight===""|| isNaN(weight))
    {
        alert("Please enter weight");
    }
    else{
    let bmi = (weight/((height*height)/10000)).toFixed(3);
    if(bmi<18.5)
    res.innerHTML="You are underweight: " +bmi;

    else if(bmi>=18.5 && bmi < 24.9)
    res.innerHTML="You are Normal in weight : " +bmi;

    else
    res.innerHTML = "You are Overweight : "+bmi; 
    }
}