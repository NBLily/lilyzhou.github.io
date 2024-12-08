window.onload = function(){
	/* running pictures */
	setInterval(Broadcast,2000);
	var img_index = 0;
	function Broadcast(){
		var img_arr = ["./度假村大门.jpg","./imgss/bar.jpg","./imgss/VRbac.jpg","./imgss/BBS.jpg"];
		if(img_index > img_arr.length-1){
			img_index = 0;
		}
		window.document.getElementsByTagName("header")[0].style.backgroundImage = "url("+img_arr[img_index]+")";
		img_index++; 
	}
	/* click the text,change text color */
	var p = document.getElementsByClassName("col");
	for (var i = 0; i < 2; i++) {
		p[i].getElementsByTagName("p")[0].onclick = function(){
			if(this.style.color == "rgb(170, 85, 255)"){
				this.style.color = "#000";
			}else{
				this.style.color = "#aa55ff";
			}
		}
	}
}
