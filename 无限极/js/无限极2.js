var pic = document.getElementById("pic");
var firstPic = pic.firstElementChild;
var lastPic = pic.lastElementChild;
var changePic = firstPic;
var num = document.getElementById("num");
var firstNum = num.firstElementChild;
var lastNum = num.lastElementChild;
var changeNum = firstNum;

var autoChange = setInterval(function () {
	changePic.style.display = "block";
	changeNum.style.background = "white";

	if(changePic.previousElementSibling == null) {
		pic.lastElementChild.style.display = "none";
	} else {
		changePic.previousElementSibling.style.display = "none";
	}
	if(changePic.nextElementSibling == null) {
		changePic = firstPic;
	} else {
		changePic = changePic.nextElementSibling;
	}

	if(changeNum.previousElementSibling == null) {
		num.lastElementChild.style.background = "#808080";
	} else {
		changeNum.previousElementSibling.style.background = "#808080";
	}
	if(changeNum.nextElementSibling == null) {
		changeNum = firstNum;
	} else {
		changeNum = changeNum.nextElementSibling;
	}
}, 1000);

function next_click() {
	changePic.style.display = "block";
	changeNum.style.background = "white";

	if(changePic.previousElementSibling == null) {
		pic.lastElementChild.style.display = "none";
	} else {
		changePic.previousElementSibling.style.display = "none";
	}
	if(changePic.nextElementSibling == null) {
		changePic = firstPic;
	} else {
		changePic = changePic.nextElementSibling;
	}

	if(changeNum.previousElementSibling == null) {
		num.lastElementChild.style.background = "#808080";
	} else {
		changeNum.previousElementSibling.style.background = "#808080";
	}
	if(changeNum.nextElementSibling == null) {
		changeNum = firstNum;
	} else {
		changeNum = changeNum.nextElementSibling;
	}
}

function last_click() {
	changePic.style.display = "block";
	changeNum.style.background = "white";
	
	if (changePic.nextElementSibling==null) {
		firstPic.style.display="none";
	} else{
		changePic.nextElementSibling.style.display="none";
	}
	if (changePic.previousElementSibling==null) {
		changePic=lastPic;
	} else{
		changePic=changePic.previousElementSibling;
	}
	
	if (changeNum.nextElementSibling==null) {
		firstNum.style.background="#808080";
	} else{
		changeNum.nextElementSibling.style.background="#808080";
	}
	if (changeNum.previousElementSibling==null) {
		changeNum=lastNum;
	} else{
		changeNum=changeNum.previousElementSibling;
	}
}

function click1() {
	for(let i = 0; i < num.children.length; i++) {
		num.children[i].style.background = "#808080"
	}
	num.children[0].style.background = "white";
	changeNum = num.children[0];
	for(let i = 0; i < pic.children.length; i++) {
		pic.children[i].style.display = "none";
	}
	pic.children[0].style.display = "block";
	changePic = pic.children[0];
}

function click2() {
	for(let i = 0; i < num.children.length; i++) {
		num.children[i].style.background = "#808080"
	}
	num.children[1].style.background = "white";
	changeNum = num.children[1];
	for(let i = 0; i < pic.children.length; i++) {
		pic.children[i].style.display = "none";
	}
	pic.children[1].style.display = "block";
	changePic = pic.children[1];
}

function click3() {
	for(let i = 0; i < num.children.length; i++) {
		num.children[i].style.background = "#808080"
	}
	num.children[2].style.background = "white";
	changeNum = num.children[2];
	for(let i = 0; i < pic.children.length; i++) {
		pic.children[i].style.display = "none";
	}
	pic.children[2].style.display = "block";
	changePic = pic.children[2];
}

function click4() {
	for(let i = 0; i < num.children.length; i++) {
		num.children[i].style.background = "#808080"
	}
	num.children[3].style.background = "white";
	changeNum = num.children[3];
	for(let i = 0; i < pic.children.length; i++) {
		pic.children[i].style.display = "none";
	}
	pic.children[3].style.display = "block";
	changePic = pic.children[3];
}

function click5() {
	for(let i = 0; i < num.children.length; i++) {
		num.children[i].style.background = "#808080"
	}
	num.children[4].style.background = "white";
	changeNum = num.children[4];
	for(let i = 0; i < pic.children.length; i++) {
		pic.children[i].style.display = "none";
	}
	pic.children[4].style.display = "block";
	changePic = pic.children[4];
}

function click6() {
	for(let i = 0; i < num.children.length; i++) {
		num.children[i].style.background = "#808080"
	}
	num.children[5].style.background = "white";
	changeNum = num.children[5];
	for(let i = 0; i < pic.children.length; i++) {
		pic.children[i].style.display = "none";
	}
	pic.children[5].style.display = "block";
	changePic = pic.children[5];
}

function click7() {
	for(let i = 0; i < num.children.length; i++) {
		num.children[i].style.background = "#808080"
	}
	num.children[6].style.background = "white";
	changeNum = num.children[6];
	for(let i = 0; i < pic.children.length; i++) {
		pic.children[i].style.display = "none";
	}
	pic.children[6].style.display = "block";
	changePic = pic.children[6];
}
