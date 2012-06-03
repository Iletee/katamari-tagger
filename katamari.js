;(function() {
  // This is hosted off of github
  // because we don't want to deal with setting up and serving off of SSL
  // through our domain provider
  window.__kt = {};
  window.__kt.loading_jQuery = false;
  window.__kt.loader = function() {
     console.log('loading');
    if (typeof(jQuery) === 'undefined') {
      if (window.__kt.loading_jQuery) {
        setTimeout(window.__kt.loader, 100);
      } else {
        window.__kt.loading_jQuery= true;
        var jq_script = document.createElement('script');
        jq_script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        document.body.appendChild(jq_script);
        
		//go to next function
		window.__kt.loader();
      }
    } else {
		console.err('JQuery present!');
    }
	console.log('loading done');
  }

  window.__kt.live = function(jQuery) {
    
  };

  window.__kt.getTextNodesIn = function(jQuery, el) {
    
  };

  window.__kt.hideWords = function(jQuery, include_transitions) {
   
  }
  //Load katamari
  window.__kt.loader();
})();
