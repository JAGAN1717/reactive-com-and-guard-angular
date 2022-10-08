import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  //formUser : FormGroup
  formUser : any

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    // this.formUser = new FormGroup({
    //   "inputName" : new FormControl(null,Validators.required),
    //   "inputDOB" : new FormControl(null),
    //   "inputAddress" : new FormControl(null),
    //   "inputCity" : new FormControl(null),

    // })

    // this.formUser.setValue({
    //   "inputName" : "",
    //   "inputDOB" : "",
    //   "inputAddress" : "",
    //   "inputCity" : "",
    // })
  
    this.formUser= this.fb.group({
      "inputName" : "",
      "inputDOB" : "",
      "inputAddress" : "",
      "inputCity" : "",
    })
  
  }

  onSubmit(){
    console.log('result',this.formUser)
  }



}
