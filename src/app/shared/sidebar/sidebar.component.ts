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
      // icon: './../../../assets/images/sidebar/Home.svg',
      icon: 'fa-solid fa-house',
      link: '/dashboard/home'
    },
    {
      title: 'Inventory',
      // icon: './../../../assets/images/sidebar/Inventory.svg',
      icon: 'fa-solid fa-truck-ramp-box',
      link: '/dashboard/inventory'
    },
    {
      title: 'Reports',
      // icon: './../../../assets/images/sidebar/Report.svg',
      icon:'fa-regular fa-clipboard',
      link: '/dashboard/reports'
    },
    {
      title: 'Suppliers',
      // icon: './../../../assets/images/sidebar/Suppliers.svg',
      icon: 'fa-regular fa-user',
      link: '/dashboard/suppliers'
    },
    {
      title: 'Orders',
      // icon: './../../../assets/images/sidebar/Order.svg',
      icon: 'fa-solid fa-border-all',
      link: '/dashboard/orders'
    },
    {
      title: 'Manage Store',
      // icon: './../../../assets/images/sidebar/Manage Store.svg',
      icon: 'fa-solid fa-sim-card',
      link: '/dashboard/manage-store'
    }
  ]

  settingMenu:IMenu[] = [
    {
      title: 'Settings',
      // icon: './../../../assets/images/sidebar/Manage Store.svg',
      icon: 'fa-solid fa-gear',
      link: '/dashboard/setting'
    }
  ]

}
