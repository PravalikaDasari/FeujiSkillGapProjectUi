import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrl: './manager-layout.component.css'
})
export class ManagerLayoutComponent {

  @Input() showDashboard: boolean = false;
  menuOptions: string[] = [];

  updateMenuOptions(options: string[]) {
    this.menuOptions = options;
  }

  toggleSubmenu(submenuClass: string) {
    const submenu = document.querySelector(`.${submenuClass}`);
    if (submenu) {
      submenu.classList.toggle('show');
    }
  }

}
