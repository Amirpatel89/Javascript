// This is jQuery. Our script tag is at the top. Therefore we should start with...
// Wait till the DOM is ready
$(document).ready(()=>{})
	$('.sign-up-form').submit(function(event){
		//Browser is, by default, is going to submit this form.
		// //It will send it to the "action" attribute
		// There is no action, so it just reloads.
		//preventDefault against any event object, will stop this
		console.log("User submitted the form!")
		console.log($('.fullName')[0].val());
		var userName = $('.fullName').val();
		if(userName.length <2){
			console.log("USER DIDN'T ENTER THEIR REAL NAME")
		}
	})
	//submit listener/event is unique to "form"