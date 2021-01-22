// Project 1 :- Function to Convert Kilometer to Meter

 function kilometerToMeter(kilometer){
     if (kilometer < 0){
         return " Error :- You are requested to enter a positive value";
     }
     var Tometer = kilometer * 1000
     return Tometer;
    }

// // var answer = kilometerToMeter(1);
// // console.log(answer);

// // Project 2 :- Function for the Budget Calculatior

function budgetCalculator(fridge, ac, macbook) {
    if (fridge < 0 || ac < 0 || macbook < 0) {
        return "Error :- You are requested to enter a positive value";
    }
    else if (fridge % 1 != 0 || ac % 1 != 0 || macbook % 1 != 0){
        return "Error :- Enter a Float Number" 
    }
   
    // Price of Fridge, AC, MAC ;

    var FridgePrice = 1299;
    var acPrice = 7000;
    var macbookPrice = 25000;


    var total_fridge_price = FridgePrice * fridge;
    var total_ac_price = acPrice * ac;
    var total_macbook_price = macbookPrice * macbook;


    totalprice = total_fridge_price + total_ac_price + total_macbook_price;

    return totalprice;
}


// var mainres = budgetCalculator(2,5,6);
// console.log(mainres);




// Project 03 :- Function for the hotelCost

//daystay = how many days you want to stay ;

function hotelCost(daystay) {
    var totalcosting = 0;
    if (daystay < 0) {
   return " Error :- Please Enter Positive Value";
    }

    //if user input a float number

    if(daystay % 1 != 0){
        return " Error :- Enter a Integer Value"
    }

    //if user stays between 1-10 days
    else if (daystay <= 10) {
        totalcosting = 100 * daystay;
    }

    // if user stays more than 10 day 
    else if (daystay <= 20) {
        var first = 100 * 10;
        var remainingDay = daystay - 10;
        var second = 80 * remainingDay;
        totalcosting = first + second;
    }

    // if user stays more that 20 days
    else {
        var first = 100 * 10;
        var second = 80 * 10;
        var remainingDay = daystay - 20;
        var third = 50 * remainingDay;
        totalcosting = first + second + third;
    }

    // total cost of staying at hotel 

    return totalcosting;

}

// var finalres = hotelCost(6000);
// console.log(finalres);


// Task 4 megaFriend 


function megaFriend(friendsname) {

    var main_name = friendsname[0];

    if (friendsname.length == 0){
        return "Error :- Please provide Value in Array"
    }
    for (var i = 0; i < friendsname.length; i++) {

        var temporaryC = friendsname[i];

        if (temporaryC.length > main_name.length) {
            main_name = temporaryC;
        }
    }
    return main_name;


}


 var friendsname = ["Subhani","Fatema","Afrana Anan Zoya","Rawnak Fatema Rim","Nishat"];
 var finalresult = megaFriend(friendsname);
 console.log(finalresult);

// var friends2 = [];
// var result5 = megaFriend(friends2);
// console.log(result5)
