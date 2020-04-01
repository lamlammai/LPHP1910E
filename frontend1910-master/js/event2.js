let btn=document.getElementsByTagName('button');
btn[0].onclick=function(){
	let box=document.getElementsByClassName('box');
	box[0].style.width = '300px';
	box[0].style.height="300px";
	box[0].style.border = '1px solid red';
	box[0].style.background = 'yellow';
	box[0].style.marginTop = '30px';
	//lay ra kich thuoc cua khung trinh duyet ma nguoi dung dang lam viec
	let wBrowser=window.innerWidth;
	let hBrowser=window.innerHeight;
	console.log(`width: ${wBrowser} and Height: ${wBrowser}`);
	//mo ra mot trang web moi
	window.open('http://vnexpress.net/','','width=100px ,height=100px');	

}
let reloadPage=document.getElementById('clk');
reloadPage.addEventListener('click', function(){
	window.location.reload(true);
});
let fb=document.getElementById('facebook');
fb.addEventListener('click', function(){
	window.location.href='http://facebook.com';
});
let screens=document.getElementById('screen');
screens.addEventListener('click', function(){
	let h=screen.width;
	let w=screen.height;
	console.log(w,h);
});
document.getElementById('history').addEventListener('click',function(){
	history.forward();
});