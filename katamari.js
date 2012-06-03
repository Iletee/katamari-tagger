;(function() {
  // This is hosted off of github
  // because we don't want to deal with setting up and serving off of SSL
  // through our domain provider
  window.__wlw = {};
  window.__wlw.loading_jQuery = false;
  window.__wlw.loader = function() {
     console.log('loading');
    if (typeof(jQuery) === 'undefined') {
      if (window.__wlw.loading_jQuery) {
        setTimeout(window.__wlw.loader, 100);
      } else {
        window.__wlw.loading_jQuery= true;
        var jq_script = document.createElement('script');
        jq_script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        document.body.appendChild(jq_script);
        
		//go to next function
		window.__wlw.loader();
      }
    } else {
	//	alert('JQuery present!');
    }
	console.log('loading done');
  }

  window.__wlw.live = function(jQuery) {
    
  };

  window.__wlw.getTextNodesIn = function(jQuery, el) {
    
  };

  window.__wlw.hideWords = function(jQuery, include_transitions) {
   
  }
  window.__wlw.loader();
})();
