import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  texts: string[] = [
    '',  // This will hold the dynamic greeting based on timezone
    'My name is Emmanuel and I am a software developer.',
    'Welcome to my portfolio!',
    'Check out my portfolio below.'
  ];
  displayedText: string = '';
  currentTextIndex: number = 0;
  charIndex: number = 0;

  ngOnInit(): void {
    // Greet the user based on the current timezone
    this.texts[0] = this.getGreeting();
    this.startTypewriter();
  }

  // Function to get a greeting based on timezone
  getGreeting(): string {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning!';
    } else if (currentHour < 16) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  }

  // Function to implement typewriter effect
  startTypewriter() {
    if (this.charIndex < this.texts[this.currentTextIndex].length) {
      this.displayedText += this.texts[this.currentTextIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => {
        this.startTypewriter();
      }, 100); // Adjust the speed of the typewriter effect
    } else {
      // Move to the next text after the current one is fully displayed
      setTimeout(() => {
        this.moveToNextText();
      }, 1000); // Wait for 1 second before moving to the next text
    }
  }

  // Function to reset and move to the next text
  moveToNextText() {
    if (this.currentTextIndex < this.texts.length - 1) {
      this.currentTextIndex++;
      this.charIndex = 0;
      this.displayedText = '';  // Reset displayedText for the new sentence
      this.startTypewriter();   // Start typing the next text
    }
  }

}