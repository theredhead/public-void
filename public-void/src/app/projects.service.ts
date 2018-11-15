import { Injectable } from '@angular/core';
import { IProject, IAuthor } from 'src/Logic/IProject';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private kris : IAuthor = {
    name: 'Kris Herlaar',
    email: 'kris@theredhead.nl'
  };

  private _projects : IProject[] = [
    {
      name: 'Cappuccino Project',
      href: 'http://www.cappuccino-project.org/',
      demo: 'http://www.cappuccino-project.org/',
      description: 'the cappuccino project provides a stable framework that allows you to build desktop caliber applications that happen to run in the browser.',
      authors: [

      ]
    },
    {
      name: 'public-void.net',
      href: 'https://github.com/theredhead/public-void',
      demo: 'https://www.public-void.net',
      description: 'This website as a showcase of the things I\'m working on and projects I think are cool.',
      authors: [this.kris]
    },
    { 
      name: 'red.web (php)', 
      href: 'https://github.com/theredhead/Red.Web', 
      demo: 'https://www.private-void.net', 
      description: '[ASP.NET](https://www.asp.net/) webforms like framework in php with Eventdriven, databound templating and routing.',
      authors: [this.kris]
    },
    { 
      name: 'design-an-app', 
      demo: 'https://www.design-an-app.com',
      description: 'An application that lets you visually design your data structures and generate an application project with a database from it.',
      authors: [this.kris]
    },
    {
      name: 'TypedUI',
      href: 'https://github.com/theredhead/Red.Web',
      demo: 'http://typedui.theredhead.nl/',
      description: 'Weekend project attempting to create a windowing framework for the browser in typescript, inspired by Cappuccino. The demo is a minimal XSLTool running in the browser',
      authors: [this.kris]
    },
    {
      name: 'modeler',
      demo: 'http://modeler.theredhead.nl/',
      // href: 'http://modeler.theredhead.nl/',
      description: 'An early testbed visual entity designer',
      authors: [this.kris]
    },
    {
      name: 'Red.Net(dotnetcore)',
      href: 'https://github.com/theredhead/Red.Net-dotnetcore-',
      description: 'A library of c# classes and extension methods intended to reduce the need for boilerplate code.',
      authors: [this.kris]
    },
    {
      name: 'XSLTool',
      href: 'https://github.com/theredhead/XSLTool',
      description: 'A windows desktop app to make working with xslt a little easier.',
      authors: [this.kris]
    },
    {
      name: 'ImageBase64',
      href: 'https://github.com/theredhead/ImageBase64',
      description: 'Mac OS X drag and drop tool to base64 encode images, to make embedding them in stylesheets easy.',
      authors: [this.kris]
    }
  ];
  constructor() { }

  public getProjects() : Observable<IProject[]> {
    return of(this._projects);
  }
}
