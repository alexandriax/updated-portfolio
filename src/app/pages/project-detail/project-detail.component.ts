import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS, Project } from '../../project-data';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project!: Project;
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = PROJECTS.find(p => p.id === id)!;
  }
}

