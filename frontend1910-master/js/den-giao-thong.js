$(document).ready(function() {
	let countTime;
	let time = 0;
	let countClick = 0;
	
	$('.btn').click(function() {
		countClick += 1;
		if(countClick > 1){
			clearInterval(countTime);
			time = 0;
		}
		let self = $(this);
		let color = self.attr('id');
		$('.traffic').css('background-color', 'gray');
		$('.traffic').removeClass('on').addClass('off');
		$('.btn').attr('disabled', false).css('background-color', 'blue');
				// khoa  nut vua bam
				if(color === 'xanh'){
					self.attr('disabled', true).css('background-color', 'green');
					$('.green').css('background-color', 'green');
					$('.green').removeClass('off').addClass('on');
				} else if (color === 'do') {
					self.attr('disabled', true).css('background-color', 'red');
					$('.red').css('background-color', 'red');
					$('.red').removeClass('off').addClass('on');
				} else {
					self.attr('disabled', true).css('background-color', 'yellow');
					$('.yellow').css('background-color', 'yellow');
					$('.yellow').removeClass('off').addClass('on');
				}
				countTime = setInterval(function(){
					// cu 1s hanh dong lap lai mai mai
					if(time == 30){
						time = 0;
						$('.traffic').css('background-color', 'gray');
						let currentColor =  $('.container').find('div.on').attr('id');
						$('.traffic').removeClass('on').addClass('off');
						if(currentColor === 'green'){
							$('.red').css('background-color', 'red');
							$('.red').removeClass('off').addClass('on');
						} else if (currentColor === 'red') {
							$('.yellow').css('background-color', 'yellow');
							$('.yellow').removeClass('off').addClass('on');
						} else {
							$('.green').css('background-color', 'green');
							$('.green').removeClass('off').addClass('on');
						}
					}
					time += 1;
					$('h4.time').text(time);
				},1000);
			});
});