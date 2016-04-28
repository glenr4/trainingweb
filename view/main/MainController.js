/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TrainingWeb.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    init: function(){

    },

    listen: {
        global: {
            updateTabPanel: 'onUpdateTabPanel'
        }
    },

    // Update the tab content
    onUpdateTabPanel: function (viewName) {
        console.log("onUpdateTabPanel actioned");
        var mainTab = Ext.ComponentQuery.query('app-main');
        if (mainTab) {
            console.log(mainTab);
            mainTab[0].update(viewName);    // This is not working currently
        }
        

    }
});
