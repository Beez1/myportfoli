import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactMethods = [
    { label: 'Email Me', link: 'mailto:emmabassey50@gmail.com', icon: '📧' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/emmanuel-bassey-1b33b6265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', icon: '🔗' },
    { label: 'GitHub', link: 'https://github.com/Beez1', icon: '💻' },
    { label: 'Call Me', link: 'tel:+353830024454', icon: '📞' }
  ];
}