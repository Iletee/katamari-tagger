;(function() {
	// Derivative work out of http://github.com/bantic/wordless-web/master/wlw.js
	// Excellent loader and bookmarklet template!
	
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
        jq_script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
        document.body.appendChild(jq_script);
        
		//go to next function
		window.__kt.action(jQuery);
      }
    } else {
		console.info('JQuery present!');
		window.__kt.storeLoader();
    }
	//console.log('loading done');
  }
  
  window.__kt.storeLoader = function(jQuery){
	console.log('loading store');
	 var jq2_script = document.createElement('script');
        jq2_script.src = 'https://raw.github.com/Ile2/katamari-tagger/master/store.min.js';
        document.body.appendChild(jq2_script);
		console.info('store.js present');
		
		console.info('loading JUI');
		var jq_script3 = document.createElement('script');
		jq_script3.src = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js';
		document.body.appendChild(jq_script3);
		console.info('jQuery UI present');
	
	console.log('testing hiliter');
	
	$("div").click(function(){
		$(this).draggable();
		$(this).effect("highlight", {}, 3000);
		});
	
	console.log('hiliter set');
	
	$('body').append('<div id="dialog"><p>some text</p></div>');
	$('#dialog').dialog();
  };
  
  window.__kt.juiLoader = function(jQuery){
		console.info('loading JUI');
		var jq_script3 = document.createElement('script');
		jq_script3.src = 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js';
		document.body.appendChild(jq_script3);
		console.info('jQuery UI present');

  };
  
  window.__kt.hilite = function(jQuery){

  };

  window.__kt.action = function(jQuery) {
		window.__kt.storeLoader(jQuery);
		//window.__kt.juiLoader();
		console.log('loaders are done');
		//All necessary items have now been loaded
		//window.__kt.hilite(jQuery);
  };
  
  //Load katamari
  window.__kt.loader();
})();
