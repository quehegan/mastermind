var colSel;
var ans = [];
var numAns = 12;
var userAns = [];
var selectedColor;
var numColors = 6;
var curGuess = 0;
pegs  = ['redball.gif',    'blueball.gif',    'brownball.gif',
                'greenball.gif',  'yellowball.gif',  'pinkball.gif' ];               

//Displays the guess pegs                
function displayPegs(){
	for (color in pegs){
		document.write("	<td align='center'>");
		document.write("		<a href='javascript:selectColor("+ color +")'>");
		document.write("			<img src=" + pegs[color] + " >");
		document.write("		</a>");
		document.write("	</td>");
	}
}

//sets the current selected color to the colSel variable
function selectColor(color){
	colSel = color;
}            
//sets the color
function setColor(id, row){
	if(curGuess != row){
		alert("You are on guess "+(curGuess+1)+".");
	}
	else{
		document.getElementById(id).innerHTML = "<img src="+pegs[colSel]+" border=0/>";
	}
}
//Submits the guess if all pegs have been placed
function submitGuess(){
	alert("here guess");
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
			document.write("<td id='col"+j+"row"+i+"' valign='top' align='center' onclick='setColor(this.id, "+i+")'>");
			document.write("<img src=whitepixel.gif >");
			document.write("</a>");
			document.write("</td>");
		}
		document.write("</tr>");
	}
}

//Displays the answer
function displayAns(){
	for(color in ans){
		document.write("<td valign='top' style='height:37	'>");
		document.write("			<img src=" + pegs[ans[color]] + " >");
		document.write("</td>");
	}
}