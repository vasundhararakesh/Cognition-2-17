$(function(){
	$(document).on('keydown', function(e){
		if ( e.which == 68 ){
			$.ajax({
				url: '/data',
				data: JSON.stringify(data),
				type: 'POST',
				dataType: 'json',
				success: function(response){
					console.log(response);
                	window.location.href="/endTrial";
				},
				err: function(error){
					console.log("error");
				}
			});
		}
	});
});