function getInputValueById(inputId){
    const inputFild = document.getElementById(inputId);
    const inputFildString =  inputFild.value;
    const inputFildValue = parseFloat(inputFildString);
    inputFild.value='';
    return inputFildValue;
   
}
function getTextElementById(elementId){
    const elementFild = document.getElementById(elementId);
    const elementFildString =   elementFild.innerText;
    const elementFildValue = parseFloat(elementFildString);
    return elementFildValue;
   
}

function setTextElementValueById (elementId, newValue){
    const elementFild = document.getElementById(elementId);
    elementFild.innerText= newValue;

}