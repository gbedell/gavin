import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'gavin-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
