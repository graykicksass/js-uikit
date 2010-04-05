/* Eternity Context */

var ETContext = Class.create({
	/*
	
		@name Eternity Context
		@author Gray
		@params <void>
		
		Eternity Context provides a global space for all windows / widgets. It also holds the desktop in it's first item.
	
	*/
	
	initialize: function() {
	
		this.windows = new Array();
		this.objects = new Array();
	
	},
	
	_addHTML: function(html) {
	
		/*
			@name _addHTML
			@type private
			@author Gray
			@params html
			
			This is a private function used to add raw HTMl to the DOM. It's very powerful and should be called directly rarely.
		*/
	
	},
	
	addDomElement: function(element) {
	
		/*
		
			@name addElement
			@type public-widgets
			@author Gray
			@params element
			
			This will add an element to the global document namespace.
		
		*/
		
		$('context').insert(element);
	},
	
	getElement: function() {
	
		return($('context'));
	
	},
	
	addElement: function(element) {
	
		/*
		
			@name addElement
			@type public-widgets
			@author Gray
			@params element
			
			This will add an element to the context.
		
		*/
		
		
		this.objects.push(element);
		
		if (this.objects.last().getElement()) {
			this.addDomElement(this.objects.last().getElement());
		}
		
		return(this.objects.last());
	}


});

var ETContextStatic = new ETContext();