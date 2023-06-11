import { Component } from '@angular/core';
import { INgxTableConfig, INgxTableOptions } from 'projects/ngx-table-filter/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data = [
    { id: 1, contructor_site_name: "Escorial", waster_center_name: "Ecoembes" },
    { id: 2, contructor_site_name: "Baricentro", waster_center_name: "Reciclajes Pepito" },
    { id: 3, contructor_site_name: "RLE", waster_center_name: "Ecoembes" },
    { id: 4, contructor_site_name: "Teatro", waster_center_name: "Planta procesado Antonio" },
    { id: 5, contructor_site_name: "RLE", waster_center_name: "Plantas Pedro" }
  ];

  public options: INgxTableOptions = [
    {
      label: "Id",
      attr: "id",
      showFilter: true,
      multiple: true
    },
    {
      label: "Obra",
      attr: "contructor_site_name",
      showFilter: true,
      multiple: true
    },
    {
      label: "Centro de reciclaje",
      attr: "waster_center_name",
      showFilter: true,
      multiple: true
    }
  ]
}
