import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxTableFilterComponent } from './components/ngx-table-filter/ngx-table-filter.component';

import { NgSelectModule } from '@ng-select/ng-select';

import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    NgxTableFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [
    NgxTableFilterComponent
  ],
  providers: [DatePipe, CookieService]
})
export class NgxTableFilterModule { }
