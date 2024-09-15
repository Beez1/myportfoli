import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  socialLinks = [
    { text: 'Email', url: 'mailto:your-email@example.com', label: 'Email' },
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/your-linkedin-profile', label: 'LinkedIn' },
    { text: 'GitHub', url: 'https://github.com/Beez1', label: 'GitHub' }
  ];
}
