import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactiveForm',
    templateUrl: './reactiveForm.component.html'
})

export class ReactiveFormComponent {
    name = 'Bhavin';
    title: number;
    myForm: FormGroup;
    UserList: object;

    constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
            firstname: ['', Validators.required],
            lastname: [''],
            email: [''],
            mobile: [''],
            gender: [''],
            skills: [''],
            status: ['']

        })
    }

    FieldData(): void {
        console.log("Data is as following");
        console.log(this.myForm.value['firstname']);
        console.log(this.myForm.value);
        this.UserList = this.myForm.value;
        this.myForm.get('firstname').setValue('');
        this.myForm.get('lastname').setValue('');
        this.myForm.get('email').setValue('');
        this.myForm.get('mobile').setValue('');
        this.myForm.get('gender').setValue('');
        this.myForm.get('skills').setValue('');
        this.myForm.get('status').setValue('');
    }

    GetField(): void {
        //console.log(this.UserList['firstname']);
        this.myForm.get('firstname').setValue(this.UserList['firstname']);
        this.myForm.get('lastname').setValue(this.UserList['lastname']);
        this.myForm.get('email').setValue(this.UserList['email']);
        this.myForm.get('mobile').setValue(this.UserList['mobile']);
        this.myForm.get('gender').setValue(this.UserList['gender']);
        this.myForm.get('skills').setValue(this.UserList['skills']);
        this.myForm.get('status').setValue(this.UserList['status']);
        // for(var item in this.UserList)
        // console.log(item);

    }
}