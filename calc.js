alert("Basic calculator project. Proceed by pressing 'ENTER' on your keyboard")

function calc(){

    function sum(x,y){
        addnum = (x+y)
        alert(addnum);
    }
    function subtract(c,d){
        subt = (c-d)
        alert(subt);
    }
    function mult(x,y){
        ml = (x*y)
        alert(ml);
    }
    function divd(c,d){
        dd = (c/d)
        alert(dd);
    }

    operator = prompt("What operator would you want to perform? +-*/" );
    if (operator==="+") {
        first_number = Number(prompt("Enter first number: "));
        second_number = Number(prompt("Enter second number: "));
        sum(first_number,second_number);
    }
    else if (operator==="-") {
        first_number = Number(prompt("Enter first number: ")) ;
        second_number = Number(prompt("Enter second number: "));
        subtract(first_number,second_number);
    } 
    else if (operator==="*") {
        first_number = Number(prompt("Enter first number: ")) ;
        second_number = Number(prompt("Enter second number: "));
        mult(first_number,second_number);
    }   
    else if (operator==="/") {
        first_number = Number(prompt("Enter first number: ")) ;
        second_number = Number(prompt("Enter second number: "));
        divd(first_number,second_number);
    }   
    else {
        alert("invalid input");
    }
    

}


calc()












