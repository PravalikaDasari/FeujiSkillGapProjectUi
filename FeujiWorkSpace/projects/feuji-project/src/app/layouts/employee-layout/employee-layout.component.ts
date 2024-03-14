import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.css'
})
export class EmployeeLayoutComponent {

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


