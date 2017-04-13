/*
 * Global variables.
 */
var karma = 0;
var allItems = 0;
var finishedItems = 0;

function getDonut(percent) {
switch(parseInt(percent)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        return '<img src="img/donuts/donutparts/100.png">'
        break;

        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        return '<img src="img/donuts/donutparts/96.png">'
        break;


        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        return '<img src="img/donuts/donutparts/92.png">'
        break;

        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        return '<img src="img/donuts/donutparts/88.png">'
        break;

        case 20:
        case 21:
        case 22:
        case 23:
        return '<img src="img/donuts/donutparts/84.png">'
        break;

        case 24:
        case 25:
        case 26:
        case 27:
        return '<img src="img/donuts/donutparts/80.png">'
        break;

        case 28:
        case 29:
        case 30:
        case 31:
        return '<img src="img/donuts/donutparts/76.png">'
        break;

        case 32:
        case 33:
        case 34:
        case 35:
        return '<img src="img/donuts/donutparts/72.png">'
        break;

        case 36:
        case 37:
        case 38:
        case 39:
        return '<img src="img/donuts/donutparts/68.png">'
        break;

        case 40:
        case 41:
        case 42:
        case 43:
        return '<img src="img/donuts/donutparts/64.png">'
        break;

        case 44:
        case 45:
        case 46:
        case 47:
        return '<img src="img/donuts/donutparts/60.png">'
        break;

        case 48:
        case 49:
        case 50:
        case 51:
        return '<img src="img/donuts/donutparts/56.png">'
        break;

        case 52:
        case 53:
        case 54:
        case 55:
        return '<img src="img/donuts/donutparts/52.png">'
        break;

        case 56:
        case 57:
        case 58:
        case 59:
        return '<img src="img/donuts/donutparts/48.png">'
        break;

        case 60:
        case 61:
        case 62:
        case 63:
        return '<img src="img/donuts/donutparts/44.png">'
        break;

        case 64:
        case 65:
        case 66:
        case 67:
        return '<img src="img/donuts/donutparts/40.png">'
        break;

        case 68:
        case 69:
        case 70:
        case 71:
        return '<img src="img/donuts/donutparts/36.png">'
        break;

        case 72:
        case 73:
        case 74:
        case 75:
        return '<img src="img/donuts/donutparts/32.png">'
        break;

        case 76:
        case 77:
        case 78:
        case 79:
        return '<img src="img/donuts/donutparts/28.png">'
        break;

        case 80:
        case 81:
        case 82:
        case 83:
        return '<img src="img/donuts/donutparts/24.png">'
        break;

        case 84:
        case 85:
        case 86:
        case 87:
        return '<img src="img/donuts/donutparts/20.png">'
        break;

        case 88:
        case 89:
        case 90:
        case 91:
        return '<img src="img/donuts/donutparts/15.png">'
        break;

        case 92:
        case 93:
        case 94:
        case 95:
        return '<img src="img/donuts/donutparts/10.png">'
        break;

        case 96:
        case 97:
        case 98:
        case 99:
        return '<img src="img/donuts/donutparts/05.png">'
        break;

        case 100:
        return '<img src="img/donuts/donutparts/00.png">'
        break;

        default:
        return '<img src="img/donuts/donutparts/56.png">'
    }
}

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
        `<li class="not done">\
            <button onclick="remove(this)">\
                Delete\
            </button>\
            <button onclick="done(this)">\
                Done\
            </button>\
            <span class="item">` +
                valToAdd +
            `</span>\
        </li>`;

    /* Update percentage */
    var percentageElement = document.getElementById("percentage");
    var percent = parseInt((finishedItems / (allItems == 0 ? 1 : allItems)) * 100)
    percentageElement.innerText = percent;

    /* Update donut */
    var donutElement = document.getElementById("donut");
    var donutImage = getDonut(percent);
    donutElement.innerHTML = donutImage;
        
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
    var percent = parseInt((finishedItems / (allItems == 0 ? 1 : allItems)) * 100)
    percentageElement.innerText = percent;

    /* Update donut */
    var donutElement = document.getElementById("donut");
    var donutImage = getDonut(percent);
    donutElement.innerHTML = donutImage;

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
    var percent = parseInt((finishedItems / (allItems == 0 ? 1 : allItems)) * 100)
    percentageElement.innerText = percent;

    /* Update donut */
    var donutElement = document.getElementById("donut");
    var donutImage = getDonut(percent);
    donutElement.innerHTML = donutImage;
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



