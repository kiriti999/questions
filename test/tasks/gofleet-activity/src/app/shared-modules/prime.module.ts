import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  exports: [
    DropdownModule,
    InputTextModule,
    SelectButtonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ProgressBarModule,
    CheckboxModule,
    ProgressBarModule
  ]
})
export class PrimeNG { }
