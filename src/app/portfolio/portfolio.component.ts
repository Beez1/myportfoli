import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and *ngIf
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, NavComponent, RouterModule], // Add CommonModule to imports
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  skills = [
    {
      category: 'Languages',
      items: [
        { name: 'HTML', proficiency: 95 },
        { name: 'CSS', proficiency: 85 },
        { name: 'JavaScript', proficiency: 80 },
        { name: 'Python', proficiency: 70 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'Java', proficiency: 70 },
        { name: 'SQL', proficiency: 75 },
        { name: 'PHP', proficiency: 65 },
        { name: 'Kotlin', proficiency: 35 }
        { name: 'C++', proficiency: 20 }
        { name: 'GO (GOLANG)', proficiency: 40 }
      ]
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'Angular', proficiency: 80 },
        { name: 'React', proficiency: 60 },
        { name: 'PyQt6', proficiency: 65 },
        { name: 'Express.js', proficiency: 70 },
        { name: 'Bootstrap', proficiency: 80 },
        { name: 'Open MPI', proficiency: 20 }

      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Node.js', proficiency: 75 },
        { name: 'MongoDB', proficiency: 80 },
        { name: 'Xampp Server', proficiency: 75 },
        { name: 'Postman', proficiency: 95 },
        { name: 'Postgre SQL', proficiency: 80 },
        { name: 'Git & GitHub', proficiency: 90 },
        { name: 'Wordpress', proficiency: 70 },
        { name: 'Webflow', proficiency: 50 },
        { name: 'Vercel', proficiency: 75 },
        { name: 'Localwp', proficiency: 75 }
      ]
    },
    {
      category: 'Platforms',
      items: [
        { name: 'Visual Studio Code', proficiency: 90 },
        { name: 'Stack Blitz', proficiency: 75 },
        { name: 'GitHub Codespaces', proficiency: 90 }
      ]
    }
  ];
  
  projects = [
    {
      title: 'Memetorium - An Image Sharing Platform',
      date: 'June 2024',
      features: [
        'Built with Angular for seamless interaction',
        'Backend with Node.js and Express.js',
        'Stored images in MongoDB'
      ]
    },
    {
      title: 'EFC - Eagles FC Website',
      date: 'July 2024',
      features: [
        'Sports team website template using Angular',
        'Dynamic player profiles and match updates',
        'Responsive layout for seamless interaction'
      ]
    },
    {
      title: 'Blog Made with Angular',
      date: 'August 2024',
      features: [
        'Blogging platform using Angular and Node.js',
        'User-friendly blog creation and management',
        'Responsive for desktop and mobile devices'
      ]
    }
  ];

  certificates = [
    {
      title: 'Foundations: Computer Networks',
      link: 'https://www.dropbox.com/scl/fi/0jjfttev1rpi77l7l5wot/EMMANUEL-GODWIN-BASSEY_731159-1.pdf?rlkey=n8dhtu4mcqhiu0bzq1i23wu4f&st=4y48tk6h&dl=0',
      date: 'January 2024'
    }
  ];

  constructor() { }

  ngOnInit(): void {
 
  }
}