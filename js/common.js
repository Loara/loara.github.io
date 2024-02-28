function rmall(){
	document.getElementById("hom").classList.remove("active");
	document.getElementById("pub").classList.remove("active");
	document.getElementById("cur").classList.remove("active");
	document.getElementById("res").classList.remove("active");
	document.getElementById("lin").classList.remove("active");
}

function closeMenu(){
	document.getElementById("nav_pag_menu").style.height = "0px";
	document.getElementById("nav_label").style.backgroundColor = "transparent";
}

function closeLMenu(){
	document.getElementById("nav_lan_menu").style.height = "0px";
}

function closeAll(){
	closeMenu();
	closeLMenu();
}

function pag_toggle(){
	var trg = document.getElementById("nav_pag_menu");
	var dis = window.getComputedStyle(trg).getPropertyValue("height");
    closeLMenu();
	if(dis === "0px"){
		trg.style.height = "auto";
		document.getElementById("nav_label").style.backgroundColor = "white";
	}
	else{
		trg.style.height = "0px";
		document.getElementById("nav_label").style.backgroundColor = "transparent";
	}
}

function lan_toggle(){
	var trg = document.getElementById("nav_lan_menu");
	var dis = window.getComputedStyle(trg).getPropertyValue("height");
    closeMenu();
	if(dis === "0px"){
		trg.style.height = "auto";
	}
	else{
		trg.style.height = "0px";
	}
}

function chglan(lang){
	let pag = "hom";
    if(document.getElementById("hom").classList.contains("active")){
    	pag = "hom";
    }
    else if(document.getElementById("pub").classList.contains("active")){
    	pag = "pub";
    }
    else if(document.getElementById("cur").classList.contains("active")){
    	pag = "cur";
    }
    else if(document.getElementById("res").classList.contains("active")){
    	pag = "res";
    }
    else if(document.getElementById("lin").classList.contains("active")){
    	pag = "lin";
    }
    window.open("index.htm?lan="+lang+"&pag="+pag, "_self");
}

 function mainpage2(){
	closeMenu();
	closeLMenu();
	mainpagem();
}

 function pubpage2(){
	closeMenu();
	closeLMenu();
	pubpagem();
}

 function curpage2(){
	closeMenu();
	closeLMenu();
	curpagem();
}

 function respage2(){
	closeMenu();
	closeLMenu();
	respagem();
}

function linpage2(){
	closeMenu();
	closeLMenu();
	linpagem();
}

const eto = "pron94@gmail.com";

function get_email() {
	return "<span class=\"email\">" + eto +  "</span>";
}

function collap(){
	let ret = "";
	ret += "dedo.paolo" + ".2";
	ret += eto.substring(5,7);
	ret += eto.substring(0, 3);
	ret += "t" + eto.substring(2,4) + ".me";
	window.alert(ret);
}

