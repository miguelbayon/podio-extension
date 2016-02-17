window.onload = function() {
    document.getElementById("creaSancion").onclick = function() {
		// Send message to background script.
        chrome.extension.sendMessage({
            type: "creaSancion"
        });
    }

	document.getElementById("creaAmonestacion").onclick = function() {
		chrome.extension.sendMessage({
            type: "creaAmonestacion"
        });
	}

  document.getElementById("creaSancionConFirma").onclick = function() {
		chrome.extension.sendMessage({
            type: "creaSancionConFirma"
        });
	}

	document.getElementById("off").onclick = function() {
		chrome.extension.sendMessage({
            type: "off"
        });
	}

	document.getElementById("check").onclick = function() {
		chrome.extension.sendMessage({
            type: "check"
        });
	}
}
