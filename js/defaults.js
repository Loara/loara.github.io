
import { dictio as dictioEN } from './switch_en.js';
import { dictio as dictioIT } from './switch_it.js';

export const pages = ['hom', 'pub', 'cur', 'res'];
export const defpag = 0;

export const languages = [ 'it', 'en'];
export const lanname = [ 'Italiano', 'English'];
export const defid = 1;

export let module;


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
        default:
            console.log(window.cpag);
    }
}

export function langn(){
    let len = languages.length;
    for(let i=0; i < len; i++){
        if(i === window.cid){
            document.getElementById("nav_brand_id").innerHTML = lanname[i];
        }
        else{
            document.getElementById("nav_lan").innerHTML += "<a href=\"#\" onclick=\"chglan('" + languages[i] + "')\">" + lanname[i] + "</a>";
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
}



export function mainpage(){
	window.rmall();
	document.getElementById("main").innerHTML = "<div><img src=\"img/foto.jpg\" class=\"maimage\"></div><div><div><h2 style=\"font-family: \'Indie Flower\';margin: 0 5%\">" + module["hom"]["description"] + "</h2><h3 style=\"margin: 0 10%;text-align:right;font-family: \'Indie Flower\';font-style:italic\">" + module["hom"]["author"] + "</h3>";
	document.getElementById("hom").classList.add("active");
	document.getElementById("mtitle").innerHTML = "Paolo De Donato";
}

export function pubpage(){
	window.rmall();
	document.getElementById("main").innerHTML = "<h2>" + module["pub"]["nothing"] + "</h2>";
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
    text += "<p>"+ module["res"]["war"] +"</p></div>";

	document.getElementById("main").innerHTML = text;
	document.getElementById("res").classList.add("active");
	document.getElementById("mtitle").innerHTML = module["res"]["mtitle"];
}

export function curpage(){
	window.rmall();
    let text = "<div class =\"cur_cont\">\
                <div class=\"cur_ltr\"></div><div class=\"cur_ctr\">";

    for(let RR of module["cur"]["records"]){
        text += "<h2>" + RR.title + "</h2>";
        for(let QQ of RR.value){
            text += "<div class=\"cur_row\"><div class=\"cur_date\">" + QQ.date + "</div>\
            <div class=\"cur_des\">" + QQ.text + "</div></div>";
        }
    }

    text += "</div><div class=\"cur_ltr\"></div></div>";

	document.getElementById("main").innerHTML = text;
	document.getElementById("cur").classList.add("active");
	document.getElementById("mtitle").innerHTML = module["cur"]["mtitle"];
}



