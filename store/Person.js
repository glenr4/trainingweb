Ext.define('TrainingWeb.store.Person', {
    extend: 'Ext.data.Store',
<<<<<<< HEAD
    model: 'TrainingWeb.model.Person',
    storeId: 'personstore',
    autoLoad: true,
    proxy: {
        type: 'memory'
    },

    data: [
        { personId: 1, firstName: 'Whois', lastName: 'That', email: 'blah@gmail.com', phone: '1234567890'},
        { personId: 2, firstName: 'Me', lastName: 'Myself', email: 'blah@gmail.com', phone: '1234567890' },
        { personId: 3, firstName: 'That', lastName: 'Guy', email: 'blah@gmail.com', phone: '1234567890' },
        { personId: 4, firstName: 'John', lastName: 'Smith', email: 'blah@gmail.com', phone: '1234567890' }
=======

    model: 'TrainingWeb.model.Person',
    storeId: 'person',
  
    proxy: {
        type: 'memory',
    },

    data: [
        {firstName: 'Whois', lastName: 'That', email: 'blah@gmail.com', phone: '1234567890'},
        {firstName: 'Me', lastName: 'Myself', email: 'blah@gmail.com', phone: '1234567890'},
        {firstName: 'That', lastName: 'Guy', email: 'blah@gmail.com', phone: '1234567890'},
        {firstName: 'John', lastName: 'Smith', email: 'blah@gmail.com', phone: '1234567890'}
>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
        ]
});