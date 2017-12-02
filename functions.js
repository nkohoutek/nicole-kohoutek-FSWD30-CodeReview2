 function nameAsterdam() {
document.getElementById("funcamsterdam").innerHTML = "Amsterdam";
 }

// function nameLondon() {
document.getElementById("funclondon").innerHTML = "London";
//}

function boldAmsterdam() {
document.getElementById("boldamsterdam").innerHTML = "Amsterdam ";
}

function boldLondon() {
document.getElementById("boldlondon").innerHTML = "London ";
}


amsterdamPrices = [1500, 500, 1800, 700];

 function getResult() {
        var sum = amsterdamPrices[0] + amsterdamPrices[1] + amsterdamPrices[2] + amsterdamprices[3];
        return sum;
}

function priceA() {
    return (1500+500+1800+700) / 4;
}