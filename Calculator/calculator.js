function calculatorLogic{

	var numString=[];

	$(".cell").click(function(){
     var pressed = $(this).children("h6").text();
     calculator(pressed);
    });


	function calculator(pressed){

	switch(pressed){
		case 'AC':
		var firstnumber=0;
		break;
		case '=':

		case '+':
		case '-':
		case '*':
		case'/':
		default:pushIn(pressed);
		break;
	} 

	function pushIn(pressed){
		numString.push(pressed);
	}

	function getnumber()
	{

	}
    

function add(num1,num2){
	return num1+num2;
}

function subtract(num1,num2){
	return num1-num2;
}


function multiply(num1,num2){
	return num1*num2;
}

function divide(num1,num2){
	return num1/num2;
}
}