import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListItemComponent } from './project-list/project-list-item/project-list-item.component';
import { angularMaterialModules } from './ng-material/ng-material.module';
import { GravatarModule } from './gravatar/gravatar.module';
import { MarkdownModule } from './markdown/markdown.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    HomePageComponent,
    ProjectsPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    GravatarModule,
    MarkdownModule,
    ...angularMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
