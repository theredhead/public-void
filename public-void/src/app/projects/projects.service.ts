import { Injectable } from '@angular/core';
import { IProject } from 'src/Logic/IProject';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _projects : IProject[] = [
    { 
      name: 'red.web (php)', 
      href: 'https://github.com/theredhead/Red.Web', 
      demo: 'https://www.private-void.com', 
      description: 'ASP.NET like framework in php with Eventdriven, databound templating and routing.',
      authors: [
        {
          name: 'Kris Herlaar', 
          email: 'kris@theredhead.nl'
        }
      ]
    },
    { 
      name: 'design-an-app', 
      demo: 'https://www.design-an-app.com',
      description: 'An application that lets you visually design your data structures and generate an application project with a database from it.',
      authors: [
        {
          name: 'Kris Herlaar', 
          email: 'kris@theredhead.nl'
        }
      ]
    },
    {
      name: 'Red.Net(dotnetcore)',
      href: 'https://github.com/theredhead/Red.Net-dotnetcore-',
      description: 'A library of c# classes and extension methods intended to reduce the need for boilerplate code.',
      authors: [
        {
          name: 'Kris Herlaar', 
          email: 'kris@theredhead.nl'
        }
      ]
    },
    {
      name: 'XSLTool',
      href: 'https://github.com/theredhead/XSLTool',
      description: 'A windows desktop app to make working with xslt a little easier.',
      authors: [
        {
          name: 'Kris Herlaar', 
          email: 'kris@theredhead.nl'
        }
      ]
    }
  ];
  
  constructor() { }

  public getProjects() : Observable<IProject[]> {
    return of(this._projects);
  }
}
