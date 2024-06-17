import { Component } from '@angular/core';
import { headerTabs } from '../../../models/header-tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  activeTab: string = headerTabs.home;

  setActiveTab(tab: string) {
    this.activeTab = tab
  }

}
