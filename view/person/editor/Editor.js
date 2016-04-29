Ext.define('TrainingWeb.view.person.editor.Editor', {
    extend: 'Ext.form.Panel',
    itemId: 'editorview',
    xtype: 'editorview',

    title: 'Edit Person',
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: 'First  Name',
            name: 'firstName',
            allowBlank: false
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName',
            allowBlank: false
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