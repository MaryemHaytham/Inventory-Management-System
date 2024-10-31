import { Component } from '@angular/core';

interface IMenu {
  title: string,
  icon: string,
  link: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menu: IMenu[] = [
    {
      title: 'Dashobard',
      icon: 'fa-solid fa-house',
      link: '/dashboard/home'
    },
    {
      title: 'Inventory',
      icon: 'fa-solid fa-truck-ramp-box',
      link: '/dashboard/inventory'
    },
    {
      title: 'Reports',
      icon:'fa-regular fa-clipboard',
      link: '/dashboard/reports'
    },
    {
      title: 'Suppliers',
      icon: 'fa-regular fa-user',
      link: '/dashboard/suppliers'
    },
    {
      title: 'Orders',
      icon: 'fa-solid fa-border-all',
      link: '/dashboard/orders'
    },
    {
      title: 'Manage Store',
      icon: 'fa-solid fa-sim-card',
      link: '/dashboard/store'
    }
  ]

  settingMenu:IMenu[] = [
    {
      title: 'Settings',
      icon: 'fa-solid fa-gear',
      link: '/dashboard/setting'
    }
  ]

}
