//

//Task 1 : kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        // If user input negative value this error message will be shown

        return " Distance can't be a negative value. Please Input a positive value";
    }
    var meter = kilometer * 1000;
    return meter;
}


// Task 2: budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0) {
        // If user input negative value this error message will be shown

        return " watch quantity can't be a negative value. Please Input a positive value";
    }
    else if (phone < 0) {
        // If user input negative value this error message will be shown

        return " Phone quantity can't be a negative value. Please Input a positive value";
    }
    else if (laptop < 0) {
        // If user input negative value this error message will be shown

        return " Laptop quantity can't be a negative value. Please Input a positive value";
    }
    // watch,phone ,laptop usual prices ;

    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;


    var totalWatchPrice = watchPrice * watch;
    var totalPhonePrice = phonePrice * phone;
    var totalLaptopPrice = laptopPrice * laptop;

    //total sum of all bills

    total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return total;
}

// Task 3 : hotelCost

function hotelCost(stayDay) {
    var totalCost = 0;
    if (stayDay < 0) {
        // If user input negative value this error message will be shown

        return " stayDay can't be a negative value. Please Input a positive value";
    }

    //if user stays between 1-10 days
    else if (stayDay <= 10) {
        totalCost = 100 * stayDay;
    }

    // if user stays more than 10 day 
    else if (stayDay <= 20) {
        var firstPart = 100 * 10;
        var remainingDay = stayDay - 10;
        var secondPart = 80 * remainingDay;
        totalCost = firstPart + secondPart;
    }

    // if user stays more that 20 days
    else {
        var firstPart = 100 * 10;
        var secondPart = 80 * 10;
        var remainingDay = stayDay - 20;
        var thirdPart = 50 * remainingDay;
        totalCost = firstPart + secondPart + thirdPart;
    }

    // total cost of staying at hotel 

    return totalCost;

}
var result = hotelCost(17);
console.log(result);

// Task 4 megaFriend 


function megaFriend(friendsName) {

    var biggestName = friendsName[0];

    if (friendsName.length == 0){
        //If user input empty array this message will be shown
        return "Array can't be empty in This case. Please provide some values"
    }
    for (var i = 0; i < friendsName.length; i++) {

        var tempContainer = friendsName[i];

        if (tempContainer.length > biggestName.length) {
            biggestName = tempContainer;
        }
    }
    return biggestName;


}


