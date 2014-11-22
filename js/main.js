$('#window-restore').hide();


var platform = navigator.platform;

if (/mac/i.test(platform))
    $("body").addClass("os-mac");
else if (/linux/i.test(platform)) {
    $("body").addClass("os-lnx");
} else {
    $("body").addClass("os-win");
}


$('#window-minimize').click(function(e) { chrome.app.window.current().minimize(); });
$('#window-close').click(function(e) { window.close(); });

$('#window-maximize').click(function(e) {
    $('#window-maximize').hide();
    $('#window-restore').show();
    chrome.app.window.current().maximize();
});

$('#window-restore').click(function(e) {
    $('#window-restore').hide();
    $('#window-maximize').show();
    chrome.app.window.current().restore();
});




$('#OSStyle').change(function(e) {
    $("body").removeClass("os-lnx os-mac os-win");
    if ($(this).val() == "mac")
        $("body").addClass("os-mac");
    else if ($(this).val() == "lnx") {
        $("body").addClass("os-lnx");
    } else {
        $("body").addClass("os-win");
    }

});


$('#logoCheck').change(function(e) {
  if (this.checked){
    $("#logoImg").show();
  } else {
    $("#logoImg").hide();
  }

});


