import { Component } from '@angular/core';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.css']
})
export class DownloadButtonComponent {
  downloadFile(): void {
    const fileUrl = 'path_to_your_file.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'filename.pdf';
    link.target = '_blank';
    link.click();
  }
}
