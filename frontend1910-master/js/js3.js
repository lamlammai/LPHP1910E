//OBJECT TRONG JAVASCRIPT
let cars={
	name:"BMW",
	model:"X7",
	color:"white",
	money: 1000,
	start:function(hour) { //hanh dong methods la ham trong js
		return hour;
	},
	stop: function(hour){
		return hour;
	}
};
//truy cap cac phan tu trong oj
//cu phap:nameObject.key
//nameObject[key]
let nameCar=cars.name;
console.log(nameCar);
let h = cars.start(6);
console.log(h);
let money=cars['money'];
console.log(money);


let students={
	monhoc:[
	{name:"toan", diem:9},
	{name:"ly", diem:10},
	{name:"hoa", diem:8}
	],
	time: {t:"am", ten:"abc"},
	name:"van A",
	age:20
};
console.log(students);
let diemhoa=students.monhoc[2]['diem'];
console.log(diemhoa);
//truy cap tat ca phan tu trong oj for..in
let cat={
	name:"Tom",
	age:"3",
	color:"black",
	weight:"2"
};
for(let i in cat){
	console.log(cat[i]);
}
let doctor=[
 {name:"A", age:40, add:"Hanoi", gender:1, money:100},
 { name:"B", age:38, add:"Nam dinh",gender:0, money:200},
 {name:"C", age:39, add:"Ha nam",gender:0, money:150},
];
let table='';
let totalMoney=0;
table+="<table border='1' width = '100%'>";
doctor.forEach(function(item, key){
	totalMoney+=item.money;
	table+="<tr>";
		table+=`<td>${item.name}</td>`;
		table+=`<td>${item.age}</td>`;
		table+=`<td>${item.add}</td>`;

		if(item.gender==1){
			table+=`<td>Nam</td>`;
		}
		else{
			table+=`<td>Nu</td>`;
		}
		table+=`<td>${item.money}</td>`;
	table+="</tr>";
});
	table+="<tr>"
		table+="<td  colspan='4'> tong tien luong:</td>";
		table+=`<td>${totalMoney}</td>`;
	table+="</tr>"
table+="</table>";
document.write(table);