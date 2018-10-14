import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Job } from '../../../../models/job.model';

@Component({
  selector: 'gavin-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JobComponent implements OnInit {
  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

}
