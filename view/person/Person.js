Ext.define('TrainingWeb.view.person.Person', {
    extend: 'Ext.grid.Panel',
    xtype: 'personview',
    itemId: 'personview',

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
});

