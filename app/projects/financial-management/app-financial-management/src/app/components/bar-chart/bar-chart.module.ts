import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
    imports: [
        CommonModule,
        NgChartsModule
    ],
    declarations: [
        BarChartComponent
    ],
    exports: [
        BarChartComponent
    ]
})
export class BarChartModule {

}