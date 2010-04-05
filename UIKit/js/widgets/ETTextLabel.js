var ETLabel = Class.create(ETWidget, {

	/*
	
		@name Eternity Label
		@author Gray
		@param <Label Text>
	
		A standard text label widget
	*/
	
	initialize: function($super, parent, properties) {
	
		$super(parent, properties);
		
		// is properties.text set?
		
		if (properties.text) {
		
			this.text = properties.text;
		
		} else {
		
			this.text = "undefined!";
		
		}
		
		// Set the initial text
		this.setText(this.text);
		
		// Set the CSS class
		this.getElement().addClassName("ETLabel");
		
		this.parent.addElement(this);
	},
	
	setText: function(text) {
	
		/*
		
			@name setText
			@param text
			
			Sets the text of this label
		
		*/
		
		this.getElement().update(text);
	
	}

});