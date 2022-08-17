
document.getElementById('Withdrow-button').addEventListener('click', function(){


    const newWithdrowAmount = getInputValueById('input-Withdrow');
    const newWithdrowElement= getTextElementById('Withdrow');

    const newWithdrowTotal = newWithdrowElement + newWithdrowAmount;
    setTextElementValueById('Withdrow', newWithdrowTotal );

    const previousBlanceTotal = getTextElementById('Blance');

    const newBlanceTotal = previousBlanceTotal - newWithdrowAmount;
    setTextElementValueById('Blance', newBlanceTotal);

})