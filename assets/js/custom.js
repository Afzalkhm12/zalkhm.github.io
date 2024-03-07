jQuery( document ).ready(function( $ ) {


	"use strict";


		$('.owl-carousel').owlCarousel({
		    items:4,
		    lazyLoad:true,
		    loop:true,
		    dots:true,
		    margin:20,
		    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:2,
			        },
			        1000:{
			            items:4,
			        }
			    }
		});

		/* activate jquery isotope */
		  var $container = $('.posts').isotope({
		    itemSelector : '.item',
		    isFitWidth: true
		  });

		  $(window).smartresize(function(){
		    $container.isotope({
		      columnWidth: '.col-sm-3'
		    });
		  });
		  
		  $container.isotope({ filter: '*' });

		    // filter items on button click
		  $('#filters').on( 'click', 'button', function() {
		    var filterValue = $(this).attr('data-filter');
		    $container.isotope({ filter: filterValue });
		});


		$('#carousel').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 210,
		    itemMargin: 5,
		    asNavFor: '#slider'
		});
		 
		$('#slider').flexslider({
		    animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    sync: "#carousel"
		});
 
});
function productView(product) {
	return `
	<div class="col-3 product-item" data="${product.id}">
	   <div class="product-img-box">
		 <img src="${product.imgSrc}" alt="product image" class="product-img" />
		 <div class="overlay">
		   <a class="overlay-link" href="product.html?id=${product.id}">
			 <img src="images/arrow.png" alt="arrow" class="arrow-img" />
		   </a>
		   <div class="overlay-info">
			 <p>Design | Branding</p>
			 <h2>Creative Web Design</h2>
		   </div>
		 </div>
		 <p class="num-box"></p>
	   </div>
	   <hr />
	   <div class="product-content">
		 <p class="product-price">${product.price}</p>
		 <button type="button" class="btn btn-add-cart"><span class="add-btn">+</span>&nbsp;Cart</button>
	   </div>
   </div>
	`;
  }

function removeLoader() {
    $("#loadingDiv").fadeOut(200, () => {
      $("#loadingDiv").remove();
    });
  }
  
  $(window).on("load", () => {
    setTimeout(removeLoader, 2000);
  
    $("body").css(
      "overflow-y",
      "hidden",
      setTimeout(() => {
        $("body").css("overflow-y", "visible");
      }, 2000)
    );
  });
