// Trigger event from popup file.
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	//console.log(request.type);
    switch(request.type) {
        case "creaSancion":
            creaSancion();
		break;
		case "on":
	    	togglestorage("on");
		break;
	    case "off":
			togglestorage("off");
        break;
		case "check":
			togglestorage("check");
        break;
    }
    return true;
});


var creaSancion = function() {

	chrome.tabs.query({active: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {type: "creaSancion"});
	});


}