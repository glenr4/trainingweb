/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TrainingWeb.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    config: {
       
        listen: {
            global: {
                updatemodeldata: 'updateModelData'
            }
        }
    },
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    updateModelData: function (dataname, datavalue) {
        /// <summary>
        /// updates model data - from global event call
        /// </summary>
        /// <param name="dataname">name of the model data to update</param>
        /// <param name="datavalue">value of the update</param>

        var model = this.getViewModel();
        model.set(dataname, datavalue);
    }
});
