zoom = 1;		
		$(document).ready(function() {						
		
		
					$('#cross_image').hide();
				
					$('#editimage').hide();
		
					$('#cross_image').click(function(){
		
							$("#editimage").attr("src","");	
 		
							$('#cross_image').hide();
 		
							$('#editimage').hide();
				
					 });
		
 		
		//	var options = { opacity: 0.75 };
 	
		//	$('.reflect').reflect(options);
		
 		$('.imagesub').live('click',function(){
		
 			var a = $(this).children('img').attr("src");
 			$("#editimage").attr("src",a);
 	
					$('.image_left_tool').hide();
 
					$('.text_left_tool').show();
 	
					$('.product-sub-container').css('display','none');
         			
					$('.product-container').css('display','none');
 
					$('.image-sub-container').css('display','none');
		
					$('.image_left_tool').show();
				
					$('.text_left_tool').hide();
			
					$('#editimage').css("z-index",0)
 
					$('#cross_image').show();
 		
					$('#editimage').show();	
		
			});	
 
		
		    $('.text_menubar').click(function(){
 	
					$('.image_left_tool').hide();
 		
					$('.text_left_tool').show();
 	
					$('.product-sub-container').css('display','none');
 
					$('.product-container').css('display','none');
			
					$('.image-sub-container').css('display','none');
					
					$('.image_hide_effect').css('display','none');
				
				});
				
				$('.image_menubar').click(function(){
				
					$('.image_left_tool').show();

					$('.text_left_tool').hide();
					
					$('.image_hide_effect').css('display','block');
		
	
				});
		
    			$('.add_image').click(function(){
  
    				$('.image-sub-container').fadeIn(300).css('display','block');
		
					$('.product-container').fadeOut(900);
		
				});
		
 	
			 $('.zoom').click(function(){
		
        			document.getElementById("test").style.webkitTransform="scale(1.2)";
 
					document.getElementById("tshirt_main").style.webkitTransform="scale(1.2)";
        			document.getElementById("test").style.transform="scale(1.2)";
 
					document.getElementById("tshirt_main").style.transform="scale(1.2)";
		
					zoom = 1.5;
 		
					tleditimage();
 
				});
		
		
		
			 $('.reset').click(function(){
 	
					document.getElementById("test").style.webkitTransform="scale(1)";
	 
					document.getElementById("tshirt_main").style.webkitTransform="scale(1)";
	 
					document.getElementById("test").style.transform="scale(1)";
	 
					document.getElementById("tshirt_main").style.transform="scale(1)";
		 
					zoom = 1;
	 
					tleditimage();
 
				});
 
		/*****************************************************************************
 				New 05-09-2013 Start
 
		*****************************************************************************/
		
	 
		/*****************************************************************************
 
					For Slider Arow
	 
		*****************************************************************************/
 
		$('.tools-body-left-slider-right').click(function() {
 
			$('.slider-open-close').toggleClass('slider-open-arow');
 
		});
		
 	
		/*****************************************************************************
 	
					For Language
 
		*****************************************************************************/
 
		$('#LanguageSwitcher').polyglotLanguageSwitcher({
 
			effect: 'slide',
 
			testMode: true,
 
		});
 
		/*****************************************************************************
 
					New 05-09-2013 End
	 
		*****************************************************************************/
 
		});
 
		window.addEventListener("load", on,false);
 
		
		front_flag = 0;
 
		function insertText(){
 
			if(front_flag == 0){
        		var str = $('#letter').val();
 
				var font=$('.font_select_hidden').val();
 
				var size=$("#sizetext" ).val();
 
				var opacity=$("#opactext" ).val();
 
				var space=$("#spacetext" ).val();
		
				$('#showtextimage').show();
        		str = str.replace(/ /g, '&nbsp;');
 	
				str = str.replace(/\n/g, '<br />');
     
				str = str.replace(/\r/g, '<br />');
        
				var f_img = document.getElementById("f_img");
 
				var arc = document.getElementById("arc");
 
				f_img.style.fontFamily=font;
		
         		f_img.style.fontSize=size+"px";
 
				f_img.style.letterSpacing=space+"px";
        
				f_img.style.opacity=opacity/10;
		
     			f_img.innerHTML=str;
			
				arc.style.fontFamily=font;
    
				arc.style.fontSize=size+"px";
		
        		arc.style.letterSpacing=space+"px";
		
            	//arc.style.opacity=opacity/10;
		
			}
 
			else if(front_flag == 1){
 
				var str = $('#letter_back').val();
	 
				var font=$('.font_select_hidden_back').val();
		
				var size=$("#sizetext_back" ).val();
 
				var opacity=$("#opactext_back" ).val();
 
				var space=$("#spacetext_back" ).val();
		
				$('#showtextimage_back').show();
 
				str = str.replace(/ /g, '&nbsp;');
 
				str = str.replace(/\n/g, '<br />');
 
				str = str.replace(/\r/g, '<br />');
 
				var f_img = document.getElementById("f_img_back");
			
				var arc = document.getElementById("arc_back");
		
				f_img.style.fontFamily=font;
 
				f_img.style.fontSize=size+"px";
	 
				f_img.style.letterSpacing=space+"px";
	        
				f_img.style.opacity=opacity/10;
			
				f_img.innerHTML=str;
		
 
				arc.style.fontFamily=font;
 	
				arc.style.fontSize=size+"px";
 
				arc.style.letterSpacing=space+"px";
		
 	
				//arc.style.opacity=opacity/10;
 	
			}
 
		}
		
 	
		function insertImage(){
		
    		var imagewidth = $('#ImageWidth').val();
 	
			var imageheight = $('#ImageHeight').val();
 	
			var imagesize = $('#ImageSize').val();
 	
			var imagesizenew = (imagesize/100)+1;
 	
			var imageopacity = $('#ImageOpacity').val()/10
 	
			var editimage = document.getElementById("editimage");
 	
			//$('#editimage').css('width','');
 	
			editimage.style.width=imagewidth+"px";
 	
			editimage.style.height=imageheight+"px";
			
			editimage.style.opacity=imageopacity;
 	
			editimage.style.transform="scale("+imagesizenew+")";
 	
			}
		
		window.onload=function(){
 			tleditimage();
 
			/* Slider functions for front*/
     		side_flag = 0;
		
		
		
			var slvalue = 250;
		
		
		
			var sldir = 1;
		
		
		
			curveNode_flag = 0;
		
		
		
			$( "#slider-range-max" ).slider({
		
		
		
			  range: "max",
		
		
		
			  min: 15,
		
		
		
			  max: 100,
		
		
		
			  value: 30,
		
		
		
			  slide: function( event, ui ) {
		
		
		
				$( "#sizetext" ).val( ui.value );
		
		
		
				insertText();
		
		
		
			  }
		
		
		
			});
		
		
		
			 $( "#sizetext" ).val( $( "#slider-range-max" ).slider( "value" ) );
		
		
		
		////////////////////////////Js start for image///////////////////////////////////////////////////
		
		
		
			$(".image-center").click(function(){
		
		
		
					var editimage = document.getElementById("editimage");
		
		
		
					var showtextimage = document.getElementById("showtextimage");
		
		
		
					var imagewidth = editimage.style.width;
		
		
		
					var imageheight = editimage.style.height;
		
		
		
					var contwidth = showtextimage.style.width;
		
		
		
					var contheight = showtextimage.style.height;
		
		
		
					var centerleft = (parseInt(contwidth)-parseInt(imagewidth))/2;
		
		
		
					var centertop = (parseInt(contheight)-parseInt(imageheight))/2;
		
		
		
					//var centertop = parseInt(($("#showtextimage").height()-imageheight)/2);
		
		
		
					editimage.style.marginTop=centertop+"px";
		
		
		
					editimage.style.marginLeft=centerleft+"px";
		
		
		
					//$("#editImage").css("margin-top",centertop);
		
		
		
					//$("#editImage").css('margin-left',centerleft);
		
		
		
					
		
		
		
					//alert(centerleft);
		
		
		
					//$("#editImage").
		
		
		
					
		
		
		
				
		
		
		
				});
		
		
		
			$("#slider-range-max-ImageRotation").slider({
		
		
		
					 range: "max",
		
		
		
				 	 min: 0,
		
		
		
					 max: 360,
		
		
		
				 	 value: 0,
		
		
		
					 slide: function( event, ui ) {
		
		
		
					 $( "#ImageRotation" ).val( ui.value );
		
		
		
					document.getElementsByClassName("rotate_image")[0].style.webkitTransform="rotate("+ui.value+"deg)";//chrome,safari
		
					document.getElementsByClassName("rotate_image")[0].style.MozTransform="rotate("+ui.value+"deg)";//mozila
		
					document.getElementsByClassName("rotate_image")[0].style.msTransform="rotate("+ui.value+"deg)";//IE9
		
					document.getElementsByClassName("rotate_image")[0].style.oTransform="rotate("+ui.value+"deg)";//opera
		
					document.getElementsByClassName("rotate_image")[0].style.Transform="rotate("+ui.value+"deg)";//IE10+,mozila16+,opera12.10+
		
		
		
		
		
					
		
		
		
			 	 }
		
		
		
			});
		
		
		
			 $( "#ImageRotation" ).val( $( "#slider-range-max-ImageRotation" ).slider( "value" ) );
		
			 
		
			 
		
		
		
		
		
			$("#slider-range-max-ImageOpacity").slider({
		
		
		
						 range: "max",
		
		
		
						 min: 1,
		
		
		
						 max: 10,
		
		
		
						 value: 10,
		
		
		
						 slide: function( event, ui ) {
		
		
		
						 $( "#ImageOpacity" ).val( ui.value );
		
		
		
					 	 insertImage();
		
		
		
					 }
		
		
		
		
		
				});
		
		
		
			$( "#ImageOpacity" ).val( $( "#slider-range-max-ImageOpacity" ).slider( "value" ) );
		
		
		
			$("#slider-range-max-ImageWidth").slider({
		
		
		
					 range: "max",
		
		
		
				 	 min: 30,
		
		
		
					 max: 200,
		
		
		
				 	 value: 100,
		
		
		
					 slide: function( event, ui ) {
		
		
		
					 $( "#ImageWidth" ).val( ui.value );
		
		
		
					 insertImage();
		
		
		
			 	 }
		
		
		
			});
		
		
		
			 $( "#ImageWidth" ).val( $( "#slider-range-max-ImageWidth" ).slider( "value" ) );
		
		
		
			 $("#slider-range-max-ImageHeight").slider({
		
		
		
					 range: "max",
		
		
		
				 	 min: 30,
		
		
		
					 max: 200,
		
		
		
				 	 value: 100,
		
		
		
					 slide: function( event, ui ) {
		
		
		
					 $( "#ImageHeight" ).val( ui.value );
		
		
		
					 insertImage();
		
		
		
			 	 }
		
		
		
			});
		
		
		
			 $( "#ImageHeight" ).val( $( "#slider-range-max-ImageHeight" ).slider( "value" ) );
		
		
		
			  $("#slider-range-max-ImageSize").slider({
		
		
		
					 range: "max",
		
		
		
				 	 min: 0,
		
		
		
					 max: 99,
		
		
		
				 	 value: 0,
		
		
		
					 slide: function( event, ui ) {
		
		
		
					 $( "#ImageSize" ).val( ui.value );
		
		
		
					 insertImage();
		
		
		
			 	 }
		
		
		
			});
		
		
		
			 $( "#ImageSize" ).val( $( "#slider-range-max-ImageSize" ).slider( "value" ) );
		
		
		
			$( "#spinner-I,#spinner-J" ).spinner({ min: 0, max: 70});
		
		
		
			$('.ui-spinner-button').click(function() { $(this).siblings('input').change(); });
		
		
		
			$('#spinner-I').spinner().change(function(){
		
		
		
			 	var i = ($(this).spinner('value'));
		
		
		
				$('.common_image').css("margin-left",i);
		
		
		
			});
		
		
		
			$('#spinner-J').spinner().change(function(){
		
		
		
			 	var j = ($(this).spinner('value'));
		
		
		
				$('.common_image').css("margin-top",j);
		
		
		
			});
		
		
		
		
		
		
		
		///////////////////flip for image////////////////////////////////////////////////
		
		
		
			var hori_flip_image_flag = 0;
		
		
		
			var vert_flip_image_flag = 0;
		
			
		
			var reflaction_image_flag = 0;
		
		
		
		
		
		
		
			$('.hori-flip-image').click(function() {
		
		
		
					if(hori_flip_image_flag==0){		
		
		
		
						$("#append_flip_hori_image").css({ '-moz-transform':'scaleX(-1)','-o-transform':'scaleX(-1)','-webkit-transform': 'scaleX(-1)','transform':'scaleX(-1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
						hori_flip_image_flag=1;
		
		
		
					}
		
		
		
					else if(hori_flip_image_flag==1)
		
		
		
					{
		
		
		
						$("#append_flip_hori_image").css({ '-moz-transform':'scaleX(1)','-o-transform':'scaleX(1)','-webkit-transform': 'scaleX(1)','transform':'scaleX(1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
						hori_flip_image_flag=0;
		
		
		
					}
		
		
		
			});
		
		
		
			$('.vert-flip-image').click(function() {
		
		
		
						if(vert_flip_image_flag==0){		
		
		
		
						$("#append_flip_vert_image").css({ '-moz-transform':'scaleY(-1)','-o-transform':'scaleY(-1)','-webkit-transform': 'scaleY(-1)','transform':'scaleY(-1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
							vert_flip_image_flag=1;
		
		
		
						}
		
		
		
						else if(vert_flip_image_flag==1){
		
		
		
							$("#append_flip_vert_image").css({ '-moz-transform':'scaleY(1)','-o-transform':'scaleY(1)','-webkit-transform': 'scaleY(1)','transform':'scaleY(1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
							vert_flip_image_flag=0;	
		
		
		
						}
		
		
		
			});
		
		
		
			$('.reflaction').click(function() {
		
						if(reflaction_image_flag==0){		
		
		
		
						$("#editimage").css({"-webkit-box-reflect":"below 1px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0%, transparent) , to(rgba(250, 250, 250, 0.5)))"});
		
		
		
							reflaction_image_flag=1;
		
		
		
						}
		
		
		
						else if(reflaction_image_flag==1){
		
		
		
							$("#editimage").css({"-webkit-box-reflect":""});
		
		
		
							reflaction_image_flag=0;	
		
		
		
						}
		
			});
		
		
		
		
		
		
		
		////////////////////////////Js end for image///////////////////////////////////////////////////
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			$('#slider-range-max-curve_txt').slider({
		
		
		
				  range: "max",
		
		
		
				  min: 0,
		
		
		
				  max: 500,
		
		
		
				  value: 250,
		
		
		
				  slide:function(event, ui){
		
		
		
					  slvalue = ui.value;
		
		
		
						if(slvalue < 250){
		
		
		
								sldir = -1;
		
		
		
								slvalue = slvalue;
		
		
		
						}
		
		
		
						if(slvalue > 250){
		
		
		
								sldir = 1;
		
		
		
								slvalue = 500-slvalue;
		
		
		
						}
		
		
		
						if(slvalue == 250){
		
		
		
								sldir = 1;
		
		
		
								slvalue = -1
		
		
		
						}
		
		
		
						$( '#curve_txt' ).val( ui.value );
		
		
		
						init_arc();
		
		
		
				  }
		
		
		
			});
		
		
		
			$( '#curve_txt' ).val( $( '#slider-range-max-curve_txt' ).slider( "value" ) );
		
		
		
		
		
		
		
		
		
		
		
			$( "#slider-range-max-Rotation" ).slider({
		
		
		
			  range: "max",
		
		
		
			  min: 0,
		
		
		
			  max: 360,
		
		
		
			  value: 0,
		
		
		
			  slide: function( event, ui ) {
		
		
		
				$( "#Rotation" ).val( ui.value );
		
		
		
					document.getElementsByClassName("rotate_text")[0].style.webkitTransform="rotate("+ui.value+"deg)";//chrome,safari
		
					document.getElementsByClassName("rotate_text")[0].style.MozTransform="rotate("+ui.value+"deg)";//mozila
		
					document.getElementsByClassName("rotate_text")[0].style.msTransform="rotate("+ui.value+"deg)";//IE9
		
					document.getElementsByClassName("rotate_text")[0].style.oTransform="rotate("+ui.value+"deg)";//opera
		
					document.getElementsByClassName("rotate_text")[0].style.Transform="rotate("+ui.value+"deg)";//IE10+,mozila16+,opera12.10+
		
		
		
			  }
		
		
		
			});
		
		
		
			$( "#Rotation" ).val( $( "#slider-range-max-Rotation" ).slider( "value" ) );
		
		
		
					$('.rotate_left').click(function(){
						
						if($('.text_left_tool').css('display') == 'none'){ 
							if ( $.browser.webkit ) {
							  var textrotate = document.getElementsByClassName("rotate_image")[0].style.webkitTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)-1;
							  document.getElementsByClassName("rotate_image")[0].style.webkitTransform="rotate("+b+"deg)"
							}
							//if ( $.browser.msie && $.browser.version <= 9 ) {
							if ( $.browser.msie ) {
							  var textrotate = document.getElementsByClassName("rotate_image")[0].style.msTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf(')'));
							  var b = parseInt(a)-1;
							  document.getElementsByClassName("rotate_image")[0].style.msTransform="rotate("+b+"deg)"
							}
							if ( $.browser.mozilla ) {
							  var textrotate = document.getElementsByClassName("rotate_image")[0].style.MozTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)-1;
							  document.getElementsByClassName("rotate_image")[0].style.MozTransform="rotate("+b+"deg)"
							}
						};
						
						if($('.image_left_tool').css('display') == 'none'){ 
							if ( $.browser.webkit ) {
							  var textrotate = document.getElementsByClassName("rotate_text")[0].style.webkitTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)-1;
							  document.getElementsByClassName("rotate_text")[0].style.webkitTransform="rotate("+b+"deg)"
							}
							//if ( $.browser.msie && $.browser.version <= 9 ) {
							if ( $.browser.msie ) {
							  var textrotate = document.getElementsByClassName("rotate_text")[0].style.msTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf(')'));
							  var b = parseInt(a)-1;
							  document.getElementsByClassName("rotate_text")[0].style.msTransform="rotate("+b+"deg)"
							}
							if ( $.browser.mozilla ) {
							  var textrotate = document.getElementsByClassName("rotate_text")[0].style.MozTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)-1;
							  document.getElementsByClassName("rotate_text")[0].style.MozTransform="rotate("+b+"deg)"
							}
						};
						
							
			   });
			   $('.rotate_right').click(function(){
						if($('.text_left_tool').css('display') == 'none'){ 
							if ( $.browser.webkit ) {
							  var textrotate = document.getElementsByClassName("rotate_image")[0].style.webkitTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)+1;
							  document.getElementsByClassName("rotate_image")[0].style.webkitTransform="rotate("+b+"deg)"
							}
							//if ( $.browser.msie && $.browser.version <= 9 ) {
							if ( $.browser.msie ) {
							  var textrotate = document.getElementsByClassName("rotate_image")[0].style.msTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf(')'));
							  var b = parseInt(a)+1;
							  document.getElementsByClassName("rotate_image")[0].style.msTransform="rotate("+b+"deg)"
							}
							if ( $.browser.mozilla ) {
							  var textrotate = document.getElementsByClassName("rotate_image")[0].style.MozTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)+1;
							  document.getElementsByClassName("rotate_image")[0].style.MozTransform="rotate("+b+"deg)"
							}
						};
						
						if($('.image_left_tool').css('display') == 'none'){ 
							if ( $.browser.webkit ) {
							  var textrotate = document.getElementsByClassName("rotate_text")[0].style.webkitTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)+1;
							  document.getElementsByClassName("rotate_text")[0].style.webkitTransform="rotate("+b+"deg)"
							}
							//if ( $.browser.msie && $.browser.version <= 9 ) {
							if ( $.browser.msie ) {
							  var textrotate = document.getElementsByClassName("rotate_text")[0].style.msTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf(')'));
							  var b = parseInt(a)+1;
							  document.getElementsByClassName("rotate_text")[0].style.msTransform="rotate("+b+"deg)"
							}
							if ( $.browser.mozilla ) {
							  var textrotate = document.getElementsByClassName("rotate_text")[0].style.MozTransform;
							  var a = textrotate.substring(textrotate.indexOf('(')+1,textrotate.indexOf('d'));
							  var b = parseInt(a)+1;
							  document.getElementsByClassName("rotate_text")[0].style.MozTransform="rotate("+b+"deg)"
							}
						};
			   });
		
		
		
		
		
		
		
			$( "#slider-range-max-opacity" ).slider({
		
		
		
			  range: "max",
		
		
		
			  min: 0,
		
		
		
			  max: 10,
		
		
		
			  value: 10,
		
		
		
			  slide: function( event, ui ) {
		
		
		
				$( "#opactext" ).val( ui.value );
		
		
		
				if(curveNode_flag==1){
		
		
		
					var arc = document.getElementById("arc");
		
		
		
					var span = arc.getElementsByTagName("span");
		
		
		
					for(var i=0; i<span.length; i++){
		
		
		
						span[i].style.opacity = (ui.value)/10;
		
		
		
					}
		
		
		
				}
		
		
		
				insertText();
		
		
		
			  }
		
		
		
			});
		
		
		
			$( "#opactext" ).val( $( "#slider-range-max-opacity" ).slider( "value" ) );
		
		
		
		
		
		
		
		
		
		
		
			$( "#slider-range-max-space" ).slider({
		
		
		
			  range: "max",
		
		
		
			  min: 0,
		
		
		
			  max: 10,
		
		
		
			  value: 0,
		
		
		
			  slide: function( event, ui ) {
		
		
		
				$( "#spacetext" ).val( ui.value );
		
		
		
				insertText();
		
		
		
			  }
		
		
		
			});
		
		
		
			 $( "#spacetext" ).val( $( "#slider-range-max-space" ).slider( "value" ) );
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			// Front Back Controller
		
		
		
			$('#shrt_img .tools-body-left-slider-left-body-image img').live('click',function(){
		
		
		
				flag=$(this).attr('data-name');
		
				
		
				img=$(this).attr('src');
		
		
		
				var str = 'url('+img+')';
		
		
		
				if(flag == 'front')
		
		
		
				{
		
		
		
					front_flag=0;
		
		
		
					$('#test').css('background-image',str);
		
		
		
					document.getElementById("back").style.display="none";
		
		
		
					document.getElementsByClassName("tools-body-mid-container_back")[0].style.display="none";
		
		
		
					document.getElementById("right-tab_back").style.display="none";
		
		
		
					
		
		
		
					document.getElementById("front").style.display="inline";
		
		
		
					document.getElementsByClassName("tools-body-mid-container")[0].style.display="inline";
		
		
		
					document.getElementById("right-tab").style.display="inline";
		
		
		
				}
		
		
		
				else if(flag == 'back')
		
		
		
				{
		
		
		
					front_flag=1;
		
		
		
					$('#test_back').css('background-image',str);
		
		
		
					document.getElementById("back").style.display="inline";
		
		
		
					document.getElementsByClassName("tools-body-mid-container_back")[0].style.display="inline";
		
		
		
					document.getElementById("right-tab_back").style.display="inline";
		
		
		
				
		
		
		
					document.getElementById("front").style.display="none";
		
		
		
					document.getElementsByClassName("tools-body-mid-container")[0].style.display="none";
		
		
		
					document.getElementById("right-tab").style.display="none";
		
		
		
				}
		
		
		
			});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//if(front_flag == 0){
		
		
		
			$('#shrt_img_color .tools-body-left-slider-left-body-image').live('click',function(){
		
		
		
				col=$(this).css('background-color');
		
		
		
				$('#shrt_img_color .selected').removeClass('selected');
		
		
		
				$(this).addClass('selected');
		
		
		
				$('#shrt_img .tools-body-left-slider-left-body-image').css('background-color',col);
		
		
		
				$('#tshirt_main').css('background-color',col);
		
		
		
				$('#tshirt_main_back').css('background-color',col);
		
		
		
		
		
		
		
			});
		
		
		
		
		
		
		
			
		
		
		
		
		
		$( "#spinner-A,#spinner-B,#spinner-C,#spinner-E,#spinner-F,#spinner-E_back,#spinner-F_back,#spinner-G,#spinner-G_back,#spinner-K,#spinner-L,#spinner-M,#spinner-N" ).spinner({ min: -70, max: 70});
		
		
		
		$("#spinner-H,#spinner-D,#spinner-D_back,#spinner-H_back").spinner({ min:0, max:2});
		
		
		
			$('.ui-spinner-button').click(function() { $(this).siblings('input').change(); });
		
		
		
			$('#spinner-A').spinner().change(function(){
		
		
		
				var a = ($(this).spinner('value'));
		
		
		
				if(right_flag==0 && left_flag==0)
		
		
		
				{
		
		
		
					$('.common').css("margin-left",a);
		
		
		
				}
		
		
		
				else if(right_flag==1 )
		
		
		
				{
		
		
		
					if(a<0)
		
		
		
					{
		
		
		
					$('.common').css("margin-left",a);
		
		
		
					}
		
		
		
					else
		
		
		
					{
		
		
		
						$('.common').css("margin-left",0);
		
		
		
					}
		
		
		
				}
		
		
		
				else if(left_flag==1 )
		
		
		
				{
		
		
		
					if(a>0)
		
		
		
					{
		
		
		
						$('.common').css("margin-left",a);
		
		
		
					}
		
		
		
					else
		
		
		
					{
		
		
		
						$('.common').css("margin-left",0);
		
		
		
					}
		
		
		
				}
		
		
		
			});
		
		
		
			$('#spinner-B').spinner().change(function(){
		
		
		
			 	var b = ($(this).spinner('value'));
		
		
		
				$('.common').css("margin-top",b);
		
		
		
			});
		
		
		
			$('#spinner-C').spinner().change(function(){
		
		
		
			 	var x = ($(this).spinner('value'));
		
				var txt_shdow = $('.common').css('text-shadow');
				
				console.log(txt_shdow);
				
				var a = txt_shdow.split(" ");
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+x+"px"+", "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+a[11];
		
				if ( $.browser.msie ) {
		
						var shadowTxt = ""+a[0]+" "+a[1]+" "+x+"px"+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
				};
		
				
		
				$('.common').css('text-shadow', shadowTxt);
		
		
		
			});
		
		
		
				$('#spinner-C_back').spinner().change(function(){
		
		
		
					var x = ($(this).spinner('value'));
		
					var txt_shdow = $('.common_back').css('text-shadow');
		
					var a = txt_shdow.split(" ");
		
					console.log(a);
		
					var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+x+"px"+", "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+a[11];
		
					if ( $.browser.msie ) {
		
							var shadowTxt = ""+a[0]+" "+a[1]+" "+x+"px"+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
					};
		
				
		
				$('.common_back').css('text-shadow', shadowTxt);
		
		
		
			});
		
		
		
		
		
			$('#spinner-D').spinner().change(function(){
		
		
		
				var d = ($(this).spinner('value'));
		
				var txt_shdow = $('.common').css('text-shadow');
		
				var a = txt_shdow.split(" ");
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+d+"px";
		
				if ( $.browser.msie ) {
		
						var shadowTxt = ""+a[0]+" "+a[1]+" "+d+"px"+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
				};		
		
				$('.common').css('text-shadow', shadowTxt);
		
		
		
			});
		
			
		
			$('#spinner-D_back').spinner().change(function(){
		
		
		
				var d = ($(this).spinner('value'));
		
				var txt_shdow = $('.common_back').css('text-shadow');
		
				var a = txt_shdow.split(" ");
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+d+"px";
		
				if ( $.browser.msie ) {
		
						var shadowTxt = ""+a[0]+" "+a[1]+" "+d+"px"+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
				};		
		
				$('.common_back').css('text-shadow', shadowTxt);
		
		
		
			});
		
		
		
		///////////////////////////////shadow distance//////////////////////////
		
		
		
			$('#spinner-E').spinner().change(function(){
		
		
		
			 	var d = ($(this).spinner('value'));
		
		
		
				var txt_shdow = $('.common').css('text-shadow');
		
		
		
				var a = txt_shdow.split(" ");
		
		
		
				//console.log(a);
		
		
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+d+"px"+" "+a[10]+" "+a[11];
		
		
		
				//console.log(shadowTxt);
		
		
		
				$('.common').css('text-shadow', shadowTxt);
		
		
		
			});
		
			
		
			$('#spinner-E_back').spinner().change(function(){
		
		
		
			 	var d = ($(this).spinner('value'));
		
				console.log("here"+d);
		
				
		
				var txt_shdow = $('.common_back').css('text-shadow');
		
		
		
				var a = txt_shdow.split(" ");
		
		
		
				console.log(a);
		
		
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+d+"px"+" "+a[10]+" "+a[11];	
		
				if ( $.browser.msie ) {
		
						var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+d+"px"+" "+a[5]+" "+a[6]+" "+a[7];
		
				};	
		
		
		
				//console.log(shadowTxt);
		
		
		
				$('.common_back').css('text-shadow', shadowTxt);
		
		
		
			});
		
		
		
			$('#spinner-F').spinner().change(function(){
		
		
		
			 	var d = ($(this).spinner('value'));
		
		
		
				var txt_shdow = $('.common').css('text-shadow');
		
		
		
				var a = txt_shdow.split(" ");
		
		
		
				//console.log(a);
		
		
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+d+"px"+" "+a[11];
		
		
		
				//console.log(shadowTxt);
		
		
		
				$('.common').css('text-shadow', shadowTxt);
		
		
		
			});
		
			
		
			$('#spinner-F_back').spinner().change(function(){
		
						var d = ($(this).spinner('value'));
		
						var txt_shdow = $('.common_back').css('text-shadow');
		
						var a = txt_shdow.split(" ");
		
						var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+d+"px"+" "+a[11];	
		
						
		
						if ( $.browser.msie ) {
		
								var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+d+"px"+" "+a[6]+" "+a[7];
		
						};
		
						$('.common_back').css('text-shadow', shadowTxt);
		
				});
		
		
		
			$('#spinner-G').spinner().change(function(){
		
		
		
			 	var d = ($(this).spinner('value'));
		
		
		
				var txt_shdow = $('.common').css('text-shadow');
		
		
		
				var a = txt_shdow.split(" ");
		
		
		
				//console.log(a);
		
		
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+d+"px";
		
		
		
				//console.log(shadowTxt);
		
		
		
				$('.common').css('text-shadow', shadowTxt);
		
		
		
			});
		
			
		
			$('#spinner-G_back').spinner().change(function(){
		
			 	var d = ($(this).spinner('value'));
		
				var txt_shdow = $('.common_back').css('text-shadow');
		
				var a = txt_shdow.split(" ");
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+d+"px";	
		
				if ( $.browser.msie ) {
		
						var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+d+"px"+" "+a[7];
		
				};
		
				$('.common_back').css('text-shadow', shadowTxt);
		
			});
		
		
		
			$('#spinner-H').spinner().change(function(){
		
				var d = ($(this).spinner('value'));
		
				var txt_shdow = $('.common').css('text-shadow');
		
				var a = txt_shdow.split(" ");
		
				//console.log(a);
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+d+"px";
		
				//console.log(shadowTxt);
		
				$('.common').css('text-shadow', shadowTxt);
		
		
		
			});
		
			
		
			$('#spinner-H_back').spinner().change(function(){
		
				var d = ($(this).spinner('value'));
		
				var txt_shdow = $('.common').css('text-shadow');
		
				var a = txt_shdow.split(" ");
		
				//console.log(a);
		
				var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+d+"px";	
		
				if ( $.browser.msie ) {
		
						var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+d+"px"+" "+a[7];
		
				};
		
				//console.log(shadowTxt);
		
				$('.common').css('text-shadow', shadowTxt);
		
		
		
			});
		
		
		
		///////////////////////////////////////////////////////////////////////
		
		///////////////////////////////Bevel Effect//////////////////////////
		
			$('#spinner-K').spinner().change(function(){
		
			 	var d = ($(this).spinner('value'));
		
				var box_shdow = $('#draggable').css('box-shadow');
		
				var a = box_shdow.split(" ");
		
				//console.log(a);
		
				var shadowBox = ""+a[0]+" "+a[1]+" "+a[2]+" "+d+"px"+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
				//console.log(shadowTxt);
		
				$('#draggable').css('box-shadow', shadowBox);
		
			});
		
			$('#spinner-L').spinner().change(function(){
		
			 	var d = ($(this).spinner('value'));
		
				var box_shdow = $('#draggable').css('box-shadow');
		
				var a = box_shdow.split(" ");
		
				//console.log(a);
		
				var shadowBox =  ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+d+"px"+" "+a[5]+" "+a[6]+" "+a[7];
		
				//console.log(shadowTxt);
		
				$('#draggable').css('box-shadow', shadowBox);
		
			});
		
			$('#spinner-M').spinner().change(function(){
		
				var d = ($(this).spinner('value'));
		
				var box_shdow = $('#draggable').css('box-shadow');
		
				var a = box_shdow.split(" ");
		
				var shadowBox =  ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+d+"px"+" "+a[6]+" "+a[7];
		
				$('#draggable').css('box-shadow', shadowBox);
		
			});
		
			$('#spinner-N').spinner().change(function(){
		
			 var d = ($(this).spinner('value'));
		
				var box_shdow = $('#draggable').css('box-shadow');
		
				var a = box_shdow.split(" ");
		
				var shadowBox =  ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+d+"px"+" "+a[7];
		
				$('#draggable').css('box-shadow', shadowBox);
		
			});
		
			
		
			
		
			$('#colorSelector-D').ColorPicker({
		
				color: '#0000ff',
		
				onShow: function (colpkr) {
		
					$(colpkr).fadeIn(500);
		
					return false;
		
				},
		
				onHide: function (colpkr) {
		
					$(colpkr).fadeOut(500);
		
					return false;
		
				},
		
				onChange: function (hsb, hex, rgb) {
		
					$('#colorSelector-D div').css('backgroundColor', '#' + hex);
		
					var box_shdow = $('#draggable').css('box-shadow');
		
					var a = box_shdow.split(" ");
		
					var shadowBox = "#"+hex+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
					$('#draggable').css('box-shadow', shadowBox);
		
				}
		
			});
		
		///////////////////////////////////////////////////////////////////////
		
		
		
		
		
		
		
				$("#textcolor").spectrum({
		
					color: "00f",
		
		
		
					change: function (color) {
		
		
		
						$('#f_img').css('color', '#' + color);
		
			
		
						$('#arc').css('color', '#' + color);
		
			
		
					}
		
					
		
				});
		
				
		
				$("#textcolor_back").spectrum({
		
					color: "00f",
		
		
		
					change: function (color) {
		
		
		
						$('#f_img_back').css('color', '#' + color);
		
			
		
						$('#arc_back').css('color', '#' + color);
		
			
		
					}
		
					
		
				});
		
		    
		
		
		
		////////////////////////////////////////////////////////////////////////////
		
		
		
		
		
		$('#colorSelector1').ColorPicker({
		
		
		
				color: '#0000ff',
		
		
		
				onShow: function (colpkr) {
		
		
		
					$(colpkr).fadeIn(500);
		
		
		
					return false;
		
		
		
				},
		
		
		
				onHide: function (colpkr) {
		
		
		
					$(colpkr).fadeOut(500);
		
		
		
					return false;
		
		
		
				},
		
		
		
				onChange: function (hsb, hex, rgb) {
		
		
		
					$('#colorSelector1 div').css('backgroundColor', '#' + hex);
		
		
		
					$('#f_img').css('color', '#' + hex);
		
		
		
					$('#arc').css('color', '#' + hex);
		
		
		
				}
		
		
		
			});
		
		
		
		
		
		///////////////////////////////////////////////////////////////////////
		
		
		
		
		
			$("#heighightcolor").spectrum({
		
					color: "00f",
		
		
		
					change: function (color) {
		
						
		
						var txt_shdow = $('.common').css('text-shadow');
		
		
		
						var a = txt_shdow.split(" ");
		
			
		
						var shadowTxt = color+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+a[11];
		
						
		
						if ( $.browser.msie ) {
		
							var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+color+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
							console.log(shadowTxt);
		
						};
		
						
		
						$('.common').css('text-shadow', shadowTxt);
		
			
		
					}
		
					
		
				});
		
				
		
				$("#highlightcolor_back").spectrum({
		
					color: "00f",
		
		
		
					change: function (color) {
		
						
		
						var txt_shdow = $('.common_back').css('text-shadow');
		
						console.log(txt_shdow);
		
						var a = txt_shdow.split(" ");
		
			
		
						var shadowTxt = color+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+a[11];
		
						
		
						if ( $.browser.msie ) {
		
							
		
							var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+color+", "+a[4]+" "+a[5]+" "+a[6]+" "+a[7];
		
							
		
						};
		
						console.log(shadowTxt);
		
						$('.common_back').css('text-shadow', shadowTxt);
		
			
		
					}
		
					
		
				});
		
		
		
		//	$('#colorSelector-B').ColorPicker({
		
		//
		
		//		color: '#00ff00',
		
		//
		
		//		onShow: function (colpkr) {
		
		//
		
		//			$(colpkr).fadeIn(500);
		
		//
		
		//			return false;
		
		//
		
		//		},
		
		//
		
		//		onHide: function (colpkr) {
		
		//
		
		//			$(colpkr).fadeOut(500);
		
		//
		
		//			return false;
		
		//
		
		//		},
		
		//
		
		//		onChange: function (hsb, hex, rgb) {
		
		//			
		
		//			console.log(hex);
		
		//			
		
		//			$('#colorSelector-B div').css('backgroundColor', '#' + hex);
		
		//
		
		//			var txt_shdow = $('.common').css('text-shadow');
		
		//
		
		//			var a = txt_shdow.split(" ");
		
		//
		
		//			var shadowTxt = "#"+hex+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+a[7]+" "+a[8]+" "+a[9]+" "+a[10]+" "+a[11];
		
		//
		
		//			//console.log(shadowTxt);
		
		//			
		
		//			$('.common').css('text-shadow', shadowTxt);
		
		//
		
		//		}
		
		//
		
		//	});
		
		
		
			
		
		
		
		///////////////////////////////////////////////////////////////////////
		
		
		
			$('#colorSelector-C').ColorPicker({
		
		
		
				color: '#00ff00',
		
		
		
				onShow: function (colpkr) {
		
		
		
					$(colpkr).fadeIn(500);
		
		
		
					return false;
		
		
		
				},
		
		
		
				onHide: function (colpkr) {
		
		
		
					$(colpkr).fadeOut(500);
		
		
		
					return false;
		
		
		
				},
		
		
		
				onChange: function (hsb, hex, rgb) {
		
					
		
					$('#colorSelector-C div').css('backgroundColor', '#' + hex);
		
		
		
					$('#f_img').css('color', '#' + hex);
		
		
		
					$('#arc').css('color', '#' + hex);
		
		
		
					
		
		
		
				}
		
		
		
			});
		
		
		
		
		
		
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////
		
		
		
			$("#shadowcolor").spectrum({
		
					color: "00f",
		
		
		
					change: function (color) {
		
						
		
						var txt_shdow = $('.common').css('text-shadow');
		
			
		
						var a = txt_shdow.split(" ");
		
			
		
						var shadowTxt = a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+color+" "+a[9]+" "+a[10]+" "+a[11];
		
			
		
						$('.common').css('text-shadow', shadowTxt);
		
			
		
					}
		
					
		
				});
		
				$("#shadowcolor_back").spectrum({
		
					color: "00f",
		
		
		
					change: function (color) {
		
						
		
						var txt_shdow = $('.common_back').css('text-shadow');
		
			
		
						var a = txt_shdow.split(" ");
		
			
		
						var shadowTxt = a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+color+" "+a[9]+" "+a[10]+" "+a[11];
		
						if ( $.browser.msie ) {
		
							
		
							var shadowTxt = ""+a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+" "+a[6]+" "+color;
		
							console.log(shadowTxt)
		
							
		
						};
		
			
		
						$('.common_back').css('text-shadow', shadowTxt);
		
			
		
					}
		
					
		
				});
		
		
		
		
		
		//	$('#colorSelector-E').ColorPicker({
		
		//
		
		//		color: '#00ff00',
		
		//
		
		//		onShow: function (colpkr) {
		
		//
		
		//			$(colpkr).fadeIn(500);
		
		//
		
		//			return false;
		
		//
		
		//		},
		
		//
		
		//		onHide: function (colpkr) {
		
		//
		
		//			$(colpkr).fadeOut(500);
		
		//
		
		//			return false;
		
		//
		
		//		},
		
		//
		
		//		onChange: function (hsb, hex, rgb) {
		
		//
		
		//			$('#colorSelector-E div').css('backgroundColor', '#' + hex);
		
		//
		
		//			var txt_shdow = $('.common').css('text-shadow');
		
		//
		
		//			var a = txt_shdow.split(" ");
		
		//
		
		//			var shadowTxt = a[0]+" "+a[1]+" "+a[2]+" "+a[3]+" "+a[4]+" "+a[5]+"#"+hex+" "+a[9]+" "+a[10]+" "+a[11];
		
		//
		
		//			$('.common').css('text-shadow', shadowTxt);
		
		//
		
		//
		
		//
		
		//		}
		
		//
		
		//	});
		
		//
		
		//	
		
		//////////////////////////////////////////////////////////////////////////////////////
		
		
		
		
		
			$('.tools-body-left-slider-right').click(function(e) {
		
		
		
				if(parseInt($('.tools-body-left-slider').css('margin-left')))
		
		
		
					$('.tools-body-left-slider').animate({'margin-left':'0px'});
		
		
		
				else
		
		
		
					$('.tools-body-left-slider').animate({'margin-left':'-64px'});
		
		
		
			});
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////
		
		
		
			$('.help-details .help-list-tab-mater:not(:eq(0))').hide();
		
		
		
			$('.tools-body-left-slider-right-tabhead ul li').click(function(e) {
		
				$('.tools-body-left-slider-right-tabhead ul li a').removeClass('active');
		
		
		
				$(this).children('a').addClass('active');
		
		
		
				$('.help-details .help-list-tab-mater').hide();
		
		
		
				$('.help-details .help-list-tab-mater:eq('+$(this).index()+')').show();
		
		
		
			});
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////
		
		
		
			$('.help-details_back .help-list-tab-mater_back:not(:eq(0))').hide();
		
		
		
			$('.tools-body-left-slider-right-tabhead_back ul li').click(function(e) {
		
		
		
				$('.tools-body-left-slider-right-tabhead_back ul li a').removeClass('active_back');
		
		
		
				$(this).children('a').addClass('active_back');
		
		
		
				$('.help-details_back .help-list-tab-mater_back').hide();
		
		
		
				$('.help-details_back .help-list-tab-mater_back:eq('+$(this).index()+')').show();
		
		
		
			});
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////
		
		
		
		//Text
		
		
		
		/////
		
		
		
			$('.product-monogram-txt-stl').keyup(function(){
		
		
		
				var text=$('.product-monogram-txt-stl').val();
		
		
		
				document.getElementById("f_img").style.display="inline";
		
		
		
				document.getElementById("draggable").style.width = document.getElementById("f_img").offsetWidth+"px";
		
		
		
				document.getElementById("draggable").style.height = document.getElementById("f_img").offsetHeight+"px";
		
		
		
				document.getElementById("f_img").style.display="none";
		
		
		
				
		
		
		
				if(text.length>=1)
		
		
		
				{
		
		
		
					$('#showtext').show();
		
		
		
					$('#showtext').html(text+'&nbsp;<img class="text_cross" src="images/close.png" height="17" width="17" style="float:right">');
		
		
		
				}
		
		
		
				else
		
		
		
				{
		
		
		
					$('#showtext').hide();
		
		
		
				}
		
		
		
				insertText();
		
		
		
				init_arc();
		
		
		
			});
		
		
		
		//}
		
		
		
		//else if(front_flag==1){
		
		$('.text_cross').live('click',function(){
				
				$('.product-monogram-txt-stl').val('');
				$('#letter').val('');
				$('#showtext').hide();
				$('#showtextimage').hide();
			});
		
		
		
		
		
			
		
		
		
		//}
		
		
		
		
		
		
		
		
		
		
		
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		/******Curve Text********* */
		
		
		
		
		
		
		
			var check_node = document.getElementById("curve_check");
		
		
		
			var curve_node = document.getElementById("arc");
		
		
		
			var text_node = document.getElementById("f_img");
		
		
		
			
		
		
		
			var check_flag = 0;
		
		
		
			check_node.addEventListener("click",curve_it,false);
		
		
		
			function curve_it(){
		
		
		
				if(check_flag==0){
		
		
		
					var txt = text_node.innerHTML;
		
		
		
					text_node.style.display="none";
		
		
		
					curve_node.style.display="inline";
		
		
		
					curve_node.innerHTML="";
		
		
		
					var new_div = document.createElement("div");
		
		
		
					new_div.setAttribute("id","txt_cpy");
		
		
		
					new_div.innerHTML=txt;
		
		
		
					curve_node.appendChild(new_div);
		
		
		
				
		
		
		
					$('#txt_cpy').arctext({radius:slvalue , dir :sldir});
		
		
		
					document.getElementById("curve_xyz").style.display="inline";
		
		
		
					check_flag=1;
		
		
		
					curveNode_flag = 1;
		
		
		
				}
		
		
		
				else{
		
		
		
					text_node.style.display="inline";
		
		
		
					curve_node.style.display="none";
		
		
		
					document.getElementById("curve_xyz").style.display="none";
		
		
		
					check_flag=0;
		
		
		
				}
		
		
		
			}
		
		
		
			
		
		
		
			function init_arc()
		
		
		
			{
		
		
		
				
		
		
		
				if(check_node.checked==true){
		
		
		
					var txt = text_node.innerHTML;
		
		
		
					text_node.style.display="none";
		
		
		
					curve_node.style.display="inline";
		
		
		
					curve_node.innerHTML="";
		
		
		
					var new_div = document.createElement("div");
		
		
		
					new_div.setAttribute("id","txt_cpy");
		
		
		
					new_div.innerHTML=txt;
		
		
		
					curve_node.appendChild(new_div);
		
		
		
					$('#txt_cpy').arctext({radius:slvalue , dir :sldir});
		
		
		
				}
		
		
		
				else{
		
		
		
					text_node.style.display="inline";
		
		
		
					curve_node.style.display="none";
		
		
		
				}
		
		
		
				
		
		
		
				if(curveNode_flag==1){
		
		
		
					var opacity=$("#opactext" ).val();
		
		
		
					var arc = document.getElementById("arc");
		
		
		
					var span = arc.getElementsByTagName("span");
		
		
		
					for(var i=0; i<span.length; i++){
		
		
		
						span[i].style.opacity = opacity/10;
		
		
		
					}
		
		
		
				}
		
		
		
			}
		
		
		
		/* *********************** */
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			$('#font_select').change(function() {
		
		
		
				$('.font_select_hidden').val($(this).val());
		
		
		
				insertText();
		
		
		
			});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			var bold_flag=0;
		
		
		
			var underline_flag=0;
		
		
		
			var italic_flag=0;
		
		
		
			
		
		
		
			var f_img1 = document.getElementById("f_img");
		
		
		
			var arc = document.getElementById("arc");
		
		
		
		
		
		
		
			$('.boldtext').click(function() {
		
		
		
				if(bold_flag==0){
		
		
		
					f_img1.style.fontWeight="bold";		
		
		
		
					arc.style.fontWeight="bold";		
		
		
		
					bold_flag=1;
		
		
		
				}
		
		
		
				else if(bold_flag==1){
		
		
		
					f_img1.style.fontWeight="normal";	
		
		
		
					arc.style.fontWeight="normal";	
		
		
		
					bold_flag=0;
		
		
		
				}
		
		
		
			});
		
		
		
			
		
		
		
			$('.underlinetext').click(function() {
		
		
		
				if(underline_flag==0){
		
		
		
					f_img1.style.textDecoration = 'underline';	
		
		
		
					arc.style.textDecoration = 'underline';	
		
		
		
					underline_flag=1;
		
		
		
				}
		
		
		
				else if(underline_flag==1){
		
		
		
					f_img1.style.textDecoration = 'none';	
		
		
		
					arc.style.textDecoration = 'none';	
		
		
		
					underline_flag=0;
		
		
		
				}
		
		
		
			});
		
		
		
			
		
		
		
			$('.latinetext').click(function() {
		
		
		
				if(italic_flag==0){
		
		
		
					f_img1.style.fontStyle ="italic";
		
		
		
					arc.style.fontStyle ="italic";		
		
		
		
					italic_flag=1;
		
		
		
				}
		
		
		
				else if(italic_flag==1){
		
		
		
					f_img1.style.fontStyle ="normal";	
		
		
		
					arc.style.fontStyle ="normal";		
		
		
		
					italic_flag=0;
		
		
		
				}
		
		
		
			});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//////  Saving ////
		
		
		
		/*$('.save_img').click(function(){
		
		
		
			html2canvas('.tools-body-mid-container', {
		
		
		
		 		 onrendered: function(canvas) {
		
		
		
		   		 document.body.appendChild(canvas);
		
		
		
		  	}
		
		
		
		});
		
		
		
			
		
		
		
		});*/
		
		
		
		////////
		
		
		
		
		
		
		
		//////  product changing ///aveek
		
		
		
			$('.pro-button-container_men').live('click',function(){
		
				
		
				pid = $(this).attr('data-id');
		
				
		
				$.post('http://www.demoets.com/p/product_cust/index/ajax/',{mode:'get-product-image',pid:pid},function(data){
		
					
		
					//$('.color-view-container').html(data);
		
					var ob = $.parseJSON(data);
		
			
		
					var doc = document.getElementById("shrt_img");
		
			
		
					var image = doc.getElementsByTagName("img");
		
			
		
					var img = image[0];
		
			
		
					img.src = 'upload/product/'+ob.front;
		
			
		
					var img = "url('"+img.src+"')";
		
			
		
					document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
			
		
					var par =  document.getElementById("f_img").parentNode;
		
			
		
					document.getElementById("f_img").src="";
		
			
		
					var img_node = par.removeChild(document.getElementById("f_img"));
		
			
		
					par.appendChild(img_node);
		
			
		
					$('#test').css('background-image',img);
		
			
		
					img = image[1];
		
			
		
					img.src = 'upload/product/'+ob.backimg;
		
					
		
					
		
			
		
					$('.product-container').css('display','none');
		
			
		
					$('.showtextcont').css({'width':'215px','margin-left':'0px','margin-top':'0px','height':'303'});
		
					$('#showtextimage').css({'width':'215px','margin-left':'0px','margin-top':'69px'});
		
				});
		
			});
		
		
		
			
		
		
		
			$('.pro-button-container_women').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/skinny fit ladys.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/skinny fit ladys_back.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'170px','margin-left':'30px','margin-top':'0px','height':'303'});
		
				$('#showtextimage').css({'width':'215px','margin-left':'0px','margin-top':'69px'});
		
		
		
			});
		
		
		
			$('.pro-button-container_s3').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/S3 TEMPLATE_a.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/S3 TEMPLATE_a.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'170px','margin-left':'21px','margin-top':'13px','height':'303'});
		
				$('#showtextimage').css({'width':'215px','margin-left':'0px','margin-top':'69px'});
		
		
		
			});
		
		
		
			$('.pro-button-container_s4').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/S4 TEMPLATE_a.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/S4 TEMPLATE_a.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'156px','margin-left':'30px','margin-top':'43px','height':'243'});
		
				$('#showtextimage').css({'width':'215px','margin-left':'0px','margin-top':'69px'});
		
		
		
			});
		
		
		
			$('.pro-button-container_women2').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/skinny fit vest_front.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/skinny fit vest_back.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'189px','margin-left':'8px','margin-top':'41px','height':'270'});
		
				$('#showtextimage').css({'width':'215px','margin-left':'0px','margin-top':'69px'});
		
		
		
			});
		
		
		
			$('.pro-button-container_iphone4').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/iPhone4_template_black.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/iPhone4_template_white.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'198px','margin-left':'0px','margin-top':'0px','height':'311'});
		
				$('#showtextimage').css({'width':'215px','margin-left':'0px','margin-top':'69px'});
		
		
		
			});
		
			
		
			$('.pro-button-container_iphone5').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/iPhone5_template_black.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/iPhone5_template_white.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'198px','margin-left':'5px','margin-top':'0px','height':'311'});
		
				$('#showtextimage').css({'width':'215px','margin-left':'0px','margin-top':'69px'});
		
		
		
			});
		
			
		
				$('.pro-button-container_mug').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/mug.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/iPhone5_template_white.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'257px','height':'311'});
		
				$('#showtextimage').css({'width':'257px','margin-left':'53px','margin-top':'77px'});
		
		
		
			});
		
			
		
			$('.pro-button-container_bag').live('click',function(){
		
		
		
				var doc = document.getElementById("shrt_img");
		
		
		
				var image = doc.getElementsByTagName("img");
		
		
		
				var img = image[0];
		
		
		
				img.src = "images/TEMPLATE FOR BAGS.png";
		
		
		
				var img = "url('"+img.src+"')";
		
		
		
				document.getElementById("test").style.backgroundImage="url('"+img.src+"')"; 
		
		
		
				var par =  document.getElementById("f_img").parentNode;
		
		
		
				document.getElementById("f_img").src="";
		
		
		
				var img_node = par.removeChild(document.getElementById("f_img"));
		
		
		
				par.appendChild(img_node);
		
		
		
				$('#test').css('background-image',img);
		
		
		
				img = image[1];
		
		
		
				img.src = "images/TEMPLATE FOR BAGS.png";
		
		
		
				$('.product-container').css('display','none');
		
		
		
				$('.showtextcont').css({'width':'257px','height':'311'});
		
				$('#showtextimage').css({'width':'257px','margin-left':'53px','margin-top':'77px'});
		
		
		
			});
		
		
		
		
		
		
		
		///////////
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		////  Dragging  ////////
		
		
		
		
		
		
		
			var drag_flag = 0;
		
		
		
			var drag_flag_image = 0;
		
		
		
			$( "#draggable" ).draggable({ containment: "#showtextimage"});
		
		
		
			$( "#draggable_back" ).draggable({ containment: "#showtextimage_back"});
		
		
		
		
		
		
		
		
		
		
		
			document.getElementById("f_img").addEventListener("mousedown",drag_box_init,false);
		
		
		
			document.getElementById("arc").addEventListener("mousedown",drag_box_init,false);
		
		
		
		
		
		
		
			function drag_box_init(){
		
		
		
				drag_flag=1;
		
		
		
				var disp_flag=0;
		
		
		
				$( "#draggable" ).draggable('enable');
		
		
		
				if($('#f_img').css('display')=='none'){
		
		
		
					document.getElementById("f_img").style.display="inline";
		
		
		
					disp_flag=1;
		
		
		
				}
		
		
		
				document.getElementById("draggable").style.width = document.getElementById("f_img").offsetWidth+"px";
		
		
		
				document.getElementById("draggable").style.height = document.getElementById("f_img").offsetHeight+"px";
		
		
		
				if(disp_flag==1){
		
		
		
					document.getElementById("f_img").style.display="none";
		
		
		
					disp_flag=0;
		
		
		
				}
		
		
		
			}
		
		
		
		
		
		
		
		
		
		
		
		//////////////////////////////////////////////////
		
		
		
		
		
		
		
		////  Image Dragging  ////////
		
		
		
		function tleditimage(){
		
		
		
		var drag_flag_image = 0;
		
		
		
		var click = {
		
		
		
		    x: 0,
		
		
		
		    y: 0
		
		
		
		};
		
		
		
		$('.rotate_image').draggable({
		
		
		
			//containment : "#showtextimage";
		
		
		
		    start: function(event) {
		
		
		
				
		
		
		
		        click.x = event.clientX;
		
		
		
		        click.y = event.clientY;
		
		
		
		    },
		
		
		
		    drag: function(event, ui) {
		
		
		
		        var original = ui.originalPosition;
		
		
		
		        ui.position = {
		
		
		
		            left: (event.clientX - click.x + original.left) / zoom,
		
		
		
		            top:  (event.clientY - click.y + original.top ) / zoom
		
		
		
		        };
		
		
		
		    }
		
		
		
		});
		
		
		
			
		
		
		
		};
		
		
		
			
		
		
		
			
		
		
		
			
		
		
		
			
		
		
		
			
		
		
		
				//$('.rotate_image').draggable({ containment: "#showtextimage"});
		
		
		
				$('.drag_shirt').click(function(){
		
		
		
					$('#tshirt_main').draggable();
		
		
		
					$('#tshirt_main').draggable( 'enable' );
		
		
		
					document.body.style.cursor = 'move';
		
		
		
				})
		
		
		
				$('.drag_stop').click(function(){
		
		
		
					$('#tshirt_main').draggable( 'disable' );
		
		
		
					document.body.style.cursor = 'default';
		
		
		
				})
		
		
		
		
		
		
		
				//$('#tshirt_main').draggable();
		
		
		
		
		
		
		
		
		
		
		
		//	document.getElementById("f_img").addEventListener("mousedown",drag_box_init,false);
		
		
		
		//	document.getElementById("arc").addEventListener("mousedown",drag_box_init,false);
		
		
		
		//
		
		
		
		//	function drag_box_init(){
		
		
		
		//		drag_flag=1;
		
		
		
		//		var disp_flag=0;
		
		
		
		//		$( "#draggable" ).draggable('enable');
		
		
		
		//		if($('#f_img').css('display')=='none'){
		
		
		
		//			document.getElementById("f_img").style.display="inline";
		
		
		
		//			disp_flag=1;
		
		
		
		//		}
		
		
		
		//		document.getElementById("draggable").style.width = document.getElementById("f_img").offsetWidth+"px";
		
		
		
		//		document.getElementById("draggable").style.height = document.getElementById("f_img").offsetHeight+"px";
		
		
		
		//		if(disp_flag==1){
		
		
		
		//			document.getElementById("f_img").style.display="none";
		
		
		
		//			disp_flag=0;
		
		
		
		//		}
		
		
		
		//	}
		
		
		
		
		
		
		
		
		
		
		
		//////////////////////////////////////////////////
		
		
		
		
		
		
		
		
		
		
		
			left_flag=1;
		
		
		
			right_flag=0;
		
		
		
		
		
		
		
		
		
		
		
			$('.center_align').click(function(){
		
		
		
				document.getElementById("draggable").style.left="0px";
		
		
		
				var disp_flag=0;
		
		
		
				if($('#f_img').css('display')=='none'){
		
		
		
					document.getElementById("f_img").style.display="inline";
		
		
		
					disp_flag=1;
		
		
		
				}
		
		
		
				var wid_img = document.getElementById("f_img").offsetWidth;
		
		
		
				if(disp_flag==1){
		
		
		
					document.getElementById("f_img").style.display="none";
		
		
		
					disp_flag=0;
		
		
		
				}
		
		
		
				var wid_div = parseInt(document.getElementById("showtextimage").style.width);
		
		
		
				var new_margin = (wid_div - wid_img)/2;
		
		
		
				document.getElementById("drop").style.cssFloat="left";
		
		
		
				document.getElementById("drop").style.left = parseInt(new_margin)+"px";
		
		
		
				document.getElementById("spinner-A").value = "0";
		
		
		
				$('.common').css("margin-left","0");
		
		
		
				left_flag=0;
		
		
		
				right_flag=0;
		
		
		
			});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			$('.right_align').click(function(){
		
		
		
				document.getElementById("draggable").style.left="0px";
		
		
		
				var disp_flag=0;
		
		
		
				if($('#f_img').css('display')=='none'){
		
		
		
					document.getElementById("f_img").style.display="inline";
		
		
		
					disp_flag=1;
		
		
		
				}
		
		
		
				var wid_img = document.getElementById("f_img").offsetWidth;
		
		
		
				if(disp_flag==1){
		
		
		
					document.getElementById("f_img").style.display="none";
		
		
		
					disp_flag=0;
		
		
		
				}
		
		
		
				var wid_div = parseInt(document.getElementById("showtextimage").style.width);
		
		
		
				var new_margin = (wid_div - wid_img);
		
		
		
				document.getElementById("drop").style.left = new_margin+"px";
		
		
		
				document.getElementById("drop").style.cssFloat="left";
		
		
		
				document.getElementById("spinner-A").value = "0";
		
		
		
				$('.common').css("margin-left","0");
		
		
		
				right_flag=1;
		
		
		
				left_flag=0;
		
		
		
			});
		
		
		
		
		
		
		
		
		
		
		
			$('.left_align').click(function(){
		
		
		
				document.getElementById("draggable").style.left="0px";
		
		
		
				document.getElementById("drop").style.left = "0px";
		
		
		
				document.getElementById("drop").style.cssFloat="left";
		
		
		
				document.getElementById("spinner-A").value = "0";
		
		
		
				$('.common').css("margin-left","0");
		
		
		
				left_flag=1;
		
		
		
				right_flag=0;
		
		
		
			});
		
		
		
		
		
		
		
		
		
		
		
			var hori_flip_flag = 0;
		
		
		
			var vert_flip_flag = 0;
		
		
		
		
		
		
		
			$('.hori-flip').click(function() {
		
		
		
					if(hori_flip_flag==0){		
		
		
		
						$("#append_flip_hori").css({ '-moz-transform':'scaleX(-1)','-o-transform':'scaleX(-1)','-webkit-transform': 'scaleX(-1)','transform':'scaleX(-1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
						hori_flip_flag=1;
		
		
		
					}
		
		
		
					else if(hori_flip_flag==1)
		
		
		
					{
		
		
		
						$("#append_flip_hori").css({ '-moz-transform':'scaleX(1)','-o-transform':'scaleX(1)','-webkit-transform': 'scaleX(1)','transform':'scaleX(1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
						hori_flip_flag=0;
		
		
		
					}
		
		
		
			});
		
		
		
			$('.vert-flip').click(function() {
		
		
		
						if(vert_flip_flag==0){		
		
		
		
						$("#append_flip_vert").css({ '-moz-transform':'scaleY(-1)','-o-transform':'scaleY(-1)','-webkit-transform': 'scaleY(-1)','transform':'scaleY(-1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
							vert_flip_flag=1;
		
		
		
						}
		
		
		
						else if(vert_flip_flag==1){
		
		
		
							$("#append_flip_vert").css({ '-moz-transform':'scaleY(1)','-o-transform':'scaleY(1)','-webkit-transform': 'scaleY(1)','transform':'scaleY(1)','filter':'FlipH','-ms-filter':'FlipH'});
		
		
		
							vert_flip_flag=0;	
		
		
		
						}
		
		
		
			});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
			function mergeText(){
		
		
		
				var str = $('#letter').val();
		
		
		
				var font=$('.font_select_hidden').val();
		
		
		
				var size=$("#sizetext" ).val();
		
		
		
				var opacity=$("#opactext" ).val();
		
		
		
				var space=$("#spacetext" ).val();
		
		
		
				
		
		
		
				if (window.XMLHttpRequest)
		
		
		
				{
		
		
		
					xmlhttp=new XMLHttpRequest();
		
		
		
				}
		
		
		
				else
		
		
		
				{
		
		
		
					xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		
		
		
				}
		
		
		
				xmlhttp.onreadystatechange=function()
		
		
		
				{
		
		
		
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
		
		
		
					{
		
		
		
						$('#showtextimage').show();
		
		
		
						$('#f_img').attr('src','image.php?str='+str+'&font='+font+'&size='+size+'&space='+space);
		
		
		
						//By Abhishek
		
		
		
						$('#f_img').attr('text_value',str);	
		
		
		
						var par = document.getElementById("f_img").parentNode;
		
		
		
						var chld = par.removeChild(document.getElementById("f_img"));
		
		
		
						par.appendChild(chld);
		
		
		
						////////
		
		
		
						if(opacity==10)
		
		
		
						{
		
		
		
							$('#f_img').css({'opacity':'1'});
		
		
		
						}
		
		
		
						else
		
		
		
						{
		
		
		
							$('#f_img').css({'opacity':'.'+opacity});
		
		
		
						}
		
		
		
					 }
		
		
		
				}
		
		
		
				xmlhttp.open("GET","image.php?str="+str+'&font='+font+'&size='+size+'&space='+space,true);
		
		
		
				xmlhttp.send();
		
		
		
			}
		
		
		
		
		
		
		
		/*	function textcross()
		
		
		
			{
		
				alert(1);
		
				$('.product-monogram-txt-stl').val('');
		
		
		
				$('#letter').val('');
		
		
		
				$('#showtext').hide();
		
		
		
				$('#showtextimage').hide();
		
		
		
			}
		*/
		
		
			function copy_img()
		
		
		
			{
		
		
		
			alert(1);	
		
		
		
			}
		
		
		
			
		
		
		
			function paste_img()
		
		
		
			{
		
		
		
				alert(2);	
		
		
		
			}
		
		
		
			
		
		
		
		}
		
		
		
		/*****************************************************************************
		
		
		
		
		
		
		
		*****************************************************************************/
		
		
		
		$(document).ready(function(){
		
								 
		
				
		
		
		
		
		
		/*****************************************************************************
		
		
		
					For Product Popup
		
		
		
		*****************************************************************************/
		
		
		
		$('.product-container').css('display','none');
		
		
		
		$('#product-pop').click(function(){
		
		
		
			$('.product-container').fadeIn(300).css('display','block');
		
		
		
		});
		
		
		
		$('.product-close-buton').click(function(){
		
		
		
			$('.product-container').css('display','none');
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Product Popup Sub
		
		
		
		*****************************************************************************/
		
		
		
		$('.product-sub-container').css('display','none');
		
		
		
		$('.pro-button-container').click(function(){
		
		
		
			//$('.product-container').css('display','none');
		
		
		
			//$('.product-sub-container').fadeIn(0).css('display','block');aveek
		
		
		
			alert(1);
		
		
		
		});
		
		
		
		$('.product-close-buton').click(function(){
		
		
		
			$('.product-sub-container').css('display','none');
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Product Popup Sub Back
		
		
		
		*****************************************************************************/
		
		
		
		$('.product-sub-container').css('display','none');
		
		
		
		$('.product-back-buton').click(function(){
		
		
		
			$('.product-sub-container').css('display','none');
		
		
		
			$('.product-container').fadeIn(0).css('display','block');
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Image Popup Back
		
		
		
		*****************************************************************************/
		
		
		
		$('.image-sub-container').css('display','none');
		
		
		
		$('#image-pop').click(function(){
		
		
		
			$('.image-sub-container').fadeIn(300).css('display','block');
		
		
		
		});
		
		
		
		$('.product-close-buton').click(function(){
		
		
		
			$('.image-sub-container').css('display','none');
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Image Popup Sub
		
		
		
		*****************************************************************************/
		
		
		
		$('.product-sub-container').css('display','none');
		
		
		
		$('.image-button-container').live('click',function(){ 
		
		
		
			$('.product-container').css('display','none');
		
		
		
			$('.product-sub-container').fadeIn(0).css('display','block');
		
		
		
		});
		
		
		
		
		
		$('.product-close-buton').click(function(){
		
		
		
			$('.product-sub-container').css('display','none');
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Toggle Back
		
		
		
		*****************************************************************************/
		
		
		
		$('#product-pop').click(function(){
		
		
		
			$('.product-container').fadeIn(300).css('display','block');
		
		
		
			$('.image-sub-container').fadeOut(900);
		
		
		
		});
		
		
		
		$('#image-pop').click(function(){
		
		
		
			$('.image-sub-container').fadeIn(300).css('display','block');
		
		
		
			$('.product-container').fadeOut(900);
		
		
		
		
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Image Upload
		
		
		
		*****************************************************************************/
		
		
		
		$('#img-up').click(function(){
		
		
		
			$('#photoimg').click();
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Product Popup Sub Menu
		
		
		
		*****************************************************************************/
		
		
		
		$('.men-list').slideUp(0);
		
		
		
		$('.men').click(function(){
		
		
		
			$('.men-list').slideToggle();
		
		
		
		});
		
		
		
		$('.women-list').slideUp(0);
		
		
		
		$('.women').click(function(){
		
		
		
			$('.women-list').slideToggle();
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Text Filter Tab Top
		
		
		
		*****************************************************************************/
		
		
		
		$('.help-details .help-list-tab-mater:not(:eq(0))').hide();
		
		
		
		$('.tools-body-left-slider-right-tabhead ul li').click(function(e) {
		
		
		
			$('.tools-body-left-slider-right-tabhead ul li a').removeClass('active');
		
		
		
			$(this).children('a').addClass('active');
		
		
		
		   	$('.help-details .help-list-tab-mater').hide();
		
		
		
			$('.help-details .help-list-tab-mater:eq('+$(this).index()+')').show();
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
					For Text Filter Tab Bot
		
		
		
		*****************************************************************************/
		
		
		
		$('.drop-down .help-list-tab-mater:not(:eq(0))').hide();
		
		
		
		$('.tools-body-left-slider-right-tabhead-B ul li').click(function(e) {
		
		
		
			$('.tools-body-left-slider-right-tabhead-B ul li a').removeClass('active');
		
		
		
			$(this).children('a').addClass('active');
		
		
		
		   	$('.drop-down .help-list-tab-mater').hide();
		
		
		
			$('.drop-down .help-list-tab-mater:eq('+$(this).index()+')').show();
		
		
		
		});
		
		
		
		/*****************************************************************************
		
		
		
		
		
		
		
		*****************************************************************************/
		
		
		
		//alert($('.body-container-back').height());
		
		
		
		});
 
		
		$(function() {
		
		    $( document ).tooltip();
		
		  });
		
 
		
		$(document).ready(function()
		
		{
		
		///////////////////////////soumya////////////////////////////
		
		    var options = {
		
		    beforeSend: function()
		
		    {
		
		        //$("#progress").show();
		
		        //clear everything
		
		        $("#bar").width('0%');
		
		        $("#message").html("");
		
		        $("#percent").html("0%");
		
		    },
		
		    uploadProgress: function(event, position, total, percentComplete)
		
		    {
		
		        $("#bar").width(percentComplete+'%');
		
		        $("#percent").html(percentComplete+'%');
		
		 
		
		    },
		
		    success: function()
		
		    {
		
		        $("#bar").width('100%');
		
		        $("#percent").html('100%');
		
		 
		
		    },
		
		    complete: function(response)
		
		    {
		
		       // $("#message").html("<font color='green'>"+response.responseText+"</font>");
		
				//alert(response.responseText);
				
				$('.product-close-buton').trigger('click');
				$('#editimage').attr('src','upload/product/'+response.responseText).css({'display':'block','z-index':''});
				$('#cross_image').show();
		
		    },
		
		    error: function()
		
		    {
		
		        $("#message").html("<font color='red'> ERROR: unable to upload files</font>");
		
		 
		
		    }
		
		 
		
		};
		
		
		
		 
		
			$("#myForm").ajaxForm(options);
		
			 
		
			$('#img-up').click(function(){
		
				$('#myfile').trigger('click');
		
			});
		
			$('input[type="file"]').change(function(){
		
				$('#frm-submit').trigger('click');
		
			});
			
			
		
			
		
			var ajaxurl = 'http://www.demoets.com/p/product_cust/index/ajax/';
		
			
		
			function allgeneralproduct(){
		
				$.post(ajaxurl,{mode:'get-active-product'},function(data){
		
					$('.all-product').html(data);
		
				});
		
			}
		
			function viewcolorproduct(id){
		
				$.post('http://www.demoets.com/p/product_cust/index/ajax/',{mode:'view-color-product',id:id},function(data){
		
					$('.color-view-container').html(data);
					getpriceproduct(id);
				});
		
			}
			
			function getpriceproduct(id){
				$.post('http://www.demoets.com/p/product_cust/index/ajax/',{mode:'product-price',id:id},function(data){
					var obj = $.parseJSON(data);
					//alert(obj.pr_ship_price);
					$('.select-menu').html(obj.pr_qty);
					quantity = parseInt($('.quantity option:selected').text());
					ship_price = $('.quantity option:selected').val();
					productcalculation(obj.pr_price,obj.pr_name, quantity, ship_price)
					//$('.product-price').val(obj.pr_price);
					//$('.pr_price').text(obj.pr_price);
				});
			}
			function productcalculation(price,name,quantity , ship_price){
					shipprice 	 = parseFloat(ship_price).toFixed(2);
					totalprice	 = $('.total-price').val();
					
					total = parseFloat((price * quantity/quantity) +  parseFloat(shipprice)).toFixed(2);
					$('.total').text(total);
					$('.total-price').val(total);
					$('.product-price').val(price);
					$('.pr_price').text(price);
					$('.sh_price').text(shipprice);
					$('.ship-price').val(shipprice);
			}
		
			$('.quantity').live('change',function(){
				quantity = $('.quantity option:selected').text();
				//alert(quantity);
				price = $(this).val();
				ship_price = $('.ship-price').val();
				productcalculation(price,name, quantity,ship_price)
			});
		
			viewcolorproduct('1');
			getpriceproduct('1');
		
			
		
			$('.active-pr').live('click',function(){
		
				pid = $(this).attr('data-id');
		
				viewcolorproduct(pid);
		
			});
		
			
		
			$('#product-pop,#image-pop').live('click',function(){
		
				allgeneralproduct();
		
			});
		
			function getcategoryproduct(type){
		
				$.post('http://www.demoets.com/p/product_cust/index/ajax/',{mode:'get-category-product',type:type},function(data){
		
					$('.image-category-product').html(data);
		
				});
		
			}
		
			function getproduct(type,cid){
		
				$.post('http://www.demoets.com/p/product_cust/index/ajax/',{mode:'get-product',type:type, id:cid},function(data){
		
					$('.product-sub-right').html(data);
		
				});
		
			}
		
			
		
			$('.img-pr').live('click',function(){
		
				var type = $(this).attr('data-name');
		
				getcategoryproduct(type);
		
			});
		
			
		
			$('.pr-category').live('click',function(){
		
				$('.pr-category').removeClass('active-m');
		
				type = $(this).attr('data-type');
		
				cid = $(this).attr('data-id');
		
				$(this).addClass('active-m');
		
				getproduct(type,cid);
		
			});
		
			$('.buy-now').click(function(){
				$('#product-details').submit();
			});
		
		
				
		    $('#LanguageSwitcher li').click(function(){
				var lang = $(this).children('a').attr('id');
				$.post('http://www.demoets.com/p/product_cust/index/ajax/',{mode:'language-change',language:lang},function(data){
					window.location.reload();
				});
				
			});
		
			//////////////////////////soumya////////////////////////////
		
		  $('.save_image').live('click',function(){
				 var html = document.getElementById("tshirt_main").parentNode.innerHTML;
				 console.log(html);
			//		  html2canvas($('#tshirt_main'), {
		    //  	            onrendered: function(canvas) {
			//				var dataURL = canvas.toDataURL("image/png");
			//				$.post('http://www.demoets.com/p/product_cust/index/ajax/',{mode:'get-save',image:dataURL},function(data){
			//					//Popup.hide('savelaterimage');
			//					$('#image_front_side').val(data);
			//					});
						
		    //  		        }
		
		     // 	        });
			});
			$('#cross_text').hide();
			var textlength = $('.product-monogram-txt-stl').val();
			if(textlength !== ""){
					alert(1);
					$('#cross_text').show();
				}
			$('#cross_text').live('click',function(){
				alert($('.product-monogram-txt-stl').val());
			});
		});
		
			$(document).ready(function() {
				 ////////aveek-1-10///////////
				$('.header-menu-back-mid-bottom ul li a').css('color','#000');
				 if ( $.browser.msie ) {
					$('.header-menu-back-mid-bottom ul li a').css('color','#FFF');
				 }
				 ////////aveek-1-10///////////
					$('.padding_ie').css('padding-top','5px');
				 if ( $.browser.msie ) {
					$('.padding_ie').css('padding-top','7px');
				 }
				 $('.help').live('click',function(){
					$('.popup_shop').show();
				});	
				$('.popup_close').live('click',function(){
					$('.popup_shop').hide();
				});	
				
			}); 
	 
		$(document).ready(function() {
		
		    $('#img-up').click(function(){
		
				$('#photoimg').trigger('click');
		
			});
		
		});
		 