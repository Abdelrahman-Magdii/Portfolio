import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent},
    { path: 'about', component:AboutComponent},
    { path: 'contact', component:ContactComponent},
    {path:'skills', component:SkillsComponent},
    { path: 'projects', component:ProjectsComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
