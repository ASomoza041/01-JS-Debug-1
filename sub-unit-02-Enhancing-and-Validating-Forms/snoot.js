
/*

Exercise 01_06_01

      Snoot Flowers order form
      Author: Alex A Somoza
      Date: 8-19-19  

      Filename: snoot.js

*/

"use strict";

let LOG = console.log;
//let LOG = alert;

var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

function setUpDays() {
    var dates = document.getElementById("delivDy").getElementsByTagName("option");
    twentyNine.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
}

function updateDays() {

}

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    LOG("select lists:" + emptyBoxes.length);
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;  
     }
}

function setUpPage() {
    removeSelectDefaults();
}

function autoCheckCustom() {

}

function validateAddress(fieldsetId) {

}

function validateDeliveryDate() {

}

function validatePayment() {

}

function validateMessage(){

}

function validateCreateAccount() {

}

function validateForm() {

}

function copyBillingAddress() {

}

function createEventListener() {
    var submitButton = document.getElementById("submit");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", removeSelectDefaults, false);
    } else if(submitButton.attachEvent) {
        submitButton.attachEvent("onclick", removeSelectDefaults);
    }

}
/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);        
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

