import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'gavin-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
  @Input() mainSkills: String[];
  @Input() otherSkills: String[];
  everydaySkillsHeading = 'Day-to-Day Comfort';
  experiencedSkillsHeading = 'Experience With';

  constructor() { }

  ngOnInit() {
  }

}
