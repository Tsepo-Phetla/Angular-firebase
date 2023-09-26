import { Component, OnInit, ViewChild } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


declare var grecaptcha: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  @ViewChild('contactForm', { static: false }) contactForm!: NgForm; // Initialize contactForm using the '!' operator
  
  userData = {
    user_name: '',
    user_email: '',
    phoneNumber: '',
    message: ''
  };

  protected aFormGroup: FormGroup = new FormGroup({});
  captchaElem: any; 

  constructor(private titleService: Title, private formBuilder: FormBuilder) {
    this.titleService.setTitle('Tsepo Phetla - Contact');
  }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.captchaElem = grecaptcha;
  }

  siteKey: string = "6LdlaEQoAAAAAMsCnrIDdhOe-Qhh11CosfYx8nBP";

  public sendEmail(e: Event) {
    e.preventDefault();

    // Ensure you have a reference to the reCAPTCHA element
    // Assuming you have a variable named captchaElem for this purpose.
    if (this.captchaElem.getResponse() === '') {
      Swal.fire('Error', 'Please complete the reCAPTCHA verification.', 'error');
      return;
    }

    emailjs
      .sendForm(
        'service_45rahm9',
        'template_4m57urn',
        e.target as HTMLFormElement,
        'd7LyN4AYEABUv-poy'
      )
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        Swal.fire('Success', 'Your message has been sent successfully!', 'success');
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire('Error', 'There was an error sending your message. Please try again later.', 'error');
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
