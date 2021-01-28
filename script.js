
var num1="";
var num2="";
var isAddClicked=false;
var isMinusClicked=false;
var isDivideClicked=false;
var isMultipleClicked=false;
var isAnyOperationSelected=false;
var screenTxt1="";
var screenTxt2="";
var screenTxtOperator="";



function allClear(){
	num1="";
	num2="";
	isAddClicked=false;
	isMinusClicked=false;
	isDivideClicked=false;
	isMultipleClicked=false;
	isAnyOperationSelected=false;
	screenTxt1="";
	screenTxt2="";
	screenTxtOperator="";
	document.getElementById("line1").innerHTML="";
}

function getElement(cell){

 if(cell.innerHTML=="+"){
 	isAddClicked=true;
    isMinusClicked=false;
    isDivideClicked=false;
    isMultipleClicked=false;
 	screenTxtOperator=" + ";
 	

 	isAnyOperationSelected=true;
 	document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2;
 	
 }
 if(cell.innerHTML=="*"){
 	isMultipleClicked = true ;
 	isAddClicked=false;
    isMinusClicked=false;
    isDivideClicked=false;
 	screenTxtOperator=" * ";
 	

 	isAnyOperationSelected=true;
 	document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2;
 }
 if(cell.innerHTML=="-"){
 	isMinusClicked = true ;
 	isAddClicked=false;
    isDivideClicked=false;
    isMultipleClicked=false;
 	screenTxtOperator=" - ";
 	

 	isAnyOperationSelected=true;
 	document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2;
 }
 if(cell.innerHTML=="/"){
 	isDivideClicked = true ;
 	isAddClicked=false;
    isMinusClicked=false;
    isMultipleClicked=false;
 	screenTxtOperator=" / ";

 	isAnyOperationSelected=true;
 	document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2;
 }

 if(cell.innerHTML=="="){

 	if(isAddClicked){
 		document.getElementById("line1").innerHTML= screenTxt1+screenTxtOperator+screenTxt2+"<br> = "+(parseFloat(num1)+parseFloat(num2))+"";
 	    isAddClicked=false;
 	} 

 	 if(isMultipleClicked){
 		document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2+"<br> = "+(parseFloat(num1)*parseFloat(num2));
 	    isMultipleClicked=false;
 	} 
 	 if(isMinusClicked){
 		document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2+"<br> = "+(parseFloat(num1)-parseFloat(num2));
 	    isMinusClicked=false;
 	} 
 	 if(isDivideClicked){
 		document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2+"<br> = "+(parseFloat(num1)/parseFloat(num2));
 	    isDivideClicked=false;
 	}
 	
 	num1="";
 	num2="";
 	screenTxt2="";
 	screenTxt1="";
 	screenTxtOperator="";
 	isAnyOperationSelected=false;

 }

 if(cell.innerHTML!="+" && cell.innerHTML!="-" && cell.innerHTML!="*"  && cell.innerHTML!="/"&& cell.innerHTML!="=" && isAnyOperationSelected){
 	num2=num2+ cell.innerHTML;
 	screenTxt2=num2;
 	document.getElementById("line1").innerHTML=screenTxt1+screenTxtOperator+screenTxt2;
 	

 	
 } else if(cell.innerHTML!="+" && cell.innerHTML!="-" && cell.innerHTML!="*"  && cell.innerHTML!="/"&& cell.innerHTML!="="&& (!isAnyOperationSelected)){
 	num1=num1+ cell.innerHTML;
 	screenTxt1=num1;
 	document.getElementById("line1").innerHTML=screenTxt1;
 	
 }


//dinuka- 1/28/2021
}
