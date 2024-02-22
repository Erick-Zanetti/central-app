import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskRelease } from "src/app/models/task-release";
import { MainService } from "src/app/services/main.service";

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
      this.form.get('task')?.setValue(this.data.release?.task);
      this.form.get('time')?.setValue(this.data.release?.hours + ':' + this.data.release?.minutes);
    }
  }

  createForm() {
    this.form = new FormGroup({
      task: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      time: new FormControl('', [Validators.required]),
    });
  }

  save() {
    if (this.form.valid) {
      const form = this.form.getRawValue();

      const release: TaskRelease = Object.assign((this.data.release || {}), { month: this.data.month });
      release.task = form.task;
      const time = form.time.split(':');
      release.hours = Number(time[0]);
      release.minutes = Number(time[1]);

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

  private update(release: TaskRelease) {
    this.mainService.update(release._id, release).subscribe({
      complete: () => {
        this._snackBar.open('Lançamento atualizado com sucesso!', '', {
          duration: 5000
        });
        this.onNoClick(true);
      },
      error: (error: any) => {
        this._snackBar.open('Falha ao salvar. Tente novamente', 'X', {
          duration: 5000
        });
      }
    });
  }

  private create(release: TaskRelease) {
    this.mainService.create(release).subscribe({
      complete: () => {
        this._snackBar.open('Lançamento salvo com sucesso!', '', {
          duration: 5000
        });
        this.onNoClick(true);
      },
      error: (error: any) => {
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
