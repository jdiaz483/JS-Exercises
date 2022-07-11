// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as 
// the tip amount plus the bill amount. 
// This function may make use of tipAmount as a sub-task.

function tipAmount(billAmount, levelOfService) {
    let goodService = .20;
    let fairService = .15;
    let badService = .10;
    
    levelOfService = levelOfService || 'fair';
    if (levelOfService == 'good') {
        tipPercentage = goodService;
    } else if (levelOfService == 'bad') {
        tipPercentage = badService;
    } else {
        tipPercentage = fairService;
    }
    return billAmount * tipPercentage;
}

function totalAmount(billAmount, levelOfService) {
   let tip = tipAmount(billAmount, levelOfService);
   return billAmount + tip;
}

console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));
