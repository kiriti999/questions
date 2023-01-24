import { Component, OnInit } from '@angular/core';

interface Status {
  name: string,
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  statuses: Status[];
  selectedType: string | undefined;
  selectedStatus: Status | undefined;
  mapList: any[];
  items: any[];

  constructor() {

    this.selectedType = "map";
    this.mapList = [{ label: 'Map', value: 'map' }, { label: 'List', value: 'list' }];

    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.statuses = [
      { name: 'Status 1', code: '1' },
      { name: 'Status 2', code: '2' },
      { name: 'Status 3', code: '3' },
      { name: 'Status 4', code: '4' },
      { name: 'Status 5', code: '5' }
    ];
  }

  ngOnInit(): void {
    console.log('on init - home component');
  }

}
