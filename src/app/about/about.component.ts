import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  name = 'Emmanuel Godwin Bassey';
  role = 'Software Developer';
  location = 'Dublin, Ireland';

  aboutText = `
  Hi there! I'm Emmanuel, a final-year student at Griffith College, Dublin, pursuing a Bachelor of Science in Computing. 
  I have a deep passion for solving complex problems, whether it's through coding, tackling real-life challenges, or finding innovative solutions.

  Aside from tech, I'm a proud Manchester City fan ⚽. When I'm not coding or catching the latest match, you'll likely find me gaming—whether it's with friends or taking on random players online 🎮.

  I'm currently exploring React and Kotlin, constantly broadening my knowledge to stay up to date with the latest trends in web and mobile development.

  I'm also a member of the codú community in Ireland, where I collaborate with other developers and continue to grow my skills.
`;

  education = [
    {
      school: 'Griffith College, Dublin',
      degree: 'Bachelor of Science in Computing',
      expectedGrad: 'Expected June 2025'
    }
  ];

  funFacts = [
    'I have a B1 proficiency in German 🌍',
    'Massive fan of Manchester City ⚽',
    'Burna boy is my favourite artist 🎧',
    'Home automation and DIY enthusiast 🏠',
    'Love problem-solving and hands-on projects 💻',
    'Always up for a FIFA challenge 🎮',
    'Currently learning React and Kotlin 🧑‍💻'
  ];
}
