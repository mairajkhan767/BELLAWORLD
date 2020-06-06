//$(function(){
//	$("#wizard").steps({
//        headerTag: "h4",
//        bodyTag: "section",
//        transitionEffect: "fade",
//        enableAllSteps: true,
//        transitionEffectSpeed: 500,
//        onStepChanging: function (event, currentIndex, newIndex) { 
//            if ( newIndex === 1 ) {
//                $('.steps ul').addClass('step-2');
//            } else {
//                $('.steps ul').removeClass('step-2');
//            }
//            if ( newIndex === 2 ) {
//                $('.steps ul').addClass('step-3');
//            } else {
//                $('.steps ul').removeClass('step-3');
//            }
//
//            if ( newIndex === 3 ) {
//                $('.steps ul').addClass('step-4');
//                $('.actions ul').addClass('step-last');
//            } else {
//                $('.steps ul').removeClass('step-4');
//                $('.actions ul').removeClass('step-last');
//            }
//            return true; 
//        },
//        labels: {
//            finish: "Place Holder",
//            next: "Next",
//            previous: "Previous"
//        }
//    });
//    // Custom Steps Jquery Steps
//    $('.wizard > .steps li a').click(function(){
//    	$(this).parent().addClass('checked');
//		$(this).parent().prevAll().addClass('checked');
//		$(this).parent().nextAll().removeClass('checked');
//    });
//    // Custom Button Jquery Steps
//    $('.forward').click(function(){
//    	$("#wizard").steps('next');
//    })
//    $('.backward').click(function(){
//        $("#wizard").steps('previous');
//    })
//    // Checkbox
//    $('.checkbox-circle label').click(function(){
//        $('.checkbox-circle label').removeClass('active');
//        $(this).addClass('active');
//    })
//})


//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})