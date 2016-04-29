Ext.define('TrainingWeb.view.person.Person', {
    extend: 'Ext.grid.Panel',
    xtype: 'personview',
<<<<<<< HEAD
=======
    itemId: 'personview',
>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4

    requires: [
        'TrainingWeb.view.person.PersonModel',
        'TrainingWeb.view.person.PersonController'
    ],

    controller: 'person',
    viewModel: 'person',

<<<<<<< HEAD
    
=======
    store: 'person',

>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
    columns: [
        { text: 'First Name', dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' },
        { text: 'Email', dataIndex: 'email' },
        { text: 'Phone', dataIndex: 'phone' }
    ],

<<<<<<< HEAD
   // Option 1 bind directly using this approach
   // store: 'personstore',

    bind: {
        // Option 2 bind via the view model
        //          use this approach if we need a copy of the global store for this particular view i.e. if you need to filter the store (see the view model)
        store: '{people}',
        title: '{myTitle}'
    },
    listeners: {
        rowdblclick: 'onRowClick'
    }

=======
    bind: {
        title: '{myTitle}'
    },

    listeners: {
        rowclick: 'onRowClick'
    },
>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
});

