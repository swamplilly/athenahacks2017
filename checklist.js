/*
 * Global variables.
 */
var karma = 0;
var allItems = 0;
var finishedItems = 0;

/*
 * Add an element to the to-do list.
 */
function addElement() {
    var listElement = document.getElementById("list");
    var valToAdd = document.getElementById("val").value;

    /* Update global variables */
    allItems += 1;

    /* Add an item to the list */
    listElement.innerHTML +=
        '<li class="not done">\
            <button onclick="remove(this)">\
                Delete\
            </button>\
            <button onclick="done(this)">\
                Done\
            </button>\
            <span class="item">' +
                valToAdd +
            '</span>\
        </li>';

    /* Update percentage */
    var percentageElement = document.getElementById("percentage");
    percentageElement.innerText = parseInt((finishedItems / (allItems == 0 ? 1 : allItems)) * 100);
}

/*
 * Check off an item on the to-do list.
 */
function done(self) {
    var finishedItem = self.parentElement.getElementsByClassName("item")[0];
    var finishedItemTEXT = self.parentElement.getElementsByClassName("item")[0].innerText;
    var itemClassList = self.parentElement.classList;

    /* Unchecking finished item */
    if (itemClassList.contains("not")) {
        itemClassList.remove("not");
        finishedItems += 1;

    /* Checking off finished item */
    } else {
        itemClassList.add("not");
        finishedItems -= 1;
    }

    /* Update percentage */
    var percentageElement = document.getElementById("percentage");
    percentageElement.innerText = parseInt((finishedItems / (allItems == 0 ? 1 : allItems)) * 100);
}

/*
 * Remove an item from the to-do list.
 */
function remove(self) {
    /* Update global variables */
    if (!self.parentElement.classList.contains("not")) { (finishedItems > 0 ? finishedItems -= 1 : finishedItems = 0); }
    (allItems > 0 ? allItems -= 1 : allItems = 0);

    /* Remove li element */
    self.parentElement.remove();

    /* Update percentage */
    var percentageElement = document.getElementById("percentage");
    percentageElement.innerText = parseInt((finishedItems / (allItems == 0 ? 1 : allItems)) * 100);
}

/*
 * Calculate stats after finishing a day.
 */
function finishDay() {
    /* Deciding the storyline based on day's stats */
    var finalPercentage = parseInt(document.getElementById("percentage").innerText);
    if (finalPercentage <= 33) {
        window.alert("Your score for today is 1.");
        karma += 1;
    } else if (finalPercentage <= 66) {
        window.alert("Your score for today is 2.");
        karma += 2;
    } else {
        window.alert("Your score for today is 3.");
        karma += 3;
    }

    /* Update percentage */
    var listElements = document.getElementsByClassName("done");
    var notDoneCount = document.getElementsByClassName("not").length;
    var percentageElement = document.getElementById("percentage");
    allItems = notDoneCount;
    finishedItems = 0;
    percentageElement.innerText = 0;

    /* Clear finished items */
    var i = 0;
    while (listElements[i]) {
        if (listElements[i].classList.contains("not")) {
            i++;
        } else {
            listElements[i].remove();
        }
    }

    /* Update day number */
    var dayElement = document.getElementById("day");
    var dayNumber = parseInt(dayElement.innerText);
    dayElement.innerText = dayNumber + 1;

    /* Update karma */
    var karmaElement = document.getElementById("karma");
    var karmaNow = karma / dayNumber;
    karmaElement.innerText = karmaNow.toFixed(1);
}

/*
 * Reset all values.
 */
function startOver() {
    var listElement = document.getElementById("list");
    listElement.innerHTML = "";

    var dayElement = document.getElementById("day");
    dayElement.innerText = 1;

    var percentageElement = document.getElementById("percentage");
    percentageElement.innerText = 0;

    var karmaElement = document.getElementById("karma");
    karmaElement.innerText = 0;

    karma = 0;
    allItems = 0;
    finishedItems = 0;
}



