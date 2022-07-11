// Write a function tipAmount that is given the bill amount and the level of service 
// (one of good, fair and poor) and returns the dollar amount for the tip.

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

console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'bad'));

