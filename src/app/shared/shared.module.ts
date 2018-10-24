import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MeService } from './me.service';
import { TabService } from './tab.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    providers: [MeService, TabService, DatePipe],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
