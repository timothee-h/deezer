//slider 1
jQuery(document).ready(function ($) {
  var jssor_1_options = {
    $AutoPlay: true,
    $AutoPlaySteps: 4,
    $SlideDuration: 200,
    $SlideWidth: 200,
    $SlideSpacing: 3,
    $Cols: 4,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $Steps: 4
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 1,
      $SpacingY: 1
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
  function ScaleSlider() {
    var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
      refSize = Math.min(refSize, 1200);
      jssor_1_slider.$ScaleWidth(refSize);
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  }
  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
});

//slider 2
jQuery(document).ready(function ($) {
  var jssor_2_options = {
    $AutoPlay: true,
    $AutoPlaySteps: 4,
    $SlideDuration: 200,
    $SlideWidth: 200,
    $SlideSpacing: 3,
    $Cols: 4,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $Steps: 4
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 1,
      $SpacingY: 1
    }
  };

  var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);
  function ScaleSlider2() {
    var refSize = jssor_2_slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
      refSize = Math.min(refSize, 1200);
      jssor_2_slider.$ScaleWidth(refSize);
    } else {
      window.setTimeout(ScaleSlider2, 30);
    }
  }
  ScaleSlider2();
  $(window).bind("load", ScaleSlider2);
  $(window).bind("resize", ScaleSlider2);
  $(window).bind("orientationchange", ScaleSlider2);
});

//slider 2
jQuery(document).ready(function ($) {
  var jssor_3_options = {
    $AutoPlay: true,
    $AutoPlaySteps: 4,
    $SlideDuration: 200,
    $SlideWidth: 200,
    $SlideSpacing: 3,
    $Cols: 4,
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $Steps: 4
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 1,
      $SpacingY: 1
    }
  };

  var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);
  function ScaleSlider3() {
    var refSize = jssor_3_slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
      refSize = Math.min(refSize, 1200);
      jssor_3_slider.$ScaleWidth(refSize);
    } else {
      window.setTimeout(ScaleSlider3, 30);
    }
  }
  ScaleSlider3();
  $(window).bind("load", ScaleSlider3);
  $(window).bind("resize", ScaleSlider3);
  $(window).bind("orientationchange", ScaleSlider3);
});


//Disable Zoom
$(document).keydown(function (event) {
  if (event.ctrlKey === true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109' || event.which == '187' || event.which == '189')) {
    event.preventDefault();
  }
});
$(window).bind('mousewheel DOMMouseScroll', function (event) {
  if (event.ctrlKey === true) {
    event.preventDefault();
  }
});
