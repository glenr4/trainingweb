Ext.define('TrainingWeb.store.Person', {
    extend: 'Ext.data.Store',

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
        ]
});