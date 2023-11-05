/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */

(function($) {
//"use strict";
 
	$(document).ready(function() {

	/************** Open Main Menu ************************/
		if($('.openMenu, .closeMenu').length > 0){
			//alert('menu');
			$('.openMenu, .closeMenu').click(function(){
				//alert('openMenu');
				$('.before_main .subMenu-opener').removeClass('active');

				$(this).parent().toggleClass('active');

				if($(this).parent().hasClass('active')){
					$('main').addClass('blur-3');
					$('main .divScreen').addClass('active');
				}
				else {
					$('main').removeClass('blur-3');
					$('main .divScreen').removeClass('active');
				}
			});

			$('main .divScreen').click(function(){
				$(this).removeClass('active');
				$('.region_mainMenu').removeClass('active');
				$('main').removeClass('blur-3');
			});

			/*********** Add target blank and noreferrer noopener to external links *********/
			$('.region_mainMenu nav a').each(function(){
				if($(this).attr('href').includes('.pdf')){
					$(this).attr('target','_blank');
					$(this).attr('rel','noreferrer noopener');
				}
				else if(elementLink.includes('.xls') || elementLink.includes('.xlsx')){
					$(this).attr('target','_blank');
					$(this).attr('rel','noreferrer noopener');
				}
				else if(elementLink.includes('.doc') || elementLink.includes('.docx')){
					$(this).attr('target','_blank');
					$(this).attr('rel','noreferrer noopener');
				}
				else if(elementLink.includes('.ppt') || elementLink.includes('.pptx')){
					$(this).attr('target','_blank');
					$(this).attr('rel','noreferrer noopener');
				}
				else if(elementLink.includes('http')){
					if(!elementLink.includes('fresh') && !elementLink.includes('http://145.0.40.206/fresh/wp-content/themes/iecm/js/iecm.mx')){
						$(this).attr('target','_blank');
						$(this).attr('rel','noreferrer noopener');
					}
				}
			});

			/*********** Add target blank and noreferrer noopener to external links *********/
			$('.region_mainMenu .nav .external a').each(function(){
				$(this).attr('target','_blank');
				$(this).attr('rel','noreferrer noopener');
			});

			/*********** Show close submenus in main menu *********/
			$('.region_mainMenu .nav .no-open').click(function(){
				if($(window).width() <= 767){
					$(this).toggleClass('open');
					$(this).find('ul').toggle();
				}
			});

			/*********** Show close submenus in main menu *********/
			$('.region_mainMenu .navbar-nav > li > a').click(function(){
				if($(window).width() <= 767){
					$(this).parent().removeClass('open-menu');
					$('.region_mainMenu .navbar-nav > li > ul').hide();
					$(this).parent().children('ul').show();
					$(this).parent().addClass('open-menu');
					return false;
				}
			});
		}
	/************** END Open Main Menu  ************************/

	/************** Clone main menu as submenu ***************/
		var cloneMenu = false;
		var count = false;
		if($('.openMenu, .closeMenu').length > 0 && $('.before_main').length > 0){
			if($('#navPrimary .current-menu-ancestor').length > 0){
				cloneMenu = "<ul>"+ $('#navPrimary .current-menu-ancestor .sub-menu').html() + "</ul>";
			}
			else {
				cloneMenu = "<ul>"+ $('#navPrimary .current-menu-item .sub-menu').html() + "</ul>"
			}
			
			$('.before_main .subMenu-visible').html(cloneMenu);
			$('.before_main .subMenu-opener .submenu li').append(cloneMenu);

			$('.before_main .subMenu-opener .submenu > ul > li > a').click(function(){
				$(this).parent().parent().parent().parent().toggleClass('active');
				return false
			});

			$('.before_main .subMenu-visible .sub-menu').remove();
			$('.before_main .subMenu-opener .submenu > ul > li > ul > li > ul').remove();

			if($(window).width() > (1033 - 5)){
				count = 1;
				$('.before_main .subMenu-opener .submenu ul > li > ul > li').each(function(){
					if(count <= 4){
						$(this).hide();
					}
					else {
						$(this).show();
					}
					count++;
				});
			}
			else if($(window).width() <= (1033 - 5) && $(window).width() >= (826 - 5)){
				count = 1;
				$('.before_main .subMenu-opener .submenu ul > li > ul > li').each(function(){
					if(count <= 3){
						$(this).hide();
					}
					else {
						$(this).show();
					}
					count++;
				});
			}
			else if($(window).width() <= (825 - 5)){
				count = 1;
				$('.before_main .subMenu-opener .submenu ul > li > ul > li').each(function(){
					if(count <= 2){
						$(this).hide();
					}
					else {
						$(this).show();
					}
					count++;
				});
			}
		}

	/************** END Clone main menu as submenu ***********/	
	
	/************** Category content settings ************************/
		var breadcrumbText = false;
		if($('.breadcrumbs li .paged').length > 0){
			$('.breadcrumbs li .paged').each(function(){
				var breadcrumbText = $(this).text();
				//alert(breadcrumbText);
				$(this).text(breadcrumbText.replace('Page','Página'));
			});
		}
	/************** END Category content settings ************************/

	/************** Post content settings ************************/
		/**** POST images ****/
		if($('.mainContent article img').length > 0){
			$(".mainContent article img").on("error", function() {
				$(this).hide();
				$(this).addClass('broken');
			});
		}

		if($('.mainContent article .post-content img').length > 0){
			$('.mainContent article .post-content img').not('.broken').each(function(){
				var imgWidth = $(this).width();
				//alert(imgWidth);
				$(this).attr('width','');
				$(this).attr('height','');

				if(imgWidth > 500){
					$(this).addClass('roundedCornerMid-Top-Right imgResponsive mb-3');
				}
				else if(imgWidth < 499 && imgWidth > 100){
					$(this).addClass('roundedCornerMid-Top-Right mb-3');
				}
				else {
					$(this).addClass('roundedCornerSmall-Top-Right mb-1 mr-1');
				}

			});
		}


		/**** POST links ****/
		var elementLink = false;
		if($('.mainContent article .post-content li a').length > 0){
			$('.mainContent article .post-content li a').each(function(){
				//alert('w');
				elementLink = $(this).attr('href');
				//alert(elementLink);
				if($(this).parent().parent().hasClass('no-links')){
					
				}
				else {
					$(this).parent().parent().addClass('links');

					$(this).parent().addClass('addPlus-r download');
					if(elementLink.includes('.pdf')){
						$(this).parent().addClass('pdf');
						$(this).attr('target','_blank');
						$(this).attr('rel','noreferrer noopener');
					}
					else if(elementLink.includes('.xls') || elementLink.includes('.xlsx')){
						$(this).parent().addClass('xls');
						$(this).attr('target','_blank');
						$(this).attr('rel','noreferrer noopener');
					}
					else if(elementLink.includes('.doc') || elementLink.includes('.docx')){
						$(this).parent().addClass('doc');
						$(this).attr('target','_blank');
						$(this).attr('rel','noreferrer noopener');
					}
					else if(elementLink.includes('.ppt') || elementLink.includes('.pptx')){
						$(this).parent().addClass('ppt');
						$(this).attr('target','_blank');
						$(this).attr('rel','noreferrer noopener');
					}
					else if(elementLink.includes('http')){
						if(!elementLink.includes('fresh') && !elementLink.includes('/wp-content/themes/iecm/js/iecm.mx')){
							$(this).parent().addClass('external');
							$(this).parent().removeClass('download');
							$(this).attr('target','_blank');
							$(this).attr('rel','noreferrer noopener');
						}
					}
					else {
						$(this).parent().addClass('');
					}
				}

			});
		}

		/**** POST strong > h3 ****/
		/*var elementText = false;
		if($('.mainContent article .post-content p strong').length > 0){
			$('.mainContent article .post-content p > strong:only-child').each(function(){
				if($(this).next()[0].nextSibling.nodeValue.trim() != ""){
					
					elementText = $(this).html();
					$(this).parent().replaceWith("<h3>"+elementText+"</h3>");
				}
			});
		}*/

		/**** POST table and cells ****/
		var thisCell = false;
		var i = 0;
		if($('.mainContent article .post-content table').length > 0){
			//alert('table');
			$('.mainContent article .post-content table').each(function(){
				// Formato de la tabla
				$(this).find('tr').attr('bgcolor','');
				$(this).find('td').attr('bgcolor','');
				$(this).attr('cellspacing','1');

				// Formato Stackable
				if($(this).find('tbody').children('tr:first-child').children().length > 4 || $(this).width() > 635){
					$(this).not('.no-stackable').addClass('stackable');
				}
			});

			$('.stackable').stacktable();

			$(".mainContent article .post-content table.desplegable .st-head-row").not('.st-head-row-main').click(function(){
				$(this).parent().parent().parent().find('.showInfo').removeClass('showInfo');
				$(this).parent().parent().parent().find('.active').removeClass('active');

				$(this).addClass('active');

				thisCell = $(this).parent();
				thisCell = thisCell.next();
				thisCell.addClass('showInfo');
				
				for(i=0; i <= 100; i++) {
					thisCell = thisCell.next();
					thisCell.addClass('showInfo');
					if(thisCell.children('.st-head-row').length > 0){
						i = 100;
					}
				}
			});
		}


		/**** POST accordion jquery ****/
		if($('.accordion').length > 0){
			$( ".accordion" ).accordion({
		      heightStyle: "content",
		      collapsible: true
		    });
		}

	/************** END Post content settings ************************/


	/************* Show popup on youtube links ****************/
		if($('.home_you2be_links ul li a').length > 0){
			$('.home_you2be_links ul li a').click(function(){
				$('.popup .content').html(
					'<h2>'+$(this).text()+'</h2>'+
					'<iframe width="100%" height="315" src="'+$(this).attr('href')+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
				);
				$('.popup').removeClass('hidden');
				$('body > header, body > main, body > footer, body > .bottomSection').addClass('blur-4');
				return false;
			});

			$('.popup').not('.popup .window-container').click(function(){
				$('.popup').addClass('hidden');
				$('.popup .content').html('');
				$('body > header, body > main, body > footer, body > .bottomSection').removeClass('blur-4');
			});
		}
	/************* END Show popup on youtube links ****************/


	/************** Open Close tabs ************************/
		if($('.openContent .tab').length > 0){
			$('.openContent .tab').click(function(){
				$(this).parent().find('.tab').removeClass('active');
				$(this).addClass('active');

				var openBlock = '.' + $(this).attr('data-open');
				
				$(this).parent().parent().parent().parent().find('.opened').removeClass('opened');
				$(this).parent().parent().parent().parent().find(openBlock).addClass('opened');

			});
		}
	/************** END Open Blose tabs ************************/


	/************** Owl carousel settings ************************/
		if($('.home_owl-carousel').length > 0){
			$('.home_owl-carousel').owlCarousel({
			    loop: true,
			    margin:10,
			    responsiveClass:true,
			    items:3,
			    lazyLoad: true,
				navText: ['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'], //Note, if you are not using Font Awesome in your theme, you can change this to Previous & Next
				responsive:{
			        0:{
			            items:1,
			            nav:true,
			            dots: true,
			        },
			        660:{
			            items:2,
			            nav:true,
			        },
			        800: {
			        	items: 3,
			        	nav:true,
			        }
				}
			});
		}
	/************** END Owl carousel settings ************************/

/************** Window Resize funcitons **************************/
$(window).resize(function(){

	/**** Alter submenu options *****/
	if($(window).width() > (1033 - 5)){
		count = 1;
		$('.before_main .subMenu-opener .submenu ul > li > ul > li').each(function(){
			if(count <= 4){
				$(this).hide();
			}
			else {
				$(this).show();
			}
			count++;
		});
	}
	else if($(window).width() <= (1033 - 5) && $(window).width() >= (826 - 5)){
		count = 1;
		$('.before_main .subMenu-opener .submenu ul > li > ul > li').each(function(){
			if(count <= 3){
				$(this).hide();
			}
			else {
				$(this).show();
			}
			count++;
		});
	}
	else if($(window).width() <= (825 - 5)){
		count = 1;
		$('.before_main .subMenu-opener .submenu ul > li > ul > li').each(function(){
			if(count <= 2){
				$(this).hide();
			}
			else {
				$(this).show();
			}
			count++;
		});
	}
	/**** END Alter submenu options *****/


	/***** Reopen menus **************/
	if($(window).width() > 767){
		$('.region_mainMenu .navbar-nav > li > ul').show();
	}
});

/************** END Window Resize funcitons **************************/

	});
})(jQuery);
