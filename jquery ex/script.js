$("document").ready(function() {
    $("#text").hover(function() {
        $(this).css("color","black");
    });
    $("#text").click( function() {
        alert("tu as trouver la deuxieme fonction");
    });

});

// objet

var emp = {
    name: "Zara",
    age: 10
 };
 console.log(emp);

// scope 
var myVar = "global";     // ==> Declare a global variable

//clossures
function create() {
    var counter = 0;
     
    return {
       increment: function() {
          counter++;
       },
        print: function() {
          console.log(counter);
       }
    }
 }
 var c = create();
c.increment();
c.print();  