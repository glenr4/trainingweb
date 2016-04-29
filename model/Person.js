Ext.define('TrainingWeb.model.Person', {
    extend: 'Ext.data.Model',
<<<<<<< HEAD
    idProperty: 'personId', // this indicates that personId is the Primary Key (needed if we use this model in a relationship)
=======

>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
    fields: [
        { name: 'personId' },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'email' },
        { name: 'phone' }
    ]
});