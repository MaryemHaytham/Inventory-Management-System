import { Component } from '@angular/core';

interface IMenu {
  title: string,
  icon: string,
  iconActive: string,
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
      icon: './src/assets/images/sidebar/Home.svg',
      iconActive: 'src/assets/images/sidebar/Home.svg',
      link: '/dashboard'
    },
    {
      title: 'Inventory',
      icon: './src/assets/images/sidebar/Inventory.svg',
      iconActive: './src/assets/images/sidebar/Inventory.svg',
      link: '/'
    },
  ]

}
