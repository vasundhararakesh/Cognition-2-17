$(function(){
	$('#btnSignUp').click(function(){
		$.ajax({
			url: '/details',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
                window.location.href="/startTrial";
			},
			err: function(error){
				console.log("error");
			}
		});
	});
});