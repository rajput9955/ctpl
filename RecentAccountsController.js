({
    doInit: function(component, event, helper) {
        component.set("v.columns", [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
            {label: 'Created Date', fieldName: 'CreatedDate', type: 'date'}
        ]);
        var action = component.get("c.getRecentAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accounts", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
        
    }
})
