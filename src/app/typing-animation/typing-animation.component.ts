import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.css']
})
export class TypingAnimationComponent implements OnInit {
  @ViewChild('typingElement', { static: true }) typingElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ["Full-Stack Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };

    const typed = new Typed(this.typingElement.nativeElement, options);
  }
}
