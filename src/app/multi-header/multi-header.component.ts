import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-multi-header',
    templateUrl: './multi-header.component.html',
    styleUrls: ['./multi-header.component.scss']
})

export class MultiHeaderComponent {
    private gridApi;
    private gridColumnApi;

    private columnDefs;
    private defaultColDef;
    private rowData: any;

    constructor(private http: HttpClient) {
        this.columnDefs = [
            {
                headerName: 'Athlete Details',
                children: [
                    {
                        headerName: 'Athlete',
                        field: 'athlete',
                        width: 180,
                        filter: 'agTextColumnFilter',
                    },
                    {
                        headerName: 'Age',
                        field: 'age',
                        width: 90,
                        filter: 'agNumberColumnFilter',
                    },
                    {
                        headerName: 'Country',
                        field: 'country',
                        width: 140,
                    },
                ],
            },
            {
                headerName: 'Sports Results',
                children: [
                    {
                        headerName: 'Sport',
                        field: 'sport',
                        width: 140,
                    },
                    {
                        headerName: 'Total',
                        columnGroupShow: 'closed',
                        field: 'total',
                        width: 100,
                        filter: 'agNumberColumnFilter',
                    },
                    {
                        headerName: 'Gold',
                        columnGroupShow: 'open',
                        field: 'gold',
                        width: 100,
                        filter: 'agNumberColumnFilter',
                    },
                    {
                        headerName: 'Silver',
                        columnGroupShow: 'open',
                        field: 'silver',
                        width: 100,
                        filter: 'agNumberColumnFilter',
                    },
                    {
                        headerName: 'Bronze',
                        columnGroupShow: 'open',
                        field: 'bronze',
                        width: 100,
                        filter: 'agNumberColumnFilter',
                    },
                ],
            },
        ];
        this.defaultColDef = {
            sortable: true,
            resizable: true,
            filter: true,
        };
    }



    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        this.http
            .get(
                'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
            )
            .subscribe(data => {
                this.rowData = data;
            });
    }
}
