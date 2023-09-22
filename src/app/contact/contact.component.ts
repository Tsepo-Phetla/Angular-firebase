import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactForm', { static: false }) contactForm: NgForm ; 

  userData = {
    user_name: '',
    user_email: '',
    phoneNumber: '',
    message: ''
  };

  protected aFormGroup: FormGroup;

  constructor(private titleService: Title, private formBuilder: FormBuilder){
    this.contactForm = {} as NgForm;
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
      setTimeout(() => {
        console.log('Form submitted:', this.userData);
        this.resetForm();
      }, 1000);
  }

  private resetForm() {
    this.userData = {
      user_name: '',
      user_email: '',
      phoneNumber: '',
      message: ''
    };
    this.contactForm.resetForm(); // Reset the form and its controls
  }
}

