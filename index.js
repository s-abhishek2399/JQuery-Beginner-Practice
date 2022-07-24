
//selector id element and class
$(document).ready(function(){
    $("#btn").click(function(){
        console.log("You clicked me");
        });

    $("p").click(function(){
            console.log("Element selector");
        });    
    $("#btn1").click(function(){
        alert("id selector");
        });   
    $(".btn2").click(function(){
        alert("class selector");
        });     

});

// click event
//mouse events 
  jQuery.noConflict();
  jQuery(document).ready(function($){
    // single clicked
     $("#mse").click(function(){
        console.log("clicked me ");
     });
     //double clicked
     $("#mse").dblclick(function(){
        console.log(" you double clicked me ");
     });
     //mouse enter
     $("#mse").mouseenter(function(){
        console.log("mouse enter");
     });
     //mouse leave
     $("#mse").mouseleave(function(){
        console.log("mouse leave");
     });
});


//keyboard events

jQuery.noConflict();
  jQuery(document).ready(function($){
    //key pressed
    $('#key').keypress(function(){
        console.log('key is pressed');
    });
    //key down
    $('#key').keydown(function(){
        console.log('key is up');
    });
    //key up
    $('#key').keyup(function(){
        console.log('key is down');
    });
});

//form events

jQuery.noConflict();
  jQuery(document).ready(function($){
    //focus
    $("#fname").focus(function(){
        console.log("focus field");
    });
    //blur
    $("#fname").blur(function(){
        console.log("blur field");
    });
    //form submitted, it reloads the page
    $("#form-id").submit(function(e){
        console.log("form submitted");
        e.preventDefault();// it defaults the beahviour the behaviour of submit
    });



});

//window event
jQuery.noConflict();
jQuery(document).ready(function($){
    // window resize
    $(window).resize(function(){
        console.log("windows resized");
    });

});


// jquery on image
jQuery.noConflict();
jQuery(document).ready(function($){
    //onclick hide image
    $('#btn-hide').click(function(){
        $('#img1').hide(1000,function(){
            console.log("Image is  hidden!");
        })
        
    });

    //onclick show image
    $('#btn-show').click(function(){
        $('#img1').show(1000,function(){
            console.log("Image is shown!");
        })
        
    });

    //onclick toggle images
    $('#btn-toggle').click(function(){
        $('#img1').toggle(1000,function(){
            console.log("Image is toggled on/off");
        })
        
    });
//fadein image on
    $('#btn-fadein').click(function(){
        $('#img1').fadeIn(1000,function(){
            console.log("fade In");
        })
        
    });
//fadeout image off
    $('#btn-fadeout').click(function(){
        $('#img1').fadeOut(1000,function(){
            console.log("Fade out!");
        })
        
    });
//fadetoggle image on/off
    $('#btn-fadetoggle').click(function(){
        $('#img1').fadeToggle(1000,function(){
            console.log("Fade toggle!");
        })
        
    });


    //fadeto image it contrasts
    $('#btn-fadeto').click(function(){
        $('#img1').fadeTo(1000,0.5,function(){
            console.log("Fade to");
        })
        
    });



     //slide up it slide up the image
     $('#btn-slideup').click(function(){
        $('#img1').slideUp(1000,function(){
            console.log("slide up");
        })
        
    });

    // slidedown, it slide down the image
    $('#btn-slidedown').click(function(){
        $('#img1').slideDown(1000,function(){
            console.log("slide down");
        })
        
    });

   

    //slide toggle, it slide toggle up/down the image
    $('#btn-slidetoggle').click(function(){
        $('#img1').slideToggle(1000,function(){
            console.log("slide toggle");
        })
        
    });

});


//animate - perform a custom animation of a set of css properties



jQuery.noConflict();
jQuery(document).ready(function($){
    // animate
    $('#btn-animate').click(function(){
        $('#img2').animate({left: "+=100"}, 1000, function(){
            console.log('image animated')
        });
    });

   
});


//get text data , very useful when you are using ajax
jQuery.noConflict();
jQuery(document).ready(function($){
    //get text
    let datatext = $("#ox").text();
    console.log(datatext);

   //set text on click
   $("#btn-setText").click(function(){
       $("#ox").text("This is Kalyug");

   });

   //get html data
   let htmldata= $("#ox").html()
   console.log(htmldata);

   //set html data

   $("#btn-setHtml").click(function(){
    $("#ox").html("<b>this is  mr uzumaki</b>");
   });


    //get  value of text input in jquery
    let inp= $("#gname").val();
    //alert(inp);

    //set value of text
    $("#btn-set").click(function(){
        $("#gname").val("The value is set succesfully!!");
    });
    

    // get attribute, mainly used in ajax
    let attr1 =$("link").attr("href")
    //alert(attr1)

    // set attribute

    $("#btn-setattr").click(function(){
        $("#form-id").attr("side-id","20");

    });
    
    // set image src attr value
    $("btn-setimageattr").click(function(){
        $("#img1").attr("src","image/2.jpg")
    })

});



//css
//add class .addClass("---")
// remove class .removeClass("---")
//toggle class .toggleClass("---")


//get css  property value
// $("#div-id").css("color")--> it will give value




