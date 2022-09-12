import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-modal-release',
    templateUrl: 'modal-release.component.html',
})
export class ModalReleaseComponentDialog {

    constructor(
        public dialogRef: MatDialogRef<ModalReleaseComponentDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}