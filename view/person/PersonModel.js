﻿Ext.define('TrainingWeb.view.person.PersonModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.person',

<<<<<<< HEAD
    requires: ['TrainingWeb.model.Person'],

    data: {
        myTitle: 'Bound Title',
        searchval: 'That'
    },
        
    stores: {
        people: {
            source: 'personstore' // this is the id field from the store
            // if I want to filter this (i.e. specifically for this view) I can add filter statements
            // e.g.
            
            //,filters : [{
            //    property : "firstName",
            //    operator : "=",
            //    value: '{searchval}'
            //}],
            //sorters : [{
            //    property : "LastName",
            //    direction : "ASC"
            //}]
            
        }
=======
    data: {
        myTitle: 'Bound Title'
>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
    }
});

