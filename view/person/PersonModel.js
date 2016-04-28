Ext.define('TrainingWeb.view.person.PersonModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.person',

    stores: {
        viewModelPerson: {
            model: 'TrainingWeb.model.PersonModel'
        }
    }
});

