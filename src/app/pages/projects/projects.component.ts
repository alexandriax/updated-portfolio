import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isBackend = false;
  isFlipping = false;


  constructor(private router: Router) {}

goToProject(id: string) {
  this.router.navigate(['/projects', id]);
}

  frontendProjects = [
    { title: 'angular myFlix', id: 'angularMyFlix', description: 'Angular clientside for movie API', image: 'assets/imgs/myFlix.angular.hero.png', link: '#' },
    { title: 'meet app', id: 'meetApp', description: 'A city event finder', image: 'assets/imgs/meet.app.hero.png', link: '#' },
    { title: 'chat app', id: 'chatApp', description: 'Mobile chatting app', image: 'assets/imgs/mobile.chat.hero.png', link: '#' },
    { title: 'HTML portfolio', id: 'HTMLportfolio', description: 'Reusable UI components.', image: 'assets/imgs/project6.png', link: '#' },
    { title: 'Pokedex', id: 'pokedex', description: 'Searchable pokedex', image: 'assets/imgs/pokedex.hero.png', link: '#' },
    { title: 'React myFlix', id: 'reactMyFlix', description: 'React clientside for movie API', image: 'assets/imgs/myFlix.React.hero.png', link: '#' },
  ];

  backendProjects = [
    { title: 'Rest API', id: 'api', description: 'Built a REST API.', image: 'assets/imgs/api-hero.png', link: '#' },
    { title: 'Auth System', id: 'auth', description: 'User authentication service.', image: 'assets/imgs/auth-system-hero.png', link: '#' },
    { title: 'Database Management', id: 'databaseManagement', description: 'Created & manipulated python database', image: 'assets/imgs/python-recipe-hero.png', link: '#' },
    { title: 'Serverless Functions', id: 'severlessFunctions', description: 'Firebase functions', image: 'assets/imgs/serverless-functions-hero.png', link: '#' }
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
    { name: 'fiebase', icon: 'assets/imgs/firebase.png' },
    { name: 'python', icon: 'assets/imgs/python.png' },
    { name: 'sql', icon: 'assets/imgs/sql.png' }
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


