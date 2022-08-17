
document.getElementById('Withdrow-button').addEventListener('click', function(){
    const newWithdrowAmount = getInputValueById('input-Withdrow');
    if(isNaN(newWithdrowAmount)){
        alert('Error');
        return;
    }
    const newWithdrowElement= getTextElementById('Withdrow');
    const newWithdrowTotal = newWithdrowElement + newWithdrowAmount;
    const previousBlanceTotal = getTextElementById('Blance');
    if(newWithdrowAmount > previousBlanceTotal || newWithdrowAmount < 0){
        alert('Fund Shortage');
        return false;
    }
    setTextElementValueById('Withdrow', newWithdrowTotal );
    const newBlanceTotal = previousBlanceTotal - newWithdrowAmount;
    setTextElementValueById('Blance', newBlanceTotal);
})