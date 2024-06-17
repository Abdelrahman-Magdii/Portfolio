import { Component, OnInit } from '@angular/core';
import { reserved } from '../../../models/reserved-words';
import { localStorageKeys } from '../../../models/local-storage-keys';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})

export class TopbarComponent implements OnInit {

  mode: string = reserved.darkMode;
  element: any;
  constructor() { }

  ngOnInit(): void {
    this.element = document.documentElement;
    if (localStorage.getItem(localStorageKeys.themeMode)) this.mode = localStorage.getItem(localStorageKeys.themeMode)!;
    this.changeMode(this.mode)
  }

  modeKey: { light: string; dark: string } = {
    dark: reserved.darkMode,
    light: reserved.lightMode,
  };

  changeMode(mode: string) {
    this.mode = mode;
    switch (mode) {
      case reserved.lightMode:
        document.body.setAttribute("mode", reserved.lightMode);
        this.element.setAttribute("mode", reserved.lightMode);
        localStorage.setItem(localStorageKeys.themeMode, reserved.lightMode);
        break;
      case reserved.darkMode:
        document.body.setAttribute("mode", reserved.darkMode);
        this.element.setAttribute("mode", reserved.darkMode);
        localStorage.setItem(localStorageKeys.themeMode, reserved.darkMode);
        break;
      default:
        document.body.setAttribute("mode", reserved.darkMode);
        break;
    }
  }

}
