
document.getElementById('Deposit-button').addEventListener('click', function(){
     const newDepositeAmount = getInputValueById('input-Deposit');
     if(isNaN(newDepositeAmount) || newDepositeAmount < 0){
          alert('Error');
          return;
      }
     const newDepositeElement= getTextElementById('Deposit');
     const newDepositeTotal = newDepositeElement + newDepositeAmount;
     setTextElementValueById('Deposit', newDepositeTotal );
     const previousBlanceTotal = getTextElementById('Blance');
     const newBlanceTotal = previousBlanceTotal + newDepositeAmount;
     setTextElementValueById('Blance', newBlanceTotal);
}
)