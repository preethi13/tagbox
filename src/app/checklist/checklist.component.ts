import { Component, OnInit } from '@angular/core';
import { HttpUtilityService } from '../utility/http-utility.service';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  providers: [HttpUtilityService, DatePipe, MessageService]
})
export class ChecklistComponent implements OnInit {
  checklists: any;
  cols: { field: string; header: string; }[];
  showDialog: boolean;
  newRow = {};

  constructor(private httpService: HttpUtilityService, private datePipe: DatePipe,private messageService:MessageService) { }

  ngOnInit() {
    this.httpService.getData('./assets/jsons/checklist.json').subscribe(data => {
      this.checklists = data;
    }, error => {
      console.log('error while fetching data');
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'createdOn', header: 'Creation Date' },
      { field: 'updatedOn', header: 'Updated Date' },
    ];
  }

  save() {
    this.newRow['createdOn'] = this.datePipe.transform(new Date(), 'dd-MMM-y HH:mm:ss z');
    this.newRow['updatedOn'] = this.datePipe.transform(new Date(), 'dd-MMM-y HH:mm:ss z');
    this.checklists.push(this.newRow);
    this.showDialog = false;
    this.newRow = {}
    this.messageService.add({severity:'success', summary: 'Success', detail:'created Successfully'});
  }
  cancel() {
    this.showDialog = false;
  }
}

