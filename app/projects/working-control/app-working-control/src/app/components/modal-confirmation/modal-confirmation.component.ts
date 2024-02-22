import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-modal-confirmation',
    templateUrl: 'modal-confirmation.component.html',
})
export class ModalConfirmationComponentDialog implements OnInit {

    form: FormGroup

    constructor(
        public dialogRef: MatDialogRef<ModalConfirmationComponentDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit() {
    }

    onNoClick(saved?: boolean): void {
        this.dialogRef.close(saved);
    }
}