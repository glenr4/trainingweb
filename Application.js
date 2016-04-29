/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TrainingWeb.Application', {
    extend: 'Ext.app.Application',
    
<<<<<<< HEAD
    requires: [
        'TrainingWeb.Globals'
    ],
    // define the global stores here
=======
    name: 'TrainingWeb',

>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
    stores: [
        'TrainingWeb.store.Person'
    ],
    
    launch: function () {
        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
