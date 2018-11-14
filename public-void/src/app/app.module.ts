import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListItemComponent } from './project-list/project-list-item/project-list-item.component';
import { angularMaterialModules } from './ng-material/ng-material.module';
import { GravatarModule } from './gravatar/gravatar.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    GravatarModule,
    ...angularMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
