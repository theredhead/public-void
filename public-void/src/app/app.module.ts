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
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { MacOsPageComponent } from './pages/software/mac-os-page/mac-os-page.component';
import { WindowsPageComponent } from './pages/software/windows-page/windows-page.component';
import { WebPageComponent } from './pages/software/web-page/web-page.component';
import { SupportPageComponent } from './pages/software/support-page/support-page.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { IconComponent } from './icon/icon.component';
import { FilterPipe } from './filter.pipe';
import { IconSearchComponent } from './icon-search/icon-search.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DesignerPageComponent } from './pages/designer-page/designer-page.component';
import { DocumentViewComponent } from './pages/designer-page/document-view/document-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    HomePageComponent,
    ProjectsPageComponent,
    NotFoundPageComponent,
    MainNavigationComponent,
    CreditsPageComponent,
    MacOsPageComponent,
    WindowsPageComponent,
    WebPageComponent,
    SupportPageComponent,
    SiteFooterComponent,
    IconComponent,
    FilterPipe,
    IconSearchComponent,
    VirtualScrollComponent,
    DesignerPageComponent,
    DocumentViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    GravatarModule,
    MarkdownModule,
    ...angularMaterialModules,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
