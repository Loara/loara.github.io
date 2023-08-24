
import { dictio as dictioEN } from '/js/switch_en.js';
import { dictio as dictioIT } from '/js/switch_it.js';
import {formatHTM, formatTex} from '/js/format.js';

export const pages = ['hom', 'pub', 'cur', 'res', 'lin'];
export const defpag = 0;

export const languages = [ 'it', 'en'];
export const lanname = [ 'Italiano', 'English'];
export const defid = 1;

export let module;

function get_email() {
	return "<span class=\"email\">pron94@gmail.com</span>";
}


export function selectPage() {
    switch( window.cpag ){
        case 0:
            mainpage();
            break;
        case 1:
            pubpage();
            break;
        case 2:
            curpage();
            break;
        case 3:
            respage();
            break;
        case 4:
            linpage();
            break;
        default:
            console.log(window.cpag);
    }
}

export function langn(){
    let len = languages.length;
    for(let i=0; i < len; i++){
        if(i === window.cid){
            document.getElementById("nav_lan_button").innerHTML = lanname[i];
        }
        else{
            document.getElementById("nav_lan_menu").innerHTML += "<a href=\"#\" onclick=\"chglan('" + languages[i] + "')\">" + lanname[i] + "</a>";
        }
    }
}

export function loadMod() {
    if( languages[window.cid] === 'en')
        module = dictioEN;
    else if( languages[window.cid] === 'it')
        module = dictioIT;
}

export function naming(){
    let homs = document.getElementsByClassName('n-home');
    for(let elem of homs){
        elem.innerHTML = module["hom"]["mtitle"];
    }
    let pubs = document.getElementsByClassName('n-pub');
    for(let elem of pubs){
        elem.innerHTML = module["pub"]["mtitle"];
    }
    let curs = document.getElementsByClassName('n-cur');
    for(let elem of curs){
        elem.innerHTML = module["cur"]["mtitle"];
    }
    let ress = document.getElementsByClassName('n-res');
    for(let elem of ress){
        elem.innerHTML = module["res"]["mtitle"];
    }
    let lins = document.getElementsByClassName('n-lin');
    for(let elem of lins){
        elem.innerHTML = module["lin"]["mtitle"];
    }

    homs = document.getElementsByClassName('m-home');
    for(let elem of homs){
        elem.innerHTML = module["hom"]["mtitlem"];
    }
    pubs = document.getElementsByClassName('m-pub');
    for(let elem of pubs){
        elem.innerHTML = module["pub"]["mtitlem"];
    }
    curs = document.getElementsByClassName('m-cur');
    for(let elem of curs){
        elem.innerHTML = module["cur"]["mtitlem"];
    }
    ress = document.getElementsByClassName('m-res');
    for(let elem of ress){
        elem.innerHTML = module["res"]["mtitlem"];
    }
    lins = document.getElementsByClassName('m-lin');
    for(let elem of lins){
        elem.innerHTML = module["lin"]["mtitlem"];
    }
}



export function mainpage(){
	window.rmall();
	document.getElementById("main").innerHTML = "<div class=\"mainpage\"><img src=\"img/foto.jpg\" class=\"maimage\"><div><h2 style=\"font-family: \'Indie Flower\';margin: 0 5%\">" + module["hom"]["description"] + "</h2><div style=\"display: flex; justify-content:flex-end\"><h3 style=\"margin: 0 10%;font-family: \'Indie Flower\';font-style:italic\">" + module["hom"]["author"] + "</h3></div></div></div>";
	document.getElementById("hom").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Paolo De Donato";
}

export function pubpage(){
	window.rmall();
	document.getElementById("main").innerHTML = "<h2 style=\"text-align:center\">" + module["pub"]["nothing"] + "</h2>";
	document.getElementById("pub").classList.add("active");
	document.getElementById("mtitle").innerHTML = module["pub"]["mtitle"];
}

export function respage(){
	window.rmall();
    let text = "<div class =\"container\"><table class=\"table table-hover\">\
			<thead>\
				<tr>\
				<th>"+ module["res"]["Rname"] +"</th>\
				<th><div class=\"tb_empty\"></div></th>\
				<th>"+ module["res"]["Rlan"] +"</th>\
				<th>"+ module["res"]["Rtype"] +"</th>\
				</tr>\
			</thead>\
			<tbody>";

    for(let RR of module["res"]["RES"]){
        text += "<tr>\
				<td><a href=\"" + RR.link + "\">" + RR.name + "</a></td>\
				<td></td>\
				<td>" + RR.lang + "</td>\
				<td>" + RR.type + "</td>\
				</tr>";
    }

    text += "</tbody></table>";

	document.getElementById("main").innerHTML = text;
	document.getElementById("res").classList.add("active");
	document.getElementById("mtitle").innerHTML = module["res"]["mtitle"];
}

function get_logo(name){
	if(name == "")
		return "";
	else{
		return "<img src=\"/img/" + name + "\" class=\"logo\" />";
	}
}

export function linpage(){
	window.rmall();
    let text = "<div class =\"lcont\"><table class=\"ltable\">\
			<tbody>";

    for(let RR of module["lin"]["LIN"]){
        text += "<tr>\
				<td>" + get_logo(RR.logoname) + RR.name + "</td><td class=\"llink\"><a href=\"" + RR.url + "\">" + RR.urlname + "</a></td>\
				</tr>";
    }

    text += "</tbody></table>";
	text += "<h2>" + module["ema"]["tit"] + "</h2>";
	text += "<div style=\"margin: 20px\">" + get_email() + formatHTM(module["ema"]["war"]) + " <a href=\"#\" onClick=\"collap(); return false;\" class=\"llink\">" + module["ema"]["cli"] + "</a></div>";
    text += "</div>";

	document.getElementById("main").innerHTML = text;
	document.getElementById("lin").classList.add("active");
	document.getElementById("mtitle").innerHTML = module["lin"]["mtitle"];
}

export function curpage(){
	window.rmall();
    let text = "<div class=\"cur\">\
             <a style=\"text-align:center;color:blue\" href=\"curriculum.htm?lan=" + languages[window.cid] + "\" target=\"_blank\">" + module["cur"]["generate"] + "</a>\
                <div class =\"cur_cont\">\
                <div class=\"cur_ltr\"></div><div class=\"cur_ctr\">";

    for(let RR of module["cur"]["records"]){
        text += "<div class=\"cur_sect\"><h2>" + RR.title + "</h2>";
        for(let QQ of RR.value){
            text += "<div class=\"cur_row\"><div class=\"cur_date\"><p>" + QQ.date + "</p></div>\
            <div class=\"cur_des\">" + formatHTM(QQ.text) + "</div></div>";
        }
        text += "</div>";
    }

    text += "</div><div class=\"cur_ltr\"></div></div>\
             </div>";

	document.getElementById("main").innerHTML = text;
	document.getElementById("cur").classList.add("active");
	document.getElementById("mtitle").innerHTML = module["cur"]["mtitle"];
}

const tag=/<.*?>/g; //Not greedy (?) and global (g)
const bol=/<b>.*?<\/b>/g;
const ita=/<i>.*?<\/i>/g;

export function generateCur(){
    let text = "\\documentclass[a4paper]{article}<br><br>\
            \\title{Paolo De Donato}<br>\
            \\author{Curriculum vitae}<br><br>\
            %Compile with XeLaTeX or LuaLaTeX<br><br>\
            \\begin{document}<br>\
            \\maketitle<br>";
    for(let RR of module["cur"]["records"]){
        text += "\\section{" + RR.title + "}<br><br>";
        text += "&nbsp \\begin{description}<br><br>";
        for(let QQ of RR.value){
            text += "&nbsp &nbsp \\item[" + QQ.date + "] " + formatTex(QQ.text) + "<br><br>";
        }
        text += "&nbsp\\end{description}<br><br>";
    }
    text += "\\end{document}";
    document.body.innerHTML = text;
}



