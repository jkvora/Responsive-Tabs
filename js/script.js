(function($) {

  //Selected Index maintained to find active tab
  var strSelectedIndex=1;

  /*
  On Document Ready
  */
  $(document).ready(function() {
    //Active Tab On basis of url
    var url = window.location.href;
    if(url.indexOf("#")!=-1)  {
      strSelectedIndex = url.substring(url.indexOf("#") + 1);
    }
    else {
      strSelectedIndex=1;
    }
    // Set Default state
    $("#m_select").val("select"+strSelectedIndex);
    $("[id^=tab]").removeClass("selected");
    $("#tab"+strSelectedIndex).addClass("selected");
    $("[id^=rtab]").removeClass("rselected");
    $("#rtab"+strSelectedIndex).addClass("rselected");
    RenderContent(strSelectedIndex);

    //Add Event Listners
    $("a").on("click",ChangeTabPage);
    $(".responsive_tabs").on("click",OnResponsiveTabSelected);
    $('#m_select').change(ChangeSelection);

    // Check if it is mobile or not
    if (/Mobi/.test(navigator.userAgent)) {
      $('.tabs').hide();
      $("[id^=rtab]").hide();
    }
    else {
      $('#m_list').hide();
    }
  });



  //Change Tab Page on Selection
  var ChangeTabPage=function(){
    strSelectedIndex=this.id.split("tab")[1];
    $("[id^=tab]").removeClass("selected");
    $("#tab"+strSelectedIndex).addClass("selected");
    $("[id^=rtab]").removeClass("rselected");
    $("#rtab"+strSelectedIndex).addClass("rselected");
    RenderContent(strSelectedIndex);
  }


//Change Responsive tabs
  var OnResponsiveTabSelected=function(){
    strSelectedIndex=this.id.split("rtab")[1];
    $("[id^=tab]").removeClass("selected");
    $("#tab"+strSelectedIndex).addClass("selected");
    $("[id^=rtab]").removeClass("rselected");
    $("#rtab"+strSelectedIndex).addClass("rselected");
    RenderContent(strSelectedIndex);
  }


//Change Selection on mobile view
  var ChangeSelection=function () {
    strSelectedIndex= $("#m_select").val().split("select")[1];
    RenderContent(strSelectedIndex);
  }

  //Render Content i.e Show/hide Content
  var RenderContent=function(contentid){
    var location=window.location.href;
    window.location.href=location.substr(0,location.indexOf("#"))+"#"+contentid;

    $("[id^=view]").hide();
    $("#view"+contentid).show();
  }

})(jQuery);
