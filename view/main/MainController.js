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

    init: function () {
        console.log('MainController init');
    },

    listen: {
        global: {
            updateTabPanel: 'onUpdateTabPanel'
        }        
    },

    // does not fire?
    onTabActivate: function(){
        console.log("onTabActive actioned");
    },

    // Update the tab content
    onUpdateTabPanel: function (viewName) {
        console.log("onUpdateTabPanel actioned");

        var personview = Ext.ComponentQuery.query('personview');
        console.log(personview);
        var editorview = Ext.ComponentQuery.query('editorview');
        console.log(editorview);

        // A collection is returned, therefore have to reference the first item 
        personview[0].setHidden(true);
        editorview[0].setHidden(false);


        // None of the following works:

        //var view = Ext.Viewport.add({xtype: "editorview"});
        //Ext.Viewport.setActiveItem(view);


        //var view = Ext.create({
        //    xtype: 'editorview'
        //});
        //console.log(view);
        //view.show();

        //var mainTab = Ext.ComponentQuery.query('app-main');
        //if (mainTab) {
        //    console.log(mainTab);
        //    mainTab[0].update(viewName);    // This is not working currently
        //}
        //persontab.update(viewName);
        
        //var tab = this.lookupReference('persontab');
        //console.log(tab);
        //var currentView = Ext.ComponentQuery.query('personview');
        //console.log(currentView);
        //var newView = Ext.ComponentQuery.query('editorview');
        //console.log(newView);
        
        //tab.remove(currentView);
        //tab.add(newView);
        //tab.updateLayout();
    }
});
