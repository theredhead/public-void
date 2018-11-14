import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/Logic/IProject';
import { ProjectsService } from './projects.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  private _projects : IProject[];
  get projects() : IProject[] {
    return this._projects;
  }

  constructor(private _projectsService:ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
      .subscribe(projects => this._projects = projects);
  }

}
