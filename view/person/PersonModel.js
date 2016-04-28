Ext.define('TrainingWeb.view.person.PersonModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.person',

    //requires: ['TrainingWeb.model.PersonGlobalModel'],

    data: {
        myTitle: 'Bound Title'
    }//,
        
    //stores: {
    //    personlist: {
    //        model: 'TrainingWeb.model.PersonGlobalModel',
    //        autoLoad: true,
    //        proxy: {
    //            type: 'memory',
    //            reader: {
    //                type: 'json'
    //            }
    //        }
    //    }
    //}
});

