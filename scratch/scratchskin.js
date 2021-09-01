function showpersonallinks() {
	document.getElementById('scratchpersonallinks').style.visibility = 'visible';
	document.getElementById('scratchpersonallinks').style.display = 'block';
}
function hidepersonallinks() {
	document.getElementById('scratchpersonallinks').style.visibility = 'hidden';
	document.getElementById('scratchpersonallinks').style.display = 'none';
}


//google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3792496-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();