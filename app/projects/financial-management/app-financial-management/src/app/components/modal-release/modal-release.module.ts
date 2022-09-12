import { MatButtonModule } from '@angular/material/button';
import { ModalReleaseComponentDialog } from './modal-release.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
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