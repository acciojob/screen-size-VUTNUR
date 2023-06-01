//your JS code here. If required.

function updateSize() {
	const sizeInfo=document.getElementById("sizeInfo");
	const w= window.innerWidth;
	const h=window.innerHeight;
	sizeInfo.innerHTML=`<h1>Width:${w} and Height:${h}</h1>`
// document.getElementById('sizeInfo').innerHTML="<h1>Width:"+w+" and Height:"+h+"</h1>";
}
