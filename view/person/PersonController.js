﻿Ext.define('TrainingWeb.view.person.PersonController', {
    extend: 'Ext.app.ViewController',
<<<<<<< HEAD
    requires: [
       //  'TrainingWeb.view.person.editor.Editor'
    ],
=======


>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
    alias: 'controller.person',

    init: function () {
        console.log("init");
<<<<<<< HEAD
        var store = Ext.data.StoreManager.lookup('personstore');
        console.log(store);

        var viewModel = this.getViewModel(),
            viewData = viewModel.get('people');
        console.log(viewModel);
    },
    onRowClick: function (cmp, record) {
        console.log('onRowClick');

        var viewmodel = this.getViewModel();

        // get tabs control
        var tabs = Ext.ComponentQuery.query('app-main');
        
        // get current tab
        var currentTab = tabs[0].getActiveTab();
        // store it in viewmodel
        // viewmodel.set('currenttab', currentTab);
        // Ext.GlobalEvents.fireEvent("updatemodeldata", "currenttab", currentTab);

        // store it in global singleton
        TrainingWeb.Globals.setCurrentab(currentTab);

        // remove it
        tabs[0].remove(currentTab, false);
        // add a new one - editor
        var newtab = tabs[0].add(
            {
                title: 'Person Editor',
                items: [
                    {
                        xtype: 'personeditorview'
                    }
                ]
            });
        // effectively 'shows' the new tab
        tabs[0].setActiveTab(newtab); 
    }


=======

    },

    onRowClick: function ( cmpt, record, tr, rowIndex, e, eOpts ) {
        console.log("onRowClick");
        Ext.GlobalEvents.fireEvent('updateTabPanel', 'TrainingWeb.view.person.editor.Editor');
    }
>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
});

