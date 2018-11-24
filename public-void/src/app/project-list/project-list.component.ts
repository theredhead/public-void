import { Component, OnInit, Input } from '@angular/core';
import { IProject } from 'src/Logic/IProject';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.less']
})
export class ProjectListComponent implements OnInit {

  @Input() items: IProject[] = [];

  constructor() { }

  ngOnInit() {
  }

}
