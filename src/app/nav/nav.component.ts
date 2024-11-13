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
    { text: 'Email', url: 'mailto:emmabassey50@gmail.com', label: 'Email' },
    { text: 'LinkedIn', url: 'https://www.linkedin.com/in/emmanuel-bassey-1b33b6265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
    { text: 'GitHub', url: 'https://github.com/Beez1', label: 'GitHub' }
  ];
}
