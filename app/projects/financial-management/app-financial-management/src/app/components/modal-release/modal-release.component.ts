import { CurrencyMaskConfig } from './../../../../node_modules/ng2-currency-mask/lib/currency-mask.config.d';
import { MainService } from './../../services/main.service';
import { FinancialRelease } from './../../models/FinancialRelease';
import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-modal-release',
    templateUrl: 'modal-release.component.html',
})
export class ModalReleaseComponentDialog implements OnInit {

    form: FormGroup

    constructor(
        public dialogRef: MatDialogRef<ModalReleaseComponentDialog>,
        private mainService: MainService,
        private _snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit() {
        this.createForm();
        if (!this.data.new) {
            this.form.get('name')?.setValue(this.data.release?.name);
            this.form.get('value')?.setValue(this.data.release?.value);
        }
    }

    createForm() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
            value: new FormControl(0, [Validators.required, Validators.min(0)])
        })
    }

    save() {
        if (this.form.valid) {
            const release: FinancialRelease = Object.assign((this.data.release || {}), this.form.getRawValue(), { month: this.data.month }, { type: this.data.type });
            if (this.data.new) {
                this.create(release);
            } else {
                this.update(release);
            }
        } else {
            this.form.markAllAsTouched();
            this._snackBar.open('Campos invalidos!', 'X', {
                duration: 5000
            });
        }
    }

    private update(release: FinancialRelease) {
        this.mainService.update(release._id, release).subscribe({
            complete: () => {
                this._snackBar.open('Lançamento atualizado com sucesso!', '', {
                    duration: 5000
                });
                this.onNoClick(true);
            },
            error: (error) => {
                this._snackBar.open('Falha ao salvar. Tente novamente', 'X', {
                    duration: 5000
                });
            }
        });
    }

    private create(release: FinancialRelease) {
        this.mainService.create(release).subscribe({
            complete: () => {
                this._snackBar.open('Lançamento salvo com sucesso!', '', {
                    duration: 5000
                });
                this.onNoClick(true);
            },
            error: (error) => {
                this._snackBar.open('Falha ao salvar. Tente novamente', 'X', {
                    duration: 5000
                });
            }
        });
    }

    onNoClick(saved?: boolean): void {
        this.dialogRef.close(saved);
    }
}