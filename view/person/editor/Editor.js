Ext.define('TrainingWeb.view.person.editor.Editor', {
    extend: 'Ext.form.Panel',
<<<<<<< HEAD
    xtype: 'personeditorview',

    requires: [
        'TrainingWeb.view.person.editor.EditorModel',
        'TrainingWeb.view.person.editor.EditorController'
    ],

    controller: 'personeditor',
    viewModel: 'personeditor',

    defaultType: 'textfield',
    items: [
     {
        fieldLabel: 'First  Name',
=======
    itemId: 'editorview',
    xtype: 'editorview',

    title: 'Edit Person',
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'First  Name',
>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
            name: 'firstName',
            allowBlank: false
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName',
            allowBlank: false
<<<<<<< HEAD
        }
    ],
    buttons: [
        {
            text: 'Back',
            listeners : {
                click: 'onBackToGrid'
            }
        },
        {
            text: 'Save'
        }
    ]
});

=======
        },
        {
            fieldLabel: 'Email',
            name: 'email',
            validation: true,
            regex: '/.+@.+\..+/',
            regexText: 'Please enter a valid email address'
        },
        {
            fieldLabel: 'Phone No.',
            name: 'phone',
            regex: '/^\d+$/',
            regexText: 'Please enter a valid phone number'
        }
    ],

    buttons: [
        {
            text: 'Submit',
            handler: function () {
                var form = this.up('form');
                if (form.isValid()) {
                    //console.log("Person Form is Valid");
                    //form.submit({
                    //    success: function (form, action) {
                    //        console.log("Person Form Submitted Successfully");
                    //    },
                    //    failure: function (form, action) {
                    //        console.log("Person Form Submission Failure");
                    //    }
                    //});
                } else {
                    console.log("Person Form Not Valid");
                }
            }
        }
    ]
});
>>>>>>> f05d9b426a2396e136896eb62b36486239a325c4
