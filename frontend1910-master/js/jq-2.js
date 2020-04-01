$(document).ready(function(){
	$('button.btn').click(function(){
		//css voi jquery
		//singgle css
		/*$('div.box').css('width','300px');
		$('div.box').css('height','300px');
		$('div.box').css('border', '1px solid red');
		$('div.box').css('background','yellow');*/
		//munti css
		/*$('div.box').css({
			width: '300px',
			height: '300px',
			border: '1px solid red',
			backgroundColor: 'yellow'
		});*/
		let box= document.getElementsByClassName('box')[0];
		box.style.width='300px';
		box.style.height='300px';
		box.style.border='1px solid red';
		box.style.backgroundColor='yellow';
		box.style.padding = '30px';
	});
	$('button.my-btn').click(function(){
		let w=$('div.box').width();
		let h=$('div.box').height();
		//alert(`width: ${w} height: ${h}`);
		$('div.box').width(100);
		$('div.box').height(100);
	});
	$('button.click-3').click(function() {
		/* Act on the event */
		let innerW=$('.box').innerWidth();
		let innerH=$('.box').innerHeight();
		console.log(`inner With: ${innerW} inner Height:${innerH}`);

		$('ul.menu li').eq(2).css('color','blue');
		if($('input[class="agree"]').is(':checked')){
			console.log('Ban da tich chon');
		}else {
			console.log('Ban chua tich chon');
		}
		$('section').find('h1').css('color', 'red');
		if($('h1').length){
			//kiem tra su ton tai cua phan tu html
		}
		$('ul.menu li').eq(2).next().css('color', 'yellow');
		//the lien ke dang sau
		$('ul.menu li').eq(2).prev().css('color', 'violet');
		//the lien ke dang truoc
		$('h1').parent().css({
			//tac dong vao the cha
			width: '300px',
			height: '300px',
			border: '1px solid red',
			backgroundColor: 'yellow'
		});
		//$('h1').html('this is Jquery');
		//let valText =$('h1').html();
		let valText =$('h1').text();
		console.log(valText);
		$('h1').empty();//xoa noi dung the
		$('h1').html('');
		//xoa ca the ra khoi html
		$('h1').remove();//xoa the html 
	});
	$('button#hide').click(function() {
		/* Act on the event */
		//an div class content di
		//$('div.content').fadeOut(3000);
		//$('div.content').hide(3000); //an phan tu , an ca phan trung gian ma phan tu chiem cho
		//$('div.content').slideUp(3000);//keo phan tu cua minh len
		$('.content').toggle(3000);
	});
	$('button#show').click(function(){
		//hien thi
		//$('div.content').fadeIn(3000);
		//$('div.content').show(3000); 
		$('div.content').slideDown(3000);
	});
});