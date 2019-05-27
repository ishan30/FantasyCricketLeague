import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid-community';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  private gridOptions: GridOptions;

  constructor() {
    this.gridOptions =  {} as GridOptions;
    this.gridOptions.columnDefs = [
        {
            headerName: 'Rankings(MVP)',
            field: 'id'
            // width: 100
        },
        {
          headerName: 'Player Name',
          field: 'pNmae'
        },
        {
          headerName: 'Country',
          field: 'country'
        },
        {
            headerName: 'Runs',
            field: 'value'
            // width: 100
        },

    ];
    this.gridOptions.rowData = [
        {id: 5, pNmae: 'Virat Kohli', country: 'India', value: 10},
        {id: 10, pNmae: 'Kane Williamson', country: 'New ZeaLand', value: 15},
        {id: 15, pNmae: 'Jason Roy', country: 'England', value: 20}
    ];
  }

  ngOnInit() {
  }

}
