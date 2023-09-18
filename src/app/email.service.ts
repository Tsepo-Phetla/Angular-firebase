import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly emailServiceId = 'service_45rahm9';
  private readonly templateId = 'template_4m57urn';
  private readonly userId = 'd7LyN4AYEABUv-poy';

  sendEmail(data: any): Promise<any>  {
    return emailjs.send(this.emailServiceId, this.templateId, data, this.userId);
  }
}

