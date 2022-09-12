import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
    ],
    declarations: [
        ListComponent
    ],
    exports: [
        ListComponent
    ]
})
export class ListModule {

}