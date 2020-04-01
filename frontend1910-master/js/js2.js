//ham trong js
//cac ham do LTV tu dinh nghia
//cu phap: function +name-funciton(var 1, var2,...){}
function kiemTraChanLe(number){
	//than ham su ly cacs logic
	if (number%2==0) {
		return true;
	}
	return false;
}
//su dung ham da dc dinh nghia
let check=kiemTraChanLe();
console.log(check, typeof check);
//cho biet tu 1 den 100 co bao nhieu so la boi so  cchung cua 2 va 3
function boiChung(min, max) {
	// body...
	let dem=0;
	for(let i=min; i<max;i++)
	{
		if(i%2==0 &&i%3==0){
			dem=dem+1;
		}
	}
	return dem;
}
let result=boiChung(1,100);
console.log("boi so chung giua 2 va 3 tu 1 dem 100 la: "+result);

//function literal :ham khong ten
let sumNumber=function(a,b){
	return a+b;
}
console.log(typeof(sumNumber));
let tong=sumNumber(1,12)
console.log(tong);
//in ra tat ca so nguyen to tu 1 dem 100
// let SNT=function(){
// 	for(let i=0; i<100;i++)
// 	{
// 		for(let j=1;j<Math.sqrt(i);j++)
// 		{
// 			if(i%j==0){
// 				return false;
// 			}
// 			return true;
// 		}
// 		console.log(i);
// 	}
// }
let kiemTraSnt=function(number){
	if(number<=1)
	{
		return false;
	}
	if (number==2) {
		return true;
	}
	let limit=Math.sqrt(number);
	for(let i=2; i<=limit; i++ ){
		if(number%i==0){
			return false;
		}
	}
	return true;
}
let inSnt=function(a, b){
	let result='';
	for(let i=a; i<=b; i++)
	{
		if(kiemTraSnt(i)){
			result+=(result=='')? i: ','+i;
		}
	}
	return result;
}
console.log(inSnt(1,100));
let ktraScp=function(number) {
	if(number<1){
		return false;
	}
	if(number>=1){
		let result=Math.sqrt(number);
		if(result%1==0)
		{
			return true;
		}
		else {
			return false;
		}
	}

}
console.log(ktraScp(4));
//viet ham giai phuong trinh bac 2
let giaiPtb2=function(a,b,c) {
	let x1,x2, result;
	if(a==0){
		return -c/b;
	}
	if(a!=0){
		let denta=b*b-4*a*c;
		if(denta==0){
			return 'phuong trinh co nghiem kep'+(-b)/(2*a);
		}
		if(denta>0){
			x1=(-b+Math.sqrt(denta))/(2*a);
			x1=(-b+Math.sqrt(denta))/(2*a);
			result='phuong trinh co hai nghiem phan biet'+ x1+' '+x2;
			return result;
		}
		if (denta<0) {
			return false;
		}
	}
}
let nghiem=giaiPtb2(2,3,5);
if(nghiem===false){
	console.log('Vo nghiem');
}
else{
	console.log(nghiem);
}
///number trong js
/*
let n1=prompt('nhap so thu 1');
n1=Number.parseInt(n1) //ep ve kieu so nguyen
let n2=prompt('nhap so thu 2');
n2=Number.parseInt(n2);
console.log(typeof(n1));
console.log(typeof n2);
let total=n1 +n2;
alert("tong hai so la"+total);
//kiem tra 1 so co phia so nguyen khhong
if(Number.isInteger(total)){
	console.log('yes');
}
else {
	console.log('no');
}
let n3=prompt('nhap so thu 3');
if(Number.isNaN(n3)){
	console.log('ok');
}
else{
	console.log('err');
}
let n4=prompt('nhap so thu 4');
n4=Number.parseInt(n4);
console.log(n4,typeof n4);
if(Number.isNaN(n4)){
	console.log('aaa');
}
else{
	console.log('bbb');
}
let test=(4/0);
console.log(test, typeof test);*/


/**************doi tuong array mang trong js ************/
let number= new Array(1,2,3,4,5,6,7,8);
let fruits=['cam','quyt','oi','xoai', 'tao', 'le', 'mit'];
let mangDachieu1= new Array(
	[1,2,3],
	'cam',
	 'quyt',
	 ['le',  'oi']);
let mangDachieu= new Array(
	[1,2,3],
	'cam',
	 'quyt',
	 ['le',  'oi',[100,200,400]]);
let countElement=number.length;
console.log(countElement);
//
//truy cap vao 1 phan tu trong mang
//cuphap nameArray[index-vitriphantunamtrongmang dem tu 0];
console.log(mangDachieu1[3][2]);
console.log(mangDachieu[3][2][2]);

// duyet qua cac phan tu trong mang
// 1-for
let myNumber=[1,2,3,4,5,6,7,8,9];
for (let i = 0; i < myNumber.length; i++) {
	if (myNumber[i]%2==0) {
	console.log(myNumber[i]);}
}
//2-forEach
myNumber.forEach( function(item,key,arr) {
	// tham so thu 3 arr:tham so tuy chon
	//console.log(item,key);
	//console.log(arr);
	if(item%2!=0){
		console.log(item,key);
	}
});
//3-for...of
for(let i of myNumber){
	//console.log(`phan tu trong mang ${i}`);
	//console.log('phan tu trong mang'+i);
	if(i<5){
		console.log(`phan tu trong mang ${i}`);
	}
}
/*********cac ham co san trong mang*///////////////////
let arrNumber=[1,2,3,4,5,6,7,8,9];
//them phan tu 100 vao cuoi mang
console.log(arrNumber);
arrNumber.push(100);
console.log(arrNumber);
//xoa phan tu cuoi cung cua mang, tra vef phan tu do
let lastEl=arrNumber.pop();
console.log(lastEl); //tra ve phan tu da xoa
//them phan tu vao mang
arrNumber.unshift(lastEl);
	console.log(lastEl);
//xoa phan tu dau tien cua mang
let firstEl=arrNumber.shift();
console.log(firstEl);
console.log(arrNumber);
let position = arrNumber.indexOf(3,5); //bat dau tu vi tri tim cho den het mang
console.log(position);
let pos=arrNumber.lastIndexOf(3,5);
console.log(pos);
//ktra arr co phai kieu oj hay khong
if (Array.isArray(arrNumber)) {
	console.log('yes');
}else {
	console.log('no');
}
//sap xep mang
let ranDomArr=[2,4,1,5,7,0,10];
ranDomArr.sort(function(a,b){
	return a-b; //sap xep tang dan
	//return b-a;//giam dan
});
console.log(ranDomArr);
//viet ham:kiem tra xem so 10 co nam trong mang khong,
// neu co lay ra cac phan tu tu vi tri cua so 10 cho den het mang
//neu khong, them phan tu 10 vao giua mang
let ranDomArr2=[100,1,3,4,9,5,2,7];
function timKiem(a,arr) {
	// body...
	let position =arr.indexOf(a);
	//tim thay
	if(position!=-1){
		let newArr=[];
		for (let i =position; i <arr.length; i++) {
			newArr.push(arr[i]);
		}
		return newArr;
	}
	//khong tim thay
	else{
		let start=Number.parseInt(arr.length)/2;
		let newArr=[];
		for(let i = 0; i < start ; i++){
			newArr.push(arr[i]);
		}
		newArr.push(a);
		for(let i = (arr.length)/2; i < (arr.length); i++){
			newArr.push(arr[i]);
		}
		return newArr;
	}		
	
}
timKiem(10,ranDomArr2);
console.log(timKiem(10,ranDomArr2));

