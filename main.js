var karma = 0;
var allItems = 0;
var finishedItems = 0;

var error = 'This page does not exist.';
var dog =
    'A dog walks toward you and barks, and you realize that as an alien, \
    you are able to talk to the dog. You are new to the planet, and it seems \
    like the planet Earth is dominated mainly by humans. There are many people \
    walking around and moving fast in box-like vehicles with wheels. You are \
    considering if you should \
    <a href="#" onclick="turnPage(\'talkingDog\')">talk to the dog</a> or \
    <a href="#" onclick="turnPage(\'talkingHuman\')">interact with a human</a>. \
    As different creatures, they probably have different social norms and \
    understandings.';
var talkingDog =
    'You squat down to look at the dog in the eye and put on a a friendly smile. \
    Before you could say anything, the dog starts wiggling his tail and says: \
    "Arf. Who are you?" \
    <br><br>\
    "I am running away from my planet and I landed here on Earth. I\'m trying to \
    blend in, but I\'m not sure where to start," you said.\
    <br><br>\
    "My owner just died, and I am hungry. The house is empty of any other living \
    being, besides me. Can you feed me some food? I know where the bag of food is, \
    but I cannot reach it myself. Could you come to my house? The keys are on my \
    collar and I know the way. After you feed me, I will tell you some ways," \
    the dog responded.\
    <br><br>\
    You feel suspicious, but you\'re on a new planet, in which you know no one, \
    and you have nothing to lose, so you just want to follow the dog and see how \
    it goes. \
    <a href="#" onclick="turnPage(\'dogHome\')">You tell the dog that you would like to follow him</a>. \
    Or you can \
    <a href="#" onclick="turnPage(\'talkingHuman\')">reject the dog and talk to a human being</a> instead.';
var talkingHuman =
    'Many people look busy walking around, so you are looking for someone that doesn\'t \
    look busy. You see a stranger that is sitting on a chair and staring at a rectangular \
    box that shines in their hand with high focus. As you approach, the stranger does not \
    look up at you and continue looking down. You started talking to get their attention.\
    <br><br>\
    "Hey how do you become a normal human being?" you asked genuinely, wanting to blend \
    into the human word. The person looks up at you and frowned. "Are you just being sassy, \
    because I\'m not interacting with people in the \'real world\' but people in the \'virtual \
    world\' on my phone?" they eyeroll and walk away. You wonder what a phone is, and you guess \
    that it is their communication system. You turn around to see if you can talk to others, but \
    instead, you see the dog has followed you over, and the dog seems friendly. So you decided to \
    <a href="#" onclick="turnPage(\'dogHome\')">tell the dog that you would like to follow him</a>.';
var dogHome =
    'You open the door with the keys on the dog\'s collar. The dog walks over to the kitchen and \
    stands in front of the cabinet. "My food is in the big bag in this cabinet. Can you open it \
    and pour some dog food into my tray?" "I don\'t see why not?" you answered as you pour the a \
    lot of them into the bowl. "My past owner never gave me this much before! This is more than \
    double the amount my past owner gives me" the dog twirls around and jumps up and down. The dog \
    finishes gulping all the food very fast, and leads you to a study room. "The book on the top \
    right corner of the desk is what my past owner reads and writes from every day, if you would \
    like to take a look." \
    <br><br>\
    You pick it up and the title page reads "Things All Good Humans Do." You decide to \
    <a href="#" onclick="turnPage(\'checkList\')">open the book</a>.';
var checkList =
    'You quickly flip through the book, and you see that each page is a checklist. You stop at a random \
    page that reads:\
    <br><br>\
    ( ) Take out the trash\
    <br>\
    ( ) Read a book\
    <br>\
    ( ) Walk in the park in the morning\
    <br>\
    ( ) Go to bed before 9 pm.\
    <br><br>\
    You think you have found the answer to blend in well on Earth now. You start to \
    <a href="#" onclick="turnPage(\'blendIn\')">add and delete things according to what you want</a>.';
var blendIn =
    '<input type="text" name="val" id="val">\
    <button onclick="addElement();">Add</button>\
    \
    <ul id="list"></ul>\
    \
    <h1>You are <span id="percentage">0</span>% done.</h1>\
    <h1>You are on Day <span id="day">1</span>.</h1>\
    <h1>Your karma is <span id="karma">0.0</span>.</h1>\
    \
    <button id="finishday" onclick="finishDay()">Finish Day</button>\
    \
    <button id="startover" onclick="startOver()">Start Over</button>';

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

/* Navigate the storyline. */
function turnPage(event) {
    pageText = document.getElementById("page");

    switch (event) {
        case 'dog':
        pageText.innerHTML = dog;
        break;

        case 'talkingDog':
        pageText.innerHTML = talkingDog;
        break;

        case 'talkingHuman':
        pageText.innerHTML = talkingHuman;
        break;

        case 'dogHome':
        pageText.innerHTML = dogHome;
        break;

        case 'checkList':
        pageText.innerHTML = checkList;
        break;

        case 'blendIn':
        pageText.innerHTML = blendIn;
        break;

        default:
        pageText.innerHTML = error;
    }
}


