//------------------sticky nav bar---------------//

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//---------------random button---------------//

            
function findMovie() {
    let Movie = ["Citizen Kane", "The Apartment" ,"Fargo", "All ABout Eve", "Casablanca", "Double Indemity" , "A Face in the Crowd", "A Face in the Crowd"  ,"Do the Right Thing"
                ,"The Treasure of the Sierra Madre","Boogie Nights","Rear Window","Pulp Fiction","Fast TImes at Ridgemont High","Boyz n the Hood","Midnight Cowboy",
                "Sunset Boulevard","Vertigo","Some Like it Hot","The Maltese Falcon","On the Waterfront","Touch of Evil",  ,"Cool Hand Luke","To Kill a Mockingbird",
                "Who Framed Roger Rabbit","Duck Soup","Groundhog Day","The Asphalt Jungle","Wizard of Oz","This Spinal Tap","The Man Who Shot Liberty Valance","A Night at the Opera",
                "Who's Afraid of Virginia Woolf","Dr Strangelove","Blazing Saddles","Night of the Hunter","The Thing","Unforgiven","The Big Lebowski","Raiders of the Lost Ark",
                "Blade Runner","The Best Years of Our Lives","The Htch-Hiker","It Happened One Night","Sullivan's Travels","Singing in the Railroad","Psycho","Rocky","Young Frankenstein",
                "Jaws","High Noon","Halloween","Ghostbusters","Shadow of the Doubt","Raising Arizonia","Big","Bonnie and Clyde","A Clockwork Orange","Stagecoach","The Royal Tennenbaums",
                "Nation Lampoon's Vacation","The Wild Bunch","12 Angry Men","Alien","Coming to America" ,"Willy Wonka and The Chocalate Factory","Die Hard","No Country for Old Men",
                "Dazed and Confused","The Searchers","Back to the Future","Planes Trains and Automobiles","LA Confidential","The Grapes of Wraith","Bringing up Baby","Scream","A Christmas Story",
                "To Have or Have Not","The Shining","Ed Wood","Mr Smith Goes to Washington","Hail the Conquering Hero","First Blood","Dog Day Afternoon","The Terminator","E.T. The Extraterrestrial",
                "Shaun of the Dead","The Lady Eve","North by Northwest","Apocalypse Now","Clueless","Taxi Driver","Platoon","What Ever Happened to Baby Jane","Get Out","Fight CLub",
                "Gentlemen Prefer Blondes","Grease","Scott Pilgrim versus the World"
];

    let random = Math.floor(Math.random() * (Movie.length - 1));

    document.getElementById("randomMovie").setAttribute("value", Movie[random]);
}

