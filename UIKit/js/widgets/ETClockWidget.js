/*

	@name Clock Widget
	@author Gray
	
	A simple, javascript based clock widget. Text only! (TEST WIDGET :))

*/

var ETClockWidget = Class.create(ETLabel, {

	initialize: function($super, parent, properties) {
	
		$super(parent, properties);
		
		// Now set the text to the default clock text (00:00AM)
		
		this.setText("00:00AM");
	
	}

});