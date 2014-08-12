


$('#window-restore').hide();


var platform = navigator.platform;

if (/mac/i.test(platform))
    $(".frame").addClass("os-mac");
else if (/linux/i.test(platform)) {
    $(".frame").addClass("os-lnx");
} else {
    $(".frame").addClass("os-win");
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
    $(".frame").removeClass("os-lnx os-mac os-win");
    if ($(this).val() == "mac")
        $(".frame").addClass("os-mac");
    else if ($(this).val() == "lnx") {
        $(".frame").addClass("os-lnx");
    } else {
        $(".frame").addClass("os-win");
    }
    
});