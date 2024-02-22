import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ModalReleaseModule } from '../modal-release/modal-release.module';
import { ReleasesComponent } from './releases.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ModalReleaseModule,
    NgxMatTimepickerModule,
    NgChartsModule,
    MatSortModule,
  ],
  exports: [ReleasesComponent],
  declarations: [ReleasesComponent],
  providers: [],
})
export class ReleasesModule { }
