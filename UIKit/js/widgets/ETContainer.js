var ETContainer = Class.create(ETWidget, {

	/*
	
		@name Container Widget
		@author Gray
		@param parent, properties
	
		A container widget, very dynamic. Built to be extended on by classes like Window, Frame, etc..
	*/
	
	initialize: function($super, parent, properties) {
	
		$super(parent, properties);
	
		this.getElement().addClassName("ETContainerBase");
		this.parent.addElement(this);
	}
	
});