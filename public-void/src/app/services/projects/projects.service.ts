import { Injectable } from '@angular/core';
import { IProject } from 'src/Logic/IProject';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private _projects: IProject[] = [
    {
      name: 'red.web (php)',
      platform: 'web',
      tags: ['php', 'framework'],
      href: 'https://github.com/theredhead/Red.Web',
      demo: 'https://www.private-void.com',
      description: `[ASP.NET webforms](https://www.asp.net/web-forms) like framework in php with
                    Eventdriven, databound templating and routing.
                    A project that I last actively worked on back in 2012 with serverside features,
                    very similar to what [angular](https://angular.io) now offers on the client.
                    Recently updated to work with the latest [PHP](https://www.php.net) release`,
      authors: [
        {
          name: 'Kris Herlaar',
          email: 'kris@theredhead.nl'
        }
      ]
    },
    {
      name: 'design-an-app',
      platform: 'web',
      tags: ['application', 'development'],
      demo: 'https://www.design-an-app.com',
      description: `An application that lets you visually design your data structures and generate an
                    application project with a database from it.`,
      authors: [
        {
          name: 'Kris Herlaar',
          email: 'kris@theredhead.nl'
        }
      ]
    },
    {
      name: 'Red.Net(dotnetcore)',
      platform: 'dotnetcore',
      tags: ['library', 'data access'],
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
      platform: 'Windows',
      tags: ['application', 'development'],
      href: 'https://github.com/theredhead/XSLTool',
      description: 'A windows desktop app to make working with xslt a little easier.',
      authors: [
        {
          name: 'Kris Herlaar',
          email: 'kris@theredhead.nl'
        }
      ]
    },
    {
      name: 'ImageBase64',
      platform: 'Mac OS X',
      tags: ['application', 'development'],
      href: 'https://github.com/theredhead/ImageBase64',
      description: `A simple drang and drop tool to create css embeddable image resources from images on your computer.`,
      authors: [
        {
          name: 'Kris Herlaar',
          email: 'kris@theredhead.nl'
        }
      ]
    },
    {
      name: 'Cappuccino',
      platform: 'web',
      tags: ['framework', 'development'],
      href: 'https://www.cappuccino-project.org',
      description: `Probably the coolest framework project you could ever run into; Cappuccino makes it easy for you
                    to write real desktop class applications that happen to run in the browser. It includes
                    everything you'd expect from a desktop framework, even complete window management and an undo stack.
                    [Here's a really cool demo/test/showcase app](http://www.segi.be/Aristo3Showcase/index.html)
                    `
    }

  ];

  constructor() { }

  public getProjects(): Observable<IProject[]> {
    return of(this._projects);
  }
}
