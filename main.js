var karma = 0;

/*
 * Add an element to the to-do list.
 */
function addElement() {
    var listDiv = document.getElementById("list");
    var valToAdd = document.getElementById("val").value;

    /* Add an item to the list */
    listDiv.innerHTML +=
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
    var allItems = document.querySelectorAll(".item").length;
    var finishedItems = document.querySelectorAll(".not").length;
    var percentage = document.getElementById("percentage");

    percentage.innerText = parseInt(((allItems - finishedItems) / allItems) * 100);
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

    /* Checking off finished item */
    } else {
        itemClassList.add("not");
    }

    /* Update percentage */
    var allItems = document.querySelectorAll(".item").length;
    var finishedItems = document.querySelectorAll(".not").length;
    var percentage = document.getElementById("percentage");

    percentage.innerText = parseInt(((allItems - finishedItems) / allItems) * 100);
}

/*
 * Remove an item from the to-do list.
 */
function remove(self) {
    /* Remove li element */
    self.parentElement.remove();

    /* Update percentage */
    var allItems = document.querySelectorAll(".item").length;
    var finishedItems = document.querySelectorAll(".not").length;
    var percentage = document.getElementById("percentage");

    percentage.innerText = parseInt(((allItems - finishedItems) / allItems) * 100);
}

/*
 * Calculate stats after finishing a day.
 */
function finishDay() {
    /* Update day number */
    var dayElement = document.getElementById("day");
    var dayNumber = parseInt(dayElement.innerText);
    dayElement.innerText = dayNumber + 1;

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

    /* Update karma */
    var karmaElement = document.getElementById("karma");
    var karmaNow = karma / dayNumber;
    karmaElement.innerText = karmaNow.toFixed(1);

}