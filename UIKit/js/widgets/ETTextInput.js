var ETTextInput = Class.create(ETWidget, {

	/*
	
		@name Eternity Text Input
		@author Gray
		@param <Label Text>
	
		A standard text edit widget.
	*/
	
	initialize: function($super, parent, properties) {
	
		$super(parent, properties);
		
		// is properties.text set?
		
		if (properties.text) {
		
			this.text = properties.text;
		
		} else {
		
			this.text = "undefined!";
		
		}
		// Set the type
		this.changeType('input');
		this.getElement().writeAttribute('type', 'text');
		
		// Set the initial text
		this.setText(this.text);
		
		// Set the CSS class
		this.getElement().addClassName("ETTextInput");
		
		// Setup the focus handlers
		
		this.getElement().observe('focus', this._focus);
		this.getElement().observe('blur', this._blur);
		
		this.parent.addElement(this);
	},
	
	_focus: function() {
		this.addClassName("ETTextInputSelected");
	},
	
	_blur: function() {
	
		this.removeClassName("ETTextInputSelected");
	
	},
	
	setText: function(text) {
	
		/*
		
			@name setText
			@param text
			
			Sets the text of this label
		
		*/
		
		this.getElement().writeAttribute("value", text);
	
	}

});