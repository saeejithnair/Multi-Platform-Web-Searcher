function getSelectionText(){
    var selectedText = "";
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString()
    }
    return selectedText
}

function openWebsite(e){
	var thetext = getSelectionText();
	if(thetext.length > 0){
		if (e.keyCode === 119) {
			thetext = thetext.replace(/ /g, '_');
			code: window.open("http://wikipedia.org/wiki/"+thetext);
		} else if (e.keyCode === 100) {
			thetext = thetext.replace(/ /g, '-');
			code:window.open("http://www.dictionary.com/browse/"+thetext);
		} else if (e.keyCode === 116) {
			thetext = thetext.replace(/ /g, '-');
			code:window.open("http://www.thesaurus.com/browse/"+thetext);
		} else if (e.keyCode === 103) {
			thetext = thetext.replace(/ /g, '+');
			code:window.open("http://www.google.com/search?q="+thetext);
		} else if (e.keyCode === 121) {
			thetext = thetext.replace(/ /g, '+');
			code:window.open("https://www.youtube.com/results?search_query="+thetext);
		} else if (e.keyCode === 114) {
			thetext = thetext.replace(/ /g, '+');
			code:window.open("https://www.reddit.com/search?q="+thetext);
	}}
}

document.addEventListener('mouseup', function(){
	document.addEventListener('keypress', openWebsite);
}, false)