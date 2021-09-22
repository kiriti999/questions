<!-- #region Forms in angular -->

<pre>

Type of forms:

1. ngForm or template driven form directive
   1a. You need to import formsModule to work with forms
   a. As soon as you import the FormsModule, this directive becomes active by default on all <form> tags.
   b. With ngForm, to register child controls with form, use NgModel with a name attribute.
   You may use NgModelGroup to create sub-groups within the form.
   c. The ngSubmit event emits the original form submission event.
   d. <form [ngFormOptions]="{updateOn: 'blur'}"></form>
   e. Use <form ngNativeValidate> to use HTML5/native DOM validation.
   f. ngAfterViewInit() is called after view is initialized.

Note: Use name and ngModel to register controls like input box with ngForm directive
https://stackblitz.com/edit/angular-6-template-driven-form-test

2.  Reactive forms:
    import { ReactiveFormsModule } from '@angular/forms';

        In Component:
        import { FormControl } from '@angular/forms';
        export class NameEditorComponent {
        name = new FormControl('');
        }

        In Template: register the control
        <input type="text" [formControl]="name">

        Displaying a form control value: Through the valueChanges observable using async pipe or subscribe

        Replacing a form control value:
            eg: this.name.setValue('Nancy');

        Form group:
        ==========
        A FormGroup aggregates the values of each child FormControl into one object, with each control name as the key.

        import { FormGroup, FormControl } from '@angular/forms';

        profileForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
        });

        Updating parts of form object:
        1. uses `patchValue`

        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });

    Using the FormBuilder service to generate controls:

        1. import { FormBuilder } from '@angular/forms';
        2. inject form builder service
            eg: constructor(private fb: FormBuilder) { }
        3. import { Validators } from '@angular/forms'; // for validation along with html5 validation also we can use

        The FormBuilder service has three methods: control(), group(), and array().  These are factory methods for generating instances in your component classes including form controls, form groups, and form arrays.

        Example:

        export class ProfileEditorComponent {
            profileForm = this.fb.group({
                firstName: ['', Validators.required],
                lastName: [''],
                address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
                }),
            });

            constructor(private fb: FormBuilder) { }
        }

    Creating dynamic forms:

    1. FormArray is an alternative to FormGroup for managing any number of unnamed controls.
    2. As with form group instances, you can dynamically insert and remove controls from form array instances, and the form array instance value and validation status is calculated from its child controls.

    a. import { FormArray } from '@angular/forms';
    b. Define a FormArray control:
    Use the FormBuilder.array() method to define the array, and the FormBuilder.control() method to populate the array with an initial control.

    Example:
        profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        address: this.fb.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        }),
        aliases: this.fb.array([
            this.fb.control('')
        ])
        });

    Access the FormArrayControl:
    get aliases() {
        return this.profileForm.get('aliases') as FormArray;
    }

    Define a method to dynamically insert an alias control into the alias's form array:
    addAlias() {
        this.aliases.push(this.fb.control(''));
    }

    Example:
    <div formArrayName="aliases">
    <h3>Aliases</h3> <button (click)="addAlias()">Add Alias</button>

    <div *ngFor="let alias of aliases.controls; let i=index">
        <!-- The repeated alias template -->
        <label>
        Alias:
        <input type="text" [formControlName]="i">
        </label>
    </div>
    </div>

</pre>

    <!-- #endregion -->
