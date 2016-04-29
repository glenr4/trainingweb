Ext.define('TrainingWeb.model.Person', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'personId' },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'email' },
        { name: 'phone' }
    ]
});