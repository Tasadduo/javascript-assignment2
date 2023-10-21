                   //CHAPTER 5
                   //MATH EXPRESSIONS

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//CODE:
// var a=+prompt("Enter First Number");
// var b=+prompt("Enter second number");
// var c=a+b;
// document.write("Sum of "+a+" and "+b+" is: "+c+" ");

//*******************************************************************/

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

//CODE:
// var a=+prompt("Enter First Number");
// var b=+prompt("Enter second number");
// var sub=a-b;
// var mul=a*b;
// var div=a/b;
// var mod=a%b;
// document.write("Subtraction of "+a+" and "+b+" is: "+sub+" \n ");
// document.write("Multiplication of "+a+" and "+b+" is: "+mul+" ");
// document.write("Division of "+a+" and "+b+" is: "+div+" ");
// document.write("Division of "+a+" and "+b+" is: "+mod+" ");

//*******************************************************************/

// 3. Do the following using JS Mathematic Expressions

//CODE:
// var a;
// document.write("“Value after variable declaration is: "+a);
// var a=5;
// document.write("Initial value: " +a);
// a++;
// document.write(" Value after increment is: " +a);
// a=a+7;
// document.write(" Value after addition is: " +a);
// a--;
// document.write(" Value after decrement is: " +a);
// a=a/3;
// document.write("“The remainder is: "+a);

//*******************************************************************/


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets
 
//CODE:
// var tick_cost=600;
// var five_tick_cost=tick_cost*5;
// document.write("Total cost to buy 5 tickets to a movie is: "+five_tick_cost+" ");

//*******************************************************************/

//5. Write a script to display multiplication table of any number in your browser.

// //CODE:
// document.write("TABLE OF 4 <br>");
// var table=4;
// document.write("4 x 1 = "+table+" <br>");
// document.write("4 x 2 = "+table*2+" <br>");
// document.write("4 x 3 = "+table*3+" <br>");
// document.write("4 x 4 = "+table*4+" <br>");
// document.write("4 x 5 = "+table*5+" <br>");
// document.write("4 x 6 = "+table*6+" <br>");
// document.write("4 x 7 = "+table*7+" <br>");
// document.write("4 x 8 = "+table*8+" <br>");
// document.write("4 x 9 = "+table*9+" <br>");
// document.write("4 x 10 = "+table*10+" <br>");

//*******************************************************************/

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//code:
// var cel_temp=20;
// var fahr_temp=100;
// var fah_temp=(cel_temp*9/5)+32;
// var celc_temp=((fahr_temp-32)*5/9);
// document.write("Temperation of "+cel_temp+" Celcius is "+fah_temp+" Fahrenheit <br> ");
// document.write("Temperation of "+fahr_temp+" Fahrenheit is "+celc_temp+" Celcius ");

//*******************************************************************/

//7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//code:
// var p1=650;
// var p2=100;
// var quantity_p1=3;
// var quantity_p2=7;
// var shipping_charges=100;
// var total=(p1*3)+(p2*7)+shipping_charges;
// document.write("Price of item 1 is: "+p1+" <br>");
// document.write("Quantity of item 1 is "+quantity_p1+" <br>");
// document.write("Price of item 2 is: "+p2+" <br>");
// document.write("Quantity of item 2 is "+quantity_p2+" <br>");
// document.write("Shipping charger: "+shipping_charges+" <br> ");
// document.write("Total cost of your order is: "+total);

//*******************************************************************/

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
//code:
// var total_marks=980;
// var marks_obtained=804;
// var percentage=(marks_obtained/total_marks)*100;
// document.write("Total Marks: "+total_marks+" <br> " );
// document.write("Marks Obtained: "+marks_obtained+" <br> " );
// document.write("Percentage: "+percentage);

//*******************************************************************/

//9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
//code:
// var dollar_pak= 104.80;
// var riyal_pak=28;
// var dollar_ten=dollar_pak*10;
// var riyal_twenfive=  riyal_pak*25;
// var total= dollar_ten+riyal_twenfive;
// document.write("1 US DOLLAR IN PAKISTANI RUPEES IS:  "+dollar_pak+" PAKISTANI RUPEES <br> <br> ");
// document.write("1 Saudi Riyal IN PAKISTANI RUPEES IS  "+riyal_pak+" PAKISTANI RUPEES <br> <br> ");
// document.write("Total Currency in PKR is: "+total);

//*******************************************************************/

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//code:
// var num=5;
// var result=(((num+5)*10)/2);
// document.write(result);

//*******************************************************************/

//11. The Age Calculator: Forgot how old someone is? Calculate it!
// var cur_year=2016;
// var birth_year=1992;
// var age=cur_year-birth_year;
// document.write("Your Age is: "+age);

//*******************************************************************/

//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
// var radius=20;
// var cir=(2*3.142)*radius;
// var ar=(radius*radius)*3.142;
// document.write("Radius of a circle is: "+radius+" <br> ");
// var cir=(2*3.142)*radius;
// document.write("The circumference is: "+cir+"  <br> ");
// document.write("The area is: "+ar+" ");

//*******************************************************************/

// 13.The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//code:
// var fav_snack="Choclato";
// var age=21;
// var max_age=75;
// var snack_per_day=3;
// var total=(max_age-age)*3;
// document.write("Favourite Snack: "+fav_snack+" <br> ");
// document.write("Current Age: "+age+" <br> ");
// document.write("Estimated Maximum Age: "+max_age+" <br> ");
// document.write("Amount Of Snack per day: "+snack_per_day+" <br> ")
// document.write("You will need "+total+" choclate chip to last you untill the ripe old age of "+max_age+" ");

//*******************************************************************/

                                           //CHAPTER 6-9

 //1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
 //code:
//  var a=+prompt("Enter a Number");
//  document.write("The Value of a is: "+a+" <br>");
//  ++a;
//  document.write("The Value Of ++a is:  "+a+" <br>");
//  document.write("The value of a is: "+a+" <br> ");
// a++;
// document.write("The Value Of a++ is:  "+a+" <br>");
// document.write("The value of a is: "+a+" <br> ");
// --a;

//2. What will be the output in variables a, b & result after execution of the following script:
//code:
// var a=2;
// var b=1;
// --a;
// document.write(a+ "<br>");
// var c=--a - --b;
// document.write(c+ " <br>");
// var d=--a - --b + ++b;
// document.write(d+ "<br>");
// var e=--a - --b + ++b + b--;
// document.write(e+ "<br>");
// document.write("a is: "+a+" <br>");
// document.write("b is: "+b+"  <br> ");
// document.write("result is "+e+"");

//3.Write a program that takes input a name from user & greet the user.
// var name=prompt("Enter your name: ");
// document.write("Welcome "+name+" in our program");

//4. 
//code:
// var num=+prompt("Enter any number:");
// document.write(" "+num+" x 1= "+num*1+"<br>");
// document.write(" "+num+" x 2= "+num*2+"<br>");
// document.write(" "+num+" x 3= "+num*3+"<br>");
// document.write(" "+num+" x 4= "+num*4+"<br>");
// document.write(" "+num+" x 5= "+num*5+"<br>");
// document.write(" "+num+" x 6= "+num*6+"<br>");
// document.write(" "+num+" x 7= "+num*7+"<br>");
// document.write(" "+num+" x 8= "+num*8+"<br>");
// document.write(" "+num+" x 9= "+num*9+"<br>");
// document.write(" "+num+" x 10= "+num*10+"<br>");

//5.
//code:
// var sub1=prompt("Enter first subject : ");
// var sub2=prompt("Enter second subject : ");
// var sub3=prompt("Enter third subject : ");
// var total_marks=100;
// var obt_sub1=+prompt("Enter marks of first subject: ");
// var obt_sub2=+prompt("Enter marks of second subject: ");
// var obt_sub3=+prompt("Enter marks of third subject: ");
// var perc_sub1=(obt_sub1/total_marks)*100;
// var perc_sub2=(obt_sub1/total_marks)*100;
// var perc_sub3=(obt_sub1/total_marks)*100;
// document.write(sub1+ "<br>");
// document.write(sub2+ "<br>");
// document.write(sub3+ "<br>");
// document.write("Obtained marks of first subject is "+obt_sub1+" <br>");
// document.write("Obtained marks of second subject is "+obt_sub2+" <br>");
// document.write("Obtained marks of third subject is "+obt_sub3+" <br>");   
// document.write("Total Marks "+total_marks+" <br>");
// document.write("Percentage of first subject is "+perc_sub1+" <br> ");
// document.write("Percentage of second subject is "+perc_sub2+" <br> ");
// document.write("Percentage of first subject is "+perc_sub3+" <br> ");


                           //CHAPTER 9
//1.
//CODE:
// var city=prompt("Enter City Name: ");
// if(city=="karachi"){
//     document.write("Welcome to city of lights");
// }

//2.
//code:
// var gender=prompt("Enter your sex");
// if(gender==="male"){
//     document.write("Good morning sir")
// }
// else if(gender==="female"){
//     document.write("Good morning mam")
// }
// else{
//     document.write("undefined")
// }

//3. 
//code:
// var signalcolor=prompt("Enter signal color: ");
// if(signalcolor==="red"){
//     document.write("MUST STOP!");
// }
// else if(signalcolor==="yello"){
//     document.write("READY TO MOVE");
// }
// else if(signalcolor==="green"){
//     document.write("MOVE NOW");
// }

//4.
//code:
// var remaining_fuel=+prompt("Enter remaing fuel");
// if(remaining_fuel < 0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("GO AHEAD");
// }

//5.
//code:
/*Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table:*/
//code:
// var total_marks=+prompt("Total Marks");
// var obt_marks=+prompt("Obtained Marks");
// var percentage=(obt_marks/total_marks)*100;
// document.write("Total Marks "+total_marks+" <br> ");
// document.write("Marks Obtained "+obt_marks+" <br>");
// document.write("Percentage : "+percentage+" % <br> ")

// if(percentage >=80){
//     document.write("Grade: A-ONE <br> ");
//     document.write("Reamarks: Excellent");
// }
// else if(percentage >=70){
//     document.write("Grade: A");
//     document.write("Reamarks: Good")
// }

// else if(percentage>=60)
// {
//     document.write("Grade: B");
//     document.write("Remarks: You need to improve")
// }

// if(percentage < 60){
//     document.write("Grade: Fail");
//     document.write("Remarks: Sorry")
// }

/* 7. Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/
//code:
// var sec_num=6;
// var guess_number=+prompt("Guess the number: ");
// if(guess_number ===sec_num){
//     document.write("Bingo! Correct Answer");
// }
// else if(guess_number===++sec_num){
//     document.write("Close enough to the correct answer.");
// }

/* 8: Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3.*/

//code:

// var num=+prompt("Enter any number: ");
// if(num%3===0){
//     document.write("Yes number is divisble by 3");
// }
// else{
//     document.write("Number is not divisible by 3");
// }

/* 9:Write a program that checks whether the given input is an
even number or an odd number.*/
//code:

// var num=+prompt("Enter any number: ");
// if(num%2===0){
//     document.write("Number is Even");
// }
// else{
//     document.write("Number is odd");
// }

/*Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/

//code:

// var temp=+prompt("Enter temperature");
// if(temp > 40){
//  document.write("It is too hot outside.");   
// }
// else if(temp > 30){
//     document.write("The Weather today is Normal.");
// }
// else if(temp > 20){
//     document.write("Todays weather is cold");
// }
// else if(temp > 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }

/* 10. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

//code:
var ch=prompt("Enter the operation (+, -, *, /, %");
var num1=+prompt("Enter number 1");
var num2=+prompt("Enter number 2");
var result;
if(ch==="+"){
    result=num1+num2;
    document.write("The sum of two numbers is: "+result);
}
else if(ch=== "-"){
    result=num1-num2;
    document.write("The subtraction of two number is: "+result);
}
else if(ch==="*"){
    result=num1*num2;
    document.write("The multiplication of two number is: "+result);
}
else if(ch==="/"){
    result=num1/num2;

    document.write("The division of two numbers is: "+result);
}
else{
    document.write("INVALID INPUT..........")
}