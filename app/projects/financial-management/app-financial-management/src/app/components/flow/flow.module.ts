import { BarChartModule } from './../bar-chart/bar-chart.module';
import { ListModule } from './../list/list.module';
import { CommonModule } from '@angular/common';
import { FlowComponent } from './flow.component';
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalReleaseModule } from '../modal-release/modal-release.module';
import { PieChartModule } from '../pie-chart/pie-chart.module';

@NgModule({
    imports: [
        CommonModule,
        ListModule,
        FlexLayoutModule,
        ModalReleaseModule,
        PieChartModule,
        BarChartModule
    ],
    declarations: [
        FlowComponent
    ],
    exports: [
        FlowComponent
    ]
})
export class FlowModule {

}