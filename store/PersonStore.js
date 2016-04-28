Ext.define('TrainingWeb.store.PersonStore', {
    extend: 'Ext.data.Store',

    //requires: 'TrainingWeb.model.PersonGlobalModel',//

    model: 'TrainingWeb.model.PersonGlobalModel',
    //alias: 'store.personStore',
    storeId: 'personstore',
    //autoLoad: true,
    proxy: {
        type: 'memory',
        //reader: {
        //    type: 'json'
        //}
    },

    data: [
        {firstName: 'Whois', lastName: 'That', email: 'blah@gmail.com', phone: '1234567890'},
        {firstName: 'Me', lastName: 'Myself', email: 'blah@gmail.com', phone: '1234567890'},
        {firstName: 'That', lastName: 'Guy', email: 'blah@gmail.com', phone: '1234567890'},
        {firstName: 'John', lastName: 'Smith', email: 'blah@gmail.com', phone: '1234567890'}
        ]
});