var currentPick = "AtkType";
var AtkType = "normal";
var DefTypeA = "normal";
var DefTypeB = "none";
var typeReference = {
	normal:{
		type:"Physical",
		none:1,
		normal:1,
		fire:1,
		water:1,
		grass:1,
		electric:1,
		ice:1,
		psychic:1,
		ghost:0,
		dark:1,
		poison:1,
		ground:1,
		rock:0.5,
		steel:0.5,
		fighting:1,
		flying:1,
		bug:1,
		dragon:1},
	fire:{
		type:"Special",
		none:1,
		normal:1,
		fire:0.5,
		water:0.5,
		grass:2,
		electric:1,
		ice:2,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:1,
		rock:0.5,
		steel:2,
		fighting:1,
		flying:1,
		bug:2,
		dragon:0.5},
	water:{
		type:"Special",
		none:1,
		normal:1,
		fire:2,
		water:0.5,
		grass:0.5,
		electric:1,
		ice:1,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:2,
		rock:2,
		steel:1,
		fighting:1,
		flying:1,
		bug:1,
		dragon:0.5},
	grass:{
		type:"Special",
		none:1,
		normal:1,
		fire:0.5,
		water:2,
		grass:0.5,
		electric:1,
		ice:1,
		psychic:1,
		ghost:1,
		dark:1,
		poison:0.5,
		ground:2,
		rock:2,
		steel:0.5,
		fighting:1,
		flying:0.5,
		bug:0.5,
		dragon:0.5},
	electric:{
		type:"Special",
		none:1,
		normal:1,
		fire:1,
		water:2,
		grass:0.5,
		electric:0.5,
		ice:1,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:0,
		rock:1,
		steel:1,
		fighting:1,
		flying:2,
		bug:1,
		dragon:0.5},
	ice:{
		type:"Special",
		none:1,
		normal:1,
		fire:0.5,
		water:0.5,
		grass:2,
		electric:1,
		ice:0.5,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:2,
		rock:1,
		steel:0.5,
		fighting:1,
		flying:2,
		bug:1,
		dragon:2},
	psychic:{
		type:"Special",
		none:1,
		normal:1,
		fire:1,
		water:1,
		grass:1,
		electric:1,
		ice:1,
		psychic:0.5,
		ghost:1,
		dark:0,
		poison:2,
		ground:1,
		rock:1,
		steel:0.5,
		fighting:2,
		flying:1,
		bug:1,
		dragon:1},
	ghost:{
		type:"Physical",
		none:1,
		normal:0,
		fire:1,
		water:1,
		grass:1,
		electric:1,
		ice:1,
		psychic:2,
		ghost:2,
		dark:0.5,
		poison:1,
		ground:1,
		rock:1,
		steel:0.5,
		fighting:1,
		flying:1,
		bug:1,
		dragon:1},
	dark:{
		type:"Special",
		none:1,
		normal:1,
		fire:1,
		water:1,
		grass:1,
		electric:1,
		ice:1,
		psychic:2,
		ghost:2,
		dark:0.5,
		poison:1,
		ground:1,
		rock:1,
		steel:0.5,
		fighting:0.5,
		flying:1,
		bug:1,
		dragon:1},
	poison:{
		type:"Physical",
		none:1,
		normal:1,
		fire:1,
		water:1,
		grass:2,
		electric:1,
		ice:1,
		psychic:1,
		ghost:0.5,
		dark:1,
		poison:0.5,
		ground:0.5,
		rock:0.5,
		steel:0,
		fighting:1,
		flying:1,
		bug:1,
		dragon:1},
	ground:{
		type:"Physical",
		none:1,
		normal:1,
		fire:2,
		water:1,
		grass:0.5,
		electric:2,
		ice:1,
		psychic:1,
		ghost:1,
		dark:1,
		poison:2,
		ground:1,
		rock:2,
		steel:2,
		fighting:1,
		flying:0,
		bug:0.5,
		dragon:1},
	rock:{
		type:"Physical",
		none:1,
		normal:1,
		fire:2,
		water:1,
		grass:1,
		electric:1,
		ice:2,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:0.5,
		rock:1,
		steel:0.5,
		fighting:0.5,
		flying:2,
		bug:2,
		dragon:1},
	steel:{
		type:"Physical",
		none:1,
		normal:1,
		fire:0.5,
		water:0.5,
		grass:1,
		electric:0.5,
		ice:2,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:1,
		rock:2,
		steel:0.5,
		fighting:1,
		flying:1,
		bug:1,
		dragon:1},
	fighting:{
		type:"Physical",
		none:1,
		normal:2,
		fire:1,
		water:1,
		grass:1,
		electric:1,
		ice:2,
		psychic:0.5,
		ghost:0,
		dark:2,
		poison:0.5,
		ground:1,
		rock:2,
		steel:2,
		fighting:1,
		flying:0.5,
		bug:0.5,
		dragon:1},
	flying:{
		type:"Physical",
		none:1,
		normal:1,
		fire:1,
		water:1,
		grass:2,
		electric:0.5,
		ice:1,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:1,
		rock:0.5,
		steel:0.5,
		fighting:2,
		flying:1,
		bug:2,
		dragon:1},
	bug:{
		type:"Physical",
		none:1,
		normal:1,
		fire:0.5,
		water:1,
		grass:2,
		electric:1,
		ice:1,
		psychic:2,
		ghost:0.5,
		dark:2,
		poison:0.5,
		ground:1,
		rock:1,
		steel:0.5,
		fighting:0.5,
		flying:0.5,
		bug:1,
		dragon:1},
	dragon:{
		type:"Special",
		none:1,
		normal:1,
		fire:1,
		water:1,
		grass:1,
		electric:1,
		ice:1,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:1,
		rock:1,
		steel:0.5,
		fighting:1,
		flying:1,
		bug:1,
		dragon:2},
	blankcopy:{
		type:"Physical",
		none:1,
		normal:1,
		fire:1,
		water:1,
		grass:1,
		electric:1,
		ice:1,
		psychic:1,
		ghost:1,
		dark:1,
		poison:1,
		ground:1,
		rock:1,
		steel:1,
		fighting:1,
		flying:1,
		bug:1,
		dragon:1}
}

function openTypePicker(picking) {
	pickerDIV = document.getElementById("typePicker");
	switch(picking){
		case "AtkType":
			pickerDIV.getElementsByTagName("span")[0].innerHTML="Choose the Attack Type:";
			pickerDIV.style.left="172px";
			$(pickerDIV.getElementsByTagName("img")[0]).hide();
			break;
		case "DefTypeA":
			pickerDIV.getElementsByTagName("span")[0].innerHTML="Choose the Defender's first type:";
			pickerDIV.style.left="572px";
			$(pickerDIV.getElementsByTagName("img")[0]).hide();
			break;
		case "DefTypeB":
			pickerDIV.getElementsByTagName("span")[0].innerHTML="Choose the Defender's secondary type:";
			pickerDIV.style.left="718px";
			$(pickerDIV.getElementsByTagName("img")[0]).show();
			break;
	}
	pickerDIV.style.top="336px";
	currentPick = picking;
	$(pickerDIV).show();
	$(document.getElementById("typePicker-clicktrap")).show();
}

function pickType(pickedType) {
	document.getElementById(currentPick+"Img").src="i/"+pickedType+".gif";
	switch(currentPick) {
		case "AtkType":
			AtkType=pickedType;
			break;
		case "DefTypeA":
			DefTypeA=pickedType;
			break;
		case "DefTypeB":
			DefTypeB=pickedType;
			break;
	}
	$('#typePicker').hide();
	$('#typePicker-clicktrap').hide();
	
	document.getElementById("typeeffect").value=typeReference[AtkType][DefTypeA] * typeReference[AtkType][DefTypeB];
	document.getElementById("MoveType").src="i/"+typeReference[AtkType]["type"]+".png";
	document.getElementById("MoveTypeText").innerHTML=typeReference[AtkType]["type"];
	DamageCalc();
}