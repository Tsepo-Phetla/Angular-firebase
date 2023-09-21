import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  protected aFormGroup: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder){
    this.titleService.setTitle('Tsepo Phetla - Contact');
    this.aFormGroup = this.formBuilder.group({
      // Define your form controls and their initial values here
    });
  }
  ngOnInit(){
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  siteKey:string = "6LdCwjYoAAAAAKm9ytee7i13p7SDjBohc3ZvObO3";

}

