//your JS code here. If required.
let body=document.getElementsByTagName("body")[0];
let div=document.createElement("div");
div.id="sizeInfo"
let h1=document.createElement("h1");
window.addEventListener('load',updateSize())
window.addEventListener('resize',updateSize())
function updateSize() {
	h1.innerText=`Width:${window.innerWidth} and Height:${window.innerHeight}`
}
div.append(h1);
body.append(div);