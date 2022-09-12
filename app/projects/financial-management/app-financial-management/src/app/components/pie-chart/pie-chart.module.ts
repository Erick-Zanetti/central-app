import { PieChartComponent } from './pie-chart.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { NgChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        NgChartsModule
    ],
    declarations: [
        PieChartComponent
    ],
    exports: [
        PieChartComponent
    ]
})
export class PieChartModule {

}