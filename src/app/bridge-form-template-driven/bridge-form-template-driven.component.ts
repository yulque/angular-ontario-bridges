import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bridge-form-template-driven',
  templateUrl: './bridge-form-template-driven.component.html',
  styleUrls: ['./bridge-form-template-driven.component.css']
})
export class BridgeFormTemplateDrivenComponent implements OnInit {

  // {
  //   "id": "bridge-43-275-C",
  //   "name": "Big Fournier Creek Culvert",
  //   "lat": 46.64631,
  //   "lng": -79.09325,
  //   "year": 1978,
  //   "length": 30,
  //   "width": null
  // }

  id: string;
  name: string;
  lat: number| null;
  lng: number | null;
  year: number| null;
  length: number | null;
  width: number | null;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) : void {
    console.log('form.value is: ',{
      value: form.value,
      valid: form.valid,
      dirty: form.dirty,
    touched: form.touched});

  } 
}
