//Poping up a message in the screen
alert("Hello World!");

//Variables
var message = "Hello World from the variable"
//Alerting the content:
document.write(message);


//Operations
var a = 2;
var b = 3;

var sumop = a+b;
var subop = a-b;
var multop = a*b;
var divop = a/b;
//Rest of a division
var moduleop = a%b;

document.write("<br/>");
document.write("Result of the sum: " + sumop);
document.write("<br/>");
document.write("Result of subtaction: " + subop);
document.write("<br/>");
document.write("Result of multiplication: " + multop);
document.write("<br/>");
document.write("Result of division: " + divop);
document.write("<br/>");
document.write("Result of module: " + moduleop);
document.write("<br/>");

//Conditionals IF - ELSE
//Checking if PAIR or ODD
if (a%2 == 1) {
    document.write(a + " is odd");
    }
    else{
        document.write(a + " is pair");
    }

//Rederim HTML under the write function
//to break line
document.write("<br/>");

if (b%2 == 1) {
    document.write(b + " is odd");
    }
    else{
        document.write(b + " is pair");
    }

document.write("<br/>");

//Testing ELSE IF
if (a == b){
    document.write(a + " = " +b);
    }
    else if (a > b){
    document.write(a + " is great than " + b);
    document.write("<br/>");
    }
    else {
        document.write(a + " is less than " + b)
        document.write("<br/>");
    }


//WHILE
var i = 0;

while ( i<5 ){
    document.write("testing WHILE: " + i);
    document.write("<br/>");

    i = i+1;
}


//FOR
for (var j = 0; j < 4; j++){
    document.write("testing FOR: " + j);
    document.write("<br/>");

}

//ARRAYS
var list = ["orange","apple","banana","grape","straberry"];
//Breaking line in the HTML
document.write("<br/>");

document.write("testing Array: " + list);

document.write("<br/>");
document.write("testing Array 2nd item: " + list[1]);
document.write("<br/>");

//Passing thru all the itens:
for (l in list){
    document.write("<br/>");
    document.write("Position " + l + " of the ARRAY is " + list[l]);
}

//Printing in the Console
//Most used when debugging code
console.log("-----> my message in the log <-----")

//The message above will be seen in the 
//Web Console when the code be executed

document.write("<br/><br/>");

//Functions
//This example receives 2 values thru "e" and "f" 
//and sum the values inside the function write() to print it in the screen.

function soma(e,f){
    document.write("The sum result of variable1 + variable2 is: ");
    document.write(e+f);
}

//The function is only processed once it is called,
//so, bellow is one example where we pass the two needed values

soma(7, 10);

//Now it shaw print 7 + 10 result in the html.

//Now follow one example regarding where the data
//is returned

document.write("<br/><br/>");

function sub(var1, var2){
    return var1-var2;
}

var result1 = sub(10, 5);

document.write("The result of var1 - var2 is: " + result1);

//Another way to call it, calling the function as write() parameteter.
//document.write() is not capable to print like bellow:
console.log(sub(5, 2));


//We can have the result to be printed from the function or use return and
//print it or consume it outside.

document.write("<br/><br/>");


//EVENTS (interactin between JavaScript and HTML)

function mensagem(name){
    alert(name + ", YOU CLICKED IN THE BUTTON!");
}

//The following HTML code was updated in order
//to pass the value to the name variable and
//to call the function message:
//<button onclick="mensagem('Rodrigo')">CLICK HERE!</button>


//DOM:

function changeColor(color1){
    var element = document.getElementById("chgcolor");

    //This function GETS something from the HTML
    document.getElementById("chgcolor1");

    element.style.color = color1;

    //Here we are changing the id attributes imported
    //by the GET using JavaScript.
    chgcolor1.style.color = "green";

}

//The function above will receive from color1 the value that represents
//the color. It will be received from the SPAN tag by its tag ID.
//Then the element conteining the id of the tag will be changed in the style.color.

//The HTML tags that will suffer the updates were set as:
/*<span id="chgcolor">CHANGING FONT COLORS</span>

<button onclick="changeColor('blue')">BLUE</button>
<button onclick="changeColor('red')">RED</button>

<span id="chgcolor1">TESTING FONT COLORS -</span>*/


//VALIDATING INPUT FIELD:

function validate(){
    var name = document.getElementById('name1');

    if (name.value == "") {

        alert("Empty form. Unable to send");
    }

}


//JQUERY
//This is needed to be included inside the tag <head> in the HTML code:
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

//Checking first if the document HTML is ready,
//then executing the function
$(document).ready(function(){

    //Selector button, means it will interact with the
    //HTML button, then action of clicking in the button.
    $('#but1').click(function(){

        //Selector h1, then action that is hidding
        //the h1.
        
        //$('#firsth1').hide(); <----- without fade effect
        $('#firsth1').fadeOut('slow');

    });

    $('#but2').click(function(){
        
        //$('#firsth1').show(); <----- without fade effect
        $('#firsth1').delay(3000); //This will pause the script for 3 secs
        $('#firsth1').fadeIn('slow');
        
    });

});

//The validation can be simplified by using:
//$(function(){


//CHANGING - APPLYING CSS WITH JQUERY:
$(document).ready(function(){
    $('#but3').click(function(){

        $('#secondh1').css("color", "red");

    });
});


//INSERTING TEXT UNDER A HTML TAG:
$(document).ready(function(){
    $('#but4').click(function(){

        $('#insertext').text("Text successfully inserted...");
        $('#insertext').css('color','red');
        $('#insertext').css('border','1px solid grey');
        $('#insertext').css('border-radius', '5px');
        $('#insertext').css('padding', '8px');
        $('#insertext').fadeOut(5000);
    });
});

//THE SAME DECLARATION COULD BE DONE IN CHAIN
/*$('#insertext')
    .text("Text successfully inserted...")
    .css('color','red')
    .css('border','1px solid grey')
    .css('border-radius', '5px')
    .css('padding', '8px')
    .fadeOut(5000);*/

    //THE SAME DECLARATION COULD BE DONE IN CHAIN AND CSS GROUPING
    /*$('#insertext')
    .text("Text successfully inserted...")
    .css({color:'red',border:'1px solid grey',borderRadius:'5px',padding:'8px'})
    .fadeOut(5000);*/


//ADDING AND REMOVING CSS CLASS ATTRIBUTE IN HTML
$(document).ready(function(){
    $('#but5').click(function(){
        $('#chgclass').addClass('green');
    });

    $('#but6').click(function(){
        $('#chgclass').removeClass('green');
    });
});

//JAVASCRIPT JQUERY SLIDESHOW
$(function(){
    $('#l2').click(function(){
        $('#i2').show();
        $('#i1').hide();
        $('#i3').hide();
    })
    $('#l3').click(function(){
        $('#i3').show();
        $('#i1').hide();
        $('#i2').hide();
    })
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
    })

});