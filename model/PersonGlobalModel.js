Ext.define('TrainingWeb.model.PersonGlobalModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'personId' },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'email' },
        { name: 'phone' }
    ]
});