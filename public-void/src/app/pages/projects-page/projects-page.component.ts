import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/Logic/IProject';
import { ProjectsService } from '../../projects.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.less']
})
export class ProjectsPageComponent implements OnInit {

  private _projects: IProject[];
  get projects(): IProject[] {
    return this._projects;
  }

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit() {
    this._projectsService.getProjects()
      .subscribe(projects => this._projects = projects);
  }

}