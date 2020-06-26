var charater = document.getElementById("charater");
var block = document.getElementById("block");


function jump (){
	if (charater.classList!="animate"){
	charater.classList.add("animate");
}
	setTimeout(function(){
		charater.classList.remove("animate");
	},500)
}



var checkDead = setInterval(function(){
		var charaterTop=
		parseInt(window.getComputedStyle(charater).getPropertyValue("top"));
		parseInt(window.getComputedStyle(block).getPropertyValue("left"));
		if (blockLeft<20 && blockLeft>0){
			block.style.animation="none";
			block.style.display ="none"
			alert("You lose");
		}

},10)