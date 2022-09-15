import { ModalConfirmationComponentDialog } from './modal-confirmation.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
    ],
    declarations: [
        ModalConfirmationComponentDialog
    ],
    exports: [
        ModalConfirmationComponentDialog
    ]
})
export class ModalConfirmationModule {

}