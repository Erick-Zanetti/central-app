import { FinancialRelease } from './../../models/FinancialRelease';
import { ChartData } from './../../../../node_modules/chart.js/types/index.esm.d';
import { Component, Input, ViewChild } from "@angular/core";
import { ChartType, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    public barChartType: ChartType = 'bar';
    public barChartOptions: ChartConfiguration['options'] = {
        indexAxis: 'y',
        responsive: false,
        plugins: {
            legend: {
                display: true,
            },
        }
    };

    public barChartData: ChartData<'bar'> = {
        labels: [''],
        datasets: [
            { data: [50], label: 'Receitas', backgroundColor: ['#4caf50'], hoverBackgroundColor: ['#43a047'], borderColor: ['#43a047'] },
            { data: [30], label: 'Despesas', backgroundColor: ['#f44336'], hoverBackgroundColor: ['#e53935'], borderColor: ['#e53935'] }
        ]
    };

    // @Input()
    // set list(list: FinancialRelease[]) {
    //     this.chart?.update();
    // }
}