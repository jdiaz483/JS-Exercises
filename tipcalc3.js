// Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. 
//It will return the final amount for each person.

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

function splitAmount(billAmount, levelOfService, numPeople) {
    var total = totalAmount(billAmount, levelOfService);
    return total / numPeople;
}

console.log(splitAmount(100, 'good', 5));
console.log(splitAmount(40, 'fair', 2));