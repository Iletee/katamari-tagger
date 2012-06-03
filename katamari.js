 alert('test');(function() {
/*
* Javascript and idea partially stolen from http://github.com/bantic/wordless-web
*/
  // This is hosted off of github
  // because we don't want to deal with setting up and serving off of SSL
  // through our domain provider
 
  window.__wlw = {};
  window.__wlw.loading_jQuery = false;
  window.__wlw.loader = function() {
    if (typeof(jQuery) === 'undefined') {
      if (window.__wlw.loading_jQuery) {
        setTimeout(window.__wlw.loader, 100);
      } else {
        window.__wlw.loading_jQuery= true;
        var jq_script = document.createElement('script');
        jq_script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        document.body.appendChild(jq_script);
        window.__wlw.loader();
      }
    } else {
	//	alert('JQuery present!');
    }
	
	
  }
  
  });