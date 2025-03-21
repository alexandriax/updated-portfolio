import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isBackend = false;
  isFlipping = false;

  frontendProjects = [
    { title: 'angular myFlix', description: 'Angular clientside for movie API', image: 'assets/imgs/myFlix.angular.hero.png', link: '#' },
    { title: 'meet app', description: 'An interactive shop.', image: 'assets/imgs/meet.app.hero.png', link: '#' },
    { title: 'chat app', description: 'Marketing landing page.', image: 'assets/imgs/mobile.chat.hero.png', link: '#' },
    { title: 'HTML portfolio', description: 'Reusable UI components.', image: 'assets/imgs/project6.png', link: '#' },
    { title: 'Pokedex', description: 'Reusable UI components.', image: 'assets/imgs/pokedex.hero.png', link: '#' },
    { title: 'React myFlix', description: 'React clientside for movie API', image: 'assets/imgs/myFlix.React.hero.png', link: '#' },
  ];

  backendProjects = [
    { title: 'API for Portfolio', description: 'Built a REST API.', image: 'assets/imgs/project3.png', link: '#' },
    { title: 'Auth System', description: 'User authentication service.', image: 'assets/imgs/project4.png', link: '#' },
    { title: 'Database Management', description: 'Optimized MongoDB schema.', image: 'assets/imgs/project7.png', link: '#' },
    { title: 'Serverless Functions', description: 'Cloud computing APIs.', image: 'assets/imgs/project8.png', link: '#' }
  ];

  currentProjects = this.frontendProjects; // Default to frontend projects

  frontendSkills = [
    { name: 'HTML', icon: '/assets/imgs/html-logo.png' },
    { name: 'CSS', icon: '/assets/imgs/css-logo.png' },
    { name: 'JavaScript', icon: '/assets/imgs/angularjs.png' },
    { name: 'React', icon: '/assets/imgs/react-native.png' }
  ];

  backendSkills = [
    { name: 'Node.js', icon: 'assets/imgs/node-js.png' },
    { name: 'MongoDB', icon: 'assets/imgs/mongodb.png' },
    { name: 'Express', icon: 'assets/imgs/express.png' },
    { name: 'GraphQL', icon: 'assets/imgs/graphql.png' }
  ];

  currentSkills = this.frontendSkills; // Default to frontend skills

frontendText = 'FRONTEND'.split('');
backendText = 'BACKEND'.split('');



toggleProjects() {
  this.isBackend = !this.isBackend;

  // Add flipping effect to skill icons
  this.isFlipping = true;

  // Delay the skill swap until the animation finishes
  setTimeout(() => {
      this.currentProjects = this.isBackend ? this.backendProjects : this.frontendProjects;
      this.currentSkills = this.isBackend ? this.backendSkills : this.frontendSkills;
      this.isFlipping = false;
  }, 600); // Matches the animation duration


}

}


