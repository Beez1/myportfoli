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
export class HomeComponent implements OnInit {
  
  texts: string[] = [
    '',  // Placeholder for dynamic greeting based on timezone
    'My name is Emmanuel and I am a software developer.',
    'Welcome to my portfolio!',
    'Check it out below'
  ];
  displayedText: string = '';
  currentTextIndex: number = 0;
  charIndex: number = 0;
  showPortfolioButton: boolean = false; // Flag to show the portfolio button

  ngOnInit(): void {
    this.texts[0] = this.getGreeting();  // Greet the user based on timezone
    this.startTypewriter();
  }

  // Function to get a greeting based on the user's timezone
  getGreeting(): string {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good morning!';
    } else if (currentHour < 18) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  }

  // Typewriter effect logic
  startTypewriter() {
    if (this.charIndex < this.texts[this.currentTextIndex].length) {
      this.displayedText += this.texts[this.currentTextIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => {
        this.startTypewriter();
      }, 100); // Adjust speed
    } else {
      setTimeout(() => {
        this.moveToNextText();
      }, 1000);
    }
  }

  moveToNextText() {
    this.currentTextIndex++;
    if (this.currentTextIndex < this.texts.length) {
      this.charIndex = 0;
      this.displayedText = '';
      this.startTypewriter();
    } else {
      this.showPortfolioButton = true;
    }
  }
}