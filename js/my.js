// JavaScript Document
$(document).ready(function(){ 
$('.slick-prev').hide();
$('.slick-next').hide();
$('.selling-item').slick({
 dots: true,
	speed: 300,
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
    settings: {
	autoplay: true,
    autoplaySpeed: 5000,
   slidesToShow: 3,
	slidesToScroll: 3,	  
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 2,
    slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      autoplay: true,
        autoplaySpeed: 5000,
		slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.selling-item1').slick({
 dots: true,
	speed: 300,
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
    settings: {
	autoplay: true,
    autoplaySpeed: 5000,
   slidesToShow: 3,
	slidesToScroll: 3,	  
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 2,
    slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      autoplay: true,
        autoplaySpeed: 5000,
		slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	$('#gift').slick({
 dots: true,
	speed: 300,
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
    settings: {
	autoplay: true,
    autoplaySpeed: 5000,
   slidesToShow: 4,
	slidesToScroll: 1,	  
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 3,
    slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      autoplay: true,
        autoplaySpeed: 5000,
		slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	$('.hover-mask').slick({
 dots: true,
	speed: 300,
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
    settings: {
	autoplay: true,
    autoplaySpeed: 5000,
   slidesToShow: 3,
	slidesToScroll: 3,	  
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
	autoplay: true,
        autoplaySpeed: 5000,
  slidesToShow: 2,
    slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      autoplay: true,
        autoplaySpeed: 5000,
		slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
		// Products Slick
	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-imgs',
  });

	// Product imgs Slick
  $('#product-imgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
    asNavFor: '#product-main-img',
		responsive: [{
        breakpoint: 991,
        settings: {
					vertical: false,
					arrows: false,
					dots: true,
        }
      },
    ]
  });

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}


	// Input number
	$('.input-number').each(function() {
		var $this = $(this),
		$input = $this.find('input[type="number"]'),
		up = $this.find('.qty-up'),
		down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})
	});

	var priceInputMax = document.getElementById('price-max'),
			priceInputMin = document.getElementById('price-min');

	priceInputMax.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	priceInputMin.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	function updatePriceSlider(elem , value) {
		if ( elem.hasClass('price-min') ) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if ( elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

	// Price Slider
	var priceSlider = document.getElementById('price-slider');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [1, 999],
			connect: true,
			step: 1,
			range: {
				'min': 1,
				'max': 999
			}
		});

		priceSlider.noUiSlider.on('update', function( values, handle ) {
			var value = values[handle];
			handle ? priceInputMax.value = value : priceInputMin.value = value
		});
	}

	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-imgs',
  });

	// Product imgs Slick
  $('#product-imgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
    asNavFor: '#product-main-img',
		responsive: [{
        breakpoint: 991,
        settings: {
					vertical: false,
					arrows: false,
					dots: true,
        }
      },
    ]
  });

	// Product img zoom

	/////////////////////////////////////////

function opentab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
});
	/////////////////////////////////////////

