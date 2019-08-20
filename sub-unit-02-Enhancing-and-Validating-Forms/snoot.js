"use strict";
/*

Exercise 01_06_01

      Snoot Flowers order form
      Author: Alex A Somoza
      Date: 8-19-19  

      Filename: snoot.js

*/

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select list:" + emptyBoxes.length);
}

function createEventListener() {
    var submitButton = document.getElementById("submit");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click",
            removeSelectDefaults, false);
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick",
            removeSelectDefaults);
    }
}