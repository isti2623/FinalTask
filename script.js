//Problem1
function seerToMon(seer) {

    if (typeof seer != 'number') {
        return 'Please give a number';  //Error Part
    }
    else if (seer < 0) {
        return 'Please enter a positive number greater than 0'; //Error Part
    }
    else {
        let mon = seer / 40;
        return mon;


    }
}
console.log(seerToMon(80));



//Problem2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    var shirt = 100, pant = 200, shoe = 500;
    let total = shirtQuantity * shirt + pantQuantity * pant + shoeQuantity * shoe;
    return total;


}
console.log(totalSales(5, 3, 2));



//Problem3

function deliveryCost(shirtItem) {
    if (shirtItem <= 0) {
        return 'Invalid' //Error Part
    }
    if (typeof shirtItem != 'number') {
        return 'Please give a number'; //Error Part
    }
    if (shirtItem <= 100) {
        return shirtItem * 100;
    }
    else if (shirtItem > 100 && shirtItem <= 200) {
        return 100 * 100 + (shirtItem - 100) * 80
    }
    else {
        let third = shirtItem - 200
        return 100 * 100 + 100 * 80 + (shirtItem - 200) * 50

    }
}

const totalItemCost = deliveryCost(200);
console.log(totalItemCost);


//Problem4
function perfectFriend(name) {
    let perfectName = '';
    for (i = 0; i < name.length; i++) {
        let lengthofName = name[i].length;
        if (lengthofName == 5 && perfectName == '') {
            perfectName = name[i];
        }
    }
    if (perfectName == '') {
        perfectName = 'please enter 5 letter name'; //Error Part
        return perfectName;
    }
    else {
        return perfectName;
    }
}
const names = ['Isti', 'Rubel', 'Alai', 'Billi', 'Dog'];
const finalName = perfectFriend(names);
console.log(finalName);