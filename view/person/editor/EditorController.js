Ext.define('TrainingWeb.view.person.editor.EditorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.personeditor',

    init: function () {
        //console.log("init");
        //var store = Ext.data.StoreManager.lookup('personstore');
        //console.log(store);

        //var viewModel = this.getViewModel(),
        //    viewData = viewModel.get('people');
        //console.log(viewModel);
    }
    ,
    onBackToGrid: function () {

        var viewmodel = this.getViewModel();

        // get tabs control
        var tabs = Ext.ComponentQuery.query('app-main');
        // get current tab i.e. the editor
        var currentTab = tabs[0].getActiveTab();
        // remove it 
        tabs[0].remove(currentTab);
        // replace/with the one we have in global area
        var previoustab = TrainingWeb.Globals.getCurrentab();
        var newtab = tabs[0].add(previoustab);
        // effectively 'shows' the new tab
        tabs[0].setActiveTab(newtab);
    }

});

