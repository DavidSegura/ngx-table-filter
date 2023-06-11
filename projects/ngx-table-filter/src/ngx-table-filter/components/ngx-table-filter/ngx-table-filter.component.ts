import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { INgxItemFilter, INgxTableOptions } from '../../interfaces/config.interface';

@Component({
  selector: 'ngx-table-filter',
  templateUrl: './ngx-table-filter.component.html',
  styleUrls: ['./ngx-table-filter.component.css']
})
export class NgxTableFilterComponent implements OnInit {
  public itemsFilters: { [key: string]: INgxItemFilter[] } = {};
  public data: any[] = [];
  private applyFilters: { [key: string]: string[] | number[] } = {};
  private fileName: string = "csv_";

  @Input() items: any[] = [];
  @Input() options: INgxTableOptions = [];
  @Input() exportCSV: boolean = true;

  constructor(private datePipe: DatePipe) {}

  public ngOnInit(): void {
    this.data = this.items;
    this.ngOnInitFilter();
  }

  public onChangeFilter(key: string, filter: INgxItemFilter[] | INgxItemFilter): void {
    if (Array.isArray(filter)) {
      const f = filter.map((item: INgxItemFilter) => item.value);

      this.applyFilters[key] = f;
    }

    this.ngOnFilter();
  }

  public exportCsv(): void {
    let csv = '';

    /* Header CSV */
    for(let col in this.options) {
      csv += this.options[col].label + ';';
      csv = csv.replace(/\n/g, '');
    }
    /****************/

    csv = csv.substring(0, csv.length - 1) + '\n';

    const rows = this.data;

    /* Body CSV */
    for (let row = 0; row < rows.length; row++) {
      for(let col in rows[row]){
        csv += rows[row][col] + ';';
      }
      csv = csv.substring(0, csv.length - 1) + '\n';
    }
    /************/

    csv = csv.substring(0, csv.length - 1) + '\n';
    const docElement = document.createElement('a');
    const universalBOM = '\uFEFF';
  
    var date = new Date();
    let filename = this.fileName;
    filename = filename.concat(this.datePipe.transform(date,"yyyy-MM-dd")!.toString());
    const fileNameWithType = filename.concat('.csv');
    docElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(universalBOM + csv);
    docElement.target = '_blank';
    docElement.download = fileNameWithType;
    docElement.click();
  }

  private ngOnInitFilter(): void {
    if (this.items.length) {

      for (let option in this.options) {
        const key = this.options[option].attr;
        this.applyFilters[key] = [];

        /* this.itemsFilters[key] = */
          const arrDuplicates = this.items.map((item: any) => {
            return <INgxItemFilter>{ value: item[key], label: item[key] }
          });
        
          const arrNotDuplicates = <INgxItemFilter[]>this.getUniqueListBy(arrDuplicates);

          this.itemsFilters[key] = arrNotDuplicates;
      }
    }
  }

  private ngOnFilter(): void {
    var arrDataFilter = this.items;
    this.data = this.items;

    for (let filter in this.applyFilters) {
      if (this.applyFilters[filter].length > 0 ) {
        this.data = arrDataFilter.filter((item: any) => {
          const PATTERN = item[filter];
          return this.applyFilters[filter].indexOf(<never>PATTERN) !== -1 ? true : false;
        });

        arrDataFilter = this.data;
      }

    }
  }

  private getUniqueListBy(arr: any) {
    return arr.filter(
      (item: INgxItemFilter, index: number) => index === arr.findIndex(
        (find:INgxItemFilter) => item.value === find.value
          && item.value === find.value
      ));
  }
}
