  // https://pankajiitkgp.github.io/gallery/
  $(document).ready(function () {
    //   $('.img').hover(function(){
    //     $(this).html("<h1>TESTETS</h1>  ");
    //   });
    var wd = $(document).width();

    $('.img').hover(function () {
      var w = $(document).width();
      if (w >= 500) {
        var alt = $(this).attr("alt");
        var v = $(this).attr("v");
        $('.' + v).fadeIn(500);
        $('.' + v).html(alt);
        // $('.'+v).css({"display":"block", "width":"200px"});
      }
    }, function () {
      var alt = $(this).attr("alt");
      var v = $(this).attr("v");
      $('.' + v).fadeOut(500)
      // $('.'+v).css({"display":"none"});
    });

    //Do not display first the Image Gallery
    $('.galleryview').css({
      "display": "none"
    });

    var alt, v, src;
    var clss, clssNo, spltclss, spltclssNo, selImgClass,
      selImgClassNo, no = 1,
      presentSel; //spltcls = container for array
    $('.img').click(function () {
      var w = $(document).width();
      alt = $(this).attr("alt");
      v = $(this).attr("v");
      src = $(this).attr("src");
      clss = $(this).attr("class");
      spltclss = clss.split(" "); //Split calss name using space
      for (var i = 0; i < clss.length; i++) {
        spltclss[i]; //Contains the Class Name of the image
      }
      selImgClass = spltclss[1];
      spltclssNo = selImgClass.split("e"); //Contains the number of image    
      no = parseInt(spltclssNo[1], 10);
      if (no == 1) {
        $('.fa-chevron-left').css({
          "opacity": "0.4"
        });
      } else {
        $('.fa-chevron-left').css({
          "opacity": "1"
        });
      }

      if (no == 41) {
        $('.fa-chevron-right').css({
          "opacity": "0.4"
        });
      } else {
        $('.fa-chevron-right').css({
          "opacity": "1"
        });
      }

      if (w <= 800) {
        $('.fa-chevron-right.fa-5x').removeClass("fa-5x");
        $('.fa-chevron-right').addClass("fa-2x");
        $('.fa-chevron-left.fa-5x').removeClass("fa-5x");
        $('.fa-chevron-left').addClass("fa-2x");
      } else {
        $('.fa-chevron-left').addClass("fa-5x");
        $('.fa-chevron-right').addClass("fa-5x");
      }

      // alert(spltclssNo[1] + src); 
      // alert(typeof(no));    
      // presentSel = document.getElementsByClassName('image' + (no + 1))[0].src;
      // alert(presentSel);    
      // console.log(presentSel);                    
      $('.galleryview').fadeIn(800);
      $('.galleryview').css({
        "display": "flex"
      });
      $('.galleryimage').html("<img class='loadedimage' src='" + src + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>");
      $('body').css({
        "overflow": "hidden"
      });
      
    $('.loadedimage').dblclick(function(){                    
      $('i.fas.fa-heart').fadeIn(300);
      $('i.fas.fa-heart').delay(500);
      $('i.fas.fa-heart').css({
        "transition":"transform 1s linear",
        "transform":"scale(4,4)"
      });
      $('i.fas.fa-heart').fadeOut(200);
      // alert();
    });
    });

    //Next
    $('.fa-chevron-right').click(function () {
      if (no != 41) {
        presentSel = document.getElementsByClassName('image' + (no + 1))[0].src;
        alt = document.getElementsByClassName('image' + (no + 1))[0].alt;
        $('.galleryimage').css({
          "display": "none"
        });
        $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>").fadeIn(1000);
        $('.galleryimage').fadeIn(500);
        $('.fa-chevron-right, .fa-chevron-left').css({
          "opacity": "1"
        });
        no++;
        console.log(no);
      } else if (no == 41) {
        presentSel = document.getElementsByClassName('image' + 41)[0].src;
        alt = document.getElementsByClassName('image' + (no + 1))[0].alt;
        $('.galleryimage').css({
          "display": "none"
        });
        $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>");
        $('.galleryimage').fadeIn(500);
        $('.fa-chevron-right').css({
          "opacity": "0.4"
        });
      }
    });

    //NextKeyup
    $('body').keyup(function (e) {
      var code = e.keyCode || e.which;
      if (code == 39) {
        if (no != 41) {
          presentSel = document.getElementsByClassName('image' + (no + 1))[0].src;
          alt = document.getElementsByClassName('image' + (no + 1))[0].alt;
          $('.galleryimage').css({
            "display": "none"
          });
          $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>").fadeIn(1000);
          $('.galleryimage').fadeIn(500);
          $('.fa-chevron-right, .fa-chevron-left').css({
            "opacity": "1"
          });
          no++;
          console.log(no);
        } else if (no == 41) {
          presentSel = document.getElementsByClassName('image' + 41)[0].src;
          alt = document.getElementsByClassName('image' + (no + 1))[0].alt;
          $('.galleryimage').css({
            "display": "none"
          });
          $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>");
          $('.galleryimage').fadeIn(500);
          $('.fa-chevron-right').css({
            "opacity": "0.4"
          });
        }
      }
    });

    //Prev
    $('.fa-chevron-left').click(function () {
      if (no != 1) {
        presentSel = document.getElementsByClassName('image' + (no - 1))[0].src;
        alt = document.getElementsByClassName('image' + (no - 1))[0].alt;
        $('.galleryimage').css({
          "display": "none"
        });
        $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>");
        $('.galleryimage').fadeIn(500);
        $('.fa-chevron-left, .fa-chevron-right').css({
          "opacity": "1"
        });
        no--;
        console.log(no);
      } else if (no == 1) {
        presentSel = document.getElementsByClassName('image' + 1)[0].src;
        alt = document.getElementsByClassName('image' + (no - 1))[0].alt;
        $('.galleryimage').css({
          "display": "none"
        });
        $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>");
        $('.galleryimage').fadeIn(500);
        $('.fa-chevron-left').css({
          "opacity": "0.4"
        });
        console.log(no);
      }
    });

    //PrevKeyboard
    $('body').keyup(function (e) {
      var code = e.keyCode || e.which;
      if (code == 37) {
        if (no != 1) {
          presentSel = document.getElementsByClassName('image' + (no - 1))[0].src;
          alt = document.getElementsByClassName('image' + (no - 1))[0].alt;
          $('.galleryimage').css({
            "display": "none"
          });
          $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>");
          $('.galleryimage').fadeIn(500);
          $('.fa-chevron-left, .fa-chevron-right').css({
            "opacity": "1"
          });
          no--;
          console.log(no);
        } else if (no == 1) {
          presentSel = document.getElementsByClassName('image' + 1)[0].src;
          alt = document.getElementsByClassName('image' + (no - 1))[0].alt;
          $('.galleryimage').css({
            "display": "none"
          });
          $('.galleryimage').html("<img class='loadedimage' src='" + presentSel + "'><br><i class='fas fa-heart fa-6x'></i><span class='loadedtext'>" + alt + "</span>");
          $('.galleryimage').fadeIn(500);
          $('.fa-chevron-left').css({
            "opacity": "0.4"
          });
          console.log(no);
        }
      }
    });

    //Close Image Gallery
    $('.fa-times').click(function () {
      $('.galleryview').fadeOut(800);
      $('body').css({
        "overflow": "visible"
      });
    });

    $('body').keyup(function (e) {
      var code = e.keyCode || e.which;
      // alert(code);
      if (code == 27) {
        $('.galleryview').fadeOut(800);
        $('body').css({
          "overflow": "visible"
        });
      }
    });

    //Navigation
    $('.home-nav').click(function () {
      $('.homecontainer').css({"display": "block"});
      $('.kdramacontainer').css({"display": "none"});
      $('.aboutcontainer').css({"display": "none"});
      $('..galleryview').css({"display": "none"});
      $('.homecontainer').load("home.php");
      // $('.phpcontainer').load('home.php');      
      // $.ajax({
      //   url: "home.php",
      //   type: "POST",
      //   data: {home:"home"},
      //   success:function(data){
      //     $('.container').html(data);
      //     alert(data);
      //   }
      // });
    });

    $('.kdrama-nav').click(function () {
      $('.homecontainer').css({"display": "none"});
      $('.aboutcontainer').css({"display": "none"});
      $('.kdramacontainer').css({"display": "block"});
      $('.kdramacontainer').load("kdrama.php");
    });

    $('.about-nav').click(function () {
      $('.homecontainer').css({"display": "none"});     
      $('.kdramacontainer').css({"display": "none"});       
      $('.aboutcontainer').css({"display": "block"});       
      $('.aboutcontainer').load("about.php");
    });
    
  });