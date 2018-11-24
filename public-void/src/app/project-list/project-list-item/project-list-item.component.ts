import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/Logic/IProject';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.less']
})
export class ProjectListItemComponent implements OnInit {

  @Input() displayAuthorList = false;
  @Input() project: IProject;

  mailto(email: string): string {
    return 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent(this.project.name);
  }

  constructor() { }

  ngOnInit() {
  }

}
