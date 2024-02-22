import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TaskRelease } from 'src/app/models/task-release';
import { MainService } from 'src/app/services/main.service';
import { formatTime } from 'src/utils/format-time';
import { ModalConfirmationComponentDialog } from '../modal-confirmation/modal-confirmation.component';
import { ModalReleaseComponentDialog } from '../modal-release/modal-release.component';

@Component({
  selector: 'app-releases',
  templateUrl: 'releases.component.html',
  styleUrls: ['releases.component.scss']
})

export class ReleasesComponent implements OnInit {

  month = new Date().getMonth();
  year = new Date().getFullYear();

  totalHours = '';

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = ['task', 'time', 'action'];
  dataSource: MatTableDataSource<any>;

  private colors = [
    '#7986cb',
    '#4fc3f7',
    '#e57373',
    '#4db6ac',
    '#ba68c8',
    '#f06292',
    '#9575cd',
    '#4dd0e1',
    '#81c784',
    '#dce775',
    '#aed581',
    '#fff176',
    '#ffb74d',
    '#ffd54f',
    '#64b5f6',
    '#ff8a65'
  ];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public pieChartType: ChartType = 'pie';
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: this.colors,
      hoverBackgroundColor: this.colors,
      hoverBorderColor: this.colors,
    }]
  };

  constructor(
    private dialog: MatDialog,
    private mainService: MainService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.searc();
  }

  searc() {
    this.mainService.getTasks(this.month, this.year).subscribe((data: any[]) => {
      let totalHours = 0;
      let totalMinutes = 0;
      data?.forEach((task) => {
        task.time = formatTime(task.hours) + ':' + formatTime(task.minutes);
        totalHours += task.hours || 0;
        totalMinutes += task.minutes || 0;
        return task;
      });
      totalHours += Math.floor(totalMinutes / 60);
      totalMinutes = totalMinutes % 60;
      this.totalHours = formatTime(totalHours) + ':' + formatTime(totalMinutes);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;

      this.pieChartData.labels = data.map(i => i.task);

      this.pieChartData.datasets[0].data = data.map(i => {
        return i.hours + (i.minutes / 60);
      });
      this.chart?.update();
    });
  }

  openModalReleaseComponentDialog(isNew: boolean, release?: TaskRelease) {
    const dialogRef = this.dialog.open(ModalReleaseComponentDialog, {
      width: '320px',
      data: {
        new: isNew,
        release: JSON.parse(JSON.stringify(release || {})),
        month: {
          month: this.month,
          year: this.year
        },
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.searc();
      }
    });
  }

  remove(id: string) {
    const dialogRef = this.dialog.open(ModalConfirmationComponentDialog, {
      width: '320px',
      data: {
        title: 'Deseja realmente remover esse lançamento ? '
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mainService.remove(id).subscribe({
          complete: () => {
            this._snackBar.open('Lançamento removido com sucesso!', '', {
              duration: 5000
            });
            this.searc();
          },
          error: (error) => {
            this._snackBar.open('Falha ao remover. Tente novamente', 'X', {
              duration: 5000
            });
          }
        });
      }
    });
  }
}
