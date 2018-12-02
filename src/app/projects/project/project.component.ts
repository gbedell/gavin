import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../../../models/project.model';

@Component({
  selector: 'gavin-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
