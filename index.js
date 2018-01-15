
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

