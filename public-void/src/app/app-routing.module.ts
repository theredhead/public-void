import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { MacOsPageComponent } from './pages/software/mac-os-page/mac-os-page.component';
import { WindowsPageComponent } from './pages/software/windows-page/windows-page.component';
import { WebPageComponent } from './pages/software/web-page/web-page.component';
import { SupportPageComponent } from './pages/software/support-page/support-page.component';
import { DesignerPageComponent } from './pages/designer-page/designer-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'designer', component: DesignerPageComponent },

  { path: 'software/mac', component: MacOsPageComponent },
  { path: 'software/win', component: WindowsPageComponent },
  { path: 'software/web', component: WebPageComponent },

  { path: 'support', component: SupportPageComponent },

  { path: 'credits', component: CreditsPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
