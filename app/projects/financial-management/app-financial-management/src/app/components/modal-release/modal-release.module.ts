import { MonthLabelPipeModule } from './../../pipes/month-label/month-label.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ModalReleaseComponentDialog } from './modal-release.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    ],
    declarations: [
        ModalReleaseComponentDialog
    ],
    exports: [
        ModalReleaseComponentDialog
    ]
})
export class ModalReleaseModule {

}