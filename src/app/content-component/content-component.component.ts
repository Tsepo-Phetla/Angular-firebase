import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent {
  
  email: string = ''; // Initialize email as an empty string

  onSubmit(form: any) {
    const formData = {
      fullName: form.fullName,
      email: this.email, // Use the email property here
      phoneNumber: form.phoneNumber,
      message: form.message,
    };

    // Rest of your email sending logic
  }
}
