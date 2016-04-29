Ext.define('TrainingWeb.view.person.PersonController', {
    extend: 'Ext.app.ViewController',


    alias: 'controller.person',

    init: function () {
        console.log("init");

    },

    onRowClick: function ( cmpt, record, tr, rowIndex, e, eOpts ) {
        console.log("onRowClick");
        Ext.GlobalEvents.fireEvent('updateTabPanel', 'TrainingWeb.view.person.editor.Editor');
    }
});

