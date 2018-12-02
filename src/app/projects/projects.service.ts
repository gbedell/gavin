import { Injectable } from '@angular/core';

import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      name: 'gbedell.com',
      description: 'My personal website',
      projectUrl: 'https://www.gbedell.com',
      sourceCodeUrl: 'https://github.com/gbedell/gavin',
      order: 1
    }
  ];

  constructor() { }

  public getProjects(): Project[] {
    return this.projects.sort((a: Project, b: Project) => a.order - b.order);
  }
}
