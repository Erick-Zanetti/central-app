import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as moment from "moment";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MonthLabelPipeModule } from 'src/pipes/month-label/month-label.module';
import { ModalConfirmationModule } from '../modal-confirmation/modal-confirmation.module';
import { ModalReleaseComponentDialog } from './modal-release.component';

class ModalReleaseModuleDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
    // use what format you need
    return moment(date).format('DD MMM');
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule,
    MonthLabelPipeModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    ModalConfirmationModule,
  ],
  declarations: [
    ModalReleaseComponentDialog
  ],
  exports: [
    ModalReleaseComponentDialog
  ],
  providers: [
    { provide: DateAdapter, useClass: ModalReleaseModuleDateAdapter }
  ]
})
export class ModalReleaseModule {

}
