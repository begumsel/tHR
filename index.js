
function showSearch(){
	document.getElementById('search-input').style.visibility="visible";
  document.getElementById('search-input').style.float="left";
  document.getElementsByClassName('fa fa-search')[0].style.visibility="hidden";
}

function showIcon(){
  document.getElementById('search-input').style.visibility="hidden";
  document.getElementsByClassName('fa fa-search')[0].style.visibility="visible";
  document.getElementsByClassName('fa fa-search')[0].style.display="inline-block"
  document.getElementsByClassName('fa fa-search')[0].style.marginTop="0.5em";
  document.getElementsByClassName('fa fa-search')[0].style.float="left";
}

function direct(){
  // document.getElementById('next').window.location.replace("odeme.html");
}



//slider için//
//var slideIndex = 1;
//showDivs(slideIndex);

/*function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}/*



//////////////////////////////////

/*body onload="setDate()"*/
/*<script type="text/javascript">
	function Open(){
		x=document.getElementById('nav');
		x.style.display="inline-block";
	}
    function Close(){
	    x=document.getElementById('nav');
	    x.style.display="none";
    }
    function setDate(){
    	document.getElementById('date').innerHTML=Date();
    }

    document.write('hello');

    //while loop//

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');

    //show browser height //

var h = window.innerHeight;

document.getElementById('height').innerHTML= h;

</script>*/

/*<button type="button" onclick="Open()">Ac</button>*/
//<button type="button" onclick="Close()">Kapa</button>
//<span id = "date"></span>


