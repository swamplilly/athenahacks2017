/*
 * STORY BOOK PAGES.
 */

var error = 'This page does not exist.';
var dog =
    `A dog walks toward you and barks, and you realize that as an alien, 
    you are able to talk to the dog. You are new to the planet, and it seems 
    like the planet Earth is dominated mainly by humans. There are many people 
    walking around and moving fast in box-like vehicles with wheels. You are 
    considering if you should 
    <a href="#" onclick="addPage('talkingDog')">talk to the dog</a> or 
    <a href="#" onclick="turnPage('talkingHuman')">interact with a human</a>. 
    As different creatures, they probably have different social norms and 
    understandings.`;
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
    <a href="checklist.html">add and delete things according to what you want</a>.';

var crime_1 = 
`
<br><br>
WE KNOW YOU ARE HIDING. TURN YOURSELF IN IMMEDIATELY OR FACE 
<a href="#" onclick="addPage('warning')">ADDITIONAL CONSEQUENCES</a>`;

var warning = 
`
<br><br><br>
YOU HAVE BEEN <a href="#" onclick="turnPage('earth')">WARNED.</a>`;


var earth = 
`
<br><br>
Huh.. what is this <a href="#" onclick="addPage('habitable')">place</a>`;

var habitable = 
`
<p>
<br><br>
The atmosphere seems habitable. I'd better hideout here until the Galactic Federation
 <a href="#" onclick="turnPage('crash')">leaves me alone..</a></p>` ;

 var crash = 
 `
 <p><br><br>The ASTRODONUT crashed into a <a href="#" onclick="addPage('forest')">forest</a></p>`;

 var forest = 
 `
 <br> You wake up to the sound of a hairy earthling masticating at your 
 <a href="#" onclick="turnPage('dog1')">ship</a></p>`;

 var dog1  = 
 `<p><br><br>Arf! u look kinda <a href="#" onclick="addPage('funny')">funny</a></p>`;

 var funny = 
 ` <br>...<br> <br> and u smell kinda funny. <br> <a href="checklist.html">who are u</a></p>`; 




/*
 * TURN PAGES.
 */
function turnPage(event) {
    document.body.innerHTML = eval(event);
}

/*
 * ADD ANOTHER TEXT SECTION TO CURRENT PAGE
 */
function addPage(event) {
    document.body.innerHTML += eval(event);
}
