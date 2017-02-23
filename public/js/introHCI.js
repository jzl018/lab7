'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('.project').click(recordEvent);
}

function recordEvent(e) {
	e.preventDefault();

	ga('send', 'event', 'like', 'click');
}