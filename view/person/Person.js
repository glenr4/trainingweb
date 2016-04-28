Ext.define('TrainingWeb.view.person.Person', {
    extend: 'Ext.grid.Panel',
    xtype: 'personview',

    requires: [
        'TrainingWeb.view.person.PersonModel',
        'TrainingWeb.view.person.PersonController'
    ],

    controller: 'person',
    viewModel: 'person',

    store: 'person',

    columns: [
        { text: 'First Name', dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' },
        { text: 'Email', dataIndex: 'email' },
        { text: 'Phone', dataIndex: 'phone' }
    ],

    bind: {
        title: '{myTitle}'
    },

    listeners: {
        rowclick: 'onRowClick'
    },

    //Should this be in the PersonController? Why does it not execute from there?
    //listeners: {
    //    // When a row is clicked open the editor tab
    //    rowclick: function () {
    //        console.log("rowclick");
    //        //controller.main.updateTab();
    //        this.fireEvent('updateTabPanel', this.printLog("Event fired: updateTabPanel"));
    //    }
    //},

    printLog: function (text) {
        console.log(text);
    }
});

