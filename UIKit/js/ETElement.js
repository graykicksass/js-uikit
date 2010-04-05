var ETElement = Class.create({

	/*
	
		@name ETElement
		@author Gray
		@params <properties>
		
		Eternity element, defines an element in the DOM that is specific to the Eternity UI Toolkit. Widgets should extend this class.
		
	*/

	initialize: function(parent, properties) {
		this.parent = parent; // Should be the parent?
		
		if (properties) {
			this.state = properties.state;
		}
		this.objects = new Array();
		this.element = new Element('div');
		
		this.properties = properties;
		this.updateAppearance();
		
	},
	
	updateAppearance: function() {
	
		/*
		
			@name updateAppearance()
			@param <void>
			@author Gray
			
			This updates the appearance (called on init and after changeType)
			
		*/
		
		properties = this.properties;
		
				if (properties && properties.id) {
		
			this.id = properties.id;
			this.element.writeAttribute("id", this.id);
		
		}
		
		if (!properties.selectable) {
		
			//lement.onmousedown = function () { return false; } // mozilla
		
			this.getElement().onmousedown = function() {
			
				return false;
			
			}
		
			
		}
		
		if (properties.align) {this.getElement().writeAttribute("align", properties.align);}
		
		if (properties.absolute == true) {
	
			this.getElement().absolutize(); // Turn this into an absolutely positioned element
			
			}
			
			if (properties.x && properties.y) {
			this.getElement().setStyle({
				top: properties.y,
				left: properties.x
			});
			}
			
			if (properties.width == true) {
				this.getElement().setStyle({
					width: properties.width+"px"
			});
			}
			
			if (properties.height == true) {
				this.getElement().setStyle({
					height: properties.height+"px"
			});
			}

		
		if (properties.opacity) {
		
			this.getElement().setOpacity(properties.opacity);
		
		}
	
	},

	changeType: function(newType) {
	
		/*
		
			@name changeType
			@param <newType html type>
			@author Gray
			
			This changes the elements type. WARNING: All child DOM elements will be erased!!
		
		*/
		
		this.objects = new Array(); // Reset this just incase we are changing types while in use..
		this.element = new Element(newType);
		
		this.updateAppearance();
		
		return(this);
	
	},
	
	getElement: function() {
	
		/*
			
			@name getElement()
			@param <void>
			@author Gray
			
			This returns a prototype element of the current object.
		
		*/
	
		return(this.element);
	
	},
	
	addElement: function(element) {
	
		/*
			@name addElement()
			@param Eternity Element
			@author Gray
			
			Adds an Eternity element to this element, and by doing that, adds a child element to this widgets DOM element
		*/
		
		this.objects.push(element);
		
		this.getElement().insert(this.objects.last().getElement());
		
		return(this.objects.last());
		
	
	},
	
	addToContext: function() {
	
		/*
		
			@name AddToContext()
			@param <void>
			@author Gray
			
			Adds this element to the global context. Warning: This adds it to the top level!
		
		*/
	
		ETContextStatic.addElement(this.getElement());
	
	}

});