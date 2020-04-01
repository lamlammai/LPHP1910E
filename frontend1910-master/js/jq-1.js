// $(‘selector’).eventname(function(){ 
// code some thing 
//});

$(document).ready(function() {
	//ham khoi tao
	//cho doi cac tai lieu html dc load xong
	//toan bo cac ma lenh viet theo thu vien JQ se duoc dat o day

	//bat su kien
	//$('#btn')=document.getElementById('btn');
	$('#btn').click(function() {
		/* Act on the event */
		//alert('helloyou');
		let valId=$('h1.text').attr('id');
		console.log(valId);
		let valClass=$('h1#text').prop('class');
		console.log(valClass);
		// $('img').attr('src', 'images/logo.png');
		document.getElementsByTagName('img')[0].src='images/logo.png';
		$('img:first()').removeAttr('src');
		$('div.my-box').addClass('box');
		if ($('div.my-box').hasClass('border')) {
			console.log('Yes');
		}else {
			console.log('NO');
		}
	});
	$('.btn-primary').dblclick(function() {
		/* Act on the event */
		//alert('hello you');
		//$('div.my-box').removeClass('border');
		$('div.my-box').toggleClass('border');
	});
	$('.input[class="input"]').keyup(function(){
		let value=$(this).val().trim(); //$('.input[class="input"]')
	$('p.render-text').html(value);
	});

});