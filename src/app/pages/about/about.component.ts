import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('textElement', { static: false }) textElement!: ElementRef;

  words: string[] = ["DEVELOPER", "DESIGNER", "CONCEPTUALIST"];
  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;

  ngAfterViewInit(): void {
    this.typeEffect();
  }

  private typeEffect(): void {
    const element = this.textElement.nativeElement;
    const currentWord = this.words[this.wordIndex];

    // Set the current text with cursor
    element.innerHTML = currentWord.substring(0, this.charIndex) + '<span class="typing-cursor"></span>';

    // Adjust typing/deleting
    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    // When word is fully typed, pause then delete
    if (!this.isDeleting && this.charIndex === currentWord.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000); // Pause before deleting
      return;
    }

    // When word is fully deleted, switch to the next word
    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }

    setTimeout(() => this.typeEffect(), this.isDeleting ? 100 : 200); // Typing speed
  }
}

