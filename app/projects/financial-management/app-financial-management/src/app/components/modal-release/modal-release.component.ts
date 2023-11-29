import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FinancialRelease } from './../../models/FinancialRelease';
import { MainService } from './../../services/main.service';

@Component({
    selector: 'app-modal-release',
    templateUrl: 'modal-release.component.html',
    styles: [`
    ::ng-deep {
      .without-monthyear {
        .mat-calendar-controls {
          display: none;
        }
      }
    }
    `]
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
            this.form.get('day')?.setValue(new Date(this.data?.month?.yaer, this.data?.month?.month, this.data?.month?.day));
        }
    }

    createForm() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
            value: new FormControl(0, [Validators.required, Validators.min(0)]),
            day: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(31)]),
        })
    }

    save() {
        if (this.form.valid) {
            const form = this.form.getRawValue();
            const release: FinancialRelease = Object.assign((this.data.release || {}), form, { month: this.data.month }, { type: this.data.type });
            release.month.day = form.day.getDate();
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
