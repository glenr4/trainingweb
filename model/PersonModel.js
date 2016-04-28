Ext.define('TrainingWeb.model.PersonModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'personId' },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'email' },
        { name: 'phone' }
    ]
});