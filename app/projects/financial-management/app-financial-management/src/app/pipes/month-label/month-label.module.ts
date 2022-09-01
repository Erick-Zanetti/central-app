import { NgModule } from "@angular/core";
import { MothLabelPipe } from "./month-label.pipe";

@NgModule({
    imports: [
    ],
    declarations: [
        MothLabelPipe
    ],
    exports: [
        MothLabelPipe
    ]
})
export class MonthLabelPipeModule { }