import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  label: string;
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Audit Management System',
          icon: 'pi pi-pw pi-folder',
          items: [
            {
                  label: 'Check Lists',
                  command: (event) => {
                    this.label = event.item.label;
                    console.log('label', this.label);
                  },
                  routerLink: ['/checklist']
                },
                {label: 'Reports',
                command: (event) => {
                  this.label = event.item.label;
                  console.log('label', this.label);
                },
                routerLink: ['/reports']
              }
          ]
      },
      {
          label: 'Vendor Management',
          icon: 'pi pi-fw pi-folder-open',
          items: [
              {label: 'Manage Vendor',command: (event) => {
                this.label = event.item.label;
                console.log('label', this.label);
              }, routerLink: ['/vendor']}
          ]
      }
  ];
  }

}
