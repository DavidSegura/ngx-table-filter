import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTableFilterComponent } from './components/ngx-table-filter/ngx-table-filter.component';

import { NgSelectModule } from '@ng-select/ng-select';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    NgxTableFilterComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule
  ],
  exports: [
    NgxTableFilterComponent
  ],
  providers: [DatePipe]
})
export class NgxTableFilterModule { }
