/*
* Name: Rodney Sellers
* Class: CSC 308
* Purpose: This is the mastermind written in javascript
*/
var colSel = -1;		//holds the color selected by the user
var ans = [];			//hidden anser to the problem
var numAns = 12;		//number of guesses you get
var userAns = [];		//the answer the user selects
var numColors = 6;		//number of possible colors
var curGuess = 0;		//current guess you are on 
var correct = 0			//number of correct colors in correct place
var almost = 0;			//number of correct colors but wrong place
pegs  = ['redball.gif',    'blueball.gif',    'brownball.gif',
                'greenball.gif',  'yellowball.gif',  'pinkball.gif' ];               

//Displays the guess pegs                
function displayPegs(){
	for (color in pegs){
		document.write("<td align='center'>");
		document.write("<a href='javascript:selectColor("+ color +")'>");
		document.write("<img src=" + pegs[color] + " >");
		document.write("</a>");
		document.write("</td>");
	}
}

//sets the current selected color to the colSel variable
function selectColor(color){
	colSel = color;
}    
        
//sets the color
function setColor(id, row, col){
	if(colSel < 0){
		alert("Please select a color first");
	}
	else{
		if(curGuess != row){
			alert("You are on guess "+(curGuess+1)+".");
		}
		else{
			document.getElementById(id).innerHTML = "<img src="+pegs[colSel]+" border=0/>";
			userAns[col]=colSel;
		}
	}
}
//Submits the guess if all pegs have been placed
function submitGuess(){
	var alertmsg = "";
	if(userAns.length<4){
		alert("Enter colors first");
		return;
	}
	checkAns();
	if(correct == 4){
		alert("You Win \n Press Ok to play again");
		location.reload(); 
	}
	for(var i=1;i<=correct;i++){
		var id = i+"R"+curGuess;
		document.getElementById(id).innerHTML = "<img src=redbox.gif border=0/>";
	}
	for(var i=1;i<=almost;i++){
		var id = (i+correct)+"R"+curGuess;
		document.getElementById(id).innerHTML = "<img src=blackbox.gif border=0/>";
	}
	curGuess++;
	userAns = [];
}

//Creates the answer that the user is trying to guess
function createAns(){
	for(var i=0;i<4;i++){
		ans[i] = Math.floor( pegs.length * Math.random() );
	}
}
//makes the board
function makeBoard(){
	for(var i=0;i<numAns;i++){
		document.write("<tr id="+i+">");
		document.write("<td>"+(i+1)+"</td>");
		for(var j=0;j<4;j++){
			document.write("<td id='col"+j+"row"+i+"' valign='top' align='center' onclick='setColor(this.id, "+i+","+j+")'>");
			document.write("<img src=whitepixel.gif >");
			document.write("</td>");
		}
	
		document.write("<td valign=top align=center>");
		document.write("<table>");
		document.write("<tr><td id=1R"+i+"><img src=greybox.gif ></td><td id=2R"+i+"><img src=greybox.gif ></td></tr>");
		document.write("<tr><td id=3R"+i+"><img src=greybox.gif ></td><td id=4R"+i+"><img src=greybox.gif ></td></tr>");
		document.write("</table>");
		document.write("</td>");
	
		document.write("</tr>");
	}
}
function checkAns(){
	correct=0;							//resets it to 0 for new guess
	almost=0;							//resets it to 0 for new guess
	var copyUA=[];						//copy of the userAns array
	var copyA=[];						//Copy of the ans array
	
	for(var i=0;i<ans.length;i++){	//makes copies of the answer and users choice
		copyUA[i] = userAns[i];			//so they can be modified without moidifying 
		copyA[i] = ans[i];				//the original
	}
	
	for(var i=0;i<copyA.length;i++){		//gets the number of correct answers
		if(copyA[i]==copyUA[i]){
			correct++;
			copyA[i]=-1;	//this will ensure that they 
			copyUA[i]=-2;	//can not be caounted again
		}
	}
	
	for(var i=0;i<copyA.length;i++){
		for(var j=0;j<copyUA.length;j++){
			if(copyA[i]==copyUA[j]){
				copyA[i]=-1;	//this will ensure that they 
				copyUA[j]=-2;	//can not be caounted again
				almost++;
			}
		}
	}
	
}
//Displays the answer
function displayAns(){
	for(color in ans){
		document.write("<td valign='top' style='height:37	'>");
		document.write("<img src=" + pegs[ans[color]] + " >");
		document.write("</td>");
	}
}