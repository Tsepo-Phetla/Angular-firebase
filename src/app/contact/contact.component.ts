import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com';
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
 public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_45rahm9', 'template_4m57urn', e.target as HTMLFormElement, 'd7LyN4AYEABUv-poy')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}

