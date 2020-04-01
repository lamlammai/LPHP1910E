/*document.write('<h1>hello word</h1>');
alert('hello you!');
console.log('hi lphp1912e');
var myName= prompt('moi nhap ho ten');
document.write('Ten toi la '+ myName);*/
//comment tren mot dong
//kieu du lieu trong js
//1. kieu number
var number=1.1;
//var Tu khoa khai bao bien
//kiem tra xem bien co kieu du lieu nao
console.log(typeof number);
//2. String
var myName='Lam xinh gai';
console.log(typeof(myName));
//3.boolean
var checking=true;
console.log(typeof(checking));
//4.undefined
var myAge;
console.log(typeof(myAge));
//5.null
var myAddress=null; //chua can cap phat bo nho de luu tru bien
console.log(typeof myAddress);
var myAddress1='' //van can cap phat  bo nho de luu tru bien
var a=10;
var b='10';
var c=a*b; //dau + dung de tinh toan va noi chuoi. dau cong uu tien noi chuoi truoc.
//kieu number string chuoi so. trong chuoi chi dc phep chua so van co the thuc hien + - * /
console.log(c);
//can chuyen doi kieu du lieu
////khai bao bien////
//1.var
//var 123abc;='text';//sai do khong bat dau bang so
//var while // sai vi trung tu khoa.
var homNayTroiDep="sfgserg";
// var HomNayToiBuon='nberugf';
// var homnay toibuon='rgfbc'; khong nen dung
var homnaytroiDep='dbeyfer' // hai bien khac nhau. bien trong js phan biet chu hoa chu thuong. khong nen dat theo kieu nay
var myMoney=10;
myMoney=20; //thay doi gia tri
console.log(myMoney);
let myCompany='abc';
// let myCompany='vsf'; khong dc ghi de bien
myCompany='gfj';
console.log(myCompany);
//luc nay let va var khonh nam trong ham nen pham vi hoat dong nhu nhau


function testFunction() {
	// body...
	let myNumber=10;
	if(true){
		let myNumber=20;
		console.log(myNumber);
	}
	console.log(myNumber);
}
testFunction();
//const
const PI=3.14;
//PI=3.35; const khai bao hang so nen khong thay doi gia tri trong qua trinh chay
console.log(PI);

let numberCheck=10;
if (numberCheck==9) {
	console.log('ok');
} else{
	console.log('fail');
}
if (numberCheck==9) {
	console.log('sai');
}
else if (numberCheck==8 ){
	console.log('sai');
}
else if (numberCheck==10) {
	console.log('dung');
}
else if (numberCheck==11) {
	console.log('dung');
}
else{
	console.log('sai');
}

switch(numberCheck){
	case 9:
	console.log('sai');
	break;
	case 10:
	console.log('dung');
	break;
	case 11:
	//statement
	break;
	case 12:
	//statement
	break;
	default: 
	//statement
	break;
}
//cac vong lap
console.log('danh sach cac so chan');
for(let i=0; i<100; i++){
	//in ra tat ca so chan

	if(i%2==0)
	{
		console.log(i);
	}
}
console.log('demo');
let demo=10;
while(demo <100){
	console.log(demo);
	demo+=2;
}

//do-while
do{
	if(demo%2==0)
	console.log(demo);
	demo++;
}
while(demo<100);
let myString='';
//ve mat gia tri 0==''==false
//ve mat gia tri 1=true
if (myString===false) { // 2 dau bang == so sanh tuong doi ve mat gia tri
	///3 dau bang === so sanh ve gia tri va kieu du lieu
	console.log('yes');
}
else{
	console.log('no');
}

//toan tu ?
let x=10;
let y=20;
let m=(x-y>y-x)?(x/y): (y%x==0? y*x :y/x);
console.log(m);
if (x-y>y-x) {
	console.log(x/y);
}else{
	if(y%x==0){
		console.log(y*x);
	}else{
		console.log(y/x);
	}
}
let i=10;
let j=9;
let k=(i++)-(j++)+(++i)+(++j)-(--i)-(--j);
//     10     9    12    11    11    10
console.log(k);
                        