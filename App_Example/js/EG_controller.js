function EG_Controller(model, view) {
    this.model = model;
    this.view  = view;

    this.egId = 0;  // The last existential graph assertion ID generated by the controller.
};

// Member functions that are added to the Controller object.
EG_Controller.prototype = {
    
    // Adds a new negated assertion to the view.
    addNegatedAssertion: function (assertionValue) {

        var newId = this.incrementId();
        this.view.addNegatedAssertion(assertionValue,newId);          
        return newId;
    },
	// Adds a new assertion to the view.
    addAssertion: function (assertionValue) {
        var newId = this.incrementId();
        this.view.addAssertion(assertionValue,newId);          
        return newId;
    },
	
    //This needs to be reworked.
	/*check_expression: function (thing_to_check) {
		
		if (this.model.check_expression(thing_to_check) != false)
			return this.model.check_expression(thing_to_check);
		else return false;
		
	},*/

	
    // This function handles incrementing the egID so that unique IDs
    // are created for each new assertion.
    incrementId() {
        this.egId++;
        return this.egId;
    }, 
    // This function resets the controller's ID counter and notifies
    // the model that it should also clear.
    EGclear: function()
    {
        this.egId = 0;
        model.EGclear();
    },
}
    
    
    
