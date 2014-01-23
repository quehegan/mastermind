var colSel;
var ans = [];
var numAns = 12;
var userAns = [];
var selectedColor;
var numColors = 6;
pegs  = ['redball.gif',    'blueball.gif',    'brownball.gif',
                'greenball.gif',  'yellowball.gif',  'pinkball.gif' ];               

//Displays the guess pegs                
function displayPegs(){
	//var retVal = "";
	for (color in pegs){
		document.write("	<td align='center'>");
		document.write("		<a href='javascript:selectColor("+ color +")'>");
		document.write("			<img src=" + pegs[color] + " >");
		document.write("		</a>");
		document.write("	</td>");
	}
    //return retVal;
}

//sets the current selected color to the colSel variable
function selectColor(color){
	colSel = color;
	//alert(colSel);
}            
//sets the color
function setColor(id){
	//alert(id);
	//alert(pegs[colSel]);
	document.getElementById(id).innerHTML = "<img src="+pegs[colSel]+" border=0/>";
}
//Submits the guess if all pegs have been placed
function submitGuess(){
	alert("here guess");
}

//Creates the answer that the user is trying to guess
function createAns(){
	for(var i=0;i<pegs.length;i++){
		ans[i] = Math.floor( pegs.length * Math.random() );
	}
}
//makes the board
function makeBoard(){
	for(var i=0;i<numAns;i++){
		document.write("<tr>");
		for(var j=0;j<numColors;j++){
			document.write("<td id='col"+j+"row"+i+"' valign='top' align='center' onclick='setColor(this.id)'>");
			document.write("<img src=whitepixel.gif >");
			document.write("</a>");
			document.write("</td>");
		}
		document.write("</tr>");
	}
}

//Displays the answer
function displayAns(){
	var retVal = ""
	for(color in ans){
		retVal += "<td valign='top' style='height:37	'>";
		retVal += "			<img src=" + pegs[ans[color]] + " >";
		retVal += "</td>";
	}
	return retVal;
}