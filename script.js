//your JS code here. If required.

function updateSize() {
	const sizeInfo=document.getElementById("sizeInfo");
	const w= window.innerWidth;
	const h=document.documentElement.clientHeight;
	sizeInfo.innerHTML=`<h1>Width:${w} and Heigth:${h}</h>`
// document.getElementById('sizeInfo').innerHTML="<h1>Width:"+w+" and Height:"+h+"</h1>";
}
