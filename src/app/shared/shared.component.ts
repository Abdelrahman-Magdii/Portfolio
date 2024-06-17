import { Component } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppComponent } from '../app.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [
    TopbarComponent,
    SidebarComponent,
    TabsComponent,
    RouterOutlet
  ],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})


export class SharedComponent {

}
