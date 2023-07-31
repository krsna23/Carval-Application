import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  @Output() getData = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  reportForm= new FormGroup({
    model:new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  });

  submitForm(){
    let model:any;
    //console.log("saved");
    model= this.reportForm.value;
    this.getData.emit(model.model);
    console.log('Model:', model);
  }
}
