var ans = [];
var selectedColor
var numColors = 6;
pegs  = ['redball.gif',    'blueball.gif',    'brownball.gif',
                'greenball.gif',  'yellowball.gif',  'pinkball.gif' ];               
                
function displayPegs(){
	var retVal = "";
	for (color in pegs){
		retVal += "<td align='center'>";
		retVal += "<a href='javascript:selectColor("+ color +")'>";
		retVal += "<img src=" + pegs[color] + " >";
		retVal += "</a>";
		retVal += "</td>";
	}
    return retVal;
}
function selectColor(color){
	alert("here");
}            
function submitGuess(){
	alert("here guess");
	/*
	for(color in pegs){
		
	}
	for (var c=0; c<nColumns; c++){
            getColumnNImage(c).src = colorImages[hiddenAnswer[c]];
        }
    */
}
function createAns(){
	for(color in pegs){
		ans[color] = getRandom(numColors);
	}
}